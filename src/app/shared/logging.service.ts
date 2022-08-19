import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logNewBan(name: string) {
    console.log('User has created BAN: ' + name);
  }
  logStatusChange(status: string) {
    console.log('User has modified port to status: ' + status);
  }
  logBanRemoved(id: number) {
    console.log('User has deleted BAN ID:' + id);
  }

  constructor() { }
}
