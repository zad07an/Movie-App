const useHideScroll = (isOpen: boolean): void => {
  document.body.style.overflow = isOpen ? "hidden" : "auto";
};

export default useHideScroll;
