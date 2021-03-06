import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/app/model/user.class';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  userId = '';
  user: User = new User();

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id');
      console.log(this.userId);
      this.getUser();
    });
  }

  getUser() {
    if (this.userId) {
      this.firestore
        .collection('users')
        .doc(this.userId)
        .valueChanges()
        .subscribe((user: any) => {
          this.user = new User(user);
          console.log('Retrieved user: ', this.user);
        });
    }
  }

  // editUser() {
  //   const dialog = this.dialog.open(EditUserComponent);
  //   dialog.componentInstance.user = new User(this.user.toJSON());
  //   dialog.componentInstance.userId = this.userId;
  // }

  //prettier-ignore
  // editUser() {
  //   this.dialog.open(EditUserComponent).componentInstance.user = new User(this.user.toJSON());
  //   this.dialog.open(EditUserComponent).componentInstance.userId = this.userId;
  // }

  editUser() {
    const dialog = this.dialog.open(EditUserComponent).componentInstance;
    dialog.user = new User(this.user.toJSON());
    dialog.userId = this.userId;
  }
}
