import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  @Input() onChangeSlide: (sName_Slide: string) => void;

  oContactForm: FormGroup;
  bSubmitted = false;
  bSendMessageProcess = false;

  constructor(private oFormBuilder: FormBuilder,
              private oHttpClientService: HttpClient
  ) {
    this.oContactForm = this.oFormBuilder.group({
      name: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  get f() {
    return this.oContactForm.controls;
  }

  onSubmit() {
    this.bSubmitted = true;

    if (this.oContactForm.invalid) {
      return;
    }

    this.bSendMessageProcess = true;
    const sText = `<b>Портфолио</b>\n\n<b>Имя</b>: <code>${this.oContactForm.value.name}</code>\n<b>Сообщение</b>: <code>${this.oContactForm.value.message}</code>`;
    this.oHttpClientService.post(`https://api.telegram.org/bot${environment.sTelegramBotToken}/sendMessage`, {
      chat_id: '202036089',
      text: sText,
      parse_mode: 'html'
    }).subscribe((oRes) => {
      this.bSubmitted = false;
      this.oContactForm.reset();
    }, (oErr) => {
      this.bSubmitted = false;
      this.oContactForm.reset();
    });
  }

  onOpenUrl = (sUrl: string) => {
    window.open(sUrl, '_blank');
  };

}
