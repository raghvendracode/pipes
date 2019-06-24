import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { AgePipe } from './pipes/age.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PowerPipe } from './pipes/power.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    AgePipe,
    FilterPipe,
    PowerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
