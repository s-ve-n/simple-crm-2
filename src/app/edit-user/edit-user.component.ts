import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../model/user.class';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  user: User;
  loading = false;
  birthDate: Date;

  constructor(public dialogRef: MatDialogRef<EditUserComponent>) {}

  ngOnInit(): void {}

  saveUser() {}
}
