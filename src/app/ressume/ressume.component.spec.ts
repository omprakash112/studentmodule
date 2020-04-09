import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RessumeComponent } from './ressume.component';

describe('RessumeComponent', () => {
  let component: RessumeComponent;
  let fixture: ComponentFixture<RessumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RessumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
