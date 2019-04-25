import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import { CounterAction } from '../actions';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CounterEpics {

    constructor() { }

    increment = (action$) =>
        action$.ofType(CounterAction.INCREMENT_COUNTER)
        .do((val)=> {
            console.log("In Counter Epic - Increment: ",val);
        })
        .switchMap(() => {
            let inc$=of({
                type: CounterAction.INCREMENT_SUCCESS
            });
            return inc$;
           /*  return Observable.of({
                type: CounterAction.INCREMENT_SUCCESS
            }); */
        });

    decrement = (action$) =>
        action$.ofType(CounterAction.DECREMENT_COUNTER)
        .do((val)=> {
            console.log("In Counter Epic - Decrement : ",val);
        })        
        .switchMap(() => {
            let dec$=of({
                type: CounterAction.DECREMENT_SUCCESS
            });
            return dec$;
            /* return Observable.of({
                type: CounterAction.DECREMENT_SUCCESS
            }); */
        });
}