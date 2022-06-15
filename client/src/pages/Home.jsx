import Blogs from "../components/home/Blogs";
import Landing from "../components/home/Landing";
import Layout from "../components/layout/Layout";

function Home() {
  return (
    <>
      <Layout>
        <Landing />
        <Blogs />
      </Layout>
    </>
  );
}

export default Home;
