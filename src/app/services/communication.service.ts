import { Injectable, Inject } from '@angular/core';
import { SendService } from './send.service';


export class EmailService {

  constructor() {

  }
}

@Injectable()
export class CommunicationService {

  constructor(private sendService:SendService,
  private emailService: EmailService) { }

  send(): void {
    this.sendService.sendMail("nandha@gmail.com");
  }
}
