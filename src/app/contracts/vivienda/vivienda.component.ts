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
  fields = [{nombre: "Nombre", id: "firstName"}, {nombre: "Apellido", id: "lastName"}, {nombre: "DNI", id: "documentNumber"}, {nombre: "Dirección", id: "adress"}]

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.viviendaForm = this.formBuilder.group({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      documentNumber: new FormControl(null),
      adress: new FormControl(null),
    })
  }

  public download(): void {
    this.submitted = true; 
    
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([
      this.viviendaForm.value["firstName"],
      this.viviendaForm.value["lastName"],
      this.viviendaForm.value["documentNumber"],
      this.viviendaForm.value["adress"],
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
    console.log(this.viviendaForm.value["firstName"]); //acceder a un campo puntual   
  }  
}
