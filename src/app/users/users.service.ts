import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

export interface User {
  id: Number;
  name: string;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getCounter(): Observable<number> {
    return interval(1000);
  }

  getUsers(): Observable<User[]>{
    return new Observable((Subscriber) => {
      Subscriber.next([
        {
          id: 1,
          name: 'Luciano'
        },
        {
          id: 2,
          name: 'Oscar'
        }
      ])
    });
  }
}


