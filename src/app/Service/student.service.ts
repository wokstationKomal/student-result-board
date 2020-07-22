import { StudentForm } from './../Class/student-form';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Class/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  student: Student[];

  _url = " http://localhost:3000/Student";
  _formUrl = "http://localhost:3000/StudentForm"

  constructor(private http: HttpClient) { }

  getData(): Observable<Student[]>{
    return this.http.get<Student[]>(this._url);
  }

  postData(formData: StudentForm): Observable<any>{
    return this.http.post(this._formUrl, formData);
  }

}
