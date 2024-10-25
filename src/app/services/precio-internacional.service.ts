import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PrecioInternacional } from '../models/precio-internacional';

@Injectable({
  providedIn: 'root'
})
export class PrecioInternacionalService {
  private url = 'https://api.recope.go.cr/precio-internacional';

  constructor(private http: HttpClient) { }

  public getPrecioInternacional(): Observable<PrecioInternacional> {
    return this.http.get<PrecioInternacional>(this.url).pipe(
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return throwError(() => new Error('Error al obtener los precios internacionales'));
      })
    );
  }
}
