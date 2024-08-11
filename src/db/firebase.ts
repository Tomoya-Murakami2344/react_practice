import {
  Firestore,
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export class firebase {
  private db: Firestore;
  constructor(private collectionName: string) {
    this.db = db;
  }
  async add(data: any) {
    try {
      await addDoc(collection(this.db, this.collectionName), data);
    } catch (error) {
      console.log(error);
    }
  }

  async update(documentId: string, updatedData: any) {
    try {
      const docRef = doc(this.db, this.collectionName, documentId);
      const existData = await getDoc(docRef);
      await updateDoc(docRef, {
        ...existData.data(),
        ...updatedData,
        updated_at: new Date().getTime(),
      });
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }

  async get(documentId: string) {
    try {
      const docRef = doc(this.db, this.collectionName, documentId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  }
}
