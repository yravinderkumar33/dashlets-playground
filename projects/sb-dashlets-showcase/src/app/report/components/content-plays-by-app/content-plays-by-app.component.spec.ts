import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPlaysByAppComponent } from './content-plays-by-app.component';

describe('ContentPlaysByAppComponent', () => {
  let component: ContentPlaysByAppComponent;
  let fixture: ComponentFixture<ContentPlaysByAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPlaysByAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPlaysByAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
