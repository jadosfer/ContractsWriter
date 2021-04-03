import { Component, OnInit } from '@angular/core';
import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import { DocumentCreator } from '../../document-creator';
import { Document, Paragraph, TextRun } from 'docx';

import { cap1, cap2, cap3, cap4 } from "../../caps-vivienda";


@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.component.html',
  styleUrls: ['./vivienda.component.scss']
})
export class ViviendaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public download(): void {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([
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
