import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesApiService {

  constructor(private Http:HttpClient) { }

  KEY ="<YOUR_KEY>";

  header = new HttpHeaders({
    "Authorization":`${this.KEY}`,
  });


  //i fetch the static from my API with NODEJS 
  public getAllImages():Observable<any[]>{
    return this.Http.get<any[]>("http://localhost:3000/images");
  }


  public doResearch(name:string):Observable<any>{
    return this.Http.get<any>(`https://api.pexels.com/v1/search?query=${name}&per_page=80`
    ,{headers:this.header});
  }

  public getVideos(name:string):Observable<any>{
    return this.Http.get<any>(`https://api.pexels.com/videos/search?query=${name}&per_page=50`
    ,{headers:this.header});
  }


}
