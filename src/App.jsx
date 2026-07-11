import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import IndexRoute from "./Router/IndexRoute";


function App() {
  return (
    <>
    <Navbar/>
      <IndexRoute />
      <Footer/>
    </>
  );
}

export default App;