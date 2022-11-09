import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _usersApiUrl: string =
    'https://angular-material-api.azurewebsites.net/users';
  private _users: BehaviorSubject<User[]>;
  private dataSource: {
    users: User[];
  };

  constructor(private http: HttpClient) {
    this.dataSource = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  addUser(user: User): Promise<User> {
    return new Promise((resolver, reject) => {
      user.id = this.dataSource.users.length + 1;
      this.dataSource.users.push(user);
      this._users.next(Object.assign({}, this.dataSource).users);
      resolver(user);
    });
  }

  getUser(id: number) {
    return this.dataSource.users.find((user) => user.id === id);
  }

  getUsers() {
    return this.http.get<User[]>(this._usersApiUrl).subscribe({
      next: (data) => {
        this.dataSource.users = data;
        this._users.next(Object.assign({}, this.dataSource).users);
      },
      error: (error) => console.log(error),
    });
  }
}
