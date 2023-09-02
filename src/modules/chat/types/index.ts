export interface IFetchChatBySecretHelperProps {
  activeSessionSecret: string;
  setMessages: React.Dispatch<React.SetStateAction<IOutput[] | undefined>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IChatsDataHelper {
  chats: {
    id: number;
    name: string;
    lastMessage: string;
    lastActive: Date;
  }[];
}

export interface IOutput {
  send_status: boolean;
  text: string;
  timestamp: string;
}
