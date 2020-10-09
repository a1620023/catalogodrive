import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllinoneComponent } from './allinone.component';

describe('AllinoneComponent', () => {
  let component: AllinoneComponent;
  let fixture: ComponentFixture<AllinoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllinoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllinoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
