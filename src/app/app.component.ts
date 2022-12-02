import { BreakpointObserver } from '@angular/cdk/layout';
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

  public aboutTexts: IServiceText = {
    quote: 'Nabzíme nejlepší kurzy',
    text: 'Jsme jógové studio v centru Plzně. Nabízíme širokou škálu jógových lekcí, ale i další  pohybové lekce pro vaši fyzickou a psychickou pohodu, zdraví a harmonii. Naše lekce trvají déle, 75 - 90 minut, abyste se mohli skutečnět uvolnit a ponořit do procesu. Vydejte se s námi na cestu poznání skrze sebe sama. Přijďte si s námi zacvičit, meditovat, zpívat nebo tančit. Projevte plně svůj potenciál a získejte ke svému životu a sami k sobě vědomější přístup.'
  };

  constructor(@Inject(DOCUMENT) private document: Document, private breakpointObserver: BreakpointObserver) {

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
          el.style.color = '$black';
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
