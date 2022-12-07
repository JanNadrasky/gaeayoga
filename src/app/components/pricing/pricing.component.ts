import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {

  public navigateToReservation(): void {
    window.open('http://gaea-yoga-plzen.reservio.com', '_blank');
  }

}
