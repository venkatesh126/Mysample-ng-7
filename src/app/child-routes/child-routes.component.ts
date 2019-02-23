import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-routes',
  templateUrl: './child-routes.component.html',
  styleUrls: ['./child-routes.component.less']
})
export class ChildRoutesComponent implements OnInit {
  id: number;
  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

}
