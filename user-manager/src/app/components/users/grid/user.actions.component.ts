import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './user.actions.component.html',
  styleUrls: ['./user.actions.component.css']
})
export class UserActionsComponent {
  params: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  agInit(params: any): void {
    this.params = params;
  }

  openProfile(userId) {
    this.router.navigate(['./user', { userId: userId }], { relativeTo: this.route });
  }
}
