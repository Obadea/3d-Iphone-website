import { appleImg, bagImg, barImg, searchImg } from '../utils';
import { navLists } from '..//constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-7 max-sm:justify-end  max-sm:flex-1">
          <img
            className="cursor-pointer"
            src={searchImg}
            alt="serach"
            width={18}
            height={18}
          />
          <img
            className="cursor-pointer max-sm:hidden "
            src={bagImg}
            alt="bag"
            width={18}
            height={18}
          />
          <img
            className="hidden max-sm:block cursor-pointer"
            src={barImg}
            alt="bar"
            width={22}
            height={22}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
