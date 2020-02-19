import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathiComponent } from './marathi.component';

describe('MarathiComponent', () => {
  let component: MarathiComponent;
  let fixture: ComponentFixture<MarathiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarathiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarathiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
