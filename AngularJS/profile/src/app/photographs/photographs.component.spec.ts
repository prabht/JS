import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographsComponent } from './photographs.component';

describe('PhotographsComponent', () => {
  let component: PhotographsComponent;
  let fixture: ComponentFixture<PhotographsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
