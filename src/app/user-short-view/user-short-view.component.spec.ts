import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShortViewComponent } from './user-short-view.component';

describe('UserShortViewComponent', () => {
  let component: UserShortViewComponent;
  let fixture: ComponentFixture<UserShortViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserShortViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserShortViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
