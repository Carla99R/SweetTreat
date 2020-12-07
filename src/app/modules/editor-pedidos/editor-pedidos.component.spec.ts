import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPedidosComponent } from './editor-pedidos.component';

describe('EditorPedidosComponent', () => {
  let component: EditorPedidosComponent;
  let fixture: ComponentFixture<EditorPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
