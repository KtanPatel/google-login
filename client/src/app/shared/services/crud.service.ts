import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class CrudService {
    public httpOptions;
    constructor(private http: HttpClient) {

        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    get(apiUrl) {
        const url = environment.apiUrl + apiUrl;
        return this.http.get(url);
    }
    getParam(apiUrl, data) {
        const url = environment.apiUrl + apiUrl;
        let Params = new HttpParams();
        for (const key in data) {
            Params = Params.append(key, data[key]);
        }
        // Begin assigning parameters
        return this.http.get(url, { params: Params });
    }
    post(apiUrl, data) {
        const url = environment.apiUrl + apiUrl;
        return this.http.post(url, data, this.httpOptions);
    }
    put(apiUrl, data) {
        const url = environment.apiUrl + apiUrl;
        return this.http.put(url, data, this.httpOptions);
    }
    postHeader(apiUrl, data) {
        const url = environment.apiUrl + apiUrl;
        this.httpOptions['observe'] = 'response';
        return this.http.post(url, data, this.httpOptions);
    }
    update(apiUrl, data) {
        const url = environment.apiUrl + apiUrl;
        return this.http.put(url, data);
    }
    delete(apiUrl) {
        const url = environment.apiUrl + apiUrl;
        return this.http.delete(url);
    }
    deleteParams(apiUrl, data) {
        const url = environment.apiUrl + apiUrl;
        let Params = new HttpParams();
        for (const key in data) {
            if (key) {
                Params = Params.append(key, data[key]);
            }
        }
        return this.http.delete(url, { params: Params });
    }
    postFormData(apiUrl, formData) {
        const url = environment.apiUrl + apiUrl;
        return this.http.post(url, formData);
    }
    putFormData(apiUrl, formData) {
        const url = environment.apiUrl + apiUrl;
        return this.http.put(url, formData);
    }
}
