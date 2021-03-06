// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/0190982444ef670839deb3fde37a26c79dfce08e/threejs/three-vrcontrols.d.ts
declare namespace THREE {
    export class VRControls {
        constructor(camera: Camera, callback?: (param: string)=>void);

        /**
         * Update VR Instance Tracking
         */
        update(): void;
        zeroSensor(): void;

        scale: number;

        setVRDisplay(display: VRDisplay): void;
    }
}
