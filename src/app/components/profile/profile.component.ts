import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {


  constructor(private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: 'Profile' }
    ]);
  }

  ngOnInit(): void {
  }

}
