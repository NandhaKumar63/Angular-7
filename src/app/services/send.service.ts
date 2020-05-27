import { Injectable } from '@angular/core';

export class SendService {

  constructor() { }

  sendMail(email: string): void {
    console.log(email + " in Send Service");
  }
}
