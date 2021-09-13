import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { MultiSelectionComponent } from './multi-selection.component';
import { QuestionnaireService } from './../../services/questionnaire.service';
describe('MultiSelectionComponent', () => {
  let component: MultiSelectionComponent;
  let fixture: ComponentFixture<MultiSelectionComponent>;
  let service: QuestionnaireService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiSelectionComponent],
      providers: [FormsModule, QuestionnaireService],
    }).compileComponents();
    service = TestBed.inject(QuestionnaireService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectionComponent);
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
