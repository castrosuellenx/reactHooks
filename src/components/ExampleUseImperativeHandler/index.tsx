import React, {
  forwardRef,
  useCallback,
  useState,
  useImperativeHandle,
} from 'react';

import * as S from './styles';

export interface ModalHandles {
  value: string;
  openModal: () => void;
}

const ExampleUseImperativeHandler: React.ForwardRefRenderFunction<
  ModalHandles
> = ({}, ref) => {
  const [visible, setVisible] = useState(true);

  const value = 'sending any value';

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      value,
      openModal,
    };
  });

  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <S.Container>
      <S.Button onPress={handleCloseModal}>
        <S.Title>Esconder</S.Title>
      </S.Button>
    </S.Container>
  );
};

export default forwardRef(ExampleUseImperativeHandler);
