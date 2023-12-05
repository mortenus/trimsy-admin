import React from 'react';
import useHideOnOutsideClick from 'hooks/useHideOnOutsideClick';

export default function useProfile() {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleModalChange = () => {
    setShowModal(!showModal);
  };

  const ref = React.useRef(null);
  const additionalRef = React.useRef(null);

  useHideOnOutsideClick(showModal, handleModalChange, ref, additionalRef);

  return { showModal, handleModalChange, ref, additionalRef };
}
