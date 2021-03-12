import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponents = ({data: {photos = []}} = {}) => {
    /* console.log(props); */
    return (
        <ul>
            {
                photos.map(photo => <PhotoCard key={photo.id} {...photo}/>)
            }
        </ul>
    )
}

