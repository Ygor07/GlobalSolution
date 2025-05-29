import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GiftsComponent } from './pages/gifts/gifts.component';
import { InspiracaoComponent } from './pages/inspiracao/inspiracao.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { ProgramacaoComponent } from './pages/programacao/programacao.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'gifts', component: GiftsComponent },
    { path: 'inspiracao', component: InspiracaoComponent },
    { path: 'parceiros', component: ParceirosComponent },
    { path: 'programacao', component: ProgramacaoComponent }
];