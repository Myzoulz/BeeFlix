import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() images: string[] = []; // Recebe as URLs das imagens como entrada
}
