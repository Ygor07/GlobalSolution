import { Component } from '@angular/core';
import { InspiracaoComponent } from '../inspiracao/inspiracao.component';
import { GiftsComponent } from '../gifts/gifts.component';
import { ParceirosComponent } from '../parceiros/parceiros.component';
import { ProgramacaoComponent } from '../programacao/programacao.component';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ InspiracaoComponent, GiftsComponent, ParceirosComponent, ProgramacaoComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private route: ActivatedRoute) {}

  titulo = 'Global Solution';
  descricao = 'Uma jornada tecnológica rumo ao futuro.';
  dataEvento = '26 de maio';

  listaDestaques = ["Inovação", "Tecnologia", "Impacto Social"]


  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToFragment(fragment);
      }
    });
  }

  private scrollToFragment(fragment: string) {
    setTimeout(() => {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
}
