import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetadecreditoCreateComponent } from './tarjetadecreditocreate.component';

describe('TarjetadecreditoCreateComponent', () => {
  let component: TarjetadecreditoCreateComponent;
  let fixture: ComponentFixture<TarjetadecreditoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetadecreditoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetadecreditoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
