import { Injectable } from '@angular/core';
import { Person } from './Person';

@Injectable({
  providedIn: 'root'
})
export class ViviendaService {

  person: Person;

  constructor() { }

}
