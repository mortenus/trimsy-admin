type THamburgerExtendedButton = {
  children: React.ReactNode;
  onClick: () => void;
  key: string;
  links: {
    title: string;
    description: string;
    href: string;
  }[];
};

export default THamburgerExtendedButton;
