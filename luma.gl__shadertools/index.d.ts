//typings for @luma.gl/shadertools v7.3.2
declare module '@luma.gl/shadertools/shaders/modular-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@luma.gl/shadertools/shaders/modular-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@luma.gl/shadertools/lib/transpile-shader' {
	export default function transpileShader(source: any, targetGLSLVersion: any, isVertex: any): any;

}
declare module '@luma.gl/shadertools/utils/assert' {
	export default function assert(condition: any, message: any): void;

}
declare module '@luma.gl/shadertools/utils' {
	export { default as assert } from '@luma.gl/shadertools/utils/assert';

}
declare module '@luma.gl/shadertools/lib/filters/prop-types' {
	export function parsePropTypes(propDefs: any): {};

}
declare module '@luma.gl/shadertools/lib/shader-module' {
	export default class ShaderModule {
		constructor({ name, vs, fs, dependencies, uniforms, getUniforms, deprecations, defines, vertexShader, fragmentShader }: {
			name: any;
			vs: any;
			fs: any;
			dependencies?: any[];
			uniforms: any;
			getUniforms: any;
			deprecations?: any[];
			defines?: {};
			vertexShader: any;
			fragmentShader: any;
		});
		getModuleSource(type: any, targetGLSLVersion: any): string;
		getUniforms(opts: any, uniforms: any): any;
		getDefines(): any;
		checkDeprecations(shaderSource: any, log: any): void;
		_parseDeprecationDefinitions(deprecations: any): any;
		_defaultGetUniforms(opts?: {}): {};
	}
	export function normalizeShaderModule(module: any): any;

}
declare module '@luma.gl/shadertools/lib/shader-module-registry' {
	export default class ShaderModuleRegistry {
		constructor();
		setDefaultShaderModules(modules: any): void;
		getDefaultShaderModules(): any;
		registerShaderModules(shaderModuleList: any, { ignoreMultipleRegistrations }?: {
			ignoreMultipleRegistrations?: boolean;
		}): void;
		getShaderModule(moduleOrName: any): any;
		resolveModules(modules: any): any;
		_registerShaderModule(module: any, ignoreMultipleRegistrations?: boolean): any;
	}

}
declare module '@luma.gl/shadertools/lib/resolve-modules' {
	/**
	 * Registers an array of default shader modules. These will be concatenated
	 * automatically at the end of any shader module list passed to
	 * `assembleShaders` (plus `resolveModules` and `getShaderDependencies`)
	 * @param {Object[]} modules - Array of shader modules
	 */
	export function setDefaultShaderModules(modules: any): void;
	export function getDefaultShaderModules(): any;
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
declare module '@luma.gl/shadertools/lib/constants' {
	export const VERTEX_SHADER = "vs";
	export const FRAGMENT_SHADER = "fs";

}
declare module '@luma.gl/shadertools/utils/is-old-ie' {
	export default function isOldIE(opts?: {}): boolean;

}
declare module '@luma.gl/shadertools/utils/webgl-info' {
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
declare module '@luma.gl/shadertools/lib/platform-defines' {
	export function getPlatformShaderDefines(gl: any): string;
	export function getVersionDefines(gl: any, glslVersion: any, isFragment: any): string;

}
declare module '@luma.gl/shadertools/modules/module-injectors' {
	export const MODULE_INJECTORS_VS: string;
	export const MODULE_INJECTORS_FS: string;

}
declare module '@luma.gl/shadertools/lib/inject-shader' {
	export const DECLARATION_INJECT_MARKER = "__LUMA_INJECT_DECLARATIONS__";
	export default function injectShader(source: any, type: any, inject: any, injectStandardStubs: any): any;
	export function combineInjects(injects: any): {};

}
declare module '@luma.gl/shadertools/lib/assemble-shaders' {
	export function createShaderHook(hook: any, opts?: {}): void;
	export function createModuleInjection(moduleName: any, opts: any): void;
	export function resetGlobalShaderHooks(): void;
	export function assembleShaders(gl: any, opts: any): {
		gl: any;
		vs: string;
		fs: string;
		getUniforms: (opts: any) => {};
		modules: {};
	};

}
declare module '@luma.gl/shadertools/utils/shader-utils' {
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
declare module '@luma.gl/shadertools/modules/fp32/fp32' {
	const _default: {
		name: string;
		vs: string;
		fs: any;
	};
	export default _default;

}
declare module '@luma.gl/shadertools/modules/fp64/fp64-utils' {
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
declare module '@luma.gl/shadertools/modules/fp64/fp64-arithmetic.glsl' {
	const _default: string;
	export default _default;

}
declare module '@luma.gl/shadertools/modules/fp64/fp64-functions.glsl' {
	const _default: string;
	export default _default;

}
declare module '@luma.gl/shadertools/modules/fp64/fp64' {
	import { fp64ify, fp64LowPart, fp64ifyMatrix4 } from '@luma.gl/shadertools/modules/fp64/fp64-utils';
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
declare module '@luma.gl/shadertools/modules/project/project' {
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
declare module '@luma.gl/shadertools/modules/fog/fog' {
	function getUniforms({ fogEnable, fogColor, fogNear, fogFar }?: {
		fogEnable?: boolean;
		fogColor?: number[];
		fogNear?: number;
		fogFar?: number;
	}): {
		fog_uEnable: boolean;
		fog_uColor: number[];
		fog_uNear: number;
		fog_uFar: number;
	}; const _default: {
		name: string;
		getUniforms: typeof getUniforms;
		vs: string;
		fs: string;
	};
	export default _default;

}
declare module '@luma.gl/shadertools/modules/lights/lights.glsl' {
	const _default: string;
	export default _default;

}
declare module '@luma.gl/shadertools/modules/lights/lights' {
	const _default: {
		name: string;
		vs: string;
		fs: string;
		getUniforms: typeof getUniforms;
		defines: {
			MAX_LIGHTS: number;
		};
	};
	export default _default; function getUniforms(opts?: {}): any;

}
declare module '@luma.gl/shadertools/modules/dirlight/dirlight' {
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
declare module '@luma.gl/shadertools/modules/picking/picking' {
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
declare module '@luma.gl/shadertools/modules/diffuse/diffuse' {
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
declare module '@luma.gl/shadertools/modules/phong-lighting/phong-lighting.glsl' {
	const _default: string;
	export default _default;

}
declare module '@luma.gl/shadertools/modules/phong-lighting/phong-lighting' {
	const gouraudlighting: {
		name: string;
		dependencies: {
			name: string;
			vs: string;
			fs: string;
			getUniforms: (opts?: {}) => any;
			defines: {
				MAX_LIGHTS: number;
			};
		}[];
		vs: string;
		defines: {
			LIGHTING_VERTEX: number;
		};
		getUniforms: typeof getUniforms;
	}; const phonglighting: {
		name: string;
		dependencies: {
			name: string;
			vs: string;
			fs: string;
			getUniforms: (opts?: {}) => any;
			defines: {
				MAX_LIGHTS: number;
			};
		}[];
		fs: string;
		defines: {
			LIGHTING_FRAGMENT: number;
		};
		getUniforms: typeof getUniforms;
	}; function getUniforms(opts?: {}): {};
	export { gouraudlighting, phonglighting };

}
declare module '@luma.gl/shadertools/modules/project2/project2.vertex.glsl' {
	const _default: "uniform mat4 u_MVPMatrix;\nuniform mat4 u_ModelMatrix;\nuniform mat4 u_NormalMatrix;\n";
	export default _default;

}
declare module '@luma.gl/shadertools/modules/project2/project2' {
	const _default: {
		name: string;
		vs: string;
		fs: string;
	};
	export default _default;

}
declare module '@luma.gl/shadertools/modules/pbr/pbr-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@luma.gl/shadertools/modules/pbr/pbr-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@luma.gl/shadertools/modules/pbr/pbr' {
	const _default: {
		name: string;
		vs: string;
		fs: string;
		defines: {
			LIGHTING_FRAGMENT: number;
		};
		dependencies: {
			name: string;
			vs: string;
			fs: string;
		}[];
	};
	export default _default;

}
declare module '@luma.gl/shadertools/modules/transform/transform' {
	const _default: {
		name: string;
		vs: string;
		fs: any;
	};
	export default _default;

}
declare module '@luma.gl/shadertools/modules' {
	export { default as fp32 } from '@luma.gl/shadertools/modules/fp32/fp32';
	export { default as fp64 } from '@luma.gl/shadertools/modules/fp64/fp64';
	export { default as project } from '@luma.gl/shadertools/modules/project/project';
	export { default as fog } from '@luma.gl/shadertools/modules/fog/fog';
	export { default as lights } from '@luma.gl/shadertools/modules/lights/lights';
	export { default as dirlight } from '@luma.gl/shadertools/modules/dirlight/dirlight';
	export { default as picking } from '@luma.gl/shadertools/modules/picking/picking';
	export { default as diffuse } from '@luma.gl/shadertools/modules/diffuse/diffuse';
	export { gouraudlighting, phonglighting } from '@luma.gl/shadertools/modules/phong-lighting/phong-lighting';
	export { default as pbr } from '@luma.gl/shadertools/modules/pbr/pbr';
	export { default as _transform } from '@luma.gl/shadertools/modules/transform/transform';

}
declare module '@luma.gl/shadertools' {
	export { registerShaderModules, setDefaultShaderModules, getDefaultShaderModules } from '@luma.gl/shadertools/lib/resolve-modules';
	export { assembleShaders, createShaderHook, createModuleInjection, resetGlobalShaderHooks } from '@luma.gl/shadertools/lib/assemble-shaders';
	export { combineInjects } from '@luma.gl/shadertools/lib/inject-shader';
	export { normalizeShaderModule } from '@luma.gl/shadertools/lib/shader-module';
	export { getQualifierDetails, getPassthroughFS, typeToChannelSuffix, typeToChannelCount, convertToVec4 } from '@luma.gl/shadertools/utils/shader-utils';

	export * from '@luma.gl/shadertools/modules';

	export const MODULAR_SHADERS: {
		vs: string;
		fs: string;
		uniforms: {};
	};

}
declare module '@luma.gl/shadertools/modules/fp64/test/fp64-test-utils' {
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
declare module '@luma.gl/shadertools/modules/fp64/test/fp64-arithmetic.spec' {
	export { };

}
declare module '@luma.gl/shadertools/modules/geometry/geometry' {
	const _default: {
		name: string;
		vs: string;
		fs: string;
	};
	export default _default;

}
declare module '@luma.gl/shadertools/shaders/default-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@luma.gl/shadertools/shaders/default-vertex.glsl' {
	const _default: string;
	export default _default;

}
