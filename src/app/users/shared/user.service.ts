import { Injectable } from '@angular/core';

// import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class UserService {

  userList: AngularFireList<any>;
  selectedUser: User = new User;

  constructor(
    private firebase: AngularFireDatabase
  ) { }

  getData() {
    this.userList = this.firebase.list('users');
  }

  insertUser(user: User) {
    this.userList.push({
      name: user.name,
      email: user.email,
      callNumber: user.callNumber,
      position: user.position,
      office: user.office,
      salary: user.salary
    });
  }

  updateUser(user: User) {
    this.userList.update(user.$key, {
      name: user.name,
      email: user.email,
      callNumber: user.callNumber,
      position: user.position,
      office: user.office,
      salary: user.salary
    });
  }

  deleteUser($key: string) {
    this.userList.remove($key);
  }

}
