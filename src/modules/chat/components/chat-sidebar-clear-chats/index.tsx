import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { SidebarClearChatsContainer } from '../../styles';
import { useDeleteAllSessionsMutation } from '../../../../store/apis/sessionAPI';
import { useContext, useState } from 'react';
import { StorageContext } from '../../../common/context/storage';
import { useNavigate } from 'react-router-dom';
import { ConfirmModal } from '../../../common/components/modal';

export const SidebarClearChats = () => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const { activeEmail } = useContext(StorageContext);
  const [deleteAllMutation] = useDeleteAllSessionsMutation();
  const navigate = useNavigate();
  const handleDeleteAllBtnClick = () => {
    setIsConfirmModalOpen(true);
  };
  const confirmDeleteAllSessions = () => {
    deleteAllMutation({ email: activeEmail });
    navigate(`/session/new-session`);
  };

  return (
    <SidebarClearChatsContainer onClick={handleDeleteAllBtnClick}>
      <p className="mr-1"> Delete All Sessions</p>
      <DeleteForeverIcon />
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => {
          setIsConfirmModalOpen(false);
        }}
        onConfirm={confirmDeleteAllSessions}
        confirmationText='Clear your conversation history - are you sure?'
      />
    </SidebarClearChatsContainer>
  );
};
