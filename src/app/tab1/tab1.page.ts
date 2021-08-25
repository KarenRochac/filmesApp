import { IListaFilmes } from './../models/IFilmeAPI.model';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { IFilme } from './../models/IFilme.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Filmes';

  listaVideos: IFilme[] =[
    {
      nome: 'Soul (2020)',
      lancamento: '25/12/2020',
      duracao: '1h 40m',
      classificacao: 82,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bzDAfXoqNAvWUe7uss2NE3BmRqy.jpg',
      generos: ['Família', 'Animação', 'Música', 'Comédia', 'Fantasia'],
      pagina: '/soul'
    },
    {
      nome:'Luca (2021)',
      lancamento: '06/17/2021',
      duracao: '1h 41m',
      classificacao: 82,
      cartaz:  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
      generos: ['Animação', 'Comédia', 'Família', 'Fantasia'],
      pagina: '/luca'
    },
    {
      nome:'O Rei do Show (2017)',
      lancamento: '25/12/2017',
      duracao: '1h 44m',
      classificacao: 80,
      cartaz:  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w5EPR88Kz73eRvnwmgUUKcZQt27.jpg ',
      generos: ['Drama'],
      pagina: '/o-rei-do-show'
    },
    {
      nome:'Moana: Um Mar de Aventuras (2016)',
      lancamento: '05/01/2017',
      duracao: '1h 47m',
      classificacao: 76,
      cartaz:  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4jNbH7A9HGL4OCNQvzj98ksoa2f.jpg',
      generos: ['Aventura', 'Comédia', 'Família', 'Animação'],
      pagina: '/moana'
    },
    {
      nome:'Procurando Dory (2016)',
      lancamento: '30/06/2016',
      duracao: '1h 37m',
      classificacao: 71,
      cartaz:  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5MOyKnmtE2hd778bIybw9v8HkiP.jpg',
      generos: ['Aventura', 'Animação', 'Comédia', 'Família'],
      pagina: '/produrando-dory'
    }
  ];

  listaFilmes: IListaFilmes;

  constructor(
  public dadosService: DadosService,
  public filmeService: FilmeService,
  public route: Router)
  {}

  buscarFilmes(evento: any){
    console.log(evento.target.value);
    const busca = evento.target.value;
    if(busca && busca.trim() !== ''){
      this.filmeService.buscarFilmes(busca).subscribe(dados=>{
        console.log(dados);
        this.listaFilmes = dados;
      });
    }
  }

  exibirFilme(filme: IFilme){
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

}
