import { Routes } from '@angular/router';
import { UserDetailsViewComponent } from './user-details-view/user-details-view.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsEditComponent } from './user-details-edit/user-details-edit.component';
import { AddMemberFormComponent } from './add-member-form/add-member-form.component';
import { NameLookupComponent } from './name-lookup/name-lookup.component';

export const routes: Routes = [
    {path:'', component: UserListComponent},
    {path: 'addMembers', component: AddMemberFormComponent},
    {path: 'nameLookup', component: NameLookupComponent},
    {path: 'detailsPage', component: UserDetailsViewComponent},
    {path: 'editDetails', component: UserDetailsEditComponent}
];
