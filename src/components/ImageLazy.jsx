import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageLazy = ({imgSrc, imgAlt}) => {
    return (
        <LazyLoadImage
            alt={imgAlt}
            width={'100%'}
            height={'100%'}
            effect='blur'
            src={imgSrc}
            threshold={100}
        />
    )
}

export default ImageLazy