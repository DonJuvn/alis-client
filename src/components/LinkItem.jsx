import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const LinkItem = ({ icon, title, to, isSelected }) => {
  return (
    <div className="item-link-wrapper">
      {icon}
      <Link to={to} className={`item-link ${isSelected && 'active'}`}>
        {title}
      </Link>
    </div>
  );
};

export default LinkItem;
