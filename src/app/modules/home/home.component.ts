import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService,private modalService: NgbModal) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
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
          alert('Email enviado com sucesso!');
          this.contactForm.reset();
        },
        (error: any) => {
          console.error('Erro ao enviar o email:', error);
        }
      );
    }
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

}
