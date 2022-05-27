export interface EntityId  {
    entity_id?: number;
};

export interface Entity extends EntityId {
    entity_name: string;
};

export interface Endpoint {
    endpoint_type?: string;
    endpoint_id?: number;
    user_id: number;
    endpoint: string;
    active?: boolean;
};

export interface UserId  {
    user_id: number;
};

export interface UserData {
    user_name: string;
    user_pass: string;   
    user_email: string;
    active: boolean;
    endpoints?: Endpoint[];
    staff?: Staff[];  
};

export interface Assignment extends UserId, RoleId, OrganizationId {
    assign_id?: number;
    starts_at?: Date;
    expires_at: Date;
    revoked_at: Date;

    user_name: string;
    role_desc: string;
};

export interface User extends UserId, UserData {
    
}

export interface RoleId  {
    role_id?: number;
};

export interface Role extends RoleId {
    role_desc: string;
    entity_id: number;
    scopes: string[];          
    master: boolean;
    app_id: number;
};

export interface AppId  {
    app_id?: number;
};

export interface App extends AppId {
    app_name: string;
    app_url: string;
    scopes: string[];
};

export interface OrganizationId {
    organization_id?: number;
};

export interface Organization extends OrganizationId {
    organization_name: string;
};

export interface StaffReq extends OrganizationId, UserId {

}

export interface Staff extends OrganizationId, UserData{
    staff_id?: number;
    user_id?: number;
    starts_at?: Date;
    expires_at?: Date;
    revoked_at?: Date;
    accepted_at?: Date;
};

export interface License extends Organization, Entity, App{
    license_id: number,
    starts_at: Date,
    expires_at: Date,
    revoked_at: Date
};