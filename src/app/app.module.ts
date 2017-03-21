import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Providers
import { MarvelCharacters } from '../providers/marvel-characters';

//Pages
import { HomePage } from '../pages/home/home';
import { CharacterDetailPage } from '../pages/character-detail/character-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CharacterDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CharacterDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, MarvelCharacters]
})
export class AppModule {}
