import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let n = 200;
let m = 200;


for (let j = 0; j < m; j++) {
	for (let i = 0; i < n; i++) {
		const geometry = new THREE.BoxGeometry( .2 , .2, .2 );
		const material = new THREE.MeshBasicMaterial({ color: 0x23e1eb, wireframe: true });
		const cube = new THREE.Mesh(geometry, material);

		let r = 3;
		let theta = 2.0*Math.PI*j/m;
		let phi = Math.PI*i/n

		cube.position.x = r*Math.sin(phi)*Math.sin(theta);
		cube.position.y = r*Math.cos(phi);
		cube.position.z = r*Math.sin(phi)*Math.cos(theta);;
		
		scene.add(cube);
	}
}

camera.position.z = 8;

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

function animate() {
	renderer.render(scene, camera);
	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;
}
renderer.setAnimationLoop(animate);

