import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPreviewComponentComponent } from './email-preview-component.component';

describe('EmailPreviewComponentComponent', () => {
  let component: EmailPreviewComponentComponent;
  let fixture: ComponentFixture<EmailPreviewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailPreviewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPreviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
