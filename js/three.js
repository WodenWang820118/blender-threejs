import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";

// Create a scnene
const scene = new THREE.Scene();

// Load a Renderer
var renderer = new THREE.WebGLRenderer({ alpha: false });
renderer.setClearColor(0xffffff);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(1000, 500);
document.body.appendChild(renderer.domElement);

// Load Camera Perspective
var camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 1, 20000);

// Load the Orbitcontroller
var controls = new OrbitControls( camera, renderer.domElement ); 

camera.position.set(10, 16, 10);
controls.update();

// Load Light
var directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
directionalLight.position.set(20, 30, 30).normalize();
scene.add( directionalLight );

// gltf loader
const loader = new GLTFLoader();
loader.load( 'models/gltf/sushi-plate.gltf', function (gltf) {
    var object = gltf.scene;				
    object.scale.set( 1, 1, 1 );			   
    // object.position.x = 0;//Position (x = right+ left-) 
    // object.position.y = 0; //Position (y = up+, down-)
    // object.position.z = 0;//Position (z = front +, back-)
    scene.add( object );
})
function animate() {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );
}
animate();

// reference:
// https://discourse.threejs.org/t/gltf-loading-but-not-appearing/911/4
// https://stackoverflow.com/questions/64155393/three-js-orbitcontrols-is-not-defined