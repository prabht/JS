import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosummComponent } from './todosumm.component';

describe('TodosummComponent', () => {
  let component: TodosummComponent;
  let fixture: ComponentFixture<TodosummComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosummComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosummComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
