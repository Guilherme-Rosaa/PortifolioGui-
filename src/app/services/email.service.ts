import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private user_id = '8_CJnjjqiV2RvsHNz';
  private service_id = 'service_c0z7gmq';
  private template_id = 'template_equw2rt';

  constructor() {
    emailjs.init(this.user_id);
  }

  sendEmail(data: any) {
    return emailjs.send(this.service_id, this.template_id, data);
  }
}
