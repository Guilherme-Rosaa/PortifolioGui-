import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService,private toastr: ToastrService) {
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
        this.toastr.success("Obrigado por enviar sua mensagem.", "E-mail enviado com sucesso!")
        this.toastr.error("Obrigado por enviar sua mensagem.", "E-mail enviado com sucesso!")
        this.toastr.warning("Obrigado por enviar sua mensagem.", "E-mail enviado com sucesso!")
        this.toastr.show("Obrigado por enviar sua mensagem.", "E-mail enviado com sucesso!")
        this.toastr.info("Obrigado por enviar sua mensagem.", "E-mail enviado com sucesso!")
        this.contactForm.reset();
        },
        (error: any) => {
          console.error('Erro ao enviar o email:', error);
        }
      );
    }
  }
}
