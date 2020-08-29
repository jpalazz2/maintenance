// @flow strict

declare class BasicProfile {
  getId(): string;
  getName(): string;
  getImageUrl(): string;
  getEmail(): string;
}

declare class GoogleUser {
  getId(): string;
  isSignedIn(): boolean;
  getGrantedScopes(): string;
  getBasicProfile(): BasicProfile;
}

type Signin2 = {
  render(
    id: string,
    options: {
      scope: string,
      width?: Number,
      height?: Number,
      longtitle?: boolean,
      theme?: 'dark' | 'light',
      onsuccess: (GoogleUser) => void,
      onfailure: () => void,
    },
  ): void,
};

declare module 'gapi' {
  declare module.exports: {
    signin2: Signin2,
    isSignedIn: {
      get(): boolean,
    },
  };
}
