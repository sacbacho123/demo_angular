import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDetailComponentComponent } from './email-detail-component.component';

describe('EmailDetailComponentComponent', () => {
  let component: EmailDetailComponentComponent;
  let fixture: ComponentFixture<EmailDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailDetailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
