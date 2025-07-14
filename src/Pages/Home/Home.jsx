import About from "./About";
import Banner from "./Banner";
import Contacts from "./Contacts";
import Educations from "./Educations";
import Footer from "../../Components/Footer";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="">
            <Banner />
            <About />
            <Educations />
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
        </div>
    );
};

export default Home;