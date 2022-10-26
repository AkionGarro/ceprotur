import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Usuario } from '../models/usuario';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private firestore: Firestore) {}

  addUser(user: Usuario) {
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef, user);
  }

  //para agregar un admin
  addAdmin(admin: Admin) {
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef, admin);
  }
}
