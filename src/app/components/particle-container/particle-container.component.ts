import { Component } from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-particle-container',
  templateUrl: './particle-container.component.html',
  styleUrls: ['./particle-container.component.scss']
})
export class ParticleContainerComponent {


  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initializeParticles();
    });
  }

  private initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-container', {
        "particles": {
          "number": {
            "value": 400,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#7d0cfc"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#FFFFFF"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 10,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 500,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 500,
              "rotateY": 500
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 0.5
              }
            },
            "bubble": {
              "distance": 400,
              "size": 4,
              "duration": 0.3,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      })}}
}
