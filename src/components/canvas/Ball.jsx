import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import {
  Decal,
  Float,
  Preload,
  useTexture
} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <ambientLight intensity={0.5}/>
      <directionalLight position={[ 0, -1, 0.15 ]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry/>
        <meshPhysicalMaterial metalness={1} roughness={0.3} color="#ffffff" emissive="#fff8eb" />

        <Decal
          position={[0, 0, 1]}
          rotation={[ 2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='always'
      gl={{
        preserveDrawingBuffer: true
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas;