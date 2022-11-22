import { getDownloadURL, listAll, ref, uploadBytes, deleteObject } from "firebase/storage";
import { storage } from "../libs/firebase";
import { Photo } from "../types/Photo";
import {v4 as createId} from "uuid";

export const getAll = async () => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, 'images');
    const photoList = await listAll(imagesFolder);

    console.log('photoList'+photoList)

    for (let i in photoList.items) {

        let photoUrl = await getDownloadURL(photoList.items[i]);
        console.log('photoUrl'+photoUrl)

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        });
        console.log('list'+list)
    }

    return list;
}

export const insert = async (file: File) => {
    if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {

        let randomName = createId();
        let newFile = ref(storage, `images/${randomName}`);

        let upload = await uploadBytes(newFile, file);
        let photoUrl = await getDownloadURL(upload.ref);

        return {name: upload.ref.name, url: photoUrl} as Photo;

    } else {
        return new Error('Tipo de arquivo não permitido');
    }
}

export const deletePhoto = async (name: string) => {
    let photoRef = ref(storage, `images/${name}`);
    await deleteObject(photoRef);
}