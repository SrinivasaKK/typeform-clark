import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FreeTextComponent } from './free-text.component';

describe('FreeTextComponent', () => {
  let component: FreeTextComponent;
  let fixture: ComponentFixture<FreeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeTextComponent],
      providers: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
