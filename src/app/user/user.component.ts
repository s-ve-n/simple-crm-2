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

export interface Users {
  firstName: string;
  lastName: string;
  birthDate: string;
  city: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user = new User();
  users$: Observable<any>;
  users: Array<any>;
  USER_DATA: Users[] = [
    { firstName: 'plus', lastName: 'minus', birthDate: '123', city: 'city' },
  ];

  constructor(public dialog: MatDialog, private db: Firestore) {
    const coll = collection(db, 'users');
    this.users$ = collectionData(coll);

    this.users$.subscribe((newUsers) => {
      console.log('new update', this.users);

      this.users = newUsers;
    });
  }

  ngOnInit(): void {
    // const querySnapshot = getDocs(collection(this.db, 'users'));
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, ' => ', doc.data());
    // });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  displayedColumns: string[] = ['firstName', 'lastName', 'birthDate', 'city'];
  dataSource = this.USER_DATA;
}
