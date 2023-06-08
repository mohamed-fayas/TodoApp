import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseTaskUrl } from 'environment';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {



  constructor(private http: HttpClient) { }

  addTask(formData: any): Observable<any> {

    return this.http.post(baseTaskUrl + 'add', formData)
  }

  fetchTasks(userId: number, status: string): Observable<any> {
    const user = userId
    const params = new HttpParams().set('user', user)
    //  https://baabtra.com/list/pending?user=1
    return this.http.get(baseTaskUrl + 'list/' + status, { params })
  }

  updateTask(taskId: number, formData: any): Observable<any> {
    //  http://baabtra.com/task/update/1
    return this.http.put(baseTaskUrl + 'update/' + taskId, formData)
  }

  removeTask(id: number): Observable<any> {

    return this.http.delete(baseTaskUrl + 'remove/' + id)

  }

  searchTask(user: number, searchText: string): Observable<any> {
    console.log(searchText, user, '*****')
    const params = new HttpParams().set('user', user).set('query', searchText)
    return this.http.get(baseTaskUrl + 'search', { params })

  }

  modalTask(taskId: number, formData: any): Observable<any> {
    return this.http.put(baseTaskUrl + 'update/' + taskId, formData)
  }
}
