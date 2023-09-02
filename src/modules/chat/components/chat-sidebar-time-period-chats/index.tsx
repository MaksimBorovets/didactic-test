import { ISession } from '../../../common/types';
import { TimePeriodContainer, TimePeriodTitle, ChatsList } from '../../styles';
import { SidebarChatItem } from '../chat-sidebar-chat-item';

export const TimePeriodChats = ({
  title,
  chats,
  setAvailableSessionSecret,
}: {
  title: string;
  chats: ISession[];
  setAvailableSessionSecret: (sessionSecret: string) => void;
}) => (
  <TimePeriodContainer>
    <TimePeriodTitle>{title}</TimePeriodTitle>
    <ChatsList>
      {chats.map((chat: ISession) => (
        <SidebarChatItem
          setAvailableSessionSecret={setAvailableSessionSecret}
          chat={chat}
        />
      ))}
    </ChatsList>
  </TimePeriodContainer>
);
