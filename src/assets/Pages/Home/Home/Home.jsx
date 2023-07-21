import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Content from "../Content/Content";

const Home = () => {
  window.document.title = "Bloggidea - Home";
  return (
    <>
      <Header />
      <Banner />
      <Content />
    </>
  );
};

export default Home;
