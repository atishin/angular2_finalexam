import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import {UserRegister, User} from '../models/user';

@Injectable()
export class AuthorizationService{
    constructor(private http: Http){}

    RegisterUser(userRegister: UserRegister): Observable<boolean> {
        let headers = new Headers({ 'Content type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let url = 'http://final-tm.azurewebsites.net/api/Account/Register';
        let body = JSON.stringify(userRegister);
        console.log(body);
        return this.http.post(url, body, options)
            .map(
            (res: Response) => {
                if (res.status == 200){
                    return true;
                }
                else {
                    return false;
                }
            });
    }

    Login (username: string, pass: string): Observable<boolean> {
        let url = 'http://final-tm.azurewebsites.net/Token';
        let headers = new Headers({ 'Content type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({headers:headers});
        let body = 'userName=' + username + '&password='+ pass + '&grant_type=password';
        return this.http.post(url, body, options)
            .map(
            (response: Response) => {
                console.log(response);
                if (response.status == 200){
                    let user = response.json() as User;
                    console.log('Login success');
                    localStorage.removeItem('user');
                    localStorage.setItem('user', JSON.stringify({user}));
                    let newUser = JSON.parse(localStorage.getItem('user'));
                    console.log(newUser);
                    return true;
                }
                else {
                    return false;
                }
            }
        );
    }

    isLoggedIn():boolean {
        let currentUser = JSON.parse(localStorage.getItem('user'));
        if (currentUser){
            return true;
        }
        else {
            return false;
        }
    }

    LogOut(): void {
        localStorage.removeItem('user');
        location.reload();
    }
}