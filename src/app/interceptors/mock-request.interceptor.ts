import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import agents from './mock-data/agents-mock-data.json';

const urls = [
  {
    url: environment.backend + environment.agentsEndpoint,
    json: agents
  }
];


@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    for (const element of urls) {
      if (request.url === element.url) {
        return of(new HttpResponse({status: 200, body: ((element.json) as any), url: request.url, statusText: 'OK'}));
      }
    }
    return next.handle(request);
  }
}
