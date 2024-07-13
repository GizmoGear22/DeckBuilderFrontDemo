import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardViewComponent } from './post-card-view.component';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('PostCardViewComponent', () => {
  let component: PostCardViewComponent;
  let fixture: ComponentFixture<PostCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCardViewComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
