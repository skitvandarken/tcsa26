import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bignumbers } from './bignumbers';

describe('Bignumbers', () => {
  let component: Bignumbers;
  let fixture: ComponentFixture<Bignumbers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bignumbers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bignumbers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
