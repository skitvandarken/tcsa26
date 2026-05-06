import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventsnews } from './eventsnews';

describe('Eventsnews', () => {
  let component: Eventsnews;
  let fixture: ComponentFixture<Eventsnews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventsnews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventsnews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
