import React from 'react'
import useFirestore from '../hooks/useFirestore'

const ImageGrid = () => {

    const { docs } = useFirestore('images');

    return (
        <div className = "image-grid">
            Images
        </div>
    )
}

export default ImageGrid
