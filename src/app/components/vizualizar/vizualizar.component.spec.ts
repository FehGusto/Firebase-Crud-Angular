import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizualizarComponent } from './vizualizar.component';

describe('VizualizarComponent', () => {
  let component: VizualizarComponent;
  let fixture: ComponentFixture<VizualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VizualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
