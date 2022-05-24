import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppDetailComponent } from './auth/apps/app-detail/app-detail.component';
import { AppListComponent } from './auth/apps/app-list/app-list.component';
import { EntityDetailComponent } from './auth/entites/entity-detail/entity-detail.component';
import { EntityListComponent } from './auth/entites/entity-list/entity-list.component';
import { LicenseListComponent } from './auth/licenses/license-list/license-list.component';
import { OrganizationDetailComponent } from './auth/organization/organization-detail/organization-detail.component';
import { OrganizationListComponent } from './auth/organization/organization-list/organization-list.component';
import { RoleDetailComponent } from './auth/roles/role-detail/role-detail.component';
import { RoleListComponent } from './auth/roles/role-list/role-list.component';
import { UserDetailComponent } from './auth/users/user-detail/user-detail.component';
import { UserListComponent } from './auth/users/user-list/user-list.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'entities',
    children: [
        {
            path:      '',
            component: EntityListComponent,
        },
        {
            path:      ':entity_id',
            component: EntityDetailComponent,
        },
    ]
},
{
  path: 'roles',
  children: [
      {
          path:      '',
          component: RoleListComponent,
      },
      {
          path:      ':role_id',
          component: RoleDetailComponent,
      },
  ]
},
{
  path: 'apps',
  children: [
      {
          path:      '',
          component: AppListComponent,
      },
      {
          path:      ':app_id',
          component: AppDetailComponent,
      },
  ]
},
{
  path: 'users',
  children: [
      {
          path:      '',
          component: UserListComponent,
      },
      {
          path:      ':user_id',
          component: UserDetailComponent,
      },
  ]
},
{
  path:      'licenses',
  component: LicenseListComponent,
},
{
  path: 'organizations',
  children: [
      {
          path:      '',
          component: OrganizationListComponent,
      },
      {
          path:      ':organization_id',
          component: OrganizationDetailComponent,
      },
  ]
},
{
  path: 'main',
  component: MainComponent,
},
{
  path: '',
  redirectTo: '/main',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
