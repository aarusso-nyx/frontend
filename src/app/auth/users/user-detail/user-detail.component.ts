import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthAPIService } from '../../auth.service';
import { Endpoint, Organization, OrganizationId, Staff, User, UserId } from '../../auth.interfaces';
import omit from 'lodash-es/omit';


@Component({
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  // Observable para o modelo que existe no DB 
  // user$?: BehaviorSubject<User>;
  // uId: UserId = { user_id: -1 };
  // endpoints?: Endpoint[] = [];
  user: User | undefined;
  orgs$ = this.auth.organizations$;
  staff$ = new BehaviorSubject<Staff[]>([]);
  // staff: Staff | undefined;
  id: OrganizationId = { organization_id: 0 };


  // O modelo no formulário que existe só aqui no frontend
  user_: FormGroup = this.fb.group({
    user_id: [''],
    user_name: ['', Validators.required],
    user_pass: ['', Validators.required],
    user_email: ['', Validators.required],
    active: ['', Validators.required],
  });

  constructor(private auth: AuthAPIService,
    private fb: FormBuilder,
    public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reload();
  }

  refresh(): void {
    this.user_.setValue(omit(this.user, 'endpoints'));
  }

  reload(): void {
    this.route.params.subscribe(params => {
      this.auth.getUser(params as UserId).subscribe(user => {
        this.user = user;
        this.user_.setValue(omit(user, ['endpoints', 'staff']));
      });
    });
  }

  //   ///////////////////////////////////////////////////////////////////////////
  //   ///////////////////////////////////////////////////////////////////////////        
  save(e: User): void {
    this.auth.updateUser(e)
      .subscribe(() => this.reload());
  }

  createEndpoint(endpoint: string): void {
    if (this.user !== undefined) {
      this.auth.createEndpoint({ user_id: this.user.user_id, endpoint, endpoint_type: '' })
        .subscribe(() => this.reload());
    }
  }

  deleteEndpoint(endpoint: Endpoint) {
    this.auth.deleteEndpoint(endpoint)
      .subscribe(() => this.reload());
  }


  createStaff(o: Organization): void {
    this.auth.createStaff({organization_id: o.organization_id, user_id:this.user?.user_id})
    .subscribe();
      // .subscribe(dados => this.staff$ = dados);
  }


  dropStaff(s: Staff): void {
    this.auth.dropStaff(s)
      .subscribe(() => this.reload());
  }
}


