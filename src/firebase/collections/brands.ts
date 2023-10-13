"use client";
import {
  DocumentData,
  QuerySnapshot,
  onSnapshot,
  where,
} from "firebase/firestore";
import { F_DB } from "../database";
import { app } from "../config";
import _ from "lodash";

export class UsersClass extends F_DB {
  constructor() {
    super(app, "brand");
  }

  async addListener(onDone: (snapshot: QuerySnapshot<DocumentData>) => void) {
    let docRef = this.getCollectionRef();
    if (docRef) {
      onSnapshot(docRef, onDone);
    }
  }

  async saveBrandData(data: Brand) {
    let _data = _(data).omitBy(_.isUndefined).value();
    return await this.addToDocumentCollection({
      docId: data.objectId,
      data: _data,
    });
  }

  async updateBrandData(data: Brand) {
    let _data = _(data).omitBy(_.isUndefined).value();
    return await this.updateDocument({
      documentId: data.objectId as string,
      data: _data,
    });
  }

  async addProductToCart(usersId: string, productId: string) {
    return await this.addToDocumentArray({
      docId: usersId as string,
      arrayKey: "productInCart",
      value: productId,
    });
  }

}
