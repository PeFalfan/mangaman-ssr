import { TestBed } from '@angular/core/testing';

import { MangaService } from './manga.service';
import { provideHttpClient } from '@angular/common/http';

describe('MangaService', () => {
  let service: MangaService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        providers: [
          provideHttpClient(),]
      }
    );
    service = TestBed.inject(MangaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
