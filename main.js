import * as THREE from 'three';

class Cube {
	constructor(cube) {
		let min = -0.1;
		let max = .1;
		this.vel_h = min + (max - min) * Math.random();
		this.vel_v = min + (max - min) * Math.random();
		this.vel_z = min + (max - min) * Math.random();
		this.cube = cube;
	}

	update() {
		this.cube.position.x += this.vel_h;
		this.cube.position.y += this.vel_v;
		this.cube.position.z += this.vel_z;

		if (this.cube.position.x > 5 || this.cube.position.x < -5) {
			this.vel_h = -this.vel_h;
		}
		if (this.cube.position.y > 2 || this.cube.position.y < -2) {
			this.vel_v = -this.vel_v;
		}
		if (this.cube.position.z > 2 || this.cube.position.z < -2) {
			this.vel_z = -this.vel_z;
		}
	}
}

// let vel_h = .02;
// let vel_v = .01;
// let vel_z = .03;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
//const cube = new THREE.Mesh(geometry, material);
//scene.add(cube);

let cubes = [];
for (let i = 0; i < 100; i++) {
	const cube = new Cube(new THREE.Mesh(geometry, material));
	scene.add(cube.cube);
	cubes.push(cube);
}

scene.background = new THREE.Color(0x13ebd9)

camera.position.z = 5;

function animate() {
	renderer.render(scene, camera);

	for( var cube of cubes)
		cube.update();
	/*
	cube.position.x += vel_h;
	cube.position.y += vel_v;
	cube.position.z += vel_z;

	if (cube.position.x > 5 || cube.position.x < -5) {
		vel_h = -vel_h;
	}
	if (cube.position.y > 2 || cube.position.y < -2) {
		vel_v = -vel_v;
	}
	if (cube.position.z > 2 || cube.position.z < -2) {
		vel_z = -vel_z;
	}
*/
}
renderer.setAnimationLoop(animate);

