/// <reference path="references.ts" />


import ThreejsAbstractProject = ThreejsProject.ThreejsAbstractProject;
import ExampleProject = Example.ExampleProject;


class Main
{

    private static _project : ExampleProject;

    public static start()
    {
        const elem = document.getElementById('container');
        elem.innerHTML = "";
        Main._project = new ExampleProject(elem);
        Main._animate();
    }


    private static _animate()
    {
        window.requestAnimationFrame(Main._animate);

        Main._project.animate();

    }


}







window.onload = () =>
{
    if (!Detector.webgl)
    {
        Detector.addGetWebGLMessage();
    } else {

        Main.start();
    }
};