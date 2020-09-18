import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IDog } from './dogs';

const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class DogServiceService {

  constructor(private httpClient: HttpClient) { }


  getDogs(): Observable<IDog[]> {
    return this.httpClient.get<IDog[]>('/api/dogs');
  }

  getDog(id: number): Observable<IDog> {

    return this.httpClient.get<IDog>('/api/dogs/' + id);

  }

  saveDog(dog: IDog): Observable<IDog> {

    return this.httpClient.post<IDog>('/api/dogs/', dog, headers);

  }


  updateDog(dog: IDog, id: number): Observable<IDog> {

    return this.httpClient.put<IDog>('/api/dogs/' + id, dog, headers);

  }

  deleteDog(id: number): Observable<any> {
    return this.httpClient.delete('/api/dogs/' + id, headers);
  }
}
