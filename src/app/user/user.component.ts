import { Component, OnInit } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  getDocs,
} from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../model/user.class';
import { formatDate } from '@angular/common';

// export interface Users {
//   firstName: string;
//   lastName: string;
//   birthDate: string;
//   city: string;
//   street: string;
// }

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  // firstName: string;
  // lastName: string;
  // birthDate: string;
  // city: string;
  // street: string;

  bDate: string;

  user = new User();
  users$: Observable<any>;
  users: Array<any>;

  // USER_DATA: Users[] = [
  //   {
  //     firstName: 'first',
  //     lastName: 'last',
  //     birthDate: '01.01.2022',
  //     city: 'city',
  //     street: 'street'
  //   },
  // ];
  displayedColumns: string[] = [
    'name',
    'email',
    'birthDate',
    'address',
    'zipcode',
    'city',
  ];
  // dataSource = this.USER_DATA;
  // dataSource: Array<any>;

  constructor(public dialog: MatDialog, private db: Firestore) {
    const coll = collection(db, 'users');
    this.users$ = collectionData(coll);

    this.users$.subscribe((newUsers) => {
      this.users = newUsers;
      console.log('new update', this.users);
      // console.log(formatDate(this.users[1].birthDate, 'yyyy-MM-dd', 'en-US'));

      // this.dataSource = this.users;
      // let date = new Date(this.users[0].birthDate);
      // this.bDate = date.toDateString();
    });
  }

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
