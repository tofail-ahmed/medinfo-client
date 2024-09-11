const Container = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1280px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
