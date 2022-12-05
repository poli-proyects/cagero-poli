import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import {RegistrosService}from 'src/app/services/registros.service'
import {movimiento}from 'src/app/models/movimiento'
@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  listMov :movimiento[]= []
  documento : String |null;

  constructor(
    private aRouter  : ActivatedRoute,  
    private serv : RegistrosService
  ) {
    this.documento = this.aRouter.snapshot.paramMap.get('documento');
   }

  ngOnInit(): void {
    this.getmovBYdoc();
  }

  getmovBYdoc(){
    this.serv.movimientos(this.documento).subscribe(
    data=>{
      this.listMov = data
    
    },error=>{
      swal.fire({
        icon: 'error',
        title: 'los campos son obligatorios',
      
      })
    }
    )
  }
}
