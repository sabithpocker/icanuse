import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterFeaturesComponent } from './enter-features.component';

describe('EnterFeaturesComponent', () => {
  let component: EnterFeaturesComponent;
  let fixture: ComponentFixture<EnterFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
