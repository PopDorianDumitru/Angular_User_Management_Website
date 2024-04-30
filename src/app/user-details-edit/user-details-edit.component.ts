import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TextInputComponent } from '../text-input/text-input.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-details-edit',
  standalone: true,
  imports: [CommonModule, TextInputComponent, FormsModule],
  templateUrl: './user-details-edit.component.html',
  styleUrl: './user-details-edit.component.css'
})
export class UserDetailsEditComponent {
  userId: string | null = '';
  user: User = {
    id: '',
    name: '',
    username: '',
    password: '',
    age: 0,
    role: '',
    profile: '',
    email: '',
    webpage: ''
  };

  userName: string = '';
  userUsername: string = '';
  userPassword: string = '';
  userAge: string = '';
  userRole: string = '';
  userProfile: string = '';
  userEmail: string = '';
  userWebpage: string = '';


  foundUser: boolean = true;
  constructor(private userService: UsersService, private route: ActivatedRoute, private location: Location ) { }
  ngOnInit(){
    this.route.queryParamMap.subscribe(params => {
      this.userId = params.get('id');
      if(this.userId == null)
      {
        this.foundUser = false;
        this.userId = '';
      }
      else
      {
        this.userService.getUserById(this.userId).subscribe((user : any) => { 
          if ( this.userService.isUser(user) )
            this.user = user;
            this.userName = this.user.name;
            this.userUsername = this.user.username;
            this.userPassword = this.user.password;
            this.userAge = this.user.age.toString();
            this.userRole = this.user.role;
            this.userProfile = this.user.profile;
            this.userEmail = this.user.email;
            this.userWebpage = this.user.webpage;
        },
        (error) => {
          this.foundUser = false;
        });
      }
    });
  }
  goBack(){
    this.location.back();
  }
  deleteUser(){
    if(window.confirm("Are you sure you want to delete this user?"))
    {
      if(this.userId != null)
      {
        this.userService.deleteUserById(this.userId).subscribe(() => {
          this.location.back();
        });
      }
    }
    
  }
  saveChanges(){
    if (this.userName.length < 2) {
      window.alert("Name must be at least 2 characters long");
      return;
    }

    if (isNaN(Number.parseInt(this.userAge))) {
      window.alert("Age must be a number");
      return;
    }
    if (Number.parseInt(this.userAge) < 18) {
      window.alert("Age must be at least 18");
      return;
    }
    if (this.userRole.length < 2) {
      window.alert("Role must be at least 2 characters long");
      return;
    }
    if (this.userUsername.length < 2) {
      window.alert("Username must be at least 2 characters long");
      return;
    }
    if (this.userPassword.length < 8) {
      window.alert("Password must be at least 8 characters long");
      return;
    }
    if (this.userEmail.length < 5) {
      window.alert("Email must be at least 5 characters long");
      return;
    }
    if(this.userId != null)
      this.userService.updateUserById(this.userId, {
        name: this.userName,
        username: this.userUsername,
        password: this.userPassword,
        age: Number.parseInt(this.userAge),
        role: this.userRole,
        profile: this.userProfile,
        email: this.userEmail,
        webpage: this.userWebpage
      })
      .subscribe(() => {
        window.alert("User updated successfully");
      });

  }

}
