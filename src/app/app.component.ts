import { Component, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { NameDialogComponent } from './app-home/name-dialog/name-dialog.component';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;

  constructor(private breakpointObserver: BreakpointObserver, private dialog: MatDialog) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    openDialog(): void {
      const dialogRef = this.dialog.open(NameDialogComponent, {
        width: '250px',
        data: {name: this.name},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('dialog closed');
        console.log(this.name)
        this.name = result;
      });
    }
  }
  
