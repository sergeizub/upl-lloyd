import { storage } from "@/components/firebasecfg";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

let nanoid=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e<63?"_":"-"),"");

export const uploadFile = async (file, folder) => {
  try {
    const filename = nanoid();
    const storageRef = ref(
      storage,
      `${folder}${filename}.${file.name.split(".").pop()}`
    );
    const res = await uploadBytes(storageRef, file);
    console.log(res);
    return res.metadata.fullPath;
  } catch (error) {
    throw error;
  }
};

export const getFile = async (path) => {
  try {
    const fileRef = ref(storage, path);
    return getDownloadURL(fileRef);
  } catch (error) {
    throw error;
  }
};