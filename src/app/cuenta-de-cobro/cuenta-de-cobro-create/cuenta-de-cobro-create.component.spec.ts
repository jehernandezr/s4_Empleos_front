import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CuentaDeCobroCreateComponent } from './cuenta-de-cobro-create.component';


describe('CuentaDeCobroComponent', () => {
  let component: CuentaDeCobroCreateComponent;
  let fixture: ComponentFixture<CuentaDeCobroCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaDeCobroCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaDeCobroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
