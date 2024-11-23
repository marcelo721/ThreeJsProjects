import * as THREE from "https://esm.sh/three";
import { OrbitControls } from "https://esm.sh/three/addons/controls/OrbitControls.js";

let scene, camera, renderer, cube, controls, cube2, sphere;

function init() {
  // Cena
  scene = new THREE.Scene();

  // Câmera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Renderizador
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Geometria do cubo
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0xff8080  });
  cube = new THREE.Mesh(geometry, material);

  //ajustando posições do cubo na cena
  cube.position.x = 0;
  cube.position.y = 0;
  cube.position.z = 0;
  scene.add(cube);

  //add other cube
  const geometryCube2 = new THREE.BoxGeometry();
  const materialCube2 = new THREE.MeshBasicMaterial({ color: 0xff0000  });
  cube2 =  new THREE.Mesh(geometryCube2, materialCube2);
  
  //ajustando posições do cubo na cena
  cube.position.x = 4;
  cube.position.y = 4;
  cube.position.z = 4;
  scene.add(cube2);

  //add other cube
  const geometrysphere = new THREE.SphereGeometry();
  const materialsphere = new THREE.MeshBasicMaterial({ color: 0xff0000  });
  sphere = new THREE.Mesh(geometrysphere, materialsphere);
  
  //ajustando posições do cubo na cena
  sphere.position.x = 0;
  sphere.position.y = 0;
  sphere.position.z = 8;
  scene.add(sphere);
  

  // Controle orbital
  controls = new OrbitControls(camera, renderer.domElement);

  // helper
  scene.add(new THREE.AxesHelper(30));

  // Função de animação
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  // Rotação do cubo
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  controls.update();
  renderer.render(scene, camera);
}

init();
