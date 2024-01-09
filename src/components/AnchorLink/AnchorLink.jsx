import { useContext } from "react";
import { ScrollContext } from '../../helpers/scrollContext';

const AnchorLink = ({ toSection, children, ...rest }) => {
  const scrollTo = useContext(ScrollContext);

  return (
    <a
      href={toSection}
      onClick={(event) => scrollTo(event,toSection)}
      {...rest}
    >
      {children}
    </a>
  );
};

export default AnchorLink;
