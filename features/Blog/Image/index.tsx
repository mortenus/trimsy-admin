import Image from 'next/image';
import React from 'react';

type TBlogImage = {
  url: string;
};

import styles from './BlogImage.module.scss';
import clsx from 'clsx';

const BlogImage = ({ url }: TBlogImage) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Image
      width="0"
      height="0"
      sizes="100vw"
      onLoad={handleImageLoad}
      className={clsx(styles.image, { [styles[`image-loaded`]]: imageLoaded })}
      //   style={{ width: '100%', height: 'auto' }}
      src={url}
      alt={'blog-cover'}
    />
  );
};

export default BlogImage;
