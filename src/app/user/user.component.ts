import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../model/user.class';

export interface Users {
  name: string;
  position: number;
  email: string;
  city: string;
}

// prettier-ignore
const USER_DATA: Users[] = [
  { position: 1, name: 'Hydrogen', email: 'test', city: 'city' }
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user = new User();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  displayedColumns: string[] = ['position', 'name', 'email', 'city'];
  dataSource = USER_DATA;
}
