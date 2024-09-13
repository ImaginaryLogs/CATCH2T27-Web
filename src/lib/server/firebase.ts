import admin from "firebase-admin";

import { GOOGLE_APPLICATION_CREDENTIALS } from "$env/static/private";

export const app = admin.initializeApp({
  credential: admin.credential.cert(
    await import(GOOGLE_APPLICATION_CREDENTIALS)
  ),
});

console.log("Firebase app initialized");
