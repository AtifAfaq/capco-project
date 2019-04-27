import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapcoPaginationComponent } from './capco-pagination.component';

describe('CapcoPaginationComponent', () => {
  let component: CapcoPaginationComponent;
  let fixture: ComponentFixture<CapcoPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapcoPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapcoPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
