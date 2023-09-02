import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

import { SideBarIcon } from '../chat-sidebar-icon';
import {
  ChatSidebarHeaderContainer,
  SideBarHeaderNewChatBox,
} from '../../styles';
import { useCreateNewChatMutation } from '../../../../store/apis/sessionAPI';
import { useContext } from 'react';
import { StorageContext } from '../../../common/context/storage';

interface IChatSidebarHeaderProps {
  isSidebarIconHiden?: boolean;
}

export const ChatSidebarHeader = ({
  isSidebarIconHiden = false,
}: IChatSidebarHeaderProps) => {
  const { activeEmail, updateActiveSessionSecret } = useContext(StorageContext);
  const navigate = useNavigate();
  const [createNewChatMutation] = useCreateNewChatMutation();

  const handleNewChatBtnClick = async () => {
    const response = await createNewChatMutation({
      email: activeEmail,
      checkbox: true,
    });

    if ('data' in response) {
      const data: { session_secret: string } = response.data;
      updateActiveSessionSecret(data.session_secret);
      navigate(`/session/${data.session_secret}`);
    }
  };

  return (
    <ChatSidebarHeaderContainer>
      <SideBarHeaderNewChatBox onClick={handleNewChatBtnClick}>
        <AddIcon />
        <p className="ml-1 font-medium">New session</p>
      </SideBarHeaderNewChatBox>
      {!isSidebarIconHiden && <SideBarIcon />}
    </ChatSidebarHeaderContainer>
  );
};
