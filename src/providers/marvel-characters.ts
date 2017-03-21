import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Character } from '../models/character';

/*
  Generated class for the MarvelCharacters provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MarvelCharacters {
  marvelApiUrl = 'http://gateway.marvel.com/';
  marvelApiKey = "?apikey=c9cd45cc18a495a5f6f1a619cc16bc13";
  marvelHash = "&hash=6505d2217a44995181d90e93f3aadb99";
  marvelTimestamp = "&ts=1464344031.142341";
  marvelOffset = "&offset=";
  marvelApiVersion = "v1/";
  marvelAllCharacters = "public/characters";
  marvelOneCharacter = "public/characters/";
  marvelQuery = "&nameStartsWith=";

  constructor(public http: Http) {}

  // Load all marvel characters
  gerCharacters(offset: number): Observable<Character[]> {
    return this.http.get(`${this.marvelApiUrl}${this.marvelApiVersion}${this.marvelAllCharacters}${this.marvelApiKey}${this.marvelHash}${this.marvelTimestamp}${this.marvelOffset}${offset}`)
      .map(res => <Character[]>res.json().data.results)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Load one marvel character
  gerCharacter(id: number): Observable<Character> {
    return this.http.get(`${this.marvelApiUrl}${this.marvelApiVersion}${this.marvelOneCharacter}${id}${this.marvelApiKey}${this.marvelHash}${this.marvelTimestamp}`)
      .map(res => <Character>res.json().data.results[0])
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Search for chracters  
  searchCharacters(searchParam: string, offset: number): Observable<Character[]> {
    return this.http.get(`${this.marvelApiUrl}${this.marvelApiVersion}${this.marvelAllCharacters}${this.marvelApiKey}${this.marvelHash}${this.marvelTimestamp}${this.marvelQuery}${searchParam}${this.marvelOffset}${offset}`)
      .map(res => <Character[]>(res.json().data.results))
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  showError(message: string) {
    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });

      loading.present();
    ));
  }
}
