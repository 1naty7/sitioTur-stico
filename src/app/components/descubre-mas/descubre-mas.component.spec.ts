import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescubreMasComponent } from './descubre-mas.component';

describe('DescubreMasComponent', () => {
  let component: DescubreMasComponent;
  let fixture: ComponentFixture<DescubreMasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescubreMasComponent]
    });
    fixture = TestBed.createComponent(DescubreMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
