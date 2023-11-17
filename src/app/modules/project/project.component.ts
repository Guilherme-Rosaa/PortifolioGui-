import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit{

  constructor(private renderer: Renderer2){}


  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  projetos = [
    {
      Nome: 'Chat',
      Descricao:'Este é um projeto de chat que desenvolvi utilizando Angular para o front-end e Node.js para o back-end, com o servidor baseado em WebSocket. O propósito deste projeto é demonstrar minhas habilidades em Node.js e meu conhecimento em WebSocket. Vale notar que o projeto não está atualmente hospedado em um servidor online; portanto, para testá-lo, é necessário fazer o download e executá-lo localmente. Clique no botão ao lado para acessar o repositório.',
      Imagem: './assets/ChatFoto.jpeg',
      Url: 'https://github.com/Guilherme-Rosaa/Chat.git',
      expandido: false,
    },
  ];
}
