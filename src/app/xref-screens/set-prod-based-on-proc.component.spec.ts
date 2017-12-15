import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProdBasedOnProcComponent } from './set-prod-based-on-proc.component';

describe('SetProdBasedOnProcComponent', () => {
  let component: SetProdBasedOnProcComponent;
  let fixture: ComponentFixture<SetProdBasedOnProcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetProdBasedOnProcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetProdBasedOnProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
