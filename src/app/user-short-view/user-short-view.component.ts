import { Component, Input } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-short-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-short-view.component.html',
  styleUrl: './user-short-view.component.css'
})
export class UserShortViewComponent {
  constructor(private router:Router) { }

  @Input() user: User | null = null;
  navigateToViewDetails(){
    console.log(this.user);
    if(this.user != null)
      this.router.navigate(['/detailsPage'], { queryParams: {id: this.user.id} });
  }
  navigateToEditDetails(){
    if(this.user != null)
      this.router.navigate(['/editDetails'], { queryParams: {id: this.user.id} });
  }
}
