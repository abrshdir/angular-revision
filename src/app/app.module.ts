import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListMoviesComponent } from './feature-modules/movies/list-movies/list-movies.component';
import {HttpClientModule} from '@angular/common/http';
import { ItemDetailComponent } from './feature-modules/item-detail/item-detail.component';
import {ClickDirective} from './click.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    ItemDetailComponent,
    ClickDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// @ts-ignore
export class AppModule {}
