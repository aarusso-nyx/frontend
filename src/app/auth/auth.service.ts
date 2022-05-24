import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {
    Entity, EntityId,
    Role, RoleId,
    Organization, OrganizationId, App, AppId, User, UserId, Endpoint, UserData, Assignment, Staff
} from './auth.interfaces';

const baseURL = 'http://localhost:3000/api';

@Injectable({
    providedIn: 'root'
})
export class AuthAPIService {

    constructor(public http: HttpClient) {
        this.refreshEntities();
        this.refreshRoles();
        this.refreshApps();
        this.refreshUsers();
        this.refreshOrganizations();
    }
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////

    private entities_: BehaviorSubject<Entity[]> = new BehaviorSubject<Entity[]>([]);

    private refreshEntities(): void {
        this.http.get<Entity[]>(`${baseURL}/entities`)
            .subscribe((data: Entity[]) => {
                this.entities_.next(data || []);
            });
    }

    get entities$(): Observable<Entity[]> {
        return this.entities_.asObservable();
    }

    getEntity(id: EntityId): Observable<Entity> {
        return this.http.get<Entity>(`${baseURL}/entities/${id.entity_id}`);
    }

    createEntity(entity: Entity): Observable<Entity> {
        return this.http.post<Entity>(`${baseURL}/entities`, entity)
            .pipe(tap(() => this.refreshEntities()));
    }

    updateEntity(entity: Entity): Observable<Entity> {
        return this.http.patch<Entity>(`${baseURL}/entities/${entity.entity_id}`, entity)
            .pipe(tap(() => this.refreshEntities()));
    }

    deleteEntity(id: EntityId): Observable<Entity> {
        return this.http.delete<Entity>(`${baseURL}/entities/${id.entity_id}`)
            .pipe(tap(() => this.refreshEntities()));
    }

    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    // roles

    private roles_: BehaviorSubject<Role[]> = new BehaviorSubject<Role[]>([]);

    private refreshRoles(): void {
        this.http.get<Role[]>(`${baseURL}/roles`)
            .subscribe((data: Role[]) => {
                this.roles_.next(data || []);
            });
    }

    get roles$(): Observable<Role[]> {
        return this.roles_.asObservable();
    }

    getRole(id: RoleId): Observable<Role> {
        return this.http.get<Role>(`${baseURL}/roles/${id.role_id}`);
    }

    createRole(role: Role): Observable<Role> {
        return this.http.post<Role>(`${baseURL}/roles`, role)
            .pipe(tap(() => this.refreshRoles()));
    }

    updateRole(role: Role): Observable<Role> {
        return this.http.patch<Role>(`${baseURL}/roles/${role.role_id}`, role)
            .pipe(tap(() => this.refreshRoles()));
    }

    deleteRole(id: RoleId): Observable<Role> {
        return this.http.delete<Role>(`${baseURL}/roles/${id.role_id}`)
            .pipe(tap(() => this.refreshRoles()));
    }

    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    // apps

    private apps_: BehaviorSubject<App[]> = new BehaviorSubject<App[]>([]);

    private refreshApps(): void {
        this.http.get<App[]>(`${baseURL}/apps`)
            .subscribe((data: App[]) => {
                this.apps_.next(data || []);
            });
    }

    get apps$(): Observable<App[]> {
        return this.apps_.asObservable();
    }

    getApp(id: AppId): Observable<App> {
        return this.http.get<App>(`${baseURL}/apps/${id.app_id}`);
    }

    createApp(app: App): Observable<App> {
        return this.http.post<App>(`${baseURL}/apps`, app)
            .pipe(tap(() => this.refreshApps()));
    }

    updateApp(app: App): Observable<App> {
        return this.http.patch<App>(`${baseURL}/apps/${app.app_id}`, app)
            .pipe(tap(() => this.refreshApps()));
    }

    deleteApp(id: AppId): Observable<App> {
        return this.http.delete<App>(`${baseURL}/apps/${id.app_id}`)
            .pipe(tap(() => this.refreshApps()));
    }

    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    // users

    private users_: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

    private refreshUsers(): void {
        this.http.get<User[]>(`${baseURL}/users`)
            .subscribe((data: User[]) => {
                this.users_.next(data || []);
            });
    }

    get users$(): Observable<User[]> {
        return this.users_.asObservable();
    }

    getUser(id: UserId): Observable<User> {
        return this.http.get<User>(`${baseURL}/users/${id.user_id}`);
    }

    createUser(user: UserData): Observable<User> {
        return this.http.post<User>(`${baseURL}/users`, user)
            .pipe(tap(() => this.refreshUsers()));
    }

    updateUser(user: User): Observable<User> {
        return this.http.patch<User>(`${baseURL}/users/${user.user_id}`, user)
            .pipe(tap(() => this.refreshUsers()));
    }

    deleteUser(id: UserId): Observable<User> {
        return this.http.delete<User>(`${baseURL}/users/${id.user_id}`)
        .pipe(tap(() => this.refreshUsers()));
    }
    
    createEndpoint(endpoint: Endpoint): Observable<Endpoint> {
        return this.http.post<Endpoint>(`${baseURL}/users/${endpoint.user_id}/endpoints`, endpoint)
    }

    deleteEndpoint(id: Endpoint): Observable<Endpoint> {
        return this.http.delete<Endpoint>(`${baseURL}/users/${id.user_id}/endpoints/${id.endpoint_id}`)
    }

    createStaff(staff: Staff): Observable<Staff> {
        return this.http.post<Staff>(`${baseURL}/users/${staff.user_id}/staff`, staff)
    }

    dropStaff(id: Staff): Observable<Staff> {
        return this.http.delete<Staff>(`${baseURL}/users/${id.user_id}/staff/${id.staff_id}`)
    }

    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    // organizations


    private organizations_: BehaviorSubject<Organization[]> = new BehaviorSubject<Organization[]>([]);

    private refreshOrganizations(): void {
        this.http.get<Organization[]>(`${baseURL}/organizations`)
            .subscribe((data: Organization[]) => {
                this.organizations_.next(data || []);
            });
    }

    get organizations$(): Observable<Organization[]> {
        return this.organizations_.asObservable();
    }

    getOrganization(id: OrganizationId): Observable<Organization> {
        return this.http.get<Organization>(`${baseURL}/organizations/${id.organization_id}`);
    }

    createOrganization(organization: Organization): Observable<Organization> {
        return this.http.post<Organization>(`${baseURL}/organizations`, organization)
            .pipe(tap(() => this.refreshEntities()));
    }

    updateOrganization(organization: Organization): Observable<Organization> {
        return this.http.patch<Organization>(`${baseURL}/organizations/${organization.organization_id}`, organization)
            .pipe(tap(() => this.refreshEntities()));
    }

    deleteOrganization(id: OrganizationId): Observable<Organization> {
        return this.http.delete<Organization>(`${baseURL}/organizations/${id.organization_id}`)
            .pipe(tap(() => this.refreshEntities()));
    }

    createAssignment(assignment: Assignment): Observable<Assignment> {
        console.log({ assignment });
        return this.http.post<Assignment>(`${baseURL}/organizations/${assignment.organization_id}/assignments`, assignment)
    }

    deleteAssignment(id: Assignment): Observable<Assignment> {
        return this.http.delete<Assignment>(`${baseURL}/organizations/${id.organization_id}/assignments/${id.assign_id}`)
    }

    listAssignment(organization: OrganizationId): Observable<Assignment[]> {
        return this.http.get<Assignment[]>(`${baseURL}/organizations/${organization.organization_id}/assignments`);
    }

    updateAssignment(assignment: Assignment): Observable<Assignment> {
        return this.http.patch<Assignment>(`${baseURL}/organizations/${assignment.organization_id}/assignments/${assignment.assign_id}`, assignment)
    }
}
