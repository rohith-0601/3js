import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import { Island } from "../models/island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import Homeinfo from "../components/Homeinfo";

function Home() {
  const [isrotating, setisrotating] = useState(false);
  const [currentstage,setcurentstage] = useState(1)


  const adjustislandforscreen = () => {
    let screenscale = null;
    let screenposition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenscale = [0.9, 0.9, 0.9];
    } else {
      screenscale = [1, 1, 1];
    }

    return [screenscale, screenposition, rotation];
  };

  const adjustplaneforscreen = () => {
    let screenscale , screenposition 
    if (window.innerWidth < 768) {
      screenscale = [1.5, 1.5, 1.5];
      screenposition = [0,-1.5,0]
    } else {
      screenscale = [3, 3, 3];
      screenposition = [0,-4,-4]
    }

    return [screenscale, screenposition];
  };

  const [islandscale, islandpositon, islandrotation] = adjustislandforscreen();
  const [planescale, planepositon] = adjustplaneforscreen();



  return (
    <section className="w-full h-screen relative">
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            {currentstage && <Homeinfo currentStage={currentstage}/>}
        </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isrotating ?"cursor-grabbing":"cursor-grab"}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          {/* <pointLight  /> */}
          {/* <spotLight  /> */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={0.3}
          />

          <Bird />
          <Sky
          isRotating={isrotating} />
          <Island
            position={islandpositon}
            scale={islandscale}
            rotation={islandrotation}
            isRotating={isrotating}
            setIsRotating={setisrotating}
            setCurrentStage={setcurentstage}
          />
          <Plane isRotating={isrotating}
          planeScale={planescale}
          planePosition = {planepositon}
          rotation={[0,20,0]}/>
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
