import * as THREE from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 4;
scene.add(camera);

let box = new THREE.BoxGeometry(1, 1, 1);

let material = new THREE.MeshBasicMaterial({ color: "red", wireframe: true });
let mesh = new THREE.Mesh(box, material);

mesh.rotation.x = -0;
mesh.rotation.y = 2.8;

mesh.position.x = 1;
mesh.position.y = -1.1;

scene.add(mesh);
const canvas = document.getElementById("draw");
let renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

let clock = new THREE.Clock();

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
function animate() {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
  mesh.rotation.x += clock.getElapsedTime() * 0.001;
  mesh.rotation.y += clock.getElapsedTime() * 0.001;
  mesh.position.x += clock.getElapsedTime() * -0.0001;
  mesh.position.y += clock.getElapsedTime() * 0.00001;
  mesh.position.z -= clock.getElapsedTime() * 0.00001;
  mesh.rotation.z += clock.getElapsedTime() * 0.00001;
}

animate();
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const canvas = document.getElementById("draw");

// const renderer = new THREE.WebGLRenderer({ canvas: canvas });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setAnimationLoop(animate);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// function animate() {
//   window.requestAnimationFrame(animate);
//   renderer.render(scene, camera);
//   cube.rotation.x += 0.0001;
//   cube.rotation.y += 0.00001;
// }

// animate();
