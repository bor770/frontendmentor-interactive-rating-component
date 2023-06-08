import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [CommonModule],
  selector: 'app-thank',
  standalone: true,
  styleUrls: ['./thank.component.css'],
  templateUrl: './thank.component.html',
})
export class ThankComponent {
  constructor(public route: ActivatedRoute) {}
}
