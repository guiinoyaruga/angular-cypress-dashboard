import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class resultsService {
  public userInfo: any;
  public archives : any
  public qaseTests : any
  public passes: any
  public failures: any
  public results: any = []

  constructor(private http: HttpClient) { }

  async getTestResultsArtifact(){
    const url: string = '/assets/report.json'

     this.http.get(url).subscribe((response)=>{
      this.userInfo = response

      this.archives = this.userInfo.stats.suites
      this.qaseTests = this.userInfo.stats.tests
      this.passes = this.userInfo.stats.passes
      this.failures = this.userInfo.stats.failures

    })
  }
}
