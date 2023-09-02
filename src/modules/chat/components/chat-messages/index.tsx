import { useContext, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import {
  ChatMessagesBox,
  SideBarIconBox,
  ChatMessagesContainer,
  NotSelectedChatBox,
  LogoImage,
} from '../../styles';
import { ChatContext } from '../../../common/context/chat';
import { SideBarIcon } from '../chat-sidebar-icon';
import { StorageContext } from '../../../common/context/storage';
import { useGetSessionBySecretQuery } from '../../../../store/apis/sessionAPI';
import didacticImg from '../../../../assets/didactic-logo.png';
import { ChatSidebarHeader } from '../chat-sidebar-header';
import { RenderChatMessages } from '../chat-messages-render-messages';

export interface IMessage {
  text: string;
  timestamp: string;
  recommendations?: any[];
  send_status?: boolean;
}

export const ChatMessages = () => {
  const { isSidebarOpen, setIsAdmin } = useContext(ChatContext);
  const { updateActiveSessionSecret, activeSessionSecret, updateActiveEmail } =
    useContext(StorageContext);
  const { sessionSecret } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const adminPassword = queryParams.get('adminPassword');

  const isChatSelected = sessionSecret === 'new-session';

  const { data } = useGetSessionBySecretQuery(
    { activeSessionSecret: sessionSecret, adminPassword: adminPassword },
    {
      skip: !activeSessionSecret || !sessionSecret,
      pollingInterval: 5000,
    },
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (data?.admin) {
      setIsAdmin(data?.admin);
    }
    if (data?.session) {
      updateActiveEmail(data.session.email);
    }
    scrollToBottom();
  }, [data]);

  useEffect(() => {
    !activeSessionSecret &&
      sessionSecret &&
      updateActiveSessionSecret(sessionSecret);
  }, [sessionSecret, activeSessionSecret]);

  return (
    <ChatMessagesContainer isChatNotSelected={isChatSelected}>
      {!isSidebarOpen && (
        <SideBarIconBox>
          <SideBarIcon />
        </SideBarIconBox>
      )}
      <ChatMessagesBox>
        {data?.session?.output && (
          <RenderChatMessages isAdmin={data.admin} session={data.session} />
        )}
        <div ref={messagesEndRef} />
      </ChatMessagesBox>
      {isChatSelected && (
        <NotSelectedChatBox>
          <LogoImage src={didacticImg} />
          <ChatSidebarHeader isSidebarIconHiden />
        </NotSelectedChatBox>
      )}
    </ChatMessagesContainer>
  );
};
