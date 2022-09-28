import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../apps/app-web/src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllBudgets(){
    return this.http.get(environment.baseUrl + '/budget')
  }

}
