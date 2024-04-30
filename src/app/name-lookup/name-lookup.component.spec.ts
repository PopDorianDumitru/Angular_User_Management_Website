import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameLookupComponent } from './name-lookup.component';

describe('NameLookupComponent', () => {
  let component: NameLookupComponent;
  let fixture: ComponentFixture<NameLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameLookupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
