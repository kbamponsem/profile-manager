import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface Result {
    results: any;
    info: any;
}
@Injectable({
    providedIn: 'root'
})
export class UserService {
    private url: string = "https://randomuser.me/api/";

    constructor(private httpClient: HttpClient) { }

    getUser(id: string | null): Observable<Result> {
        if (id !== null) {
            return this.httpClient.get<Result>(`${this.url}?seed=${sessionStorage.getItem('username')}`);
        }
        else {
            console.log(id)
            return this.httpClient.get<Result>(`${this.url}`);
        }
    }

    getFriends(uid: string): Observable<Result> {
        return this.httpClient.get<Result>(this.url + `?results=6&seed=${uid}`)
    }
}