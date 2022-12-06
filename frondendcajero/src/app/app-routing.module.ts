import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginguardGuard } from './guards/loginguard.guard';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { RetiroComponent } from './components/retiro/retiro.component';
import { ConsignarComponent } from './components/consignar/consignar.component';

const routes: Routes = [
 { path: 'login', component: LoginComponent },
  {path :'home',component: HomeComponent,canActivate: [LoginguardGuard]},
  {path :'movmientos/:documento',component:MovimientosComponent,canActivate: [LoginguardGuard]},
  {path :'consginar/:documento',component:ConsignarComponent,canActivate: [LoginguardGuard]},
  {path :'retiro/:documento',component:RetiroComponent,canActivate: [LoginguardGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
