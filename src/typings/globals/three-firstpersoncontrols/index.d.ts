// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/4d586d46ce710874d7a6a12caf8d985eb2ff8c4c/threejs/three-FirstPersonControls.d.ts
declare namespace THREE {
    class FirstPersonControls {
        constructor(object: Camera, domElement?: HTMLElement);
        object: THREE.Object3D;
        target: THREE.Vector3;
        domElement: HTMLCanvasElement | HTMLDocument;
        enabled: boolean;
        movementSpeed: number;
        lookSpeed: number;
        noFly: boolean;
        lookVertical: boolean;
        autoForward: boolean;
        activeLook: boolean;
        heightSpeed: boolean;
        heightCoef: number;
        heightMin: number;
        heightMax: number;
        constrainVertical: boolean;
        verticalMin: number;
        verticalMax: number;
        autoSpeedFactor: number;
        mouseX: number;
        mouseY: number;
        lat: number;
        lon: number;
        phi: number;
        theta: number;
        moveForward: boolean;
        moveBackward: boolean;
        moveLeft: boolean;
        moveRight: boolean;
        freeze: boolean;
        mouseDragOn: boolean;
        update(delta: number): void;
        dispose(): void;
    }
}