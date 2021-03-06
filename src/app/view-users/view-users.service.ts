import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ViewUsersService {

  constructor(private http: HttpClient) { }
  getAllUsers() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/users/getUsers';
    return this.http.get(url, {headers});
  }
}
