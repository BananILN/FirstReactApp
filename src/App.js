import Gallery from './components/Gallery';
import logo from './logo.svg';
import {useState} from "react";


function App() {

  const [pos,setPos] = useState(0);

  return (
      <Gallery
        images={[
          "/images/airmain.png",
          "/images/airmains.png",
          "/images/Airport.png",
          "/images/airmain.png",
          "/images/airmains.png",
          "/images/Airport.png",
        ]}

        pos={pos}

        onBack={() =>{
          setPos(pos-1)
        }}

        onNext={()=>{
          setPos(pos+1)
        }}
      />
  );
}

export default App;
