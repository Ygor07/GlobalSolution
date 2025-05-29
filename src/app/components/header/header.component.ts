import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;
  
  navItems = [
    { label: 'Inspiração', route: 'inspiracao' },
    { label: 'Parceiros', route: 'parceiros' },
    { label: 'Programação', route: 'programacao' },
    { label: 'Gifts', route: 'gifts' }
  ];

  constructor(private router: Router) {}

  scrollTo(sectionId: string): void {
    this.menuOpen = false;
    
    this.router.navigate(['/'], { fragment: sectionId })
      .then(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}