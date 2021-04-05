import { Component, OnInit } from '@angular/core';
import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import { DocumentCreator } from '../../document-creator';
import { Document, Paragraph, TextRun } from 'docx';
import { cap1, cap2, cap3, cap4 } from "../../caps-vivienda";
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.component.html',
  styleUrls: ['./vivienda.component.scss']
})
export class ViviendaComponent implements OnInit {

  viviendaForm: FormGroup;
  submitted: boolean = false; //lo agregué  yo para poder determinar el submitted
  fields = [{nombre: "Nombre", id: "renterFirstName"}, {nombre: "Apellido", id: "renterLastName"}, {nombre: "DNI", id: "renterDocumentNumber"}, {nombre: "Dirección", id: "renterAdress"}];
  ownerFields = [{nombre: "Nombre", id: "ownerFirstName"}, {nombre: "Apellido", id: "ownerLastName"}, {nombre: "DNI", id: "ownerDocumentNumber"}, {nombre: "Dirección", id: "ownerAdress"}];

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.viviendaForm = this.formBuilder.group({
      renterFirstName: new FormControl(null),
      renterLastName: new FormControl(null),
      renterDocumentNumber: new FormControl(null),
      renterAdress: new FormControl(null),
      ownerFirstName: new FormControl(null),
      ownerLastName: new FormControl(null),
      ownerDocumentNumber: new FormControl(null),
      ownerAdress: new FormControl(null)
    })
  }

  public download(): void {
    this.submitted = true; 
    
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([
      this.viviendaForm.value["renterFirstName"],
      this.viviendaForm.value["renterLastName"],
      this.viviendaForm.value["renterDocumentNumber"],
      this.viviendaForm.value["renterAdress"],
      this.viviendaForm.value["ownerFirstName"],
      this.viviendaForm.value["ownerLastName"],
      this.viviendaForm.value["ownerDocumentNumber"],
      this.viviendaForm.value["ownerAdress"],
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

  onSubmitClick()
  {
    //Display current form value
    this.submitted = true;    
    console.log(this.viviendaForm.value); //acceder a todos los campos
    console.log(this.viviendaForm.value["renterFirstName"]); //acceder a un campo puntual   
  }  
}
