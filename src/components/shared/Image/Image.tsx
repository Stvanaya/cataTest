import React, { CSSProperties } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  customCss?: CSSProperties | undefined; 
};

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  customCss
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={customCss}
    />
  );
};

Image.defaultProps = {
  width: "100%",
  height: "auto",
  customCss: undefined
};

export default Image;