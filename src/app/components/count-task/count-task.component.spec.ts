import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountTaskComponent } from './count-task.component';

describe('CountTaskComponent', () => {
  let component: CountTaskComponent;
  let fixture: ComponentFixture<CountTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
