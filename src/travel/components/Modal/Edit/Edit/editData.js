import { db } from "./../../../../firebase";

export async function editData({ infoData, id }) {
  try {
    await db.collection("tangamandapio").doc(id).update(infoData);
  } catch (error) {}
}
