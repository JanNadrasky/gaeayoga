import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaTypesComponent } from './yoga-types.component';

describe('YogaTypesComponent', () => {
  let component: YogaTypesComponent;
  let fixture: ComponentFixture<YogaTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YogaTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
