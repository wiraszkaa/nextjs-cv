import Navigation from "../Navigation/Navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <main className="main">{props.children}</main>
    </>
  );
};

export default Layout;
