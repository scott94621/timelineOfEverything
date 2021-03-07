import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWindowComponent } from './create-window.component';

describe('CreateWindowComponent', () => {
  let component: CreateWindowComponent;
  let fixture: ComponentFixture<CreateWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
