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

export class PostClass extends F_DB {
  constructor() {
    super(app, "post");
  }

  // this can be used to notify a user whose id is in the alias array in the post type
  async addListener(onDone: (snapshot: QuerySnapshot<DocumentData>) => void) {
    let docRef = this.getCollectionRef();
    if (docRef) {
      onSnapshot(docRef, onDone);
    }
  }

  async getAllUsersPost(usersId: string) {
    return this.getDocumentDataByCondition({
      conditions: usersId ? [where("usersId", "==", usersId)] : [],
    }).then((snap) => {
      if (!snap?.empty) {
        return snap?.docs.map((doc) => {
          return doc.data() as AjoProduct;
        });
      } else {
        return null;
      }
    });
  }

  async getAllProductRelatedPost(porductId: string) {
    return this.getDocumentDataByCondition({
      conditions: porductId
        ? [where("aliasesReferences", "array-contains", { refId: porductId })]
        : [],
    }).then((snap) => {
      if (!snap?.empty) {
        return snap?.docs.map((doc) => {
          return doc.data() as AjoProduct;
        });
      } else {
        return null;
      }
    });
  }

  async addAPost(data: Post) {
    let _data = _(data).omitBy(_.isUndefined).value();
    return await this.addToDocumentCollection({
      docId: data.objectId,
      data: _data,
    });
  }

  async updateAPost(data: Post) {
    let _data = _(data).omitBy(_.isUndefined).value();
    return await this.updateDocument({
      documentId: data.objectId as string,
      data: _data,
    });
  }

  async deleteAPost(postId: string) {
    return await this.deleteDocument({
      documentId: postId,
    });
  }
  
  async likeAPost(userAction: UserAction,) {
    // create an action of like 
    // update users post likes

  }

}
