import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Usuario } from '../models/usuario';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private firestore: Firestore) {}

  addUser(user: Usuario) {
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef, user);
  }
}
