import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdctsListComponent } from './prodcts-list.component';

describe('ProdctsListComponent', () => {
  let component: ProdctsListComponent;
  let fixture: ComponentFixture<ProdctsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdctsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdctsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
