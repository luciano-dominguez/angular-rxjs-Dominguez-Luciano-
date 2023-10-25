import { Component, OnDestroy } from '@angular/core';
import { Observable, filter, map, take } from 'rxjs';
import { User, UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users$:Observable<User[]>;
  counter = 0;

constructor(private UsersService:UsersService){
  this.users$ = this.UsersService.getUsers();

this.UsersService.getCounter().pipe
(take(19),
map((v) => v * 2 ),
filter((v) => v > 4 )
).
subscribe({
  next: (v) => {
      this.counter = v;
  }
})

}

}
