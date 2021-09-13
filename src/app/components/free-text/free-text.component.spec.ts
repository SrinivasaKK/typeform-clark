import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { FreeTextComponent } from './free-text.component';

describe('FreeTextComponent', () => {
  let component: FreeTextComponent;
  let fixture: ComponentFixture<FreeTextComponent>;
  let service: QuestionnaireService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeTextComponent],
      providers: [FormsModule, QuestionnaireService],
    }).compileComponents();
    service = TestBed.inject(QuestionnaireService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTextComponent);
    component = fixture.componentInstance;
    service.getQuestions().subscribe((response) => {
      component.question = response.questions[0];
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
