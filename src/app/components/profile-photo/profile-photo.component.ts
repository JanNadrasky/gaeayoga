import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
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
  public text = 'Váš čas začít je dnes';
  public textIndex: number = 1;
  public swiperData = [
    { src: './assets/images/header1.png', button: 'REZERVOVAT', text: 'Pravá výzva je pouze ve vaší mysli' },
    { src: './assets/images/header2.png', button: 'REZERVOVAT', text: 'Pojďte se cítit dobře ve svém vlastním těle' },
    { src: './assets/images/header3.png', button: 'REZERVOVAT', text: 'Posuňte svou praxi na další úroveň' },
    { src: './assets/images/header4.png', button: 'REZERVOVAT', text: 'Máme lekce pro každého' },
    { src: './assets/images/header5.png', button: 'REZERVOVAT', text: 'Váš čas začít je dnes' },
  ]
  private interval!: ReturnType<typeof setInterval>;
  private isNotFirst!: boolean;
  private isStopped!: boolean;

  constructor(private ref: ChangeDetectorRef) { }

  public navigateToReservation(): void {
    window.open('http://gaea-yoga-plzen.reservio.com', '_blank');
  }

  public stopTimeout(): void {
    clearInterval(this.interval);
    this.isStopped = true;
  }

  public onSwiper(swiper: any): void {
    if (!this.isStopped) {
      this.interval = setInterval(() => {
        swiper.slideNext();
      }, 20000);
    }
  }

  public onSlideChange(event: any): void {
    clearInterval(this.interval);
    this.isStopped = true;
    if (this.isNotFirst) {
      this.textIndex = event[0].realIndex;
      this.ref.detectChanges();
    } else {
      this.textIndex = 0;
      this.isNotFirst = true;
    }
  }

}
