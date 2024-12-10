import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../models/responseModel';

const cors = require('cors');

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
   
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  
  // private usersURL = 'https://firebasestorage.googleapis.com/v0/b/mangaman-770dc.appspot.com/o/documents%2Fusers.json?alt=media&token=33777c26-68fd-42fc-9f5f-815908942d26'

  login(email: string, password: string): Observable<ResponseModel> {
    
    const corsOptions = {
      origin: 'https://your-trusted-domain.com', // Adjust to your frontend's domain
      methods: ['GET', 'POST', 'OPTIONS'],      // Allow required HTTP methods
      allowedHeaders: ['Content-Type', 'application/json'], // Include headers your client sends
    };

    return this.http.post<ResponseModel>( `http://localhost:8081/api/ingresar?correo=${email}&password=${password}`, corsOptions);

    // return this.http.get(this.usersURL, this.httpOptions);
  }
}
