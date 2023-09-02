import Popup from 'reactjs-popup';

import {
  Actions,
  Backdrop,
  CancelButton,
  ConfirmButton,
  Content,
  Header,
  Modal,
} from './styles';

interface ICustomModalProps {
  isOpen: boolean;
  confirmationText: string;
  headerText?: string;
  sessionName?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmModal = ({
  isOpen,
  headerText,
  confirmationText,
  onClose,
  onConfirm,
  sessionName,
}: ICustomModalProps) => (
  <Popup open={isOpen} closeOnDocumentClick={false} modal>
    <Backdrop>
      <Modal>
        {headerText && <Header>{headerText}</Header>}
          <Content>{confirmationText} {sessionName && <Content isBold>{sessionName}</Content>}</Content>
        <Actions>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <ConfirmButton
            onClick={() => {
              onConfirm();
              onClose();
            }}>
            Delete
          </ConfirmButton>
        </Actions>
      </Modal>
    </Backdrop>
  </Popup>
);
