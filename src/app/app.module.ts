import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { MainwebsiteComponent } from './mainwebsite/mainwebsite.component';
import { BackgroundcontainerComponent } from './backgroundcontainer/backgroundcontainer.component';
import { QuoteComponent } from './quote/quote.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { WorkComponent } from './work/work.component';
import { PreloadingscreenComponent } from './preloadingscreen/preloadingscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainwebsiteComponent,
    BackgroundcontainerComponent,
    QuoteComponent,
    ServicesComponent,
    FooterComponent,
    WorkComponent,
    PreloadingscreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
