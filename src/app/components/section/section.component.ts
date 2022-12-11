import { Component, Input } from '@angular/core';
import { IServiceText, IYogaTexts } from 'src/app/interfaces/section.intrface';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {

  @Input() section = 'default';
  @Input() texts!: IServiceText[];
  @Input() imgSrc!: string;
  @Input() title = 'default';
  @Input() id = 'default';
  @Input() noButton = false;

  public yogaTexts: IYogaTexts[] = [{
    label: 'Hatha jóga',
    text: 'Hatha jóga se obecně cvičí v pomalejším tempu, s delšími výdržemi ve statických pozicích. Díky pravidelné praxi dosáhnete větší fyzické síly, emoční pohody a celkového zdraví.'
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

  public navigateToReservation(): void {
    window.open('http://gaea-yoga-plzen.reservio.com', '_blank');
  }

}
