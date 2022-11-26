import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isNotTop!: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    window.addEventListener('scroll', (eventScroll: any) => {
      this.isNotTop  = eventScroll.currentTarget.pageYOffset > 0;
    });
  }

  navigateTo(pattern: string) {
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

}
