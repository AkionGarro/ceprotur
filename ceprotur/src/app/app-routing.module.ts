import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ShowServiceDetailsComponent } from './components/show-service-details/show-service-details.component';
import { PhaseViewComponent } from './components/phase-view/phase-view.component';
import { NewProcedureComponent } from './components/new-procedure/new-procedure.component';
import { CreatedServicesComponent } from './components/created-services/created-services.component';
import { DetailsProcedureComponent } from './components/details-procedure/details-procedure.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./components/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'users', component: UsersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create-service', component: CreateServiceComponent },
  { path: 'created-services', component: CreatedServicesComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'detailsService/:var', component: ShowServiceDetailsComponent },
  { path: 'phaseView/:var', component: PhaseViewComponent },
  { path: 'newProcedure', component: NewProcedureComponent },
  { path: 'detailsProcedure/:var', component: DetailsProcedureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
