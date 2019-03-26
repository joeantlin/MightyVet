import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebinarsService {

  constructor(private _http: HttpClient) { }
  // ---------------webinars--------------------

  addWebinar(newWebinar) {
    console.log("http.service addWebinar", newWebinar);
    return this._http.post('/api/webinars', newWebinar);
  }
  webinarUpdate(id, webinarUpdate) {
    console.log("http.service webinarupdate", webinarUpdate);
    return this._http.put('/api/webinars/' + id, webinarUpdate);
  }
  getWebinar(id) {
    console.log("http.service getting webinar", id);
    return this._http.get(`/api/webinars/${id}`);
  }

  deleteWebinar(id) {
    return this._http.delete('/api/webinars/' + id);
  }
}

