import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  getListNosotros():Observable<any>{
    return this.http.get(`${this.URL}/nosotros`)

  }
}