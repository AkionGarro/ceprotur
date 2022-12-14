import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CreatedServicesComponent } from './components/created-services/created-services.component';
import { ShowServiceDetailsComponent } from './components/show-service-details/show-service-details.component';
import { PhaseViewComponent } from './components/phase-view/phase-view.component';
import { NewProcedureComponent } from './components/new-procedure/new-procedure.component';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { DetailsProcedureComponent } from './components/details-procedure/details-procedure.component';
import { ChatComponent } from './components/chat/chat.component';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    HeaderComponent,
    RegisterComponent,
    HomeComponent,
    CreateServiceComponent,
    AboutUsComponent,
    ContactUsComponent,
    CreatedServicesComponent,
    ShowServiceDetailsComponent,
    PhaseViewComponent,
    NewProcedureComponent,
    DetailsProcedureComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatCardModule,
    AppRoutingModule,
    MatNativeDateModule,
    NgbModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    MatFormFieldModule,
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
