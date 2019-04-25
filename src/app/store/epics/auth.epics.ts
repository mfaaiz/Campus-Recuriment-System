import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { AuthActions } from '../actions';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthEpics {

  constructor(private af: AngularFireDatabase) { }

  login = (action$) =>
    action$.ofType(AuthActions.LOGIN)
      .map(action => { return action; })
      .switchMap(({payload}) => {        
            // console.log('login: ', result)
            //if (result.statusCode) {
              console.log("payload in login epic",payload);
              
              let promise$=fromPromise(
                <Promise<any>>this.login(payload) //this.af.login({ email:payload.email,password:payload.password})
                  .then(auth => {
                      console.log("auth sucess in epic fb",auth);
                    return {
                      type: AuthActions.LOGIN_SUCCESS,
                      payload: auth
                    };
                  }));
                  return promise$;
              /* return Observable.fromPromise(
                <Promise<any>> this.af.auth.login({ email:payload.email,password:payload.password})
                  .then(auth => {
                      console.log("auth sucess in epic fb",auth);
                    return {
                      type: AuthActions.LOGIN_SUCCESS,
                      payload: auth
                    };
                  })
              ) */
        })
        .catch(error => {
            
            let fail$=of({
              type: AuthActions.LOGIN_FAIL,
              payload: error
            });
            return fail$;
          /* return Observable.of({
              type: AuthActions.LOGIN_FAIL,
              payload: error
            }) // observable */
            
          });
      
   getCurrentUserData = (action$) =>
    action$.ofType(AuthActions.LOGIN_SUCCESS)
      .switchMap(({payload}) => {
          console.log("payload in get current user data,"+payload)
          return this.af.object(`users/${payload.uid}`)
      })
        .catch(err => {
          console.log('users/ err ', err);
          let res$=of(null);
          return res$;
         // return Observable.of(null);
        })
        .switchMap((user) => {
          if (user) {
             console.log("Login- getCurrentUserData ", user);
             let auth$=of({
              type: AuthActions.SET_CURRENT_USER_DATA,
              payload: user
            });
             return auth$;     
            /* return Observable.of({
              type: AuthActions.SET_CURRENT_USER_DATA,
              payload: user
            }); */

          } else {
            let action$=of({
              type: AuthActions.NULL
            });
            return action$;
            /* return Observable.of({
              type: AuthActions.NULL
            }); */
          }
        });

    logout = (action$) =>
      action$.ofType(AuthActions.LOGOUT)
        .switchMap(() => {
          this.logout;
          //this.af.auth.logout();
          let log$=of({
            type: AuthActions.LOGOUT_SUCCESS
          });
          return log$;

          /* return Observable.of({
            type: AuthActions.LOGOUT_SUCCESS
          }); */

        });
}