import { useMemo } from 'react';

import { IInput, ISession } from '../../../common/types';
import { Message } from '../../styles';
import AdminButtons from '../chat-admin-buttons';
import { CustomIframe } from '../../../common/components/custom-iframe';

interface IRenderChatMessagesProps {
  session: ISession;
  isAdmin: boolean;
}

export function RenderChatMessages({
  session,
  isAdmin,
}: IRenderChatMessagesProps) {
  const allMessages: IInput[] | undefined = useMemo(() => {
    if (session) {
      return [
        ...session.output,
        ...session.input,
        ...(session.output_draft || []),
      ].sort((messageA, messageB) => {
        const timestampA = new Date(messageA.timestamp).getTime();
        const timestampB = new Date(messageB.timestamp).getTime();
        return timestampA - timestampB;
      });
    }
    return undefined;
  }, [session]);

  return (
    <>
      {allMessages?.map((message) => {
        const isUser =
          typeof message.send_status !== 'undefined' ? false : true;
        const isDraft =
          typeof message.send_status !== 'undefined'
            ? message.send_status
            : undefined;

        return (
          <Message key={message.timestamp} isUser={isUser} isDraft={isDraft}>
            {message.text}
            {isAdmin && !isUser && (
              <AdminButtons message={message} isDraft={!message.send_status} />
            )}
            {message.url && <CustomIframe videoUrl={message.url} />}
          </Message>
        );
      })}
    </>
  );
}
