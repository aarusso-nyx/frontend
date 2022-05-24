import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ServiceWorkerModule }     from '@angular/service-worker';

import { DatePipe } from '@angular/common';

import { NgModule, LOCALE_ID }              from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule }   from '@angular/common/http';

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// DateTime stuff
import { registerLocaleData } from '@angular/common';
import localePt               from '@angular/common/locales/pt';
import localePtExtra          from '@angular/common/locales/extra/pt';

registerLocaleData(localePt, 'pt', localePtExtra);

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Material Design stuff
import { FlexLayoutModule }         from '@angular/flex-layout';
import { MAT_DATE_LOCALE }          from '@angular/material/core';
import { MatAutocompleteModule }    from '@angular/material/autocomplete';
import { MatBadgeModule }           from '@angular/material/badge';
import { MatBottomSheetModule }     from '@angular/material/bottom-sheet';
import { MatButtonModule }          from '@angular/material/button';
import { MatButtonToggleModule }    from '@angular/material/button-toggle';
import { MatCardModule }            from '@angular/material/card';
import { MatCheckboxModule }        from '@angular/material/checkbox';
import { MatChipsModule }           from '@angular/material/chips';
import { MatDatepickerModule }      from '@angular/material/datepicker';
import { MatDividerModule }         from '@angular/material/divider';
import {
    MAT_DIALOG_DEFAULT_OPTIONS,
    MAT_DIALOG_DATA,
    MatDialogModule,
  }                                 from '@angular/material/dialog';
import { MatExpansionModule }       from '@angular/material/expansion';
import { MatFormFieldModule }       from '@angular/material/form-field';
import { MatGridListModule }        from '@angular/material/grid-list';
import { MatIconModule }            from '@angular/material/icon';
import { MatInputModule }           from '@angular/material/input';
import { MatListModule }            from '@angular/material/list';
import { MatMenuModule }            from '@angular/material/menu';
import { MatNativeDateModule }      from '@angular/material/core';
import { MatPaginatorModule }       from '@angular/material/paginator';
import { MatProgressBarModule }     from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule }          from '@angular/material/core';
import { MatRadioModule }           from '@angular/material/radio';
import { MatSelectModule }          from '@angular/material/select';
import { MatSliderModule }          from '@angular/material/slider';
import { MatSlideToggleModule }     from '@angular/material/slide-toggle';
import { MatSidenavModule }         from '@angular/material/sidenav';
import { MatSnackBarModule }        from '@angular/material/snack-bar';
import { MatSortModule }            from '@angular/material/sort';
import { MatStepperModule }         from '@angular/material/stepper';
import { MatTableModule }           from '@angular/material/table';
import { MatTabsModule }            from '@angular/material/tabs';
import { MatToolbarModule }         from '@angular/material/toolbar';
import { MatTooltipModule }         from '@angular/material/tooltip';
import { MatTreeModule }            from '@angular/material/tree';
import { ScrollingModule }          from '@angular/cdk/scrolling';
import { DragDropModule }           from '@angular/cdk/drag-drop';
import { LayoutModule }             from '@angular/cdk/layout';

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
import { environment } from '../environments/environment';

// Routing and Root Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityDetailComponent } from './auth/entites/entity-detail/entity-detail.component';
import { EntityListComponent } from './auth/entites/entity-list/entity-list.component';
import { RoleDetailComponent } from './auth/roles/role-detail/role-detail.component';
import { RoleListComponent } from './auth/roles/role-list/role-list.component';
import { AppDetailComponent } from './auth/apps/app-detail/app-detail.component';
import { AppListComponent } from './auth/apps/app-list/app-list.component';
import { MainComponent } from './main/main.component';
import { UserListComponent } from './auth/users/user-list/user-list.component';
import { UserDetailComponent } from './auth/users/user-detail/user-detail.component';
import { OrganizationDetailComponent } from './auth/organization/organization-detail/organization-detail.component';
import { OrganizationListComponent } from './auth/organization/organization-list/organization-list.component';
import { LicenseListComponent } from './auth/licenses/license-list/license-list.component';

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

@NgModule({
  declarations: [
    AppComponent,
    EntityListComponent,
    EntityDetailComponent,
    RoleDetailComponent,
    RoleListComponent,
    AppDetailComponent,
    AppListComponent,
    MainComponent,
    UserListComponent,
    UserDetailComponent,
    OrganizationDetailComponent,
    OrganizationListComponent,
    LicenseListComponent,
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    FlexLayoutModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatToolbarModule,
    MatTreeModule,
    ScrollingModule,
    DragDropModule,
    LayoutModule,

  ],
  providers:    [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DIALOG_DATA, useValue: {} },
//    { provide: NGX_MAT_DATE_FORMATS, useValue: 'pt-BR' },
//    { provide: MAT_LABEL_GLOBAL_OPTIONS,    useValue: { float: 'always'} },
//    { provide: MAT_DIALOG_DEFAULT_OPTIONS,  useValue: { width: '66%' } },
//    { provide: OWL_DATE_TIME_LOCALE, useValue: 'pt'},
//    { provide: HTTP_INTERCEPTORS,    useClass: AuthInterceptor,  multi: true },
//    { provide: HTTP_INTERCEPTORS,    useClass: ErrorInterceptor, multi: true },

    MatDatepickerModule,

    // Angular Pipes
    DatePipe,

    // Pipes
    // FileSizePipe,
    // IntervalPipe,
    // AbsValuePipe,
    // TruncatePipe,
    // DurationPipe,
    // ElapsedPipe,
    // LatLonPipe,
    // HeadToPipe,
    // SpeedPipe,
    // NightPipe,
    // ToETAPipe,
    // AreaPipe,
    // DistPipe,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }


