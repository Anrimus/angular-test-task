import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { ShowcasesComponent } from './components/showcases/showcases.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconsGridComponent } from './components/icons-grid/icons-grid.component';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MastheadComponent,
    ShowcasesComponent,
    TestimonialsComponent,
    CallToActionComponent,
    FooterComponent,
    IconsGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
