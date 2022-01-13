import axios from "axios";

export async function getData(url) {
  try {
    const response = await axios(url);
    return response.data;
  } catch (err) {
    console.log("Could Not fetch data:", err);
  }
}
