import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowBookListComponent } from './borrow-book-list.component';

describe('BorrowBookListComponent', () => {
  let component: BorrowBookListComponent;
  let fixture: ComponentFixture<BorrowBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowBookListComponent]
    });
    fixture = TestBed.createComponent(BorrowBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
