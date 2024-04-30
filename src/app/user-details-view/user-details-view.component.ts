import { Component, Input } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user-details-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details-view.component.html',
  styleUrl: './user-details-view.component.css'
})
export class UserDetailsViewComponent {
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
}
