import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascaraComponent } from './mascara.component';

describe('MascaraComponent', () => {
  let component: MascaraComponent;
  let fixture: ComponentFixture<MascaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
