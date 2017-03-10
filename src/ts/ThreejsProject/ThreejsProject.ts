module ThreejsProject
{

    export class ThreejsAbstractProject
    {

        private _element : HTMLElement;

        private _clearColor : number = 0xFFFFFF;

        private _renderer: THREE.WebGLRenderer;

        private _scene: THREE.Scene;

        private _camera: THREE.PerspectiveCamera;

        private _light: THREE.Light;

        private _clock = new THREE.Clock();



        constructor(__element : HTMLElement)
        {
            this._element = __element;

            this._start();
        }

        protected _start()
        {
            this._renderer = new THREE.WebGLRenderer(<THREE.WebGLRendererParameters>{antialias: true, precision: "highp"});
            this._renderer.setClearColor(this._clearColor);
            this._renderer.setPixelRatio(window.devicePixelRatio);
            this._renderer.setSize(window.innerWidth, window.innerHeight);
            this._element.appendChild(this._renderer.domElement);

            this._scene = new THREE.Scene();

            this._light = new THREE.PointLight(0x606060);
            this._scene.add(this._light);

            this._camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.2, 1000);

            // STATS
            let stats = new Stats();
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.top = '0px';
            this._element.appendChild(stats.domElement);
        }






        public animate()
        {
            this._renderer.render(this._scene, this._camera);

        }

    }

}