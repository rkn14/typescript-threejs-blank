/// <reference path="references.ts" />


import ThreejsAbstractProject = ThreejsProject.ThreejsAbstractProject;



let project : ThreejsAbstractProject;


function _animate()
{
    window.requestAnimationFrame(_animate);

    if(project != null)
    {
        project.animate();
    }

}


window.onload = () =>
{




    if (!Detector.webgl)
    {
        Detector.addGetWebGLMessage();
    } else {
        const elem = document.getElementById('container');
        elem.innerHTML = "";
        project = new ThreejsAbstractProject(elem);
        _animate();





        /*
        engine.enableShadows();

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




        // START THE ENGINE
        function animate() {
            requestAnimationFrame(animate);

            scene.update();
            engine.update();
            stats.update();
        }
        animate();
        */
    }
};