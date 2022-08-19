import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppHomeComponent } from './app-home/app-home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NameDialogComponent } from './app-home/name-dialog/name-dialog.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './app-home/aaronComponents/profile-component/profile.component';
import { SearchComponent } from './app-home/aaronComponents/search-component/search.component';
import { AccountsService } from './shared/accounts.service';
import { LoggingService } from './shared/logging.service';
import { DefaultComponent } from './app-home/default/default.component';
import { PhysicsDemoComponent } from './app-home/micahComponents/physics-demo/physics-demo.component';
import { NumberGuesserComponent } from './app-home/micahComponents/number-guesser/number-guesser.component';
import { LoanCalcComponent } from './app-home/micahComponents/loan-calc/loan-calc.component';
import { JokeGeneratorComponent } from './app-home/micahComponents/joke-generator/joke-generator.component';
import { CanvasBuilderComponent } from './app-home/micahComponents/canvas-builder/canvas-builder.component';
import { BookListComponent } from './app-home/micahComponents/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    NameDialogComponent,
    ProfileComponent,
    SearchComponent,
    DefaultComponent,
    PhysicsDemoComponent,
    NumberGuesserComponent,
    LoanCalcComponent,
    JokeGeneratorComponent,
    CanvasBuilderComponent,
    BookListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AccountsService,
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
