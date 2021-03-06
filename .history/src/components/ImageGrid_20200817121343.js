import React from 'react'
import useFirestore from '../hooks/useFirestore'

const ImageGrid = ({ setImageUrl }) => {

    const { docs } = useFirestore('images');
    console.log(docs);

    return (
        <div className = "img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key = {doc.id} onClick={() => setImageUrl(doc.url)}>
                    <img src = {doc.url} alt="Uploaded image"></img>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
