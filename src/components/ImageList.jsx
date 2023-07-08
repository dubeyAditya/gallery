import React, { useState, useEffect } from 'react';
import ImageViewer from './ImageViewer/ImageViewer';
import ImageGallery from 'react-image-gallery';
import PreviewImage from './PreviewImage';
const IMAGE_WIDTH = '300px';

const IMAGE_HEIGHT = '200px';

const API_ENDPOINT = 'https://picsum.photos/v2/list?limit=100';

const ImageList = () => {
  const [images, setImages] = useState([]);

  const [isVisible, setVisible] = useState(false);

  const [selectedIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    getImages()
      .then((imageList) => {
        setImages(imageList);
      })
      .catch((err) => {
        console.log('Error in fething data ', err);
      });
  }, []);

  
  const renderImages = (image, imageIndex) => {
    return (
      <img
        key={image.id}
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        async
        src={image.download_url}
        onClick={() => previewImage(imageIndex)}></img>
    );
  };

  const previewImage = (imageIndex) => {
    console.log(imageIndex);
    const selectedImage = images.find((image,index)=> index === imageIndex);
    console.log(selectedImage);
    setVisible(true);
    setCurrentImageIndex(imageIndex);
  }

  const getImages = async () => {
    const response = await fetch(API_ENDPOINT);
    const images = await response.json();
    return images;
  };

  return <div>
    <PreviewImage isVisible={isVisible} images={images} index={selectedIndex} setVisible={(val)=> setVisible(val)}></PreviewImage>
    <div className='image-list'>{images?.map(renderImages)}</div>
  </div>;
};

export default ImageList;
