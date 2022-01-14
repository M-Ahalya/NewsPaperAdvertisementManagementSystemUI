import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AdminComponent } from '../admin/admin.component';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/role.guard';
import { ClientComponent } from '../client/client.component';
import { ContactComponent } from '../contact/contact.component';
import { DeleteComponent } from '../delete/delete.component';
import { EditadComponent } from '../editad/editad.component';
import { FaqsComponent } from '../faqs/faqs.component';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { MyadsComponent } from '../myads/myads.component';
import { NewaddComponent } from '../newadd/newadd.component';
import { TermsComponent } from '../terms/terms.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'faqs', component: FaqsComponent },
    { path: 'myads', component: MyadsComponent },
    { path: 'newadd', component: NewaddComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'editad/:id', component: EditadComponent },
    { path: 'delete', component: DeleteComponent },
    { path: 'client', component: ClientComponent, canActivate: [AuthGuard] },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, RoleGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];