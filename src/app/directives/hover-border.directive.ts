// hover-border.directive.ts
import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverBorder]'
})
export class HoverBorderDirective implements OnInit {
  @Input('appHoverBorder') borderColor: string = '#ff1900';
  private defaultBorderStyle: string = '2px solid';
  private originalBorder: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.originalBorder = this.el.nativeElement.style.border || 'none';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(`${this.defaultBorderStyle} ${this.borderColor}`);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.originalBorder);
  }

  private setBorder(borderStyle: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'border', borderStyle);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'border 0.3s ease');
  }
}