import React, {useCallback, useRef} from 'react';

import ExampleUseImperativeHandler, {
  ModalHandles,
} from '../../components/ExampleUseImperativeHandler';
import * as S from './styles';

const FatherExampleUseImperativeHandler: React.FC = () => {
  const modalRef = useRef<ModalHandles>(null);

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  console.log(modalRef.current?.value);

  return (
    <S.Container>
      <S.Title>Example Use Imperative Handler</S.Title>

      <S.Button onPress={handleOpenModal}>
        <S.ButtonText>Mostrar</S.ButtonText>
      </S.Button>

      <ExampleUseImperativeHandler ref={modalRef} />
    </S.Container>
  );
};

export default FatherExampleUseImperativeHandler;
