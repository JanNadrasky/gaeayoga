import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isNotTop!: boolean;
  navbarOpen!: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    window.addEventListener('scroll', (eventScroll: any) => {
      this.isNotTop  = eventScroll.currentTarget.pageYOffset > 0;
    });
  }

  public navigateTo(pattern: string, isMobile: boolean): void {
    if (pattern === 'top') {
      window.scrollTo(0,0);
    }
    if (isMobile) {
      this.onNavbarOpen();
    }
    const element = this.document.getElementById(pattern);
    const yOffset = -100;
    let y;
    if (element && window.pageYOffset > element.getBoundingClientRect().top) {
    y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
  } else if (element && window.pageYOffset < element.getBoundingClientRect().top)  {
    y = element.getBoundingClientRect().top + window.pageYOffset;
  }
  window.scrollTo({top: y, behavior: 'smooth'});
  }

  public navigateToReservation(isMobile: boolean): void {
    window.open('http://gaea-yoga-plzen.reservio.com', '_blank');
    if (isMobile) {
      this.navbarOpen = !this.navbarOpen;
      const nav = this.document.getElementById("myNav");
      const body = this.document.body;
      if (nav && body) {
        body.style.overflow = 'hidden';
        nav.style.width = "100%"
      }
    }
  }

  public onNavbarOpen(): void {
    this.navbarOpen = !this.navbarOpen;
    const nav = this.document.getElementById("myNav");
    const body = this.document.body;
    if (nav && body && this.navbarOpen) {
      body.style.overflow = 'hidden';
      nav.style.width = "100%"
    } else if (nav && body && !this.navbarOpen) {
       nav.style.width = "0";
       body.style.overflow = 'auto';
    }
    
  }

}
