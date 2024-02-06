import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrsComponent } from './rrs.component';

describe('RrsComponent', () => {
  let component: RrsComponent;
  let fixture: ComponentFixture<RrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RrsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
