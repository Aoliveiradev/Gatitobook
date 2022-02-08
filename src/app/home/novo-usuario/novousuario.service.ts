import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NovoUsuario } from "./novo-usuario";
import { environment } from "../../../environments/environment";

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NovousuarioService {

  constructor(private http: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.http.post(`${API}/user/signup`, novoUsuario);
  };

  verificaUsuarioExistente(nomeUsuario: NovoUsuario) {
    return this.http.get(`${API}/user/exists/${nomeUsuario}`)
  };
}
