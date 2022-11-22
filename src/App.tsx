import React, { useState, useEffect, FormEvent } from 'react'
import { deletePhoto, getAll, insert } from './services/photos'

import * as C from './App.styles'
import { Photo } from './types/Photo';
import { PhotoItem } from './components/PhotoItem';

export const App = () => {

  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {    
    getPhotos()
  }, [])

  const getPhotos = async () => {
    setLoading(true);
    setPhotos(await getAll());
    setLoading(false);
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if (file && file.size > 0) {
      setUploading(true);
      let result = await insert(file)
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message} `);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  }

  const handleDeleteBtn = async (name: string) => {
    await deletePhoto(name);
    getPhotos()
  }

  return (
    <C.Container>
      <C.Header>
        <C.H1>Gallery</C.H1>
        <span>...with Firebase, uuid and Styled-Components!</span>

        <C.UploadForm method='POST' onSubmit={handleFormSubmit}>
          <input type="file" name='image' />
          <input type="submit" value='Send' />
          {uploading && 'Enviando...'}
        </C.UploadForm>

        {loading &&
          <C.LoadWarning>
            <span>✋</span><br /> Loading...
          </C.LoadWarning>
        }

        {!loading && photos.length > 0 &&
          <C.PhotoList>
            {photos.map((item, index) => (
              <PhotoItem
                key={index}
                url={item.url}
                name={item.name}
                onDelete={handleDeleteBtn}
              />
            ))}
          </C.PhotoList>
        }

        {!loading && photos.length === 0 &&
          <C.LoadWarning>
            <span>🙁</span><br /> Não há fotos para mostrar...
          </C.LoadWarning>
        }
      </C.Header>
    </C.Container>
  )
}