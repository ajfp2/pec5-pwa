import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { delay, finalize, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };
@Injectable({
  providedIn: 'root',
})

export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown> ,next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.setLoading(true);
    return next.handle(request).pipe(
      delay(300),
      finalize(() => {
        this.loaderService.setLoading(false);
      })
    );
  }
}