import React, { Fragment, useEffect, useRef, useState } from 'react';

import {
  Container,
  ContainerImage,
  Description,
  Title,
  Image,
  OptionView,
  OptionActive,
  OptionDeactive,
} from './style';

//define as props que o componente precisa receber
interface slide {
  content: {
    img: string;
    title: string;
    description: string;
  }[];
}

const Slider: React.FC<slide> = ({ content }) => {
  const [option, setOption] = useState(0);
  const [loop, setLoop] = useState(0);
  const show = useRef(0);
  const contentLength = content.length;

  //cria o temporizador do slider
  useEffect(() => {
    setLoop(
      setInterval(() => {
        if (show.current !== contentLength - 1) {
          show.current += 1;
          setOption(show.current);
        } else {
          show.current = 0;
          setOption(0);
        }
      }, 7000)
    );
    return function clean() {
      clearInterval(loop);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      {Array(contentLength)
        .fill(0)
        .map((_, index) =>
          index === option ? (
            <Fragment key={index}>
              <ContainerImage>
                <Image src={content[show.current].img} />
              </ContainerImage>
              <Title>{content[show.current].title}</Title>
              <Description>{content[show.current].description}</Description>
            </Fragment>
          ) : (
            <div key={index} />
          )
        )}

      {/* renderiza de acordo com o estado(posição) do slider */}
      <OptionView>
        {Array(contentLength)
          .fill(0)
          .map((_, index) =>
            index === option ? (
              <OptionActive key={index} />
            ) : (
              <OptionDeactive
                key={index}
                onClick={() => {
                  show.current = index;
                  setOption(index);
                  clearInterval(loop);
                  setLoop(
                    setInterval(() => {
                      if (show.current !== contentLength - 1) {
                        show.current += 1;
                        setOption(show.current);
                      } else {
                        show.current = 0;
                        setOption(0);
                      }
                    }, 7000)
                  );
                }}
              />
            )
          )}
      </OptionView>
    </Container>
  );
};

export default Slider;
