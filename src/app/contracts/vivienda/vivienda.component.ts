import { Component, OnInit } from '@angular/core';
import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import { DocumentCreator } from '../../document-creator';
import { Document, Paragraph, TextRun } from 'docx';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Person} from "../../Person";
import { ViviendaService } from 'src/app/vivienda.service';


@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.component.html',
  styleUrls: ['./vivienda.component.scss']
})
export class ViviendaComponent implements OnInit {

  viviendaForm: FormGroup;
  submitted: boolean = false; //lo agregué  yo para poder determinar el submitted
  ownerFields = [{nombre: "Nombre", id: "ownerFirstName"}, {nombre: "Apellido", id: "ownerLastName"}, {nombre: "DNI", id: "ownerDocumentNumber"}, {nombre: "Dirección", id: "ownerAdress"}, {nombre: "Correo electrónico", id: "ownerEmail"}];  
  
  myOwner: Person ={
    firstName : null, 
    lastName : null,
    documentNumber : null,
    adress: null,
    email: null
  };
  
   
  constructor(public formBuilder: FormBuilder, public viviendaService: ViviendaService) { 
    this.viviendaService.person = this.myOwner;
  }

  ngOnInit(): void { 
    this.viviendaForm = this.formBuilder.group({         
      ownerFirstName: new FormControl(null),
      ownerLastName: new FormControl(null),
      ownerDocumentNumber: new FormControl(null),
      ownerAdress: new FormControl(null),
      ownerEmail: new FormControl(null)    
    });   
  }

  

  public step2() {    
    this.myOwner.firstName = this.viviendaForm.value["ownerFirstName"]; 
    this.myOwner.lastName = this.viviendaForm.value["ownerLastName"];
    this.myOwner.documentNumber = this.viviendaForm.value["ownerDocumentNumber"];
    this.myOwner.adress = this.viviendaForm.value["ownerAdress"];
    this.myOwner.email = this.viviendaForm.value["ownerEmail"];    
  }

  onSubmitClick()
  {
    //Display current form value
    this.submitted = true;    
    console.log(this.viviendaForm.value); //acceder a todos los campos

    
  }  
}
