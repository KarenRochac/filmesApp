import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IListaGenero } from '../models/IGenero.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  lingua = 'pt-BR';

  private apiURl = 'https://api.themoviedb.org/3/';
  private key = '?api_key=ed83bf6f286b9389f2595ca943b9a653';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarGeneros(): Observable<IListaGenero>{
    const url = `${this.apiURl}genre/movie/list${this.key}&language=${this.lingua}`;

    return this.http.get<IListaGenero>(url).pipe(
      map(retorno=> retorno),
      catchError(erro=> this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API.',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
