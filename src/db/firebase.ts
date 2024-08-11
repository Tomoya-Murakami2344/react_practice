import {
  CollectionReference,
  Firestore,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./initialize";

export class firebase {
  private db: Firestore;
  private collectionRef: CollectionReference;
  constructor(private collectionName: string) {
    this.db = db;
    this.collectionRef = collection(this.db, this.collectionName);
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

  async checkIfDocumentExists(field: string, value: any) {
    try {
      const q = query(this.collectionRef, where(field, "==", value));
      // クエリを実行してドキュメントを取得
      const querySnapshot = await getDocs(q);
      // ドキュメントが存在するか確認
      if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data();
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  }
}
