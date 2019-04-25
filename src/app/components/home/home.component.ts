import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgRedux, select } from 'ng2-redux';
import { IAppState, CounterAction } from '../../store';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @select() counter$: Observable<number>;

  item: any;

  constructor(af: AngularFireDatabase, private counterAction: CounterAction, private ngRedux: NgRedux<IAppState>) {
    this.item = af.object('/data');
    this.item.set({ name: "Hello"}); 

    this.counter$.subscribe(val=>{
      console.log(val);
    })
   }

  ngOnInit() {
  }

  increment():void {
    this.counterAction.increment();
  }

  decrement(): void {
    this.counterAction.decrement();
  }

}
