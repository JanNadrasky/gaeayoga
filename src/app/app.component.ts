import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { IServiceText } from './interfaces/section.intrface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public hideNav!: boolean;
  private scrollTop = 0;

  public aboutTexts: IServiceText[] = [{
    quote: '"Nabízíme nejlepší kurzy„',
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
    text: 'Chcete zkusit lekci tvořenou na míru vašim potřebám, pohybovým a zdravotním možnostem? Neváhejte a rezervujte si svou individuální lekci v čase, který vyhovuje vám. Spojíme přístupy, které budou sedět právě vám, tak abyste posunuli svou vlastní pohybovou praxi na další úroveň. <br><br><strong>Cena jedné lekce</strong> je 700,- za 75 minut.<br>Kontakt: Věra (734703426)'
  },{
    quote: 'Korporátní jóga',
    text: 'Rádi byste, abychom přišli mi za vámi? Není problém domluvit si lekci třeba v prostorách vaší kanceláře. Skupinovou či individuální jógu. Dovolte si při práci na chvíli zastavit, příjemně se protáhnout a odreagovat. <br><br><strong>Cena pro jednotlivce:</strong> 600,- za 75 min <br><strong>Cena pro skupiny:</strong> 1200,- (pro skupiny do 10 ti účastníků, s každým dalším účastníkem + 50,-)'
  }]  ;

  constructor(@Inject(DOCUMENT) private document: Document) {

  }

  ngOnInit() {
    window.addEventListener('scroll', (eventScroll: any) => {
      this.hideNav = this.scrollTop < eventScroll.currentTarget.pageYOffset;
      this.scrollTop = eventScroll.currentTarget.pageYOffset;
      const header = this.document.getElementById('header');
      const headerLinks = this.document.getElementsByClassName('header-link');
      const hamburgerIcon = this.document.getElementById('hamburgerIcon');

      if (hamburgerIcon && eventScroll.currentTarget.pageYOffset > 0) {
        hamburgerIcon.style.color = '#34ccbd';
      } else if (hamburgerIcon && eventScroll.currentTarget.pageYOffset === 0) {
        hamburgerIcon.style.color = 'white';
      }

      if (header && eventScroll.currentTarget.pageYOffset > 0) {
        header.style.backgroundColor = 'white';
        Array.prototype.forEach.call(headerLinks, function(el) {
          el.style.color = 'black';
      });
      
      } else if (header && eventScroll.currentTarget.pageYOffset === 0) {
        header.style.backgroundColor = '#34ccbd';
         Array.prototype.forEach.call(headerLinks, function(el) {
          el.style.color = 'white';
      });
      }
    })
  }
}
