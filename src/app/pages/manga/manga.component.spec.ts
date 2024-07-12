import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MangaComponent } from './manga.component';
import { provideHttpClient } from '@angular/common/http';

describe('MangaComponent', () => {
  let component: MangaComponent;
  let fixture: ComponentFixture<MangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangaComponent],
      providers: [
        provideHttpClient(),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
