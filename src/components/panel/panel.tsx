import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #a8a8a8;
  padding: 10px;
`;

const InnerContainer = styled.div`
  border: 5px double white;
  padding: 10px;
  color: white;
`;

const Heading = styled.div`
  display: flex;
  justify-content: center;
  color: #a8a8a8;
  > div {
    position: absolute;
    height: 20px;
    margin-top: -10px;
    background: white;
    padding: 1px 4px;
  }
`;

export interface PanelProps {
  heading?: string;
  children: ReactNode;
}

export function Panel({ heading, children }: PanelProps) {
  return (
    <Container>
      {heading && (
        <Heading>
          <div>{heading}</div>
        </Heading>
      )}
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
}
