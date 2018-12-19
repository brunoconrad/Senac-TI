import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvsComponent } from './tvs.component';

describe('ProdutosComponent', () => {
  let component: TvsComponent;
  let fixture: ComponentFixture<TvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});