import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { IServiceText, IYogaTexts } from './interfaces/section.intrface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public hideNav!: boolean;
  private scrollTop = 0;

  public aboutTexts: IServiceText[] = [{
    quote: '"Pojďme se stát nejlepší verzí sebe sama„',
    text: 'Jsme jógové studio v centru Plzně. Nabízíme širokou škálu jógových lekcí, ale i další  pohybové lekce pro vaši fyzickou a psychickou pohodu, zdraví a harmonii. Naše lekce trvají déle, 75 - 90 minut, abyste se mohli skutečnět uvolnit a ponořit do procesu. Vydejte se s námi na cestu poznání skrze sebe sama. Přijďte si s námi zacvičit, meditovat, zpívat nebo tančit. Projevte plně svůj potenciál a získejte ke svému životu a sami k sobě vědomější přístup.'
  }];

  public actionsTexts: IServiceText [] = [{
    quote: '"Zúčastněte se našich akcí„',
    text: 'Přidejte se k nám během víkendových speciální workshopů a akcí.<br>Rezervaci je nutné udělat skrze náš rezervační systém.'
  }]  ;

  public lessonTexts: IServiceText [] = [{
    quote: 'Skupinové lekce',
    text: 'Přijďte si vyzkoušet některou z našich skupinových jógových a pohybových lekcí. V nabídce máme širokou škálu od začátečníků až po pokročilé, takže si vybere skutečně každý. Lekce trvají 75 minut, některé i déle. Těšíme se na vás.'
  },{
    quote: 'Individuální lekce',
    text: 'Chcete zkusit lekci tvořenou na míru vašim potřebám, pohybovým a zdravotním možnostem? Neváhejte a rezervujte si svou individuální lekci v čase, který vyhovuje vám. Spojíme přístupy, které budou sedět právě vám, tak abyste posunuli svou vlastní pohybovou praxi na další úroveň.'
  },{
    quote: 'Korporátní jóga',
    text: 'Rádi byste, abychom přišli mi za vámi? Není problém domluvit si lekci třeba v prostorách vaší kanceláře. Skupinovou či individuální jógu. Dovolte si při práci na chvíli zastavit, příjemně se protáhnout a odreagovat.'
  }]  ;

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  public navigateToReservation(): void {
    window.open('http://gaea-yoga-plzen.reservio.com', '_blank');
  }

  ngOnInit() {
    window.addEventListener('scroll', (eventScroll: any) => {
      this.hideNav = this.scrollTop < eventScroll.currentTarget.pageYOffset;
      this.scrollTop = eventScroll.currentTarget.pageYOffset;
      const hamburgerIcon = this.document.getElementById('hamburgerIcon');

      const nav = this.document.getElementById('header');

      if (nav && eventScroll.currentTarget.pageYOffset > 0) {
        nav.classList.add('nav-inverse');
        nav.classList.remove('nav');
      
      } else if (nav && eventScroll.currentTarget.pageYOffset === 0) {
          nav.classList.add('nav');
         nav.classList.remove('nav-inverse');
      }

       if (hamburgerIcon && eventScroll.currentTarget.pageYOffset > 0) {
        hamburgerIcon.style.color = '#34ccbd';
      } else if (hamburgerIcon && eventScroll.currentTarget.pageYOffset === 0) {
        hamburgerIcon.style.color = 'white';
      }
    })
  }
}
