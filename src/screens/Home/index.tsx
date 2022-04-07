import React, {useCallback, useRef} from 'react';

import ExampleUseImperativeHandler, {
  ModalHandles,
} from '../../components/ExampleUseImperativeHandler';
import * as S from './styles';

const Home: React.FC = () => {
  const modalRef = useRef<ModalHandles>(null);

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  console.log(modalRef.current?.value);

  return (
    <S.Container>
      <S.Title>Home</S.Title>

      <S.Button onPress={handleOpenModal}>
        <S.ButtonText>Mostrar</S.ButtonText>
      </S.Button>

      <ExampleUseImperativeHandler ref={modalRef} />
    </S.Container>
  );
};

export default Home;
