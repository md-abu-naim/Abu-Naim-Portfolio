import About from "./About";
import Banner from "./Banner";
import Educations from "./Educations";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Educations />
            <Skills />
            <Projects />
        </div>
    );
};

export default Home;