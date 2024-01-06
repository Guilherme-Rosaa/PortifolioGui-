import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { DOCUMENT } from '@angular/common';
import isMobile from 'is-mobile';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
      this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const data = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message
      };

      this.emailService.sendEmail(data).then(
        () => {
          window.alert('E-mail enviado com sucesso, obrigado!');
          this.contactForm.reset();
        },
        (error: any) => {
          console.error('Erro ao enviar o email:', error);
        }
      );
    }
  }
}
