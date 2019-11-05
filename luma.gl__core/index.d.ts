//typings for @luma.gl/core v7.3.2
declare module 'utils' {
	//export { assert, log, uid, isObjectEmpty } from '@luma.gl/webgl';
	export { self, window, global, document } from '@luma.gl/webgl';

}
declare module '@luma.gl/core/geometry/geometry' {
	export const DRAW_MODE: {
		POINTS: number;
		LINES: number;
		LINE_LOOP: number;
		LINE_STRIP: number;
		TRIANGLES: number;
		TRIANGLE_STRIP: number;
		TRIANGLE_FAN: number;
	};
	export default class Geometry {
		static readonly DRAW_MODE: {
			POINTS: number;
			LINES: number;
			LINE_LOOP: number;
			LINE_STRIP: number;
			TRIANGLES: number;
			TRIANGLE_STRIP: number;
			TRIANGLE_FAN: number;
		};
		constructor(props?: {});
		readonly mode: any;
		getVertexCount(): any;
		getAttributes(): any;
		_print(attributeName: any): string;
		_setAttributes(attributes: any, indices: any): this;
		_calculateVertexCount(attributes: any, indices: any): any;
	}

}
declare module '@luma.gl/core/materials/material' {
	export default class Material {
	}

}
declare module '@luma.gl/core/lighting/light-source' {
	class Light {
		constructor(props?: {});
	}
	export class AmbientLight extends Light {
		constructor(props?: {});
	}
	export class DirectionalLight extends Light {
		constructor(props?: {});
	}
	export class PointLight extends Light {
		constructor(props?: {});
		_getAttenuation(props: any): any;
	}
	export { };

}
declare module '@luma.gl/core/lib/animation-loop' {
	export default class AnimationLoop {
		constructor(props?: {});
		delete(): void;
		setNeedsRedraw(reason: any): this;
		setProps(props: any): this;
		start(opts?: {}): this;
		redraw(): this;
		stop(): this;
		attachTimeline(timeline: any): any;
		detachTimeline(): void;
		waitForRender(): any;
		toDataURL(): Promise<any>;
		onCreateContext(...args: any[]): any;
		onInitialize(...args: any[]): any;
		onRender(...args: any[]): any;
		onFinalize(...args: any[]): any;
		getHTMLControlValue(id: any, defaultValue?: number): number;
		setViewParameters(): this;
		_startLoop(): void;
		_setDisplay(display: any): void;
		_requestAnimationFrame(renderFrameCallback: any): void;
		_renderFrame(...args: any[]): void;
		_clearNeedsRedraw(): void;
		_setupFrame(): void;
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
		_beginTimers(): void;
		_endTimers(): void;
		_startEventHandling(): void;
		_onMousemove(e: any): void;
		_onMouseleave(e: any): void;
	}

}
declare module '@luma.gl/core/lib/picking-colors' {
	export function encodePickingColor(i: any): number[];
	export function decodePickingColor(color: any): number;
	export function getNullPickingColor(): Uint8Array;

}
declare module '@luma.gl/core/lib/model-utils' {
	export function getBuffersFromGeometry(gl: any, geometry: any, options: any): {};
	export function inferAttributeAccessor(attributeName: any, attribute: any): void;

}
declare module '@luma.gl/core/resource-management/program-manager' {
	export default class ProgramManager {
		static getDefaultProgramManager(gl: any): any;
		constructor(gl: any);
		addDefaultModule(module: any): void;
		removeDefaultModule(module: any): void;
		addModuleInjection(module: any, opts: any): void;
		addShaderHook(hook: any, opts?: {}): void;
		get(props?: {}): any;
		getUniforms(program: any): any;
		release(program: any): void;
		_getHash(key: any): any;
		_getModuleList(appModules?: any[]): any[];
	}

}
declare module '@luma.gl/core/debug/seer-integration' {
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
declare module '@luma.gl/core/lib/base-model' {
	export default class BaseModel {
		constructor(gl: any, props?: {});
		initialize(props: any): void;
		setProps(props: any): void;
		delete(): void;
		isAnimated(): any;
		getProgram(): any;
		setProgram(props: any): void;
		getUniforms(): any;
		setUniforms(uniforms?: {}): this;
		getModuleUniforms(opts: any): any;
		updateModuleSettings(opts: any): this;
		clear(opts: any): this;
		drawGeometry(opts?: {}): any;
		_setBaseModelProps(props: any): void;
		_checkProgram(shaderCache?: any): void;
		_refreshAnimationProps(animationProps: any): void;
		_evaluateAnimateUniforms(animationProps: any): {};
		_extractAnimatedUniforms(uniforms: any): any;
		_timerQueryStart(): void;
		_timerQueryEnd(): void;
		_logDrawCallStart(priority: any): any;
		_logDrawCallEnd(priority: any, vertexArray: any, uniforms: any, framebuffer: any): void;
	}

}
declare module '@luma.gl/core/lib/model' {
	import BaseModel from '@luma.gl/core/lib/base-model';
	export default class Model extends BaseModel {
		constructor(gl: any, props?: {});
		initialize(props: any): void;
		setProps(props: any): void;
		delete(): void;
		getDrawMode(): any;
		getVertexCount(): any;
		getInstanceCount(): any;
		getAttributes(): any;
		setDrawMode(drawMode: any): this;
		setVertexCount(vertexCount: any): this;
		setInstanceCount(instanceCount: any): this;
		setGeometry(geometry: any): this;
		setAttributes(attributes?: {}): this;
		draw(options?: {}): any;
		transform(opts?: {}): this;
		render(uniforms?: {}): any;
		_setModelProps(props: any): void;
		_deleteGeometryBuffers(): void;
		_setAnimationProps(animationProps: any): void;
		_setFeedbackBuffers(feedbackBuffers?: {}): this;
	}

}
declare module '@luma.gl/core/lib/transform/buffer-transform' {
	export default class BufferTransform {
		constructor(gl: any, props?: {});
		setupResources(opts: any): void;
		updateModelProps(props?: {}): {};
		getDrawOptions(opts?: {}): {
			attributes: any;
			transformFeedback: any;
		};
		swap(): boolean;
		update(opts?: {}): void;
		getBuffer(varyingName: any): any;
		getData({ varyingName }?: {
			varyingName: any;
		}): any;
		delete(): void;
		_initialize(props?: {}): void;
		_getFeedbackBuffers(props: any): {};
		_setupBuffers(props?: {}): void;
		_setupTransformFeedback(binding: any, { model }: {
			model: any;
		}): void;
		_updateBindings(opts: any): void;
		_updateBinding(binding: any, opts: any): any;
		_swapBuffers(opts: any): {
			sourceBuffers: any;
			feedbackBuffers: any;
		};
		_createNewBuffer(name: any, opts: any): any;
		_getNextIndex(): number;
	}

}
declare module '@luma.gl/core/lib/transform/transform-shader-utils' {
	export function updateForTextures({ vs, sourceTextureMap, targetTextureVarying, targetTexture }: {
		vs: any;
		sourceTextureMap: any;
		targetTextureVarying: any;
		targetTexture: any;
	}): {
		vs: any;
		targetTextureType: any;
		inject: {};
		samplerTextureMap: {};
	};
	export function getSizeUniforms({ sourceTextureMap, targetTextureVarying, targetTexture }: {
		sourceTextureMap: any;
		targetTextureVarying: any;
		targetTexture: any;
	}): {};
	export function getVaryingType(line: any, varying: any): any;
	export function processAttributeDefinition(line: any, textureMap: any): {
		updatedLine: string;
		inject: {
			'vs:#decl': string;
			'vs:#main-start': string;
		};
		samplerTextureMap: {};
	};

}
declare module '@luma.gl/core/lib/transform/texture-transform' {
	export default class TextureTransform {
		constructor(gl: any, props?: {});
		updateModelProps(props?: {}): {
			vs: any;
			fs: any;
			modules: any;
			uniforms: any;
			inject: any;
		};
		getDrawOptions(opts?: {}): {
			attributes: any;
			framebuffer: any;
			uniforms: any;
			discard: any;
			parameters: any;
		};
		swap(): boolean;
		update(opts?: {}): void;
		getTargetTexture(): any;
		getData({ packed }?: {
			packed?: boolean;
		}): any;
		getFramebuffer(): any;
		delete(): void;
		_initialize(props?: {}): void;
		_createTargetTexture(props: any): any;
		_setupTextures(props?: {}): void;
		_updateElementIDBuffer(elementCount: any): void;
		_updateBindings(opts: any): void;
		_updateBinding(binding: any, opts: any): any;
		_setSourceTextureParameters(): void;
		_swapTextures(opts: any): {
			sourceTextures: any;
			targetTexture: any;
		};
		_createNewTexture(refTexture: any): any;
		_getNextIndex(): number;
		_processVertexShader(props?: {}): {
			vs: any;
			fs: any;
			modules: any;
			uniforms: any;
			inject: any;
		};
	}

}
declare module '@luma.gl/core/lib/transform/transform' {
	export default class Transform {
		static isSupported(gl: any): any;
		constructor(gl: any, props?: {});
		delete(): void;
		run(opts?: {}): void;
		swap(): void;
		getBuffer(varyingName?: any): any;
		getData(opts?: {}): any;
		getFramebuffer(): any;
		update(opts?: {}): void;
		_initialize(props?: {}): void;
		_updateModelProps(props: any): any;
		_buildResourceTransforms(gl: any, props: any): void;
		_updateDrawOptions(opts: any): any;
	}

}
declare module '@luma.gl/core/lib/clip-space' {
	import Model from '@luma.gl/core/lib/model';
	export default class ClipSpace extends Model {
		constructor(gl: any, opts: any);
	}

}
declare module '@luma.gl/core/lib/shader-cache' {
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
		_createNewProgram(gl: any, opts: any): any;
		_resetProgram(program: any, opts: any): void;
		_compareContexts(gl1: any, gl2: any): boolean;
	}

}
declare module '@luma.gl/core/lib/animation-loop-proxy' {
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
declare module '@luma.gl/core/multipass/pass' {
	export default class Pass {
		constructor(gl: any, props?: {});
		setProps(props: any): void;
		render(renderState: any, animationProps: any): void;
		delete(): void;
	    /**
	     * Renders the effect.
	     * This is an abstract method that should be overridden.
	     * @param {Framebuffer} inputBuffer - Frame buffer that contains the result of the previous pass
	     * @param {Framebuffer} outputBuffer - Frame buffer that serves as the output render target
	     */
		_renderPass({ gl, inputBuffer, outputBuffer, animationProps }: {
			gl?: any;
			inputBuffer?: any;
			outputBuffer?: any;
			animationProps?: any;
		}): void;
	}

}
declare module '@luma.gl/core/multipass/composite-pass' {
	import Pass from '@luma.gl/core/multipass/pass';
	export default class CompositePass extends Pass {
		constructor(gl: any, props?: {});
		render(...args: any[]): void;
		delete(): void;
	}

}
declare module '@luma.gl/core/multipass/render-state' {
	export default class RenderState {
		constructor(gl: any, props?: {});
		reset(): void;
		delete(): void;
		_swapFramebuffers(): void;
	}

}
declare module '@luma.gl/core/multipass/multi-pass-renderer' {
	import CompositePass from '@luma.gl/core/multipass/composite-pass';
	export default class MultiPassRenderer extends CompositePass {
		constructor(gl: any, props?: {});
		render(animationProps: any): this;
		delete(): void;
	}

}
declare module '@luma.gl/core/multipass/clear-pass' {
	import Pass from '@luma.gl/core/multipass/pass';
	export default class ClearPass extends Pass {
		constructor(gl: any, props?: {});
		_renderPass(): void;
	}

}
declare module '@luma.gl/core/multipass/render-pass' {
	import Pass from '@luma.gl/core/multipass/pass';
	export default class RenderPass extends Pass {
		constructor(gl: any, props?: {});
		_renderPass({ animationProps }: {
			animationProps: any;
		}): void;
	}

}
declare module '@luma.gl/core/multipass/copy-pass' {
	import Pass from '@luma.gl/core/multipass/pass';
	export default class CopyPass extends Pass {
		constructor(gl: any, props?: {});
		delete(): void;
		_renderPass({ inputBuffer }: {
			inputBuffer: any;
		}): void;
	}

}
declare module '@luma.gl/core/multipass/texture-pass' {
	import Pass from '@luma.gl/core/multipass/pass';
	export default class TexturePass extends Pass {
		constructor(gl: any, options?: {});
		delete(): void;
		_renderPass(): void;
	}

}
declare module '@luma.gl/core/multipass/shader-module-pass' {
	import CompositePass from '@luma.gl/core/multipass/composite-pass';
	export default class ShaderModulePass extends CompositePass {
		constructor(gl: any, module: any, props?: {});
		_renderPass({ inputBuffer, swapBuffers }: {
			inputBuffer: any;
			swapBuffers: any;
		}): void;
	}

}
declare module '@luma.gl/core/geometries/truncated-cone-geometry' {
	import Geometry from '@luma.gl/core/geometry/geometry';
	export default class TruncatedConeGeometry extends Geometry {
		constructor(props?: {});
	}

}
declare module '@luma.gl/core/geometries/cone-geometry' {
	import TruncatedConeGeometry from '@luma.gl/core/geometries/truncated-cone-geometry';
	export default class ConeGeometry extends TruncatedConeGeometry {
		constructor(props?: {});
	}

}
declare module '@luma.gl/core/geometries/cube-geometry' {
	import Geometry from '@luma.gl/core/geometry/geometry';
	export default class CubeGeometry extends Geometry {
		constructor(props?: {});
	}

}
declare module '@luma.gl/core/geometries/cylinder-geometry' {
	import TruncatedConeGeometry from '@luma.gl/core/geometries/truncated-cone-geometry';
	export default class CylinderGeometry extends TruncatedConeGeometry {
		constructor(props?: {});
	}

}
declare module '@luma.gl/core/geometries/ico-sphere-geometry' {
	import Geometry from '@luma.gl/core/geometry/geometry';
	export default class IcoSphereGeometry extends Geometry {
		constructor(props?: {});
	}

}
declare module '@luma.gl/core/geometry/geometry-utils' {
	export function unpackIndexedGeometry(geometry: any): any;

}
declare module '@luma.gl/core/geometries/plane-geometry' {
	import Geometry from '@luma.gl/core/geometry/geometry';
	export default class PlaneGeometry extends Geometry {
		constructor(props?: {});
	}

}
declare module '@luma.gl/core/geometries/sphere-geometry' {
	import Geometry from '@luma.gl/core/geometry/geometry';
	export default class SphereGeometry extends Geometry {
		constructor(props?: {});
	}

}
declare module '@luma.gl/core/materials/phong-material' {
	import Material from '@luma.gl/core/materials/material';
	export default class PhongMaterial extends Material {
		constructor(props: any);
	}

}
declare module '@luma.gl/core/materials/pbr-material' {
	import Material from '@luma.gl/core/materials/material';
	export default class PBRMaterial extends Material {
	}

}
declare module '@luma.gl/core/scenegraph/nodes/scenegraph-node' {
	export default class ScenegraphNode {
		constructor(props?: {});
		delete(): void;
		setProps(props: any): this;
		toString(): string;
		setPosition(position: any): this;
		setRotation(rotation: any): this;
		setScale(scale: any): this;
		setMatrix(matrix: any, copyMatrix?: boolean): void;
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
		_setScenegraphNodeProps(props: any): void;
	}

}
declare module '@luma.gl/core/scenegraph/nodes/group-node' {
	import ScenegraphNode from '@luma.gl/core/scenegraph/nodes/scenegraph-node';
	export default class GroupNode extends ScenegraphNode {
		constructor(props?: {});
		add(...children: any[]): this;
		remove(child: any): this;
		removeAll(): this;
		delete(): void;
		traverse(visitor: any, { worldMatrix }?: {
			worldMatrix?: any;
		}): void;
		traverseReverse(visitor: any, opts: any): void;
	}

}
declare module '@luma.gl/core/scenegraph/nodes/model-node' {
	import ScenegraphNode from '@luma.gl/core/scenegraph/nodes/scenegraph-node';
	export default class ModelNode extends ScenegraphNode {
		constructor(gl: any, props?: {});
		setProps(props: any): this;
		delete(): void;
		draw(...args: any[]): any;
		setUniforms(...args: any[]): this;
		setAttributes(...args: any[]): this;
		updateModuleSettings(...args: any[]): this;
		_setModelNodeProps(props: any): void;
	}

}
declare module '@luma.gl/core/scenegraph/nodes/camera-node' {
	import ScenegraphNode from '@luma.gl/core/scenegraph/nodes/scenegraph-node';
	export default class CameraNode extends ScenegraphNode {
		constructor(props?: {});
	}

}
declare module '@luma.gl/core' {
	export { isWebGL, isWebGL2, lumaStats, createGLContext, destroyGLContext, resizeGLContext, setGLContextDefaults, getContextInfo, getGLContextInfo, getContextLimits, FEATURES, hasFeature, hasFeatures, getFeatures, canCompileGLGSExtension, cloneTextureFrom, getKeyValue, getKey, cssToDeviceRatio, cssToDevicePixels, setGLContextDefaults as setContextDefaults, getContextDebugInfo as glGetDebugInfo } from '@luma.gl/webgl';
	export { trackContextState, resetParameters, getParameter, getParameters, setParameter, setParameters, withParameters, getModifiedParameters } from '@luma.gl/webgl-state-tracker';
	export { Buffer, Shader, VertexShader, FragmentShader, Program, Framebuffer, Renderbuffer, Texture2D, TextureCube, clear, clearBuffer, readPixelsToArray, readPixelsToBuffer, copyToDataUrl, copyToImage, copyToTexture, blit } from '@luma.gl/webgl';
	export { Query, Texture3D, TransformFeedback, VertexArrayObject, VertexArray, UniformBufferLayout, setPathPrefix, loadFile, loadImage, Accessor as _Accessor, clearBuffer as _clearBuffer } from '@luma.gl/webgl';
	export { default as Geometry } from '@luma.gl/core/geometry/geometry';
	export { default as Material } from '@luma.gl/core/materials/material';
	export { AmbientLight, DirectionalLight, PointLight } from '@luma.gl/core/lighting/light-source';
	export { default as AnimationLoop } from '@luma.gl/core/lib/animation-loop';
	export { encodePickingColor, decodePickingColor, getNullPickingColor } from '@luma.gl/core/lib/picking-colors';
	export { default as Model } from '@luma.gl/core/lib/model';
	export { default as Transform } from '@luma.gl/core/lib/transform/transform';
	export { default as ClipSpace } from '@luma.gl/core/lib/clip-space';
	export { default as ProgramManager } from '@luma.gl/core/resource-management/program-manager';
	export { default as _ShaderCache } from '@luma.gl/core/lib/shader-cache';
	export { default as _AnimationLoopProxy } from '@luma.gl/core/lib/animation-loop-proxy';
	export { default as _MultiPassRenderer } from '@luma.gl/core/multipass/multi-pass-renderer';
	export { default as _RenderState } from '@luma.gl/core/multipass/render-state';
	export { default as _Pass } from '@luma.gl/core/multipass/pass';
	export { default as _CompositePass } from '@luma.gl/core/multipass/composite-pass';
	export { default as _ClearPass } from '@luma.gl/core/multipass/clear-pass';
	export { default as _RenderPass } from '@luma.gl/core/multipass/render-pass';
	export { default as _CopyPass } from '@luma.gl/core/multipass/copy-pass';
	export { default as _TexturePass } from '@luma.gl/core/multipass/texture-pass';
	export { default as _ShaderModulePass } from '@luma.gl/core/multipass/shader-module-pass';
	export { default as ConeGeometry } from '@luma.gl/core/geometries/cone-geometry';
	export { default as CubeGeometry } from '@luma.gl/core/geometries/cube-geometry';
	export { default as CylinderGeometry } from '@luma.gl/core/geometries/cylinder-geometry';
	export { default as IcoSphereGeometry } from '@luma.gl/core/geometries/ico-sphere-geometry';
	export { default as PlaneGeometry } from '@luma.gl/core/geometries/plane-geometry';
	export { default as SphereGeometry } from '@luma.gl/core/geometries/sphere-geometry';
	export { default as TruncatedConeGeometry } from '@luma.gl/core/geometries/truncated-cone-geometry';
	export { default as PhongMaterial } from '@luma.gl/core/materials/phong-material';
	export { default as PBRMaterial } from '@luma.gl/core/materials/pbr-material';
	export { default as ScenegraphNode } from '@luma.gl/core/scenegraph/nodes/scenegraph-node';
	export { default as GroupNode } from '@luma.gl/core/scenegraph/nodes/group-node';
	export { default as ModelNode } from '@luma.gl/core/scenegraph/nodes/model-node';
	export { default as CameraNode } from '@luma.gl/core/scenegraph/nodes/camera-node';
	export { registerShaderModules, setDefaultShaderModules, getDefaultShaderModules, assembleShaders, createShaderHook, createModuleInjection, combineInjects, normalizeShaderModule, fp32, fp64, project, lights, dirlight, picking, diffuse, gouraudlighting, phonglighting, pbr, _transform, MODULAR_SHADERS, getQualifierDetails, getPassthroughFS, typeToChannelSuffix, typeToChannelCount, convertToVec4 } from '@luma.gl/shadertools';
	export { log, assert, uid, self, window, global, document } from '@luma.gl/webgl';

}
declare module 'geometries' {
	export { default as ConeGeometry } from '@luma.gl/core/geometries/cone-geometry';
	export { default as CubeGeometry } from '@luma.gl/core/geometries/cube-geometry';
	export { default as CylinderGeometry } from '@luma.gl/core/geometries/cylinder-geometry';
	export { default as IcoSphereGeometry } from '@luma.gl/core/geometries/ico-sphere-geometry';
	export { default as PlaneGeometry } from '@luma.gl/core/geometries/plane-geometry';
	export { default as SphereGeometry } from '@luma.gl/core/geometries/sphere-geometry';
	export { default as TruncatedConeGeometry } from '@luma.gl/core/geometries/truncated-cone-geometry';

}
declare module '@luma.gl/core/multipass/clear-mask-pass' {
	import Pass from '@luma.gl/core/multipass/pass';
	export default class ClearMaskPass extends Pass {
		constructor(gl: any, props: any);
		render(gl: any): void;
	}

}
declare module '@luma.gl/core/multipass/mask-pass' {
	import Pass from '@luma.gl/core/multipass/pass';
	export default class MaskPass extends Pass {
		constructor(gl: any, props?: {});
		_renderPass({ gl }: {
			gl: any;
		}): void;
	}

}
declare module '@luma.gl/core/multipass/stencil-pass' {
	import Pass from '@luma.gl/core/multipass/pass';
	export default class StencilPass extends Pass {
		constructor(gl: any, props?: {});
		_renderPass({ inputBuffer, outputBuffer, animationPropst }: {
			inputBuffer: any;
			outputBuffer: any;
			animationPropst: any;
		}): void;
	}

}
declare module 'scenegraph' {
	export { default as ScenegraphNode } from '@luma.gl/core/scenegraph/nodes/scenegraph-node';
	export { default as GroupNode } from '@luma.gl/core/scenegraph/nodes/group-node';
	export { default as ModelNode } from '@luma.gl/core/scenegraph/nodes/model-node';
	export { default as CameraNode } from '@luma.gl/core/scenegraph/nodes/camera-node';

}
