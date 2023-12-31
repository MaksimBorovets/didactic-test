import { startOfDay } from 'date-fns'; 

import { ISession } from '../../common/types';

// ...

const today = startOfDay(new Date()); 

const now = new Date();

const yesterday = new Date(now);
yesterday.setDate(now.getDate() - 1);

const sevenDaysAgo = new Date(now);
sevenDaysAgo.setDate(now.getDate() - 7);

const thirtyDaysAgo = new Date(now);
thirtyDaysAgo.setDate(now.getDate() - 30);

export const chatsDataHelper = (chats: ISession[] | undefined) => {
  if (!chats) {
    return {
      chatsToday: [],
      chatsYesterday: [],
      chats7DaysAgo: [],
      chats30DaysAgo: [],
    };
  }

  const chatsToday = chats.filter(
    (chat) => {
      const timestamp = new Date(chat.session_timestamp);
      return timestamp > today ;
    }
  );
  
  const chatsYesterday = chats.filter(
    (chat) => {
      const timestamp = new Date(chat.session_timestamp);
      return timestamp > yesterday && timestamp <= today;
    }
  );


  const chats7DaysAgo = chats.filter(
    (chat) => {
      const timestamp = new Date(chat.session_timestamp);
      return timestamp > sevenDaysAgo && timestamp <= yesterday;
    }
  );

  const chats30DaysAgo = chats.filter(
    (chat) => {
      const timestamp = new Date(chat.session_timestamp);
      return timestamp > thirtyDaysAgo && timestamp <= sevenDaysAgo;
    }
  );

  return {
    chatsYesterday,
    chatsToday,
    chats7DaysAgo,
    chats30DaysAgo,
  };
};
