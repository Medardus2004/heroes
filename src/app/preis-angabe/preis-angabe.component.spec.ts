import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreisAngabeComponent } from './preis-angabe.component';

describe('PreisAngabeComponent', () => {
  let component: PreisAngabeComponent;
  let fixture: ComponentFixture<PreisAngabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreisAngabeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreisAngabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
