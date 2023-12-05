type TImageUnoptimizedBase = {
  src: string;
  alt: string;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  style?: React.CSSProperties;
  className?: string;
};

interface TImageUnoptimizedFill extends TImageUnoptimizedBase {
  fill: boolean;
  height?: never;
  width?: never;
  sizes?: never;
}

interface TImageUnoptimizedWidthAndHeight extends TImageUnoptimizedBase {
  width: string | number;
  height: string | number;
  sizes?: string;
  fill?: never;
}

type TImageUnoptimzed = TImageUnoptimizedFill | TImageUnoptimizedWidthAndHeight;

export default TImageUnoptimzed;
