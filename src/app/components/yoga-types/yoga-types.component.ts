import { Component, Input, OnInit } from '@angular/core';
import { IYogaTexts } from 'src/app/interfaces/section.intrface';

@Component({
  selector: 'app-yoga-types',
  templateUrl: './yoga-types.component.html',
  styleUrls: ['./yoga-types.component.scss']
})
export class YogaTypesComponent implements OnInit {

  @Input() yogaTexts!: IYogaTexts[];

  constructor() { }

  ngOnInit(): void {
  }

}
