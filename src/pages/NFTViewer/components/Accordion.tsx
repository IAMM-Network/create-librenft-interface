import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import Collapse from './Collapse';

interface AccordionProps {
  title: string;
  isOpen?: boolean;
  isMarkdown?: boolean;
}

export default function Accordion({ title, isOpen, children }: PropsWithChildren<AccordionProps>) {
  const [hasCollapsed, setHasCollapsed] = useState(!isOpen);
  const isActive = !hasCollapsed;
  return (
    <AccordionWrapper onClick={() => setHasCollapsed((prev) => !prev)}>
      <TitleWrapper>
        <Title>{title}</Title>
        <Icon isActive={isActive}>
          <svg
            viewBox="0 0 20 20"
            focusable="false"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path fill="white" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          </svg>
        </Icon>
      </TitleWrapper>
      <Collapse isOpen={isActive}>
        <Description>
          {children}
        </Description>
      </Collapse>
    </AccordionWrapper>
  );
}

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  cursor: pointer;
  border: 1px solid #696969;
  border-radius: 8px;
  transition: opacity 0.2s;

  &:hover {
    filter: brightness(1.2);
  }
`;


const Title = styled.h3`
  font-size: 12px;
  font-weight: 600;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div<{ isActive: boolean }>`
  width: 20px;
  transition: transform 0.3s;
  transform: rotateZ(${(p) => (p.isActive ? 180 : 0)}deg);
`;

const Description = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  color: white;
`;