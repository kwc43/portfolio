import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Model {
  private scene: THREE.Scene;
  private loader: GLTFLoader;
  private lighting: THREE.HemisphereLight;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private controls: OrbitControls;

  constructor(canvasRef: HTMLCanvasElement, modelPath: string) {
    this.scene = new THREE.Scene();

    this.loader = new GLTFLoader();
    this.loadModel(modelPath);

    this.lighting = new THREE.HemisphereLight(0xffffff, 0xffffbb, 1);
    this.scene.add(this.lighting);

    this.renderer = new THREE.WebGLRenderer({
      canvas: canvasRef,
      antialias: false,
      alpha: true,
    });

    this.renderer.setPixelRatio(
      this.renderer.domElement.clientWidth /
        this.renderer.domElement.clientHeight
    );

    this.camera = new THREE.PerspectiveCamera(
      85,
      this.renderer.domElement.clientWidth /
        this.renderer.domElement.clientHeight,
      0.1,
      100
    );
    this.camera.position.set(-3, 5, -5);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.animate();
  }

  private resizeCanvas() {
    const canvas: HTMLCanvasElement = this.renderer.domElement;

    const width: number = canvas.clientWidth;
    const height: number = canvas.clientHeight;

    if (canvas.width !== width || canvas.height !== height) {
      this.renderer.setSize(width, height, false);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
  }

  private loadModel(modelPath: string) {
    this.loader.load(
      modelPath,
      (gltf) => {
        const root: THREE.Group = gltf.scene;
        root.position.setY(-1);
        root.scale.set(0.5, 0.5, 0.5);

        this.scene.add(root);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private animate() {
    this.resizeCanvas();
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate.bind(this));
  }
}
