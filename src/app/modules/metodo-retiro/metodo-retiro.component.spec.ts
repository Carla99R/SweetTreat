import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoRetiroComponent } from './metodo-retiro.component';

describe('MetodoRetiroComponent', () => {
  let component: MetodoRetiroComponent;
  let fixture: ComponentFixture<MetodoRetiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodoRetiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodoRetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
