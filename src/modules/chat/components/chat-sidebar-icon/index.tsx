import { useContext } from 'react';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';

import { ChatContext } from '../../../common/context/chat';
import { SideBarHeaderIconBox } from '../../styles';

export const SideBarIcon = () => {
  const { toggleSidebar } = useContext(ChatContext);

  return (
    <SideBarHeaderIconBox onClick={toggleSidebar}>
      <ViewSidebarIcon />
    </SideBarHeaderIconBox>
  );
};
