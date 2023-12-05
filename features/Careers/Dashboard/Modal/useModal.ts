import React from 'react';

import useHideOnOutsideClick from 'hooks/useHideOnOutsideClick';

export default function useModal() {
  // Define custom onClick functions
  //   const handleClickItem1 = () => console.log('Clicked Item 1');
  //   const handleClickSubitem11 = () => console.log('Clicked Subitem 1.1');
  //   const handleClickSubitem12 = () => console.log('Clicked Subitem 1.2');
  //   const handleClickItem2 = () => console.log('Clicked Item 2');

  //   const modalItems: ModalItem[] = [
  //     {
  //       label: 'Item 1',
  //       onClick: handleClickItem1,
  //       subItems: [
  //         {
  //           label: 'Subitem 1.1',
  //           onClick: handleClickSubitem11,
  //         },
  //         {
  //           label: 'Subitem 1.2',
  //           onClick: handleClickSubitem12,
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Item 2',
  //       onClick: handleClickItem2,
  //     },
  //   ];

  //  interface ModalProps {
  //     items: ModalItem[];
  //     onClose: () => void;
  //   }

  //    type ModalItem = {
  //     label: string;
  //     onClick?: () => void;
  //     subItems?: ModalItem[];
  //   };

  //   const RecursiveModal: React.FC<ModalProps> = ({ items, onClose }) => {
  //     const handleItemClick = (onClick?: () => void) => {
  //       if (onClick) {
  //         onClick();
  //       }
  //     };

  //     return (
  //       <Modal setIsOpened={onClose} opened={showModal} ref={ref}>
  //         <ul>
  //           {items.map((item, index) => (
  //             <li key={index} onClick={() => handleItemClick(item.onClick)}>
  //               {item.label}
  //               {item.subItems && <RecursiveModal items={item.subItems} onClose={onClose} />}
  //             </li>
  //           ))}
  //         </ul>
  //       </Modal>
  //     );
  //   };

  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleModalChange = () => {
    setShowModal(!showModal);
  };

  const ref = React.useRef(null);
  const additionalRef = React.useRef(null);

  useHideOnOutsideClick(showModal, handleModalChange, ref, additionalRef);

  return { ref, additionalRef, handleModalChange, showModal };
}
