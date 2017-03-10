var ThreejsProject;
(function (ThreejsProject) {
    class ThreejsAbstractProject {
        constructor(__element) {
            this._clearColor = 0x333333;
            this._element = __element;
            this._start();
        }
        _start() {
            this._initRenderer();
            this._initCamera();
            this._initScene();
            let stats = new Stats();
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.top = '0px';
            this._element.appendChild(stats.domElement);
        }
        _initRenderer() {
        }
        _initCamera() {
        }
        _initScene() {
        }
        animate() {
        }
    }
    ThreejsProject.ThreejsAbstractProject = ThreejsAbstractProject;
})(ThreejsProject || (ThreejsProject = {}));
var ThreejsAbstractProject = ThreejsProject.ThreejsAbstractProject;
var Example;
(function (Example) {
    class ExampleProject extends ThreejsAbstractProject {
        constructor(__element) {
            super(__element);
        }
        _start() {
            this._clock = new THREE.Clock();
            this._clock.start();
            super._start();
        }
        _initRenderer() {
            this._renderer = new THREE.WebGLRenderer({ antialias: true, precision: "highp" });
            this._renderer.setClearColor(this._clearColor);
            this._renderer.setPixelRatio(window.devicePixelRatio);
            this._renderer.setSize(window.innerWidth, window.innerHeight);
            this._renderer.shadowMap.enabled = true;
            this._element.appendChild(this._renderer.domElement);
        }
        _initCamera() {
            this._camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.2, 1000);
        }
        _initScene() {
            this._scene = new THREE.Scene();
            this._light = new THREE.PointLight(0x606060);
            this._light.position.y = 1;
            this._scene.add(this._light);
            let mat = new THREE.MeshStandardMaterial();
            mat.color = new THREE.Color(0xCCCC00);
            mat.transparent = false;
            mat.opacity = 1;
            mat.metalness = 0.5;
            mat.roughness = 0.5;
            let mesh = new THREE.Mesh(new THREE.CubeGeometry(1, 1, .3), mat);
            mesh.castShadow = true;
            mesh.position.z = -5;
            mesh.name = "cube";
            this._scene.add(mesh);
        }
        animate() {
            this._scene.getObjectByName("cube").rotation.y += 2 * this._clock.getDelta();
            this._renderer.render(this._scene, this._camera);
        }
    }
    Example.ExampleProject = ExampleProject;
})(Example || (Example = {}));
var ThreejsAbstractProject = ThreejsProject.ThreejsAbstractProject;
var ExampleProject = Example.ExampleProject;
class Main {
    static start() {
        const elem = document.getElementById('container');
        elem.innerHTML = "";
        Main._project = new ExampleProject(elem);
        Main._animate();
    }
    static _animate() {
        window.requestAnimationFrame(Main._animate);
        Main._project.animate();
    }
}
window.onload = () => {
    if (!Detector.webgl) {
        Detector.addGetWebGLMessage();
    }
    else {
        Main.start();
    }
};
