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

export class UsersActionClass extends F_DB {
  constructor() {
    super(app, "users-action");
  }

  async addListener(onDone: (snapshot: QuerySnapshot<DocumentData>) => void) {
    let docRef = this.getCollectionRef();
    if (docRef) {
      onSnapshot(docRef, onDone);
    }
  }

  async addUsersAction(data: UserAction) {
    let _data = _(data).omitBy(_.isUndefined).value();
    return await this.addToDocumentCollection({
      docId: data.objectId,
      data: _data,
    });
  }

  async removeUsersAction(id: string) {
    return await this.deleteDocument({
      documentId: id,
    });
  }

  findCurrentUsersAction(usersId: string, reactions: UserAction[]) {
    let found = reactions.filter((a) => a.actionById == usersId);
    return found;
  }
  
}
