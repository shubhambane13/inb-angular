import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.html',
  styleUrl: './welcome-banner.css',
  standalone: true,
  imports: [MatIconModule, DatePipe],
})
export class WelcomeBannerComponent {
  @Input() name: string = 'User';
  @Input() lastLogin: Date = new Date();
  today: Date = new Date();
}
