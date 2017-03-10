
module ThreejsProject
{

    export class ThreejsAbstractProject
    {

        protected _element : HTMLElement;

        protected _clearColor : number = 0x333333;




        constructor(__element : HTMLElement)
        {
            this._element = __element;
            this._start();
        }

        protected _start()
        {
            // renderer
            this._initRenderer();

            // camera
            this._initCamera();

            // scene
            this._initScene();

            // STATS
            let stats = new Stats();
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.top = '0px';
            this._element.appendChild(stats.domElement);
        }


        protected _initRenderer()
        {

        }

        protected _initCamera()
        {

        }

        protected _initScene()
        {

        }




        public animate()
        {


        }

    }

}