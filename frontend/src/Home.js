import Hero from './components/Hero';
import Servers from './components/Servers';
import FeatureProduct from './components/FeatureProduct';
function Home() {
    return (
        <>
        <Hero Name={"General Store"}/>
        {/* <Productcontext/> */}
        <FeatureProduct/>
        <Servers/>
        {/* <Company/> */}
        </>
      );
}

export default Home;
