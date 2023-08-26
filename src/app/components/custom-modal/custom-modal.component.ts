import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit {
  @Input()
  title!: string;
  @Input()
  content!: string;
  @Input()
  autoCloseDelay!: string;
  constructor() { }

  ngOnInit(): void {
    if (this.autoCloseDelay) {
      setTimeout(() => {
        this.closeModal();
      }, parseInt(this.autoCloseDelay));
    }
  }

  closeModal(): void {
    console.log('Fechando o modal...');
  }
}
