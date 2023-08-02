import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';



const FrontLayout = () => {
  return (
    <Fragment>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
    </Fragment>
  );
};

export default FrontLayout;