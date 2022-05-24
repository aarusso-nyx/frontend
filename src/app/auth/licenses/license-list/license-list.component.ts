import { Component, OnInit } from '@angular/core';
import { License } from '../../auth.interfaces';
import { AuthAPIService } from '../../auth.service';


@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.css']
})
export class LicenseListComponent implements OnInit {
  orgs$ = this.auth.organizations$;
  users$ = this.auth.users$;
  apps$ = this.auth.apps$;
  licenses: License[] = []

  constructor(private auth: AuthAPIService) { }

  ngOnInit(): void {
  }

}
