// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISession } from '../../modules/common/types';
import {
  IAllSessionBySecretQuery,
  IDeleteALLSessionMutation,
  IDeleteSessionMutation,
  IHandleRecommendationMutation,
  ILoginMutation,
  ISendAdminMessageMutation,
  ISendMessageMutation,
  IUpdateSessionMutation,
} from '../types';

// Define a service using a base URL and expected endpoints
export const sessionApi = createApi({
  reducerPath: 'sessionApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
  tagTypes: ['Session', 'SessionsSidebar'],
  endpoints: (builder) => ({
    getSessionBySecret: builder.query<
      { session: ISession; admin: boolean },
      { activeSessionSecret: string | undefined; adminPassword: string | null }
    >({
      query: ({ activeSessionSecret, adminPassword }) => {
        let queryUrl = `session-info/${activeSessionSecret}`;
        if (adminPassword) {
          queryUrl += `?adminPassword=${encodeURIComponent(adminPassword)}`;
        }
        return queryUrl;
      },
      providesTags: ['Session'],
    }),
    getAllSessionBySecret: builder.query<
      { sessions: ISession[] },
      IAllSessionBySecretQuery
    >({
      query: ({ email, session_secret }) =>
        `getAllSessions/${email}/${session_secret}`,
      providesTags: ['SessionsSidebar'],
    }),
    loginByEmail: builder.mutation<{ success: boolean }, ILoginMutation>({
      query({ email, checkbox }) {
        return {
          url: 'sendEmail',
          method: 'POST',
          body: {
            email,
            checkbox,
          },
        };
      },
    }),
    createNewChat: builder.mutation<{ session_secret: string }, ILoginMutation>(
      {
        query({ email, checkbox }) {
          return {
            url: 'newChat',
            method: 'POST',
            body: {
              email,
              checkbox,
            },
          };
        },
        invalidatesTags: ['SessionsSidebar', 'Session'],
      },
    ),
    sendMessage: builder.mutation<{ trsc: string }, ISendMessageMutation>({
      query({ text, session_secret }) {
        return {
          url: 'transcriptText',
          method: 'POST',
          body: {
            text,
            session_secret,
          },
        };
      },
      invalidatesTags: ['Session'],
    }),
    sendAdminMessage: builder.mutation<
      { success: boolean },
      ISendAdminMessageMutation
    >({
      query({ text, session_secret, adminPassword }) {
        return {
          url: 'sendAdminMessage',
          method: 'POST',
          body: {
            session_secret,
            text,
            adminPassword,
          },
        };
      },
      invalidatesTags: ['Session'],
    }),
    updateSession: builder.mutation<
      { session_secret: string },
      IUpdateSessionMutation
    >({
      query({ newName, session_secret }) {
        return {
          url: 'session',
          method: 'PATCH',
          body: {
            newName,
            session_secret,
          },
        };
      },
      invalidatesTags: ['SessionsSidebar'],
    }),
    deleteSession: builder.mutation<
      { message: string },
      IDeleteSessionMutation
    >({
      query({ session_secret }) {
        return {
          url: 'deleteSession',
          method: 'POST',
          body: {
            session_secret,
          },
        };
      },
      invalidatesTags: ['SessionsSidebar', 'Session'],
    }),
    deleteAllSessions: builder.mutation<
      { message: string },
      IDeleteALLSessionMutation
    >({
      query({ email }) {
        return {
          url: `deleteAllSessions/${email}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['SessionsSidebar', 'Session'],
    }),
    handleRecommendation: builder.mutation<
      { updatedSession: ISession },
      IHandleRecommendationMutation
    >({
      query({ adminPassword, fromDraft, id, session_secret, toggle }) {
        return {
          url: 'handleRecommendation',
          method: 'POST',
          body: { adminPassword, fromDraft, id, session_secret, toggle },
        };
      },
      invalidatesTags: ['SessionsSidebar', 'Session'],
    }),
  }),
});

export const {
  useGetSessionBySecretQuery,
  useLoginByEmailMutation,
  useGetAllSessionBySecretQuery,
  useDeleteSessionMutation,
  useUpdateSessionMutation,
  useCreateNewChatMutation,
  useSendMessageMutation,
  useDeleteAllSessionsMutation,
  useSendAdminMessageMutation,
  useHandleRecommendationMutation,
} = sessionApi;
