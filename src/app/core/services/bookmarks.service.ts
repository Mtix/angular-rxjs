import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { BeatService, BeatVersion } from './beat.service';
import { logger, LoggerLevel } from '../utils/logger';
import { BaseServiceClass } from './base-service.class';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService extends BaseServiceClass<string> {

  constructor(@Optional() @SkipSelf() bookmarks: BookmarksService,
              beatService: BeatService) {
    super(beatService, '');
  }

  protected sync(version: BeatVersion): Observable<string> {
    return of(version)
      .pipe(
        map((ver) => {
          this.update(ver.bookmark ?? '0');
          return this.repeat$.getValue();
        }),
        logger('BookmarksService emitted', LoggerLevel.INFO)
      );
  }
}
