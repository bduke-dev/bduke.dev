import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.development';
//import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  /* App Sizes */
  private screenSizeLg = 768;
  private screenSizeSm = 767;
  private screenSixeXs = 576;

  /* Loading Screen */
  private outstandingCalls = new BehaviorSubject<number>(0);
  currentOutstandingCalls = this.outstandingCalls.asObservable();
  private internalOutstandingCalls = 0;

  /* Error Handling */
  showErrorModal = false;
  errorMessage = '';
  errorButtonText = 'OK';

  /* Confirm Handling */
  showConfirmModal = false;
  confirmMessage = '';
  confirmButtonText = 'OK';
  confirmButtonCancelText = 'NO';

  private gsId = 0;

  constructor() { }


  /* Loading Screen */
  incrementOutstandingCalls() {
    this.internalOutstandingCalls++;
    this.outstandingCalls.next(this.internalOutstandingCalls);
  }

  decrementOutstandingCalls() {
    if (this.internalOutstandingCalls > 0) {
      this.internalOutstandingCalls--;
      this.outstandingCalls.next(this.internalOutstandingCalls);
    }
  }

  /* Error Service */
  acceptError() {
    this.showErrorModal = false;
    this.errorMessage = '';
  }

  triggerError(message: string) {
    this.showErrorModal = true;
    this.errorMessage = message;
  }

  handelHTTPError(Error: any) {
    this.triggerError('http error');
  }

  checkResponse(response: any): boolean {
    response = response as RetMessage;
    if (response.retMessage && response.error) {
      this.triggerError(response.retMessage);
      return false;
    }
    return true;
  }

  fx!: ((x: any) => void);
  input: any;

  /* Custom Confirm */
  triggerConfirm(message: string, tmpFx: (x: any) => void, tmpInput: any) {
    this.confirmMessage = '';
    //this.fx = null;
    this.input = null;

    this.showConfirmModal = true;
    this.confirmMessage = message;

    this.fx = tmpFx;
    this.input = tmpInput;
  }

  acceptConfirm() {
    this.showConfirmModal = false;
    this.fx(this.input);
  }

  rejectConfirm() {
    this.showConfirmModal = false;
  }

  getNextGsId(): string {
    return 'gsID' + this.gsId++;
  }

  /* helpwe functions */
  strNoE(s: string) {
    return s === undefined || s === null || s.trim() === '' || s.length === 0 || s.length === null || s.length === undefined;
  }

  /*
    downloadFileAs(filename, data, MimeType) {
      const blob = new Blob([data], { type: MimeType });
      //saveAs(blob, filename);
    }
  */

  screenSize(): string {
    if (window.innerWidth >= this.screenSizeLg) {
      return 'lg';
    }
    else if (this.screenSizeLg > window.innerWidth && window.innerWidth > this.screenSixeXs) {
      return 'sm';
    }
    else {
      //return 'xs';
      return 'sm';
    }
  }

  devConsoleLog(x: any): void {
    if (!environment.production) {
      console.log(x);
    }
  }

  // For one given propery and its value, get the value of another propery in the same object
  propertyMap(arr: any[], queryProperty: string, queryValue: any, findProperty: string): any {
    for (let i = 0; i < arr.length; i++) {
      if (Object.prototype.hasOwnProperty.call(arr[i], queryProperty) && arr[i][queryProperty] === queryValue) {
        if (Object.prototype.hasOwnProperty.call(arr[i], findProperty)) {
          return arr[i][findProperty];
        }
      }
    }
  }

  arrayObjectIndexOf(arr: any[], searchTerm: any, property: string) {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (typeof arr[i] !== 'undefined' && arr[i] !== null && arr[i][property] === searchTerm) { return i; }
    }
    return -1;
  }
}

export class RetMessage {
  retMessage!: string;
  error!: boolean;
}

export class Page {
  count!: number;
  previous!: number;
  next!: number;
}
