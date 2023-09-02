import { useContext, useEffect, useMemo, useState } from 'react';

import { ChatContext } from '../../../common/context/chat';
import { ChatSidebarHeader } from '../chat-sidebar-header';
import { chatsDataHelper } from '../../helpers';
import { TimePeriodChats } from '../chat-sidebar-time-period-chats';
import { SidebarClearChats } from '../chat-sidebar-clear-chats';
import { useGetAllSessionBySecretQuery } from '../../../../store/apis/sessionAPI';
import { StorageContext } from '../../../common/context/storage';
import { ChatList, ChatListBox, Sidebar } from '../../styles';
import { ISession } from '../../../common/types';

export const ChatSidebar = () => {
  const { isSidebarOpen } = useContext(ChatContext);

  const { activeEmail, activeSessionSecret, updateActiveSessionSecret } =
    useContext(StorageContext);
  const [first, setfirst] = useState(true);

  const { data, error, isLoading } = useGetAllSessionBySecretQuery(
    {
      session_secret: activeSessionSecret,
      email: activeEmail,
    },
    {
      skip: !activeSessionSecret || !activeEmail,
    },
  );

  useEffect(() => {
    if (error) {
      setfirst(false);
      return;
    }
    setfirst(Boolean(data?.sessions.length));
  }, [data, error]);

  const setAvailableSessionSecret = (sessionSecret: string) => {
    const availableSession = data?.sessions.find(
      (el) => el.session_secret !== sessionSecret,
    );
    if (availableSession) {
      updateActiveSessionSecret(availableSession.session_secret);
    }
  };

  const { chats30DaysAgo, chats7DaysAgo, chatsYesterday, chatsToday } =
    useMemo(() => {
      return error ? chatsDataHelper([]) : chatsDataHelper(data?.sessions);
    }, [data?.sessions, error]);

  const renderTimePeriodChats = (
    title: string,
    chats: ISession[],
    reverse = false,
  ) => (
    <TimePeriodChats
      setAvailableSessionSecret={setAvailableSessionSecret}
      title={title}
      chats={reverse ? chats.reverse() : chats}
    />
  );

  return (
    <>
      {!isLoading && (
        <Sidebar isOpen={isSidebarOpen}>
          <ChatListBox isOpen={isSidebarOpen}>
            <ChatSidebarHeader />
            <ChatList>
              {chatsToday?.length > 0 &&
                renderTimePeriodChats('Today', chatsToday, true)}
              {chatsYesterday?.length > 0 &&
                renderTimePeriodChats('Yesterday', chatsYesterday)}
              {chats7DaysAgo?.length > 0 &&
                renderTimePeriodChats('Previous 7 Days', chats7DaysAgo)}
              {chats30DaysAgo?.length > 0 &&
                renderTimePeriodChats('Previous 30 Days', chats30DaysAgo)}
            </ChatList>
          </ChatListBox>
          {first && <SidebarClearChats />}
        </Sidebar>
      )}
    </>
  );
};

export default ChatSidebar;
