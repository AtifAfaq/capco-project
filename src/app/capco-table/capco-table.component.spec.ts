import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapcoTableComponent } from './capco-table.component';

describe('CapcoTableComponent', () => {
  let component: CapcoTableComponent;
  let fixture: ComponentFixture<CapcoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapcoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapcoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
