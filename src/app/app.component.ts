import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { ConfigService } from 'src/assets/services/config.service';
import { SaveInfoService } from 'src/assets/services/save-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SaveInfoService]
})
export class AppComponent {
  title = 'my-project-ng7';
  constructor(public router: Router,private saveConfig?: SaveInfoService) {

  }
  ngOninit() { 
    this.saveConfig.setData([]);
  }
}
