import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNoneComponent } from './content-none.component';

describe('ContentNoneComponent', () => {
  let component: ContentNoneComponent;
  let fixture: ComponentFixture<ContentNoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentNoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
