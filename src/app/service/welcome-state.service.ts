import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeStateService {

  visited : boolean = false

  constructor() { }

  getVisited(){
    return this.visited;
  }

  setVisited( state : boolean ){
    this.visited = state;
  }
}
