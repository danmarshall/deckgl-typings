declare const isBrowser: any;
declare module '@deck.gl/core/utils/log' {
	const _default: any;
	export default _default;

}
declare module '@deck.gl/core/lib/init' {
	export { };

}
declare module '@deck.gl/core/lib/constants' {
	export const COORDINATE_SYSTEM: {
		LNGLAT: number;
		METER_OFFSETS: number;
		METERS: number;
		LNGLAT_OFFSETS: number;
		IDENTITY: number;
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
	/**
	 * Returns uniforms for shaders based on current projection
	 * includes: projection matrix suitable for shaders
	 *
	 * TODO - Ensure this works with any viewport, not just WebMercatorViewports
	 *
	 * @param {WebMercatorViewport} viewport -
	 * @return {Float32Array} - 4x4 projection matrix that can be used in shaders
	 */
	export function getUniformsFromViewport({ viewport, devicePixelRatio, modelMatrix, coordinateSystem, coordinateOrigin, projectionMode, positionOrigin }?: {
		viewport: any;
		devicePixelRatio?: number;
		modelMatrix?: any;
		coordinateSystem?: number;
		coordinateOrigin?: number[];
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
		deprecations: ({
			type: string;
			old: string;
			new: string;
			deprecated?: undefined;
		} | {
			type: string;
			old: string;
			new?: undefined;
			deprecated?: undefined;
		} | {
			type: string;
			old: string;
			new: string;
			deprecated: number;
		})[];
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
			deprecations: ({
				type: string;
				old: string;
				new: string;
				deprecated?: undefined;
			} | {
				type: string;
				old: string;
				new?: undefined;
				deprecated?: undefined;
			} | {
				type: string;
				old: string;
				new: string;
				deprecated: number;
			})[];
		}[];
		vs: string;
	};
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
declare module '@deck.gl/core/shaderlib/project/project-functions' {
	/**
	 * Equivalent to project_position in project.glsl
	 * projects a user supplied position to world position in the target coordinates system
	 * @param {array} position - [x, y, z]
	 * @param {object} params
	 * @param {Viewport} params.viewport - the current viewport
	 * @param {number} params.coordinateSystem - the coordinate system to project into
	 * @param {array} params.coordinateOrigin - the coordinate origin to project into
	 * @param {Matrix4} [params.modelMatrix] - the model matrix of the supplied position
	 * @param {number} [params.fromCoordinateSystem] - the coordinate system that the
	 *   supplied position is in. Default to the same as `coordinateSystem`.
	 * @param {array} [params.fromCoordinateOrigin] - the coordinate origin that the
	 *   supplied position is in. Default to the same as `coordinateOrigin`.
	 */
	export function projectPosition(position: any, { viewport, coordinateSystem, coordinateOrigin, modelMatrix, fromCoordinateSystem, fromCoordinateOrigin }: {
		viewport: any;
		coordinateSystem: any;
		coordinateOrigin: any;
		modelMatrix: any;
		fromCoordinateSystem: any;
		fromCoordinateOrigin: any;
	}): any;

}
declare module '@deck.gl/core/shaderlib/lighting/lighting' {
	const _default: {
		name: string;
		dependencies: {
			name: string;
			dependencies: any[];
			vs: string;
			getUniforms: (opts?: {}) => any;
			deprecations: ({
				type: string;
				old: string;
				new: string;
				deprecated?: undefined;
			} | {
				type: string;
				old: string;
				new?: undefined;
				deprecated?: undefined;
			} | {
				type: string;
				old: string;
				new: string;
				deprecated: number;
			})[];
		}[];
		vs: string;
		getUniforms: typeof getUniforms;
		deprecations: {
			type: string;
			old: string;
			new: string;
			deprecated: boolean;
		}[];
	};
	export default _default; function getUniforms(opts?: {}): {
		lighting_lightPositions?: undefined;
		lighting_lightStrengths?: undefined;
		lighting_ambientRatio?: undefined;
		lighting_diffuseRatio?: undefined;
		lighting_specularRatio?: undefined;
		lighting_numberOfLights?: undefined;
	} | {
		lighting_lightPositions: any;
		lighting_lightStrengths: any;
		lighting_ambientRatio: any;
		lighting_diffuseRatio: any;
		lighting_specularRatio: any;
		lighting_numberOfLights: any;
	};

}
declare module '@deck.gl/core/shaderlib' {
	import { fp32, fp64, picking, ShaderCache } from 'luma.gl';
	import project from '@deck.gl/core/shaderlib/project/project';
	import project64 from '@deck.gl/core/shaderlib/project64/project64';
	import lighting from '@deck.gl/core/shaderlib/lighting/lighting';
	export function initializeShaderModules(): void;
	export { fp32, fp64, picking, project, project64, lighting };

}
declare module '@deck.gl/core/lib/attribute' {
	const Attribute: any;
	export { Attribute };
	export default class LayerAttribute extends Attribute {
		constructor(gl: any, opts?: {});
		needsUpdate(): any;
		needsRedraw({ clearChangedFlags }?: {
			clearChangedFlags?: boolean;
		}): any;
		getInstanceCount(): number;
		getUpdateTriggers(): any[];
		supportsTransition(): any;
		setNeedsUpdate(reason?: any): void;
		setNeedsRedraw(reason?: any): void;
		setNumInstances(numInstances: any): void;
		allocate(numInstances: any): boolean;
		updateBuffer({ numInstances, data, props, context }: {
			numInstances: any;
			data: any;
			props: any;
			context: any;
		}): boolean;
		setGenericValue({ props }: {
			props: any;
		}): void;
		setExternalBuffer(buffer: any, numInstances: any): void;
		_normalizeValue(value: any, size?: any, defaultValue?: any): any;
		_areValuesEqual(value1: any, value2: any, size?: any): boolean;
		_updateBufferViaStandardAccessor(data: any, props: any): void;
		_validateAttributeUpdaters(): void;
		_checkAttributeArray(): void;
	}
	export function glArrayFromType(glType: any, { clamped }?: {
		clamped?: boolean;
	}): Float32ArrayConstructor | Uint16ArrayConstructor | Uint32ArrayConstructor | Uint8ClampedArrayConstructor | Uint8ArrayConstructor | Int8ArrayConstructor | Int16ArrayConstructor | Int32ArrayConstructor;

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
	export function countVertices(nestedArray: any): number;
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
declare module '@deck.gl/core/lib/attribute-transition-utils' {
	export function getShaders(transitions: any): {
		vs: string;
		fs: string;
		varyings: any[];
	};
	export function getBuffers(transitions: any): {
		sourceBuffers: {};
		destinationBuffers: {};
	};
	export function padBuffer({ fromState, toState, fromLength, toLength }: {
		fromState: any;
		toState: any;
		fromLength: any;
		toLength: any;
	}): void;

}
declare module '@deck.gl/core/transitions/transition' {
	export const TRANSITION_STATE: {
		NONE: string;
		PENDING: string;
		IN_PROGRESS: string;
		ENDED: string;
	};
	export default class Transition {
	    /**
	     * @params props {object} - properties of the transition.
	     *
	     * @params props.duration {number} - total time to complete the transition
	     * @params props.easing {func} - easing function
	     * @params props.onStart {func} - callback when transition starts
	     * @params props.onUpdate {func} - callback when transition updates
	     * @params props.onInterrupt {func} - callback when transition is interrupted
	     * @params props.onEnd {func} - callback when transition ends
	     *
	     * Any additional properties are also saved on the instance but have no effect.
	     */
		constructor(props: any);
		readonly state: any;
		readonly inProgress: boolean;
	    /**
	     * (re)start this transition.
	     * @params props {object} - optional overriding props. see constructor
	     */
		start(props: any): void;
	    /**
	     * cancel this transition if it is in progress.
	     */
		cancel(): void;
	    /**
	     * update this transition.
	     * @params currentTime {number} - timestamp of the update. should be in the same unit as `duration`.
	     */
		update(currentTime: any): boolean;
		_setState(newState: any): void;
	}

}
declare module '@deck.gl/core/lib/attribute-transition-manager' {
	export default class AttributeTransitionManager {
		constructor(gl: any, { id }: {
			id: any;
		});
		finalize(): void;
		update({ attributes, transitions, numInstances }: {
			attributes: any;
			transitions?: {};
			numInstances: any;
		}): void;
		hasAttribute(attributeName: any): boolean;
		getAttributes(): {};
		setCurrentTime(currentTime: any): any;
		_createTransition(attributeName: any, attribute: any): any;
		_removeTransition(attributeName: any): void;
		_updateAttribute(attributeName: any, attribute: any): boolean;
		_invalidateModel(): void;
		_createModel(): void;
		_getNextTransitionStates(transition: any): {
			fromState: any;
			toState: any;
			buffer: any;
		};
		_getTransitionSettings(attribute: any): any;
		_normalizeTransitionSettings(settings: any): {
			duration: any;
			easing: any;
			onStart: any;
			onEnd: any;
			onInterrupt: any;
		};
		_triggerTransition(transition: any, settings: any): void;
	}

}
declare module '@deck.gl/core/lib/attribute-manager' {
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
		constructor(gl: any, { id, stats }?: {
			id?: string;
			stats: any;
		});
		finalize(): void;
		getNeedsRedraw({ clearRedrawFlags }?: {
			clearRedrawFlags?: boolean;
		}): any;
		setNeedsRedraw(redraw?: boolean): this;
		add(attributes: any, updaters?: {}): void;
		addInstanced(attributes: any, updaters?: {}): void;
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
		invalidate(triggerName: any): void;
		invalidateAll(): void;
		update({ data, numInstances, transitions, props, buffers, context, ignoreUnknownAttributes }?: {
			data: any;
			numInstances: any;
			transitions: any;
			props?: {};
			buffers?: {};
			context?: {};
			ignoreUnknownAttributes?: boolean;
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
	     * This indicates which WebGLBuggers need to be updated
	     * @return {Object} attributes - descriptors
	     */
		getChangedAttributes({ transition, clearChangedFlags }: {
			transition?: boolean;
			clearChangedFlags?: boolean;
		}): any;
		getAccessors(): any;
		_add(attributes: any, updaters: any, extraProps?: {}): void;
		_mapUpdateTriggersToAttributes(): void;
		_invalidateTrigger(triggerName: any): any;
		_setExternalBuffers(bufferMap: any): void;
		_checkExternalBuffers({ buffers, ignoreUnknownAttributes }?: {
			buffers?: {};
			ignoreUnknownAttributes?: boolean;
		}): void;
		_checkIfBuffersNeedUpdating({ numInstances }: {
			numInstances: any;
		}): boolean;
		_setGenericAttributes({ data, props, context }: {
			data: any;
			props: any;
			context: any;
		}): void;
		_allocateBuffers({ numInstances, data, props, context }: {
			numInstances: any;
			data: any;
			props: any;
			context: any;
		}): void;
		_updateBuffers({ numInstances, data, props, context }: {
			numInstances: any;
			data: any;
			props: any;
			context: any;
		}): void;
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
declare module '@deck.gl/core/lifecycle/props' {
	export function diffProps(props: any, oldProps: any): {
		dataChanged: string;
		propsChanged: string;
		updateTriggersChanged: boolean;
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
	export function compareProps({ newProps, oldProps, ignoreProps, shallowCompareProps, triggerName }?: {
		newProps: any;
		oldProps: any;
		ignoreProps?: {};
		shallowCompareProps?: {};
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
		_postProcessValue(propName: any, value: any): any;
		_createAsyncPropData(propName: any, value: any, defaultValue: any): void;
	}

}
declare module '@deck.gl/core/lifecycle/component' {
	import { ShaderCache } from 'luma.gl';

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
	import Component from '@deck.gl/core/lifecycle/component';
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
	export interface LayerProps {
		coordinateSystem?: number;
		id?: string;
		transitions?: { [attributeGetter: string]: TransitionTiming };
		pickable?: boolean;
		autoHighlight?: boolean;
		highlightColor?: number[];
		onClick?: (o) => void;
		onHover?: (o) => void;
		lightSettings?: LightSettings;
	}
	export interface LayerStateChange {
		oldProps: LayerProps;
		props: LayerProps;
		context?: any;
		changeFlags: any;
	}
	export default class Layer extends Component {
		constructor(props: LayerProps);
		toString(): string;
		setState(updateObject: any): void;
		setNeedsRedraw(redraw?: boolean): void;
		setLayerNeedsUpdate(): void;
		getNeedsRedraw({ clearRedrawFlags }?: {
			clearRedrawFlags?: boolean;
		}): boolean;
		needsUpdate(): any;
		isPickable(): any;
		getModels(): any;
		getSingleModel(): any;
		getAttributeManager(): any;
		getCurrentLayer(): any;
		getFirstObject(): any;
		project(lngLat: any): any;
		unproject(xy: any): any;
		projectFlat(lngLat: any): any;
		unprojectFlat(xy: any): any;
		is64bitEnabled(): boolean;
		screenToDevicePixels(screenPixels: any): number;
		nullPickingColor(): number[];
		encodePickingColor(i: any): number[];
		decodePickingColor(color: any): number;
		initializeState(): void;
		shouldUpdateState(stateChange: LayerStateChange): boolean;
		updateState(stateChange: LayerStateChange): void;
		finalizeState(): void;
		draw(opts: any): void;
		getPickingInfo({ info, mode }: {
			info: any;
			mode: any;
		}): any;
		invalidateAttribute(name?: string, diffReason?: string): void;
		updateAttributes(props: any): void;
		updateTransition(): void;
		calculateInstancePickingColors(attribute: any, { numInstances }: {
			numInstances: any;
		}): void;
		_clearInstancePickingColor(color: any): void;
		_clearPickingColor(color: any): void;
		clearPickingColor(color: any): void;
		copyPickingColors(): Uint8ClampedArray;
		restorePickingColors(value: any): void;
		getNumInstances(props: any): any;
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
		_getUpdateParams(): LayerStateChange;
		_getNeedsRedraw(clearRedrawFlags: any): boolean;
		_initState(): void;
		_transferState(oldLayer: any): void;
		_onAsyncPropUpdated(): void;
		_activeUpdateTrigger(propName: any): void;
		_checkRequiredProp(propertyName: any, condition: any): void;
		_updateBaseUniforms(): void;
		_updateModuleSettings(): void;
		setUniforms(uniformMap: any): void;
	}

}
declare module '@deck.gl/core/lib/draw-layers' {
	export const getPixelRatio: ({ useDevicePixels }: {
		useDevicePixels: any;
	}) => number;
	export function drawLayers(gl: any, { layers, viewports, onViewportActive, useDevicePixels, drawPickingColors, deviceRect, parameters, layerFilter, pass, redrawReason, stats }: {
		layers: any;
		viewports: any;
		onViewportActive: any;
		useDevicePixels: any;
		drawPickingColors?: boolean;
		deviceRect?: any;
		parameters?: {};
		layerFilter?: any;
		pass?: string;
		redrawReason?: string;
		stats: any;
	}): void;
	export function drawPickingBuffer(gl: any, { layers, viewports, onViewportActive, useDevicePixels, pickingFBO, deviceRect: { x, y, width, height }, layerFilter, redrawReason }: {
		layers: any;
		viewports: any;
		onViewportActive: any;
		useDevicePixels: any;
		pickingFBO: any;
		deviceRect: {
			x: any;
			y: any;
			width: any;
			height: any;
		};
		layerFilter?: any;
		redrawReason?: string;
	}): any;

}
declare module '@deck.gl/core/lib/pick-layers' {
	export function pickObject(gl: any, { layers, viewports, x, y, radius, layerFilter, depth, mode, onViewportActive, pickingFBO, lastPickedInfo, useDevicePixels }: {
		layers: any;
		viewports: any;
		x: any;
		y: any;
		radius: any;
		layerFilter: any;
		depth?: number;
		mode: any;
		onViewportActive: any;
		pickingFBO: any;
		lastPickedInfo: any;
		useDevicePixels: any;
	}): any[];
	export function pickVisibleObjects(gl: any, { layers, viewports, x, y, width, height, mode, layerFilter, onViewportActive, pickingFBO, useDevicePixels }: {
		layers: any;
		viewports: any;
		x: any;
		y: any;
		width: any;
		height: any;
		mode: any;
		layerFilter: any;
		onViewportActive: any;
		pickingFBO: any;
		useDevicePixels: any;
	}): any[];
	/**
	 * Pick at a specified pixel with a tolerance radius
	 * Returns the closest object to the pixel in shape `{pickedColor, pickedLayer, pickedObjectIndex}`
	 */
	export function getClosestFromPickingBuffer(gl: any, { pickedColors, layers, deviceX, deviceY, deviceRadius, deviceRect }: {
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

}
declare module '@deck.gl/core/utils/deep-equal' {
	export function deepEqual(a: any, b: any): any;

}
declare module '@deck.gl/core/utils/math-utils' {
	export function transformVector(matrix: any, vector: any): any;
	export function createMat4(): number[];
	export function extractCameraVectors({ viewMatrix, viewMatrixInverse }: {
		viewMatrix: any;
		viewMatrixInverse: any;
	}): {
			eye: any[];
			direction: any[];
			up: any[];
		};
	export function mod(value: any, divisor: any): any;

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
	    /**
	     * Project [lng,lat] on sphere onto [x,y] on 512*512 Mercator Zoom 0 tile.
	     * Performs the nonlinear part of the web mercator projection.
	     * Remaining projection is done with 4x4 matrices which also handles
	     * perspective.
	     * @param {Array} lngLat - [lng, lat] coordinates
	     *   Specifies a point on the sphere to project onto the map.
	     * @return {Array} [x,y] coordinates.
	     */
		projectFlat([x, y]: [any, any], scale?: any): any;
	    /**
	     * Unproject world point [x,y] on map onto {lat, lon} on sphere
	     * @param {object|Vector} xy - object with {x,y} members
	     *  representing point on projected map plane
	     * @return {GeoCoordinates} - object with {lat,lon} of point on sphere.
	     *   Has toArray method if you need a GeoJSON Array.
	     *   Per cartographic tradition, lat and lon are specified as degrees.
	     */
		unprojectFlat(xyz: any, scale?: any): any;
		_projectFlat(xyz: any, scale?: any): any;
		_unprojectFlat(xyz: any, scale?: any): any;
		getMercatorParams(): {
			longitude: any;
			latitude: any;
		};
		isMapSynched(): boolean;
		getDistanceScales(coordinateOrigin?: any): any;
		getMatrices({ modelMatrix }?: {
			modelMatrix?: any;
		}): any;
		getCameraPosition(): any;
		getCameraDirection(): any;
		getCameraUp(): any;
		_addMetersToLngLat(lngLatZ: any, xyz: any): any[];
		_metersToLngLatDelta(xyz: any): any[];
		_createProjectionMatrix({ orthographic, fovyRadians, aspect, focalDistance, near, far }: {
			orthographic: any;
			fovyRadians: any;
			aspect: any;
			focalDistance: any;
			near: any;
			far: any;
		}): any;
		_initViewMatrix(opts: any): void;
		_initProjectionMatrix(opts: any): void;
		_initPixelMatrices(): void;
	}

}
declare module '@deck.gl/core/utils/positions' {
	export type Position = [number, number] | [number, number, number];
	export function parsePosition(value: any): {
		position: any;
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
		getDimensions({ width, height }: {
			width: any;
			height: any;
		}): {
				x: any;
				y: any;
				width: any;
				height: any;
			};
		_getViewport(props: any): any;
		_parseDimensions({ x, y, width, height }: {
			x: any;
			y: any;
			width: any;
			height: any;
		}): void;
	}

}
declare module '@deck.gl/core/views/view-manager' {
	export default class ViewManager {
		constructor(props?: {});
		finalize(): void;
		needsRedraw({ clearRedrawFlags }?: {
			clearRedrawFlags?: boolean;
		}): any;
		setNeedsRedraw(reason: any): void;
		setNeedsUpdate(reason: any): void;
		getViewports(): any;
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
		project(xyz: any, opts?: {
			topLeft: boolean;
		}): any;
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
	    /**
	     * Set props needed for layer rendering and picking.
	     * Parameters are to be passed as a single object, with the following values:
	     * @param {Boolean} useDevicePixels
	     */
		setProps(props: any): void;
		setSize(width: any, height: any): void;
		setViews(views: any): void;
		setViewState(viewState: any): void;
		_rebuildViewportsFromViews(): void;
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
		addMetersToLngLat(lngLatZ: any, xyz: any): any[];
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
		isMapSynched(): boolean;
		_projectFlat(lngLat: any, scale?: any): any;
		_unprojectFlat(xy: any, scale?: any): any;
	}

}
declare module '@deck.gl/core/views/map-view' {
	import View from '@deck.gl/core/views/view';
	export default class MapView extends View {
		constructor(props: any);
	}

}
declare module '@deck.gl/core/lib/layer-manager' {
	export default class LayerManager {
		constructor(gl: any, { eventManager, stats }?: {
			eventManager: any;
			stats: any;
		});
		finalize(): void;
		needsRedraw({ clearRedrawFlags }?: {
			clearRedrawFlags?: boolean;
		}): any;
		needsUpdate(): any;
		setNeedsRedraw(reason: any): void;
		setNeedsUpdate(reason: any): void;
		getLayers({ layerIds }?: {
			layerIds?: any;
		}): any;
		getViews(): any;
		getViewports(): any;
	    /**
	     * Set props needed for layer rendering and picking.
	     * Parameters are to be passed as a single object, with the following values:
	     * @param {Boolean} useDevicePixels
	     */
		setProps(props: any): void;
		setViews(views: any): void;
		setLayers(newLayers: any): this;
		updateLayers(): void;
		drawLayers({ pass, redrawReason }?: {
			pass?: string;
			redrawReason?: string;
		}): void;
		pickObject({ x, y, mode, radius, layerIds, layerFilter, depth }: {
			x: any;
			y: any;
			mode: any;
			radius?: number;
			layerIds: any;
			layerFilter: any;
			depth?: number;
		}): any[];
		pickObjects({ x, y, width, height, layerIds, layerFilter }: {
			x: any;
			y: any;
			width: any;
			height: any;
			layerIds: any;
			layerFilter: any;
		}): any[];
		setParameters(parameters: any): void;
		setSize(width: any, height: any): void;
		setViewState(viewState: any): void;
		setViewports(viewports: any): this;
		setViewport(viewport: any): this;
		_checkIfNeedsRedraw(clearRedrawFlags: any): any;
	    /**
	     * @param {Object} eventManager   A source of DOM input events
	     */
		_initEventHandling(eventManager: any): void;
		_setEventHandlingParameters({ pickingRadius, onLayerClick, onLayerHover }: {
			pickingRadius: any;
			onLayerClick: any;
			onLayerHover: any;
		}): void;
		_activateViewport(viewport: any): this;
		_getPickingBuffer(): any;
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
	     * Warn if a deck-level mouse event has been specified,
	     * but no layers are `pickable`.
	     */
		_validateEventHandling(): void;
	    /**
	     * Route click events to layers.
	     * `pickLayer` will call the `onClick` prop of any picked layer,
	     * and `onLayerClick` is called directly from here
	     * with any picking info generated by `pickLayer`.
	     * @param {Object} event  An object encapsulating an input event,
	     *                        with the following shape:
	     *                        {Object: {x, y}} offsetCenter: center of the event
	     *                        {Object} srcEvent:             native JS Event object
	     */
		_onClick(event: any): void;
	    /**
	     * Route click events to layers.
	     * `pickLayer` will call the `onHover` prop of any picked layer,
	     * and `onLayerHover` is called directly from here
	     * with any picking info generated by `pickLayer`.
	     * @param {Object} event  An object encapsulating an input event,
	     *                        with the following shape:
	     *                        {Object: {x, y}} offsetCenter: center of the event
	     *                        {Object} srcEvent:             native JS Event object
	     */
		_onPointerMove(event: any): void;
		_onPointerLeave(event: any): void;
		_pickAndCallback(options: any): void;
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
declare module '@deck.gl/core/experimental/lib/effect-manager' {
	export default class EffectManager {
		constructor({ gl, layerManager }: {
			gl: any;
			layerManager: any;
		});
	    /**
	     * Adds an effect to be managed.  That effect's initialize function will
	     * be called, and the effect's preDraw and draw callbacks will be
	     * called at the appropriate times in the render loop
	     * @param {Effect} effect - the effect to be added
	     */
		addEffect(effect: any): void;
	    /**
	     * Removes an effect that is already being managed.  That effect's
	     * finalize function will be called, and its callbacks will no longer
	     * be envoked in the render loop
	     * @param {Effect} effect - the effect to be removed
	     * @return {bool} - True if the effect was already being managed, and
	     * thus successfully removed; false otherwise
	     */
		removeEffect(effect: any): boolean;
	    /**
	     * Envoke the preDraw callback of all managed events, in order of
	     * decreasing priority
	     */
		preDraw(): void;
	    /**
	     * Envoke the draw callback of all managed events, in order of
	     * decreasing priority
	     */
		draw(): void;
		_sortEffects(): void;
	}

}
declare module '@deck.gl/core/experimental/lib/effect' {
	export default class Effect {
		constructor();
	    /**
	     * subclasses should override to set up any resources needed
	     */
		initialize({ gl, layerManager }: {
			gl: any;
			layerManager: any;
		}): void;
	    /**
	     * and subclasses should free those resources here
	     */
		finalize({ gl, layerManager }: {
			gl: any;
			layerManager: any;
		}): void;
	    /**
	     * override for a callback immediately before drawing each frame
	     */
		preDraw({ gl, layerManager }: {
			gl: any;
			layerManager: any;
		}): void;
	    /**
	     * override for a callback immediately after drawing a frame's layers
	     */
		draw({ gl, layerManager }: {
			gl: any;
			layerManager: any;
		}): void;
		setNeedsRedraw(redraw?: boolean): void;
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
		getViewportInTransition(): any;
		processViewStateChange(nextProps: any): boolean;
		_isTransitionEnabled(props: any): any;
		_isUpdateDueToCurrentTransition(props: any): any;
		_shouldIgnoreViewportChange(currentProps: any, nextProps: any): any;
		_triggerTransition(startProps: any, endProps: any): void;
		_onTransitionFrame(): void;
		_onTransitionEnd(callback: any): (transition: any) => void;
		_onTransitionUpdate(transition: any): void;
	}

}
declare module '@deck.gl/core/controllers/controller' {
	export default class Controller {
		constructor(ControllerState: any, options?: {});
		finalize(): void;
	    /**
	     * Callback for events
	     * @param {hammer.Event} event
	     */
		handleEvent(event: any): false | void;
		getCenter(event: any): any[];
		isFunctionKeyPressed(event: any): boolean;
		isDragging(): any;
	    /**
	     * Extract interactivity options
	     */
		setProps(props: any): void;
		toggleEvents(eventNames: any, enabled: any): void;
		setOptions(props: any): void;
		updateViewport(newControllerState: any, extraProps?: {}, interactionState?: {}): void;
		_onPanStart(event: any): void;
		_onPan(event: any): false | void;
		_onPanEnd(event: any): void;
		_onPanMove(event: any): false | void;
		_onPanRotate(event: any): false | void;
		_onPanRotateStandard(event: any): void;
		_onPanRotateMap(event: any): void;
		_onWheel(event: any): false | void;
		_onPinchStart(event: any): void;
		_onPinch(event: any): false | void;
		_onPinchEnd(event: any): void;
		_onDoubleTap(event: any): false | void;
		_onKeyDown(event: any): false | void;
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
		getInteractiveState(): any;
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
	}
	export const testExports: {
		MapState: typeof MapState;
	};
	export { };

}
declare module '@deck.gl/core/lib/deck' {
	import Controller from '@deck.gl/core/controllers/controller';
	import Layer from '@deck.gl/core/lib/layer';
	import View from '@deck.gl/core/views/view';
	export interface DeckProps {
		bearing?: number;
		latitude?: number;
		longitude?: number;
		pitch?: number;
		zoom?: number;
		layers?: Layer[];
		canvas?: HTMLCanvasElement | string;
		container?: HTMLElement | string;
		controller?: Controller;
		initialViewState?: any;
		parent?: HTMLElement;
		style?: {};
		views?: View[];
		viewState?: any;
	}
	export default class Deck {
		constructor(props: DeckProps);
		viewState: any;
		finalize(): void;
		props: DeckProps;
		setProps(props: DeckProps): void;
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
		getViewports(): any;
		_createCanvas(props: any): any;
		_setCanvasSize(props: any): void;
		_updateCanvasSize(): void;
		_checkForCanvasSizeChange(): boolean;
		_createController(props: any): any;
		_createAnimationLoop(props: any): any;
		_getViewState(props: any): any;
		_onViewStateChange({ viewState }: {
			viewState: any;
		}, ...args: any[]): void;
		_onInteractiveStateChange({ isDragging }: {
			isDragging?: boolean;
		}): void;
		_onRendererInitialized({ gl, canvas }: {
			gl: any;
			canvas: any;
		}): void;
		_onRenderFrame({ gl }: {
			gl: any;
		}): void;
	}

}
declare module '@deck.gl/core/lib/composite-layer' {
	import Layer from '@deck.gl/core/lib/layer';
	export interface CompositeLayerProps {
	}
	export default class CompositeLayer extends Layer {
		constructor(props: CompositeLayerProps);
		readonly isComposite: boolean;
		getSubLayers(): any;
		initializeState(): void;
		getPickingInfo({ info }: {
			info: any;
		}): any;
		renderLayers(): any;
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
			modelMatrix: any;
		};
		_renderLayers(): void;
	}

}
declare module '@deck.gl/core/views/first-person-view' {
	import View from '@deck.gl/core/views/view';
	import Viewport from '@deck.gl/core/viewports/viewport';
	export default class FirstPersonView extends View {
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
declare module '@deck.gl/core/views/orbit-view' {
	import View from '@deck.gl/core/views/view';
	import Viewport from '@deck.gl/core/viewports/viewport'; class OrbitViewport extends Viewport {
		project(xyz: any, { topLeft }?: {
			topLeft?: boolean;
		}): any[];
		unproject(xyz: any, { topLeft }?: {
			topLeft?: boolean;
		}): any;
	}
	export interface OrbitViewState {
		distance: number;
		fov: number;
		lookAt: number[];
		rotationOrbit: number;
		rotationX: number;
		zoom: number;
	}
	export default class OrbitView extends View {
		static getDistance({ boundingBox, fov }: {
			boundingBox: any;
			fov: any;
		}): number;
		_getViewport(props: any): OrbitViewport;
		_getViewMatrix(viewState: any): any;
	    /** Move camera to make a model bounding box centered at lookat position fit in the viewport.
	     * @param {Array} boundingBox - [sizeX, sizeY, sizeZ]], define the dimensions of bounding box
	     * @returns a new OrbitViewport object
	     */
		fitBounds(boundingBox: any, viewState: any): OrbitViewport;
	}
	export { };

}
declare module '@deck.gl/core/views/perspective-view' {
	import View from '@deck.gl/core/views/view';
	import Viewport from '@deck.gl/core/viewports/viewport';
	export default class PerspectiveView extends View {
		_getViewport(props: any): Viewport;
	}

}
declare module '@deck.gl/core/views/orthographic-view' {
	import View from '@deck.gl/core/views/view';
	import Viewport from '@deck.gl/core/viewports/viewport';
	export default class OrthographicView extends View {
		_getViewport({ x, y, width, height, viewState }: {
			x: any;
			y: any;
			width: any;
			height: any;
			viewState: any;
		}): Viewport;
	}

}
declare module '@deck.gl/core/controllers/first-person-controller' {
	import Controller from '@deck.gl/core/controllers/controller';
	export default class FirstPersonController extends Controller {
		constructor(props: any);
	}

}
declare module '@deck.gl/core/deprecated/orbit-viewport' {
	import Viewport from '@deck.gl/core/viewports/viewport';
	export default class OrbitViewport extends Viewport {
		constructor({ id, width, // Width of viewport
			height, // Height of viewport
			distance, // From eye position to lookAt
			rotationX, // Rotating angle around X axis
			rotationOrbit, // Rotating angle around orbit axis
			orbitAxis, // Orbit axis with 360 degrees rotating freedom, can only be 'Y' or 'Z'
			lookAt, // Which point is camera looking at, default origin
			up, // Defines up direction, default positive y axis
			fov, // Field of view covered by camera
			near, // Distance of near clipping plane
			far, // Distance of far clipping plane
			zoom }: {
				id?: string;
				width: any;
				height: any;
				distance: any;
				rotationX?: number;
				rotationOrbit?: number;
				orbitAxis?: string;
				lookAt?: number[];
				up?: number[];
				fov?: number;
				near?: number;
				far?: number;
				zoom?: number;
			});
		project(xyz: any, { topLeft }?: {
			topLeft?: boolean;
		}): any[];
		unproject(xyz: any, { topLeft }?: {
			topLeft?: boolean;
		}): any;
	    /** Get camera `distance` to make view fit a box centered at lookat position in the viewport.
	     * @param {Array} sizes - [sizeX, sizeY, sizeZ]], define the dimensions of bounding box
	     * @returns {Nunber} the new distance parameter
	     */
		getDistance({ boundingBox, fov }: {
			boundingBox: any;
			fov: any;
		}): number;
	    /** Move camera to make a model bounding box centered at lookat position fit in the viewport.
	     * @param {Array} boundingBox - [sizeX, sizeY, sizeZ]], define the dimensions of bounding box
	     * @returns a new OrbitViewport object
	     */
		fitBounds(boundingBox: any): OrbitViewport;
	}

}
declare module '@deck.gl/core/controllers/orbit-controller' {
	import Controller from '@deck.gl/core/controllers/controller';
	export default class OrbitController extends Controller {
		constructor(props: any);
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
	export default class ViewportFlyToInterpolator extends TransitionInterpolator {
		constructor();
		interpolateProps(startProps: any, endProps: any, t: any): any;
	}

}
declare module '@deck.gl/core/experimental/reflection-effect/reflection-effect' {
	import Effect from '@deck.gl/core/experimental/lib/effect';
	export default class ReflectionEffect extends Effect {
	    /**
	     * @classdesc
	     * ReflectionEffect
	     *
	     * @class
	     * @param reflectivity How visible reflections should be over the map, between 0 and 1
	     * @param blur how blurry the reflection should be, between 0 and 1
	     */
		constructor(reflectivity?: number, blur?: number);
		getShaders(): {
			vs: string;
			fs: string;
			modules: any[];
			shaderCache: any;
		};
		initialize({ gl, layerManager }: {
			gl: any;
			layerManager: any;
		}): void;
		preDraw({ gl, layerManager }: {
			gl: any;
			layerManager: any;
		}): void;
		draw({ gl, layerManager }: {
			gl: any;
			layerManager: any;
		}): void;
		finalize({ gl, layerManager }: {
			gl: any;
			layerManager: any;
		}): void;
	}

}
declare module '@deck.gl/core/utils/bin-sorter' {
	export default class BinSorter {
		constructor(bins?: any[], getValue?: (points: any) => any);
	    /**
	     * Get an array of object with sorted values and index of bins
	     * @param {Array} bins
	     * @param {Function} getValue
	     * @return {Array} array of values and index lookup
	     */
		getSortedBins(bins: any, getValue: any): any;
	    /**
	     * Get range of values of all bins
	     * @param {Number[]} range
	     * @param {Number} range[0] - lower bound
	     * @param {Number} range[1] - upper bound
	     * @return {Array} array of new value range
	     */
		getValueRange([lower, upper]: [any, any]): any[];
	    /**
	     * Get ths max count of all bins
	     * @return {Number | Boolean} max count
	     */
		getMaxCount(): number;
	    /**
	     * Get a mapping from cell/hexagon index to sorted bin
	     * This is used to retrieve bin value for color calculation
	     * @return {Object} bin index to sortedBins
	     */
		getBinMap(): any;
	}

}
declare module '@deck.gl/core/utils/color-utils' {
	export const defaultColorRange: number[][];

}
declare module '@deck.gl/core/utils/scale-utils' {
	export function linearScale(domain: any, range: any, value: any): any;
	export function quantizeScale(domain: any, range: any, value: any): any;
	export function getQuantizeScale(domain: any, range: any): (value: any) => any;
	export function getLinearScale(domain: any, range: any): (value: any) => any;

}
declare module '@deck.gl/core/deprecated/perspective-viewport' {
	import Viewport from '@deck.gl/core/viewports/viewport';
	export default class PerspectiveViewport extends Viewport {
		constructor({ width, // Width of viewport
			height, // Height of viewport
			eye, // Defines eye position
			lookAt, // Which point is camera looking at, default origin
			up, // Defines up direction, default positive y axis
			fovy, // Field of view covered by camera
			near, // Distance of near clipping plane
			far, // Distance of far clipping plane
			aspect }: {
				width: any;
				height: any;
				eye: any;
				lookAt?: number[];
				up?: number[];
				fovy?: number;
				near?: number;
				far?: number;
				aspect?: any;
			});
	}

}
declare module '@deck.gl/core/deprecated/orthographic-viewport' {
	import Viewport from '@deck.gl/core/viewports/viewport';
	export default class OrthographicViewport extends Viewport {
		constructor({ width, // Width of viewport
			height, // Height of viewport
			eye, // Defines eye position, default unit distance along z axis
			lookAt, // Which point is camera looking at, default origin
			up, // Defines up direction, default positive y axis
			near, // Distance of near clipping plane
			far, // Distance of far clipping plane
			left, // Left bound of the frustum
			top, // Top bound of the frustum
			right, // Right bound of the frustum
			bottom }: {
				width: any;
				height: any;
				eye?: number[];
				lookAt?: number[];
				up?: number[];
				near?: number;
				far?: number;
				left: any;
				top: any;
				right?: any;
				bottom?: any;
			});
	}

}
declare module '@deck.gl/core/deprecated/first-person-viewport' {
	import Viewport from '@deck.gl/core/viewports/viewport';
	export default class FirstPersonViewport extends Viewport {
		constructor(opts?: {});
	}

}
declare module '@deck.gl/core/deprecated/third-person-viewport' {
	import Viewport from '@deck.gl/core/viewports/viewport';
	export default class ThirdPersonViewport extends Viewport {
		constructor(opts: any);
	}

}
declare module '@deck.gl/core' {
	import '@deck.gl/core/lib/init';
	import '@deck.gl/core/shaderlib';
	export { COORDINATE_SYSTEM } from '@deck.gl/core/lib/constants';
	export { default as Deck } from '@deck.gl/core/lib/deck';
	export { default as LayerManager } from '@deck.gl/core/lib/layer-manager';
	export { default as AttributeManager } from '@deck.gl/core/lib/attribute-manager';
	export { default as Layer } from '@deck.gl/core/lib/layer';
	export { default as CompositeLayer } from '@deck.gl/core/lib/composite-layer';
	export { default as Viewport } from '@deck.gl/core/viewports/viewport';
	export { default as WebMercatorViewport } from '@deck.gl/core/viewports/web-mercator-viewport';
	export { default as project } from '@deck.gl/core/shaderlib/project/project';
	export { default as project64 } from '@deck.gl/core/shaderlib/project64/project64';
	export { default as lighting } from '@deck.gl/core/shaderlib/lighting/lighting';
	export { default as View } from '@deck.gl/core/views/view';
	export { default as MapView } from '@deck.gl/core/views/map-view';
	export { default as FirstPersonView } from '@deck.gl/core/views/first-person-view';
	export { default as ThirdPersonView } from '@deck.gl/core/views/third-person-view';
	export { default as OrbitView, OrbitViewState } from '@deck.gl/core/views/orbit-view';
	export { default as PerspectiveView } from '@deck.gl/core/views/perspective-view';
	export { default as OrthographicView } from '@deck.gl/core/views/orthographic-view';
	export { default as Controller } from '@deck.gl/core/controllers/controller';
	export { default as MapController } from '@deck.gl/core/controllers/map-controller';
	import { default as FirstPersonController } from '@deck.gl/core/controllers/first-person-controller';
	import { default as OrbitController } from '@deck.gl/core/controllers/orbit-controller';
	import { default as EffectManager } from '@deck.gl/core/experimental/lib/effect-manager';
	import { default as Effect } from '@deck.gl/core/experimental/lib/effect';
	import { default as LinearInterpolator } from '@deck.gl/core/transitions/linear-interpolator';
	import { default as ViewportFlyToInterpolator } from '@deck.gl/core/transitions/viewport-fly-to-interpolator';
	import ReflectionEffect from '@deck.gl/core/experimental/reflection-effect/reflection-effect';
	export { default as log } from '@deck.gl/core/utils/log';
	import { default as BinSorter } from '@deck.gl/core/utils/bin-sorter';
	import { linearScale, getLinearScale, quantizeScale, getQuantizeScale } from '@deck.gl/core/utils/scale-utils';
	import { flattenVertices, fillArray } from '@deck.gl/core/utils/flatten';
	export { default as PerspectiveViewport } from '@deck.gl/core/deprecated/perspective-viewport';
	export { default as OrthographicViewport } from '@deck.gl/core/deprecated/orthographic-viewport';
	import { default as FirstPersonViewport } from '@deck.gl/core/deprecated/first-person-viewport';
	import { default as ThirdPersonViewport } from '@deck.gl/core/deprecated/third-person-viewport';
	import { default as OrbitViewport } from '@deck.gl/core/deprecated/orbit-viewport';
	export const experimental: {
		FirstPersonController: typeof FirstPersonController;
		OrbitController: typeof OrbitController;
		FirstPersonViewport: typeof FirstPersonViewport;
		ThirdPersonViewport: typeof ThirdPersonViewport;
		OrbitViewport: typeof OrbitViewport;
		EffectManager: typeof EffectManager;
		Effect: typeof Effect;
		TRANSITION_EVENTS: {
			BREAK: number;
			SNAP_TO_END: number;
			IGNORE: number;
		};
		LinearInterpolator: typeof LinearInterpolator;
		ViewportFlyToInterpolator: typeof ViewportFlyToInterpolator;
		BinSorter: typeof BinSorter;
		linearScale: typeof linearScale;
		getLinearScale: typeof getLinearScale;
		quantizeScale: typeof quantizeScale;
		getQuantizeScale: typeof getQuantizeScale;
		defaultColorRange: number[][];
		flattenVertices: typeof flattenVertices;
		fillArray: typeof fillArray;
		ReflectionEffect: typeof ReflectionEffect;
	};

}
declare module '@deck.gl/core/experimental/compare-arrays' {
	export function compareArrays(array1: any, array2: any): string;
	export function checkArray(array: any): any;

}
declare module '@deck.gl/core/experimental/utils/container' {
	/**
	 * Checks if argument is an indexable object (not a primitive value, nor null)
	 * @param {*} value - JavaScript value to be tested
	 * @return {Boolean} - true if argument is a JavaScript object
	 */
	export function isObject(value: any): boolean;
	/**
	 * Checks if argument is a plain object (not a class or array etc)
	 * @param {*} value - JavaScript value to be tested
	 * @return {Boolean} - true if argument is a plain JavaScript object
	 */
	export function isPlainObject(value: any): boolean;
	export function isContainer(value: any): boolean;
	/**
	 * Deduces numer of elements in a JavaScript container.
	 * - Auto-deduction for ES6 containers that define a count() method
	 * - Auto-deduction for ES6 containers that define a size member
	 * - Auto-deduction for Classic Arrays via the built-in length attribute
	 * - Also handles objects, although note that this an O(N) operation
	 */
	export function count(container: any): any;
	export function values(container: any): any;
	export function isKeyedContainer(container: any): boolean;
	export function keys(keyedContainer: any): any;
	export function entries(keyedContainer: any): any;
	export function forEach(container: any, visitor: any): void;
	export function map(container: any, visitor: any): any[];
	export function reduce(container: any, visitor: any): any[];
	export function toJS(container: any): any;

}
declare module '@deck.gl/core/lib' {
	import '@deck.gl/core/lib/init';
	export { COORDINATE_SYSTEM } from '@deck.gl/core/lib/constants';
	export { default as Layer } from '@deck.gl/core/lib/layer';
	export { default as CompositeLayer } from '@deck.gl/core/lib/composite-layer';
	export { default as AttributeManager } from '@deck.gl/core/lib/attribute-manager';
	export { default as LayerManager } from '@deck.gl/core/lib/layer-manager';

}
declare module '@deck.gl/core/utils/color' {
	export type Color = [number, number, number] | [number, number, number, number];	
	function parseColor(color: any, target: any, index?: number): any; function setOpacity(color: any, opacity?: number): any[]; function applyOpacity(color: any, opacity?: number): any[]; const _default: {
		parseColor: typeof parseColor;
		setOpacity: typeof setOpacity;
		applyOpacity: typeof applyOpacity;
	};
	export default _default;

}
declare module '@deck.gl/core/utils/get' {
	/**
	 * Access properties of nested containers using dot-path notation
	 * - Supports plain objects and arrays, as well as classes with `get` methods
	 *   such as ES6 Maps, Immutable.js objects etc
	 * - Returns undefined if any container is not valid, instead of throwing
	 *
	 * @param {Object} container - container that supports get
	 * @param {String|*} compositeKey - key to access, can be '.'-separated string
	 * @return {*} - value in the final key of the nested container
	 */
	export function get(container: any, compositeKey: any): any;

}
declare module '@deck.gl/core/utils/inherits-from' {
	export function inheritsFrom(Type: any, ParentType: any): boolean;

}
declare module '@deck.gl/core/utils/old-log' {
	function log(priority: any, arg: any, ...args: any[]): void;
	export default log;

}
