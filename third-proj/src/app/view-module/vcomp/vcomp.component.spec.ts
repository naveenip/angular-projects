import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcompComponent } from './vcomp.component';

describe('VcompComponent', () => {
  let component: VcompComponent;
  let fixture: ComponentFixture<VcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
