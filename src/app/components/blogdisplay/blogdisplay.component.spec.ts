import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogdisplayComponent } from './blogdisplay.component';

describe('BlogdisplayComponent', () => {
  let component: BlogdisplayComponent;
  let fixture: ComponentFixture<BlogdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
