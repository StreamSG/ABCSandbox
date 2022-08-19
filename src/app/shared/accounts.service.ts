import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {
  accounts: {name: string; status: string;}[] = [];
  count: number = 0;

      constructor(private loggingService: LoggingService) {}


      /** I just added this but straight up don't know if I did it right
       * @description Used to add a BAN to the array of currently monitored accounts
       * @param name The BAN for this account. Must be a string of 9 digits
       * @param accountLocked Whether or not the account should be locked.
       * @returns Returns true if the account was successfully added to the the list of monitored 
       */
      addAccount(name: string, accountLocked: boolean): boolean {
        let foundMatch: boolean = false;
        for(let i = 0; i < this.accounts.length; i++) { 
          if(this.accounts[i].name === name) {
            foundMatch = true;
            break;
          }
        }
        if(!foundMatch) { // only adds the account of a matching BAN was not found
          this.accounts.push({
            name: name, 
            status: (accountLocked ? 'locked' : 'unlocked')
          });
          this.loggingService.logNewBan(name);
          this.count++;
        }

        // Returns true if a new account was added to the account array
        return !foundMatch;
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
