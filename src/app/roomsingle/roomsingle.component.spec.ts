import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsingleComponent } from './roomsingle.component';

describe('RoomsingleComponent', () => {
  let component: RoomsingleComponent;
  let fixture: ComponentFixture<RoomsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
