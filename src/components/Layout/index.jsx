export const Layout = (props) => {
  return (
    <div className="flex flex-col mx-auto min-h-screen max-w-2xl px-1 items-center">
      {props.children}
    </div>
  );
};
