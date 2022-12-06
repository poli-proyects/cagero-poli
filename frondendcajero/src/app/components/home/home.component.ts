import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { usuario } from 'src/app/models/usuario';
import swal from 'sweetalert2';
import {RegistrosService} from 'src/app/services/registros.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 listUser :usuario[]= []
 

  constructor(
   private  router: Router,
  private registroServ : RegistrosService
    
  ) { }

  ngOnInit(): void {
    this.getPerson();
  }


getPerson(){
this.registroServ.getUser().subscribe(
  data=>{
    this.listUser = data
    
  },(error)=>{
          
      swal.fire({
        icon: 'error',
        title: 'Sin conexión a la base de datos ',
      
      })
      }
    )
  }
  closesecion(){
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
  }

