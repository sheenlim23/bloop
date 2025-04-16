'use server';

import axios from "axios";

export async function checkConnection(): Promise<boolean> {
  try {
    const res = await axios.get("http://127.0.0.1:3000");
    console.log("🚀 ~ checkConnection ~ res:", res)
    return res.status === 200;
  } catch (err) {
    console.error("DB Check Error:", err);
    return false;
  }
}
