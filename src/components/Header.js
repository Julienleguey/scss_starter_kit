import Dropdown from "./Shared/Dropdown";
import Link from "./Shared/Link";

const Header = () => {
  return (
    <div className="w-100 border-bottom d-flex jc-sb px-4">
      <Link to="/" className="text-center py-3">
        scss starter kit
      </Link>
      <Dropdown
        id="menu"
        className="my-auto"
        classNameTitle="cursor-pointer font-weight-bolder"
        classNameChildren="profile-dropdown-children font-weight-bolder"
        title={<p>Menu</p>}
      >
        <Link className="py-1" to="/basics">
          Basics
        </Link>
        <Link className="py-1" to="/utilities">
          Utilities
        </Link>
        <Link className="py-1" to="/components">
          components
        </Link>
      </Dropdown>
    </div>
  );
};

export default Header;

// Link doesn't take font-weight-bolder because .link sets the font-weight to 400
