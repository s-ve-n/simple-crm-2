import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';
import { User } from '../model/user.class';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  birthDate: Date;
  users$: Observable<any>;
  users: Array<any>;
  loading = false;

  constructor(private db: Firestore) {
    const coll = collection(db, 'users');
    this.users$ = collectionData(coll);

    this.users$.subscribe((newUsers) => {
      // alert('new update')
      this.users = newUsers;
    });
  }

  ngOnInit(): void {}

  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is', this.user);
    const coll = collection(this.db, 'users');
    setDoc(doc(coll), this.user.toJSON());
    this.loading = false;
  }
}
