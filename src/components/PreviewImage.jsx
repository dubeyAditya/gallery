import React, { useEffect, useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

const IMAGE_WIDTH = '400px';

const IMAGE_HEIGHT = '500px';

const PreviewImage = ({ isVisible, images, index, setVisible }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState();


  useEffect(()=> {
     setCurrentImageIndex(index);
  }, [index])

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleClose = () => {
    setVisible(false)
  }

  return (
    <Modal open={isVisible} footer={null} onCancel={handleClose} closable={true} >
      <div className='carousel-container'>
        <button onClick={goToPreviousImage} className='carousel-button'>
          {' '}
          <LeftOutlined />
        </button>
        <img
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          src={images[currentImageIndex]?.download_url}
          alt='Preview Image'
        />
        <button onClick={goToNextImage} className='carousel-button'>
          {' '}
          <RightOutlined />
        </button>
      </div>
    </Modal>
  );
};

export default PreviewImage;
