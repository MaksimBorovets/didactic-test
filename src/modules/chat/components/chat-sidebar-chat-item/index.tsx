import { ChangeEvent, useContext, useState } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate, useParams } from 'react-router-dom';

import { ISession } from '../../../common/types';
import {
  ChatItem,
  ChatName,
  CustomIconBox,
  EditingBox,
  TitleBox,
} from '../../styles';
import {
  useDeleteSessionMutation,
  useUpdateSessionMutation,
} from '../../../../store/apis/sessionAPI';
import { StorageContext } from '../../../common/context/storage';
import { ConfirmModal } from '../../../common/components/modal';
import { isMobile } from '../../../common/constants';
import { ChatContext } from '../../../common/context/chat';

export const SidebarChatItem = ({
  chat,
  setAvailableSessionSecret,
}: {
  chat: ISession;
  setAvailableSessionSecret: (sessionSecret: string) => void;
}) => {
  const { session_secret, session_name, session_timestamp } = chat;
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(session_name || '');
  const { updateActiveSessionSecret } = useContext(StorageContext);
  const { toggleSidebar } = useContext(ChatContext);

  const { sessionSecret } = useParams();

  const navigate = useNavigate();

  const [deleteSessionMutation] = useDeleteSessionMutation();
  const [updateSessionMutation] = useUpdateSessionMutation();

  const deleteSessionBtnHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsConfirmModalOpen(true);
  };

  const confirmDeleteChat = () => {
    setAvailableSessionSecret(session_secret);
    deleteSessionMutation({ session_secret });
    navigate(`/session/new-session`);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(event.target.value);
  };

  const handleEditSave = () => {
    if (editedTitle !== '') {
      updateSessionMutation({
        session_secret,
        newName: editedTitle,
      });
    }
    setIsEditing(false);
  };

  const handleItemClick = () => {
    updateActiveSessionSecret(session_secret);
    navigate(`/session/${session_secret}`);
    isMobile && toggleSidebar();
    console.log("🚀 ~ file: index.tsx:80 ~ handleItemClick ~ isMobile:", isMobile)
  };

  const title = isEditing ? (
    <TitleBox>
      <input type="text" value={editedTitle} onChange={handleEditInputChange} />
    </TitleBox>
  ) : (
    <ChatName>{session_name || String(session_timestamp)}</ChatName>
  );

  const isActiveChatItem = sessionSecret === session_secret;

  return (
    <ChatItem
      onClick={handleItemClick}
      isActive={isActiveChatItem}
      key={chat.session_ID}>
      <div className="mr-3">
        <ChatIcon fontSize="small" />
      </div>
      {title}

      {!isEditing && isActiveChatItem && (
        <EditingBox>
          <CustomIconBox
            padding="0 4px 4px 4px"
            hoverBackgroundColor="rgba(192, 192, 192, 0.5)"
            onClick={handleEditClick}>
            <EditIcon fontSize="small" />
          </CustomIconBox>
          <CustomIconBox onClick={deleteSessionBtnHandler}>
            <DeleteForeverIcon fontSize="small" />
          </CustomIconBox>
        </EditingBox>
      )}
      {isEditing && (
        <EditingBox>
          <CustomIconBox
            hoverBackgroundColor="rgba(135, 231, 221, 0.5)"
            onClick={handleEditSave}>
            <DoneIcon fontSize="small" />
          </CustomIconBox>
          <CustomIconBox onClick={() => setIsEditing(false)}>
            <ClearIcon fontSize="small" />
          </CustomIconBox>
        </EditingBox>
      )}
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => {
          setIsConfirmModalOpen(false);
        }}
        onConfirm={confirmDeleteChat}
        confirmationText="This will delete "
        headerText="Delete session?"
        sessionName={session_name || String(session_timestamp)}
      />
    </ChatItem>
  );
};
