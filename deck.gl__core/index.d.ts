//typings for @deck.gl/core v7.3.3
declare module '@deck.gl/core/utils/globals' {
	/// <reference types="@types/node" />
	export const isBrowser: any; const window_: (Window & typeof globalThis) | NodeJS.Global; const global_: (Window & typeof globalThis) | NodeJS.Global; const document_: {};
	export { window_ as window, global_ as global, document_ as document };

}
declare module '@deck.gl/core/utils/log' {
	const _default: any;
	export default _default;

}
declare module '@deck.gl/core/utils/json-loader' {
	function isJSON(text: any): boolean; const _default: {
		name: string;
		extensions: string[];
		testText: typeof isJSON;
		parseTextSync: (text: string, reviver?: (this: any, key: string, value: any) => any) => any;
	};
	export default _default;

}
declare module '@deck.gl/core/shaderlib/misc/geometry' {
	const _default: {
		name: string;
		vs: string;
		fs: string;
	};
	export default _default;

}
declare module '@deck.gl/core/shaderlib/project/constants' {
	export const PROJECT_COORDINATE_SYSTEM: {
		LNG_LAT: number;
		LNGLAT_AUTO_OFFSET: number;
		METER_OFFSETS: number;
		LNGLAT_OFFSETS: number;
		IDENTITY: number;
	};

}
declare module '@deck.gl/core/shaderlib/project/project.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/core/lib/constants' {
	export const COORDINATE_SYSTEM: {
		LNGLAT: number;
		LNGLAT_DEPRECATED: number;
		METER_OFFSETS: number;
		METERS: number;
		LNGLAT_OFFSETS: number;
		IDENTITY: number;
	};
	export const EVENTS: {
		click: {
			handler: string;
		};
		panstart: {
			handler: string;
		};
		panmove: {
			handler: string;
		};
		panend: {
			handler: string;
		};
	};

}
declare module '@deck.gl/core/utils/memoize' {
	/**
	* Speed up consecutive function calls by caching the result of calls with identical input
	* https://en.wikipedia.org/wiki/Memoization
	* @param {function} compute - the function to be memoized
	*/
	export default function memoize(compute: any): (args: any) => any;

}
declare module '@deck.gl/core/utils/assert' {
	export default function assert(condition: any, message: any): void;

}
declare module '@deck.gl/core/shaderlib/project/viewport-uniforms' {
	export const LNGLAT_AUTO_OFFSET_ZOOM_THRESHOLD = 12;
	/**
	* Returns uniforms for shaders based on current projection
	* includes: projection matrix suitable for shaders
	*
	* TODO - Ensure this works with any viewport, not just WebMercatorViewports
	*
	* @param {WebMercatorViewport} viewport -
	* @return {Float32Array} - 4x4 projection matrix that can be used in shaders
	*/
	export function getUniformsFromViewport({ viewport, devicePixelRatio, modelMatrix, coordinateSystem, coordinateOrigin, wrapLongitude, projectionMode, positionOrigin }?: {
		viewport: any;
		devicePixelRatio?: number;
		modelMatrix?: any;
		coordinateSystem?: number;
		coordinateOrigin?: number[];
		wrapLongitude?: boolean;
		projectionMode: any;
		positionOrigin: any;
	}): any;

}
declare module '@deck.gl/core/shaderlib/project/project' {
	function getUniforms(opts?: {}): any; const _default: {
		name: string;
		dependencies: any[];
		vs: string;
		getUniforms: typeof getUniforms;
		deprecations: {
			type: string;
			old: string;
			new: string;
		}[];
	};
	export default _default;

}
declare module '@deck.gl/core/shaderlib/project32/project32' {
	const _default: {
		name: string;
		dependencies: {
			name: string;
			dependencies: any[];
			vs: string;
			getUniforms: (opts?: {}) => any;
			deprecations: {
				type: string;
				old: string;
				new: string;
			}[];
		}[];
		vs: string;
	};
	export default _default;

}
declare module '@deck.gl/core/shaderlib/project64/project64.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/core/shaderlib/project64/project64' {
	const _default: {
		name: string;
		dependencies: any[];
		vs: string;
		getUniforms: typeof getUniforms;
		deprecations: {
			type: string;
			old: string;
			new: string;
		}[];
	};
	export default _default; function getUniforms(opts?: {}, context?: {}): any;

}
declare module '@deck.gl/core/shaderlib/shadow/shadow' {
	const _default: {
		name: string;
		dependencies: string[];
		vs: string;
		fs: string;
		getUniforms: (opts?: {}, context?: {}) => {};
	};
	export default _default;

}
declare module 'shaderlib' {
	import { picking, gouraudlighting, phonglighting } from '@luma.gl/core';
	import project from '@deck.gl/core/shaderlib/project/project';
	import project64 from '@deck.gl/core/shaderlib/project64/project64';
	import shadow from '@deck.gl/core/shaderlib/shadow/shadow';
	export function initializeShaderModules(): void;
	export function createProgramManager(gl: any): any;
	export { picking, project, project64, gouraudlighting, phonglighting, shadow };

}
declare module '@deck.gl/core/lib/init' {
	const _default: any;
	export default _default;

}
declare module '@deck.gl/core/effects/lighting/directional-light' {
	import { DirectionalLight as BaseDirectionalLight } from '@luma.gl/core';
	export default class DirectionalLight extends BaseDirectionalLight {
		constructor(props: any);
		getProjectedLight(l?: {
			layer: any;
		}): this;
	}

}
declare module '@deck.gl/core/lib/effect' {
	export default class Effect {
		constructor(props?: {});
		prepare(gl?: any, v?: {
			layers: any;
			viewports: any;
			onViewportActive: any;
			views: any;
		}): void;
		getParameters(layer?: any): void;
		cleanup(): void;
	}

}
declare module '@deck.gl/core/passes/pass' {
	export default class Pass {
		constructor(gl: any, props?: {});
		setProps(props: any): void;
		render(params?: any): void;
		cleanup(): void;
	}

}
declare module '@deck.gl/core/passes/layers-pass' {
	import Pass from '@deck.gl/core/passes/pass';
	export default class LayersPass extends Pass {
		render(params: any): any;
		drawLayers({ layers, viewports, views, onViewportActive, deviceRect, parameters, pass, redrawReason, clearCanvas, effects, effectProps }: {
			layers: any;
			viewports: any;
			views: any;
			onViewportActive: any;
			deviceRect?: any;
			parameters?: {};
			pass?: string;
			redrawReason?: string;
			clearCanvas?: boolean;
			effects: any;
			effectProps: any;
		}): any[];
		drawLayersInViewport(gl: any, { layers, viewport, view, deviceRect, parameters, pass, redrawReason, effects, effectProps }: {
			layers: any;
			viewport: any;
			view: any;
			deviceRect?: any;
			parameters?: {};
			pass?: string;
			redrawReason?: string;
			effects: any;
			effectProps: any;
		}): {
			totalCount: any;
			visibleCount: number;
			compositeCount: number;
			pickableCount: number;
		};
		drawLayerInViewport({ gl, layer, layerIndex, glViewport, parameters, effects, effectProps }: {
			gl: any;
			layer: any;
			layerIndex: any;
			glViewport: any;
			parameters: any;
			effects: any;
			effectProps: any;
		}): void;
		getViewportFromDescriptor(viewportOrDescriptor: any): any;
		shouldDrawLayer(layer: any, viewport: any): any;
		getModuleParameters(layer: any, effects?: any, effectProps?: any): any;
		getLayerParameters(layer: any, layerIndex: any, glViewport: any, parameters: any): any;
		getGLViewport(gl: any, { viewport }: {
			viewport: any;
		}): number[];
		clearCanvas(gl: any): void;
	}

}
declare module '@deck.gl/core/passes/shadow-pass' {
	import { default as LayersPass } from '@deck.gl/core/passes/layers-pass';
	export default class ShadowPass extends LayersPass {
		constructor(gl: any, props: any);
		render(params: any): void;
		getModuleParameters(layer: any, effects: any, effectProps: any): any;
		delete(): void;
	}

}
declare module '@deck.gl/core/effects/lighting/lighting-effect' {
	import Effect from '@deck.gl/core/lib/effect';
	export default class LightingEffect extends Effect {
		constructor(props: any);
		prepare(gl: any, { layers, viewports, onViewportActive, views }: {
			layers: any;
			viewports: any;
			onViewportActive: any;
			views: any;
		}): {
			shadowMaps?: undefined;
			dummyShadowMap?: undefined;
			shadowColor?: undefined;
			shadowMatrices?: undefined;
		} | {
			shadowMaps: any[];
			dummyShadowMap: any;
			shadowColor: any;
			shadowMatrices: any[];
		};
		getParameters(layer: any): {
			lightSources: {
				ambientLight: any;
				directionalLights: any[];
				pointLights: any[];
			};
		};
		cleanup(): void;
		_createLightMatrix(): any[];
		_createShadowPasses(gl: any): void;
		_applyDefaultLights(): void;
		_getProjectedPointLights(layer: any): any[];
		_getProjectedDirectionalLights(layer: any): any[];
	}

}
declare module '@deck.gl/core/shaderlib/project/project-functions' {
	export function getWorldPosition(position: any, { viewport, modelMatrix, coordinateSystem, coordinateOrigin, offsetMode }: {
		viewport: any;
		modelMatrix: any;
		coordinateSystem: any;
		coordinateOrigin: any;
		offsetMode: any;
	}): any;
	/**
	* Equivalent to project_position in project.glsl
	* projects a user supplied position to world position directly with or without
	* a reference coordinate system
	* @param {array} position - [x, y, z]
	* @param {object} params
	* @param {Viewport} params.viewport - the current viewport
	* @param {number} params.coordinateSystem - the reference coordinate system used
	*   align world position
	* @param {array} params.coordinateOrigin - the reference coordinate origin used
	*   to align world position
	* @param {Matrix4} [params.modelMatrix] - the model matrix of the supplied position
	* @param {number} [params.fromCoordinateSystem] - the coordinate system that the
	*   supplied position is in. Default to the same as `coordinateSystem`.
	* @param {array} [params.fromCoordinateOrigin] - the coordinate origin that the
	*   supplied position is in. Default to the same as `coordinateOrigin`.
	*/
	export function projectPosition(position: any, params: any): any;

}
declare module '@deck.gl/core/utils/iterable-utils' {
	export function createIterable(data: any, startRow?: number, endRow?: number): {
		iterable: any[];
		objectInfo: {
			index: number;
			data: any;
			target: any[];
		};
	};
	export function isAsyncIterable(data: any): any;

}
declare module '@deck.gl/core/utils/flatten' {
	/**
	* Flattens a nested array into a single level array,
	* or a single value into an array with one value
	* @example flatten([[1, [2]], [3], 4]) => [1, 2, 3, 4]
	* @example flatten(1) => [1]
	* @param {Array} array The array to flatten.
	* @param {Function} filter= - Optional predicate called on each `value` to
	*   determine if it should be included (pushed onto) the resulting array.
	* @param {Function} map= - Optional transform applied to each array elements.
	* @param {Array} result=[] - Optional array to push value into
	* @return {Array} Returns the new flattened array (new array or `result` if provided)
	*/
	export function flatten(array: any, { filter, map, result }?: {
		filter?: () => boolean;
		map?: (x: any) => any;
		result?: any[];
	}): any;
	export function flattenVertices(nestedArray: any, { result, dimensions }?: {
		result?: any[];
		dimensions?: number;
	}): any[];
	export function fillArray({ target, source, start, count }: {
		target: any;
		source: any;
		start?: number;
		count?: number;
	}): any;

}
declare module '@deck.gl/core/utils/range' {
	export const EMPTY: any[];
	export const FULL: number[][];
	export function add(rangeList: any, range: any): any;

}
declare module '@deck.gl/core/lib/base-attribute' {
	export default class BaseAttribute {
		constructor(gl: any, opts?: {});
		delete(): void;
		update(opts: any): void;
		getBuffer(): any;
		getValue(): any;
		_createBuffer(opts: any): any;
		_setAccessor(opts: any): void;
		_normalizeConstant(value: any): any;
		_validateAttributeDefinition(): void;
	}

}
declare module '@deck.gl/core/utils/typed-array-manager' {
	export class TypedArrayManager {
		constructor({ overAlloc, poolSize }?: {
			overAlloc?: number;
			poolSize?: number;
		});
		allocate(typedArray: any, count: any, { size, type, padding, copy }: {
			size?: number;
			type: any;
			padding?: number;
			copy?: boolean;
		}): any;
		release(typedArray: any): void;
		_allocate(Type: any, size: any): any;
		_release(typedArray: any): void;
	} const _default: TypedArrayManager;
	export default _default;

}
declare module '@deck.gl/core/utils/math-utils' {
	export function createMat4(): number[];
	export function extractCameraVectors({ viewMatrix, viewMatrixInverse }: {
		viewMatrix: any;
		viewMatrixInverse: any;
	}): {
		eye: any[];
		direction: number[];
		up: any[];
		right: any[];
	};
	export function getFrustumPlanes({ aspect, near, far, fovyRadians, position, direction, up, right }: {
		aspect: any;
		near: any;
		far: any;
		fovyRadians: any;
		position: any;
		direction: any;
		up: any;
		right: any;
	}): {
		near: {
			distance: any;
			normal: any;
		};
		far: {
			distance: any;
			normal: any;
		};
	};
	/**
	* Calculate the low part of a WebGL 64 bit float
	* @param x {number} - the input float number
	* @returns {number} - the lower 32 bit of the number
	*/
	export function fp64LowPart(x: any): number;
	/**
	* Split a Float64Array into a double-length Float32Array
	* @param typedArray {Float64Array}
	* @param size {Number} - per attribute size
	* @param [startIndex] {Number} - start index in the source array
	* @param [endIndex] {Number} - end index in the source array
	* @returns {Float32Array} - high part, low part for each attribute:
	[1xHi, 1yHi, 1zHi, 1xLow, 1yLow, 1zLow, 2xHi, ...]
	*/
	export function toDoublePrecisionArray(typedArray: any, { size, startIndex, endIndex }: {
		size?: number;
		startIndex?: number;
		endIndex: any;
	}): any;

}
declare module '@deck.gl/core/utils/array-utils' {
	export function padArray({ source, target, size, offset, getData, sourceLayout, targetLayout }: {
		source: any;
		target: any;
		size: any;
		offset?: number;
		getData: any;
		sourceLayout: any;
		targetLayout: any;
	}): any;

}
declare module '@deck.gl/core/lib/attribute-transition-utils' {
	import BaseAttribute from '@deck.gl/core/lib/base-attribute';
	export function normalizeTransitionSettings(userSettings: any, layerSettings: any): any;
	export function getSourceBufferAttribute(gl: any, attribute: any): BaseAttribute;
	export function getAttributeTypeFromSize(size: any): "float" | "vec2" | "vec3" | "vec4";
	export function cycleBuffers(buffers: any): void;
	export function getAttributeBufferLength(attribute: any, numInstances: any): number;
	export function padBuffer({ buffer, numInstances, attribute, fromLength, fromBufferLayout, getData }: {
		buffer: any;
		numInstances: any;
		attribute: any;
		fromLength: any;
		fromBufferLayout: any;
		getData?: (x: any) => any;
	}): void;

}
declare module '@deck.gl/core/lib/attribute' {
	import BaseAttribute from '@deck.gl/core/lib/base-attribute';
	export default class Attribute extends BaseAttribute {
		constructor(gl: any, opts?: {});
		bufferLayout: any;
		delete(): void;
		needsUpdate(): any;
		needsRedraw({ clearChangedFlags }?: {
			clearChangedFlags?: boolean;
		}): any;
		getUpdateTriggers(): any[];
		getAccessor(): any;
		getShaderAttributes(): {};
		supportsTransition(): boolean;
		getTransitionSetting(opts: any): any;
		setNeedsUpdate(reason: any, dataRange: any): void;
		clearNeedsUpdate(): void;
		setNeedsRedraw(reason?: any): void;
		allocate(numInstances: any): boolean;
		updateBuffer({ numInstances, bufferLayout, data, props, context }: {
			numInstances: any;
			bufferLayout: any;
			data: any;
			props: any;
			context: any;
		}): boolean;
		update(props: any): void;
		setConstantValue(value: any): boolean;
		setExternalBuffer(buffer: any): boolean;
		_checkExternalBuffer(opts: any): void;
		getVertexOffset(row: any, bufferLayout?: any): any;
		_normalizeValue(value: any, out?: any[], start?: number): any[];
		_areValuesEqual(value1: any, value2: any, size?: any): boolean;
		_standardAccessor(attribute: any, { data, startRow, endRow, props, numInstances, bufferLayout }: {
			data: any;
			startRow: any;
			endRow: any;
			props: any;
			numInstances: any;
			bufferLayout: any;
		}): void;
		_validateAttributeUpdaters(): void;
		_checkAttributeArray(): void;
		_updateShaderAttributes(): void;
	}

}
declare module '@deck.gl/core/transitions/transition' {
	export default class Transition {
		/**
		* @params timeline {Timeline}
		*/
		constructor(timeline: any);
		readonly inProgress: any;
		/**
		* (re)start this transition.
		* @params props {object} - optional overriding props. see constructor
		*/
		start(props: any): void;
		/**
		* end this transition if it is in progress.
		*/
		end(): void;
		/**
		* cancel this transition if it is in progress.
		*/
		cancel(): void;
		/**
		* update this transition. Returns `true` if updated.
		*/
		update(): boolean;
		_onUpdate(): void;
	}

}
declare module '@deck.gl/core/transitions/gpu-interpolation-transition' {
	export default class GPUInterpolationTransition {
		constructor({ gl, attribute, timeline }: {
			gl: any;
			attribute: any;
			timeline: any;
		});
		readonly inProgress: any;
		start(transitionSettings: any, numInstances: any): void;
		update(): any;
		cancel(): void;
	}

}
declare module '@deck.gl/core/transitions/gpu-spring-transition' {
	export default class GPUSpringTransition {
		constructor({ gl, attribute, timeline }: {
			gl: any;
			attribute: any;
			timeline: any;
		});
		readonly inProgress: any;
		start(transitionSettings: any, numInstances: any): void;
		update(): boolean;
		cancel(): void;
	}

}
declare module '@deck.gl/core/lib/attribute-transition-manager' {
	export default class AttributeTransitionManager {
		constructor(gl: any, { id, timeline }: {
			id: any;
			timeline: any;
		});
		finalize(): void;
		update({ attributes, transitions, numInstances }: {
			attributes: any;
			transitions?: {};
			numInstances: any;
		}): void;
		hasAttribute(attributeName: any): any;
		getAttributes(): {};
		run(): any;
		_removeTransition(attributeName: any): void;
		_updateAttribute(attributeName: any, attribute: any, settings: any): void;
	}

}
declare module '@deck.gl/core/lib/attribute-manager' {
	import Attribute from '@deck.gl/core/lib/attribute';
	export default class AttributeManager {
		/**
		* Sets log functions to help trace or time attribute updates.
		* Default logging uses deck logger.
		*
		* `onLog` is called for each attribute.
		*
		* To enable detailed control of timming and e.g. hierarchical logging,
		* hooks are also provided for update start and end.
		*
		* @param {Object} [opts]
		* @param {String} [onLog=] - called to print
		* @param {String} [onUpdateStart=] - called before update() starts
		* @param {String} [onUpdateEnd=] - called after update() ends
		*/
		static setDefaultLogFunctions({ onLog, onUpdateStart, onUpdate, onUpdateEnd }?: {
			onLog: any;
			onUpdateStart: any;
			onUpdate: any;
			onUpdateEnd: any;
		}): void;
		/**
		* @classdesc
		* Automated attribute generation and management. Suitable when a set of
		* vertex shader attributes are generated by iteration over a data array,
		* and updates to these attributes are needed either when the data itself
		* changes, or when other data relevant to the calculations change.
		*
		* - First the application registers descriptions of its dynamic vertex
		*   attributes using AttributeManager.add().
		* - Then, when any change that affects attributes is detected by the
		*   application, the app will call AttributeManager.invalidate().
		* - Finally before it renders, it calls AttributeManager.update() to
		*   ensure that attributes are automatically rebuilt if anything has been
		*   invalidated.
		*
		* The application provided update functions describe how attributes
		* should be updated from a data array and are expected to traverse
		* that data array (or iterable) and fill in the attribute's typed array.
		*
		* Note that the attribute manager intentionally does not do advanced
		* change detection, but instead makes it easy to build such detection
		* by offering the ability to "invalidate" each attribute separately.
		*/
		constructor(gl: any, { id, stats, timeline }?: {
			id?: string;
			stats: any;
			timeline: any;
		});
		finalize(): void;
		getNeedsRedraw(opts?: {
			clearRedrawFlags: boolean;
		}): any;
		setNeedsRedraw(redraw?: boolean): this;
		add(attributes: any, updaters: any): void;
		addInstanced(attributes: any, updaters: any): void;
		/**
		* Removes attributes
		* Takes an array of attribute names and delete them from
		* the attribute map if they exists
		*
		* @example
		* attributeManager.remove(['position']);
		*
		* @param {Object} attributeNameArray - attribute name array (see above)
		*/
		remove(attributeNameArray: any): void;
		invalidate(triggerName: any, dataRange: any): void;
		invalidateAll(dataRange: any): void;
		update({ data, numInstances, bufferLayout, transitions, props, buffers, context }?: {
			data: any;
			numInstances: any;
			bufferLayout: any;
			transitions: any;
			props?: {};
			buffers?: {};
			context?: {};
		}): void;
		updateTransition(): any;
		/**
		* Returns all attribute descriptors
		* Note: Format matches luma.gl Model/Program.setAttributes()
		* @return {Object} attributes - descriptors
		*/
		getAttributes(): any;
		/**
		* Returns changed attribute descriptors
		* This indicates which WebGLBuffers need to be updated
		* @return {Object} attributes - descriptors
		*/
		getChangedAttributes(opts?: {
			clearChangedFlags: boolean;
		}): any;
		getAccessors(): any;
		_add(attributes: any, updaters: any, extraProps?: {}): void;
		_createAttribute(name: any, attribute: any, extraProps: any): Attribute;
		_mapUpdateTriggersToAttributes(): void;
		_invalidateTrigger(triggerName: any, dataRange: any): any;
		_updateAttribute(opts: any): void;
	}

}
declare module '@deck.gl/core/lib/seer-integration' {
	/**
	* Create an override on the specify layer, indexed by a valuePath array.
	* Do nothing in case Seer as not been initialized to prevent any preformance drawback.
	*/
	export const setPropOverrides: (id: any, valuePath: any, value: any) => void;
	/**
	* Get the props overrides of a specific layer if Seer as been initialized
	* Invalidates the data to be sure new ones are always picked up.
	*/
	export const applyPropOverrides: (props: any) => void;
	/**
	* Listen for deck.gl edit events
	*/
	export const layerEditListener: (cb: any) => void;
	/**
	* Listen for seer init events to resend data
	*/
	export const seerInitListener: (cb: any) => void;
	export const initLayerInSeer: (layer: any) => void;
	/**
	* Log layer's properties to Seer
	*/
	export const updateLayerInSeer: (layer: any) => void;
	/**
	* On finalize of a specify layer, remove it from seer
	*/
	export const removeLayerInSeer: (id: any) => void;

}
declare module '@deck.gl/core/transitions/cpu-interpolation-transition' {
	import Transition from '@deck.gl/core/transitions/transition';
	export default class CPUInterpolationTransition extends Transition {
		readonly value: any;
		_onUpdate(): void;
	}

}
declare module '@deck.gl/core/transitions/cpu-spring-transition' {
	import Transition from '@deck.gl/core/transitions/transition';
	export default class CPUSpringTransition extends Transition {
		readonly value: any;
		_onUpdate(): void;
	}

}
declare module '@deck.gl/core/lib/uniform-transition-manager' {
	export default class UniformTransitionManager {
		constructor(timeline: any);
		readonly active: boolean;
		add(key: any, fromValue: any, toValue: any, settings: any): void;
		remove(key: any): void;
		update(): {};
		clear(): void;
	}

}
declare module '@deck.gl/core/lifecycle/props' {
	export function validateProps(props: any): void;
	export function diffProps(props: any, oldProps: any): {
		dataChanged: any;
		propsChanged: string;
		updateTriggersChanged: boolean;
		extensionsChanged: string | boolean;
		transitionsChanged: {};
	};
	/**
	* Performs equality by iterating through keys on an object and returning false
	* when any key has values which are not strictly equal between the arguments.
	* @param {Object} opt.oldProps - object with old key/value pairs
	* @param {Object} opt.newProps - object with new key/value pairs
	* @param {Object} opt.ignoreProps={} - object, keys that should not be compared
	* @returns {null|String} - null when values of all keys are strictly equal.
	*   if unequal, returns a string explaining what changed.
	*/
	export function compareProps({ newProps, oldProps, ignoreProps, propTypes, triggerName }?: {
		newProps: any;
		oldProps: any;
		ignoreProps?: {};
		propTypes?: {};
		triggerName?: string;
	}): string;

}
declare module '@deck.gl/core/utils/count' {
	/**
	* Deduces numer of elements in a JavaScript container.
	* - Auto-deduction for ES6 containers that define a count() method
	* - Auto-deduction for ES6 containers that define a size member
	* - Auto-deduction for Classic Arrays via the built-in length attribute
	* - Also handles objects, although note that this an O(N) operation
	*/
	export function count(container: any): any;

}
declare module '@deck.gl/core/utils/shader' {
	export function mergeShaders(target: any, source: any): any;

}
declare module '@deck.gl/core/lifecycle/constants' {
	export const LIFECYCLE: {
		NO_STATE: string;
		MATCHED: string;
		INITIALIZED: string;
		AWAITING_GC: string;
		AWAITING_FINALIZATION: string;
		FINALIZED: string;
	};

}
declare module '@deck.gl/core/lifecycle/prop-types' {
	export function parsePropTypes(propDefs: any): {
		propTypes: {};
		defaultProps: {};
		deprecatedProps: {};
	};

}
declare module '@deck.gl/core/lifecycle/create-props' {
	export function createProps(): any;

}
declare module '@deck.gl/core/lifecycle/component-state' {
	export default class ComponentState {
		constructor(component?: any);
		getOldProps(): any;
		resetOldProps(): void;
		freezeAsyncOldProps(): void;
		hasAsyncProp(propName: any): boolean;
		getAsyncProp(propName: any): any;
		isAsyncPropLoading(propName: any): boolean;
		setAsyncProps(props: any): void;
		_updateAsyncProp(propName: any, value: any): void;
		_didAsyncInputValueChange(propName: any, value: any): boolean;
		_setPropValue(propName: any, value: any): void;
		_setAsyncPropValue(propName: any, value: any, loadCount: any): void;
		_watchPromise(propName: any, promise: any): void;
		_resolveAsyncIterable(propName: any, iterable: any): Promise<void>;
		_postProcessValue(propName: any, value: any, previousValue: any): any;
		_createAsyncPropData(propName: any, value: any, defaultValue: any): void;
	}

}
declare module '@deck.gl/core/lifecycle/component' {
	import ShaderCache from '@luma.gl/core/lib/shader-cache';

	export default class Component {
		constructor();
		clone(newProps: any): any;
		readonly stats: any;
		_initState(): void;

		props: any;

		/**	
		* The layer's id, used for matching with layers from last render cycle	
		*/
		id: string;

		/**	
		* Keep track of how many layer instances you are generating	
		*/
		count: number;

		/**	
		* Helps track and debug the life cycle of the layers	
		*/
		lifecycle: string;

		/**	
		* reference to the composite layer parent that rendered this layer	
		*/
		parent: Component;

		/**	
		* Will reference layer manager's context, contains state shared by layers	
		*/
		context: { gl: WebGLRenderingContext, shaderCache: ShaderCache };

		/**	
		* Will be set to the shared layer state object during layer matching	
		*/
		state: any;

		internalState: any;
	}

}
declare module '@deck.gl/core/lib/layer-state' {
	import ComponentState from '@deck.gl/core/lifecycle/component-state';
	export default class LayerState extends ComponentState {
		constructor({ attributeManager, layer }: {
			attributeManager: any;
			layer: any;
		});
		layer: any;
	}

}
declare module '@deck.gl/core/lib/layer' {
	import AttributeManager from '@deck.gl/core/lib/attribute-manager';
	import Component from '@deck.gl/core/lifecycle/component';
	import { PickInfo } from '@deck.gl/core/lib/deck';
	import * as hammerjs from 'hammerjs';
	import { RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";
	export interface TransitionTiming {
		duration?: number;
		easing?: (t: number) => number;
	}
	export interface LightSettings {
		lightsPosition?: number[],
		ambientRatio?: number,
		diffuseRatio?: number,
		specularRatio?: number,
		lightsStrength?: number[],
		numberOfLights?: number
	}
	export interface LayerInputHandler {
		(o: PickInfo<any>, e: HammerInput): void;
	}
	export type DataSet<D> = Iterable<D>;
	// | AsyncIterable ToDo: Add AsyncIterable
	// | { length: number } Todo: Support non-iterable objects, see deck.gl docs: /docs/developer-guide/using-layers.md#accessors
	export interface LayerProps<D> {
		coordinateSystem?: number;
		coordinateOrigin?: [number, number];
		wrapLongitude?: boolean;
		id?: string;
		data?: DataSet<D> | Promise<DataSet<D>> | string;
		visible?: boolean;
		opacity?: number;
		transitions?: { [attributeGetter: string]: TransitionTiming };
		pickable?: boolean;
		autoHighlight?: boolean;
		highlightColor?: RGBAColor;
		highlightedObjectIndex?: number;
		onClick?: LayerInputHandler;
		onHover?: LayerInputHandler;
		onDragStart?: LayerInputHandler;
		onDrag?: LayerInputHandler;
		onDragEnd?: LayerInputHandler;
		lightSettings?: LightSettings;
		positionFormat?: 'XYZ' | 'XY';
		colorFormat?: 'RGBA' | 'RGB';
		numInstances?: number;
	}
	export default class Layer<D> extends Component {
		constructor(props: LayerProps<D>);
		toString(): string;
		setState(updateObject: any): void;
		setNeedsRedraw(redraw?: boolean): void;
		setNeedsUpdate(): void;
		getNeedsRedraw(opts?: {
			clearRedrawFlags: boolean;
		}): boolean;
		needsUpdate(): any;
		hasUniformTransition(): any;
		isPickable(): any;
		getModels(): any;
		getSingleModel(): any;
		getAttributeManager(): any;
		getCurrentLayer(): any;
		getLoadOptions(): any;
		getFirstObject(): any;
		project(xyz: any): any[];
		unproject(xy: any): any;
		projectPosition(xyz: any): any;
		projectFlat(lngLat: any): any;
		unprojectFlat(xy: any): any;
		use64bitPositions(): boolean;
		onHover(info: any, pickingEvent: any): any;
		onClick(info: any, pickingEvent: any): any;
		nullPickingColor(): RGBAColor;
		encodePickingColor(i: any, target?: any[]): RGBAColor;
		decodePickingColor(color: any): number;
		initializeState(): void;
		getShaders(shaders: any): any;
		shouldUpdateState({ oldProps, props, context, changeFlags }: {
			oldProps: any;
			props: any;
			context: any;
			changeFlags: any;
		}): any;
		updateState({ oldProps, props, context, changeFlags }: {
			oldProps: any;
			props: any;
			context: any;
			changeFlags: any;
		}): void;
		finalizeState(): void;
		draw(opts: any): void;
		getPickingInfo({ info, mode }: {
			info: any;
			mode: any;
		}): any;
		invalidateAttribute(name?: string, diffReason?: string): void;
		updateAttributes(changedAttributes: any): void;
		_updateAttributes(props: any): void;
		_updateAttributeTransition(): void;
		_updateUniformTransition(): any;
		calculateInstancePickingColors(attribute: any, { numInstances, startRow, endRow }: {
			numInstances: any;
			startRow: any;
			endRow: any;
		}): void;
		_setModelAttributes(model: any, changedAttributes: any): void;
		clearPickingColor(color: any): void;
		restorePickingColors(): void;
		getNumInstances(props: any): any;
		getBufferLayout(props: any): any;
		_initialize(): void;
		_update(): void;
		_updateState(): void;
		_finalize(): void;
		drawLayer({ moduleParameters, uniforms, parameters }: {
			moduleParameters?: any;
			uniforms?: {};
			parameters?: {};
		}): void;
		pickLayer(opts: any): any;
		getChangeFlags(): any;
		setChangeFlags(flags: any): void;
		clearChangeFlags(): void;
		printChangeFlags(): string;
		diffProps(newProps: any, oldProps: any): void;
		validateProps(): void;
		setModuleParameters(moduleParameters: any): void;
		_getUpdateParams(): {
			props: any;
			oldProps: any;
			context: any;
			changeFlags: any;
		};
		_getNeedsRedraw(opts: any): boolean;
		_getAttributeManager(): AttributeManager;
		_initState(): void;
		_transferState(oldLayer: any): void;
		_onAsyncPropUpdated(): void;
		_activeUpdateTrigger(propName: any): void;
		setLayerNeedsUpdate(): void;
		setUniforms(uniformMap: any): void;
	}

}
declare module '@deck.gl/core/lib/composite-layer' {
	import Layer, { LayerProps } from '@deck.gl/core/lib/layer';
	export interface CompositeLayerProps<D> extends LayerProps<D> {
		_subLayerProps?: Object,
	}
	export default class CompositeLayer<D> extends Layer<D> {
		constructor(props: CompositeLayerProps<D>);
		readonly isComposite: boolean;
		getSubLayers(): any;
		initializeState(): void;
		setState(updateObject: any): void;
		getPickingInfo({ info }: {
			info: any;
		}): any;
		renderLayers(): any;
		shouldRenderSubLayer(id: any, data: any): any;
		getSubLayerClass(id: any, DefaultLayerClass: any): any;
		getSubLayerRow(row: any, sourceObject: any, sourceObjectIndex: any): any;
		getSubLayerAccessor(accessor: any): any;
		getSubLayerProps(sublayerProps: any): {
			opacity: any;
			pickable: any;
			visible: any;
			parameters: any;
			getPolygonOffset: any;
			highlightedObjectIndex: any;
			autoHighlight: any;
			highlightColor: any;
			coordinateSystem: any;
			coordinateOrigin: any;
			wrapLongitude: any;
			positionFormat: any;
			modelMatrix: any;
			extensions: any;
		};
		_getAttributeManager(): any;
		_renderLayers(): void;
	}

}
declare module '@deck.gl/core/viewports/viewport' {
	export default class Viewport {
		/**
		* @classdesc
		* Manages coordinate system transformations for deck.gl.
		*
		* Note: The Viewport is immutable in the sense that it only has accessors.
		* A new viewport instance should be created if any parameters have changed.
		*/
		constructor(opts?: {});
		equals(viewport: any): any;
		/**
		* Projects xyz (possibly latitude and longitude) to pixel coordinates in window
		* using viewport projection parameters
		* - [longitude, latitude] to [x, y]
		* - [longitude, latitude, Z] => [x, y, z]
		* Note: By default, returns top-left coordinates for canvas/SVG type render
		*
		* @param {Array} lngLatZ - [lng, lat] or [lng, lat, Z]
		* @param {Object} opts - options
		* @param {Object} opts.topLeft=true - Whether projected coords are top left
		* @return {Array} - [x, y] or [x, y, z] in top left coords
		*/
		project(xyz: any, { topLeft }?: {
			topLeft?: boolean;
		}): any[];
		/**
		* Unproject pixel coordinates on screen onto world coordinates,
		* (possibly [lon, lat]) on map.
		* - [x, y] => [lng, lat]
		* - [x, y, z] => [lng, lat, Z]
		* @param {Array} xyz -
		* @param {Object} opts - options
		* @param {Object} opts.topLeft=true - Whether origin is top left
		* @return {Array|null} - [lng, lat, Z] or [X, Y, Z]
		*/
		unproject(xyz: any, { topLeft, targetZ }?: {
			topLeft?: boolean;
			targetZ: any;
		}): any[];
		projectPosition(xyz: any): any[];
		unprojectPosition(xyz: any): any[];
		/**
		* Project [lng,lat] on sphere onto [x,y] on 512*512 Mercator Zoom 0 tile.
		* Performs the nonlinear part of the web mercator projection.
		* Remaining projection is done with 4x4 matrices which also handles
		* perspective.
		* @param {Array} lngLat - [lng, lat] coordinates
		*   Specifies a point on the sphere to project onto the map.
		* @return {Array} [x,y] coordinates.
		*/
		projectFlat(xyz: any, scale?: any): any;
		/**
		* Unproject world point [x,y] on map onto {lat, lon} on sphere
		* @param {object|Vector} xy - object with {x,y} members
		*  representing point on projected map plane
		* @return {GeoCoordinates} - object with {lat,lon} of point on sphere.
		*   Has toArray method if you need a GeoJSON Array.
		*   Per cartographic tradition, lat and lon are specified as degrees.
		*/
		unprojectFlat(xyz: any, scale?: any): any;
		getDistanceScales(coordinateOrigin?: any): any;
		getMatrices({ modelMatrix }?: {
			modelMatrix?: any;
		}): any;
		containsPixel({ x, y, width, height }: {
			x: any;
			y: any;
			width?: number;
			height?: number;
		}): boolean;
		getFrustumPlanes(): any;
		getCameraPosition(): any;
		getCameraDirection(): any;
		getCameraUp(): any;
		_createProjectionMatrix({ orthographic, fovyRadians, aspect, focalDistance, near, far }: {
			orthographic: any;
			fovyRadians: any;
			aspect: any;
			focalDistance: any;
			near: any;
			far: any;
		}): any;
		_initViewMatrix(opts: any): void;
		_getCenterInWorld({ longitude, latitude }: {
			longitude: any;
			latitude: any;
		}): any;
		_initProjectionMatrix(opts: any): void;
		_initPixelMatrices(): void;
	}

}
declare module '@deck.gl/core/lib/layer-manager' {
	export default class LayerManager {
		constructor(gl: any, { deck, stats, viewport, timeline }?: {
			deck: any;
			stats: any;
			viewport?: any;
			timeline?: any;
		});
		finalize(): void;
		needsRedraw(opts?: {
			clearRedrawFlags: boolean;
		}): any;
		needsUpdate(): any;
		setNeedsRedraw(reason: any): void;
		setNeedsUpdate(reason: any): void;
		getLayers({ layerIds }?: {
			layerIds?: any;
		}): any;
		setProps(props: any): void;
		setLayers(newLayers: any, forceUpdate?: boolean): this;
		updateLayers(): void;
		_checkIfNeedsRedraw(opts: any): any;
		activateViewport(viewport: any): this;
		_updateLayers({ oldLayers, newLayers }: {
			oldLayers: any;
			newLayers: any;
		}): {
			error: any;
			generatedLayers: any[];
		};
		_updateSublayersRecursively({ newLayers, oldLayerMap, generatedLayers }: {
			newLayers: any;
			oldLayerMap: any;
			generatedLayers: any;
		}): any;
		_finalizeOldLayers(oldLayerMap: any): any;
		_initializeLayer(layer: any): any;
		_transferLayerState(oldLayer: any, newLayer: any): void;
		_updateLayer(layer: any): any;
		_finalizeLayer(layer: any): any;
		/**
		* Called upon Seer initialization, manually sends layers data.
		*/
		_initSeer(): void;
		/**
		* On Seer property edition, set override and update layers.
		*/
		_editSeer(payload: any): void;
	}

}
declare module 'lib' {
	export { COORDINATE_SYSTEM } from '@deck.gl/core/lib/constants';
	export { default as Layer } from '@deck.gl/core/lib/layer';
	export { default as CompositeLayer } from '@deck.gl/core/lib/composite-layer';
	export { default as AttributeManager } from '@deck.gl/core/lib/attribute-manager';
	export { default as LayerManager } from '@deck.gl/core/lib/layer-manager';

}
declare module '@deck.gl/core/effects/lighting/point-light' {
	import { PointLight as BasePointLight } from '@luma.gl/core';
	export default class PointLight extends BasePointLight {
		constructor(props: any);
		getProjectedLight({ layer }: {
			layer: any;
		}): any;
	}

}
declare module '@deck.gl/core/effects/lighting/camera-light' {
	import PointLight from '@deck.gl/core/effects/lighting/point-light';
	export default class CameraLight extends PointLight {
		getProjectedLight({ layer }: {
			layer: any;
		}): any;
	}

}
declare module '@deck.gl/core/effects/lighting/suncalc' {
	export function getSolarPosition(timestamp: any, latitude: any, longitude: any): {
		azimuth: number;
		altitude: number;
	};
	export function getSunlightDirection(timestamp: any, latitude: any, longitude: any): number[];

}
declare module '@deck.gl/core/effects/lighting/sun-light' {
	import DirectionalLight from '@deck.gl/core/effects/lighting/directional-light';
	export default class SunLight extends DirectionalLight {
		constructor({ timestamp, ...others }: {
			[x: string]: any;
			timestamp: any;
		});
		getProjectedLight({ layer }: {
			layer: any;
		}): this;
	}

}
declare module '@deck.gl/core/passes/screen-pass' {
	import Pass from '@deck.gl/core/passes/pass';
	export default class ScreenPass extends Pass {
		constructor(gl: any, props?: {});
		render(params: any): void;
		delete(): void;
		_getModel(gl: any, module: any, fs: any, id: any, userProps: any): any;
		/**
		* Renders the pass.
		* This is an abstract method that should be overridden.
		* @param {Framebuffer} inputBuffer - Frame buffer that contains the result of the previous pass
		* @param {Framebuffer} outputBuffer - Frame buffer that serves as the output render target
		*/
		_renderPass(gl: any, { inputBuffer, outputBuffer }: {
			inputBuffer: any;
			outputBuffer: any;
		}): void;
	}

}
declare module '@deck.gl/core/effects/post-process-effect' {
	import Effect from '@deck.gl/core/lib/effect';
	export default class PostProcessEffect extends Effect {
		constructor(module: any, props?: {});
		prepare(gl: any): void;
		render(params: any): {
			inputBuffer: any;
			outputBuffer: any;
		};
		cleanup(): void;
	}

}
declare module '@deck.gl/core/utils/deep-equal' {
	export function deepEqual(a: any, b: any): any;

}
declare module '@deck.gl/core/utils/positions' {
	export type Position = [number, number] | [number, number, number];
	export function parsePosition(value: any): {
		position: number;
		relative: boolean;
	};
	export function getPosition(position: any, extent: any): any;

}
declare module '@deck.gl/core/views/view' {
	export default class View {
		constructor(props?: {});
		equals(view: any): any;
		makeViewport({ width, height, viewState }: {
			width: any;
			height: any;
			viewState: any;
		}): any;
		getViewStateId(): any;
		filterViewState(viewState: any): any;
		getDimensions({ width, height }: {
			width: any;
			height: any;
		}): {
			x: any;
			y: any;
			width: any;
			height: any;
		};
		_getControllerProps(defaultOpts: any): any;
		_getViewport(props: any): any;
		_parseDimensions({ x, y, width, height }: {
			x: any;
			y: any;
			width: any;
			height: any;
		}): void;
	}

}
declare module '@deck.gl/core/lib/view-manager' {
	export default class ViewManager {
		constructor(props?: {});
		finalize(): void;
		needsRedraw(opts?: {
			clearRedrawFlags: boolean;
		}): any;
		setNeedsUpdate(reason: any): void;
		updateViewStates(): void;
		/** Get a set of viewports for a given width and height
		* TODO - Intention is for deck.gl to autodeduce width and height and drop the need for props
		* @param rect (object, optional) - filter the viewports
		*   + not provided - return all viewports
		*   + {x, y} - only return viewports that contain this pixel
		*   + {x, y, width, height} - only return viewports that overlap with this rectangle
		*/
		getViewports(rect: any): any;
		getViews(): {};
		getView(viewOrViewId: any): any;
		getViewState(viewId: any): any;
		getViewport(viewId: any): any;
		/**
		* Unproject pixel coordinates on screen onto world coordinates,
		* (possibly [lon, lat]) on map.
		* - [x, y] => [lng, lat]
		* - [x, y, z] => [lng, lat, Z]
		* @param {Array} xyz -
		* @param {Object} opts - options
		* @param {Object} opts.topLeft=true - Whether origin is top left
		* @return {Array|null} - [lng, lat, Z] or [X, Y, Z]
		*/
		unproject(xyz: any, opts: any): any;
		setProps(props: any): void;
		_update(): void;
		_setSize(width: any, height: any): void;
		_setViews(views: any): void;
		_setViewState(viewState: any): void;
		_onViewStateChange(viewId: any, event: any): void;
		_createController(props: any): any;
		_updateController(view: any, viewState: any, viewport: any, controller: any): any;
		_rebuildViewports(): void;
		_buildViewportMap(): void;
		_diffViews(newViews: any, oldViews: any): any;
	}

}
declare module '@deck.gl/core/viewports/web-mercator-viewport' {
	import Viewport from '@deck.gl/core/viewports/viewport';
	export default class WebMercatorViewport extends Viewport {
		/**
		* @classdesc
		* Creates view/projection matrices from mercator params
		* Note: The Viewport is immutable in the sense that it only has accessors.
		* A new viewport instance should be created if any parameters have changed.
		*/
		constructor(opts?: {});
		/**
		* Converts a meter offset to a lnglat offset
		*
		* Note: Uses simple linear approximation around the viewport center
		* Error increases with size of offset (roughly 1% per 100km)
		*
		* @param {[Number,Number]|[Number,Number,Number]) xyz - array of meter deltas
		* @return {[Number,Number]|[Number,Number,Number]) - array of [lng,lat,z] deltas
		*/
		metersToLngLatDelta(xyz: any): any[];
		/**
		* Converts a lnglat offset to a meter offset
		*
		* Note: Uses simple linear approximation around the viewport center
		* Error increases with size of offset (roughly 1% per 100km)
		*
		* @param {[Number,Number]|[Number,Number,Number]) deltaLngLatZ - array of [lng,lat,z] deltas
		* @return {[Number,Number]|[Number,Number,Number]) - array of meter deltas
		*/
		lngLatDeltaToMeters(deltaLngLatZ: any): any[];
		/**
		* Add a meter delta to a base lnglat coordinate, returning a new lnglat array
		*
		* Note: Uses simple linear approximation around the viewport center
		* Error increases with size of offset (roughly 1% per 100km)
		*
		* @param {[Number,Number]|[Number,Number,Number]) lngLatZ - base coordinate
		* @param {[Number,Number]|[Number,Number,Number]) xyz - array of meter deltas
		* @return {[Number,Number]|[Number,Number,Number]) array of [lng,lat,z] deltas
		*/
		addMetersToLngLat(lngLatZ: any, xyz: any): any;
		/**
		* Get the map center that place a given [lng, lat] coordinate at screen
		* point [x, y]
		*
		* @param {Array} lngLat - [lng,lat] coordinates
		*   Specifies a point on the sphere.
		* @param {Array} pos - [x,y] coordinates
		*   Specifies a point on the screen.
		* @return {Array} [lng,lat] new map center.
		*/
		getMapCenterByLngLatPosition({ lngLat, pos }: {
			lngLat: any;
			pos: any;
		}): any;
		getLocationAtPoint({ lngLat, pos }: {
			lngLat: any;
			pos: any;
		}): any;
		/**
		* Returns a new viewport that fit around the given rectangle.
		* Only supports non-perspective mode.
		* @param {Array} bounds - [[lon, lat], [lon, lat]]
		* @param {Number} [options.padding] - The amount of padding in pixels to add to the given bounds.
		* @param {Array} [options.offset] - The center of the given bounds relative to the map's center,
		*    [x, y] measured in pixels.
		* @returns {WebMercatorViewport}
		*/
		fitBounds(bounds: any, options?: {}): WebMercatorViewport;
	}

}
declare module '@deck.gl/core/transitions/transition-interpolator' {
	export default class TransitionInterpolator {
		/**
		* @param opts {array|object}
		* @param opts.compare {array} - prop names used in equality check
		* @param opts.extract {array} - prop names needed for interpolation
		* @param opts.required {array} - prop names that must be supplied
		* alternatively, supply one list of prop names as `opts` if all of the above are the same.
		*/
		constructor(opts?: {});
		/**
		* Checks if two sets of props need transition in between
		* @param currentProps {object} - a list of viewport props
		* @param nextProps {object} - a list of viewport props
		* @returns {bool} - true if two props are equivalent
		*/
		arePropsEqual(currentProps: any, nextProps: any): boolean;
		/**
		* Called before transition starts to validate/pre-process start and end props
		* @param startProps {object} - a list of starting viewport props
		* @param endProps {object} - a list of target viewport props
		* @returns {Object} {start, end} - start and end props to be passed
		*   to `interpolateProps`
		*/
		initializeProps(startProps: any, endProps: any): any;
		/**
		* Returns viewport props in transition
		* @param startProps {object} - a list of starting viewport props
		* @param endProps {object} - a list of target viewport props
		* @param t {number} - a time factor between [0, 1]
		* @returns {object} - a list of interpolated viewport props
		*/
		interpolateProps(startProps: any, endProps: any, t: any): void;
		_checkRequiredProps(props: any): void;
	}

}
declare module '@deck.gl/core/transitions/linear-interpolator' {
	import TransitionInterpolator from '@deck.gl/core/transitions/transition-interpolator';
	/**
	* Performs linear interpolation of two view states.
	*/
	export default class LinearInterpolator extends TransitionInterpolator {
		/**
		* @param {Array} transitionProps - list of props to apply linear transition to.
		*/
		constructor(transitionProps?: string[]);
		interpolateProps(startProps: any, endProps: any, t: any): {};
	}

}
declare module '@deck.gl/core/controllers/transition-manager' {
	export const TRANSITION_EVENTS: {
		BREAK: number;
		SNAP_TO_END: number;
		IGNORE: number;
	};
	export default class TransitionManager {
		constructor(ControllerState: any, props?: {});
		finalize(): void;
		getViewportInTransition(): any;
		processViewStateChange(nextProps: any): boolean;
		updateTransition(): void;
		_isTransitionEnabled(props: any): any;
		_isUpdateDueToCurrentTransition(props: any): any;
		_shouldIgnoreViewportChange(currentProps: any, nextProps: any): any;
		_triggerTransition(startProps: any, endProps: any): void;
		_onTransitionEnd(callback: any): (transition: any) => void;
		_onTransitionUpdate(transition: any): void;
	}

}
declare module '@deck.gl/core/controllers/controller' {
	export interface ControllerOptions { }
	export default class Controller {
		constructor(ControllerState: any, options?: ControllerOptions);
		finalize(): void;
		/**
		* Callback for events
		* @param {hammer.Event} event
		*/
		handleEvent(event: any): boolean;
		getCenter(event: any): number[];
		isPointInBounds(pos: any, event: any): boolean;
		isFunctionKeyPressed(event: any): boolean;
		isDragging(): any;
		/**
		* Extract interactivity options
		*/
		setProps(props: any): void;
		updateTransition(): void;
		toggleEvents(eventNames: any, enabled: any): void;
		setOptions(props: any): void;
		updateViewport(newControllerState: any, extraProps?: {}, interactionState?: {}): void;
		_onPanStart(event: any): boolean;
		_onPan(event: any): boolean;
		_onPanEnd(event: any): boolean;
		_onPanMove(event: any): boolean;
		_onPanRotate(event: any): boolean | void;
		_onWheel(event: any): boolean;
		_onPinchStart(event: any): boolean;
		_onPinch(event: any): boolean;
		_onPinchEnd(event: any): boolean;
		_onDoubleTap(event: any): boolean;
		_onKeyDown(event: any): boolean;
		_getTransitionProps(): {
			transitionDuration: number;
		};
	}

}
declare module '@deck.gl/core/controllers/view-state' {
	export default class ViewState {
		constructor(opts: any);
		getViewportProps(): any;
		getDirection(): any;
		getDirectionFromBearing(bearing: any): any;
		shortestPathFrom(viewState: any): any;
		_applyConstraints(props: any): any;
	}

}
declare module '@deck.gl/core/controllers/map-controller' {
	import Controller from '@deck.gl/core/controllers/controller';
	import ViewState from '@deck.gl/core/controllers/view-state';
	import LinearInterpolator from '@deck.gl/core/transitions/linear-interpolator';
	import { InteractiveState } from '@deck.gl/core/lib/deck';
	export const MAPBOX_LIMITS: {
		minZoom: number;
		maxZoom: number;
		minPitch: number;
		maxPitch: number;
	}; class MapState extends ViewState {
		constructor({
			/** Mapbox viewport properties */
			/** The width of the viewport */
			width,
			/** The height of the viewport */
			height,
			/** The latitude at the center of the viewport */
			latitude,
			/** The longitude at the center of the viewport */
			longitude,
			/** The tile zoom level of the map. */
			zoom,
			/** The bearing of the viewport in degrees */
			bearing,
			/** The pitch of the viewport in degrees */
			pitch,
			/**
			* Specify the altitude of the viewport camera
			* Unit: map heights, default 1.5
			* Non-public API, see https://github.com/mapbox/mapbox-gl-js/issues/1137
			*/
			altitude,
			/** Viewport constraints */
			maxZoom, minZoom, maxPitch, minPitch,
			/** Interaction states, required to calculate change during transform */
			startPanLngLat, startZoomLngLat,
			/** Bearing when current perspective rotate operation started */
			startBearing,
			/** Pitch when current perspective rotate operation started */
			startPitch,
			/** Zoom when current zoom operation started */
			startZoom }?: {
				width: any;
				height: any;
				latitude: any;
				longitude: any;
				zoom: any;
				bearing?: number;
				pitch?: number;
				altitude?: number;
				maxZoom?: number;
				minZoom?: number;
				maxPitch?: number;
				minPitch?: number;
				startPanLngLat: any;
				startZoomLngLat: any;
				startBearing: any;
				startPitch: any;
				startZoom: any;
			});
		getViewportProps(): any;
		getInteractiveState(): InteractiveState;
		/**
		* Start panning
		* @param {[Number, Number]} pos - position on screen where the pointer grabs
		*/
		panStart({ pos }: {
			pos: any;
		}): MapState;
		/**
		* Pan
		* @param {[Number, Number]} pos - position on screen where the pointer is
		* @param {[Number, Number], optional} startPos - where the pointer grabbed at
		*   the start of the operation. Must be supplied of `panStart()` was not called
		*/
		pan({ pos, startPos }: {
			pos: any;
			startPos: any;
		}): MapState;
		/**
		* End panning
		* Must call if `panStart()` was called
		*/
		panEnd(): MapState;
		/**
		* Start rotating
		* @param {[Number, Number]} pos - position on screen where the center is
		*/
		rotateStart({ pos }: {
			pos: any;
		}): MapState;
		/**
		* Rotate
		* @param {Number} deltaScaleX - a number between [-1, 1] specifying the
		*   change to bearing.
		* @param {Number} deltaScaleY - a number between [-1, 1] specifying the
		*   change to pitch. -1 sets to minPitch and 1 sets to maxPitch.
		*/
		rotate({ deltaScaleX, deltaScaleY }: {
			deltaScaleX?: number;
			deltaScaleY?: number;
		}): MapState;
		/**
		* End rotating
		* Must call if `rotateStart()` was called
		*/
		rotateEnd(): MapState;
		/**
		* Start zooming
		* @param {[Number, Number]} pos - position on screen where the center is
		*/
		zoomStart({ pos }: {
			pos: any;
		}): MapState;
		/**
		* Zoom
		* @param {[Number, Number]} pos - position on screen where the current center is
		* @param {[Number, Number]} startPos - the center position at
		*   the start of the operation. Must be supplied of `zoomStart()` was not called
		* @param {Number} scale - a number between [0, 1] specifying the accumulated
		*   relative scale.
		*/
		zoom({ pos, startPos, scale }: {
			pos: any;
			startPos: any;
			scale: any;
		}): MapState;
		/**
		* End zooming
		* Must call if `zoomStart()` was called
		*/
		zoomEnd(): MapState;
		zoomIn(): any;
		zoomOut(): any;
		moveLeft(): MapState;
		moveRight(): MapState;
		moveUp(): MapState;
		moveDown(): MapState;
		rotateLeft(): MapState;
		rotateRight(): MapState;
		rotateUp(): MapState;
		rotateDown(): MapState;
		shortestPathFrom(viewState: any): any;
		_zoomFromCenter(scale: any): any;
		_panFromCenter(offset: any): MapState;
		_getUpdatedState(newProps: any): MapState;
		_applyConstraints(props: any): any;
		_unproject(pos: any): any;
		_calculateNewLngLat({ startPanLngLat, pos }: {
			startPanLngLat: any;
			pos: any;
		}): any;
		_calculateNewZoom({ scale, startZoom }: {
			scale: any;
			startZoom: any;
		}): any;
		_calculateNewPitchAndBearing({ deltaScaleX, deltaScaleY, startBearing, startPitch }: {
			deltaScaleX: any;
			deltaScaleY: any;
			startBearing: any;
			startPitch: any;
		}): {
			pitch: any;
			bearing: any;
		};
	}
	export default class MapController extends Controller {
		constructor(props: any);
		_getTransitionProps(): {
			transitionDuration: number;
			transitionEasing: (t: any) => any;
			transitionInterpolator: LinearInterpolator;
			transitionInterruption: number;
		};
		_onPanRotate(event: any): boolean | void;
	}
	export const testExports: {
		MapState: typeof MapState;
	};
	export { };

}
declare module '@deck.gl/core/views/map-view' {
	import View from '@deck.gl/core/views/view';
	export default class MapView extends View {
		constructor(props: any);
		readonly controller: any;
	}

}
declare module '@deck.gl/core/lib/effect-manager' {
	export default class EffectManager {
		constructor();
		setProps(props: any): void;
		needsRedraw(opts?: {
			clearRedrawFlags: boolean;
		}): any;
		getEffects(): any;
		finalize(): void;
		setEffects(effects?: any[]): void;
		cleanup(): void;
		_createInternalEffects(): void;
	}

}
declare module '@deck.gl/core/passes/draw-layers-pass' {
	import LayersPass from '@deck.gl/core/passes/layers-pass';
	export default class DrawLayersPass extends LayersPass {
		getModuleParameters(layer: any, effects: any, effectProps: any): any;
		/**
		* Returns the picking color of currenlty selected object of the given 'layer'.
		* @return {Array} - the picking color or null if layers selected object is invalid.
		*/
		getObjectHighlightParameters(layer: any): {
			pickingHighlightColor: any[];
		};
	}

}
declare module '@deck.gl/core/passes/pick-layers-pass' {
	import LayersPass from '@deck.gl/core/passes/layers-pass';
	export default class PickLayersPass extends LayersPass {
		render(props: any): void;
		drawPickingBuffer({ layers, viewports, onViewportActive, pickingFBO, effectProps, deviceRect: { x, y, width, height }, redrawReason }: {
			layers: any;
			viewports: any;
			onViewportActive: any;
			pickingFBO: any;
			effectProps: any;
			deviceRect: {
				x: any;
				y: any;
				width: any;
				height: any;
			};
			redrawReason?: string;
		}): any;
		shouldDrawLayer(layer: any, viewport: any): any;
		getModuleParameters(layer: any, effects: any, effectProps: any): any;
		getLayerParameters(layer: any, layerIndex: any, glViewport: any, parameters: any): any;
	}

}
declare module '@deck.gl/core/lib/deck-renderer' {
	export default class DeckRenderer {
		constructor(gl: any);
		setProps(props: any): void;
		renderLayers({ layers, viewports, activateViewport, views, redrawReason, clearCanvas, effects, pass, stats }: {
			layers: any;
			viewports: any;
			activateViewport: any;
			views: any;
			redrawReason?: string;
			clearCanvas?: boolean;
			effects?: any[];
			pass: any;
			stats: any;
		}): void;
		needsRedraw(opts?: {
			clearRedrawFlags: boolean;
		}): any;
		finalize(): void;
		prepareEffects(params: any): {};
		prepareRenderBuffers(): void;
		postRender(effects: any): void;
		logRenderStats({ renderStats, pass, redrawReason, stats }: {
			renderStats: any;
			pass: any;
			redrawReason: any;
			stats: any;
		}): void;
	}

}
declare module '@deck.gl/core/lib/picking/query-object' {
	/**
	* Pick at a specified pixel with a tolerance radius
	* Returns the closest object to the pixel in shape `{pickedColor, pickedLayer, pickedObjectIndex}`
	*/
	export function getClosestObject({ pickedColors, layers, deviceX, deviceY, deviceRadius, deviceRect }: {
		pickedColors: any;
		layers: any;
		deviceX: any;
		deviceY: any;
		deviceRadius: any;
		deviceRect: any;
	}): {
		pickedColor: any;
		pickedLayer: any;
		pickedObjectIndex: any;
	};
	/**
	* Examines a picking buffer for unique colors
	* Returns array of unique objects in shape `{x, y, pickedColor, pickedLayer, pickedObjectIndex}`
	*/
	export function getUniqueObjects({ pickedColors, layers }: {
		pickedColors: any;
		layers: any;
	}): any[];

}
declare module '@deck.gl/core/lib/picking/pick-info' {
	export function processPickInfo({ pickInfo, lastPickedInfo, mode, layers, viewports, x, y, deviceX, deviceY, pixelRatio }: {
		pickInfo: any;
		lastPickedInfo: any;
		mode: any;
		layers: any;
		viewports: any;
		x: any;
		y: any;
		deviceX: any;
		deviceY: any;
		pixelRatio: any;
	}): Map<any, any>;
	export function getLayerPickingInfo({ layer, info, mode }: {
		layer: any;
		info: any;
		mode: any;
	}): any;

}
declare module '@deck.gl/core/lib/deck-picker' {
	export default class DeckPicker {
		constructor(gl: any);
		setProps(props: any): void;
		pickObject({ x, y, mode, radius, layers, viewports, activateViewport, depth, event }: {
			x: any;
			y: any;
			mode: any;
			radius?: number;
			layers: any;
			viewports: any;
			activateViewport: any;
			depth?: number;
			event?: any;
		}): {
			result: any[];
			emptyInfo: any;
		};
		pickObjects({ x, y, width, height, layers, viewports, activateViewport }: {
			x: any;
			y: any;
			width: any;
			height: any;
			layers: any;
			viewports: any;
			activateViewport: any;
		}): any[];
		getLastPickedObject({ x, y, layers, viewports }: {
			x: any;
			y: any;
			layers: any;
			viewports: any;
		}, lastPickedInfo?: any): any;
		updatePickingBuffer(): any;
		pickClosestObject({ layers, viewports, x, y, radius, depth, mode, onViewportActive }: {
			layers: any;
			viewports: any;
			x: any;
			y: any;
			radius: any;
			depth?: number;
			mode: any;
			onViewportActive: any;
		}): {
			result: any[];
			emptyInfo: any;
		};
		pickVisibleObjects({ layers, viewports, x, y, width, height, mode, onViewportActive }: {
			layers: any;
			viewports: any;
			x: any;
			y: any;
			width: any;
			height: any;
			mode: any;
			onViewportActive: any;
		}): any[];
		drawAndSamplePickingBuffer({ layers, viewports, onViewportActive, deviceRect, redrawReason }: {
			layers: any;
			viewports: any;
			onViewportActive: any;
			deviceRect: any;
			redrawReason: any;
		}): Uint8Array;
		getPickingRect({ deviceX, deviceY, deviceRadius, deviceWidth, deviceHeight }: {
			deviceX: any;
			deviceY: any;
			deviceRadius: any;
			deviceWidth: any;
			deviceHeight: any;
		}): {
			x: number;
			y: number;
			width: number;
			height: number;
		};
		callLayerPickingCallbacks(infos: any, mode: any): any[];
	}

}
declare module '@deck.gl/core/lib/tooltip' {
	export default class Tooltip {
		constructor(canvas: any);
		setTooltip(displayInfo: any, x: any, y: any): void;
		remove(): void;
	}

}
declare module '@deck.gl/core/lib/deck' {
	import Controller from '@deck.gl/core/controllers/controller';
	import ControllerOptions from '@deck.gl/core/controllers/controller';
	import Effect from '@deck.gl/core/lib/effect';
	import Layer from '@deck.gl/core/lib/layer';
	import View from '@deck.gl/core/views/view';
	import Viewport from '@deck.gl/core/viewports/viewport';

	export interface InteractiveState {
		isDragging: boolean;
	}

	export interface PickInfo<D> {
		layer: Layer<D>,
		index: number;
		object: object;
		x: number;
		y: number;
		coordinate?: {}
	}

	export interface DeckProps {
		//https://github.com/uber/deck.gl/blob/6.3-release/modules/core/src/lib/deck.js

		id?: string;
		style?: {};
		canvas?: HTMLCanvasElement | string;

		width: number | string;
		height: number | string;

		// layer/view/controller settings
		layers: Layer<any>[];
		layerFilter?: (x: { layer: Layer<any>, viewport: Viewport, isPicking: boolean }) => boolean;
		views?: View[];
		initialViewState?: any;
		viewState?: any;
		effects?: Effect[];
		controller?: Controller | ControllerOptions | boolean;

		// GL settings
		gl?: WebGLRenderingContext;
		glOptions?: WebGLContextAttributes;
		parameters?: object;
		pickingRadius?: number;
		useDevicePixels?: boolean;

		// Callbacks
		getCursor?: (interactiveState: InteractiveState) => string;
		onWebGLInitialized?: (gl: WebGLRenderingContext) => any;
		onResize?: () => any;
		onViewStateChange?: (viewState: any) => any;
		onBeforeRender?: () => any;
		onAfterRender?: () => any;
		onClick?: <D>(info: PickInfo<D>, pickedInfos: PickInfo<D>[], e: MouseEvent) => any;
		onHover?: <D>(info: PickInfo<D>, pickedInfos: PickInfo<D>[], e: MouseEvent) => any;
		onLoad?: () => any;

		// Debug settings
		debug?: boolean;
		drawPickingColors?: boolean;

		// Experimental props

		// Forces a redraw every animation frame
		_animate?: boolean;
	}

	export default class Deck {
		constructor(props: DeckProps);
		viewState: any;
		finalize(): void;
		props: DeckProps;
		setProps(props: Partial<DeckProps>): void;
		needsRedraw(opts?: {
			clearRedrawFlags: boolean;
		}): any;
		redraw(force: any): void;
		getViews(): any;
		getViewports(rect: any): any;
		pickObject({ x, y, radius, layerIds }: {
			x: any;
			y: any;
			radius?: number;
			layerIds?: any;
		}): any;
		pickMultipleObjects({ x, y, radius, layerIds, depth }: {
			x: any;
			y: any;
			radius?: number;
			layerIds?: any;
			depth?: number;
		}): any;
		pickObjects({ x, y, width, height, layerIds }: {
			x: any;
			y: any;
			width?: number;
			height?: number;
			layerIds?: any;
		}): any;
		_createCanvas(props: any): any;
		_setCanvasSize(props: any): void;
		_updateCanvasSize(): void;
		_checkForCanvasSizeChange(): boolean;
		_createAnimationLoop(props: any): any;
		_getViewState(props: any): any;
		_getViews(props: any): any;
		_onPointerMove(event: any): void;
		_pickAndCallback(): void;
		_updateCursor(): void;
		_setGLContext(gl: any): void;
		_drawLayers(redrawReason: any, renderOptions: any): void;
		_onRendererInitialized({ gl }: {
			gl: any;
		}): void;
		_onRenderFrame(animationProps: any): void;
		_onViewStateChange(params: any): void;
		_onInteractiveStateChange(interactiveState: InteractiveState): void;
		_onEvent(event: any): void;
		_onPointerDown(event: any): void;
		_getFrameStats(): void;
		_getMetrics(): void;
	}

}
declare module '@deck.gl/core/controllers/first-person-controller' {
	import Controller from '@deck.gl/core/controllers/controller';
	export default class FirstPersonController extends Controller {
		constructor(props: any);
	}

}
declare module '@deck.gl/core/views/first-person-view' {
	import View from '@deck.gl/core/views/view';
	import Viewport from '@deck.gl/core/viewports/viewport';
	export default class FirstPersonView extends View {
		readonly controller: any;
		_getViewport(props: any): Viewport;
	}

}
declare module '@deck.gl/core/views/third-person-view' {
	import View from '@deck.gl/core/views/view';
	import Viewport from '@deck.gl/core/viewports/viewport';
	export default class ThirdPersonView extends View {
		_getViewport(props: any): Viewport;
	}

}
declare module '@deck.gl/core/controllers/orbit-controller' {
	import Controller from '@deck.gl/core/controllers/controller';
	import ViewState from '@deck.gl/core/controllers/view-state';
	import LinearInterpolator from '@deck.gl/core/transitions/linear-interpolator';
	import { InteractiveState } from '@deck.gl/core/lib/deck';
	export class OrbitState extends ViewState {
		constructor({ ViewportType, width, // Width of viewport
			height, // Height of viewport
			orbitAxis, rotationX, // Rotation around x axis
			rotationOrbit, // Rotation around orbit axis
			target, zoom, fovy, minRotationX, maxRotationX, minZoom, maxZoom,
			/** Interaction states, required to calculate change during transform */
			startPanPosition, startTarget, startRotationX, startRotationOrbit, startZoomPosition, startZoom }: {
				ViewportType: any;
				width: any;
				height: any;
				orbitAxis?: string;
				rotationX?: number;
				rotationOrbit?: number;
				target?: number[];
				zoom?: number;
				fovy?: number;
				minRotationX?: number;
				maxRotationX?: number;
				minZoom?: number;
				maxZoom?: number;
				startPanPosition: any;
				startTarget: any;
				startRotationX: any;
				startRotationOrbit: any;
				startZoomPosition: any;
				startZoom: any;
			});
		getViewportProps(): any;
		getInteractiveState(): InteractiveState;
		/**
		* Start panning
		* @param {[Number, Number]} pos - position on screen where the pointer grabs
		*/
		panStart({ pos }: {
			pos: any;
		}): OrbitState;
		/**
		* Pan
		* @param {[Number, Number]} pos - position on screen where the pointer is
		*/
		pan({ pos, startPos }: {
			pos: any;
			startPos: any;
		}): OrbitState;
		/**
		* End panning
		* Must call if `panStart()` was called
		*/
		panEnd(): OrbitState;
		/**
		* Start rotating
		* @param {[Number, Number]} pos - position on screen where the pointer grabs
		*/
		rotateStart({ pos }: {
			pos: any;
		}): OrbitState;
		/**
		* Rotate
		* @param {[Number, Number]} pos - position on screen where the pointer is
		*/
		rotate({ deltaScaleX, deltaScaleY }: {
			deltaScaleX: any;
			deltaScaleY: any;
		}): OrbitState;
		/**
		* End rotating
		* Must call if `rotateStart()` was called
		*/
		rotateEnd(): OrbitState;
		shortestPathFrom(viewState: any): any;
		/**
		* Start zooming
		* @param {[Number, Number]} pos - position on screen where the pointer grabs
		*/
		zoomStart({ pos }: {
			pos: any;
		}): OrbitState;
		/**
		* Zoom
		* @param {[Number, Number]} pos - position on screen where the current target is
		* @param {[Number, Number]} startPos - the target position at
		*   the start of the operation. Must be supplied of `zoomStart()` was not called
		* @param {Number} scale - a number between [0, 1] specifying the accumulated
		*   relative scale.
		*/
		zoom({ pos, startPos, scale }: {
			pos: any;
			startPos: any;
			scale: any;
		}): OrbitState;
		/**
		* End zooming
		* Must call if `zoomStart()` was called
		*/
		zoomEnd(): OrbitState;
		zoomIn(): OrbitState;
		zoomOut(): OrbitState;
		moveLeft(): OrbitState;
		moveRight(): OrbitState;
		moveUp(): OrbitState;
		moveDown(): OrbitState;
		rotateLeft(): OrbitState;
		rotateRight(): OrbitState;
		rotateUp(): OrbitState;
		rotateDown(): OrbitState;
		_calculateNewZoom({ scale, startZoom }: {
			scale: any;
			startZoom: any;
		}): any;
		_calculateNewTarget({ startTarget, zoom, pixelOffset }: {
			startTarget: any;
			zoom: any;
			pixelOffset: any;
		}): any;
		_getUpdatedState(newProps: any): OrbitState;
		_applyConstraints(props: any): any;
	}
	export default class OrbitController extends Controller {
		constructor(props: any);
		_getTransitionProps(): {
			transitionDuration: number;
			transitionEasing: (t: any) => any;
			transitionInterpolator: LinearInterpolator;
			transitionInterruption: number;
		};
	}

}
declare module '@deck.gl/core/views/orbit-view' {
	import View from '@deck.gl/core/views/view';
	import Viewport from '@deck.gl/core/viewports/viewport';
	export interface OrbitViewState {
		distance: number;
		fov: number;
		lookAt: number[];
		rotationOrbit: number;
		rotationX: number;
		zoom: number;
	}
	export default class OrbitView extends View {
		constructor(props: any);
		readonly controller: any;
	}

}
declare module '@deck.gl/core/views/perspective-view' {
	import View from '@deck.gl/core/views/view';
	import Viewport from '@deck.gl/core/viewports/viewport';
	export default class PerspectiveView extends View {
		_getViewport(props: any): Viewport;
	}

}
declare module '@deck.gl/core/controllers/orthographic-controller' {
	import Controller from '@deck.gl/core/controllers/controller';
	import LinearInterpolator from '@deck.gl/core/transitions/linear-interpolator';
	export default class OrthographicController extends Controller {
		constructor(props: any);
		_onPanRotate(event: any): boolean | void;
		_getTransitionProps(): {
			transitionDuration: number;
			transitionEasing: (t: any) => any;
			transitionInterpolator: LinearInterpolator;
			transitionInterruption: number;
		};
	}

}
declare module '@deck.gl/core/views/orthographic-view' {
	import View from '@deck.gl/core/views/view';
	export default class OrthographicView extends View {
		constructor(props: any);
		readonly controller: any;
	}

}
declare module '@deck.gl/core/transitions/viewport-fly-to-interpolator' {
	import TransitionInterpolator from '@deck.gl/core/transitions/transition-interpolator';
	/**
	* This class adapts mapbox-gl-js Map#flyTo animation so it can be used in
	* react/redux architecture.
	* mapbox-gl-js flyTo : https://www.mapbox.com/mapbox-gl-js/api/#map#flyto.
	* It implements “Smooth and efficient zooming and panning.” algorithm by
	* "Jarke J. van Wijk and Wim A.A. Nuij"
	*/
	export default class FlyToInterpolator extends TransitionInterpolator {
		constructor();
		interpolateProps(startProps: any, endProps: any, t: any): any;
	}

}
declare module '@deck.gl/core/utils/tesselator' {
	export default class Tesselator {
		constructor(opts?: {});
		updateGeometry({ data, getGeometry, positionFormat, dataChanged }: {
			data: any;
			getGeometry: any;
			positionFormat: any;
			dataChanged: any;
		}): void;
		updatePartialGeometry({ startRow, endRow }: {
			startRow: any;
			endRow: any;
		}): void;
		updateGeometryAttributes(geometry: any, startIndex: any, size: any): void;
		getGeometrySize(geometry: any): void;
		/**
		* Visit all objects
		* `data` is expected to be an iterable consistent with the base Layer expectation
		*/
		_forEachGeometry(visitor: any, startRow: any, endRow: any): void;
		_rebuildGeometry(dataRange: any): void;
	}

}
declare module '@deck.gl/core/lib/layer-extension' {
	export class LayerExtension {
		constructor(opts?: {});
		equals(extension: any): any;
		getShaders(extension: any): any;
		getSubLayerProps(extension: any): {
			updateTriggers: {};
		};
		initializeState(context: any, extension: any): void;
		updateState(params: any, extension: any): void;
		finalizeState(extension: any): void;
	}

}
declare module '@deck.gl/core' {
	import '@deck.gl/core/lib/init';
	import '@deck.gl/core/shaderlib';
	export { COORDINATE_SYSTEM } from '@deck.gl/core/lib/constants';
	export { default as LightingEffect } from '@deck.gl/core/effects/lighting/lighting-effect';
	export { default as PointLight } from '@deck.gl/core/effects/lighting/point-light';
	export { default as DirectionalLight } from '@deck.gl/core/effects/lighting/directional-light';
	export { default as _CameraLight } from '@deck.gl/core/effects/lighting/camera-light';
	export { default as _SunLight } from '@deck.gl/core/effects/lighting/sun-light';
	export { default as PostProcessEffect } from '@deck.gl/core/effects/post-process-effect';
	export { default as _LayersPass } from '@deck.gl/core/passes/layers-pass';
	export { default as Deck, DeckProps } from '@deck.gl/core/lib/deck';
	export { default as LayerManager } from '@deck.gl/core/lib/layer-manager';
	export { default as AttributeManager } from '@deck.gl/core/lib/attribute-manager';
	export { default as Layer } from '@deck.gl/core/lib/layer';
	export { default as CompositeLayer } from '@deck.gl/core/lib/composite-layer';
	export { default as DeckRenderer } from '@deck.gl/core/lib/deck-renderer';
	export { default as Viewport } from '@deck.gl/core/viewports/viewport';
	export { default as WebMercatorViewport } from '@deck.gl/core/viewports/web-mercator-viewport';
	export { default as project } from '@deck.gl/core/shaderlib/project/project';
	export { default as project64 } from '@deck.gl/core/shaderlib/project64/project64';
	export { default as View } from '@deck.gl/core/views/view';
	export { default as MapView } from '@deck.gl/core/views/map-view';
	export { default as FirstPersonView } from '@deck.gl/core/views/first-person-view';
	export { default as ThirdPersonView } from '@deck.gl/core/views/third-person-view';
	export { default as OrbitView, OrbitViewState } from '@deck.gl/core/views/orbit-view';
	export { default as PerspectiveView } from '@deck.gl/core/views/perspective-view';
	export { default as OrthographicView } from '@deck.gl/core/views/orthographic-view';
	export { default as Controller } from '@deck.gl/core/controllers/controller';
	export { default as MapController } from '@deck.gl/core/controllers/map-controller';
	export { default as _FirstPersonController } from '@deck.gl/core/controllers/first-person-controller';
	export { default as _OrbitController } from '@deck.gl/core/controllers/orbit-controller';
	export { default as _OrthographicController } from '@deck.gl/core/controllers/orthographic-controller';
	export { default as Effect } from '@deck.gl/core/lib/effect';
	export { TRANSITION_EVENTS } from '@deck.gl/core/controllers/transition-manager';
	export { default as LinearInterpolator } from '@deck.gl/core/transitions/linear-interpolator';
	export { default as FlyToInterpolator } from '@deck.gl/core/transitions/viewport-fly-to-interpolator';
	export { default as log } from '@deck.gl/core/utils/log';
	import { flattenVertices, fillArray } from '@deck.gl/core/utils/flatten';
	export { createIterable } from '@deck.gl/core/utils/iterable-utils';
	export { fp64LowPart } from '@deck.gl/core/utils/math-utils';
	import Tesselator from '@deck.gl/core/utils/tesselator';
	import { count } from '@deck.gl/core/utils/count';
	import memoize from '@deck.gl/core/utils/memoize';
	export { AmbientLight } from '@luma.gl/core';
	export { LayerExtension } from '@deck.gl/core/lib/layer-extension';
	export const experimental: {
		Tesselator: typeof Tesselator;
		flattenVertices: typeof flattenVertices;
		fillArray: typeof fillArray;
		count: typeof count;
		memoize: typeof memoize;
	};

}
declare module '@deck.gl/core/utils/color' {
	export type Color = [number, number, number] | [number, number, number, number];
	function parseColor(color: any, target: any, index?: number): any; function applyOpacity(color: any, opacity?: number): any[]; const _default: {
		parseColor: typeof parseColor;
		applyOpacity: typeof applyOpacity;
	};
	export default _default;

}
