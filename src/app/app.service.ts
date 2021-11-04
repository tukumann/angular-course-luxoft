import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class AppService {

  constructor(
    private http: HttpClient
  ) {

  }

  getNotes$() {
    return this.http.get<any[]>('http://localhost:8080/notes').pipe(

    );

  }
}
