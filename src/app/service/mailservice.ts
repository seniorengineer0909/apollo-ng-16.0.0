import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mail } from 'src/app/api/mail';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MailService {

    constructor(private http: HttpClient) { }

    getMails() {
        return this.http.get<any>('assets/demo/data/mail.json')
            .toPromise()
            .then(res => res.data as Mail[])
            .then(data => data);
    }

    getMail(id) {
        return this.http.get<any>('assets/demo/data/mail.json').pipe(
            map(mail => {
                return mail.data.filter(d => d.id == id)[0];
            })
        )
    }
}
