import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  public clientes;

  formClientes;
  Clientes = [];

  constructor(private router: Router,
    private clientesService: ClientesService,
    private activaroute: ActivatedRoute,
    private api: ClientesService) {

    this.clientes = clientesService.clientes;
    
    this.activaroute.paramMap.subscribe(
      (params)=>{
        this.clientesService.todosClientes(params.get('id')).subscribe(
          (res)=>{
            console.log(res);
            console.log(params.get('id'));
       //    this.asigMov(mov_resultados);
       //    this.asigNom(mov_resultados);
            console.log("exito");
            console.log(this.Clientes);
          },
          (err)=>{
            console.log(err);
            this.Clientes =err;
          }
          
        )
        
      }

    );
  }

  ngOnInit() {
  }

}
