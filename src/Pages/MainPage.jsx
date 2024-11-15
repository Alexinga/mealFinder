import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import FooterContent from "../ui/FooterContent";
import Header from "../ui/Header";
import MainPageLayout from "../ui/MainPageLayout";
import Navbar from "../ui/Navbar";
import Main from "../ui/Main";

function MainPage() {
  return (
    <MainPageLayout>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <FooterContent />
      </Footer>
    </MainPageLayout>
  );
}

export default MainPage;
