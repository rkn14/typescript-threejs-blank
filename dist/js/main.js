var ThreejsProject;
(function (ThreejsProject) {
    var ThreejsAbstractProject = (function () {
        function ThreejsAbstractProject(__element) {
            this._clearColor = 0xFFFFFF;
            this._clock = new THREE.Clock();
            this._element = __element;
            this._start();
        }
        ThreejsAbstractProject.prototype._start = function () {
            this._renderer = new THREE.WebGLRenderer({ antialias: true, precision: "highp" });
            this._renderer.setClearColor(this._clearColor);
            this._renderer.setPixelRatio(window.devicePixelRatio);
            this._renderer.setSize(window.innerWidth, window.innerHeight);
            this._element.appendChild(this._renderer.domElement);
            this._scene = new THREE.Scene();
            this._light = new THREE.PointLight(0x606060);
            this._scene.add(this._light);
            this._camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.2, 1000);
            var stats = new Stats();
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.top = '0px';
            this._element.appendChild(stats.domElement);
        };
        ThreejsAbstractProject.prototype.animate = function () {
            this._renderer.render(this._scene, this._camera);
        };
        return ThreejsAbstractProject;
    }());
    ThreejsProject.ThreejsAbstractProject = ThreejsAbstractProject;
})(ThreejsProject || (ThreejsProject = {}));
var ThreejsAbstractProject = ThreejsProject.ThreejsAbstractProject;
var project;
function _animate() {
    window.requestAnimationFrame(_animate);
    if (project != null) {
        project.animate();
    }
}
window.onload = function () {
    if (!Detector.webgl) {
        Detector.addGetWebGLMessage();
    }
    else {
        var elem = document.getElementById('container');
        elem.innerHTML = "";
        project = new ThreejsAbstractProject(elem);
        _animate();
    }
};
