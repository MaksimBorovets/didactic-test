import { ChangeEvent, useContext, useState } from 'react';

import {
  useSendMessageMutation,
  useSendAdminMessageMutation,
} from '../../../../store/apis/sessionAPI';
import { ButtonBox, ChatInput, InputField } from '../../styles';
import { StorageContext } from '../../../common/context/storage';
import { ChatContext } from '../../../common/context/chat';
import CustomButton from '../../../common/components/custom-btn';
import useLocationParams from '../../../common/hooks/useLocationParams';

export const ChatForm = () => {
  const [message, setMessage] = useState('');
  const [sendMessageMutation] = useSendMessageMutation();
  const [sendAdminMessageMutation] = useSendAdminMessageMutation();
  const { activeSessionSecret } = useContext(StorageContext);
  const { isSidebarOpen, isAdmin } = useContext(ChatContext);
  const { adminPassword } = useLocationParams();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendClick();
    }
  };

  const handleSendClick = () => {
    if (message.length > 0) {
      isAdmin && adminPassword
        ? sendAdminMessageMutation({
            text: message,
            session_secret: activeSessionSecret,
            adminPassword,
          })
        : sendMessageMutation({
            text: message,
            session_secret: activeSessionSecret,
          });
    }
    setMessage('');
  };

  return (
    <ChatInput isSidebarOpen={isAdmin || !isSidebarOpen}>
      <InputField
        value={message}
        onChange={handleOnChange}
        type="text"
        placeholder="Type your message..."
        onKeyDown={handleKeyDown}
      />
      <ButtonBox>
        <CustomButton
          disabled={Boolean(message.length <= 0)}
          onClick={handleSendClick}
          btnText="Send"
        />
      </ButtonBox>
    </ChatInput>
  );
};
