import { Component } from '@angular/core';
import { WelcomeBannerComponent } from '../../../shared/components/welcome-banner/welcome-banner';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
  standalone: true,
  imports: [WelcomeBannerComponent, MatCardModule, MatIconModule, MatDividerModule, MatListModule],
})
export class AdminDashboard { }
