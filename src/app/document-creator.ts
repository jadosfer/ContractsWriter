import {ViviendaComponent} from './contracts/vivienda/vivienda.Component';
import {
    AlignmentType,
    Document,
    HeadingLevel,
    Packer,
    Paragraph,
    TabStopPosition,
    TabStopType,
    TextRun
  } from "docx";
  
  const PHONE_NUMBER = "07534563401";
  const INTRO = "07534563401";
  const PROFILE_URL = "https://www.linkedin.com/in/dolan1";
  const EMAIL = "docx@docx.com";
  var date = new Date;

  
  export class DocumentCreator {
    
    // tslint:disable-next-line: typedef
    public create([owner, renter, cap1, cap2, cap3, cap4]): Document {
      const document = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                text: "CONTRATO DE LOCACIÓN \n\r \n",
                heading: HeadingLevel.HEADING_1
              }),

              new Paragraph({text: ""}),
              this.createHeader(owner, renter),

              new Paragraph({text: ""}),
              this.createHeading("PRIMERA"),     
              this.createFirstCap(renter),
              
              new Paragraph({text: ""}),
              
              this.createHeading("SEGUNDA"),
              this.createSecondCap(renter),
              
              new Paragraph({text: ""}),
              
            ]
          }
        ]
      });
  
      return document;
    }
  
    public createHeader(         
      owner,
      renter      
    ): Paragraph {
      return new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun(
            `En la Ciudad de Buenos Aires, a los ${date.getDate()} días del mes de ${this.getMonthFromInt(date.getMonth()+ 1)} de ${date.getFullYear()}, entre ${owner.firstName + " " + owner.lastName}, DNI N° ${owner.documentNumber}, con domicilio en la calle ${owner.adress}, domicilio electrónico ${owner.email} en lo sucesivo denominado/a como “LOCADOR/A” por una parte, y por la otra ${renter.firstName + " " + renter.lastName}, DNI N° ${renter.documentNumber}, con domicilio en el inmueble locado, domicilio electrónico ${renter.email}, en adelante denominado/a como “LOCATARIO/A”, convienen en celebrar el presente contrato de LOCACIÓN  de vivienda, sujeto a las cláusulas siguientes y a las disposiciones del Código Civil y Comercial-----------------------------`            
          ),         
        ]
      });
    }

    public createFirstCap(renter): Paragraph{
        return new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          children: [
            new TextRun(
              `EL/LA “LOCADOR/A” cede en locación al “LOCATARIO/A”, que acepta ocupar en tal carácter, el inmueble ubicado en calle ${renter.adress}. de la Ciudad Autónoma de Buenos Aires. El LOCATARIO/A se obliga a destinar el inmueble locado para vivienda familiar, no pudiendo ello ser modificado, ni aún en forma temporaria, sin el consentimiento expreso del/la  “LOCADOR/A”.`            
            ),           
          ]
        });
      }

      public createSecondCap(renter): Paragraph{
        return new Paragraph({
          alignment: AlignmentType.JUSTIFIED,
          children: [
            new TextRun(
              `Las partes acuerdan que el plazo de vigencia de la locación será de 36 (TREINTA Y SEIS)  meses a contar desde el día ….. del mes de …………. del año DOS MIL ……….. por lo que su vencimiento se producirá de pleno derecho e indefectiblemente el día`            
            ),           
          ]
        });
      }

  
    public createHeading(text: string): Paragraph {
      return new Paragraph({
        text: text,
        heading: HeadingLevel.HEADING_1,
        thematicBreak: true
      });
    }
  
    public createSubHeading(text: string): Paragraph {
      return new Paragraph({
        text: text,
        heading: HeadingLevel.HEADING_2
      });
    }
  
    public createInstitutionHeader(
      institutionName: string,
      dateText: string
    ): Paragraph {
      return new Paragraph({
        tabStops: [
          {
            type: TabStopType.RIGHT,
            position: TabStopPosition.MAX
          }
        ],
        children: [
          new TextRun({
            text: institutionName,
            bold: true
          }),
          new TextRun({
            text: `\t${dateText}`,
            bold: true
          })
        ]
      });
    }
  
    public createRoleText(roleText: string): Paragraph {
      return new Paragraph({
        children: [
          new TextRun({
            text: roleText,
            italics: true
          })
        ]
      });
    }
  
    public createBullet(text: string): Paragraph {
      return new Paragraph({
        text: text,
        bullet: {
          level: 0
        }
      });
    }
  
    // tslint:disable-next-line:no-any
    public createSkillList(skills: any[]): Paragraph {
      return new Paragraph({
        children: [new TextRun(skills.map(skill => skill.name).join(", ") + ".")]
      });
    }
  
    // tslint:disable-next-line:no-any
    public createAchivementsList(achivements: any[]): Paragraph[] {
      return achivements.map(
        achievement =>
          new Paragraph({
            text: achievement.name,
            bullet: {
              level: 0
            }
          })
      );
    }
  
    public createInterests(interests: string): Paragraph {
      return new Paragraph({
        children: [new TextRun(interests)]
      });
    }
  
    public splitParagraphIntoBullets(text: string): string[] {
      return text.split("\n\n");
    }
  
    // tslint:disable-next-line:no-any
    public createPositionDateText(
      startDate: any,
      endDate: any,
      isCurrent: boolean
    ): string {
      const startDateText =
        this.getMonthFromInt(startDate.month) + ". " + startDate.year;
      const endDateText = isCurrent
        ? "Present"
        : `${this.getMonthFromInt(endDate.month)}. ${endDate.year}`;
  
      return `${startDateText} - ${endDateText}`;
    }
  
    public getMonthFromInt(value: number): string {
      switch (value) {
        case 1:
          return "Enero";
        case 2:
          return "Febrero";
        case 3:
          return "Marzo";
        case 4:
          return "Abril";
        case 5:
          return "Mayo";
        case 6:
          return "Junio";
        case 7:
          return "Julio";
        case 8:
          return "Agosto";
        case 9:
          return "Septiembre";
        case 10:
          return "Octubre";
        case 11:
          return "Noviembre";
        case 12:
          return "Diciembre";
        default:
          return "N/A";
      }
    }
  }