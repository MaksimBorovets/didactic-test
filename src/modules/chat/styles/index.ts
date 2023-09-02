import { styled } from 'styled-components';

import { THEME } from '../../common/theme';
import { mobileBreakpoint } from '../../common/constants';

export const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex: 1;
  overflow: hidden;
  justify-content: center;

  @media (max-width: ${mobileBreakpoint}) {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const Sidebar = styled.div<{ isOpen: boolean }>`
  width: 300px;
  height: 100%;
  position: relative;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  top: 0;
  background: linear-gradient(
    45deg,
    rgba(135, 231, 221, 1),
    rgba(246, 214, 227, 1)
  );
  transition: ${({ isOpen }) =>
    isOpen
      ? 'left 0.3s ease-in-out'
      : 'left 0.5s ease-in-out, transform 0.5s ease-in-out'};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  flex: 1;

  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    position: fixed;
    background: linear-gradient(
      45deg,
      rgba(135, 231, 221, 1),
      rgba(246, 214, 227, 1)
    );
    flex: 1;
    overflow: hidden;
  }
`;

export const ChatContainer = styled.div<{ isSidebarOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 80%;
  flex: 15;

  @media (max-width: ${mobileBreakpoint}) {
    width: ${({ isSidebarOpen }) => (isSidebarOpen ? '0' : '-100%')};
    padding: 0;
    display: flex;
    justify-content: space-between;
    flex: 1;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ChatListBox = styled.div<{ isOpen: boolean }>`
  width: 300px;
  height: 90%;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  align-self: flex-end;
  margin-bottom: 10px;
`;

export const ChatHeader = styled.div`
  padding: 20px;
  background-color: #3498db;
  color: white;
  font-size: 1.2rem;
  text-align: center;
`;

export const ChatMessagesBox = styled.div`
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NotSelectedChatBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const LogoImage = styled.img`
  width: 350px;
  height: 350px;
  margin-top: 100px;

  @media (max-width: ${mobileBreakpoint}) {
    width: 250px;
    height: 250px;
    margin-top: 70px;
  }
`;

export const Message = styled.div<{ isUser: boolean; isDraft?: boolean }>`
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 8px;
  border: ${(props) =>
    props.isDraft
      ? '0.5px solid #22a6b3'
      : props.isUser
      ? '0.5px solid #2d3436'
      : '0.5px solid #2d3436'};
  box-shadow: ${(props) =>
    props.isUser
      ? '5px 5px 15px rgba(0, 0, 0, 0.3)'
      : '-5px 5px 15px rgba(0, 0, 0, 0.3)'};
  width: 70%;
  background-color: ${(props) =>
    props.isDraft ? '#dff9fb' : props.isUser ? '#00cec9' : '#fab1a0'};
  color: ${(props) => (props.isUser ? 'black' : 'black')};
  align-self: flex-start;
  align-self: ${(props) => (!props.isUser ? 'flex-start' : 'flex-end')};

  @media (max-width: ${mobileBreakpoint}) {
    width: 95%;
    align-self: center;
  }
`;

export const AdminButtonsBox = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${mobileBreakpoint}) {
    width: 95%;
    align-self: center;
  }

  @media (max-width: 350px) {
    flex-direction: column;
  }
`;

export const ChatInput = styled.div<{ isSidebarOpen: boolean }>`
  padding: 20px;
  display: flex;
  width: 70%;
  align-items: center;
  background-color: #87e7dd;
  border-radius: 10px;

  @media (max-width: ${mobileBreakpoint}) {
    width: 90%;
    display: ${(props) => (!props.isSidebarOpen ? 'none' : '')};
    margin-bottom: 10px;
    margin-top: 5px;
  }
`;

export const InputField = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

export const ButtonBox = styled.div`
  @media (max-width: ${mobileBreakpoint}) {
    margin-bottom: 7px;
  }
`;

export const SendButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.disabled ? 'gray' : '#3498db')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin-left: 10px;
`;

export const SideBarIconBox = styled.div`
  position: absolute;
  top: 15px;
  left: 20px;

  @media (max-width: ${mobileBreakpoint}) {
    top: 15px;
    left: 5px;
  }
`;

export const ChatMessagesContainer = styled.div<{ isChatNotSelected: boolean }>`
  display: flex;
  flex: 1;
  width: 70%;
  flex-direction: column;
  overflow-y: auto;
  justify-content: ${(props) => (props.isChatNotSelected ? 'center' : '')};
  align-items: ${(props) => (props.isChatNotSelected ? 'center' : '')};

  ::-webkit-scrollbar {
    width: 3px;
  }

  @media (max-width: ${mobileBreakpoint}) {
    width: 90%;
    flex: 1;
    overflow-y: auto;
  }
`;

export const ChatSidebarHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const SideBarHeaderIconBox = styled.div`
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const SideBarHeaderNewChatBox = styled.div`
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 170px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const TimePeriodContainer = styled.div`
  margin-bottom: 20px;
`;

export const ChatList = styled.div`
  margin-top: 20px;
  width: 100%;
  overflow-y: auto;
`;

export const TimePeriodTitle = styled.h3`
  font-size: 15px;
  margin-bottom: 10px;
  margin-left: 50px;
  font-weight: 800;
  opacity: 0.6;
`;

export const ChatsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChatItem = styled.div<{ isActive: boolean }>`
  margin: 4px;
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (props.isActive ? 'flex-start' : 'space-between')};
  cursor: pointer;
  transition: background-color 0.3s, border-radius 0.3s;
  padding: 10px;
  background-color: ${(props) =>
    props.isActive ? THEME.colors.primary : 'none'};
  border-radius: 7px;

  &:hover {
    background-color: ${(props) =>
      props.isActive ? 'none' : 'rgba(255, 255, 255, 0.5)'};
    border-radius: 7px;
  }
`;

export const ChatName = styled.span`
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 10px;
  margin-top: 3px;
`;

export const SidebarClearChatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 20px 10px;
  padding: 10px;
  border-radius: 5px;
  border: 0.5px solid;
  cursor: pointer;
  transition: background-color 0.3s, border-radius 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const CustomIconBox = styled.div<{
  padding?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
}>`
  padding: ${(props) => props.padding || '0 3px 3px 3px'};
  transition: background-color 0.3s, opacity 0.3s;
  border-radius: 5px;
  margin-left: 6px;
  background-color: ${(props) => props.backgroundColor || 'transparent'};

  &:hover {
    background-color: ${(props) =>
      props.hoverBackgroundColor || 'rgba(255, 0, 0, 0.5)'};
    opacity: 0.8;
  }
`;

export const TitleBox = styled.div`
  flex: 1;
  max-width: 300px;
`;

export const EditingBox = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
`;
