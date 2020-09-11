import { RouterModule, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'albumApp';

  data:any;
  constructor(private route:Router){
  }

  event($ev){
    this.data=$ev;
    this.route.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.route.navigate(['searchPage',`${this.data}`]);
  }); 
  }
}
