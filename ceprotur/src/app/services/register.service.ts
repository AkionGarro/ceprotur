import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { userLogin, Usuario } from '../models/usuario';
import { Admin } from '../models/admin';
import { Service } from '../models/service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  //private BASE_URL = 'http://ceproturuser.pythonanywhere.com/';
  private BASE_URL = 'http://localhost:5000/';
  constructor(private firestore: Firestore, private client: HttpClient) {}

  addUser(user: Usuario) {
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef, user);
  }

  //para agregar un admin
  addAdmin(admin: Admin) {
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef, admin);
  }

  addService(service: Service) {
    const serviceRef = collection(this.firestore, 'services');
    return addDoc(serviceRef, service);
  }

  getUserAPI(): Observable<any> {
    return this.client.get(this.BASE_URL + 'user');
  }
  getUserLogin(user: any): Observable<any> {
    return this.client.post(this.BASE_URL + 'login', user);
  }
  registerUser(user: any): Observable<any> {
    return this.client.post(this.BASE_URL + 'register', user);
  }
}
