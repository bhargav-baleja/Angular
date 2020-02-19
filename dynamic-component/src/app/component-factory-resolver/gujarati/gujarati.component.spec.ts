import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GujaratiComponent } from './gujarati.component';

describe('GujaratiComponent', () => {
  let component: GujaratiComponent;
  let fixture: ComponentFixture<GujaratiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GujaratiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GujaratiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
