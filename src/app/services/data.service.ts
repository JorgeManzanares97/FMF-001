import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }
  getEquipos(){
    return this.http.get < Equipo[] > ('./data/clubes.ts')
  }
}

