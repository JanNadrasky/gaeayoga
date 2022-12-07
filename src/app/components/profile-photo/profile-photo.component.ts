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
  public text = 'Váš čas na jógu je dnes';
  

  public textIndex: number = 1;
  private interval!: ReturnType<typeof setInterval>;
  private isNotFirst!: boolean;
  public swiperData = [
    { src: '../../../assets/images/header1.png', button: 'REZERVOVAT', text: 'Váš čas na jógu je dnes' },
    { src: '../../../assets/images/header2.png', button: 'REZERVOVAT', text: 'Váš čas na jógu je dnes' },
    { src: '../../../assets/images/header3.png', button: 'REZERVOVAT', text: 'Váš čas na jógu je dnes' },
    { src: '../../../assets/images/header4.png', button: 'REZERVOVAT', text: 'Váš čas na jógu je dnes' },
    { src: '../../../assets/images/header5.png', button: 'REZERVOVAT', text: 'Váš čas na jógu je dnes' },
  ]
  isStopped!: boolean;

  constructor(private ref: ChangeDetectorRef) { }


  getData(data: any) {
    if (data && data[this.textIndex]) {
      return data[this.textIndex].text;
    }
  }

  public navigateToReservation(): void {
    window.open('http://gaea-yoga-plzen.reservio.com', '_blank');
  }

  stopTimeout() {
    clearInterval(this.interval);
    this.isStopped = true;
  }

  onSwiper(swiper: any) {
    if (!this.isStopped) {
      this.interval = setInterval(() => {
        swiper.slideNext();
      }, 20000);
    }
  }

  onSlideChange(event: any): void {
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
