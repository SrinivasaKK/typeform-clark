import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FreeTextComponent } from './components/free-text/free-text.component';
import { SingleSelectionComponent } from './components/single-selection/single-selection.component';
import { MultiSelectionComponent } from './components/multi-selection/multi-selection.component';
import { ProceedButtonComponent } from './components/proceed-button/proceed-button.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SuccessComponent } from './components/success/success.component';
@NgModule({
  declarations: [
    AppComponent,
    FreeTextComponent,
    SingleSelectionComponent,
    MultiSelectionComponent,
    ProceedButtonComponent,
    WelcomeComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
