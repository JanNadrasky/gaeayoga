import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public hideNav!: boolean;
  private scrollTop = 0;

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
