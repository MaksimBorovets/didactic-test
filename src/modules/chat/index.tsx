import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ChatSidebar } from './components/chat-sidebar';
import { ChatForm } from './components/chat-form';
import { ChatMessages } from './components/chat-messages';
import { AppWrapper, ChatContainer } from './styles';
import { ChatContext } from '../common/context/chat';
import useLocationParams from '../common/hooks/useLocationParams';

export const Chat = () => {
  const { isSidebarOpen } = useContext(ChatContext);
  const { sessionSecret } = useParams();
  const { adminPassword } = useLocationParams();

  return (
    <AppWrapper>
      {!Boolean(adminPassword) && <ChatSidebar />}
      <ChatContainer isSidebarOpen={isSidebarOpen}>
        <ChatMessages />
        {sessionSecret !== 'new-session' && <ChatForm />}
      </ChatContainer>
    </AppWrapper>
  );
};
