import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {
  accounts: {name: string; status: string;}[] = [];
  count: number = 0;

      constructor(private loggingService: LoggingService) {}



      addAccount(name: string) {
        this.accounts.push({
          name: name, 
          status: 'unlocked'
        });
        this.loggingService.logNewBan(name);
        this.count++
      }

      updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
      }

      removeAccount(id: number) {
        this.accounts.splice(id, 1);
        this.loggingService.logBanRemoved(id);
        this.count--
      }

}
