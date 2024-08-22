import * as THREE from 'three';

class Cube {
	constructor(cube) {
		let min = -.01;
		let max = .01;
		this.vel_h = min + (max - min) * Math.random();
		this.vel_v = min + (max - min) * Math.random();
		this.vel_z = min + (max - min) * Math.random();
		this.cube = cube;
	}

	update() {
		this.cube.rotation.x += this.vel_h;
		this.cube.rotation.y += this.vel_v;
		//this.cube.position.z += this.vel_z;

		/*
		if (this.cube.position.x > 5 || this.cube.position.x < -5) {
			this.vel_h = -this.vel_h;
			}
			if (this.cube.position.y > 2 || this.cube.position.y < -2) {
				this.vel_v = -this.vel_v;
				}
				if (this.cube.position.z > 2 || this.cube.position.z < -2) {
					this.vel_z = -this.vel_z;
					}
					*/


	}
}


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//const cube = new THREE.Mesh(geometry, material);
//scene.add(cube);

const m = 10;
const n = 10;
const v = 10;
let cubes = [];
const deltaX = .3
const deltay = .3
const side = 1
let offset = ((m - 1) * (deltaX + side)) / 2;
let offsety = ((n - 1) * (deltay + side)) / 2;

for (let t = 0; t < v; t++) {
	for (let j = 0; j < n; j++) {
		for (let i = 0; i < m; i++) {
			const geometry = new THREE.BoxGeometry(side, side, side);
			const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
			const cube = new Cube(new THREE.Mesh(geometry, material));
			cube.cube.position.x = i * (side + deltaX) - offset;
			cube.cube.position.y = j * (side + deltay) - offsety;
			cube.cube.position.z = t * (side + deltay) - offsety;
			cubes.push(cube);
			scene.add(cube.cube);
		}
	}
}
scene.background = new THREE.Color(0x13ebd9)


const cam = 15;
camera.position.z = cam;


let theta = 0.0;
let raio = 2.5;

function animate() {

	theta += .01
	renderer.render(scene, camera);


	for (var cube of cubes) {
		cube.update();
		cube.cube.position.z += .1;
		if (cube.cube.position.z > camera.position.z ) {
			cube.cube.position.z = 0;
		}
		//cube.cube.position.x = raio * Math.cos(theta)
		//cube.cube.position.y = raio  * Math.sin(theta)
	}
}
renderer.setAnimationLoop(animate);

