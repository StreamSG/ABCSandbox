import { Component, Input } from '@angular/core';

import { AccountsService } from 'src/app/shared/accounts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() account: {name: string; status: string; } | undefined;
  @Input() id: number;

  constructor( private accountsService: AccountsService ) { }
  count: number; 
  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
  }

  onRemove() {
    this.accountsService.removeAccount(this.id);
  }

  ngOnInit(): void {
    this.count = this.accountsService.count;
  }

}
