import Navigation from "../Navigation/Navigation";

const Layout = (props) => {
  return (
    <div>
      <Navigation />
      <main className="main">{props.children}</main>
    </div>
  );
};

export default Layout;
