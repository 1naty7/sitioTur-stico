import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniCioComponent } from './ini-cio.component';

describe('IniCioComponent', () => {
  let component: IniCioComponent;
  let fixture: ComponentFixture<IniCioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IniCioComponent]
    });
    fixture = TestBed.createComponent(IniCioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
