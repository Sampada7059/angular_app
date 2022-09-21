import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  con:Contact[]=[
    {
      ename:'Sampada Polepalli',
      emailid:'sales@musicstores.in',
      ephone:8977777151,
      eaddress: '1st Floor, Above Bata Showroom, Metro Pillar No 1727, Madhapur, Hyderabad 500081'
    }
  ]
    public getContactDetails(): any {
      const conObservable = new Observable(observe => {
        setTimeout(() => {
          observe.next(this.con);
        }, 1000);
      });
      return conObservable;
    }
}
