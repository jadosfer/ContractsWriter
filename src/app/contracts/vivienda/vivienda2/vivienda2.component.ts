import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import { DocumentCreator } from '../../../document-creator';
import { Document, Paragraph, TextRun } from 'docx';


import { Router } from '@angular/router';
import { ViviendaService } from 'src/app/vivienda.service';
import { cap1, cap2, cap3, cap4 } from 'src/app/caps-vivienda';
import { Person } from 'src/app/Person';

@Component({
  selector: 'app-vivienda2',
  templateUrl: './vivienda2.component.html',
  styleUrls: ['./vivienda2.component.scss']
})


export class Vivienda2Component implements OnInit {

  vivienda2Form: FormGroup;  
  submitted: boolean = false; //lo agregué  yo para poder determinar el submitted
  renterFields = [{nombre: "Nombre", id: "renterFirstName"}, {nombre: "Apellido", id: "renterLastName"}, {nombre: "DNI", id: "renterDocumentNumber"}, {nombre: "Dirección del inmueble", id: "renterAdress"}, {nombre: "Correo electrónico", id: "renterEmail"}];
  myOwner = this.viviendaService.person;
  myRenter: Person = {
    firstName : null, 
    lastName : null,
    documentNumber : null,
    adress: null,
    email: null
  };

  constructor(public formBuilder: FormBuilder, public viviendaService: ViviendaService) { }

  ngOnInit(): void {
    this.vivienda2Form = this.formBuilder.group({            
      renterFirstName: new FormControl(null),
      renterLastName: new FormControl(null),
      renterDocumentNumber: new FormControl(null),
      renterAdress: new FormControl(null),
      renterEmail: new FormControl(null)
    
    })
  }

  public download(): void {
    this.submitted = true; 

    this.myRenter.firstName = this.vivienda2Form.value["renterFirstName"]; 
    this.myRenter.lastName = this.vivienda2Form.value["renterLastName"];
    this.myRenter.documentNumber = this.vivienda2Form.value["renterDocumentNumber"];
    this.myRenter.adress = this.vivienda2Form.value["renterAdress"];
    this.myRenter.email = this.vivienda2Form.value["renterEmail"];    

    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([      
      this.myOwner,
      this.myRenter,
      cap1,
      cap2,
      cap3,
      cap4
    ]);
    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }  
}
