import { Component, OnInit, Input } from '@angular/core';
import { UserItem } from '../user-item';

@Component({
  selector: 'app-user-card-item',
  templateUrl: './user-card-item.component.html',
  styleUrls: ['./user-card-item.component.css']
})
export class UserCardItemComponent implements OnInit {

  @Input()  userItem: UserItem;
  constructor() { }

  ngOnInit(): void {
  }

}
