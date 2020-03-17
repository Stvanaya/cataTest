import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

class Index extends React.Component {
  componentDidMount (): void {
    console.log(document);
    alert('React lifecycle from NEXTJS')
  };

  render(): JSX.Element {
    return (
      <div>
        <Title>Hello Styled Components</Title>
      </div>
    );
  };
};

export default Index;