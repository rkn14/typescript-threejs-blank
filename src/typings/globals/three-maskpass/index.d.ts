// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/4f7524fc65c0d1389af81a83a95dfe1ea59ad5e9/three/three-maskpass.d.ts
declare namespace THREE {
	export class MaskPass {
		constructor( scene: Scene, camera: Camera);

		scene: Scene;
		camera: Camera;
		enabled: boolean;
		clear: boolean;
		needsSwap: boolean;
		inverse: boolean;

        render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, delta: number): void;
	}

	export class ClearMaskPass {
		constructor();

		enabled: boolean;

        render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, delta: number): void;
	}
}
