import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { UserDetailsViewComponent } from './user-details-view/user-details-view.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopNavBarComponent, UserDetailsViewComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'enterpriseUsers';
}
