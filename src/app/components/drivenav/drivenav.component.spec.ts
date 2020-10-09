import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivenavComponent } from './drivenav.component';

describe('DrivenavComponent', () => {
  let component: DrivenavComponent;
  let fixture: ComponentFixture<DrivenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
