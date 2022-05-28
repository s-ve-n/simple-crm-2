import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../model/user.class';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  user: User;
  loading = false;
  birthDate: Date;
  userId: string;

  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    private db: Firestore
  ) {}

  ngOnInit(): void {}

  saveUser() {
    this.loading = true;
    updateDoc(doc(this.db, 'users', this.userId), {
      ...this.user.toJSON(),
    });
    this.loading = false;
    this.dialogRef.close();
  }
}