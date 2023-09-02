export interface IHandleSubmitHelper {
  values: {
    email: string;
    isPrivacyAccepted: boolean;
  };
  updateActiveSessionSecret: (newSessionSecret: string) => void;
  updateActiveEmail: (newEmail: string) => void;
}
