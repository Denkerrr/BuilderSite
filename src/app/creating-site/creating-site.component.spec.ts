import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingSiteComponent } from './creating-site.component';

describe('CreatingSiteComponent', () => {
  let component: CreatingSiteComponent;
  let fixture: ComponentFixture<CreatingSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
