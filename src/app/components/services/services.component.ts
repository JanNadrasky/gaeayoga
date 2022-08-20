import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import Swiper, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { AutoplayOptions } from 'swiper/types';

Swiper.use([Pagination, Autoplay, Navigation, EffectFade ]);

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, AfterViewInit {

  @ViewChild(SwiperComponent) swiper!: SwiperComponent;

  public swiperData = [
    { src: '../../../assets/images/example6.jpg', title: 'Rodinné právo', text: 'Poskytuji právní poradenství v oblasti rodinného práva, řešení rodinných záležitostí a sporů vyžaduje citlivý a individuální přístup, kladu proto důraz na pochopení a realizaci skutečných potřeb a zájmů klienta a na to, aby klient porozuměl právním procesům, které v této souvislosti probíhají a byl v nich orientován za účelem výběru nejvhodnějšího strategického postupu. Právní poradenství se týká zejména těchto oblastí:<ul><li>manželské majetkové právo, modifikace manželských majetkových režimů</li><li>vztahy mezi rodiči a dětmi, uzavírání příslušných dohod, zastupování v soudních řízeních </li><li>rozvody a rozchody manželů/partnerů </li><li>jednotlivé druhy vyživovacích povinností </li><li>vypořádání společného jmění manželů </li><li>určení či popření otcovství </li><li>ostatní oblasti rodinného práva, dle potřeby klienta</li></ul>' },
    { src: '../../../assets/images/example7.jpg', title: 'Občanské právo', text: 'Klientům poskytuji právní poradenství v oblasti občanského práva, za klíčové považuji zjištění a pochopení stěžejních zájmů a cílů klienta tak, aby mnou navrhované řešení konkrétní situace těmto zájmům a cílům klienta odpovídalo a jednalo se tak vždy o řešení šité na míru. Právní poradenství se týká zejména těchto oblastí:<ul> <li>vyjednávání a sepis občanskoprávních smluv, revize smluvní dokumentace</li><li>poradenství v oblasti spoluvlastnických vztahů včetně přípravy dohod o vypořádání spoluvlastnictví či zastupování v soudních řízeních </li><li>řešení sousedských sporů </li><li>vymáhání pohledávek a smluvních závazků </li><li>zakládání nadací a nadačních fondů právní stanoviska a právní analýzy dle potřeby klienta </li> </ul>' }
  ]
  public textIndex: number = 1;
  private interval!: number;
  private isNotFirst!: boolean;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  getData(data: any) {
    if (data && data[this.textIndex]) {
      return data[this.textIndex].text;
    }
  }

  ngAfterViewInit(): void {
  }

  stopTimeout() {
    clearInterval(this.interval);
  }

  onSwiper(swiper: any) {
   this.interval = setInterval(() => {
      swiper.slideNext();
    }, 6000);
    
  }

  onSlideChange(event: any): void {
    if (this.isNotFirst) {
      this.textIndex = event[0].realIndex;
      this.ref.detectChanges();
    } else {
      this.textIndex = 0;
      this.isNotFirst = true;
    }
  }

}
