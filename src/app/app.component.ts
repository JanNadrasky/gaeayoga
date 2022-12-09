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

  public yogaTexts: IYogaTexts[] = [{
    label: 'Hatha jóga',
    text: 'Hatha jóga se obecně cvičí v pomalejším tempu, s delšími výdržemi ve statických pozicích. Díky pravidelné praxi dosáhnete větší fyzické síly, emoční pohody a celkového zdraví.'
  },{
    label: 'Jóga',
    text: 'Jóga posiluje a tonizuje svaly a páteř, zvětšuje pohybovou flexibilitu a uvolňuje svalové napětí. Zvětšuje kapacitu plic, celkově zlepšuje zdraví a uvolňuje mysl.'
  },{
    label: 'Vinysa jóga',
    text: 'Vinysa jóga je kreativní forma jógy, kde jsou pozice spojeny s dechem v plynulé sekvenci. Krásou Vinyasa jógy je rozmanitost. Ve Vinyasa józe neexistuje žádná standardní sekvence, dovolit si můžete tvořit a experimentovat s pohybem.'
  },{
    label: 'Power jóga',
    text: 'Power jóga je zaměřena na budování síly a vytrvalosti. Je to také vynikající forma jógy pro spalování kalorií, je to rychlá a intenzivní aktivita.'
  },{
    label: 'Dance Flow jóga',
    text: 'Dance flow jóga je příjemně plynoucí mix vinyasa flow jógy a tance. Při sestavování sekvencí mohou studenti pracovat bez podložek. Zaměří se na svůj přirozený pohyb a prozkoumají jeho plynulost, sílu, výdrž a rovnováhu.'
  },{
    label: 'Prenatal jóga',
    text: 'Těhotenská jóga je forma jemné jógy, která je navržena tak, aby splňovala potřeby pro zdravý a vhodný pohyb během všech tří trimestrů. Pomůže tělu připravit se na období porodu, pracuje s dechem, svaly pánevního dna, udržuje flexibilitu a uvolňuje napětí.'
  }];

  constructor(@Inject(DOCUMENT) private document: Document) {

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
