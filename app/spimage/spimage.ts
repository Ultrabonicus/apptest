import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class SPImage {
  private subject = new Subject<any>();

  sendImage = (message: any)=>{
    console.log(message)
    this.subject.next(message);
  }

  getImage = (): Observable<any> => {
    return this.subject.asObservable();
  }
}