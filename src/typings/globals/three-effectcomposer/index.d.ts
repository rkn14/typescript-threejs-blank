// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/4f7524fc65c0d1389af81a83a95dfe1ea59ad5e9/three/three-effectcomposer.d.ts
declare namespace THREE {
	export class EffectComposer {
		constructor( renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);

		renderTarget1: WebGLRenderTarget;
		renderTarget2: WebGLRenderTarget;
		writeBuffer: WebGLRenderTarget;
		readBuffer: WebGLRenderTarget;
		passes: any[];
		copyPass: ShaderPass;

		swapBuffers(): void;
		addPass(pass: any): void;
		insertPass(pass: any, index: number): void;
		render(delta?: number): void;
		reset(renderTarget?: WebGLRenderTarget): void;
		setSize( width: number, height: number ): void;
	}
}
