import { useAccordion } from './Accordion';

export interface IContentProps {
  id: string;
  children: React.ReactNode;
}

const Content: React.FC<IContentProps> = props => {
  const { activeSection } = useAccordion();
  return activeSection === props.id ? <div>{props.children}</div> : null;
};

export default Content;
