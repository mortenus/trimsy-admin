interface TLinkBase {
  id: number;
  title: string;
}

interface TSingleLink extends TLinkBase {
  links?: never;
  href: string;
}

interface TMultipleLinks extends TLinkBase {
  href?: never;
  links: {
    title: string;
    description: string;
    href: string;
  }[];
}

type TLinks = TSingleLink | TMultipleLinks;

export default interface THamburgerMenu {
  links: TLinks[];
  handleFormChange: () => void;
  hamburgerActive: boolean;
  handleHamburgerChange: () => void;
}
