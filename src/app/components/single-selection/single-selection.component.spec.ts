import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectionComponent } from './single-selection.component';
import { FormsModule } from '@angular/forms';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
describe('SingleSelectionComponent', () => {
  let component: SingleSelectionComponent;
  let fixture: ComponentFixture<SingleSelectionComponent>;
  let service: QuestionnaireService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleSelectionComponent],
      providers: [FormsModule, QuestionnaireService],
    }).compileComponents();
    service = TestBed.inject(QuestionnaireService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSelectionComponent);
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
