export interface ILoginMutation {
  email: string;
  checkbox: boolean;
}
export interface ISendMessageMutation {
  text: string;
  session_secret: string;
}

export interface IUpdateSessionMutation {
  session_secret: string;
  newName?: string;
}

export interface IHandleRecommendationMutation {
  session_secret: string;
  id: string;
  toggle: boolean;
  fromDraft: boolean;
  adminPassword: string;
}
export interface ISendAdminMessageMutation {
  session_secret: string;
  text: string;
  adminPassword: string;
}

export interface IDeleteSessionMutation {
  session_secret: string;
}

export interface IDeleteALLSessionMutation {
  email: string;
}

export interface IAllSessionBySecretQuery {
  email: string;
  session_secret: string | undefined;
}
