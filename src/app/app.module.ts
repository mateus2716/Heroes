import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    GalleryComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
