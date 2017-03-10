import ThreejsAbstractProject = ThreejsProject.ThreejsAbstractProject;

module Example
{

    export class ExampleProject extends ThreejsAbstractProject
    {


        protected _renderer: THREE.WebGLRenderer;

        protected _scene: THREE.Scene;

        protected _camera: THREE.PerspectiveCamera;

        protected _light: THREE.Light;

        protected _clock : THREE.Clock;




        constructor(__element : HTMLElement)
        {
            super(__element);
        }


        protected _start()
        {
            this._clock = new THREE.Clock()
            this._clock.start();

            super._start();
        }

        protected _initRenderer()
        {
            this._renderer = new THREE.WebGLRenderer(<THREE.WebGLRendererParameters>{antialias: true, precision: "highp"});
            this._renderer.setClearColor(this._clearColor);
            this._renderer.setPixelRatio(window.devicePixelRatio);
            this._renderer.setSize(window.innerWidth, window.innerHeight);
            this._renderer.shadowMap.enabled = true;

            this._element.appendChild(this._renderer.domElement);
        }

        protected _initCamera()
        {
            this._camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.2, 1000);
        }
        protected _initScene()
        {
            this._scene = new THREE.Scene();

            // light
            this._light = new THREE.PointLight(0x606060);
            this._light.position.y = 1;
            this._scene.add(this._light);

            // cube
            let mat : THREE.MeshStandardMaterial = new THREE.MeshStandardMaterial();
            mat.color = new THREE.Color(0xCCCC00);
            mat.transparent = false;
            mat.opacity = 1;
            mat.metalness = 0.5;
            mat.roughness = 0.5;
            let mesh : THREE.Mesh = new THREE.Mesh(new THREE.CubeGeometry(1, 1, .3), mat);
            mesh.castShadow = true;

            mesh.position.z = -5;
            mesh.name = "cube";

            this._scene.add(mesh);

        }

        public animate()
        {

            this._scene.getChildByName("cube").rotation.y += 2 * this._clock.getDelta();

            this._renderer.render(this._scene, this._camera);


        }



    }
}
