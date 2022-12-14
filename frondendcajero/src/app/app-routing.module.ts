import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginguardGuard } from './guards/loginguard.guard';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { RetiroComponent } from './components/retiro/retiro.component';
import { ConsignarComponent } from './components/consignar/consignar.component';
import { ConsultorComponent } from './components/consultor/consultor.component';
import { RolesGuard } from './guards/roles.guard';

const routes: Routes = [
 { path: '', component: LoginComponent },
  {path :'home',component: HomeComponent,canActivate:[RolesGuard],data:{expectRole : 'admin'}},
  {path :'movmientos/:documento',component:MovimientosComponent,canActivate: [LoginguardGuard]},
  {path :'consginar/:documento',component:ConsignarComponent,canActivate: [LoginguardGuard]},
  {path :'retiro/:documento',component:RetiroComponent,canActivate: [LoginguardGuard]},
  {path:'consultor',component:ConsultorComponent,canActivate:[LoginguardGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
