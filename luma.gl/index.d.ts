declare module 'luma.gl/webgl-debug/debug-parameters' {
	export const GLenum = "GLenum";
	export const GLfloat = "GLfloat";
	export const GLint = "GLint";
	export const GLuint = "GLint";
	export const GLboolean = "GLboolean";
	export const BUFFER_PARAMETERS: {
		[x: number]: {
			webgl1: number;
		};
	};
	export const FENCE_SYNC_PARAMETERS: any[];
	export const FRAMEBUFFER_ATTACHMENT_PARAMETERS: any[];
	export const FRAMEBUFFER_STATUS: {
		[x: number]: string;
	};
	export const PROGRAM_PARAMETERS: {
		[x: number]: {
			webgl1: number;
			webgl2?: undefined;
		} | {
			webgl2: number;
			webgl1?: undefined;
		};
	};
	export const RENDERBUFFER_PARAMETERS: {
		[x: number]: {
			webgl1: number;
			type?: undefined;
			webgl2?: undefined;
		} | {
			type: string;
			webgl1: any;
			webgl2?: undefined;
		} | {
			webgl2: number;
			webgl1?: undefined;
			type?: undefined;
		};
	};
	export const SAMPLER_PARAMETERS: {
		[x: number]: {
			webgl2: boolean;
		};
	};
	export const TEXTURE_PARAMETERS: {
		[x: number]: {
			type: string;
			webgl1: any;
			webgl2?: undefined;
		} | {
			type: string;
			webgl2: any;
			webgl1?: undefined;
		} | {
			webgl2: number;
			type?: undefined;
			webgl1?: undefined;
		} | {
			webgl1: number;
			type?: undefined;
			webgl2?: undefined;
		};
	};
	export function installParameterDefinitions(): void;

}
declare module 'luma.gl/debug' {
	export default function installDebugger(): void;

}
declare module 'luma.gl/utils/globals' {
	const self_: NodeJS.Global | Window; const window_: NodeJS.Global | Window; const global_: NodeJS.Global | Window; const document_: {};
	export { self_ as self, window_ as window, global_ as global, document_ as document };

}
declare module 'luma.gl/utils/is-electron' {
	const _default: boolean;
	export default _default;

}
declare module 'luma.gl/utils/is-browser' {
	const isBrowser: boolean;
	export const isBrowserMainThread: boolean;
	export default isBrowser;

}
declare module 'luma.gl/webgl-utils/webgl-types' {
	export const ERR_HEADLESSGL_LOAD = "luma.gl: loaded under Node.js without headless gl installed, meaning that WebGL contexts can not be created. This may not be an error. For example, this is a typical configuration for isorender applications running on the server.";
	export let headlessTypes: any;
	export let headlessGL: () => never; const WebGLRenderingContext: any, WebGLProgram: any, WebGLShader: any, WebGLBuffer: any, WebGLFramebuffer: any, WebGLRenderbuffer: any, WebGLTexture: any, WebGLUniformLocation: any, WebGLActiveInfo: any, WebGLShaderPrecisionFormat: any;
	export const webGLTypesAvailable: boolean; const WebGL2RenderingContext: any; const Image: any;
	export { Image, WebGLRenderingContext, WebGLProgram, WebGLShader, WebGLBuffer, WebGLFramebuffer, WebGLRenderbuffer, WebGLTexture, WebGLUniformLocation, WebGLActiveInfo, WebGLShaderPrecisionFormat, WebGL2RenderingContext };

}
declare module 'luma.gl/utils/assert' {
	export default function assert(condition: any, message: any): void;

}
declare module 'luma.gl/webgl-utils/webgl-checks' {
	export const ERR_CONTEXT = "Invalid WebGLRenderingContext";
	export const ERR_WEBGL = "Invalid WebGLRenderingContext";
	export const ERR_WEBGL2 = "Requires WebGL2";
	export function isWebGL(glAlias: any): boolean;
	export function isWebGL2(glAlias: any): boolean;
	export function assertWebGLContext(gl: any): void;
	export function assertWebGL2Context(gl: any): void;

}
declare module 'luma.gl/utils/log' {
	const _default: any;
	export default _default;

}
declare module 'luma.gl/webgl-utils/constants-to-keys' {
	export function getKeyValue(gl: any, name: any): any;
	export function getKey(gl: any, value: any): string;
	export function getKeyType(gl: any, value: any): string;
	export function glGet(gl: any, name: any): any;
	export function glKey(gl: any, value: any): string;
	export function glKeyType(gl: any, value: any): string;

}
declare module 'luma.gl/webgl-utils/request-animation-frame' {
	export function requestAnimationFrame(callback: any): number;
	export function cancelAnimationFrame(timerId: any): void;

}
declare module 'luma.gl/webgl-utils/get-shader-name' {
	export default function getShaderName(shader: any, defaultName?: string): any;
	export function getShaderTypeName(type: any): "fragment" | "vertex" | "unknown type";

}
declare module 'luma.gl/webgl-utils/format-glsl-error' {
	/**
	 * Parse a GLSL compiler error log into a string showing the source code around each error.
	 * Based on https://github.com/wwwtyro/gl-format-compiler-error (public domain)
	 */
	export function parseGLSLCompilerError(errLog: any, src: any, shaderType: any, shaderName: any): {
		shaderName: string;
		errors: string;
		warnings: string;
	};
	export default function formatGLSLCompilerError(errLog: any, src: any, shaderType: any): string;

}
declare module 'luma.gl/webgl-utils/typed-array-utils' {
	export function getGLTypeFromTypedArray(arrayOrType: any): any;
	export function getTypedArrayFromGLType(glType: any, { clamped }?: {
		clamped?: boolean;
	}): Float32ArrayConstructor | Int16ArrayConstructor | Int32ArrayConstructor | Int8ArrayConstructor | Uint16ArrayConstructor | Uint32ArrayConstructor | Uint8ArrayConstructor | Uint8ClampedArrayConstructor;
	export function flipRows({ data, width, height, bytesPerPixel, temp }: {
		data: any;
		width: any;
		height: any;
		bytesPerPixel?: number;
		temp: any;
	}): void;
	export function scalePixels({ data, width, height }: {
		data: any;
		width: any;
		height: any;
	}): {
		data: Uint8Array;
		width: number;
		height: number;
	};

}
declare module 'luma.gl/webgl-utils/shader-utils' {
	export function getShaderVersion(source: any): number;

}
declare module 'luma.gl/webgl1/polyfill-get-parameter' {
	export function getParameterPolyfill(gl: any, originalGetParameter: any, pname: any): any;

}
declare module 'luma.gl/webgl1/polyfill-context' {
	export default function polyfillContext(gl: any): any;

}
declare module 'luma.gl/webgl1' {
	export { default as polyfillContext } from 'luma.gl/webgl1/polyfill-context';

}
declare module 'luma.gl/init' {
	import { global } from 'luma.gl/utils/globals';
	import 'luma.gl/webgl1';
	export { global }; const _default: any;
	export default _default;

}
declare module 'luma.gl/utils/is-old-ie' {
	export default function isOldIE(opts?: {}): boolean;

}
declare module 'luma.gl/utils/promise-utils' {
	/**
	 * Converts a function that accepts a node style (err, result) callback
	 * as the last argument into a function that takes the same arguments
	 * and returns a promise that resolves or rejects with the values provided
	 * by the original callback
	 * @param {Function} func - function to wrap
	 * @return {Function} promisified function
	 */
	export function promisify(func: any): (...args: any[]) => Promise<{}>;

}
declare module 'luma.gl/utils/utils' {
	/**
	 * Returns a UID.
	 * @param {String} id= - Identifier base name
	 * @return {number} uid
	 **/
	export function uid(id?: string): string;
	/**
	 * Verifies if a given number is power of two or not.
	 * @param {object} n - The number to check.
	 * @return {Array} Returns true if the given number is power of 2, false otherwise.
	 **/
	export function isPowerOfTwo(n: any): boolean;
	export function isObjectEmpty(obj: any): boolean;

}
declare module 'luma.gl/utils/format-value' {
	export function formatValue(v: any, opts?: {}): any;

}
declare module 'luma.gl/utils/stub-methods' {
	export function stubRemovedMethods(instance: any, className: any, version: any, methodNames: any): void;

}
declare module 'utils' {
	export { default as isBrowser } from 'luma.gl/utils/is-browser';
	export { default as isOldIE } from 'luma.gl/utils/is-old-ie';
	export { promisify } from 'luma.gl/utils/promise-utils';
	export { uid, isPowerOfTwo, isObjectEmpty } from 'luma.gl/utils/utils';
	export { default as log } from 'luma.gl/utils/log';
	export { formatValue } from 'luma.gl/utils/format-value';
	export { default as assert } from 'luma.gl/utils/assert';
	export { stubRemovedMethods } from 'luma.gl/utils/stub-methods';

}
declare module 'luma.gl/webgl/resource' {
	export default class Resource {
		constructor(gl: any, opts?: {});
		toString(): string;
		readonly handle: any;
		delete({ deleteChildren }?: {
			deleteChildren?: boolean;
		}): this | void;
		bind(funcOrHandle?: any): any;
		unbind(args?: any): void;
	    /**
	     * Query a Resource parameter
	     *
	     * @param {GLenum} pname
	     * @return {GLint|GLfloat|GLenum} param
	     */
		getParameter(pname: any, opts?: {}): any;
		getParameters(opts?: {}): {};
	    /**
	     * Update a Resource setting
	     *
	     * @todo - cache parameter to avoid issuing WebGL calls?
	     *
	     * @param {GLenum} pname - parameter (GL constant, value or key)
	     * @param {GLint|GLfloat|GLenum} value
	     * @return {Resource} returns self to enable chaining
	     */
		setParameter(pname: any, value: any): this;
		setParameters(parameters: any): this;
		stubRemovedMethods(className: any, version: any, methodNames: any): void;
		initialize(opts: any): void;
		_createHandle(): void;
		_deleteHandle(args?: any): void;
		_bindHandle(args?: any): void;
		_getOptsFromHandle(): void;
		_getParameter(pname: any, opts: any): void;
	    /**
	     * @param {GLenum} pname
	     * @param {GLint|GLfloat|GLenum} param
	     * @return {Sampler} returns self to enable chaining
	     */
		_setParameter(pname: any, value: any): void;
		_context(): any;
		_addStats(): void;
		_removeStats(): void;
	}

}
declare module 'luma.gl/webgl/accessor' {
	const DEFAULT_ACCESSOR_VALUES: {
		offset: number;
		stride: number;
		type: any;
		size: number;
		divisor: number;
		normalized: boolean;
		integer: boolean;
	};
	export default class Accessor {
		static getBytesPerElement(accessor: any): number;
		static getBytesPerVertex(accessor: any): number;
		static resolve(...accessors: any[]): Accessor;
		constructor(...accessors: any[]);
		toString(): string;
		readonly BYTES_PER_ELEMENT: number;
		readonly BYTES_PER_VERTEX: number;
		_assign(props?: {}): this;
	}
	export { DEFAULT_ACCESSOR_VALUES };

}
declare module 'luma.gl/webgl/buffer' {
	import Resource from 'luma.gl/webgl/resource';
	export default class Buffer extends Resource {
		constructor(gl: any, props?: {});
		getElementCount(accessor?: any): number;
		getVertexCount(accessor?: any): number;
		initialize(props: any): this;
		setProps(props: any): this;
		setAccessor(opts: any): this;
		reallocate(byteLength: any): boolean;
		setData(opts: any): this;
		subData(props: any): this;
		copyData({ sourceBuffer, readOffset, writeOffset, size }: {
			sourceBuffer: any;
			readOffset?: number;
			writeOffset?: number;
			size: any;
		}): this;
		getData({ dstData, srcByteOffset, dstOffset, length }?: {
			dstData?: any;
			srcByteOffset?: number;
			dstOffset?: number;
			length?: number;
		}): any;
	    /**
	     * Binds a buffer to a given binding point (target).
	     *   GL.TRANSFORM_FEEDBACK_BUFFER and GL.UNIFORM_BUFFER take an index, and optionally a range.
	     * @param {Glenum} target - target for the bind operation.
	     * @param {GLuint} index= - the index of the target.
	     *   - GL.TRANSFORM_FEEDBACK_BUFFER and GL.UNIFORM_BUFFER need an index to affect state
	     * @param {GLuint} offset=0 - the index of the target.
	     *   - GL.UNIFORM_BUFFER: `offset` must be aligned to GL.UNIFORM_BUFFER_OFFSET_ALIGNMENT.
	     * @param {GLuint} size= - the index of the target.
	     *   - GL.UNIFORM_BUFFER: `size` must be a minimum of GL.UNIFORM_BLOCK_SIZE_DATA.
	     * @returns {Buffer} - Returns itself for chaining.
	     */
		bind({ target, index, offset, size }?: {
			target?: any;
			index?: any;
			offset?: number;
			size: any;
		}): this;
		unbind({ target, index }?: {
			target?: any;
			index?: any;
		}): this;
		readonly data: void;
		readonly bytes: any;
		getDebugData(): {
			data: any;
			changed: boolean;
		};
		invalidateDebugData(): void;
		_initialize(props?: {}): this;
		_setData(data: any, usage?: any): this;
		_setByteLength(byteLength: any, usage?: any): this;
		_getTarget(): any;
		_getAvailableElementCount(srcByteOffset: any): number;
		_createHandle(): any;
		_deleteHandle(): void;
		_getParameter(pname: any): any;
		updateAccessor(opts: any): this;
		setByteLength(byteLength: any): boolean;
	}

}
declare module 'luma.gl/webgl-context/set-parameters' {
	export const GL_PARAMETER_DEFAULTS: {
		[x: number]: any;
	};
	export const GL_PARAMETER_SETTERS: {
		[x: number]: string | ((gl: any, value: any, key: any) => any);
	};
	export const GL_PARAMETER_GETTERS: {
		[x: number]: (gl: any, key: any) => any;
	};
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
declare module 'luma.gl/webgl-context/track-context-state' {
	export const clone: (x: any) => any;
	export const deepEqual: (x: any, y: any) => boolean;
	export const GL_STATE_SETTERS: {
		enable: (update: any, cap: any) => any;
		disable: (update: any, cap: any) => any;
		pixelStorei: (update: any, pname: any, param: any) => any;
		hint: (update: any, pname: any, hint: any) => any;
		bindFramebuffer: (update: any, target: any, fb: any) => any;
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
declare module 'luma.gl/webgl-context/context-state' {
	import { getParameter, getParameters, setParameter, resetParameters, getModifiedParameters } from 'luma.gl/webgl-context/set-parameters';
	export const LUMA_SETTERS: {
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
	export { getParameter };
	export { getParameters };
	export { setParameter };
	export { resetParameters };
	export { getModifiedParameters };
	export function setParameters(gl: any, parameters: any): void;
	export function withParameters(gl: any, parameters: any, func: any): any;

}
declare module 'luma.gl/webgl/texture' {
	import Resource from 'luma.gl/webgl/resource';
	export const TEXTURE_FORMATS: {
		[x: number]: {
			dataFormat: any;
			types: any[];
			gl2?: undefined;
		} | {
			dataFormat: any;
			types: any[];
			gl2: boolean;
		};
	};
	export default class Texture extends Resource {
		static isSupported(gl: any, { format, linearFiltering }?: {
			format: any;
			linearFiltering: any;
		}): boolean;
		constructor(gl: any, opts: any);
		toString(): string;
		initialize(opts?: {}): void;
		resize({ width, height }: {
			width: any;
			height: any;
		}): void | this;
		generateMipmap(params?: {}): this;
		setImageData({ target, pixels, data, width, height, level, format, type, dataFormat, offset, border, compressed, parameters }: {
			target?: any;
			pixels?: any;
			data?: any;
			width?: any;
			height?: any;
			level?: number;
			format?: any;
			type?: any;
			dataFormat?: any;
			offset?: number;
			border?: any;
			compressed?: boolean;
			parameters?: {};
		}): void;
	    /**
	     * Redefines an area of an existing texture
	     * Note: does not allocate storage
	     */
		setSubImageData({ target, pixels, data, x, y, width, height, level, format, type, dataFormat, compressed, offset, border, parameters }: {
			target?: any;
			pixels?: any;
			data?: any;
			x?: number;
			y?: number;
			width?: any;
			height?: any;
			level?: number;
			format?: any;
			type?: any;
			dataFormat?: any;
			compressed?: boolean;
			offset?: number;
			border?: any;
			parameters?: {};
		}): void;
	    /**
	     * Defines a two-dimensional texture image or cube-map texture image with
	     * pixels from the current framebuffer (rather than from client memory).
	     * (gl.copyTexImage2D wrapper)
	     *
	     * Note that binding a texture into a Framebuffer's color buffer and
	     * rendering can be faster.
	     */
		copyFramebuffer({ target, framebuffer, offset, x, y, width, height, level, internalFormat, border }: {
			target?: any;
			framebuffer: any;
			offset?: number;
			x?: number;
			y?: number;
			width: any;
			height: any;
			level?: number;
			internalFormat?: any;
			border?: number;
		}): void;
		getActiveUnit(): number;
		bind(textureUnit?: any): any;
		unbind(): any;
		_getDataType({ data, compressed }: {
			data: any;
			compressed?: boolean;
		}): {
			data: any;
			dataType: string;
		};
		setImage3D({ level, internalformat, width, height, depth, border, format, type, offset, pixels }: {
			level?: number;
			internalformat?: any;
			width: any;
			height: any;
			depth?: number;
			border?: number;
			format: any;
			type?: any;
			offset?: number;
			pixels: any;
		}): this | void;
		_deduceParameters(opts: any): {
			dataFormat: any;
			type: any;
			compressed: any;
			width: any;
			height: any;
			format: any;
			data: any;
		};
		_deduceImageSize({ data, width, height }: {
			data: any;
			width: any;
			height: any;
		}): any;
		_createHandle(): any;
		_deleteHandle(): void;
		_getParameter(pname: any): any;
		_setParameter(pname: any, param: any): this;
		_isNPOT(): boolean;
		_updateForNPOT(parameters: any): void;
		_getNPOTParam(pname: any, param: any): any;
	}

}
declare module 'luma.gl/webgl/texture-2d' {
	import Texture from 'luma.gl/webgl/texture';
	export default class Texture2D extends Texture {
		static isSupported(gl: any, opts: any): boolean;
	    /**
	     * @classdesc
	     * 2D WebGL Texture
	     * Note: Constructor will initialize your texture.
	     *
	     * @class
	     * @param {WebGLRenderingContext} gl - gl context
	     * @param {Image|ArrayBuffer|null} opts= - named options
	     * @param {Image|ArrayBuffer|null} opts.data= - buffer
	     * @param {GLint} width - width of texture
	     * @param {GLint} height - height of texture
	     */
		constructor(gl: any, opts?: {});
		bind(textureUnit?: any): any;
		unbind(): any;
		getActiveUnit(): number;
	}

}
declare module 'luma.gl/webgl/texture-cube' {
	import Texture from 'luma.gl/webgl/texture';
	export default class TextureCube extends Texture {
		constructor(gl: any, opts?: {});
		initialize(opts?: {}): void;
		subImage({ face, data, x, y, mipmapLevel }: {
			face: any;
			data: any;
			x?: number;
			y?: number;
			mipmapLevel?: number;
		}): any;
		setCubeMapImageData({ width, height, pixels, data, border, format, type, generateMipmap }: {
			width: any;
			height: any;
			pixels: any;
			data: any;
			border?: number;
			format?: any;
			type?: any;
			generateMipmap?: boolean;
		}): void;
		bind({ index }?: {
			index: any;
		}): any;
		unbind(): this;
	}

}
declare module 'luma.gl/webgl/texture-3d' {
	import Texture from 'luma.gl/webgl/texture';
	export default class Texture3D extends Texture {
		static isSupported(gl: any): boolean;
	    /**
	     * @classdesc
	     * 3D WebGL Texture
	     * Note: Constructor will initialize your texture.
	     *
	     * @class
	     * @param {WebGLRenderingContext} gl - gl context
	     * @param {Image|ArrayBuffer|null} opts= - named options
	     * @param {Image|ArrayBuffer|null} opts.data= - buffer
	     * @param {GLint} width - width of texture
	     * @param {GLint} height - height of texture
	     */
		constructor(gl: any, opts?: {});
		initialize(opts?: {}): void;
		setImage3D({ level, internalformat, width, height, depth, border, format, type, offset, pixels }: {
			level?: number;
			internalformat?: any;
			width: any;
			height: any;
			depth?: number;
			border?: number;
			format: any;
			type?: any;
			offset?: number;
			pixels: any;
		}): void;
	}

}
declare module 'luma.gl/webgl-utils/texture-utils' {
	export function cloneTextureFrom(refTexture: any, overrides: any): any;

}
declare module 'luma.gl/webgl-utils' {
	export { Image, WebGLRenderingContext, WebGL2RenderingContext, WebGLProgram, WebGLShader, WebGLBuffer, WebGLFramebuffer, WebGLRenderbuffer, WebGLTexture, WebGLUniformLocation, WebGLActiveInfo, WebGLShaderPrecisionFormat, webGLTypesAvailable } from 'luma.gl/webgl-utils/webgl-types';
	export { isWebGL, isWebGL2, assertWebGLContext, assertWebGL2Context } from 'luma.gl/webgl-utils/webgl-checks';
	export { requestAnimationFrame, cancelAnimationFrame } from 'luma.gl/webgl-utils/request-animation-frame';
	export { default as formatGLSLCompilerError, parseGLSLCompilerError } from 'luma.gl/webgl-utils/format-glsl-error';
	export { default as getShaderName } from 'luma.gl/webgl-utils/get-shader-name';
	export { getGLTypeFromTypedArray, getTypedArrayFromGLType, flipRows, scalePixels } from 'luma.gl/webgl-utils/typed-array-utils';
	export { getKeyValue, getKey, getKeyType } from 'luma.gl/webgl-utils/constants-to-keys';
	export { getShaderVersion } from 'luma.gl/webgl-utils/shader-utils';
	export { cloneTextureFrom } from 'luma.gl/webgl-utils/texture-utils';

}
declare module 'luma.gl/webgl-context/create-headless-context' {
	export function createHeadlessContext({ width, height, opts, onError }: {
		width: any;
		height: any;
		opts: any;
		onError: any;
	}): any;

}
declare module 'luma.gl/webgl-context/create-canvas' {
	/**
	 * Returns a promise that resolves when the page is loaded
	 * at this point the DOM can be manipulated, and e.g. a new canvas can be inserted
	 * @return {Promise} - resolves when the page is loaded
	 */
	export function getPageLoadPromise(): any;
	/**
	 * Create a canvas
	 * @param {Number} width - set to 100%
	 * @param {Number} height - set to 100%
	 */
	export function createCanvas({ width, height, id, insert }: {
		width?: number;
		height?: number;
		id?: string;
		insert?: boolean;
	}): HTMLCanvasElement;
	export function getCanvas({ canvas, width, height, onError }: {
		canvas: any;
		width: any;
		height: any;
		onError?: () => void;
	}): any;

}
declare module 'luma.gl/webgl-context/create-browser-context' {
	/**
	 * Create a WebGL context for a canvas
	 * Note calling this multiple time on the same canvas does return the same context
	 */
	export function createBrowserContext({ canvas, opts, // WebGLRenderingContext options
		onError }: {
			canvas: any;
			opts?: {};
			onError?: (message: any) => any;
		}): any;

}
declare module 'luma.gl/webgl-context/debug-context' {
	export function enableDebug(debug: any): void;
	export function makeDebugContext(gl: any, { debug }?: {
		debug?: boolean;
	}): any;
	export function getRealContext(gl: any): any;
	export function getDebugContext(gl: any): any;

}
declare module 'luma.gl/webgl-context/context-limits' {
	export function getContextLimits(gl: any): any;
	export function getGLContextInfo(gl: any): any;
	export function getGLContextInfo2(gl: any): {
		vendor: any;
		renderer: any;
		vendorMasked: any;
		rendererMasked: any;
		version: any;
		shadingLanguageVersion: any;
	};
	export function getContextInfo(gl: any): {
		vendor: any;
		renderer: any;
		version: any;
		shadingLanguageVersion: any;
		info: any;
		limits: any;
		webgl1MinLimits: any;
		webgl2MinLimits: any;
	};
	/**
	 * Provides strings identifying the GPU vendor and driver.
	 * https://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/
	 * @param {WebGLRenderingContext} gl - context
	 * @return {Object} - 'vendor' and 'renderer' string fields.
	 */
	export function glGetDebugInfo(gl: any): {
		vendor: any;
		renderer: any;
		vendorMasked: any;
		rendererMasked: any;
		version: any;
		shadingLanguageVersion: any;
	};
	export const TEST_EXPORTS: {
		WEBGL_LIMITS: {
			[x: number]: {
				gl1: Float32Array;
				gl2?: undefined;
				negative?: undefined;
			} | {
				gl1: number;
				gl2: number;
				negative?: undefined;
			} | {
				gl1: number;
				gl2?: undefined;
				negative?: undefined;
			} | {
				gl1: Int32Array;
				gl2?: undefined;
				negative?: undefined;
			} | {
				gl1: number;
				gl2: number;
				negative: boolean;
			};
		};
	};

}
declare module 'luma.gl/webgl-utils/query-manager' {
	class QueryManager {
		constructor();
		poll(gl: any): void;
		setInvalidator({ queryType, errorMessage, checkInvalid }: {
			queryType: any;
			errorMessage: any;
			checkInvalid: any;
		}): void;
		beginQuery(query: any, onComplete?: (x: any) => any, onError?: (x: any) => any): any;
		resolveQuery(query: any, result: any): void;
		rejectQuery(query: any, errorMessage: any): void;
		deleteQuery(query: any): void;
		cancelQuery(query: any): void;
		invalidateQuery(query: any): void;
		cancelInvalidQueries(gl: any): void;
	} const _default: QueryManager;
	export default _default;

}
declare module 'luma.gl/webgl-context/context' {
	export const ERR_CONTEXT = "Invalid WebGLRenderingContext";
	export const ERR_WEBGL = "Invalid WebGLRenderingContext";
	export const ERR_WEBGL2 = "Requires WebGL2";
	export function isWebGL(glContext: any): boolean;
	export function isWebGL2(glContext: any): boolean;
	export function assertWebGLContext(gl: any): void;
	export function assertWebGL2Context(gl: any): void;
	export function setContextDefaults(opts?: {}): void;
	export function createGLContext(opts?: {}): any;
	export function destroyGLContext(gl: any): void;
	/**
	 * Resize the canvas' drawing buffer.
	 *
	 * Can match the canvas CSS size, and optionally also consider devicePixelRatio
	 * Can be called every frame
	 *
	 * Regardless of size, the drawing buffer will always be scaled to the viewport, but
	 * for best visual results, usually set to either:
	 *  canvas CSS width x canvas CSS height
	 *  canvas CSS width * devicePixelRatio x canvas CSS height * devicePixelRatio
	 * See http://webgl2fundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html
	 *
	 * resizeGLContext(gl, {width, height, useDevicePixels})
	 */
	export function resizeGLContext(gl: any, opts?: {}): void;
	export function pollGLContext(gl: any): void;

}
declare module 'luma.gl/webgl-context' {
	export { createGLContext, destroyGLContext, resizeGLContext, pollGLContext } from 'luma.gl/webgl-context/context';
	export { withParameters, resetParameters } from 'luma.gl/webgl-context/context-state';
	export { getContextInfo } from 'luma.gl/webgl-context/context-limits';
	export { getPageLoadPromise, createCanvas, getCanvas } from 'luma.gl/webgl-context/create-canvas';
	export { createHeadlessContext } from 'luma.gl/webgl-context/create-headless-context';
	export { createBrowserContext } from 'luma.gl/webgl-context/create-browser-context';
	export { default as trackContextState } from 'luma.gl/webgl-context/track-context-state';

}
declare module 'luma.gl/webgl-context/context-features' {
	const FEATURES: {};
	export { FEATURES };
	export function canCompileGLGSExtension(gl: any, cap: any, opts?: {}): any;
	export function hasFeature(gl: any, feature: any): any;
	export function hasFeatures(gl: any, features: any): any;
	export function getFeatures(gl: any): any;
	export const TEST_EXPORTS: {
		WEBGL_FEATURES: {
			VERTEX_ARRAY_OBJECT: (string | boolean)[];
			TIMER_QUERY: string[];
			INSTANCED_RENDERING: (string | boolean)[];
			MULTIPLE_RENDER_TARGETS: (string | boolean)[];
			ELEMENT_INDEX_UINT32: (string | boolean)[];
			BLEND_EQUATION_MINMAX: (string | boolean)[];
			COLOR_ENCODING_SRGB: (string | boolean)[];
			TEXTURE_DEPTH: (string | boolean)[];
			TEXTURE_FLOAT: (string | boolean)[];
			TEXTURE_HALF_FLOAT: (string | boolean)[];
			TEXTURE_FILTER_LINEAR_FLOAT: string[];
			TEXTURE_FILTER_LINEAR_HALF_FLOAT: string[];
			TEXTURE_FILTER_ANISOTROPIC: string[];
			COLOR_ATTACHMENT_RGBA32F: string[];
			COLOR_ATTACHMENT_FLOAT: (string | boolean)[];
			COLOR_ATTACHMENT_HALF_FLOAT: (string | boolean)[];
			GLSL_FRAG_DATA: (string | boolean)[];
			GLSL_FRAG_DEPTH: (string | boolean)[];
			GLSL_DERIVATIVES: (string | boolean)[];
			GLSL_TEXTURE_LOD: (string | boolean)[];
		};
	};

}
declare module 'luma.gl/webgl/shader' {
	import Resource from 'luma.gl/webgl/resource';
	export class Shader extends Resource {
		static getTypeName(shaderType: any): "vertex-shader" | "fragment-shader" | "unknown";
		constructor(gl: any, props: any);
		initialize({ source }: {
			source: any;
		}): void;
		getParameter(pname: any): any;
		toString(): string;
		getName(): any;
		getSource(): any;
		getTranslatedSource(): any;
		_compile(): void;
		_deleteHandle(): void;
		_getOptsFromHandle(): {
			type: any;
			source: any;
		};
	}
	export class VertexShader extends Shader {
		constructor(gl: any, props: any);
		_createHandle(): any;
	}
	export class FragmentShader extends Shader {
		constructor(gl: any, props: any);
		_createHandle(): any;
	}

}
declare module 'luma.gl/webgl/renderbuffer' {
	import Resource from 'luma.gl/webgl/resource';
	export const RENDERBUFFER_FORMATS: {
		[x: number]: {
			gl2?: undefined;
		} | {
			gl2: boolean;
		} | {
			gl2: string;
		};
	};
	export default class Renderbuffer extends Resource {
		static isSupported(gl: any, { format }?: {
			format: any;
		}): any;
		static getSamplesForFormat(gl: any, { format }: {
			format: any;
		}): any;
		constructor(gl: any, opts?: {});
		initialize({ format, width, height, samples }: {
			format: any;
			width?: number;
			height?: number;
			samples?: number;
		}): this;
		resize({ width, height }: {
			width: any;
			height: any;
		}): this;
		_createHandle(): any;
		_deleteHandle(): void;
		_bindHandle(handle: any): void;
		_syncHandle(handle: any): void;
		_getParameter(pname: any): any;
	}

}
declare module 'luma.gl/webgl/clear' {
	export function clear(gl: any, { framebuffer, color, depth, stencil }?: {
		framebuffer?: any;
		color?: any;
		depth?: any;
		stencil?: any;
	}): void;
	export function clearBuffer(gl: any, { framebuffer, buffer, drawBuffer, value }?: {
		framebuffer?: any;
		buffer?: number;
		drawBuffer?: number;
		value?: number[];
	}): void;

}
declare module 'luma.gl/webgl-utils/format-utils' {
	export function glFormatToComponents(format: any): 0 | 1 | 2 | 3 | 4;
	export function glTypeToBytes(type: any): 0 | 1 | 2 | 4;

}
declare module 'luma.gl/webgl/framebuffer' {
	import Resource from 'luma.gl/webgl/resource';
	export default class Framebuffer extends Resource {
		static isSupported(gl: any, { colorBufferFloat, // Whether floating point textures can be rendered and read
			colorBufferHalfFloat }?: {
				colorBufferFloat: any;
				colorBufferHalfFloat: any;
			}): boolean;
		static getDefaultFramebuffer(gl: any): any;
		readonly MAX_COLOR_ATTACHMENTS: any;
		readonly MAX_DRAW_BUFFERS: any;
		constructor(gl: any, opts?: {});
		readonly color: any;
		readonly texture: any;
		readonly depth: any;
		readonly stencil: any;
		initialize({ width, height, attachments, color, depth, stencil, check, readBuffer, drawBuffers }: {
			width?: number;
			height?: number;
			attachments?: any;
			color?: boolean;
			depth?: boolean;
			stencil?: boolean;
			check?: boolean;
			readBuffer: any;
			drawBuffers: any;
		}): void;
		update({ attachments, readBuffer, drawBuffers, clearAttachments }: {
			attachments?: {};
			readBuffer: any;
			drawBuffers: any;
			clearAttachments?: boolean;
		}): this;
		resize({ width, height }?: {
			width: any;
			height: any;
		}): this;
		attach(attachments: any, { clearAttachments }?: {
			clearAttachments?: boolean;
		}): void;
		checkStatus(): this;
		clear({ color, depth, stencil, drawBuffers }?: {
			color: any;
			depth: any;
			stencil: any;
			drawBuffers?: any[];
		}): this;
		readPixels({ x, y, width, height, format, type, // Auto deduced from pixelArray or gl.UNSIGNED_BYTE
			pixelArray, attachment }?: {
				x?: number;
				y?: number;
				width?: any;
				height?: any;
				format?: any;
				type: any;
				pixelArray?: any;
				attachment?: any;
			}): any;
		readPixelsToBuffer({ x, y, width, height, format, type, // When not provided, auto deduced from buffer or GL.UNSIGNED_BYTE
			buffer, // A new Buffer object is created when not provided.
			byteOffset }: {
				x?: number;
				y?: number;
				width?: any;
				height?: any;
				format?: any;
				type: any;
				buffer?: any;
				byteOffset?: number;
			}): any;
		copyToDataUrl({ attachment, // TODO - support gl.readBuffer
			maxHeight }?: {
				attachment?: any;
				maxHeight?: number;
			}): string;
		copyToImage({ image, attachment, // TODO - support gl.readBuffer
			maxHeight }?: {
				image?: any;
				attachment?: any;
				maxHeight?: number;
			}): any;
		copyToTexture({ texture, target, // for cubemaps
			xoffset, yoffset, zoffset, mipmapLevel, attachment, // TODO - support gl.readBuffer
			x, y, width, // defaults to texture width
			height }: {
				texture: any;
				target: any;
				xoffset?: number;
				yoffset?: number;
				zoffset?: number;
				mipmapLevel?: number;
				attachment?: any;
				x?: number;
				y?: number;
				width: any;
				height: any;
			}): any;
		blit({ srcFramebuffer, attachment, srcX0, srcY0, srcX1, srcY1, dstX0, dstY0, dstX1, dstY1, color, depth, stencil, mask, filter }: {
			srcFramebuffer: any;
			attachment?: any;
			srcX0?: number;
			srcY0?: number;
			srcX1: any;
			srcY1: any;
			dstX0?: number;
			dstY0?: number;
			dstX1: any;
			dstY1: any;
			color?: boolean;
			depth?: boolean;
			stencil?: boolean;
			mask?: number;
			filter?: any;
		}): this;
		invalidate({ attachments, x, y, width, height }: {
			attachments?: any[];
			x?: number;
			y?: number;
			width: any;
			height: any;
		}): this;
		getAttachmentParameter(attachment: any, pname: any, keys: any): any;
		getAttachmentParameters(attachment: any, keys: any, parameters?: any): {};
		getParameters(keys?: boolean): {};
		show(): this;
		log(priority?: number, message?: string): this;
		bind({ target }?: {
			target?: any;
		}): this;
		unbind({ target }?: {
			target?: any;
		}): this;
		_createDefaultAttachments({ color, depth, stencil, width, height }: {
			color: any;
			depth: any;
			stencil: any;
			width: any;
			height: any;
		}): any;
		_unattach({ attachment }: {
			attachment: any;
		}): void;
		_attachRenderbuffer({ attachment, renderbuffer }: {
			attachment?: any;
			renderbuffer: any;
		}): void;
		_attachTexture({ attachment, texture, layer, level }: {
			attachment?: any;
			texture: any;
			layer: any;
			level: any;
		}): void;
		_setReadBuffer(gl: any, readBuffer: any): void;
		_setDrawBuffers(gl: any, drawBuffers: any): void;
		_getAttachmentParameterFallback(pname: any): any;
		_createHandle(): any;
		_deleteHandle(): void;
		_bindHandle(handle: any): any;
	}
	export const FRAMEBUFFER_ATTACHMENT_PARAMETERS: any[];

}
declare module 'luma.gl/webgl/sampler' {
	import Resource from 'luma.gl/webgl/resource';
	export default class Sampler extends Resource {
		static isSupported(gl: any): boolean;
		constructor(gl: any, opts: any);
		bind(unit: any): this;
		unbind(unit: any): this;
		_createHandle(): any;
		_deleteHandle(): void;
		_getParameter(pname: any): any;
		_setParameter(pname: any, param: any): this;
	}

}
declare module 'luma.gl/webgl/uniforms' {
	export function parseUniformName(name: any): {
		name: any;
		length: any;
		isArray: boolean;
	};
	export function getUniformSetter(gl: any, location: any, info: any): any;
	export function checkUniformValues(uniforms: any, source: any, uniformMap: any): boolean;
	/**
	 * Given two values of a uniform, returns `true` if they are equal
	 */
	export function areUniformsEqual(uniform1: any, uniform2: any): boolean;
	/**
	 * Creates a copy of the uniform
	 */
	export function getUniformCopy(uniform: any): any;

}
declare module 'luma.gl/webgl-utils/attribute-utils' {
	export function getPrimitiveDrawMode(drawMode: any): 0 | 1 | 4;
	export function getPrimitiveCount({ drawMode, vertexCount }: {
		drawMode: any;
		vertexCount: any;
	}): any;
	export function getVertexCount({ drawMode, vertexCount }: {
		drawMode: any;
		vertexCount: any;
	}): any;
	export function decomposeCompositeGLType(compositeGLType: any): {
		type: any;
		components: any;
	};
	export function getCompositeGLType(type: any, components: any): {
		glType: string;
		name: any;
	};

}
declare module 'luma.gl/webgl/program-configuration' {
	export default class ProgramConfiguration {
		constructor(program: any);
		getAttributeInfo(locationOrName: any): any;
		getAttributeLocation(locationOrName: any): any;
		getAttributeAccessor(locationOrName: any): any;
		getVaryingInfo(locationOrName: any): any;
		getVaryingIndex(locationOrName: any): any;
		getVaryingAccessor(locationOrName: any): any;
		_readAttributesFromProgram(program: any): void;
		_readVaryingsFromProgram(program: any): void;
		_addAttribute(location: any, name: any, compositeType: any, size: any): void;
		_inferProperties(location: any, name: any, accessor: any): void;
		_addVarying(location: any, name: any, compositeType: any, size: any): void;
	}

}
declare module 'luma.gl/webgl/program' {
	import Resource from 'luma.gl/webgl/resource';
	export default class Program extends Resource {
		constructor(gl: any, opts?: {});
		initialize(props?: {}): this;
		delete(opts?: {}): this;
		setProps(props: any): this;
		draw({ logPriority, drawMode, vertexCount, offset, start, end, isIndexed, indexType, isInstanced, instanceCount, vertexArray, transformFeedback, framebuffer, parameters, uniforms, samplers }: {
			logPriority: any;
			drawMode?: any;
			vertexCount: any;
			offset?: number;
			start: any;
			end: any;
			isIndexed?: boolean;
			indexType?: any;
			isInstanced?: boolean;
			instanceCount?: number;
			vertexArray?: any;
			transformFeedback: any;
			framebuffer: any;
			parameters?: {};
			uniforms?: {};
			samplers?: {};
		}): this;
		setSamplers(samplers: any): void;
		setUniforms(uniforms?: {}, samplers?: {}, _onChangeCallback?: () => void): this;
		_bindTextures(): void;
		_setUniforms(uniforms: any): this;
		_createHandle(): any;
		_deleteHandle(): void;
		_getOptionsFromHandle(handle: any): {};
		_getParameter(pname: any): any;
		_setId(id: any): void;
		_getName(): any;
		_compileAndLink(): void;
		_readUniformLocationsFromLinkedProgram(): void;
		reset(): void;
		getActiveUniforms(uniformIndices: any, pname: any): any;
		getUniformBlockIndex(blockName: any): any;
		getActiveUniformBlockParameter(blockIndex: any, pname: any): any;
		uniformBlockBinding(blockIndex: any, blockBinding: any): void;
	}

}
declare module 'luma.gl/webgl/fence-sync' {
	import Resource from 'luma.gl/webgl/resource';
	export default class FenceSync extends Resource {
		constructor(gl: any, opts: any);
	    /**
	     * The method is a no-op in the absence of the possibility of
	     * synchronizing between multiple GL contexts.
	     * Prevent commands from being added to GPU command queue.
	     * Note: commands can still be buffered in driver.
	     *
	     * @param {GLbitfield} flags
	     * @param {GLint64} timeout
	     * @return {Sync} status
	     */
		wait({ flags, timeout }?: {
			flags?: number;
			timeout?: any;
		}): this;
	    /**
	     * Block all CPU operations until fence is signalled
	     * @param {GLbitfield} flags
	     * @param {GLint64} timeout
	     * @return {GLenum} result
	     */
		clientWait({ flags, timeout }: {
			flags?: any;
			timeout: any;
		}): any;
		cancel(): void;
		isSignaled(): boolean;
		isResultAvailable(): boolean;
		getResult(): boolean;
		getParameter(pname: any): any;
		_createHandle(): any;
		_deleteHandle(): void;
	}

}
declare module 'luma.gl/webgl/query' {
	import Resource from 'luma.gl/webgl/resource';
	export default class Query extends Resource {
		static isSupported(gl: any, opts?: any[]): any;
		constructor(gl: any, opts?: {});
		beginTimeElapsedQuery(): this;
		beginOcclusionQuery({ conservative }?: {
			conservative?: boolean;
		}): this;
		beginTransformFeedbackQuery(): this;
		getTimestamp(): this;
		begin(target: any): this;
		end(): this;
		cancel(): this;
		isResultAvailable(): any;
		getResult(): number;
		static poll(gl: any): void;
		_createHandle(): any;
		_deleteHandle(): void;
	}

}
declare module 'luma.gl/webgl/texture-2d-array' {
	import Texture from 'luma.gl/webgl/texture';
	export default class Texture2DArray extends Texture {
		static isSupported(gl: any): boolean;
		constructor(gl: any, opts?: {});
	}

}
declare module 'luma.gl/webgl/transform-feedback' {
	import Resource from 'luma.gl/webgl/resource';
	export default class TransformFeedback extends Resource {
		static isSupported(gl: any): boolean;
		constructor(gl: any, props?: {});
		initialize(props?: {}): this;
		setProps(props: any): void;
		setBuffers(buffers?: {}): this;
		setBuffer(locationOrName: any, buffer: any, size: any, offset?: number): this;
		begin(primitiveMode?: any): this;
		end(): this;
		_getVaryingInfo(locationOrName: any): any;
		_getVaryingIndex(locationOrName: any): any;
		_bindBuffers(): void;
		_unbindBuffers(): void;
		_bindBuffer(index: any, buffer: any, offset: number, size: any): this;
		_createHandle(): any;
		_deleteHandle(): void;
		_bindHandle(handle: any): void;
	}

}
declare module 'luma.gl/utils/array-utils-flat' {
	export function getScratchArrayBuffer(byteLength: any): any;
	export function getScratchArray(Type: any, length: any): any;
	export function fillArray({ target, source, start, count }: {
		target: any;
		source: any;
		start?: number;
		count?: number;
	}): any;

}
declare module 'luma.gl/webgl/vertex-array-object' {
	import Resource from 'luma.gl/webgl/resource';
	export default class VertexArrayObject extends Resource {
		static isSupported(gl: any, options?: {}): any;
		static getDefaultArray(gl: any): any;
		static getMaxAttributes(gl: any): any;
		static setConstant(gl: any, location: any, array: any): void;
		constructor(gl: any, opts?: {});
		delete(): void;
		readonly MAX_ATTRIBUTES: any;
		initialize(props?: {}): this;
		setProps(props: any): this;
		setElementBuffer(elementBuffer?: any, opts?: {}): this;
		setBuffer(location: any, buffer: any, accessor: any): this;
		enable(location: any, enable?: boolean): this;
		getConstantBuffer(elementCount: any, value: any, accessor: any): any;
		_normalizeConstantArrayValue(arrayValue: any, accessor: any): any;
		_compareConstantArrayValues(v1: any, v2: any): boolean;
		static _setConstantFloatArray(gl: any, location: any, array: any): void;
		static _setConstantIntArray(gl: any, location: any, array: any): void;
		static _setConstantUintArray(gl: any, location: any, array: any): void;
		_createHandle(): any;
		_deleteHandle(handle: any): any[];
		_bindHandle(handle: any): void;
		_getParameter(pname: any, { location }: {
			location: any;
		}): any;
	}

}
declare module 'luma.gl/webgl/vertex-array' {
	import Accessor from 'luma.gl/webgl/accessor';
	export default class VertexArray {
		constructor(gl: any, opts?: {});
		delete(): void;
		initialize(props?: {}): this;
		reset(): this;
		setProps(props: any): this;
		clearDrawParams(): void;
		getDrawParams(appParameters: any): any;
		setAttributes(attributes: any): this;
		setElementBuffer(elementBuffer?: any, accessor?: {}): this;
		setBuffer(locationOrName: any, buffer: any, appAccessor?: {}): this;
		setConstant(locationOrName: any, arrayValue: any, appAccessor?: {}): this;
		unbindBuffers(): this;
		bindBuffers(): this;
		bindForDraw(vertexCount: any, instanceCount: any, func: any): any;
		_resolveLocationAndAccessor(locationOrName: any, value: any, valueAccessor: any, appAccessor: any): this | {
			location: any;
			accessor: Accessor;
		};
		_getAttributeInfo(attributeName: any): any;
		_getAttributeIndex(locationOrName: any): any;
		_setConstantAttributes(vertexCount: any, instanceCount: any): void;
		_setConstantAttributeZero(constant: any, elementCount: any): void;
		_setConstantAttribute(location: any, constant: any): void;
		_updateDrawParams(): {
			isIndexed: boolean;
			isInstanced: boolean;
			indexCount: number;
			vertexCount: number;
			instanceCount: number;
		};
		_updateDrawParamsForLocation(drawParams: any, location: any): void;
		setElements(elementBuffer?: any, accessor?: {}): this;
	}

}
declare module 'luma.gl/webgl/uniform-buffer-layout' {
	export default class UniformBufferLayout {
		constructor(layout: any);
		getBytes(): number;
		getData(): any;
		getSubData(index: any): {
			data: any;
			offset: any;
		};
		setUniforms(values: any): this;
		_setValue(key: any, value: any): void;
		_addUniform(key: any, uniformType: any): void;
		_alignTo(size: any, count: any): any;
	}

}
declare module 'luma.gl/core/object-3d' {
	export default class Object3D {
		constructor({ id, display }: {
			id: any;
			display?: boolean;
		});
		toString(): string;
		setPosition(position: any): this;
		setRotation(rotation: any): this;
		setScale(scale: any): this;
		setMatrixComponents({ position, rotation, scale, update }: {
			position: any;
			rotation: any;
			scale: any;
			update?: boolean;
		}): this;
		updateMatrix(): this;
		update({ position, rotation, scale }?: {
			position: any;
			rotation: any;
			scale: any;
		}): this;
		getCoordinateUniforms(viewMatrix: any, modelMatrix: any): {
			viewMatrix: any;
			modelMatrix: any;
			objectMatrix: any;
			worldMatrix: any;
			worldInverseMatrix: any;
			worldInverseTransposeMatrix: any;
		};
		transform(): this;
	}

}
declare module 'luma.gl/core/group' {
	import Object3D from 'luma.gl/core/object-3d';
	export default class Group extends Object3D {
		constructor(opts?: {});
		add(...children: any[]): this;
		remove(child: any): this;
		removeAll(): this;
		traverse(visitor: any, { modelMatrix }?: {
			modelMatrix?: any;
		}): any;
		traverseReverse(visitor: any, { modelMatrix }?: {
			modelMatrix?: any;
		}): any;
	}

}
declare module 'luma.gl/webgl' {
	export { Image, WebGLRenderingContext, WebGLProgram, WebGLShader, WebGLBuffer, WebGLFramebuffer, WebGLRenderbuffer, WebGLTexture, WebGLUniformLocation, WebGLActiveInfo, WebGLShaderPrecisionFormat, WebGL2RenderingContext, webGLTypesAvailable } from 'luma.gl/webgl-utils';
	export { isWebGL, isWebGL2, createGLContext, destroyGLContext } from 'luma.gl/webgl-context/context';
	export { withParameters, resetParameters } from 'luma.gl/webgl-context/context-state';
	export { getContextInfo } from 'luma.gl/webgl-context/context-limits';
	export { clear } from 'luma.gl/webgl/clear';
	export { parseUniformName, getUniformSetter } from 'luma.gl/webgl/uniforms';
	export { default as Buffer } from 'luma.gl/webgl/buffer';
	export { Shader, VertexShader, FragmentShader } from 'luma.gl/webgl/shader';
	export { default as Program } from 'luma.gl/webgl/program';
	export { default as Framebuffer } from 'luma.gl/webgl/framebuffer';
	export { default as Renderbuffer } from 'luma.gl/webgl/renderbuffer';
	export { default as Texture2D } from 'luma.gl/webgl/texture-2d';
	export { default as TextureCube } from 'luma.gl/webgl/texture-cube';
	export { default as VertexArray } from 'luma.gl/webgl/vertex-array';
	export { default as TransformFeedback } from 'luma.gl/webgl/transform-feedback';
	export { default as Query } from 'luma.gl/webgl/query';

}
declare module 'luma.gl/core/attribute' {
	export default class Attribute {
		constructor(gl: any, opts?: {});
		delete(): void;
		update(opts: any): void;
		getBuffer(): any;
		getValue(): any;
		_setAccessor(opts: any): void;
		_validateAttributeDefinition(): void;
	}

}
declare module 'luma.gl/geometry/geometry' {
	export const DRAW_MODE: {
		POINTS: number;
		LINES: number;
		LINE_LOOP: number;
		LINE_STRIP: number;
		TRIANGLES: number;
		TRIANGLE_STRIP: number;
		TRIANGLE_FAN: number;
	};
	export function getDrawMode(drawMode: any): any;
	export default class Geometry {
		constructor(opts?: {});
		setNeedsRedraw(redraw?: boolean): this;
		getNeedsRedraw({ clearRedrawFlags }?: {
			clearRedrawFlags?: boolean;
		}): boolean;
		setVertexCount(vertexCount: any): void;
		getVertexCount(): any;
		hasAttribute(attributeName: any): boolean;
		getAttribute(attributeName: any): any;
		getArray(attributeName: any): any;
		getAttributes(): any;
		setAttributes(attributes: any): this;
		_autoDetectAttribute(attributeName: any, attribute: any): void;
		_print(attributeName: any): string;
	}

}
declare module 'luma.gl/shadertools/src/shaders/modular-vertex.glsl' {
	const _default: "#define SHADER_NAME luma_modular_vertex\n\n// object attributes\nattribute vec3 positions;\nattribute vec3 normals;\nattribute vec4 colors;\nattribute vec2 texCoords;\nattribute vec3 pickingColors;\n\nvoid main(void) {\n\n  // Set up position\n#ifdef MODULE_GEOMETRY\n  geometry_setPosition(positions);\n  geometry_setNormal(normals);\n#endif\n\n#ifdef MODULE_PROJECT\n  project_setPositionAndNormal_Model(positions, normals);\n  gl_Position = project_model_to_clipspace(positions);\n#endif\n\n  // Set up depth\n#ifdef MODULE_LOGDEPTH\n  logdepth_adjustPosition(gl_Position);\n#endif\n\n#ifdef MODULE_DIFFUSE\n  diffuse_setTextureCoordinate(texCoords);\n#endif\n\n  // Set up color calculations\n#ifdef MODULE_MATERIAL\n  material_setDiffuseColor(colors);\n  material_setDiffuseTextureCoordinates(texCoords);\n#endif\n\n#ifdef MODULE_LIGHTING\n  lighting_setPositionAndNormal(positions, normals);\n  lighting_apply_light(positions);\n  lighting_apply_reflection(positions);\n#endif\n\n#ifdef MODULE_PICKING\n  picking_setPickingColor(pickingColors);\n#endif\n\n}\n";
	export default _default;

}
declare module 'luma.gl/shadertools/src/shaders/modular-fragment.glsl' {
	const _default: "#define SHADER_NAME luma-modular-fragment\n\nprecision highp float;\n\n// varyings\nvarying vec4 vColor;\n\nvoid main(){\n  gl_FragColor = vec4(1., 0., 1., 1.);\n\n#ifdef MODULE_DIFFUSE\n  gl_FragColor = diffuse_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_MATERIAL\n  gl_FragColor = material_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_LIGHTING\n  gl_FragColor = lighting_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_FOG\n  gl_FragColor = fog_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_PICKING\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_LOGDEPTH\n  logdepth_setFragDepth(gl_Position);\n#endif\n}\n";
	export default _default;

}
declare module 'shadertools/src/shaders' {
	export const MODULAR_SHADERS: {
		vs: string;
		fs: string;
		defaultUniforms: {};
	};

}
declare module 'luma.gl/shadertools/src/lib/constants' {
	export const VERTEX_SHADER = "vs";
	export const FRAGMENT_SHADER = "fs";

}
declare module 'luma.gl/shadertools/src/lib/transpile-shader' {
	export default function transpileShader(source: any, targetGLSLVersion: any, isVertex: any): any;

}
declare module 'luma.gl/shadertools/src/utils/assert' {
	export default function assert(condition: any, message: any): void;

}
declare module 'luma.gl/shadertools/src/lib/shader-module' {
	export default class ShaderModule {
		constructor({ name, vs, fs, dependencies, getUniforms, deprecations, vertexShader, fragmentShader }: {
			name: any;
			vs: any;
			fs: any;
			dependencies?: any[];
			getUniforms?: () => {};
			deprecations?: any[];
			vertexShader: any;
			fragmentShader: any;
		});
		getModuleSource(type: any, targetGLSLVersion: any): string;
		getUniforms(opts: any, uniforms: any): any;
		checkDeprecations(shaderSource: any, log: any): void;
		_parseDeprecationDefinitions(deprecations?: any[]): any[];
	}

}
declare module 'luma.gl/shadertools/src/lib/shader-module-registry' {
	export default class ShaderModuleRegistry {
		constructor();
		setDefaultShaderModules(modules: any): void;
		registerShaderModules(shaderModuleList: any, { ignoreMultipleRegistrations }?: {
			ignoreMultipleRegistrations?: boolean;
		}): void;
		getShaderModule(moduleOrName: any): any;
		resolveModules(modules: any): any;
		_registerShaderModule(module: any, ignoreMultipleRegistrations?: boolean): any;
	}

}
declare module 'luma.gl/shadertools/src/lib/resolve-modules' {
	/**
	 * Registers an array of default shader modules. These will be concatenated
	 * automatically at the end of any shader module list passed to
	 * `assembleShaders` (plus `resolveModules` and `getShaderDependencies`)
	 * @param {Object[]} modules - Array of shader modules
	 */
	export function setDefaultShaderModules(modules: any): void;
	/**
	 * Registers an array of shader modules
	 * @param {Object[]} shaderModuleList - Array of shader modules
	 */
	export function registerShaderModules(shaderModuleList: any, { ignoreMultipleRegistrations }?: {
		ignoreMultipleRegistrations?: boolean;
	}): void;
	export function resolveModules(modules: any): any[];
	export function getShaderModule(moduleOrName: any): any; function getShaderDependencies(modules: any): any[]; function getDependencyGraph({ modules, level, moduleMap, moduleDepth }: {
		modules: any;
		level: any;
		moduleMap: any;
		moduleDepth: any;
	}): void;
	export const TEST_EXPORTS: {
		getShaderDependencies: typeof getShaderDependencies;
		getDependencyGraph: typeof getDependencyGraph;
	};
	export { };

}
declare module 'luma.gl/shadertools/src/utils/is-old-ie' {
	export default function isOldIE(opts?: {}): boolean;

}
declare module 'luma.gl/shadertools/src/utils/webgl-info' {
	const FEATURES: {};
	export { FEATURES };
	export function getContextInfo(gl: any): {
		gpuVendor: string;
		vendor: any;
		renderer: any;
		version: any;
		shadingLanguageVersion: any;
	};
	export function canCompileGLGSExtension(gl: any, cap: any, opts?: {}): any;
	export function hasFeatures(gl: any, features: any): any;

}
declare module 'luma.gl/shadertools/src/lib/platform-defines' {
	export function getPlatformShaderDefines(gl: any): "#define NVIDIA_GPU\n// Nvidia optimizes away the calculation necessary for emulated fp64\n#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1\n" | "#define INTEL_GPU\n// Intel optimizes away the calculation necessary for emulated fp64\n#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1\n// Intel's built-in 'tan' function doesn't have acceptable precision\n#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1\n// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow\n#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1\n" | "#define AMD_GPU\n" | "#define DEFAULT_GPU\n// Prevent driver from optimizing away the calculation necessary for emulated fp64\n#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1\n// Intel's built-in 'tan' function doesn't have acceptable precision\n#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1\n// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow\n#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1\n";
	export function getVersionDefines(gl: any, glslVersion: any, isFragment: any): string;

}
declare module 'luma.gl/shadertools/src/modules/module-injectors' {
	export const MODULE_INJECTORS_VS = "#ifdef MODULE_LOGDEPTH\n  logdepth_adjustPosition(gl_Position);\n#endif\n";
	export const MODULE_INJECTORS_FS = "#ifdef MODULE_MATERIAL\n  gl_FragColor = material_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_LIGHTING\n  gl_FragColor = lighting_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_FOG\n  gl_FragColor = fog_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_PICKING\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_LOGDEPTH\n  logdepth_setFragDepth();\n#endif\n";

}
declare module 'luma.gl/shadertools/src/lib/inject-shader' {
	export default function injectShader(source: any, type: any, inject: any, injectStandardStubs: any): any;
	export function combineInjects(injects: any): {};

}
declare module 'luma.gl/shadertools/src/lib/assemble-shaders' {
	export function assembleShaders(gl: any, opts?: {}): {
		gl: any;
		vs: any;
		fs: any;
		getUniforms: (opts: any) => {};
		modules: {};
	};

}
declare module 'luma.gl/shadertools/src/modules/fp32/fp32' {
	const _default: {
		name: string;
		vs: string;
		fs: any;
	};
	export default _default;

}
declare module 'luma.gl/shadertools/src/modules/fp64/fp64-utils' {
	/**
	 * Calculate WebGL 64 bit float
	 * @param a {number} - the input float number
	 * @param out {array, optional} - the output array. If not supplied, a new array is created.
	 * @param startIndex {integer, optional} - the index in the output array to fill from. Default 0.
	 * @returns {array} - the fp64 representation of the input number
	 */
	export function fp64ify(a: any, out?: any[], startIndex?: number): any[];
	/**
	 * Calculate the low part of a WebGL 64 bit float
	 * @param a {number} - the input float number
	 * @returns {number} - the lower 32 bit of the number
	 */
	export function fp64LowPart(a: any): number;
	/**
	 * Calculate WebGL 64 bit matrix (transposed "Float64Array")
	 * @param matrix {Matrix4} - the input matrix
	 * @returns {array} - the fp64 representation of the input matrix
	 */
	export function fp64ifyMatrix4(matrix: any): Float32Array;

}
declare module 'luma.gl/shadertools/src/modules/fp64/fp64-arithmetic.glsl' {
	const _default: "uniform float ONE;\n\n/*\nAbout LUMA_FP64_CODE_ELIMINATION_WORKAROUND\n\nThe purpose of this workaround is to prevent shader compilers from\noptimizing away necessary arithmetic operations by swapping their sequences\nor transform the equation to some 'equivalent' from.\n\nThe method is to multiply an artifical variable, ONE, which will be known to\nthe compiler to be 1 only at runtime. The whole expression is then represented\nas a polynomial with respective to ONE. In the coefficients of all terms, only one a\nand one b should appear\n\nerr = (a + b) * ONE^6 - a * ONE^5 - (a + b) * ONE^4 + a * ONE^3 - b - (a + b) * ONE^2 + a * ONE\n*/\n\n// Divide float number to high and low floats to extend fraction bits\nvec2 split(float a) {\n  const float SPLIT = 4097.0;\n  float t = a * SPLIT;\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float a_hi = t * ONE - (t - a);\n  float a_lo = a * ONE - a_hi;\n#else\n  float a_hi = t - (t - a);\n  float a_lo = a - a_hi;\n#endif\n  return vec2(a_hi, a_lo);\n}\n\n// Divide float number again when high float uses too many fraction bits\nvec2 split2(vec2 a) {\n  vec2 b = split(a.x);\n  b.y += a.y;\n  return b;\n}\n\n// Special sum operation when a > b\nvec2 quickTwoSum(float a, float b) {\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float sum = (a + b) * ONE;\n  float err = b - (sum - a) * ONE;\n#else\n  float sum = a + b;\n  float err = b - (sum - a);\n#endif\n  return vec2(sum, err);\n}\n\n// General sum operation\nvec2 twoSum(float a, float b) {\n  float s = (a + b);\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float v = (s * ONE - a) * ONE;\n  float err = (a - (s - v) * ONE) * ONE * ONE * ONE + (b - v);\n#else\n  float v = s - a;\n  float err = (a - (s - v)) + (b - v);\n#endif\n  return vec2(s, err);\n}\n\nvec2 twoSub(float a, float b) {\n  float s = (a - b);\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float v = (s * ONE - a) * ONE;\n  float err = (a - (s - v) * ONE) * ONE * ONE * ONE - (b + v);\n#else\n  float v = s - a;\n  float err = (a - (s - v)) - (b + v);\n#endif\n  return vec2(s, err);\n}\n\nvec2 twoSqr(float a) {\n  float prod = a * a;\n  vec2 a_fp64 = split(a);\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float err = ((a_fp64.x * a_fp64.x - prod) * ONE + 2.0 * a_fp64.x *\n    a_fp64.y * ONE * ONE) + a_fp64.y * a_fp64.y * ONE * ONE * ONE;\n#else\n  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;\n#endif\n  return vec2(prod, err);\n}\n\nvec2 twoProd(float a, float b) {\n  float prod = a * b;\n  vec2 a_fp64 = split(a);\n  vec2 b_fp64 = split(b);\n  float err = ((a_fp64.x * b_fp64.x - prod) + a_fp64.x * b_fp64.y +\n    a_fp64.y * b_fp64.x) + a_fp64.y * b_fp64.y;\n  return vec2(prod, err);\n}\n\nvec2 sum_fp64(vec2 a, vec2 b) {\n  vec2 s, t;\n  s = twoSum(a.x, b.x);\n  t = twoSum(a.y, b.y);\n  s.y += t.x;\n  s = quickTwoSum(s.x, s.y);\n  s.y += t.y;\n  s = quickTwoSum(s.x, s.y);\n  return s;\n}\n\nvec2 sub_fp64(vec2 a, vec2 b) {\n  vec2 s, t;\n  s = twoSub(a.x, b.x);\n  t = twoSub(a.y, b.y);\n  s.y += t.x;\n  s = quickTwoSum(s.x, s.y);\n  s.y += t.y;\n  s = quickTwoSum(s.x, s.y);\n  return s;\n}\n\nvec2 mul_fp64(vec2 a, vec2 b) {\n  vec2 prod = twoProd(a.x, b.x);\n  // y component is for the error\n  prod.y += a.x * b.y;\n#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)\n  prod = split2(prod);\n#endif\n  prod = quickTwoSum(prod.x, prod.y);\n  prod.y += a.y * b.x;\n#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)\n  prod = split2(prod);\n#endif\n  prod = quickTwoSum(prod.x, prod.y);\n  return prod;\n}\n\nvec2 div_fp64(vec2 a, vec2 b) {\n  float xn = 1.0 / b.x;\n#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)\n  vec2 yn = mul_fp64(a, vec2(xn, 0));\n#else\n  vec2 yn = a * xn;\n#endif\n  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;\n  vec2 prod = twoProd(xn, diff);\n  return sum_fp64(yn, prod);\n}\n\nvec2 sqrt_fp64(vec2 a) {\n  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);\n  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);\n\n  float x = 1.0 / sqrt(a.x);\n  float yn = a.x * x;\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  vec2 yn_sqr = twoSqr(yn) * ONE;\n#else\n  vec2 yn_sqr = twoSqr(yn);\n#endif\n  float diff = sub_fp64(a, yn_sqr).x;\n  vec2 prod = twoProd(x * 0.5, diff);\n#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)\n  return sum_fp64(split(yn), prod);\n#else\n  return sum_fp64(vec2(yn, 0.0), prod);\n#endif\n}\n";
	export default _default;

}
declare module 'luma.gl/shadertools/src/modules/fp64/fp64-functions.glsl' {
	const _default: "const vec2 E_FP64 = vec2(2.7182817459106445e+00, 8.254840366817007e-08);\nconst vec2 LOG2_FP64 = vec2(0.6931471824645996e+00, -1.9046542121259336e-09);\nconst vec2 PI_FP64 = vec2(3.1415927410125732, -8.742278012618954e-8);\nconst vec2 TWO_PI_FP64 = vec2(6.2831854820251465, -1.7484556025237907e-7);\nconst vec2 PI_2_FP64 = vec2(1.5707963705062866, -4.371139006309477e-8);\nconst vec2 PI_4_FP64 = vec2(0.7853981852531433, -2.1855695031547384e-8);\nconst vec2 PI_16_FP64 = vec2(0.19634954631328583, -5.463923757886846e-9);\nconst vec2 PI_16_2_FP64 = vec2(0.39269909262657166, -1.0927847515773692e-8);\nconst vec2 PI_16_3_FP64 = vec2(0.5890486240386963, -1.4906100798128818e-9);\nconst vec2 PI_180_FP64 = vec2(0.01745329238474369, 1.3519960498364902e-10);\n\nconst vec2 SIN_TABLE_0_FP64 = vec2(0.19509032368659973, -1.6704714833615242e-9);\nconst vec2 SIN_TABLE_1_FP64 = vec2(0.3826834261417389, 6.22335089017767e-9);\nconst vec2 SIN_TABLE_2_FP64 = vec2(0.5555702447891235, -1.1769521357507529e-8);\nconst vec2 SIN_TABLE_3_FP64 = vec2(0.7071067690849304, 1.2101617041793133e-8);\n\nconst vec2 COS_TABLE_0_FP64 = vec2(0.9807852506637573, 2.9739473106360492e-8);\nconst vec2 COS_TABLE_1_FP64 = vec2(0.9238795042037964, 2.8307490351764386e-8);\nconst vec2 COS_TABLE_2_FP64 = vec2(0.8314695954322815, 1.6870263741530778e-8);\nconst vec2 COS_TABLE_3_FP64 = vec2(0.7071067690849304, 1.2101617152815436e-8);\n\nconst vec2 INVERSE_FACTORIAL_3_FP64 = vec2(1.666666716337204e-01, -4.967053879312289e-09); // 1/3!\nconst vec2 INVERSE_FACTORIAL_4_FP64 = vec2(4.16666679084301e-02, -1.2417634698280722e-09); // 1/4!\nconst vec2 INVERSE_FACTORIAL_5_FP64 = vec2(8.333333767950535e-03, -4.34617203337595e-10); // 1/5!\nconst vec2 INVERSE_FACTORIAL_6_FP64 = vec2(1.3888889225199819e-03, -3.3631094437103215e-11); // 1/6!\nconst vec2 INVERSE_FACTORIAL_7_FP64 = vec2(1.9841270113829523e-04,  -2.725596874933456e-12); // 1/7!\nconst vec2 INVERSE_FACTORIAL_8_FP64 = vec2(2.4801587642286904e-05, -3.406996025904184e-13); // 1/8!\nconst vec2 INVERSE_FACTORIAL_9_FP64 = vec2(2.75573188446287533e-06, 3.7935713937038186e-14); // 1/9!\nconst vec2 INVERSE_FACTORIAL_10_FP64 = vec2(2.755731998149713e-07, -7.575112367869873e-15); // 1/10!\n\nfloat nint(float d) {\n    if (d == floor(d)) return d;\n    return floor(d + 0.5);\n}\n\nvec2 nint_fp64(vec2 a) {\n    float hi = nint(a.x);\n    float lo;\n    vec2 tmp;\n    if (hi == a.x) {\n        lo = nint(a.y);\n        tmp = quickTwoSum(hi, lo);\n    } else {\n        lo = 0.0;\n        if (abs(hi - a.x) == 0.5 && a.y < 0.0) {\n            hi -= 1.0;\n        }\n        tmp = vec2(hi, lo);\n    }\n    return tmp;\n}\n\n/* k_power controls how much range reduction we would like to have\nRange reduction uses the following method:\nassume a = k_power * r + m * log(2), k and m being integers.\nSet k_power = 4 (we can choose other k to trade accuracy with performance.\nwe only need to calculate exp(r) and using exp(a) = 2^m * exp(r)^k_power;\n*/\n\nvec2 exp_fp64(vec2 a) {\n  // We need to make sure these two numbers match\n  // as bit-wise shift is not available in GLSL 1.0\n  const int k_power = 4;\n  const float k = 16.0;\n\n  const float inv_k = 1.0 / k;\n\n  if (a.x <= -88.0) return vec2(0.0, 0.0);\n  if (a.x >= 88.0) return vec2(1.0 / 0.0, 1.0 / 0.0);\n  if (a.x == 0.0 && a.y == 0.0) return vec2(1.0, 0.0);\n  if (a.x == 1.0 && a.y == 0.0) return E_FP64;\n\n  float m = floor(a.x / LOG2_FP64.x + 0.5);\n  vec2 r = sub_fp64(a, mul_fp64(LOG2_FP64, vec2(m, 0.0))) * inv_k;\n  vec2 s, t, p;\n\n  p = mul_fp64(r, r);\n  s = sum_fp64(r, p * 0.5);\n  p = mul_fp64(p, r);\n  t = mul_fp64(p, INVERSE_FACTORIAL_3_FP64);\n\n  s = sum_fp64(s, t);\n  p = mul_fp64(p, r);\n  t = mul_fp64(p, INVERSE_FACTORIAL_4_FP64);\n\n  s = sum_fp64(s, t);\n  p = mul_fp64(p, r);\n  t = mul_fp64(p, INVERSE_FACTORIAL_5_FP64);\n\n  // s = sum_fp64(s, t);\n  // p = mul_fp64(p, r);\n  // t = mul_fp64(p, INVERSE_FACTORIAL_6_FP64);\n\n  // s = sum_fp64(s, t);\n  // p = mul_fp64(p, r);\n  // t = mul_fp64(p, INVERSE_FACTORIAL_7_FP64);\n\n  s = sum_fp64(s, t);\n\n\n  // At this point, s = exp(r) - 1; but after following 4 recursions, we will get exp(r) ^ 512 - 1.\n  for (int i = 0; i < k_power; i++) {\n    s = sum_fp64(s * 2.0, mul_fp64(s, s));\n  }\n\n#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)\n  s = sum_fp64(s, vec2(ONE, 0.0));\n#else\n  s = sum_fp64(s, vec2(1.0, 0.0));\n#endif\n\n  return s * pow(2.0, m);\n//   return r;\n}\n\nvec2 log_fp64(vec2 a)\n{\n  if (a.x == 1.0 && a.y == 0.0) return vec2(0.0, 0.0);\n  if (a.x <= 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);\n  vec2 x = vec2(log(a.x), 0.0);\n  vec2 s;\n#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)\n  s = vec2(ONE, 0.0);\n#else\n  s = vec2(1.0, 0.0);\n#endif\n\n  x = sub_fp64(sum_fp64(x, mul_fp64(a, exp_fp64(-x))), s);\n  return x;\n}\n\nvec2 sin_taylor_fp64(vec2 a) {\n  vec2 r, s, t, x;\n\n  if (a.x == 0.0 && a.y == 0.0) {\n    return vec2(0.0, 0.0);\n  }\n\n  x = -mul_fp64(a, a);\n  s = a;\n  r = a;\n\n  r = mul_fp64(r, x);\n  t = mul_fp64(r, INVERSE_FACTORIAL_3_FP64);\n  s = sum_fp64(s, t);\n\n  r = mul_fp64(r, x);\n  t = mul_fp64(r, INVERSE_FACTORIAL_5_FP64);\n  s = sum_fp64(s, t);\n\n  /* keep the following commented code in case we need them\n  for extra accuracy from the Taylor expansion*/\n\n  // r = mul_fp64(r, x);\n  // t = mul_fp64(r, INVERSE_FACTORIAL_7_FP64);\n  // s = sum_fp64(s, t);\n\n  // r = mul_fp64(r, x);\n  // t = mul_fp64(r, INVERSE_FACTORIAL_9_FP64);\n  // s = sum_fp64(s, t);\n\n  return s;\n}\n\nvec2 cos_taylor_fp64(vec2 a) {\n  vec2 r, s, t, x;\n\n  if (a.x == 0.0 && a.y == 0.0) {\n    return vec2(1.0, 0.0);\n  }\n\n  x = -mul_fp64(a, a);\n  r = x;\n  s = sum_fp64(vec2(1.0, 0.0), r * 0.5);\n\n  r = mul_fp64(r, x);\n  t = mul_fp64(r, INVERSE_FACTORIAL_4_FP64);\n  s = sum_fp64(s, t);\n\n  r = mul_fp64(r, x);\n  t = mul_fp64(r, INVERSE_FACTORIAL_6_FP64);\n  s = sum_fp64(s, t);\n\n  /* keep the following commented code in case we need them\n  for extra accuracy from the Taylor expansion*/\n\n  // r = mul_fp64(r, x);\n  // t = mul_fp64(r, INVERSE_FACTORIAL_8_FP64);\n  // s = sum_fp64(s, t);\n\n  // r = mul_fp64(r, x);\n  // t = mul_fp64(r, INVERSE_FACTORIAL_10_FP64);\n  // s = sum_fp64(s, t);\n\n  return s;\n}\n\nvoid sincos_taylor_fp64(vec2 a, out vec2 sin_t, out vec2 cos_t) {\n  if (a.x == 0.0 && a.y == 0.0) {\n    sin_t = vec2(0.0, 0.0);\n    cos_t = vec2(1.0, 0.0);\n  }\n\n  sin_t = sin_taylor_fp64(a);\n  cos_t = sqrt_fp64(sub_fp64(vec2(1.0, 0.0), mul_fp64(sin_t, sin_t)));\n}\n\nvec2 sin_fp64(vec2 a) {\n    if (a.x == 0.0 && a.y == 0.0) {\n        return vec2(0.0, 0.0);\n    }\n\n    // 2pi range reduction\n    vec2 z = nint_fp64(div_fp64(a, TWO_PI_FP64));\n    vec2 r = sub_fp64(a, mul_fp64(TWO_PI_FP64, z));\n\n    vec2 t;\n    float q = floor(r.x / PI_2_FP64.x + 0.5);\n    int j = int(q);\n\n    if (j < -2 || j > 2) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    }\n\n    t = sub_fp64(r, mul_fp64(PI_2_FP64, vec2(q, 0.0)));\n\n    q = floor(t.x / PI_16_FP64.x + 0.5);\n    int k = int(q);\n\n    if (k == 0) {\n        if (j == 0) {\n            return sin_taylor_fp64(t);\n        } else if (j == 1) {\n            return cos_taylor_fp64(t);\n        } else if (j == -1) {\n            return -cos_taylor_fp64(t);\n        } else {\n            return -sin_taylor_fp64(t);\n        }\n    }\n\n    int abs_k = int(abs(float(k)));\n\n    if (abs_k > 4) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    } else {\n        t = sub_fp64(t, mul_fp64(PI_16_FP64, vec2(q, 0.0)));\n    }\n\n    vec2 u = vec2(0.0, 0.0);\n    vec2 v = vec2(0.0, 0.0);\n\n#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)\n    if (abs(float(abs_k) - 1.0) < 0.5) {\n        u = COS_TABLE_0_FP64;\n        v = SIN_TABLE_0_FP64;\n    } else if (abs(float(abs_k) - 2.0) < 0.5) {\n        u = COS_TABLE_1_FP64;\n        v = SIN_TABLE_1_FP64;\n    } else if (abs(float(abs_k) - 3.0) < 0.5) {\n        u = COS_TABLE_2_FP64;\n        v = SIN_TABLE_2_FP64;\n    } else if (abs(float(abs_k) - 4.0) < 0.5) {\n        u = COS_TABLE_3_FP64;\n        v = SIN_TABLE_3_FP64;\n    }\n#else\n    if (abs_k == 1) {\n        u = COS_TABLE_0_FP64;\n        v = SIN_TABLE_0_FP64;\n    } else if (abs_k == 2) {\n        u = COS_TABLE_1_FP64;\n        v = SIN_TABLE_1_FP64;\n    } else if (abs_k == 3) {\n        u = COS_TABLE_2_FP64;\n        v = SIN_TABLE_2_FP64;\n    } else if (abs_k == 4) {\n        u = COS_TABLE_3_FP64;\n        v = SIN_TABLE_3_FP64;\n    }\n#endif\n\n    vec2 sin_t, cos_t;\n    sincos_taylor_fp64(t, sin_t, cos_t);\n\n\n\n    vec2 result = vec2(0.0, 0.0);\n    if (j == 0) {\n        if (k > 0) {\n            result = sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        } else {\n            result = sub_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        }\n    } else if (j == 1) {\n        if (k > 0) {\n            result = sub_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        } else {\n            result = sum_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        }\n    } else if (j == -1) {\n        if (k > 0) {\n            result = sub_fp64(mul_fp64(v, sin_t), mul_fp64(u, cos_t));\n        } else {\n            result = -sum_fp64(mul_fp64(v, sin_t), mul_fp64(u, cos_t));\n        }\n    } else {\n        if (k > 0) {\n            result = -sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        } else {\n            result = sub_fp64(mul_fp64(v, cos_t), mul_fp64(u, sin_t));\n        }\n    }\n\n    return result;\n}\n\nvec2 cos_fp64(vec2 a) {\n    if (a.x == 0.0 && a.y == 0.0) {\n        return vec2(1.0, 0.0);\n    }\n\n    // 2pi range reduction\n    vec2 z = nint_fp64(div_fp64(a, TWO_PI_FP64));\n    vec2 r = sub_fp64(a, mul_fp64(TWO_PI_FP64, z));\n\n    vec2 t;\n    float q = floor(r.x / PI_2_FP64.x + 0.5);\n    int j = int(q);\n\n    if (j < -2 || j > 2) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    }\n\n    t = sub_fp64(r, mul_fp64(PI_2_FP64, vec2(q, 0.0)));\n\n    q = floor(t.x / PI_16_FP64.x + 0.5);\n    int k = int(q);\n\n    if (k == 0) {\n        if (j == 0) {\n            return cos_taylor_fp64(t);\n        } else if (j == 1) {\n            return -sin_taylor_fp64(t);\n        } else if (j == -1) {\n            return sin_taylor_fp64(t);\n        } else {\n            return -cos_taylor_fp64(t);\n        }\n    }\n\n    int abs_k = int(abs(float(k)));\n\n    if (abs_k > 4) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    } else {\n        t = sub_fp64(t, mul_fp64(PI_16_FP64, vec2(q, 0.0)));\n    }\n\n    vec2 u = vec2(0.0, 0.0);\n    vec2 v = vec2(0.0, 0.0);\n\n#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)\n    if (abs(float(abs_k) - 1.0) < 0.5) {\n        u = COS_TABLE_0_FP64;\n        v = SIN_TABLE_0_FP64;\n    } else if (abs(float(abs_k) - 2.0) < 0.5) {\n        u = COS_TABLE_1_FP64;\n        v = SIN_TABLE_1_FP64;\n    } else if (abs(float(abs_k) - 3.0) < 0.5) {\n        u = COS_TABLE_2_FP64;\n        v = SIN_TABLE_2_FP64;\n    } else if (abs(float(abs_k) - 4.0) < 0.5) {\n        u = COS_TABLE_3_FP64;\n        v = SIN_TABLE_3_FP64;\n    }\n#else\n    if (abs_k == 1) {\n        u = COS_TABLE_0_FP64;\n        v = SIN_TABLE_0_FP64;\n    } else if (abs_k == 2) {\n        u = COS_TABLE_1_FP64;\n        v = SIN_TABLE_1_FP64;\n    } else if (abs_k == 3) {\n        u = COS_TABLE_2_FP64;\n        v = SIN_TABLE_2_FP64;\n    } else if (abs_k == 4) {\n        u = COS_TABLE_3_FP64;\n        v = SIN_TABLE_3_FP64;\n    }\n#endif\n\n    vec2 sin_t, cos_t;\n    sincos_taylor_fp64(t, sin_t, cos_t);\n\n    vec2 result = vec2(0.0, 0.0);\n    if (j == 0) {\n        if (k > 0) {\n            result = sub_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        } else {\n            result = sum_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        }\n    } else if (j == 1) {\n        if (k > 0) {\n            result = -sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        } else {\n            result = sub_fp64(mul_fp64(v, cos_t), mul_fp64(u, sin_t));\n        }\n    } else if (j == -1) {\n        if (k > 0) {\n            result = sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        } else {\n            result = sub_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        }\n    } else {\n        if (k > 0) {\n            result = sub_fp64(mul_fp64(v, sin_t), mul_fp64(u, cos_t));\n        } else {\n            result = -sum_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        }\n    }\n\n    return result;\n}\n\nvec2 tan_fp64(vec2 a) {\n    vec2 sin_a;\n    vec2 cos_a;\n\n    if (a.x == 0.0 && a.y == 0.0) {\n        return vec2(0.0, 0.0);\n    }\n\n    // 2pi range reduction\n    vec2 z = nint_fp64(div_fp64(a, TWO_PI_FP64));\n    vec2 r = sub_fp64(a, mul_fp64(TWO_PI_FP64, z));\n\n    vec2 t;\n    float q = floor(r.x / PI_2_FP64.x + 0.5);\n    int j = int(q);\n\n\n    if (j < -2 || j > 2) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    }\n\n    t = sub_fp64(r, mul_fp64(PI_2_FP64, vec2(q, 0.0)));\n\n    q = floor(t.x / PI_16_FP64.x + 0.5);\n    int k = int(q);\n    int abs_k = int(abs(float(k)));\n\n    // We just can't get PI/16 * 3.0 very accurately.\n    // so let's just store it\n    if (abs_k > 4) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    } else {\n        t = sub_fp64(t, mul_fp64(PI_16_FP64, vec2(q, 0.0)));\n    }\n\n\n    vec2 u = vec2(0.0, 0.0);\n    vec2 v = vec2(0.0, 0.0);\n\n    vec2 sin_t, cos_t;\n    vec2 s, c;\n    sincos_taylor_fp64(t, sin_t, cos_t);\n\n    if (k == 0) {\n        s = sin_t;\n        c = cos_t;\n    } else {\n#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)\n        if (abs(float(abs_k) - 1.0) < 0.5) {\n            u = COS_TABLE_0_FP64;\n            v = SIN_TABLE_0_FP64;\n        } else if (abs(float(abs_k) - 2.0) < 0.5) {\n            u = COS_TABLE_1_FP64;\n            v = SIN_TABLE_1_FP64;\n        } else if (abs(float(abs_k) - 3.0) < 0.5) {\n            u = COS_TABLE_2_FP64;\n            v = SIN_TABLE_2_FP64;\n        } else if (abs(float(abs_k) - 4.0) < 0.5) {\n            u = COS_TABLE_3_FP64;\n            v = SIN_TABLE_3_FP64;\n        }\n#else\n        if (abs_k == 1) {\n            u = COS_TABLE_0_FP64;\n            v = SIN_TABLE_0_FP64;\n        } else if (abs_k == 2) {\n            u = COS_TABLE_1_FP64;\n            v = SIN_TABLE_1_FP64;\n        } else if (abs_k == 3) {\n            u = COS_TABLE_2_FP64;\n            v = SIN_TABLE_2_FP64;\n        } else if (abs_k == 4) {\n            u = COS_TABLE_3_FP64;\n            v = SIN_TABLE_3_FP64;\n        }\n#endif\n        if (k > 0) {\n            s = sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n            c = sub_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        } else {\n            s = sub_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n            c = sum_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        }\n    }\n\n    if (j == 0) {\n        sin_a = s;\n        cos_a = c;\n    } else if (j == 1) {\n        sin_a = c;\n        cos_a = -s;\n    } else if (j == -1) {\n        sin_a = -c;\n        cos_a = s;\n    } else {\n        sin_a = -s;\n        cos_a = -c;\n    }\n    return div_fp64(sin_a, cos_a);\n}\n\nvec2 radians_fp64(vec2 degree) {\n  return mul_fp64(degree, PI_180_FP64);\n}\n\nvec2 mix_fp64(vec2 a, vec2 b, float x) {\n  vec2 range = sub_fp64(b, a);\n  return sum_fp64(a, mul_fp64(range, vec2(x, 0.0)));\n}\n\n// Vector functions\n// vec2 functions\nvoid vec2_sum_fp64(vec2 a[2], vec2 b[2], out vec2 out_val[2]) {\n    out_val[0] = sum_fp64(a[0], b[0]);\n    out_val[1] = sum_fp64(a[1], b[1]);\n}\n\nvoid vec2_sub_fp64(vec2 a[2], vec2 b[2], out vec2 out_val[2]) {\n    out_val[0] = sub_fp64(a[0], b[0]);\n    out_val[1] = sub_fp64(a[1], b[1]);\n}\n\nvoid vec2_mul_fp64(vec2 a[2], vec2 b[2], out vec2 out_val[2]) {\n    out_val[0] = mul_fp64(a[0], b[0]);\n    out_val[1] = mul_fp64(a[1], b[1]);\n}\n\nvoid vec2_div_fp64(vec2 a[2], vec2 b[2], out vec2 out_val[2]) {\n    out_val[0] = div_fp64(a[0], b[0]);\n    out_val[1] = div_fp64(a[1], b[1]);\n}\n\nvoid vec2_mix_fp64(vec2 x[2], vec2 y[2], float a, out vec2 out_val[2]) {\n  vec2 range[2];\n  vec2_sub_fp64(y, x, range);\n  vec2 portion[2];\n  portion[0] = range[0] * a;\n  portion[1] = range[1] * a;\n  vec2_sum_fp64(x, portion, out_val);\n}\n\nvec2 vec2_length_fp64(vec2 x[2]) {\n  return sqrt_fp64(sum_fp64(mul_fp64(x[0], x[0]), mul_fp64(x[1], x[1])));\n}\n\nvoid vec2_normalize_fp64(vec2 x[2], out vec2 out_val[2]) {\n  vec2 length = vec2_length_fp64(x);\n  vec2 length_vec2[2];\n  length_vec2[0] = length;\n  length_vec2[1] = length;\n\n  vec2_div_fp64(x, length_vec2, out_val);\n}\n\nvec2 vec2_distance_fp64(vec2 x[2], vec2 y[2]) {\n  vec2 diff[2];\n  vec2_sub_fp64(x, y, diff);\n  return vec2_length_fp64(diff);\n}\n\nvec2 vec2_dot_fp64(vec2 a[2], vec2 b[2]) {\n  vec2 v[2];\n\n  v[0] = mul_fp64(a[0], b[0]);\n  v[1] = mul_fp64(a[1], b[1]);\n\n  return sum_fp64(v[0], v[1]);\n}\n\n// vec3 functions\nvoid vec3_sub_fp64(vec2 a[3], vec2 b[3], out vec2 out_val[3]) {\n  for (int i = 0; i < 3; i++) {\n    out_val[i] = sum_fp64(a[i], b[i]);\n  }\n}\n\nvoid vec3_sum_fp64(vec2 a[3], vec2 b[3], out vec2 out_val[3]) {\n  for (int i = 0; i < 3; i++) {\n    out_val[i] = sum_fp64(a[i], b[i]);\n  }\n}\n\nvec2 vec3_length_fp64(vec2 x[3]) {\n  return sqrt_fp64(sum_fp64(sum_fp64(mul_fp64(x[0], x[0]), mul_fp64(x[1], x[1])),\n    mul_fp64(x[2], x[2])));\n}\n\nvec2 vec3_distance_fp64(vec2 x[3], vec2 y[3]) {\n  vec2 diff[3];\n  vec3_sub_fp64(x, y, diff);\n  return vec3_length_fp64(diff);\n}\n\n// vec4 functions\nvoid vec4_fp64(vec4 a, out vec2 out_val[4]) {\n  out_val[0].x = a[0];\n  out_val[0].y = 0.0;\n\n  out_val[1].x = a[1];\n  out_val[1].y = 0.0;\n\n  out_val[2].x = a[2];\n  out_val[2].y = 0.0;\n\n  out_val[3].x = a[3];\n  out_val[3].y = 0.0;\n}\n\nvoid vec4_scalar_mul_fp64(vec2 a[4], vec2 b, out vec2 out_val[4]) {\n  out_val[0] = mul_fp64(a[0], b);\n  out_val[1] = mul_fp64(a[1], b);\n  out_val[2] = mul_fp64(a[2], b);\n  out_val[3] = mul_fp64(a[3], b);\n}\n\nvoid vec4_sum_fp64(vec2 a[4], vec2 b[4], out vec2 out_val[4]) {\n  for (int i = 0; i < 4; i++) {\n    out_val[i] = sum_fp64(a[i], b[i]);\n  }\n}\n\nvoid vec4_dot_fp64(vec2 a[4], vec2 b[4], out vec2 out_val) {\n  vec2 v[4];\n\n  v[0] = mul_fp64(a[0], b[0]);\n  v[1] = mul_fp64(a[1], b[1]);\n  v[2] = mul_fp64(a[2], b[2]);\n  v[3] = mul_fp64(a[3], b[3]);\n\n  out_val = sum_fp64(sum_fp64(v[0], v[1]), sum_fp64(v[2], v[3]));\n}\n\nvoid mat4_vec4_mul_fp64(vec2 b[16], vec2 a[4], out vec2 out_val[4]) {\n  vec2 tmp[4];\n\n  for (int i = 0; i < 4; i++)\n  {\n    for (int j = 0; j < 4; j++)\n    {\n      tmp[j] = b[j + i * 4];\n    }\n    vec4_dot_fp64(a, tmp, out_val[i]);\n  }\n}\n";
	export default _default;

}
declare module 'luma.gl/shadertools/src/modules/fp64/fp64' {
	import { fp64ify, fp64LowPart, fp64ifyMatrix4 } from 'luma.gl/shadertools/src/modules/fp64/fp64-utils';
	export { fp64ify, fp64LowPart, fp64ifyMatrix4 }; function getUniforms(): {
		ONE: number;
	}; const _default: {
		name: string;
		vs: string;
		fs: any;
		fp64ify: typeof fp64ify;
		fp64LowPart: typeof fp64LowPart;
		fp64ifyMatrix4: typeof fp64ifyMatrix4;
		getUniforms: typeof getUniforms;
	};
	export default _default;
	export const fp64arithmetic: {
		name: string;
		vs: string;
		fs: any;
	};
	export const fp64fs: {
		name: string;
		vs: any;
		fs: string;
	};

}
declare module 'luma.gl/shadertools/src/modules/project/project' {
	function getUniforms(opts?: {
		modelMatrix: number[];
		viewMatrix: number[];
		projectionMatrix: number[];
		cameraPositionWorld: number[];
	}, prevUniforms?: {}): {}; const _default: {
		name: string;
		getUniforms: typeof getUniforms;
		vs: string;
		fs: string;
	};
	export default _default;

}
declare module 'luma.gl/shadertools/src/modules/lighting/lighting-common.glsl' {
	const _default: "  // empty\n";
	export default _default;

}
declare module 'luma.gl/shadertools/src/modules/lighting/lighting-vertex.glsl' {
	const _default: "#define LIGHT_MAX 4\n\n/*\n// lighting configuration\nuniform bool enableLights;\nuniform vec3 ambientColor;\nuniform vec3 directionalColor;\nuniform vec3 lightingDirection;\n\n// point lights configuration\nuniform vec3 pointLocation[LIGHT_MAX];\nuniform vec3 pointColor[LIGHT_MAX];\nuniform int numberPoints;\n\n// reflection / refraction configuration\nuniform bool useReflection;\n*/\n\nuniform bool lighting_uEnableLights;\nuniform vec3 lighting_uAmbientColor;\nuniform vec3 lighting_uDirection;\nuniform vec3 lighting_uDirectionalColor;\n\n// point lights configuration\nuniform int  lighting_uPointCount;\nuniform vec3 lighting_uPointLocation[LIGHT_MAX];\nuniform vec3 lighting_uPointColor[LIGHT_MAX];\n\n// reflection / refraction configuration\nuniform bool lighting_uEnableReflections;\n\n// varyings\nvarying vec4 lighting_vPosition;\nvarying vec4 lighting_vNormal;\nvarying vec3 lighting_vColor;\nvarying vec3 lighting_vLightWeighting;\nvarying vec3 lighting_vReflection;\n\nvoid lighting_setPositionAndNormal(vec3 position, vec3 normal) {\n  lighting_vPosition = worldMatrix * vec4(position, 1.);\n  lighting_vNormal = worldInverseTransposeMatrix * vec4(normal, 1.);;\n}\n\nvoid lighting__getLightWeigting() {\n  float directionalLightWeighting = max(dot(lighting_vNormal.xyz, lighting_uDirection), 0.);\n  vec3 pointWeight = vec3(0., 0., 0.);\n  for (int i = 0; i < LIGHT_MAX; i++) {\n    if (i < numberPoints) {\n      vec4 mvLightPosition = viewMatrix * vec4(lighting_uPointLocation[i], 1.);\n      vec3 pointLightDirection = normalize(mvLightPosition.xyz - lighting_vPosition.xyz);\n      pointWeight += max(dot(lighting_vNormal.xyz, pointLightDirection), 0.) * pointColor[i];\n     } else {\n       break;\n     }\n   }\n   return ambientColor + (directionalColor * directionalLightWeighting) + pointWeight;\n}\n\nvoid lighting_apply(vec3 position, vec3 normal) {\n  lighting_setPositionAndNormal(position, normal);\n\n  // lighting code\n  if(!lighting_uEnableLights) {\n    lighting_vLightWeighting = vec3(1., 1., 1.);\n  } else {\n    lighting_vLightWeighting = lighting__getLightWeighting();\n  }\n}\n\nvoid lighting_set_reflection(vec3 position) {\n    // refraction / reflection code\n  if (lighting_uEnableReflections) {\n    lighting_vReflection = (viewInverseMatrix[3] - (worldMatrix * vec4(position, 1.))).xyz;\n  } else {\n    lighting_vReflection = vec3(1., 1., 1.);\n  }\n}\n";
	export default _default;

}
declare module 'luma.gl/shadertools/src/modules/lighting/lighting-fragment.glsl' {
	const _default: "precision highp float;\n\n#define LIGHT_MAX 4\n\nvarying vec3 lighting_vLightWeighting;\n\nvec4 lighting_apply(vec4 color) {\n  // set color from texture\n  return vec4(color.rgb * lighting_vLightWeighting, color.a);\n}\n\n// spec-map.fs\n\nuniform mat4 viewMatrix;\n\n\nvarying vec4 lighting_vColor;\nvarying vec4 lighting_vTransformedNormal;\nvarying vec4 lighting_vPosition;\n\nuniform float shininess;\nuniform bool enableSpecularMap;\nuniform bool enableLights;\n\nuniform vec3 ambientColor;\nuniform vec3 directionalColor;\nuniform vec3 lightingDirection;\n\nuniform vec3 lighting_uPointLocation[LIGHT_MAX];\nuniform vec3 lighting_uPointColor[LIGHT_MAX];\nuniform float lighting_uPointSpecularEnable[LIGHT_MAX];\nuniform vec3 lighting_uPointSpecularColor[LIGHT_MAX];\nuniform int numberPoints;\n\n\nvec3 lighting__calculate_light_weighting() {\n\treturn lighting__calculate_light_weighting(shininess);\n}\n\nvec3 lighting__calculate_light_weighting(shininess) {\n  vec3 normal = vTransformedNormal.xyz;\n  vec3 eyeDirection = normalize(-vPosition.xyz);\n\n  vec3 specularLight = vec3(0., 0., 0.);\n  vec3 diffuseLight = vec3(0., 0., 0.);\n\n  for (int i = 0; i < LIGHT_MAX; i++) {\n    if (i < numberPoints) {\n      vec3 transformedPointLocation = (viewMatrix * vec4(lighting_uPointLocation[i], 1.0)).xyz;\n      vec3 lightDirection = normalize(transformedPointLocation - vPosition.xyz);\n\n      if (lighting_uPointSpecularEnable > 0.) {\n        vec3 reflectionDirection = reflect(-lightDirection, normal);\n        float specularLightWeighting =\n          pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininessVal);\n        specularLight += specularLightWeighting * lighting_uPointSpecularColor[i];\n      }\n\n      float diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);\n      diffuseLight += diffuseLightWeighting * lighting_uPointColor[i];\n    } else {\n      break;\n    }\n  }\n\n  return ambientColor + diffuseLight + specularLight;\n}\n\nvoid lighting_filterColor(fragmentColor) {\n  if (!lighting_enable) {\n  \treturn fragmentColor;\n  } else {\n  \tvec3 lightWeighting = lighting__calculate_light_weighting();\n  \treturn vec4(fragmentColor.rgb * lightWeighting, fragmentColor.a);\n  }\n}\n\n// render-tex.fs\n\nuniform vec3 material_uAmbientColor;\nuniform vec3 material_uDiffuseColor;\nuniform vec3 material_uSpecularColor;\nuniform vec3 material_uEmissiveColor;\n\nuniform bool hasTexture1;\nuniform sampler2D sampler1;\n\nuniform mat4 viewMatrix;\n\nvoid apply_lighting(color) {\n  vec3 ambientLightWeighting = ambientColor;\n\n  vec3 normal = vTransformedNormal.xyz;\n  vec3 eyeDirection = normalize(-vPosition.xyz);\n\n  vec3 specularLight = vec3(0.0, 0.0, 0.0);\n  vec3 diffuseLight = vec3(0.0, 0.0, 0.0);\n\n  for (int i = 0; i < LIGHT_MAX; i++) {\n    if (i < numberPoints) {\n      vec3 transformedPointLocation = (viewMatrix * vec4(pointLocation[i], 1.0)).xyz;\n      vec3 lightDirection = normalize(transformedPointLocation - vPosition.xyz);\n\n      if (enableSpecularHighlights) {\n        vec3 reflectionDirection = reflect(-lightDirection, normal);\n        float specularLightWeighting =\n          pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n        specularLight += specularLightWeighting * pointSpecularColor[i];\n      }\n\n      float diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);\n      diffuseLight += diffuseLightWeighting * pointColor[i];\n    } else {\n        break;\n    }\n  }\n\n  vec3 matAmbientColor = material_uAmbientColor * color.rgb;\n  vec3 matDiffuseColor = material_uDiffuseColor * color.rgb;\n  vec3 matSpecularColor = material_uSpecularColor * color.rgb;\n  vec3 matEmissiveColor = material_uEmissiveColor * color.rgb;\n  gl_FragColor = vec4(\n    matAmbientColor * ambientLightWeighting\n    + matDiffuseColor * diffuseLightWeighting\n    + matSpecularColor * specularLightWeighting\n    + matEmissiveColor,\n    color.a\n  );\n}\n\n/// frag-lighting\n\n  vec3 lightWeighting;\n  if (!enableLights) {\n    lightWeighting = vec3(1.0, 1.0, 1.0);\n  } else {\n    vec3 lightDirection;\n    float specularLightWeighting = 0.0;\n    float diffuseLightWeighting = 0.0;\n    vec3  specularLight = vec3(0.0, 0.0, 0.0);\n    vec3  diffuseLight = vec3(0.0, 0.0, 0.0);\n\n    vec3 transformedPointLocation;\n    vec3 normal = vTransformedNormal.xyz;\n\n    vec3 eyeDirection = normalize(-vPosition.xyz);\n    vec3 reflectionDirection;\n\n    vec3 pointWeight = vec3(0.0, 0.0, 0.0);\n\n    for (int i = 0; i < LIGHT_MAX; i++) {\n      if (i < numberPoints) {\n        transformedPointLocation = (viewMatrix * vec4(pointLocation[i], 1.0)).xyz;\n        lightDirection = normalize(transformedPointLocation - vPosition.xyz);\n\n        if (enableSpecular[i] > 0.0) {\n          reflectionDirection = reflect(-lightDirection, normal);\n          specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n          specularLight += specularLightWeighting * pointSpecularColor[i];\n        }\n\n        diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);\n        diffuseLight += diffuseLightWeighting * pointColor[i];\n      } else {\n        break;\n      }\n    }\n\n    lightWeighting = ambientColor + diffuseLight + specularLight;\n  }\n\n// reflection / refraction configs\nuniform float reflection;\nuniform float refraction;\n\n///\n  // has cube texture then apply reflection\n  // if (hasTextureCube1) {\n  //   vec3 nReflection = normalize(vReflection);\n  //   vec3 reflectionValue;\n  //   if (refraction > 0.0) {\n  //    reflectionValue = refract(nReflection, vNormal.xyz, refraction);\n  //   } else {\n  //    reflectionValue = -reflect(nReflection, vNormal.xyz);\n  //   }\n\n  //   // TODO(nico): check whether this is right.\n  //   vec4 cubeColor = textureCube(samplerCube1,\n  //       vec3(-reflectionValue.x, -reflectionValue.y, reflectionValue.z));\n  //   gl_FragColor = vec4(mix(gl_FragColor.xyz, cubeColor.xyz, reflection), 1.0);\n  // }\n";
	export default _default;

}
declare module 'luma.gl/shadertools/src/modules/lighting/lighting' {
	export const vertexShader: string;
	export const fragmentShader: string;
	export const name = "lighting";
	export const config: {
		MAX_POINT_LIGHTS: number;
	};
	export function getUniforms({ lightingEnable, lightingAmbientColor, lightingDirection, lightingDirectionalColor, lightingPointLights }: {
		lightingEnable?: boolean;
		lightingAmbientColor?: number[];
		lightingDirection?: number[];
		lightingDirectionalColor?: number[];
		lightingPointLights?: any[];
	}): any; const _default: {
		name: string;
		vs: string;
		fs: string;
		getUniforms: typeof getUniforms;
	};
	export default _default;

}
declare module 'luma.gl/shadertools/src/modules/dirlight/dirlight' {
	function getUniforms(opts?: {
		lightDirection: Float32Array;
	}): {}; const _default: {
		name: string;
		vs: any;
		fs: string;
		getUniforms: typeof getUniforms;
		dependencies: {
			name: string;
			getUniforms: (opts?: {
				modelMatrix: number[];
				viewMatrix: number[];
				projectionMatrix: number[];
				cameraPositionWorld: number[];
			}, prevUniforms?: {}) => {};
			vs: string;
			fs: string;
		}[];
	};
	export default _default;

}
declare module 'luma.gl/shadertools/src/modules/picking/picking' {
	function getUniforms(opts?: {
		pickingSelectedColor: any;
		pickingHighlightColor: Uint8Array;
		pickingThreshold: number;
		pickingActive: boolean;
	}): {}; const _default: {
		name: string;
		vs: string;
		fs: string;
		getUniforms: typeof getUniforms;
	};
	export default _default;

}
declare module 'luma.gl/shadertools/src/modules/diffuse/diffuse' {
	function getUniforms(opts?: {
		diffuseTexture: any;
		diffuseColor: number[];
	}): {}; const _default: {
		name: string;
		getUniforms: typeof getUniforms;
		vs: string;
		fs: string;
	};
	export default _default;

}
declare module 'luma.gl/shadertools/src/utils/shader-utils' {
	export function getQualifierDetails(line: any, qualifiers: any): {
		qualifier: any;
		type: any;
		name: any;
	};
	export function getPassthroughFS({ version, input, inputType, output }?: {
		version?: number;
		input: any;
		inputType: any;
		output: any;
	}): string;
	export function typeToChannelSuffix(type: any): "x" | "xy" | "xyz" | "xyzw";
	export function typeToChannelCount(type: any): 1 | 2 | 3 | 4;
	export function convertToVec4(variable: any, type: any): any;

}
declare module 'luma.gl/shadertools/src/modules/transform/transform' {
	const _default: {
		name: string;
		vs: string;
		fs: any;
	};
	export default _default;

}
declare module 'shadertools/src' {
	export { assembleShaders } from 'luma.gl/shadertools/src/lib/assemble-shaders';
	export { registerShaderModules, setDefaultShaderModules } from 'luma.gl/shadertools/src/lib/resolve-modules';
	export { combineInjects } from 'luma.gl/shadertools/src/lib/inject-shader';
	export { default as fp32 } from 'luma.gl/shadertools/src/modules/fp32/fp32';
	export { default as fp64 } from 'luma.gl/shadertools/src/modules/fp64/fp64';
	export { default as project } from 'luma.gl/shadertools/src/modules/project/project';
	export { default as lighting } from 'luma.gl/shadertools/src/modules/lighting/lighting';
	export { default as dirlight } from 'luma.gl/shadertools/src/modules/dirlight/dirlight';
	export { default as picking } from 'luma.gl/shadertools/src/modules/picking/picking';
	export { default as diffuse } from 'luma.gl/shadertools/src/modules/diffuse/diffuse';
	export { getQualifierDetails, getPassthroughFS, typeToChannelSuffix, typeToChannelCount, convertToVec4 } from 'luma.gl/shadertools/src/utils/shader-utils';
	export { default as _transform } from 'luma.gl/shadertools/src/modules/transform/transform';

}
declare module 'luma.gl/debug/seer-integration' {
	/**
	 * Add a model to our cache indexed by id
	 */
	export const addModel: (model: any) => void;
	/**
	 * Log a model uniforms and attributes.
	 */
	export const logModel: (model: any, uniforms: any) => void;
	/**
	 * Remove a previously set model from the cache
	 */
	export const removeModel: (id: any) => void;
	/**
	 * Create an override on the specify layer, indexed by a valuePath array.
	 * Do nothing in case Seer as not been initialized to prevent any preformance drawback.
	 */
	export const setOverride: (id: any, valuePath: any, value: any) => void;
	/**
	 * Apply overrides to a specific model's uniforms
	 */
	export const getOverrides: (id: any, uniforms: any) => void;

}
declare module 'luma.gl/webgl-debug/debug-uniforms' {
	export function getDebugTableForUniforms({ header, program, uniforms, undefinedOnly }?: {
		header?: string;
		program: any;
		uniforms: any;
		undefinedOnly?: boolean;
	}): {
		table: {};
		count: number;
		unusedTable: {};
		unusedCount: number;
	};

}
declare module 'luma.gl/webgl-debug/debug-vertex-array' {
	export function getDebugTableForVertexArray({ vertexArray, header }?: {
		vertexArray: any;
		header?: string;
	}): {};

}
declare module 'luma.gl/webgl-debug/debug-program-configuration' {
	export function getDebugTableForProgramConfiguration(config: any): {};

}
declare module 'luma.gl/core/model' {
	import Object3D from 'luma.gl/core/object-3d';
	export default class Model extends Object3D {
		constructor(gl: any, props?: {});
		initialize(props?: {}): void;
		setProps(props: any): void;
		delete(): void;
		destroy(): void;
		readonly vertexCount: any;
		readonly drawMode: any;
		getNeedsRedraw({ clearRedrawFlags }?: {
			clearRedrawFlags?: boolean;
		}): boolean;
		getDrawMode(): any;
		getVertexCount(): any;
		getInstanceCount(): any;
		getProgram(): any;
		getAttributes(): any;
		getUniforms(): any;
		setNeedsRedraw(redraw?: boolean): this;
		setDrawMode(drawMode: any): this;
		setVertexCount(vertexCount: any): this;
		setInstanceCount(instanceCount: any): this;
		setGeometry(geometry: any): this;
		setAttributes(attributes?: {}): this;
		setUniforms(uniforms?: {}, samplers?: {}): void;
		_setAnimationProps(animationProps: any): void;
		updateModuleSettings(opts: any): void;
		clear(opts: any): this;
		draw(opts?: {}): this;
		transform(opts?: {}): this;
		render(uniforms?: {}): this;
		_createProgram({ vs, fs, modules, defines, inject, shaderCache, varyings, bufferMode, program }: {
			vs?: any;
			fs?: any;
			modules?: any;
			defines?: {};
			inject?: {};
			shaderCache?: any;
			varyings?: any;
			bufferMode?: any;
			program?: any;
		}): any;
		_checkForDeprecatedUniforms(uniforms: any): void;
		_refreshAnimationProps(animationProps: any): void;
		_evaluateAnimateUniforms(animationProps: any): {};
		_extractAnimatedUniforms(uniforms: any): any;
		_setFeedbackBuffers(feedbackBuffers?: {}): this;
		_timerQueryStart(): void;
		_timerQueryEnd(): void;
		_createBuffersFromAttributeDescriptors(attributes: any): {};
		_logDrawCallStart(priority: any): any;
		_logDrawCallEnd(priority: any, vertexArray: any, uniforms: any, framebuffer: any): void;
	}

}
declare module 'luma.gl/core/animation-loop' {
	export default class AnimationLoop {
		constructor(props?: {});
		setNeedsRedraw(reason: any): this;
		setProps(props: any): this;
		start(opts?: {}): this;
		stop(): this;
		onCreateContext(...args: any[]): any;
		onInitialize(...args: any[]): any;
		onRender(...args: any[]): any;
		onFinalize(...args: any[]): any;
		getHTMLControlValue(id: any, defaultValue?: number): number;
		setViewParameters(): this;
		_clearNeedsRedraw(): void;
		_setupFrame(): void;
	    /**
	     * @private
	     * Handles a render loop frame - updates context and calls the application
	     * callback
	     */
		_renderFrame(): void;
		_initializeCallbackData(): void;
		_updateCallbackData(): void;
		_finalizeCallbackData(): void;
		_addCallbackData(appContext: any): void;
		_createWebGLContext(opts: any): void;
		_createInfoDiv(): void;
		_getSizeAndAspect(): {
			width: any;
			height: any;
			aspect: number;
		};
		_resizeViewport(): void;
		_resizeCanvasDrawingBuffer(): void;
		_createFramebuffer(): void;
		_resizeFramebuffer(): void;
		_startEventHandling(): void;
		_onMousemove(e: any): void;
		_onMouseleave(e: any): void;
	}

}
declare module 'luma.gl/core/pick-models' {
	export default function pickModels(gl: any, props: any): any;

}
declare module 'luma.gl/core/picking-colors' {
	export function encodePickingColor(i: any): number[];
	export function decodePickingColor(color: any): number;
	export function getNullPickingColor(): Uint8Array;

}
declare module 'luma.gl/core/transform-shader-utils' {
	export function updateForTextures({ vs, sourceTextureMap, targetTextureVarying, targetTexture }: {
		vs: any;
		sourceTextureMap: any;
		targetTextureVarying: any;
		targetTexture: any;
	}): {
		vs: any;
		uniforms: {};
		targetTextureType: any;
		inject: {};
		samplerTextureMap: {};
	};
	export function getVaryingType(line: any, varying: any): any;
	export function processAttributeDefinition(line: any, textureMap: any): {
		updatedLine: string;
		inject: {
			'vs:#decl': string;
			'vs:#main-start': string;
		};
		uniforms: {};
		samplerTextureMap: {};
	};

}
declare module 'luma.gl/core/transform' {
	import Buffer from 'luma.gl/webgl/buffer';
	export default class Transform {
		static isSupported(gl: any): boolean;
		constructor(gl: any, props?: {});
		delete(): void;
		getBuffer(varyingName?: any): any;
		_getTargetTexture(): any;
		getData({ varyingName, packed }?: {
			varyingName?: any;
			packed?: boolean;
		}): any;
		_getInputs(): {
			attributes: any;
			samplerUniforms: {};
		};
		run(opts?: {}): void;
		swapBuffers(): void;
		swap(): void;
		update(opts?: {}): void;
		_setSourceTextureParameters(): void;
		_setElementCount(elementCount: any): void;
		_initialize(props?: {}): void;
		_validateProps(props: any): {
			feedbackBuffers: any;
			feedbackMap: any;
		};
		_setupBuffers({ sourceBuffers, feedbackBuffers }: {
			sourceBuffers?: any;
			feedbackBuffers?: any;
		}): void;
		_setupTextures(props?: {}): void;
		_getDestinationTexture(textureOrAttribute: any): any;
		_createFeedbackBuffers({ feedbackBuffers }: {
			feedbackBuffers: any;
		}): void;
		_createNewBuffer(name: any, opts: any): Buffer;
		_setupSwapBuffers(): void;
		_setupSwapTextures(): void;
		_buildModel(props?: {}): void;
		_setupTransformFeedback(): void;
		_setupFramebuffers(): void;
		_updateElementIDBuffer(elementCount: any): void;
		_getShaders(props?: {}): {
			vs: any;
			fs: string;
			modules: any;
			uniforms: {};
			inject: {};
			samplerTextureMap: {};
		};
		_processVertexShader(vs: any): {
			vs: any;
			uniforms: {};
			targetTextureType: any;
			inject: {};
			samplerTextureMap: {};
		};
	}

}
declare module 'luma.gl/core/shader-cache' {
	import Program from 'luma.gl/webgl/program';
	export default class ShaderCache {
	    /**
	     * A cache of compiled shaders, keyed by shader source strings.
	     * Compilation of long shaders can be time consuming.
	     * By using this class, the application can ensure that each shader
	     * is only compiled once.
	     */
		constructor({ gl, _cachePrograms }?: {
			gl: any;
			_cachePrograms?: boolean;
		});
	    /**
	     * Deletes shader references
	     * @return {ShaderCache} - returns this for chaining
	     */
		delete(): this;
	    /**
	     * Returns a compiled `VertexShader` object corresponding to the supplied
	     * GLSL source code string, if possible from cache.
	     *
	     * @param {WebGLRenderingContext} gl - gl context
	     * @param {String} source - Source code for shader
	     * @return {VertexShader} - a compiled vertex shader
	     */
		getVertexShader(gl: any, source: any): any;
	    /**
	     * Returns a compiled `VertexShader` object corresponding to the supplied
	     * GLSL source code string, if possible from cache.
	     * @param {WebGLRenderingContext} gl - gl context
	     * @param {String} source - Source code for shader
	     * @return {FragmentShader} - a compiled fragment shader, possibly from chache
	     */
		getFragmentShader(gl: any, source: any): any;
		getProgram(gl: any, opts: any): any;
		_getProgramKey(opts: any): string;
		_checkProgramProp(program: any): boolean;
		_createNewProgram(gl: any, opts: any): Program;
		_resetProgram(program: any, opts: any): void;
		_compareContexts(gl1: any, gl2: any): boolean;
	}

}
declare module 'luma.gl/core/animation-loop-proxy' {
	export default class AnimationLoopProxy {
		static createWorker(animationLoop: any): (self: any) => void;
		constructor(worker: any, opts?: {});
		setProps(props: any): this;
		start(opts?: {}): this;
		stop(): this;
		_onMessage(evt: any): void;
		_onEvent(evt: any): void;
		_updateFrame(): void;
		_createAndTransferCanvas(opts: any): void;
		_resizeCanvasDrawingBuffer(): void;
	}

}
declare module 'luma.gl/multipass/pass' {
	export default class Pass {
		constructor(gl: any, props: any);
		setProps(props: any): void;
		render(renderState: any, animationProps: any): void;
	    /**
	     * Renders the effect.
	     * This is an abstract method that should be overridden.
	     * @param {Framebuffer} inputBuffer - Frame buffer that contains the result of the previous pass
	     * @param {Framebuffer} outputBuffer - Frame buffer that serves as the output render target
	     */
		_renderPass({ gl, inputBuffer, outputBuffer, animationProps }: {
			gl: any;
			inputBuffer: any;
			outputBuffer: any;
			animationProps: any;
		} | any): void;
	}

}
declare module 'luma.gl/multipass/composite-pass' {
	import Pass from 'luma.gl/multipass/pass';
	export default class CompositePass extends Pass {
		constructor(gl: any, props: any);
		render(...args: any[]): void;
	}

}
declare module 'luma.gl/multipass/render-state' {
	export default class RenderState {
		constructor(gl: any, props?: {});
		reset(): void;
		_swapFramebuffers(): void;
	}

}
declare module 'luma.gl/multipass/multi-pass-renderer' {
	import CompositePass from 'luma.gl/multipass/composite-pass';
	export default class MultiPassRenderer extends CompositePass {
		constructor(gl: any, props: any);
		render(animationProps: any): this;
	}

}
declare module 'luma.gl/multipass/clear-pass' {
	import Pass from 'luma.gl/multipass/pass';
	export default class ClearPass extends Pass {
		constructor(gl: any, props?: {});
		_renderPass({ gl }: {
			gl: any;
		}): void;
	}

}
declare module 'luma.gl/multipass/render-pass' {
	import Pass from 'luma.gl/multipass/pass';
	export default class RenderPass extends Pass {
		constructor(gl: any, props?: {});
		_renderPass({ animationProps }: {
			animationProps: any;
		}): void;
	}

}
declare module 'luma.gl/geometry/truncated-cone-geometry' {
	import Geometry from 'luma.gl/geometry/geometry';
	export default class TruncatedConeGeometry extends Geometry {
		constructor(opts?: {});
	}

}
declare module 'luma.gl/geometry/cone-geometry' {
	import TruncatedConeGeometry from 'luma.gl/geometry/truncated-cone-geometry';
	export default class ConeGeometry extends TruncatedConeGeometry {
		constructor(opts?: {});
	}

}
declare module 'luma.gl/geometry/cube-geometry' {
	import Geometry from 'luma.gl/geometry/geometry';
	export default class CubeGeometry extends Geometry {
		constructor(opts?: {});
	}

}
declare module 'luma.gl/geometry/cylinder-geometry' {
	import TruncatedConeGeometry from 'luma.gl/geometry/truncated-cone-geometry';
	export default class CylinderGeometry extends TruncatedConeGeometry {
		constructor(opts?: {});
	}

}
declare module 'luma.gl/geometry/ico-sphere-geometry' {
	import Geometry from 'luma.gl/geometry/geometry';
	export default class IcoSphereGeometry extends Geometry {
		constructor(opts?: {});
	}

}
declare module 'luma.gl/geometry/plane-geometry' {
	import Geometry from 'luma.gl/geometry/geometry';
	export default class PlaneGeometry extends Geometry {
		constructor(opts?: {});
	}

}
declare module 'luma.gl/geometry/sphere-geometry' {
	import Geometry from 'luma.gl/geometry/geometry';
	export default class SphereGeometry extends Geometry {
		constructor(opts?: {});
	}

}
declare module 'geometry' {
	export { default as Geometry } from 'luma.gl/geometry/geometry';
	export { default as ConeGeometry } from 'luma.gl/geometry/cone-geometry';
	export { default as CubeGeometry } from 'luma.gl/geometry/cube-geometry';
	export { default as CylinderGeometry } from 'luma.gl/geometry/cylinder-geometry';
	export { default as IcoSphereGeometry } from 'luma.gl/geometry/ico-sphere-geometry';
	export { default as PlaneGeometry } from 'luma.gl/geometry/plane-geometry';
	export { default as SphereGeometry } from 'luma.gl/geometry/sphere-geometry';
	export { default as TruncatedConeGeometry } from 'luma.gl/geometry/truncated-cone-geometry';

}
declare module 'luma.gl/core' {
	export { default as AnimationLoop } from 'luma.gl/core/animation-loop';
	export { default as AnimationLoopProxy } from 'luma.gl/core/animation-loop-proxy';
	export { default as Model } from 'luma.gl/core/model';

}
declare module 'luma.gl/models/cone' {
	import { Model } from 'luma.gl/core';
	export default class Cone extends Model {
		constructor(gl: any, opts?: {});
	}

}
declare module 'luma.gl/models/cube' {
	import { Model } from 'luma.gl/core';
	export default class Cube extends Model {
		constructor(gl: any, opts?: {});
	}

}
declare module 'luma.gl/models/cylinder' {
	import Model from 'luma.gl/core/model';
	export default class Cylinder extends Model {
		constructor(gl: any, opts?: {});
	}

}
declare module 'luma.gl/models/ico-sphere' {
	import { Model } from 'luma.gl/core';
	export default class IcoSphere extends Model {
		constructor(gl: any, opts?: {});
	}

}
declare module 'luma.gl/models/plane' {
	import Model from 'luma.gl/core/model';
	export default class Plane extends Model {
		constructor(gl: any, opts?: {});
	}

}
declare module 'luma.gl/models/sphere' {
	import { Model } from 'luma.gl/core';
	export default class Sphere extends Model {
		constructor(gl: any, opts?: {});
	}

}
declare module 'luma.gl/models/truncated-cone' {
	import { Model } from 'luma.gl/core';
	export default class TruncatedCone extends Model {
		constructor(gl: any, opts?: {});
	}

}
declare module 'luma.gl/models/clip-space' {
	import { Model } from 'luma.gl/core';
	export default class ClipSpace extends Model {
		constructor(gl: any, opts: any);
	}

}
declare module 'models' {
	export { default as Cone } from 'luma.gl/models/cone';
	export { default as Cube } from 'luma.gl/models/cube';
	export { default as Cylinder } from 'luma.gl/models/cylinder';
	export { default as IcoSphere } from 'luma.gl/models/ico-sphere';
	export { default as Plane } from 'luma.gl/models/plane';
	export { default as Sphere } from 'luma.gl/models/sphere';
	export { default as TruncatedCone } from 'luma.gl/models/truncated-cone';
	export { default as ClipSpace } from 'luma.gl/models/clip-space';

}
declare module 'luma.gl/multipass/copy-pass' {
	import Pass from 'luma.gl/multipass/pass';
	export default class CopyPass extends Pass {
		constructor(gl: any, props?: {});
		_renderPass({ inputBuffer }: {
			inputBuffer: any;
		}): void;
	}

}
declare module 'luma.gl/multipass/texture-pass' {
	import Pass from 'luma.gl/multipass/pass';
	export default class TexturePass extends Pass {
		constructor(gl: any, options?: {});
		_renderPass(): void;
	}

}
declare module 'luma.gl/multipass/picking-pass' {
	import Pass from 'luma.gl/multipass/pass';
	export default class PickingPass extends Pass {
		constructor(gl: any, props?: {});
		_renderPass({ gl, inputBuffer, animationProps }: {
			gl: any;
			inputBuffer: any;
			animationProps: any;
		}): void;
	}

}
declare module 'luma.gl/shadertools/src/lib/filters/prop-types' {
	export function parsePropTypes(propDefs: any): {
		propTypes: {};
		defaultProps: {};
	};

}
declare module 'luma.gl/shadertools/src/lib/filters/normalize-module' {
	export function normalizeShaderModule(module: any): any;

}
declare module 'luma.gl/multipass/shader-module-pass' {
	import CompositePass from 'luma.gl/multipass/composite-pass';
	export default class ShaderModulePass extends CompositePass {
		constructor(gl: any, module: any, props?: {});
		_renderPass({ inputBuffer, swapBuffers }: {
			inputBuffer: any;
			swapBuffers: any;
		}): void;
	}

}
declare module 'luma.gl/multipass/canvas' {
	import 'luma.gl/debug';
	export default class Canvas {
		constructor();
		installFiltersAsMethods(filters: any): void;
		setTexture(element: any): this;
		resize(gl: any, width: any, height: any): void;
		replace(node: any): this;
		draw(): this;
		update(): this;
		filter(shaderModule: any, props: any): this;
		getPixelArray(): Uint8Array;
		_initialize(width: any, height: any): void;
	}

}
declare module 'luma.gl/io/browser-request-file' {
	export function requestFile(opts: any): Promise<{}>;

}
declare module 'luma.gl/io/browser-load' {
	export function setPathPrefix(prefix: any): void;
	export function loadFile(url: any, opts: any): Promise<{}>;
	export function loadImage(url: any, opts: any): Promise<{}>;

}
declare module 'luma.gl/io/load-files' {
	import { Program, Texture2D } from 'luma.gl/webgl';
	import { Model } from 'luma.gl/core';
	export function loadTexture(gl: any, url: any, opts?: {}): Promise<Texture2D[]>;
	export function loadFiles(opts?: {}): Promise<[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]>;
	export function loadImages(opts?: {}): Promise<[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]>;
	export function loadTextures(gl: any, opts?: {}): Promise<Texture2D[]>;
	export function loadProgram(gl: any, opts?: {}): Promise<Program>;
	export function loadModel(gl: any, opts?: {}): Promise<Model>;
	export function parseModel(gl: any, opts?: {}): Model;

}
declare module 'luma.gl/io' {
	export { setPathPrefix, loadFile, loadImage } from 'luma.gl/io/browser-load';
	export { loadFiles, loadImages, loadTextures } from 'luma.gl/io/load-files';
	export { loadProgram, loadModel, parseModel } from 'luma.gl/io/load-files';

}
declare module 'luma.gl/shadertools/src/modules/project2/project2.vertex.glsl' {
	const _default: "uniform mat4 u_MVPMatrix;\nuniform mat4 u_ModelMatrix;\nuniform mat4 u_NormalMatrix;\n";
	export default _default;

}
declare module 'luma.gl/shadertools/src/modules/project2/project2' {
	const _default: {
		name: string;
		vs: string;
		fs: string;
	};
	export default _default;

}
declare module 'luma.gl/shadertools/src/modules/pbr/pbr-vertex.glsl' {
	const _default: "varying vec3 pbr_vPosition;\nvarying vec2 pbr_vUV;\n\n#ifdef HAS_NORMALS\n# ifdef HAS_TANGENTS\nvarying mat3 pbr_vTBN;\n# else\nvarying vec3 pbr_vNormal;\n# endif\n#endif\n\nvoid pbr_setPositionNormalTangentUV(vec4 position, vec4 normal, vec4 tangent, vec2 uv)\n{\n  vec4 pos = u_ModelMatrix * position;\n  pbr_vPosition = vec3(pos.xyz) / pos.w;\n\n#ifdef HAS_NORMALS\n#ifdef HAS_TANGENTS\n  vec3 normalW = normalize(vec3(u_NormalMatrix * vec4(normal.xyz, 0.0)));\n  vec3 tangentW = normalize(vec3(u_ModelMatrix * vec4(tangent.xyz, 0.0)));\n  vec3 bitangentW = cross(normalW, tangentW) * tangent.w;\n  pbr_vTBN = mat3(tangentW, bitangentW, normalW);\n#else // HAS_TANGENTS != 1\n  pbr_vNormal = normalize(vec3(u_ModelMatrix * vec4(normal.xyz, 0.0)));\n#endif\n#endif\n\n#ifdef HAS_UV\n  pbr_vUV = uv;\n#else\n  pbr_vUV = vec2(0.,0.);\n#endif\n}\n";
	export default _default;

}
declare module 'luma.gl/shadertools/src/modules/pbr/pbr-fragment.glsl' {
	const _default: "#extension GL_EXT_shader_texture_lod: enable\n#extension GL_OES_standard_derivatives : enable\n\nprecision highp float;\n\nuniform vec3 u_LightDirection;\nuniform vec3 u_LightColor;\n\n#ifdef USE_IBL\nuniform samplerCube u_DiffuseEnvSampler;\nuniform samplerCube u_SpecularEnvSampler;\nuniform sampler2D u_brdfLUT;\n#endif\n\n#ifdef HAS_BASECOLORMAP\nuniform sampler2D u_BaseColorSampler;\n#endif\n#ifdef HAS_NORMALMAP\nuniform sampler2D u_NormalSampler;\nuniform float u_NormalScale;\n#endif\n#ifdef HAS_EMISSIVEMAP\nuniform sampler2D u_EmissiveSampler;\nuniform vec3 u_EmissiveFactor;\n#endif\n#ifdef HAS_METALROUGHNESSMAP\nuniform sampler2D u_MetallicRoughnessSampler;\n#endif\n#ifdef HAS_OCCLUSIONMAP\nuniform sampler2D u_OcclusionSampler;\nuniform float u_OcclusionStrength;\n#endif\n\nuniform vec2 u_MetallicRoughnessValues;\nuniform vec4 u_BaseColorFactor;\n\nuniform vec3 u_Camera;\n\n// debugging flags used for shader output of intermediate PBR variables\nuniform vec4 u_ScaleDiffBaseMR;\nuniform vec4 u_ScaleFGDSpec;\nuniform vec4 u_ScaleIBLAmbient;\n\nvarying vec3 pbr_vPosition;\n\nvarying vec2 pbr_vUV;\n\n#ifdef HAS_NORMALS\n#ifdef HAS_TANGENTS\nvarying mat3 pbr_vTBN;\n#else\nvarying vec3 pbr_vNormal;\n#endif\n#endif\n\n// Encapsulate the various inputs used by the various functions in the shading equation\n// We store values in this struct to simplify the integration of alternative implementations\n// of the shading terms, outlined in the Readme.MD Appendix.\nstruct PBRInfo\n{\n  float NdotL;                  // cos angle between normal and light direction\n  float NdotV;                  // cos angle between normal and view direction\n  float NdotH;                  // cos angle between normal and half vector\n  float LdotH;                  // cos angle between light direction and half vector\n  float VdotH;                  // cos angle between view direction and half vector\n  float perceptualRoughness;    // roughness value, as authored by the model creator (input to shader)\n  float metalness;              // metallic value at the surface\n  vec3 reflectance0;            // full reflectance color (normal incidence angle)\n  vec3 reflectance90;           // reflectance color at grazing angle\n  float alphaRoughness;         // roughness mapped to a more linear change in the roughness (proposed by [2])\n  vec3 diffuseColor;            // color contribution from diffuse lighting\n  vec3 specularColor;           // color contribution from specular lighting\n};\n\nconst float M_PI = 3.141592653589793;\nconst float c_MinRoughness = 0.04;\n\nvec4 SRGBtoLINEAR(vec4 srgbIn)\n{\n  #ifdef MANUAL_SRGB\n  #ifdef SRGB_FAST_APPROXIMATION\n  vec3 linOut = pow(srgbIn.xyz,vec3(2.2));\n  #else //SRGB_FAST_APPROXIMATION\n  vec3 bLess = step(vec3(0.04045),srgbIn.xyz);\n  vec3 linOut = mix( srgbIn.xyz/vec3(12.92), pow((srgbIn.xyz+vec3(0.055))/vec3(1.055),vec3(2.4)), bLess );\n  #endif //SRGB_FAST_APPROXIMATION\n  return vec4(linOut,srgbIn.w);;\n  #else //MANUAL_SRGB\n  return srgbIn;\n  #endif //MANUAL_SRGB\n}\n\n// Find the normal for this fragment, pulling either from a predefined normal map\n// or from the interpolated mesh normal and tangent attributes.\nvec3 getNormal()\n{\n  // Retrieve the tangent space matrix\n#ifndef HAS_TANGENTS\n  vec3 pos_dx = dFdx(pbr_vPosition);\n  vec3 pos_dy = dFdy(pbr_vPosition);\n  vec3 tex_dx = dFdx(vec3(pbr_vUV, 0.0));\n  vec3 tex_dy = dFdy(vec3(pbr_vUV, 0.0));\n  vec3 t = (tex_dy.t * pos_dx - tex_dx.t * pos_dy) / (tex_dx.s * tex_dy.t - tex_dy.s * tex_dx.t);\n\n#ifdef HAS_NORMALS\n  vec3 ng = normalize(pbr_vNormal);\n#else\n  vec3 ng = cross(pos_dx, pos_dy);\n#endif\n\n  t = normalize(t - ng * dot(ng, t));\n  vec3 b = normalize(cross(ng, t));\n  mat3 tbn = mat3(t, b, ng);\n#else // HAS_TANGENTS\n  mat3 tbn = pbr_vTBN;\n#endif\n\n#ifdef HAS_NORMALMAP\n  vec3 n = texture2D(u_NormalSampler, pbr_vUV).rgb;\n  n = normalize(tbn * ((2.0 * n - 1.0) * vec3(u_NormalScale, u_NormalScale, 1.0)));\n#else\n  // The tbn matrix is linearly interpolated, so we need to re-normalize\n  vec3 n = normalize(tbn[2].xyz);\n#endif\n\n  return n;\n}\n\n// Calculation of the lighting contribution from an optional Image Based Light source.\n// Precomputed Environment Maps are required uniform inputs and are computed as outlined in [1].\n// See our README.md on Environment Maps [3] for additional discussion.\n#ifdef USE_IBL\nvec3 getIBLContribution(PBRInfo pbrInputs, vec3 n, vec3 reflection)\n{\n  float mipCount = 9.0; // resolution of 512x512\n  float lod = (pbrInputs.perceptualRoughness * mipCount);\n  // retrieve a scale and bias to F0. See [1], Figure 3\n  vec3 brdf = SRGBtoLINEAR(texture2D(u_brdfLUT,\n    vec2(pbrInputs.NdotV, 1.0 - pbrInputs.perceptualRoughness))).rgb;\n  vec3 diffuseLight = SRGBtoLINEAR(textureCube(u_DiffuseEnvSampler, n)).rgb;\n\n#ifdef USE_TEX_LOD\n  vec3 specularLight = SRGBtoLINEAR(textureCubeLodEXT(u_SpecularEnvSampler, reflection, lod)).rgb;\n#else\n  vec3 specularLight = SRGBtoLINEAR(textureCube(u_SpecularEnvSampler, reflection)).rgb;\n#endif\n\n  vec3 diffuse = diffuseLight * pbrInputs.diffuseColor;\n  vec3 specular = specularLight * (pbrInputs.specularColor * brdf.x + brdf.y);\n\n  // For presentation, this allows us to disable IBL terms\n  diffuse *= u_ScaleIBLAmbient.x;\n  specular *= u_ScaleIBLAmbient.y;\n\n  return diffuse + specular;\n}\n#endif\n\n// Basic Lambertian diffuse\n// Implementation from Lambert's Photometria https://archive.org/details/lambertsphotome00lambgoog\n// See also [1], Equation 1\nvec3 diffuse(PBRInfo pbrInputs)\n{\n  return pbrInputs.diffuseColor / M_PI;\n}\n\n// The following equation models the Fresnel reflectance term of the spec equation (aka F())\n// Implementation of fresnel from [4], Equation 15\nvec3 specularReflection(PBRInfo pbrInputs)\n{\n  return pbrInputs.reflectance0 +\n    (pbrInputs.reflectance90 - pbrInputs.reflectance0) *\n    pow(clamp(1.0 - pbrInputs.VdotH, 0.0, 1.0), 5.0);\n}\n\n// This calculates the specular geometric attenuation (aka G()),\n// where rougher material will reflect less light back to the viewer.\n// This implementation is based on [1] Equation 4, and we adopt their modifications to\n// alphaRoughness as input as originally proposed in [2].\nfloat geometricOcclusion(PBRInfo pbrInputs)\n{\n  float NdotL = pbrInputs.NdotL;\n  float NdotV = pbrInputs.NdotV;\n  float r = pbrInputs.alphaRoughness;\n\n  float attenuationL = 2.0 * NdotL / (NdotL + sqrt(r * r + (1.0 - r * r) * (NdotL * NdotL)));\n  float attenuationV = 2.0 * NdotV / (NdotV + sqrt(r * r + (1.0 - r * r) * (NdotV * NdotV)));\n  return attenuationL * attenuationV;\n}\n\n// The following equation(s) model the distribution of microfacet normals across\n// the area being drawn (aka D())\n// Implementation from \"Average Irregularity Representation of a Roughened Surface\n// for Ray Reflection\" by T. S. Trowbridge, and K. P. Reitz\n// Follows the distribution function recommended in the SIGGRAPH 2013 course notes\n// from EPIC Games [1], Equation 3.\nfloat microfacetDistribution(PBRInfo pbrInputs)\n{\n  float roughnessSq = pbrInputs.alphaRoughness * pbrInputs.alphaRoughness;\n  float f = (pbrInputs.NdotH * roughnessSq - pbrInputs.NdotH) * pbrInputs.NdotH + 1.0;\n  return roughnessSq / (M_PI * f * f);\n}\n\nvec4 pbr_filterColor(vec4 colorUnused)\n{\n  // Metallic and Roughness material properties are packed together\n  // In glTF, these factors can be specified by fixed scalar values\n  // or from a metallic-roughness map\n  float perceptualRoughness = u_MetallicRoughnessValues.y;\n  float metallic = u_MetallicRoughnessValues.x;\n#ifdef HAS_METALROUGHNESSMAP\n  // Roughness is stored in the 'g' channel, metallic is stored in the 'b' channel.\n  // This layout intentionally reserves the 'r' channel for (optional) occlusion map data\n  vec4 mrSample = texture2D(u_MetallicRoughnessSampler, pbr_vUV);\n  perceptualRoughness = mrSample.g * perceptualRoughness;\n  metallic = mrSample.b * metallic;\n#endif\n  perceptualRoughness = clamp(perceptualRoughness, c_MinRoughness, 1.0);\n  metallic = clamp(metallic, 0.0, 1.0);\n  // Roughness is authored as perceptual roughness; as is convention,\n  // convert to material roughness by squaring the perceptual roughness [2].\n  float alphaRoughness = perceptualRoughness * perceptualRoughness;\n\n  // The albedo may be defined from a base texture or a flat color\n#ifdef HAS_BASECOLORMAP\n  vec4 baseColor = SRGBtoLINEAR(texture2D(u_BaseColorSampler, pbr_vUV)) * u_BaseColorFactor;\n#else\n  vec4 baseColor = u_BaseColorFactor;\n#endif\n\n  vec3 f0 = vec3(0.04);\n  vec3 diffuseColor = baseColor.rgb * (vec3(1.0) - f0);\n  diffuseColor *= 1.0 - metallic;\n  vec3 specularColor = mix(f0, baseColor.rgb, metallic);\n\n  // Compute reflectance.\n  float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);\n\n  // For typical incident reflectance range (between 4% to 100%) set the grazing\n  // reflectance to 100% for typical fresnel effect.\n  // For very low reflectance range on highly diffuse objects (below 4%),\n  // incrementally reduce grazing reflecance to 0%.\n  float reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);\n  vec3 specularEnvironmentR0 = specularColor.rgb;\n  vec3 specularEnvironmentR90 = vec3(1.0, 1.0, 1.0) * reflectance90;\n\n  vec3 n = getNormal();                             // normal at surface point\n  vec3 v = normalize(u_Camera - pbr_vPosition);        // Vector from surface point to camera\n  vec3 l = normalize(u_LightDirection);             // Vector from surface point to light\n  vec3 h = normalize(l+v);                          // Half vector between both l and v\n  vec3 reflection = -normalize(reflect(v, n));\n\n  float NdotL = clamp(dot(n, l), 0.001, 1.0);\n  float NdotV = clamp(abs(dot(n, v)), 0.001, 1.0);\n  float NdotH = clamp(dot(n, h), 0.0, 1.0);\n  float LdotH = clamp(dot(l, h), 0.0, 1.0);\n  float VdotH = clamp(dot(v, h), 0.0, 1.0);\n\n  PBRInfo pbrInputs = PBRInfo(\n    NdotL,\n    NdotV,\n    NdotH,\n    LdotH,\n    VdotH,\n    perceptualRoughness,\n    metallic,\n    specularEnvironmentR0,\n    specularEnvironmentR90,\n    alphaRoughness,\n    diffuseColor,\n    specularColor\n  );\n\n  // Calculate the shading terms for the microfacet specular shading model\n  vec3 F = specularReflection(pbrInputs);\n  float G = geometricOcclusion(pbrInputs);\n  float D = microfacetDistribution(pbrInputs);\n\n  // Calculation of analytical lighting contribution\n  vec3 diffuseContrib = (1.0 - F) * diffuse(pbrInputs);\n  vec3 specContrib = F * G * D / (4.0 * NdotL * NdotV);\n  // Obtain final intensity as reflectance (BRDF) scaled by the energy of the light (cosine law)\n  vec3 color = NdotL * u_LightColor * (diffuseContrib + specContrib);\n\n  // Calculate lighting contribution from image based lighting source (IBL)\n#ifdef USE_IBL\n  color += getIBLContribution(pbrInputs, n, reflection);\n#endif\n\n  // Apply optional PBR terms for additional (optional) shading\n#ifdef HAS_OCCLUSIONMAP\n  float ao = texture2D(u_OcclusionSampler, pbr_vUV).r;\n  color = mix(color, color * ao, u_OcclusionStrength);\n#endif\n\n#ifdef HAS_EMISSIVEMAP\n  vec3 emissive = SRGBtoLINEAR(texture2D(u_EmissiveSampler, pbr_vUV)).rgb * u_EmissiveFactor;\n  color += emissive;\n#endif\n\n  // This section uses mix to override final color for reference app visualization\n  // of various parameters in the lighting equation.\n  color = mix(color, F, u_ScaleFGDSpec.x);\n  color = mix(color, vec3(G), u_ScaleFGDSpec.y);\n  color = mix(color, vec3(D), u_ScaleFGDSpec.z);\n  color = mix(color, specContrib, u_ScaleFGDSpec.w);\n\n  color = mix(color, diffuseContrib, u_ScaleDiffBaseMR.x);\n  color = mix(color, baseColor.rgb, u_ScaleDiffBaseMR.y);\n  color = mix(color, vec3(metallic), u_ScaleDiffBaseMR.z);\n  color = mix(color, vec3(perceptualRoughness), u_ScaleDiffBaseMR.w);\n\n  return vec4(pow(color,vec3(1.0/2.2)), baseColor.a);\n}\n";
	export default _default;

}
declare module 'luma.gl/shadertools/src/modules/pbr/pbr' {
	const _default: {
		name: string;
		vs: string;
		fs: string;
		dependencies: {
			name: string;
			vs: string;
			fs: string;
		}[];
	};
	export default _default;

}
declare module 'luma.gl' {
	export { isWebGL, isWebGL2 } from 'luma.gl/webgl-utils/webgl-checks';
	export { getKeyValue, getKey } from 'luma.gl/webgl-utils/constants-to-keys';
	export { createGLContext, destroyGLContext, resizeGLContext, pollGLContext, setContextDefaults } from 'luma.gl/webgl-context/context';
	export { trackContextState } from 'luma.gl/webgl-context';
	export { resetParameters, getParameter, getParameters, setParameter, setParameters, withParameters, getModifiedParameters } from 'luma.gl/webgl-context/context-state';
	export { getContextInfo, getGLContextInfo, getContextLimits, glGetDebugInfo } from 'luma.gl/webgl-context/context-limits';
	export { FEATURES, hasFeature, hasFeatures, getFeatures, canCompileGLGSExtension } from 'luma.gl/webgl-context/context-features';
	export { makeDebugContext } from 'luma.gl/webgl-context/debug-context';
	export { default as Buffer } from 'luma.gl/webgl/buffer';
	export { Shader, VertexShader, FragmentShader } from 'luma.gl/webgl/shader';
	export { default as Program } from 'luma.gl/webgl/program';
	export { default as Framebuffer } from 'luma.gl/webgl/framebuffer';
	export { default as Renderbuffer } from 'luma.gl/webgl/renderbuffer';
	export { default as Texture2D } from 'luma.gl/webgl/texture-2d';
	export { default as TextureCube } from 'luma.gl/webgl/texture-cube';
	export { clear, clearBuffer } from 'luma.gl/webgl/clear';
	export { default as FenceSync } from 'luma.gl/webgl/fence-sync';
	export { default as Query } from 'luma.gl/webgl/query';
	export { default as Sampler } from 'luma.gl/webgl/sampler';
	export { default as Texture3D } from 'luma.gl/webgl/texture-3d';
	export { default as Texture2DArray } from 'luma.gl/webgl/texture-2d-array';
	export { default as TransformFeedback } from 'luma.gl/webgl/transform-feedback';
	export { default as VertexArrayObject } from 'luma.gl/webgl/vertex-array-object';
	export { default as VertexArray } from 'luma.gl/webgl/vertex-array';
	export { default as UniformBufferLayout } from 'luma.gl/webgl/uniform-buffer-layout';
	export { default as _Accessor } from 'luma.gl/webgl/accessor';
	export { clearBuffer as _clearBuffer } from 'luma.gl/webgl/clear';
	export { default as Object3D } from 'luma.gl/core/object-3d';
	export { default as Group } from 'luma.gl/core/group';
	export { default as Model } from 'luma.gl/core/model';
	export { default as AnimationLoop } from 'luma.gl/core/animation-loop';
	export { default as pickModels } from 'luma.gl/core/pick-models';
	export { encodePickingColor, decodePickingColor, getNullPickingColor } from 'luma.gl/core/picking-colors';
	export { default as Transform } from 'luma.gl/core/transform';
	export { default as _Attribute } from 'luma.gl/core/attribute';
	export { default as _ShaderCache } from 'luma.gl/core/shader-cache';
	export { default as _AnimationLoopProxy } from 'luma.gl/core/animation-loop-proxy';
	export { default as _MultiPassRenderer } from 'luma.gl/multipass/multi-pass-renderer';
	export { default as _RenderState } from 'luma.gl/multipass/render-state';
	export { default as _Pass } from 'luma.gl/multipass/pass';
	export { default as _CompositePass } from 'luma.gl/multipass/composite-pass';
	export { default as _ClearPass } from 'luma.gl/multipass/clear-pass';
	export { default as _RenderPass } from 'luma.gl/multipass/render-pass';
	export { default as _CopyPass } from 'luma.gl/multipass/copy-pass';
	export { default as _TexturePass } from 'luma.gl/multipass/texture-pass';
	export { default as _PickingPass } from 'luma.gl/multipass/picking-pass';
	export { default as _ShaderModulePass } from 'luma.gl/multipass/shader-module-pass';
	export { default as _Canvas } from 'luma.gl/multipass/canvas';
	export { default as Geometry } from 'luma.gl/geometry/geometry';
	export { default as ConeGeometry } from 'luma.gl/geometry/cone-geometry';
	export { default as CubeGeometry } from 'luma.gl/geometry/cube-geometry';
	export { default as CylinderGeometry } from 'luma.gl/geometry/cylinder-geometry';
	export { default as IcoSphereGeometry } from 'luma.gl/geometry/ico-sphere-geometry';
	export { default as PlaneGeometry } from 'luma.gl/geometry/plane-geometry';
	export { default as SphereGeometry } from 'luma.gl/geometry/sphere-geometry';
	export { default as TruncatedConeGeometry } from 'luma.gl/geometry/truncated-cone-geometry';
	export { default as Cone } from 'luma.gl/models/cone';
	export { default as Cube } from 'luma.gl/models/cube';
	export { default as Cylinder } from 'luma.gl/models/cylinder';
	export { default as IcoSphere } from 'luma.gl/models/ico-sphere';
	export { default as Plane } from 'luma.gl/models/plane';
	export { default as Sphere } from 'luma.gl/models/sphere';
	export { default as TruncatedCone } from 'luma.gl/models/truncated-cone';
	export { default as ClipSpace } from 'luma.gl/models/clip-space';
	export { setPathPrefix, loadFile, loadImage, loadFiles, loadImages, loadTextures, loadProgram, loadModel, parseModel } from 'luma.gl/io';
	export { setDefaultShaderModules, registerShaderModules } from 'luma.gl/shadertools/src/lib/resolve-modules';
	export { assembleShaders } from 'luma.gl/shadertools/src/lib/assemble-shaders';
	export { normalizeShaderModule } from 'luma.gl/shadertools/src/lib/filters/normalize-module';
	export { default as fp32 } from 'luma.gl/shadertools/src/modules/fp32/fp32';
	export { default as fp64 } from 'luma.gl/shadertools/src/modules/fp64/fp64';
	export { default as project } from 'luma.gl/shadertools/src/modules/project/project';
	export { default as lighting } from 'luma.gl/shadertools/src/modules/lighting/lighting';
	export { default as dirlight } from 'luma.gl/shadertools/src/modules/dirlight/dirlight';
	export { default as picking } from 'luma.gl/shadertools/src/modules/picking/picking';
	export { default as diffuse } from 'luma.gl/shadertools/src/modules/diffuse/diffuse';
	export { default as pbr } from 'luma.gl/shadertools/src/modules/pbr/pbr';
	export { default as ClipSpaceQuad } from 'luma.gl/models/clip-space';
	export { glGet, glKey, glKeyType } from 'luma.gl/webgl-utils/constants-to-keys';

}
declare module 'luma.gl/addons/events/add-events' {
	export function get(e: any, win: any): any;
	export function getWheel(e: any): number;
	export function getKey(e: any): {
		code: any;
		key: string;
		shift: any;
		control: any;
		alt: any;
		meta: any;
	};
	export function isRightClick(e: any): boolean;
	export function getPos(e: any, win: any): any[];
	export function stop(e: any): void;
	export class EventsProxy {
		constructor(domElem: any, opt: any);
		attachEvents(): void;
		eventInfo(type: any, e: any, win: any): {};
		getSize(): any;
		mouseup(e: any): void;
		mouseout(e: any): void;
		mouseover(e: any): void;
		mousemove(e: any): void;
		mousewheel(e: any): void;
		mousedown(e: any): void;
		touchstart(e: any): void;
		touchmove(e: any): void;
		touchend(e: any): void;
		keydown(e: any): void;
		keyup(e: any): void;
	}
	export const Keys: {
		enter: number;
		up: number;
		down: number;
		left: number;
		right: number;
		esc: number;
		space: number;
		backspace: number;
		tab: number;
		delete: number;
	};
	export function addEvents(domElement: any, opt?: {}): EventsProxy;
	export function removeEvents(domElement: any, opt?: {}): EventsProxy;

}
declare module 'addons' {
	export { addEvents } from 'luma.gl/addons/events/add-events';

}
declare module 'luma.gl/io/node' {
	export function loadFile(opts: any): void;
	export function loadImage(url: any): void;

}
declare module 'luma.gl/multipass/clear-mask-pass' {
	import Pass from 'luma.gl/multipass/pass';
	export default class ClearMaskPass extends Pass {
		constructor(gl: any, props: any);
		render(gl: any): void;
	}

}
declare module 'luma.gl/multipass/mask-pass' {
	import Pass from 'luma.gl/multipass/pass';
	export default class MaskPass extends Pass {
		constructor(gl: any, props: any);
		_renderPass({ gl }: {
			gl: any;
		}): void;
	}

}
declare module 'luma.gl/multipass/stencil-pass' {
	import Pass from 'luma.gl/multipass/pass';
	export default class StencilPass extends Pass {
		constructor(gl: any, props?: {});
		_renderPass({ gl, inputBuffer, outputBuffer, animationPropst }: {
			gl: any;
			inputBuffer: any;
			outputBuffer: any;
			animationPropst: any;
		}): void;
	}

}
declare module 'luma.gl/shadertools/src/lib/shader-modules' {
	/**
	 * Registers an array of shader modules
	 * @param {Object[]} shaderModuleList - Array of shader modules
	 */
	export function registerShaderModules(shaderModuleList: any, { ignoreMultipleRegistrations }?: {
		ignoreMultipleRegistrations?: boolean;
	}): void;
	/**
	 * Registers an array of default shader modules. These will be concatenated
	 * automatically at the end of any shader module list passed to
	 * `assembleShaders` (plus `resolveModules` and `getShaderDependencies`)
	 * @param {Object[]} modules - Array of shader modules
	 */
	export function setDefaultShaderModules(modules: any): void;
	export function getShaderModule(moduleOrName: any): any;
	export function resolveModules(modules: any): string[];
	/**
	 * Takes a list of shader module names and returns a new list of
	 * shader module names that includes all dependencies, sorted so
	 * that modules that are dependencies of other modules come first.
	 *
	 * If the shader glsl code from the returned modules is concatenated
	 * in the reverse order, it is guaranteed that all functions be resolved and
	 * that all function and variable definitions come before use.
	 *
	 * @param {String[]} modules - Array of modules (inline modules or module names)
	 * @return {String[]} - Array of modules
	 */
	export function getShaderDependencies(modules: any): string[];
	/**
	 * Recursively checks module dpendencies to calculate dependency
	 * level of each module.
	 *
	 * @param {String[]} modules - Array of modules
	 * @param {Number} level - Current level
	 * @return {result} - Map of module name to its level
	 */
	export function getDependencyGraph({ modules, level, result }: {
		modules: any;
		level: any;
		result: any;
	}): any;

}
declare module 'luma.gl/shadertools/src/lib/filters/shader-pass' {
	export function moduleToFilter(module: any): any;

}
declare module 'shadertools/src/modules/fog' {
	export const name = "fog";
	export function getUniforms({ fogEnable, fogColor, fogNear, fogFar }?: {
		fogEnable?: boolean;
		fogColor?: number[];
		fogNear?: number;
		fogFar?: number;
	}): {
		fog_uEnable: boolean;
		fog_uColor: number[];
		fog_uNear: number;
		fog_uFar: number;
	};
	export const vs = "";
	export const fs = "// fog configuration\nuniform bool fog_uEnable;\nuniform vec3 fog_uColor;\nuniform float fog_uNear;\nuniform float fog_uFar;\n\n/*\n * Applies linear fog to a color\n * param - unfogged color\n * return - fogged color\n */\nvec4 fog_filterColor(vec4 color) {\n  if (fog_uEnable) {\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = smoothstep(fog_uNear, fog_uFar, depth);\n    return mix(color, vec4(fog_uColor, gl_FragColor.w), fogFactor);\n  } else {\n    return color;\n  }\n}\n\n// Other fog shaders, exponential etc, see\n// http://in2gpu.com/2014/07/22/create-fog-shader/\n";

}
declare module 'luma.gl/shadertools/test/gpu-test-utils' {
	export function initializeGL(canvas: any): any;
	export function initializeTexTarget(gl: any): void;
	export function render(gl: any): void;
	export function getGPUOutput(gl: any): Float32Array;

}
declare module 'luma.gl/shadertools/src/modules/fp64/fp64-test-utils' {
	export function getRelativeError64(result: any, reference: any): number;
	export function getRelativeError(result: any, reference: any): number;
	export function testcase(gl: any, { glslFunc, binary, op, limit, t }: {
		glslFunc: any;
		binary: any;
		op: any;
		limit?: number;
		t: any;
	}): void;
	export const gl: any;

}
declare module 'luma.gl/shadertools/src/modules/fp64/fp64-arithmetic.spec' {
	export { };

}
declare module 'luma.gl/shadertools/src/modules/fp64/test-deprecated/fp64-shader.spec' {
	export { };

}
//declare const resolve: any;
declare module 'luma.gl/shadertools/src/modules/geometry/geometry' {
	function getUniforms(opts?: {}): {}; const _default: {
		name: string;
		vs: string;
		fs: string;
		getUniforms: typeof getUniforms;
	};
	export default _default;

}
declare module 'luma.gl/shadertools/src/shaders/default-fragment.glsl' {
	const _default: "precision highp float;\n\n#define SHADER_NAME luma-default-fs\n\nvarying vec4 vColor;\nvarying vec2 vTexCoord;\nvarying vec3 lightWeighting;\n\nuniform bool hasTexture1;\nuniform sampler2D sampler1;\n\nuniform bool enablePicking;\nuniform vec3 pickColor;\n\nuniform bool hasFog;\nuniform vec3 fogColor;\n\nuniform float fogNear;\nuniform float fogFar;\n\nvoid main() {\n  if(!hasTexture1) {\n    gl_FragColor = vec4(vColor.rgb * lightWeighting, vColor.a);\n  } else {\n    gl_FragColor =\n      vec4(texture2D(sampler1, vec2(vTexCoord.s, vTexCoord.t)).rgb * lightWeighting, 1.0);\n  }\n\n  if (enablePicking) {\n    gl_FragColor = vec4(pickColor, 1.0);\n  }\n\n  /* handle fog */\n  if (hasFog) {\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = smoothstep(fogNear, fogFar, depth);\n    gl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w), fogFactor);\n  }\n}\n";
	export default _default;

}
declare module 'luma.gl/shadertools/src/shaders/default-vertex.glsl' {
	const _default: "#define SHADER_NAME luma-default-vs\n\n#define LIGHT_MAX 4\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\nattribute vec2 texCoord1;\n\nuniform mat4 worldMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldInverseTransposeMatrix;\n\nuniform bool enableLights;\nuniform vec3 ambientColor;\nuniform vec3 directionalColor;\nuniform vec3 lightingDirection;\n\nuniform vec3 pointLocation[LIGHT_MAX];\nuniform vec3 pointColor[LIGHT_MAX];\nuniform int numberPoints;\n\nvarying vec4 vColor;\nvarying vec2 vTexCoord;\nvarying vec3 lightWeighting;\n\nvoid main(void) {\n  vec4 mvPosition = worldMatrix * vec4(position, 1.0);\n\n  if(!enableLights) {\n    lightWeighting = vec3(1.0, 1.0, 1.0);\n  } else {\n    vec3 plightDirection;\n    vec3 pointWeight = vec3(0.0, 0.0, 0.0);\n    vec4 transformedNormal = worldInverseTransposeMatrix * vec4(normal, 1.0);\n    float directionalLightWeighting = max(dot(transformedNormal.xyz, lightingDirection), 0.0);\n    for (int i = 0; i < LIGHT_MAX; i++) {\n      if (i < numberPoints) {\n        plightDirection =\n          normalize((viewMatrix * vec4(pointLocation[i], 1.0)).xyz - mvPosition.xyz);\n        pointWeight += max(dot(transformedNormal.xyz, plightDirection), 0.0) * pointColor[i];\n      } else {\n        break;\n      }\n    }\n\n    lightWeighting = ambientColor + (directionalColor * directionalLightWeighting) + pointWeight;\n  }\n\n  vColor = color;\n  vTexCoord = texCoord1;\n  gl_Position = projectionMatrix * worldMatrix * vec4(position, 1.0);\n}\n";
	export default _default;

}
declare module 'luma.gl/shadertools/test/utils/is-old-ie.spec' {
	export { };

}
declare module 'luma.gl/shadertools/test/utils/shader-utils.spec' {
	export { };

}
declare module 'luma.gl/shadertools/test/lib/inject-shader.spec' {
	export { };

}
declare module 'luma.gl/shadertools/test/lib/transpile-shader.spec' {
	export { };

}
declare module 'luma.gl/shadertools/test/lib/assemble-shaders.spec' {
	export { };

}
declare module 'luma.gl/shadertools/test/lib/resolve-modules.spec' {
	export { };

}
declare module 'shadertools/test/modules' {
	export { };

}
declare module 'shadertools/test' {
	import 'luma.gl/shadertools/test/utils/is-old-ie.spec';
	import 'luma.gl/shadertools/test/utils/shader-utils.spec';
	import 'luma.gl/shadertools/test/lib/inject-shader.spec.js';
	import 'luma.gl/shadertools/test/lib/transpile-shader.spec.js';
	import 'luma.gl/shadertools/test/lib/assemble-shaders.spec.js';
	import 'luma.gl/shadertools/test/lib/resolve-modules.spec';
	import 'luma.gl/shadertools/test/modules';

}
declare const resolve: any;
declare const HtmlWebpackPlugin: any;
declare module 'luma.gl/webgl-context/get-parameter' {
	export function getContextLimits(gl: any): any;
	export function getParameter(gl: any, originalFunc: any, pname: any): any;

}
declare module 'luma.gl/webgl-utils/get-error' {
	export function glGetError(gl: any): Error;
	export function glCheckError(gl: any): void;

}
declare module 'luma.gl/webgl1/webgl-rendering-context' {
	export const ERR_HEADLESSGL_LOAD = "luma.gl: WebGL contexts can not be created in Node.js since headless gl is not installed. If this is desired, install headless gl using \"npm install gl --save-dev\" or \"yarn add -D gl\"";
	export let headlessTypes: any; const WebGLRenderingContext: any;
	export const webGLTypesAvailable: boolean;
	export { WebGLRenderingContext };

}
declare module 'luma.gl/wip/track-context-creation' {
	/**
	 * Installs a spy on Canvas.getContext
	 * calls the provided callback with the {context}
	 */
	export function trackContextCreation({ onContextCreate, onContextCreated }: {
		onContextCreate?: () => any;
		onContextCreated?: () => void;
	}): void;

}
