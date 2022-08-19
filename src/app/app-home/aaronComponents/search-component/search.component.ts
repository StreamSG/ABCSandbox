import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AccountsService } from 'src/app/shared/accounts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent {
  accounts: {name: string, status: string}[] = [];
  count: number;

  constructor( private accountsService: AccountsService, private snackBar: MatSnackBar ) {}

  keyPressCheck(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  };

  onRunBAN(name: string) {
    this.count = this.accountsService.count;
    if(this.count < 5) {
      this.count++;
      if(name.length === 9) {
        this.accountsService.addAccount(name);
      } else {
        this.snackBar.open('Please enter a valid 9 digit account number!', '', {
          duration: 3000
        });
      };
    } else {
      this.snackBar.open('Max 5 accounts please!', '', {
        duration: 2000
      });
    }
  };


    ngOnInit(): void {
      this.accounts = this.accountsService.accounts;
      this.count = this.accountsService.count;
    }


}
