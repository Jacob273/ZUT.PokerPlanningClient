import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardItemListComponent } from './user-card-item-list.component';

describe('UserCardItemListComponent', () => {
  let component: UserCardItemListComponent;
  let fixture: ComponentFixture<UserCardItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
