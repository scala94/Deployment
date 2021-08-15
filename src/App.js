import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "square",
              stroke: {
                width: 6,
                color: "#F1DEB4"
              }

            }

          }
        }}
      />
      <Navbar />
      <Header />
      <Footer />
    </>
  );
}

export default App;
