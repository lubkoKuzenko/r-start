import React from 'react';
import Accordion from './components/Accordion/Accordion';

const CompoundPattern: React.FC = () => {
  return (
    <>
      <Accordion>
        <Accordion.Header id="1">Header 1</Accordion.Header>
        <Accordion.Content id="1">Content 1</Accordion.Content>
      </Accordion>
      <Accordion>
        <Accordion.Header id="2">Header 2</Accordion.Header>
        <Accordion.Content id="2">Content 2</Accordion.Content>
      </Accordion>
      <Accordion>
        <Accordion.Header id="3">Header 3</Accordion.Header>
        <Accordion.Content id="3">Content 3</Accordion.Content>
      </Accordion>
    </>
  );
};

export default CompoundPattern;
