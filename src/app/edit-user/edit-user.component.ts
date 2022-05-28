import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.class';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  user = new User();

  constructor() {}

  ngOnInit(): void {}
}
