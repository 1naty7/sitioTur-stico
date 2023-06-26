import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalloComponent } from './medallo.component';

describe('MedalloComponent', () => {
  let component: MedalloComponent;
  let fixture: ComponentFixture<MedalloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedalloComponent]
    });
    fixture = TestBed.createComponent(MedalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
