import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from "@angular/forms";
import { ActivatedRoute } from "@angular/router"
import { ClientesService } from "../clientes.service";
import { CompraService } from "../compra.service";


@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  formTotal;

  constructor( private api:ClientesService,
    private router: ActivatedRoute,
    private formBuilder:FormBuilder) { }

createForm(){
    this.formTotal = this.formBuilder.group({
      monto:[''],
      agregar:[''],
      description:['']
    });
  }
  ngOnInit() {
  }

}
