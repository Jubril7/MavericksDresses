import Categories from "./component/Categories";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import ContactUs from "./component/ContactUs";
import Gallery from './component/Gallery';
import AboutUs from "./component/AboutUs";
import Feedback from "./component/Feedback";
import Footer from "./component/Footer";




function App() {

  return (
  <>
    <Navbar />
    <Header />
    <Categories />
    <AboutUs />
    <Gallery />
    <ContactUs />
    <Feedback />
    <Footer />
  </>
  );
}

export default App
