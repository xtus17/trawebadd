import { db } from "./../../../../firebase";

export async function editLocation({ infoData, id }) {
  try {
    await db.collection("tangamandapio").doc(id).update(infoData);
  } catch (error) {}
}
