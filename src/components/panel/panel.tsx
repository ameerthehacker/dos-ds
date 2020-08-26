import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div<{ variant?: string }>`
  background: ${({ variant }) => (variant === 'primary' ? 'green' : '#a8a8a8')};
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
  variant?: 'primary' | 'secondary';
  heading?: string;
  children: ReactNode;
}

export function Panel({ heading, variant = 'primary', children }: PanelProps) {
  return (
    <Container variant={variant}>
      {heading && (
        <Heading>
          <div>{heading}</div>
        </Heading>
      )}
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
}
