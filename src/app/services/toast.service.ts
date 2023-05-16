import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toastStatus = new Subject<boolean>();

  show() {
    this.toastStatus.next(true);
    setTimeout(() => this.toastStatus.next(false), 2000);
  }

  constructor() {}
}
