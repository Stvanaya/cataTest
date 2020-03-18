import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
};

const Image: React.FC<ImageProps> = ({
  src,
  alt
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width="100%"
    />
  );
};

export default Image;