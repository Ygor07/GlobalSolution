import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HoverBorderDirective } from '../../directives/hover-border.directive';
import { CommonModule } from '@angular/common';
import { Evento } from '../../data/evento';

@Component({
  selector: 'app-evento-card',
  imports: [HoverBorderDirective, CommonModule],
  templateUrl: './evento-card.component.html',
  styleUrl: './evento-card.component.css'
})
export class EventoCardComponent implements OnChanges{
  @Input() titulo: string = "";
  @Input() data: string = "";
  @Input() horario: string = "";
  @Input() local: string = "";

  subscribed: boolean = false;
  evento: Evento | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.titulo || this.data || this.horario || this.local) {
      this.evento = {
        titulo: this.titulo,
        data: this.data,
        horario: this.horario,
        local: this.local
      };
    }
  }

  onClick() {
    if (!this.evento) return;
    
    this.subscribed = true;

    setTimeout(() => {
      this.subscribed = false;
    }, 3000);
  }
}
