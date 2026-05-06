import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, updateDoc, deleteDoc, query, where, orderBy } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private firestore = inject(Firestore);

  // Exemplo: Obter todos os documentos de uma coleção
  getCollection(path: string): Observable<any[]> {
    const colRef = collection(this.firestore, path);
    return collectionData(colRef, { idField: 'id' });
  }

  // Exemplo: Obter documentos filtrados por utilizador
  getUserData(path: string, uid: string): Observable<any[]> {
    const colRef = collection(this.firestore, path);
    const q = query(colRef, where('uid', '==', uid), orderBy('createdAt', 'desc'));
    return collectionData(q, { idField: 'id' });
  }

  // Adicionar novo documento
  addDocument(path: string, data: any) {
    const colRef = collection(this.firestore, path);
    return addDoc(colRef, {
      ...data,
      createdAt: new Date().toISOString()
    });
  }

  // Atualizar documento
  updateDocument(path: string, id: string, data: any) {
    const docRef = doc(this.firestore, `${path}/${id}`);
    return updateDoc(docRef, data);
  }

  // Eliminar documento
  deleteDocument(path: string, id: string) {
    const docRef = doc(this.firestore, `${path}/${id}`);
    return deleteDoc(docRef);
  }
}
