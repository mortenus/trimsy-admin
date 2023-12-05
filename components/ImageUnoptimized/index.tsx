import React from 'react';

import Image from 'next/image';
import TImageUnoptimzed from './ImageUnoptimized.types';
import useLoaded from './hooks/useLoaded';

const ImageUnoptimized = ({
  src,
  alt,
  priority = false,
  fill = false,
  style = {},
  width,
  height,
  sizes,
  loading,
  className,
}: TImageUnoptimzed) => {
  const loaded = useLoaded();

  return (
    <>
      {fill ? (
        <Image
          className={className}
          placeholder="blur"
          blurDataURL={src}
          priority={priority}
          loading={loading}
          fill={fill}
          src={src}
          alt={alt}
          style={style && style}
        />
      ) : (
        <Image
          className={className}
          placeholder="blur"
          blurDataURL={src}
          priority={priority}
          loading={loading}
          width={Math.round(+!width)}
          height={Math.round(+!height)}
          sizes={sizes}
          src={src}
          alt={alt}
          style={style && style}
        />
      )}

      {loaded && fill ? (
        <Image
          className={className}
          unoptimized
          fill={fill}
          loading={loading}
          src={src}
          alt={alt}
          style={{ position: 'absolute', left: 0, top: 0, ...style }}
        />
      ) : (
        <Image
          className={className}
          unoptimized
          loading={loading}
          sizes={sizes}
          width={Math.round(+!width)}
          height={Math.round(+!height)}
          src={src}
          alt={alt}
          style={{ position: 'absolute', left: 0, top: 0, ...style }}
        />
      )}
    </>
  );
};

export default ImageUnoptimized;
