import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import Swiper, { Autoplay, EffectFade, Navigation } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

Swiper.use([ Autoplay, Navigation, EffectFade ]);
@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.scss']
})
export class ProfilePhotoComponent {

  @ViewChild('swiper') swiper!: SwiperComponent;
  public button = 'REZERVOVAT';
  public text = 'Joga lekce';
  

  public textIndex: number = 1;
  private interval!: number;
  private isNotFirst!: boolean;
  public swiperData = [
    { src: '../../../assets/images/header1.png', button: 'REZERVOVAT', text: 'Joga lekce' },
    { src: '../../../assets/images/header2.png', button: 'REZERVOVAT', text: 'Joga lekce' },
    { src: '../../../assets/images/header3.png', button: 'REZERVOVAT', text: 'Joga lekce' },
    { src: '../../../assets/images/header4.png', button: 'REZERVOVAT', text: 'Joga lekce' },
    { src: '../../../assets/images/header5.png', button: 'REZERVOVAT', text: 'Joga lekce' },
  ]

  constructor(private ref: ChangeDetectorRef) { }


  getData(data: any) {
    if (data && data[this.textIndex]) {
      return data[this.textIndex].text;
    }
  }

  stopTimeout() {
    clearInterval(this.interval);
  }

  onSwiper(swiper: any) {
   this.interval = setInterval(() => {
      swiper.slideNext();
    }, 20000);
    
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
