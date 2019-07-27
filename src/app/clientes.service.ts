import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  formClientes;
  public clientes;

  constructor(private http: HttpClient) {
    
   }

   public todosClientes(id){
    return this.http.get("");
  }
}
