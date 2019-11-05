//typings for @luma.gl/webgl-state-tracker v7.3.2
declare module '@luma.gl/webgl-state-tracker/utils/assert' {
	export default function assert(condition: any, message: any): void;

}
declare module '@luma.gl/webgl-state-tracker/utils/deep-array-equal' {
	export default function deepArrayEqual(x: any, y: any): boolean;

}
declare module '@luma.gl/webgl-state-tracker/utils/utils' {
	export function isObjectEmpty(object: any): boolean;
	export function isWebGL2(gl: any): boolean;

}
declare module 'utils' {
	//export { default as assert } from '@luma.gl/webgl-state-tracker/utils/assert';
	export { default as deepArrayEqual } from '@luma.gl/webgl-state-tracker/utils/deep-array-equal';
	export { isWebGL2 /*, isObjectEmpty*/ } from '@luma.gl/webgl-state-tracker/utils/utils';

}
declare module '@luma.gl/webgl-state-tracker/unified-parameter-api/webgl-parameter-tables' {
	export const GL_PARAMETER_DEFAULTS: {
		[x: number]: any;
	};
	export const GL_PARAMETER_SETTERS: {
		[x: number]: string | ((gl: any, value: any, key: any) => any);
	};
	export const GL_COMPOSITE_PARAMETER_SETTERS: {
		blendEquation: (gl: any, values: any) => any;
		blendFunc: (gl: any, values: any) => any;
		polygonOffset: (gl: any, values: any) => any;
		sampleCoverage: (gl: any, values: any) => any;
		stencilFuncFront: (gl: any, values: any) => any;
		stencilFuncBack: (gl: any, values: any) => any;
		stencilOpFront: (gl: any, values: any) => any;
		stencilOpBack: (gl: any, values: any) => any;
	};
	export const GL_PARAMETER_GETTERS: {
		[x: number]: (gl: any, key: any) => any;
	};

}
declare module '@luma.gl/webgl-state-tracker/unified-parameter-api/unified-parameter-api' {
	export function setParameter(gl: any, key: any, value: any): any;
	export function setParameters(gl: any, values: any): void;
	export function getParameter(gl: any, key: any): any;
	export function getParameters(gl: any, parameters: any): {};
	export function getDefaultParameters(gl: any): {
		[x: number]: any;
	};
	export function resetParameters(gl: any): void;
	export function getModifiedParameters(gl: any): {};

}
declare module '@luma.gl/webgl-state-tracker/unified-parameter-api/webgl-setter-function-table' {
	const _default: {
		framebuffer: (gl: any, framebuffer: any) => any;
		blend: (gl: any, value: any) => any;
		blendColor: (gl: any, value: any) => any;
		blendEquation: (gl: any, args: any) => void;
		blendFunc: (gl: any, args: any) => void;
		clearColor: (gl: any, value: any) => any;
		clearDepth: (gl: any, value: any) => any;
		clearStencil: (gl: any, value: any) => any;
		colorMask: (gl: any, value: any) => any;
		cull: (gl: any, value: any) => any;
		cullFace: (gl: any, value: any) => any;
		depthTest: (gl: any, value: any) => any;
		depthFunc: (gl: any, value: any) => any;
		depthMask: (gl: any, value: any) => any;
		depthRange: (gl: any, value: any) => any;
		dither: (gl: any, value: any) => any;
		derivativeHint: (gl: any, value: any) => void;
		frontFace: (gl: any, value: any) => any;
		mipmapHint: (gl: any, value: any) => any;
		lineWidth: (gl: any, value: any) => any;
		polygonOffsetFill: (gl: any, value: any) => any;
		polygonOffset: (gl: any, value: any) => any;
		sampleCoverage: (gl: any, value: any) => any;
		scissorTest: (gl: any, value: any) => any;
		scissor: (gl: any, value: any) => any;
		stencilTest: (gl: any, value: any) => any;
		stencilMask: (gl: any, value: any) => void;
		stencilFunc: (gl: any, args: any) => void;
		stencilOp: (gl: any, args: any) => void;
		viewport: (gl: any, value: any) => any;
	};
	export default _default;

}
declare module '@luma.gl/webgl-state-tracker/unified-parameter-api/set-parameters' {
	export function setParameters(gl: any, parameters: any): void;

}
declare module '@luma.gl/webgl-state-tracker/state-tracking/webgl-function-to-parameters-table' {
	const _default: {
		enable: (update: any, capability: any) => any;
		disable: (update: any, capability: any) => any;
		pixelStorei: (update: any, pname: any, value: any) => any;
		hint: (update: any, pname: any, hint: any) => any;
		bindFramebuffer: (update: any, target: any, framebuffer: any) => any;
		blendColor: (update: any, r: any, g: any, b: any, a: any) => any;
		blendEquation: (update: any, mode: any) => any;
		blendEquationSeparate: (update: any, modeRGB: any, modeAlpha: any) => any;
		blendFunc: (update: any, src: any, dst: any) => any;
		blendFuncSeparate: (update: any, srcRGB: any, dstRGB: any, srcAlpha: any, dstAlpha: any) => any;
		clearColor: (update: any, r: any, g: any, b: any, a: any) => any;
		clearDepth: (update: any, depth: any) => any;
		clearStencil: (update: any, s: any) => any;
		colorMask: (update: any, r: any, g: any, b: any, a: any) => any;
		cullFace: (update: any, mode: any) => any;
		depthFunc: (update: any, func: any) => any;
		depthRange: (update: any, zNear: any, zFar: any) => any;
		depthMask: (update: any, mask: any) => any;
		frontFace: (update: any, face: any) => any;
		lineWidth: (update: any, width: any) => any;
		polygonOffset: (update: any, factor: any, units: any) => any;
		sampleCoverage: (update: any, value: any, invert: any) => any;
		scissor: (update: any, x: any, y: any, width: any, height: any) => any;
		stencilMask: (update: any, mask: any) => any;
		stencilMaskSeparate: (update: any, face: any, mask: any) => any;
		stencilFunc: (update: any, func: any, ref: any, mask: any) => any;
		stencilFuncSeparate: (update: any, face: any, func: any, ref: any, mask: any) => any;
		stencilOp: (update: any, fail: any, zfail: any, zpass: any) => any;
		stencilOpSeparate: (update: any, face: any, fail: any, zfail: any, zpass: any) => any;
		viewport: (update: any, x: any, y: any, width: any, height: any) => any;
	};
	export default _default;

}
declare module '@luma.gl/webgl-state-tracker/state-tracking/track-context-state' {
	/**
	 * Initialize WebGL state caching on a context
	 * can be called multiple times to enable/disable
	 * @param {WebGLRenderingContext} - context
	 */
	export default function trackContextState(gl: any, { enable, copyState }?: {
		enable?: boolean;
		copyState: any;
	}): any;
	export function pushContextState(gl: any): void;
	export function popContextState(gl: any): void;

}
declare module '@luma.gl/webgl-state-tracker/state-tracking/with-parameters' {
	export function withParameters(gl: any, parameters: any, func: any): any;

}
declare module '@luma.gl/webgl-state-tracker' {
	export { getParameter, getParameters, setParameter, resetParameters, getModifiedParameters } from '@luma.gl/webgl-state-tracker/unified-parameter-api/unified-parameter-api';
	export { setParameters } from '@luma.gl/webgl-state-tracker/unified-parameter-api/set-parameters';
	export { default, default as trackContextState, pushContextState, popContextState } from '@luma.gl/webgl-state-tracker/state-tracking/track-context-state';
	export { withParameters } from '@luma.gl/webgl-state-tracker/state-tracking/with-parameters';

}
declare module 'state-tracking' {
	export { default as trackContextState, pushContextState, popContextState } from '@luma.gl/webgl-state-tracker/state-tracking/track-context-state';
	export { withParameters } from '@luma.gl/webgl-state-tracker/state-tracking/with-parameters';

}
