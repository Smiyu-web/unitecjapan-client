import HomeContact from "../components/contact/HomeContact";
import Hero from "../components/hero/Hero";
import Layout from "../components/layout";
import News from "../components/news/News";
import HomeService from "../components/service/HomeService";
import HomeVietnam from "../components/vietnam/HomeVietnam";
import HomeLaos from "../components/laos/HomeLaos";
import AboutUs from "../components/about us/AboutUs";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <News />
        <AboutUs />
        <HomeVietnam />
        <HomeLaos />
        <HomeService />
        <HomeContact />
      </Layout>
    </>
  );
}
