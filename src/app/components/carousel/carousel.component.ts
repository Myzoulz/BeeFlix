import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCarouselItem } from '../interfaces/movies';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() carouselItems: MainCarouselItem[] = [];
}
