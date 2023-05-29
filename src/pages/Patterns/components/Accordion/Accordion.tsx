import React from 'react';
import Content, { IContentProps } from './Content';
import Header, { IHeaderProps } from './Header';

interface IAccordionContext {
  activeSection: string;
  setActiveSection: (label: string) => void;
}

interface IAccordionComposition {
  Header: React.FC<IHeaderProps>;
  Content: React.FC<IContentProps>;
}

const AccordionContext = React.createContext<IAccordionContext | undefined>(undefined);

const Accordion: React.FC<{ children: React.ReactNode }> & IAccordionComposition = props => {
  const [activeSection, setActiveSection] = React.useState('1');

  const memoizedContextValue = React.useMemo(
    () => ({
      activeSection,
      setActiveSection
    }),
    [activeSection, setActiveSection]
  );

  return <AccordionContext.Provider value={memoizedContextValue}>{props.children}</AccordionContext.Provider>;
};

export const useAccordion = (): IAccordionContext => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error('This component must be used within a <Tabs> component.');
  }
  return context;
};

Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;
