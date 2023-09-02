export interface ISession {
  session_ID: string;
  session_secret: string;
  session_timestamp: Date;
  email: string;
  email_confirm_secret: string;
  email_confirmed: boolean;
  email_confirmed_timestamp: Date;
  unsubscribe_secret: string;
  unsubscribed: boolean;
  unsubscribed_timestamp: Date;
  privacy_confirm_secret: string;
  privacy_confirmed: boolean;
  privacy_confirmed_timestamp: Date;
  input: IInput[];
  output_draft?: IDraft[];
  output: IOutput[];
  comments: any[];
  session_name?: string;
}

export interface IDraft {
  timestamp: string;
  text: string;
  id?: string;
  url?: string;
  send_status?: boolean;
  meta?: {
    pipeline_id?: number;
  };
}

export interface IInput extends IDraft {
  timestamp: string;
  text: string;
}

export interface IOutput extends IDraft {
  text: string;
  timestamp: string;
  send_status?: boolean;
  recommendations?: any[];
}
