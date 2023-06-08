import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule, MatButtonModule, MatChipsModule, ReactiveFormsModule],
  selector: 'app-rating',
  standalone: true,
  styleUrls: ['./rating.component.css'],
  templateUrl: './rating.component.html',
})
export class RatingComponent implements OnInit {
  form: FormGroup;
  ratings = Array.from({ length: 5 }, (_, i) => i + 1);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      selected: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.router.navigate([this.form.value.selected]);
    }
  }
}
