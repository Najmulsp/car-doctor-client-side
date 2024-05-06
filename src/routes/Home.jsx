import About from "../components/About";
import Banner from "../components/Banner";
import Services from "./Services";


const Home = () => {
    return (
        <div className="mt-10">
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;