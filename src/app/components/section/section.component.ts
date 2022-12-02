import { Component, Input, OnInit } from '@angular/core';
import { IServiceText } from 'src/app/interfaces/section.intrface';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() section = 'default';
  @Input() text!: IServiceText;
  @Input() imgSrc!: string;
  @Input() title = 'default';
  @Input() id = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
