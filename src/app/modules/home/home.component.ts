import { Component, OnInit, Renderer2 } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isMob: any;

  cards = [
    { title: 'Quem sou:', text: 'Meu nome é Guilherme, tenho 20 anos de idade e minha jornada no mundo do desenvolvimento de software teve início em 2021. Desde então, tenho trilhado um caminho de aprendizado autodidata, combinando estudos independentes com orientações valiosas de profissionais experientes na área.' },
    { title: 'Como comecei:', text: 'Minha incursão no desenvolvimento começou com uma paixão pela tecnologia e o desejo de compreender os intricados mecanismos por trás do software. Com uma abordagem autodidata, mergulhei em diversos recursos educacionais, cursos online e documentações técnicas para adquirir conhecimento sólido em programação.' },
    { title: 'Experiencia:', text: 'Profissionalmente, tenho um ano de experiência no desenvolvimento de software, trabalhando em projetos desafiadores que me permitiram aplicar meu conhecimento em um ambiente prático. Minha abordagem de resolução de problemas e meu compromisso com a qualidade me motivam a buscar soluções eficazes em todos os projetos em que me envolvo.' },
    { title: 'Curiosidades:', text: 'Fora do mundo do desenvolvimento, sou um entusiasta do aprendizado contínuo e estou sempre em busca de aprimorar minhas habilidades técnicas e acompanhar as últimas tendências tecnológicas. Estou ansioso para continuar aperfeiçoando minha carreira no desenvolvimento de software, contribuindo para projetos significativos e enfrentando novos desafios.' }
  ];
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    document.addEventListener('DOMContentLoaded', () => {
      this.initializeParticles();
    });
  }

  private initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-container', {
        particles: {
          number: {
            value: 400,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#7d0cfc',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#FFFFFF',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 500,
            color: '#ffffff',
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 500,
              rotateY: 500,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false,
              mode: 'bubble',
            },
            onclick: {
              enable: false,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 0.5,
              },
            },
            bubble: {
              distance: 400,
              size: 4,
              duration: 0.3,
              opacity: 1,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }
  }

  isMobile() {
    return window.innerWidth < 850;
  }
}
