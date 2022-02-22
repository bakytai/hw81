import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Link } from '../link.model';

@Injectable({
  providedIn: 'root'
})

export  class LinksService {

  constructor(private http: HttpClient) {
  }

  shortLink(orgLink: string) {
    const body = {
      originalUrl: orgLink
    };

    return this.http.post<Link>(environment.apiUrl + '/links', body).pipe(
      map(response => {
          return new Link(response.originalUrl, response.shortUrl, response._id, response.__v);
      })
    );
  }

  onRedirect(url: string){
    return  this.http.get(`${environment.apiUrl}/links/${url}`)
  }
}
