import axios from "axios";
import { ContactType } from "@/sections/Contact.tsx";

export const submitEmail = async (contact: ContactType) => {
  return await axios
    .post("/api/email", contact)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("axios call error: ", error);
    });
};
