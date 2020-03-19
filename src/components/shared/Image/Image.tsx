import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
};

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

Image.defaultProps = {
  width: "100%",
  height: "auto",
};

export default Image;