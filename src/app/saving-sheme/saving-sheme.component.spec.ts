import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingShemeComponent } from './saving-sheme.component';

describe('SavingShemeComponent', () => {
  let component: SavingShemeComponent;
  let fixture: ComponentFixture<SavingShemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingShemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingShemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
