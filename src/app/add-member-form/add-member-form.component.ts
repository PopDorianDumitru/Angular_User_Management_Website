import { Component, HostBinding } from '@angular/core';
import { TextInputComponent } from '../text-input/text-input.component';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-member-form',
  standalone: true,
  imports: [TextInputComponent],
  templateUrl: './add-member-form.component.html',
  styleUrls: ['./add-member-form.component.css'],
})
export class AddMemberFormComponent {
  @HostBinding('className') componentClass: string = 'addForm';
  userName: string = '';
  userUsername: string = '';
  userPassword: string = '';
  userAge: string = '';
  userRole: string = '';
  userProfile: string = '';
  userEmail: string = '';
  userWebpage: string = '';

  constructor(private userService: UsersService) {}

  saveUser(){
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
   
    this.userService.createUser({
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
      window.alert("User saved successfully");
    });

  }

}
