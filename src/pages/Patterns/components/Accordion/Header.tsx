import { useAccordion } from './Accordion';

export interface IHeaderProps {
  id: string;
  children: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = props => {
  const { setActiveSection } = useAccordion();

  return (
    <>
      <h2 onClick={() => setActiveSection(props.id)}>{props.children}</h2>
    </>
  );
};

export default Header;
