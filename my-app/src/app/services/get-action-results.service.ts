import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class resultsService {
  public userInfo: any;
  constructor(private http: HttpClient) { }

  getTestResultsArtifact() {
    const url: string = '/assets/report.json'
    this.http.get(url).subscribe((response)=>{
      this.userInfo = response
       console.log(this.userInfo.stats)
    })
  }
}
