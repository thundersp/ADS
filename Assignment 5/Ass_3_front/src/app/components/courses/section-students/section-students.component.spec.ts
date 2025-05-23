import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStudentsComponent } from './section-students.component';

describe('SectionStudentsComponent', () => {
  let component: SectionStudentsComponent;
  let fixture: ComponentFixture<SectionStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
