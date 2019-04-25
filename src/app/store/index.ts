import { NgModule } from '@angular/core';
import { NgRedux, DevToolsExtension } from 'ng2-redux';
import { createEpicMiddleware } from 'redux-observable';
import { combineReducers } from 'redux';

// Reducers
import { counterReducer,authReducer } from './reducers';

// Actions
import { CounterAction, AuthActions } from './actions';
export { CounterAction, AuthActions } from './actions';

import { CounterEpics,AuthEpics } from './epics';
import { ICounter, ILogin, IUser } from './models';

export interface IAppState {
  counter?: Object;
  auth?: Object;
}

export const AppReducer = combineReducers<IAppState>({
  counter: counterReducer,
  auth:authReducer 
});


@NgModule({
  providers: [
    // actions
    CounterAction,
    AuthActions,
    // epics
    CounterEpics,
    AuthEpics
  ]
})
export class StoreModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private counterEpics:any,//
    private authEpics : any
  ) {
    const middleware = [
      createEpicMiddleware(this.counterEpics.increment),
      createEpicMiddleware(this.counterEpics.decrement),
      createEpicMiddleware(this.authEpics.login),      
      createEpicMiddleware(this.authEpics.getCurrentUserData),
      createEpicMiddleware(this.authEpics.logout)
    ];
    
    this.ngRedux.configureStore(
      AppReducer,                                         // Main Reducer
      {},                                                 // Defailt State
      middleware,                                         // Middlewares
      [devTool.isEnabled() ? devTool.enhancer() : f => f] // Enhancers
    )
  }
} 