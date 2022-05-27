import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthAPIService } from '../../auth.service';
import { App, Assignment, License, Organization, OrganizationId, Role, Staff, User } from '../../auth.interfaces';


@Component({
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css']
})
export class OrganizationDetailComponent implements OnInit {
  // Observable para o modelo que existe no DB 
  id: OrganizationId = { organization_id: 0 };
  organization$?: Observable<Organization>;
  staff$?: Observable<Staff[]>;
  assignments$?: Observable<Assignment[]>;
  licenses$?: Observable<License[]>;

  users$?: Observable<User[]> = this.auth.users$;
  apps$?: Observable<App[]> = this.auth.apps$;
  roles$?: Observable<Role[]> = this.auth.roles$;

  // O modelo no formulário que existe só aqui no frontend
  organization: FormGroup = this.fb.group({
    organization_id: [''],
    organization_name: ['', Validators.required],
  });

  assign: FormGroup = this.fb.group({
    organization_id: ['', Validators.required],
    role_id: ['', Validators.required],
    user_id: ['', Validators.required],
    starts_at: ['', Validators.required],
    revoked_at: ['', Validators.required],
    expires_at: ['', Validators.required],
  });

  constructor(private auth: AuthAPIService,
    private fb: FormBuilder,
    public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params as OrganizationId;
      
      this.assign.setValue({
        organization_id: this.id.organization_id,
        role_id: '',
        user_id: '',
        starts_at: new Date(),
        revoked_at: new Date(),
        expires_at:  new Date(),

      });

      this.organization$ = this.auth.getOrganization(this.id);
       this.refresh();
       this.refreshAss();

       this.staff$ = this.auth.listStaff(this.id) 
       this.licenses$ = this.auth.listLicense(this.id)
    });
  }

    refresh(): void {
      this.organization$?.subscribe(organization => {
        this.organization.setValue(organization);
      });
    }



  //   ///////////////////////////////////////////////////////////////////////////
  //   ///////////////////////////////////////////////////////////////////////////        
    save(e: Organization): void {
      const id = this.id;
      const data = {...this.id, ...e };
      console.log({ e, id, data });

      this.auth.createOrganization(data)
        .subscribe(() => this.router.navigate(['/organizations']));
    }

    ///////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////// 
    refreshAss(): void {
      this.assignments$ = this.auth.listAssignment(this.id);
    }

    saveAssign(e: Assignment): void {
      this.auth.createAssignment(e)
        .subscribe(() => this.refreshAss());
    }

    editAssign(e: Assignment): void {
      this.auth.updateAssignment(e)
        .subscribe(() => this.refreshAss());
    }

    delAssign(e: Assignment): void {
      this.auth.deleteAssignment(e)
        .subscribe(() => this.refreshAss());
    }



  }


