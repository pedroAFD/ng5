import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  private goals = new BehaviorSubject<any>(['Objetivo inicial',
  'Otro objetivo secundario',
  'Test Objetivo exportado via servicios' ])
  goal = this.goals.asObservable();
  
  constructor() { }

  changeGoal(goal){

    this.goals.next(goal);

  }

}
