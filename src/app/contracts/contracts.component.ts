import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  InfoAlquileres: string;
  InfoAutos: string;

  constructor() { }

  ngOnInit(): void {}
 
}