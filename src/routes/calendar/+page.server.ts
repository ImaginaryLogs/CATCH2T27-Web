import { app } from "$lib/server/firebase.js";
// TODO: check if it really is supposed to be .js extension?
// i don't think that is normal but not having .js extension causes error

import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.js";

import type { Timestamp } from "firebase-admin/firestore";

export const load: PageServerLoad = async () => {
  const now = new Date();

  const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  const data = await app
    .firestore()
    .collection("calendar")
    .where("date", ">", currentMonth)
    .where("date", "<", nextMonth)
    .get();

  const array = data.docs.map(
    (doc) => doc.data() as { event: string; date: Timestamp }
  );

  return {
    calendar_events: array.map((doc) => {
      return {
        event: doc.event as string,
        date: doc.date.toDate(),
      };
    }),
  };
};
