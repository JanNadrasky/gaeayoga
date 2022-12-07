import { Component } from '@angular/core';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.scss']
})
export class LecturersComponent {

  public navigateToReservation(): void {
    window.open('http://gaea-yoga-plzen.reservio.com', '_blank');
  }

}
