import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPlaysByPortalComponent } from './content-plays-by-portal.component';

describe('ContentPlaysByPortalComponent', () => {
  let component: ContentPlaysByPortalComponent;
  let fixture: ComponentFixture<ContentPlaysByPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPlaysByPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPlaysByPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
