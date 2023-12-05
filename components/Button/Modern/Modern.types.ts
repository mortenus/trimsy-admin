interface TButtonBase {
  children: React.ReactNode;
  style?: React.CSSProperties;
  color?: 'black' | 'white';
}

interface TButtonOnClick extends TButtonBase {
  onClick: () => void;
  to?: never;
}

interface TButtonLink extends TButtonBase {
  to: string;
  onClick?: never;
}

type TModern = TButtonOnClick | TButtonLink;

export default TModern;
