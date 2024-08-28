import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.DodecahedronGeometry( 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xff005f, wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
const cube2 = new THREE.Mesh( geometry, material );
const cube3 = new THREE.Mesh( geometry, material );
const cube4 = new THREE.Mesh( geometry, material );
const cube5 = new THREE.Mesh( geometry, material );
const cube6 = new THREE.Mesh( geometry, material );
scene.add( cube );
scene.add( cube2 );
scene.add( cube3 );
scene.add( cube4 );
scene.add( cube5 );
scene.add( cube6 );

camera.position.z = 5;

let arrowUp = false;
let arrowDown = false;
let arrowLeft = false;
let arrowRight = false;
let space = false;

function animate() {
	renderer.render( scene, camera );
	cube2.position.z -= .5
	cube3.position.z = -5
	cube4.position.z = -6
	cube5.position.z = -7
	cube6.position.z = -8
	
	cube3.position.x = 1
	cube3.position.y = 2
	
	cube4.position.x = -3
	cube4.position.y = 4
	
	cube5.position.x = 5
	cube5.position.y = -6
	
	cube6.position.x = -6
	cube6.position.y = -6	

	cube2.rotation.x = cube.rotation.x;
	cube2.rotation.y = cube.rotation.y;
	
	if (arrowUp) {
		cube.position.y += 0.05;
		cube.rotation.y += 0.05;
	}
	if (arrowDown) {
		cube.rotation.y -= 0.05;
		cube.position.y -= 0.05;
	}
	if (arrowRight) {
		cube.position.x += 0.05;
		cube.rotation.x += 0.05;
	}
	if (arrowLeft) {
		cube.position.x -= 0.05;
		cube.rotation.x -= 0.05;
	}
	if (space) {
		cube2.position.x = cube.position.x;
		cube2.position.y = cube.position.y;
		cube2.position.z = cube.position.z;
	}
}
renderer.setAnimationLoop( animate );

document.addEventListener("keydown", onDocumenteKeyDown, false)

function onDocumenteKeyDown(event) {
	console.log(event.key);
	console.log(event.keyCode);
	switch(event.key){
		case "ArrowUp":
			arrowUp = true;
		break;
		case "ArrowDown":
			arrowDown = true;
		break;
		case "ArrowLeft":
			arrowLeft = true;
		break;
		case "ArrowRight":
			arrowRight = true;
		break;
		case " ":
			space = true;
		break;
	}
}

document.addEventListener("keyup", onDocumenteKeyUp, false)

function onDocumenteKeyUp(event) {
	console.log(event.key);
	console.log(event.keyCode);
	switch(event.key){
		case "ArrowUp":
			arrowUp = false;
		break;
		case "ArrowDown":
			arrowDown = false;
		break;
		case "ArrowLeft":
			arrowLeft = false;
		break;
		case "ArrowRight":
			arrowRight = false;
		break;
		case " ":
			space = false;
		break;
	}
}