import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { CommonModule } from '@angular/common';
import { UserShortViewComponent } from '../user-short-view/user-short-view.component';
import { UsersService } from '../users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-lookup',
  standalone: true,
  imports: [CommonModule, UserShortViewComponent, FormsModule],
  templateUrl: './name-lookup.component.html',
  styleUrl: './name-lookup.component.css'
})
export class NameLookupComponent {
  users: User[] = [];
  searchName: string = '';
  constructor(private userService: UsersService){}

  getUsersByName(){
    this.userService.getUsersByName(this.searchName)
    .subscribe((users: any)=>{
      this.users = users;
    },
    (error)=>{
      this.users = [];
    })
  }

}
