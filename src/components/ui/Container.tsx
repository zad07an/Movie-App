import React, { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store/store";
import Search from "./Search";
import { onClose } from "../../redux/features/search-slice";
import Overlay from "./Overlay";
import useHideScroll from "../../hooks/useHideScroll";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const { isOpen } = useAppSelector(state => state.search);
  const dispatch = useAppDispatch();

  const handleCloseSearch = () => {
    dispatch(onClose());
  };

  useHideScroll(isOpen);

  return (
    <section className="custom-container">
      <div className={` w-full ${isOpen ? "flex" : "hidden"} items-center justify-start flex-col`}>
        {isOpen ? (
          <>
            <Overlay onClick={handleCloseSearch} />
            <div className=" w-full md:w-[60%] z-[9999] h-40 bg-primary-dark p-5 rounded-2xl">
              <Search />
            </div>
          </>
        ) : null}
      </div>
      {children}
    </section>
  );
};

export default Container;
