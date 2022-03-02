import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showFeature : string ='recipe';

  onNavigate(featureSelected:string){
    console.log(featureSelected);
    this.showFeature = featureSelected;
  }
}
