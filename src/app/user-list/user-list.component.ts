import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../models/user.model';
import { UserShortViewComponent } from '../user-short-view/user-short-view.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserShortViewComponent, CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = [];
  roleSearchBinded: string = '';
  roleSearch: string = '';
  oldSearch: string = '';
  constructor (private userService: UsersService){}
  ngOnInit(){
    this.getAllUsers();
  }
  getAllUsers(){
    this.userService.getUsers().subscribe((users: any) => {
      this.users = users;
    });
  }
  searchForUsers(){
    this.oldSearch = this.roleSearch;
    this.roleSearch = this.roleSearchBinded;
    if(this.roleSearch == '')
    {
      this.getAllUsers();
    }
    else
    {
      this.userService.getUsersByRole(this.roleSearch).subscribe((users: any) => {
        this.users = users;
      },
      (error) => {
        this.users = [];
      });
    }
  }
}
