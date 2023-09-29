import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';

function Object() {
    
    const objectRef = useRef();
    const [rotation, setRotation] = useState(0);
    const [color, setColor] = useState('skyblue');
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        // Adjust the rotation based on scroll position (e.g., scrollY * 0.01 for rotation)
        setRotation(scrollY * 0.01);

        if (scrollY < 100) {
            setColor('orange');
          } else if(scrollY > 100 && scrollY < 250 ){
            setColor('#d9afd9');
          }
          else if(scrollY > 250 && scrollY < 400){
            setColor('blue');
          }
          else if(scrollY > 400 && scrollY < 550){
            setColor('grey');
          }
          else if(scrollY > 550 && scrollY < 700 ){
            setColor('pink');
          }
          else if (scrollY > 700 && scrollY < 900 ) {
            setColor('red')
          }
          else{
            setColor('black')
          }
          

      };

      
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useFrame(() => {
      if (objectRef.current) {
        // Apply rotation to the object without changing its position
        objectRef.current.rotation.x = rotation;
        objectRef.current.rotation.y = rotation;
      }
    });
  
    return (
      <mesh ref={objectRef} scale={[2,2,2]}>
        <boxGeometry args={[1,1,1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  }
    

export default Object

