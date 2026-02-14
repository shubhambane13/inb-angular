import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-data-view',
  templateUrl: './customer-data-view.html',
  styleUrl: './customer-data-view.css',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule
  ],
})
export class CustomerDataViewComponent {
  cusomerViewForm!: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.cusomerViewForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      address: [''],
    });

    this.cusomerViewForm.disable();
  }

  patchValue(data: { [key: string]: any; }) {
    this.cusomerViewForm.patchValue(data)
  }
}
