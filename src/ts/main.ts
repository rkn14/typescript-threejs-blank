/// <reference path="references.ts" />

function hello(__text : string)
{
    console.log(__text);
}
hello("Hello from typescript");




window.onload = () =>
{

    const elem = document.getElementById('container');
    elem.innerHTML = "";


    if (!Detector.webgl) {
        //Detector.addGetWebGLMessage();
    } else {
        const engine = new Engine.Engine(elem, 0xEEEEEE);
        engine.enableShadows();

        // CAMERA
        {
            let camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.2, 1000);
            camera.position.z = 15;
            camera.position.y = 3;

            engine.setCamera(camera);

        }

        // pointLight
        {
            let pointLight = new THREE.PointLight(0x606060);
            pointLight.position = new THREE.Vector3(0, 5, 0);
            pointLight.intensity = 2;
            //engine.addLight(pointLight);
        }



        // SCENE
        const scene : Portfolio2017.Scene = new Portfolio2017.Scene();
        engine.addObject(scene);



        // STATS
        const stats = new Stats();
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.top = '0px';
        elem.appendChild(stats.domElement);






        function initPostprocessing()
        {



            var pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat };
            engine.scene.rtTextureDepth = new THREE.WebGLRenderTarget( window.innerWidth, height, pars );
            postprocessing.rtTextureColor = new THREE.WebGLRenderTarget( window.innerWidth, height, pars );
            var bokeh_shader = THREE.BokehShader;
            postprocessing.bokeh_uniforms = THREE.UniformsUtils.clone( bokeh_shader.uniforms );
            postprocessing.bokeh_uniforms[ "tColor" ].value = postprocessing.rtTextureColor.texture;
            postprocessing.bokeh_uniforms[ "tDepth" ].value = postprocessing.rtTextureDepth.texture;
            postprocessing.bokeh_uniforms[ "textureWidth" ].value = window.innerWidth;
            postprocessing.bokeh_uniforms[ "textureHeight" ].value = height;
            postprocessing.materialBokeh = new THREE.ShaderMaterial( {
                uniforms: postprocessing.bokeh_uniforms,
                vertexShader: bokeh_shader.vertexShader,
                fragmentShader: bokeh_shader.fragmentShader,
                defines: {
                    RINGS: shaderSettings.rings,
                    SAMPLES: shaderSettings.samples
                }
            } );
            postprocessing.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( window.innerWidth, window.innerHeight ), postprocessing.materialBokeh );
            postprocessing.quad.position.z = - 500;
            postprocessing.scene.add( postprocessing.quad );
        }
        function shaderUpdate() {
            postprocessing.materialBokeh.defines.RINGS = shaderSettings.rings;
            postprocessing.materialBokeh.defines.SAMPLES = shaderSettings.samples;
            postprocessing.materialBokeh.needsUpdate = true;
        }








        // START THE ENGINE
        function animate() {
            requestAnimationFrame(animate);

            scene.update();
            engine.update();
            stats.update();
        }
        animate();
    }
};