import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const MobileMenuAnimation: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    // Create a geometry and material
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      requestAnimationFrame(animate);

      if (isOpen) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      } else {
        cube.rotation.x -= 0.01;
        cube.rotation.y -= 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, [isOpen]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-[-1]" />;
};

export default MobileMenuAnimation;
