import React, { lazy } from 'react';
import PropTypes from 'prop-types';
// import './ImageViewer.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ImageViewer = ({isVisible, images}) => {
  return isVisible && <ImageGallery loading="lazy" items={images}></ImageGallery>
};

ImageViewer.propTypes = {
  isVisible: PropTypes.bool,
  images: PropTypes.array
};

ImageViewer.defaultProps = {
  isVisible: false,
  images: []
};

export default ImageViewer;
