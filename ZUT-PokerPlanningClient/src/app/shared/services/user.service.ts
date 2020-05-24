import { Injectable } from '@angular/core';
import Auth from '@aws-amplify/auth';
import { Hub } from '@aws-amplify/core';
import { BehaviorSubject } from 'rxjs';
import { map, min } from 'rxjs/operators';

export interface AuthState {
  isLoggedIn: boolean;
  username: string | null;
  id: string | null;
  email: string | null;
  firstName: string;
  lastName: string;
}

const initialAuthState = {
  isLoggedIn: false,
  username: null,
  id: null,
  email: null,
  firstName: "",
  lastName: "",
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _authState = new BehaviorSubject<AuthState>(
    initialAuthState
  );

  /** AuthState as an Observable */
  readonly auth$ = this._authState.asObservable();

  /** Observe the isLoggedIn slice of the auth state */
  readonly isLoggedIn$ = this.auth$.pipe(map(state => state.isLoggedIn));

  constructor() {
    // Get the user on creation of this service
    Auth.currentAuthenticatedUser().then(
      (user: any) => this.setUser(user),
      _err => this._authState.next(initialAuthState)
    );

    // Use Hub channel 'auth' to get notified on changes
    Hub.listen('auth', ({ payload: { event, data, message } }) => {
      console.log('signIn');
      if (event === 'signIn') {
        // On 'signIn' event, the data is a CognitoUser object
        this.setUser(data);
      } else {
        this._authState.next(initialAuthState);
      }
    });
  }

  private setUser(user: any) {
    if (!user) {
      return;
    }

    const {
      attributes: { sub: id, email, family_name, given_name },
      username
    } = user;

    this._authState.next({ isLoggedIn: true, id, username, email, firstName: given_name, lastName: family_name });
  }
}