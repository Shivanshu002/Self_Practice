import AutoSlide from "./component/AutoSlide";
import Navbar from "./component/DropdownNavbar";
import InfiniteLoopCarosol from "./component/InfiniteLoopCarosol";
import SearchBar from "./component/SearchBar";


function App() {
  return (
    <>
      
      {/* <CardSlider /> */}
      {/* <DropdownNavbar />  */}
      <Navbar />
      <SearchBar />

      <AutoSlide />
      <InfiniteLoopCarosol />
    </>

  );
}

export default App;
