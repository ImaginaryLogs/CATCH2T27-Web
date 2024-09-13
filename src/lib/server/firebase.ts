import admin from "firebase-admin";

import { GOOGLE_APPLICATION_KEY } from "$env/static/private";
import credentials from "./credentials.json";

export const app =
  admin.apps.length == 0
    ? admin.initializeApp({
        credential: admin.credential.cert({
          privateKey: GOOGLE_APPLICATION_KEY,
          ...credentials,
        }),
      })
    : admin.app();

console.log("Firebase app initialized");
