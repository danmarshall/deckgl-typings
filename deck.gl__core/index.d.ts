//typings for @deck.gl/core v8.1.3
declare module '@deck.gl/core/utils/log' {
  const _default: any;
  export default _default;
}
declare module '@deck.gl/core/debug/loggers' {
  export const getLoggers: (log: any) => {
    'layer.changeFlag': (layer: any, key: any, flags: any) => void;
    'layer.initialize': (layer: any) => void;
    'layer.update': (layer: any, needsUpdate: any) => void;
    'layer.matched': (layer: any, changed: any) => void;
    'layer.finalize': (layer: any) => void;
    'compositeLayer.renderLayers': (layer: any, updated: any, subLayers: any) => void;
    'layerManager.setLayers': (layerManager: any, updated: any, layers: any) => void;
    'layerManager.activateViewport': (layerManager: any, viewport: any) => void;
    'attributeManager.invalidate': (attributeManager: any, trigger: any, attributeNames: any) => void;
    'attributeManager.updateStart': (attributeManager: any) => void;
    'attributeManager.updateEnd': (attributeManager: any, numInstances: any) => void;
    'attribute.updateStart': (attribute: any) => void;
    'attribute.allocate': (attribute: any, numInstances: any) => void;
    'attribute.updateEnd': (attribute: any, numInstances: any) => void;
    'deckRenderer.renderLayers': (deckRenderer: any, renderStats: any, opts: any) => void;
  };
}
declare module '@deck.gl/core/utils/json-loader' {
  function isJSON(text: any): boolean;
  const _default: {
    name: string;
    extensions: string[];
    testText: typeof isJSON;
    parseTextSync: (text: string, reviver?: (this: any, key: string, value: any) => any) => any;
  };
  export default _default;
}
declare module '@deck.gl/core/lib/init' {
  const _default: any;
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
declare module '@deck.gl/core/lib/constants' {
  export const COORDINATE_SYSTEM: {
    DEFAULT: number;
    LNGLAT: number;
    METER_OFFSETS: number;
    LNGLAT_OFFSETS: number;
    CARTESIAN: number;
  };
  export const PROJECTION_MODE: {
    WEB_MERCATOR: number;
    GLOBE: number;
    WEB_MERCATOR_AUTO_OFFSET: number;
    IDENTITY: number;
  };
  export const UNIT: {
    common: number;
    meters: number;
    pixels: number;
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
//declare module '@deck.gl/core/shaderlib/project/project.glsl' {
//	const _default: string;
//	export default _default;
//}
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
  import { Matrix4 } from '@math.gl/core';
  export function getOffsetOrigin(
    viewport: any,
    coordinateSystem: any,
    coordinateOrigin?: number[]
  ): {
    geospatialOrigin: any;
    shaderCoordinateOrigin: number[];
    offsetMode: boolean;
  };
  /**
   * Returns uniforms for shaders based on current projection
   * includes: projection matrix suitable for shaders
   *
   * TODO - Ensure this works with any viewport, not just WebMercatorViewports
   *
   * @param {WebMercatorViewport} viewport -
   * @return {Float32Array} - 4x4 projection matrix that can be used in shaders
   */
  export function getUniformsFromViewport({
    viewport,
    devicePixelRatio,
    modelMatrix,
    coordinateSystem,
    coordinateOrigin,
    wrapLongitude,
    projectionMode,
    positionOrigin,
  }?: {
    viewport: any;
    devicePixelRatio?: number;
    modelMatrix?: Matrix4;
    coordinateSystem?: number;
    coordinateOrigin: number[];
    wrapLongitude?: boolean;
    projectionMode: any;
    positionOrigin: any;
  }): any;
}
declare module '@deck.gl/core/shaderlib/project/project' {
  function getUniforms(opts?: {}): any;
  const _default: {
    name: string;
    dependencies: any[];
    vs: string;
    getUniforms: typeof getUniforms;
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
    }[];
    vs: string;
  };
  export default _default;
}
declare module '@deck.gl/core/shaderlib/shadow/shadow' {
  const _default: {
    name: string;
    dependencies: {
      name: string;
      dependencies: any[];
      vs: string;
      getUniforms: (opts?: {}) => any;
    }[];
    vs: string;
    fs: string;
    inject: {
      'vs:DECKGL_FILTER_GL_POSITION': string;
      'fs:DECKGL_FILTER_COLOR': string;
    };
    getUniforms: (opts?: {}, context?: {}) => {};
  };
  export default _default;
}
declare module '@deck.gl/core/shaderlib/picking/picking' {
  const _default: any;
  export default _default;
}
declare module '@deck.gl/core/shaderlib' {
  import { gouraudLighting, phongLighting } from '@luma.gl/core';
  import project from '@deck.gl/core/shaderlib/project/project';
  import project32 from '@deck.gl/core/shaderlib/project32/project32';
  import shadow from '@deck.gl/core/shaderlib/shadow/shadow';
  import picking from '@deck.gl/core/shaderlib/picking/picking';
  export function createProgramManager(gl: any): any;
  export { picking, project, project32, gouraudLighting, phongLighting, shadow };
}
declare module '@deck.gl/core/effects/lighting/ambient-light' {
  export class AmbientLight {
    constructor(props?: {});
  }
}
declare module '@deck.gl/core/effects/lighting/directional-light' {
  export class DirectionalLight {
    constructor(props?: {});
    getProjectedLight(l?: { layer: any }): this;
  }
}
declare module '@deck.gl/core/lib/effect' {
  export default class Effect {
    constructor(props?: {});
    preRender(...params: any[]): void;
    getModuleParameters(layer?: any): void;
    cleanup(): void;
  }
}
declare module '@deck.gl/core/passes/pass' {
  export default class Pass {
    constructor(gl: any, props?: {});
    setProps(props: any): void;
    render(params?: any): any[] | void;
    cleanup(): void;
  }
}
declare module '@deck.gl/core/passes/layers-pass' {
  import Pass from '@deck.gl/core/passes/pass';
  export default class LayersPass extends Pass {
    render(props: any): any[] | void;
    _drawLayers(props: any): any[];
    _drawLayersInViewport(
      gl: any,
      {
        layers,
        layerFilter,
        onError,
        viewport,
        view,
        pass,
        effects,
        moduleParameters,
      }: {
        layers: any;
        layerFilter: any;
        onError: any;
        viewport: any;
        view: any;
        pass?: string;
        effects: any;
        moduleParameters: any;
      }
    ): {
      totalCount: any;
      visibleCount: number;
      compositeCount: number;
      pickableCount: number;
    };
    shouldDrawLayer(layer: any): boolean;
    getModuleParameters(layer: any, effects: any): any;
    getLayerParameters(layer: any, layerIndex: any): any;
    _shouldDrawLayer(layer: any, viewport: any, pass: any, layerFilter: any): any;
    _getModuleParameters(layer: any, effects: any, pass: any, overrides: any): any;
  }
  export function layerIndexResolver(startIndex?: number, layerIndices?: {}): (layer: any, isDrawn: any) => any;
}
declare module '@deck.gl/core/passes/shadow-pass' {
  import { default as LayersPass } from '@deck.gl/core/passes/layers-pass';
  export default class ShadowPass extends LayersPass {
    constructor(gl: any, props: any);
    render(params: any): void;
    shouldDrawLayer(layer: any): boolean;
    getModuleParameters(): {
      drawToShadowMap: boolean;
    };
    delete(): void;
  }
}
declare module '@deck.gl/core/effects/lighting/lighting-effect' {
  import Effect from '@deck.gl/core/lib/effect';
  export default class LightingEffect extends Effect {
    constructor(props: any);
    preRender(
      gl: any,
      {
        layers,
        layerFilter,
        viewports,
        onViewportActive,
        views,
      }: {
        layers: any;
        layerFilter: any;
        viewports: any;
        onViewportActive: any;
        views: any;
      }
    ): void;
    getModuleParameters(layer: any):
      | {
          shadowMaps: any;
          dummyShadowMap: any;
          shadowColor: any;
          shadowMatrices: any;
        }
      | {
          shadowMaps?: undefined;
          dummyShadowMap?: undefined;
          shadowColor?: undefined;
          shadowMatrices?: undefined;
        };
    cleanup(): void;
    _createLightMatrix(): any[];
    _createShadowPasses(gl: any): void;
    _applyDefaultLights(): void;
  }
}
declare module '@deck.gl/core/shaderlib/project/project-functions' {
  import { Position } from '@deck.gl/core/utils/positions';
  import { Matrix4 } from '@math.gl/core';
  export function getWorldPosition(
    position: Position,
    {
      viewport,
      modelMatrix,
      coordinateSystem,
      coordinateOrigin,
      offsetMode,
    }: {
      viewport: any;
      modelMatrix: Matrix4;
      coordinateSystem: any;
      coordinateOrigin: any;
      offsetMode: any;
    }
  ): any;
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
declare module '@deck.gl/core/lib/attribute/shader-attribute' {
  export default class ShaderAttribute {
    constructor(dataColumn: any, opts: any);
    get value(): any;
    getValue(): any;
    getAccessor(): any;
  }
}
declare module '@deck.gl/core/lib/attribute/gl-utils' {
  export function glArrayFromType(
    glType: any
  ):
    | Float32ArrayConstructor
    | Float64ArrayConstructor
    | Uint16ArrayConstructor
    | Uint32ArrayConstructor
    | Uint8ClampedArrayConstructor
    | Int8ArrayConstructor
    | Int16ArrayConstructor
    | Int32ArrayConstructor;
}
declare module '@deck.gl/core/utils/typed-array-manager' {
  export class TypedArrayManager {
    constructor({ overAlloc, poolSize }?: { overAlloc?: number; poolSize?: number });
    allocate(
      typedArray: any,
      count: any,
      {
        size,
        type,
        padding,
        copy,
      }: {
        size?: number;
        type: any;
        padding?: number;
        copy?: boolean;
      }
    ): any;
    release(typedArray: any): void;
    _allocate(Type: any, size: any): any;
    _release(typedArray: any): void;
  }
  const _default: TypedArrayManager;
  export default _default;
}
declare module '@deck.gl/core/utils/math-utils' {
  export function createMat4(): number[];
  export function mod(value: any, divisor: any): any;
  export function extractCameraVectors({
    viewMatrix,
    viewMatrixInverse,
  }: {
    viewMatrix: any;
    viewMatrixInverse: any;
  }): {
    eye: any[];
    direction: number[];
    up: any[];
    right: any[];
  };
  export function getFrustumPlanes({
    aspect,
    near,
    far,
    fovyRadians,
    position,
    direction,
    up,
    right,
  }: {
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
  export function toDoublePrecisionArray(
    typedArray: any,
    {
      size,
      startIndex,
      endIndex,
    }: {
      size?: number;
      startIndex?: number;
      endIndex: any;
    }
  ): any;
}
declare module '@deck.gl/core/lib/attribute/data-column' {
  export default class DataColumn {
    constructor(gl: any, opts: any);
    get buffer(): any;
    get byteOffset(): number;
    delete(): void;
    getShaderAttributes(id: any, options: any): {};
    getBuffer(): any;
    getValue(): any;
    getAccessor(): any;
    setData(opts: any): boolean;
    updateSubBuffer(opts?: {}): void;
    allocate({ numInstances, copy }: { numInstances: any; copy?: boolean }): boolean;
    _checkExternalBuffer(opts: any): void;
    _normalizeConstant(value: any): any;
    _normalizeValue(value: any, out: any, start: any): any;
    _areValuesEqual(value1: any, value2: any): boolean;
  }
}
declare module '@deck.gl/core/utils/iterable-utils' {
  export function createIterable(
    data: any,
    startRow?: number,
    endRow?: number
  ): {
    iterable: any[];
    objectInfo: {
      index: number;
      data: any;
      target: any[];
    };
  };
  export function isAsyncIterable(data: any): any;
  export function getAccessorFromBuffer(
    typedArray: any,
    {
      size,
      stride,
      offset,
      startIndices,
      nested,
    }: {
      size: any;
      stride: any;
      offset: any;
      startIndices: any;
      nested: any;
    }
  ): (
    _: any,
    {
      index,
      target,
    }: {
      index: any;
      target: any;
    }
  ) => any;
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
  export function flatten(array: any, filter?: () => boolean): any;
  export function fillArray({
    target,
    source,
    start,
    count,
  }: {
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
declare module '@deck.gl/core/utils/array-utils' {
  export function padArray({
    source,
    target,
    size,
    getData,
    sourceStartIndices,
    targetStartIndices,
  }: {
    source: any;
    target: any;
    size: any;
    getData: any;
    sourceStartIndices: any;
    targetStartIndices: any;
  }): any;
}
declare module '@deck.gl/core/lib/attribute/attribute-transition-utils' {
  export function normalizeTransitionSettings(userSettings: any, layerSettings: any): any;
  export function getSourceBufferAttribute(gl: any, attribute: any): any;
  export function getAttributeTypeFromSize(size: any): 'float' | 'vec2' | 'vec3' | 'vec4';
  export function cycleBuffers(buffers: any): void;
  export function getAttributeBufferLength(attribute: any, numInstances: any): number;
  export function padBuffer({
    buffer,
    numInstances,
    attribute,
    fromLength,
    fromStartIndices,
    getData,
  }: {
    buffer: any;
    numInstances: any;
    attribute: any;
    fromLength: any;
    fromStartIndices: any;
    getData?: (x: any) => any;
  }): void;
}
declare module '@deck.gl/core/lib/attribute/attribute' {
  import DataColumn from '@deck.gl/core/lib/attribute/data-column';
  export default class Attribute extends DataColumn {
    constructor(gl: any, opts?: {});
    get startIndices(): any;
    set startIndices(layout: any);
    needsUpdate(): any;
    needsRedraw({ clearChangedFlags }?: { clearChangedFlags?: boolean }): any;
    getUpdateTriggers(): any[];
    supportsTransition(): boolean;
    getTransitionSetting(opts: any): any;
    setNeedsUpdate(reason: any, dataRange: any): void;
    clearNeedsUpdate(): void;
    setNeedsRedraw(reason?: any): void;
    update(opts: any): void;
    allocate(numInstances: any): boolean;
    updateBuffer({
      numInstances,
      data,
      props,
      context,
    }: {
      numInstances: any;
      data: any;
      props: any;
      context: any;
    }): boolean;
    setConstantValue(value: any): boolean;
    setExternalBuffer(buffer: any): boolean;
    setBinaryValue(buffer: any, startIndices?: any): boolean;
    getVertexOffset(row: any): number;
    getShaderAttributes(): {};
    _autoUpdater(
      attribute: any,
      {
        data,
        startRow,
        endRow,
        props,
        numInstances,
      }: {
        data: any;
        startRow: any;
        endRow: any;
        props: any;
        numInstances: any;
      }
    ): void;
    _validateAttributeUpdaters(): void;
    _checkAttributeArray(): void;
  }
}
declare module '@deck.gl/core/transitions/transition' {
  export default class Transition {
    /**
     * @params timeline {Timeline}
     */
    constructor(timeline: any);
    get inProgress(): any;
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
    constructor({ gl, attribute, timeline }: { gl: any; attribute: any; timeline: any });
    get inProgress(): any;
    start(transitionSettings: any, numInstances: any): void;
    update(): any;
    cancel(): void;
  }
}
declare module '@deck.gl/core/transitions/gpu-spring-transition' {
  export default class GPUSpringTransition {
    constructor({ gl, attribute, timeline }: { gl: any; attribute: any; timeline: any });
    get inProgress(): any;
    start(transitionSettings: any, numInstances: any): void;
    update(): boolean;
    cancel(): void;
  }
}
declare module '@deck.gl/core/lib/attribute/attribute-transition-manager' {
  export default class AttributeTransitionManager {
    constructor(
      gl: any,
      {
        id,
        timeline,
      }: {
        id: any;
        timeline: any;
      }
    );
    finalize(): void;
    update({ attributes, transitions, numInstances }: { attributes: any; transitions?: {}; numInstances: any }): void;
    hasAttribute(attributeName: any): any;
    getAttributes(): {};
    run(): any;
    _removeTransition(attributeName: any): void;
    _updateAttribute(attributeName: any, attribute: any, settings: any): void;
  }
}
declare module '@deck.gl/core/lib/attribute/attribute-manager' {
  import Attribute from '@deck.gl/core/lib/attribute/attribute';
  export default class AttributeManager {
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
    constructor(
      gl: any,
      {
        id,
        stats,
        timeline,
      }?: {
        id?: string;
        stats: any;
        timeline: any;
      }
    );
    finalize(): void;
    getNeedsRedraw(opts?: { clearRedrawFlags: boolean }): any;
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
    update({
      data,
      numInstances,
      startIndices,
      transitions,
      props,
      buffers,
      context,
    }?: {
      data: any;
      numInstances: any;
      startIndices?: any;
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
    getChangedAttributes(opts?: { clearChangedFlags: boolean }): any;
    getShaderAttributes(attributes: any, excludeAttributes?: {}): {};
    getAccessors(): any;
    _add(attributes: any, updaters: any, extraProps?: {}): void;
    _createAttribute(name: any, attribute: any, extraProps: any): Attribute;
    _mapUpdateTriggersToAttributes(): void;
    _invalidateTrigger(triggerName: any, dataRange: any): any;
    _updateAttribute(opts: any): void;
  }
}
declare module '@deck.gl/core/transitions/cpu-interpolation-transition' {
  import Transition from '@deck.gl/core/transitions/transition';
  export default class CPUInterpolationTransition extends Transition {
    get value(): any;
    _onUpdate(): void;
  }
}
declare module '@deck.gl/core/transitions/cpu-spring-transition' {
  import Transition from '@deck.gl/core/transitions/transition';
  export default class CPUSpringTransition extends Transition {
    get value(): any;
    _onUpdate(): void;
  }
}
declare module '@deck.gl/core/lib/uniform-transition-manager' {
  export default class UniformTransitionManager {
    constructor(timeline: any);
    get active(): boolean;
    add(key: any, fromValue: any, toValue: any, settings: any): void;
    remove(key: any): void;
    update(): {};
    clear(): void;
  }
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
  export const PROP_SYMBOLS: {
    COMPONENT: symbol;
    ASYNC_DEFAULTS: symbol;
    ASYNC_ORIGINAL: symbol;
    ASYNC_RESOLVED: symbol;
  };
}
declare module '@deck.gl/core/lifecycle/props' {
  export function validateProps(props: any): void;
  export function diffProps(
    props: any,
    oldProps: any
  ): {
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
  export function compareProps({
    newProps,
    oldProps,
    ignoreProps,
    propTypes,
    triggerName,
  }?: {
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
  import { LayerContext } from '@deck.gl/core/lib/layer';
  export default class Component<P> {
    constructor(props: P, ...additionalProps: P[]);
    clone(newProps: P): any;
    get stats(): any;
    _initState(): void;

    props: P;

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
    parent: Component<P>;

    /**
     * Will reference layer manager's context, contains state shared by layers
     */
    context: LayerContext;

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
    constructor({ attributeManager, layer }: { attributeManager: any; layer: any });
    get layer(): any;
    set layer(layer: any);
  }
}
declare module '@deck.gl/core/lib/layer' {
  import AttributeManager from '@deck.gl/core/lib/attribute/attribute-manager';
  import Component from '@deck.gl/core/lifecycle/component';
  import Deck, { PickInfo, PickMode } from '@deck.gl/core/lib/deck';
  import * as hammerjs from 'hammerjs';
  import { RGBColor, RGBAColor } from '@deck.gl/core/utils/color';
  import LayerManager from '@deck.gl/core/lib/layer-manager';
  import Viewport from '@deck.gl/core/viewports/viewport';
  import { Position } from '@deck.gl/core/utils/positions';
  import { Matrix4 } from '@math.gl/core';
  import { UNIT } from '@deck.gl/core/lib/constants';

  export interface LayerContext {
    layerManager: LayerManager;
    deck: Deck;
    viewport: Viewport;

    // General resources
    mousePosition: [number, number] | null;

    // GL Resources
    gl: WebGL2RenderingContext;
  }

  export interface BaseTransitionTiming {
    enter?: (v: number) => number;
    onStart?: () => void;
    onEnd?: () => void;
    onInterrupt?: () => void;
  }
  export interface InterpolationTransitionTiming extends BaseTransitionTiming {
    type: 'interpolation';
    duration: number;
    easing?: (t: number) => number;
  }
  export interface SpringTransitionTiming extends BaseTransitionTiming {
    type: 'spring';
    stiffness: number;
    damping: number;
  }
  export type TransitionTiming = InterpolationTransitionTiming | SpringTransitionTiming;
  export interface LayerInputHandler<D = any> {
    (o: PickInfo<D>, e: HammerInput): any;
  }
  export type DataSet<D> = Iterable<D>;
  export type WidthUnits = keyof typeof UNIT;

  export interface ObjectInfo<D, T> {
    // the index of the current iteration
    index: number;
    // the value of the 'data' prop on the layer.
    data: DataSet<D> | Promise<DataSet<D>> | string;
    // a pre-allocated array.
    // the accessor function can optionally fill data into this array and
    // return it, instead of creating a new array for every object.
    // In some browsers this improves performance significantly by
    // reducing garbage collection.
    target: T[];
  }

  // | AsyncIterable ToDo: Add AsyncIterable
  // | { length: number } Todo: Support non-iterable objects, see deck.gl docs: /docs/developer-guide/using-layers.md#accessors

  export interface LayerProps<D> {
    //https://deck.gl/#/documentation/deckgl-api-reference/layers/layer?section=properties
    id?: string;
    data?: D | DataSet<D> | Promise<DataSet<D>> | string;
    visible?: boolean;
    opacity?: number;
    extensions?: any[];

    //Interaction Properties
    pickable?: boolean;
    onHover?: LayerInputHandler<D>;
    onClick?: LayerInputHandler<D>;
    onDragStart?: LayerInputHandler<D>;
    onDrag?: LayerInputHandler<D>;
    onDragEnd?: LayerInputHandler<D>;
    highlightColor?: RGBAColor | ((pickInfo: PickInfo<D>) => RGBAColor);
    highlightedObjectIndex?: number;
    autoHighlight?: boolean;

    //Coordinate System Properties
    coordinateSystem?: number;
    coordinateOrigin?: Position;
    wrapLongitude?: boolean;
    modelMatrix?: Matrix4;

    //Data Properties
    dataComparator?: (newData: D, oldData: D) => boolean;
    dataTransform?: () => D[] | Iterable<D>;
    _dataDiff?: (newData: D, oldData: D) => { startRow: number; endRow: number };
    positionFormat?: 'XYZ' | 'XY';
    colorFormat?: 'RGBA' | 'RGB';
    numInstances?: number;
    updateTriggers?: any;
    loaders?: any[];
    loadOptions?: any;
    onDataLoad?: (value: D[] | Iterable<D>, context: { layer: Layer<D> }) => void;

    //Render Properties
    parameters?: any;
    getPolygonOffset?: (uniform: any) => [number, number];
    transitions?: { [attributeGetter: string]: TransitionTiming };
    filterEnabled?: boolean;
    filterTransformSize?: boolean;
    filterTransformColor?: boolean;
  }
  export interface LayerChangeFlags {
    dataChanged: boolean | string | null;
    propsChanged: boolean | string | null;
    updateTriggersChanged: boolean | string | null;
    viewportChanged: boolean | string | null;
    stateChanged: boolean | string | null;
    extensionsChanged: boolean | string | null;
    propsOrDataChanged: boolean | string | null;
    somethingChanged: boolean | string | null;
  }
  export interface UpdateStateInfo<P> {
    oldProps: P;
    props: P;
    context: LayerContext;
    changeFlags: LayerChangeFlags;
  }
  export interface DefaultPropType {
    name: string;
    value: any;
    async?: boolean;
    validate?: (value: any) => boolean;
    equal?: (value1: any, value2: any) => boolean;
    deprecatedFor?: string | string[];
  }
  export default class Layer<D, P extends LayerProps<D> = LayerProps<D>> extends Component<P> {
    constructor(props: P, ...additionalProps: P[]);
    toString(): string;
    setState(updateObject: any): void;
    setNeedsRedraw(redraw?: boolean): void;
    setNeedsUpdate(): void;
    getNeedsRedraw(opts?: { clearRedrawFlags: boolean }): boolean;
    needsUpdate(): any;
    hasUniformTransition(): any;
    get isLoaded(): boolean;
    isPickable(): any;
    getModels(): any;
    getAttributeManager(): any;
    getCurrentLayer(): any;
    getLoadOptions(): any;
    project(xyz: [number, number, number]): [number, number, number];
    unproject(xy: any): any;
    projectPosition(xyz: any): any;
    use64bitPositions(): boolean;
    onHover(info: any, pickingEvent: any): any;
    onClick(info: any, pickingEvent: any): any;
    nullPickingColor(): RGBColor;
    encodePickingColor(i: any, target?: any[]): RGBColor;
    decodePickingColor(color: RGBColor): number;
    initializeState(params: any): void;
    getShaders(shaders: any): any;
    shouldUpdateState({ oldProps, props, context, changeFlags }: UpdateStateInfo<P>): any;
    updateState({ oldProps, props, context, changeFlags }: UpdateStateInfo<P>): void;
    finalizeState(): void;
    draw(opts: { moduleParameters?: any; uniforms?: any; parameters?: any; context?: WebGLRenderingContext }): void;
    getPickingInfo({
      info,
      mode,
      sourceLayer,
    }: {
      info: PickInfo<D>;
      mode: PickMode;
      sourceLayer: Layer<any>;
    }): PickInfo<D>;
    invalidateAttribute(name?: string, diffReason?: string): void;
    updateAttributes(changedAttributes: any): void;
    _updateAttributes(props: any): void;
    _updateAttributeTransition(): void;
    _updateUniformTransition(): any;
    calculateInstancePickingColors(
      attribute: any,
      {
        numInstances,
      }: {
        numInstances: any;
      }
    ): void;
    _setModelAttributes(model: any, changedAttributes: any): void;
    clearPickingColor(color: any): void;
    restorePickingColors(): void;
    getNumInstances(props: any): any;
    getStartIndices(props: any): any;
    _initialize(): void;
    _update(): void;
    _updateState(): void;
    _finalize(): void;
    drawLayer({
      moduleParameters,
      uniforms,
      parameters,
    }: {
      moduleParameters?: any;
      uniforms?: {};
      parameters?: {};
    }): void;
    getChangeFlags(): any;
    setChangeFlags(flags: any): void;
    clearChangeFlags(): void;
    diffProps(newProps: any, oldProps: any): void;
    validateProps(): void;
    setModuleParameters(moduleParameters: any): void;
    _updateModules({ props, oldProps }: { props: any; oldProps: any }): void;
    _getUpdateParams(): UpdateStateInfo<P>;
    _getNeedsRedraw(opts: any): boolean;
    _getAttributeManager(): AttributeManager;
    _initState(): void;
    _transferState(oldLayer: any): void;
    _onAsyncPropUpdated(): void;
    static layerName: string;
    static defaultProps?: Record<string, DefaultPropType | Record<string, any> | any>; // DefaultPropType is a hint
  }
}
declare module '@deck.gl/core/lib/composite-layer' {
  import Layer, { LayerProps } from '@deck.gl/core/lib/layer';
  import Viewport from '@deck.gl/core/viewports/viewport';
  export interface CompositeLayerProps<D> extends LayerProps<D> {
    _subLayerProps?: Object;
  }
  export default class CompositeLayer<D, P extends CompositeLayerProps<D> = CompositeLayerProps<D>> extends Layer<
    D,
    P
  > {
    get isComposite(): boolean;
    get isLoaded(): any;
    getSubLayers(): any;
    initializeState(params?: any): void;
    setState(updateObject: any): void;
    renderLayers(): any;
    filterSubLayer({
      layer,
      viewport,
      isPicking,
      renderPass,
    }: {
      layer: Layer<any>;
      viewport: Viewport;
      isPicking: boolean;
      renderPass: string;
    }): boolean;
    shouldRenderSubLayer(id: any, data: any): boolean;
    getSubLayerClass(id: any, DefaultLayerClass: any): any;
    getSubLayerRow(row: any, sourceObject: any, sourceObjectIndex: any): any;
    getSubLayerAccessor(accessor: any): any;
    getSubLayerProps<SD, SP extends LayerProps<SD> = LayerProps<SD>>(sublayerProps?: {}): SP;
    _getAttributeManager(): any;
    _renderLayers(): void;
  }
}
declare module '@deck.gl/core/viewports/viewport' {
  import { Position } from '@deck.gl/core/utils/positions';
  export default class Viewport {
    /**
     * @classdesc
     * Manages coordinate system transformations for deck.gl.
     *
     * Note: The Viewport is immutable in the sense that it only has accessors.
     * A new viewport instance should be created if any parameters have changed.
     */
    constructor(opts?: {});
    id?: string;
    x: number;
    y: number;
    width: number;
    height: number;
    isGeospatial: boolean;
    zoom: number;
    scale: number;
    position: Position;
    get metersPerPixel(): number;
    get projectionMode(): number;
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
    project(
      xyz: any,
      {
        topLeft,
      }?: {
        topLeft?: boolean;
      }
    ): any[];
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
    unproject(
      xyz: any,
      {
        topLeft,
        targetZ,
      }?: {
        topLeft?: boolean;
        targetZ: any;
      }
    ): any[];
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
    projectFlat(xyz: any): any;
    /**
     * Unproject world point [x,y] on map onto {lat, lon} on sphere
     * @param {object|Vector} xy - object with {x,y} members
     *  representing point on projected map plane
     * @return {GeoCoordinates} - object with {lat,lon} of point on sphere.
     *   Has toArray method if you need a GeoJSON Array.
     *   Per cartographic tradition, lat and lon are specified as degrees.
     */
    unprojectFlat(xyz: any): any;
    getDistanceScales(coordinateOrigin?: any): any;
    containsPixel({ x, y, width, height }: { x: any; y: any; width?: number; height?: number }): boolean;
    getFrustumPlanes(): any;
    getCameraPosition(): any;
    getCameraDirection(): any;
    getCameraUp(): any;
    _createProjectionMatrix({
      orthographic,
      fovyRadians,
      aspect,
      focalDistance,
      near,
      far,
    }: {
      orthographic: any;
      fovyRadians: any;
      aspect: any;
      focalDistance: any;
      near: any;
      far: any;
    }): any;
    _initViewMatrix(opts: any): void;
    _getCenterInWorld({ longitude, latitude }: { longitude: any; latitude: any }): any;
    _initProjectionMatrix(opts: any): void;
    _initPixelMatrices(): void;
  }
}
declare module '@deck.gl/core/lib/layer-manager' {
  import { Layer } from '@deck.gl/core';
  export default class LayerManager {
    constructor(
      gl: any,
      {
        deck,
        stats,
        viewport,
        timeline,
      }?: {
        deck: any;
        stats: any;
        viewport?: any;
        timeline?: any;
      }
    );
    finalize(): void;
    needsRedraw(opts?: { clearRedrawFlags: boolean }): any;
    needsUpdate(): any;
    setNeedsRedraw(reason: any): void;
    setNeedsUpdate(reason: any): void;
    getLayers({ layerIds }?: { layerIds?: any }): Layer<any, any>[];
    setProps(props: any): void;
    setLayers(newLayers: any, forceUpdate?: boolean): this;
    updateLayers(): void;
    activateViewport(viewport: any): this;
    _handleError(stage: any, error: any, layer: any): void;
    _updateLayers(oldLayers: any, newLayers: any): void;
    _updateSublayersRecursively(newLayers: any, oldLayerMap: any, generatedLayers: any): void;
    _finalizeOldLayers(oldLayerMap: any): void;
    _initializeLayer(layer: any): void;
    _transferLayerState(oldLayer: any, newLayer: any): void;
    _updateLayer(layer: any): void;
    _finalizeLayer(layer: any): void;
    layers: Layer<any, any>[];
  }
}
declare module '@deck.gl/core/utils/deep-equal' {
  export function deepEqual(a: any, b: any): boolean;
}
declare module '@deck.gl/core/lib/view-manager' {
  export default class ViewManager {
    constructor(props?: {});
    finalize(): void;
    needsRedraw(opts?: { clearRedrawFlags: boolean }): any;
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
declare module '@deck.gl/core/utils/positions' {
  export type Position2D = [number, number];
  export type Position3D = [number, number, number];
  export type Position = Position2D | Position3D;
  export function parsePosition(value: any): {
    position: number;
    relative: boolean;
  };
  export function getPosition(position: any, extent: any): any;

  export type ExtentsLeftBottomRightTop = [number, number, number, number]; // [left, bottom, right, top] or [minX, minY, maxX, maxY]
  export type ScaleXYZ = [number, number, number];
  export type TranslationXYZ = [number, number, number];
  export type PitchYawRoll = [number, number, number]; // [pitch, yaw, roll]
}
declare module '@deck.gl/core/views/view' {
  import Viewport from '@deck.gl/core/viewports/viewport';
  import { Matrix4 } from '@math.gl/core';

  export interface ViewProps {
    id?: string;

    // The position and extent of the view on the canvas
    x?: number | string; // A relative (e.g. `'50%'`) or absolute position. Default `0`.
    y?: number | string; // A relative (e.g. `'50%'`) or absolute position. Default `0`.
    height?: number | string; // A relative (e.g. `'50%'`) or absolute extent. Default `'100%'`.
    width?: number | string; // A relative (e.g. `'50%'`) or absolute extent. Default `'100%'`.

    controller?: boolean | object; // Options for viewport interactivity.

    // Viewport Options
    projectionMatrix?: number[]; // 4x4 Projection matrix - Array[16]

    // Perspective projection parameters, used if projectionMatrix not supplied
    fovy?: number; // Field of view covered by camera, in the perspective case. In degrees. Default `50`.
    aspect?: number; // Aspect ratio. Defaults to the Viewport's `width/height` ratio.
    near?: number; // Distance of near clipping plane. Default `0.1`. (Note that in geospatial viewports, this actual distance used is scaled by the height of the screen).
    far?: number; // Distance of far clipping plane. Default `1000`. (Note that in geospatial viewports, this actual distance used is scaled by the height of the screen).

    focalDistance?: number; // Modifier of viewport scale. Corresponds to the number of pixels per meter. Default `1`.

    modelMatrix?: Matrix4; // A model matrix to be applied to position, to match the layer props API

    type?: typeof Viewport; // Internal: Viewport Type
  }

  export default class View {
    constructor(props?: ViewProps);
    equals(view: any): any;
    makeViewport({ width, height, viewState }: { width: any; height: any; viewState: any }): any;
    getViewStateId(): any;
    filterViewState(viewState: any): any;
    getDimensions({ width, height }: { width: any; height: any }): {
      x: any;
      y: any;
      width: any;
      height: any;
    };
    _getControllerProps(defaultOpts: any): any;
    _getViewport(props: any): any;
    _parseDimensions({ x, y, width, height }: { x: any; y: any; width: any; height: any }): void;
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
    get subViewports(): any;
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
    getMapCenterByLngLatPosition({ lngLat, pos }: { lngLat: any; pos: any }): any;
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
    interpolateProps(startProps: any, endProps: any, t: any): any;
    /**
     * Returns transition duration
     * @param startProps {object} - a list of starting viewport props
     * @param endProps {object} - a list of target viewport props
     * @returns {Number} - transition duration in milliseconds
     */
    getDuration(startProps: any, endProps: any): any;
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
  export enum TRANSITION_EVENTS {
    BREAK = 1,
    SNAP_TO_END = 2,
    IGNORE = 3
  }
  export default class TransitionManager {
    constructor(ControllerState: any, props?: {});
    finalize(): void;
    getViewportInTransition(): any;
    processViewStateChange(nextProps: any): boolean;
    updateTransition(): void;
    _isTransitionEnabled(props: any): boolean;
    _isUpdateDueToCurrentTransition(props: any): any;
    _shouldIgnoreViewportChange(currentProps: any, nextProps: any): any;
    _triggerTransition(startProps: any, endProps: any): void;
    _onTransitionEnd(callback: any): (transition: any) => void;
    _onTransitionUpdate(transition: any): void;
  }
}

//https://github.com/visgl/deck.gl/blob/master/docs/api-reference/core/controller.md
declare module '@deck.gl/core/controllers/controller' {
  import { InteractionState } from '@deck.gl/core/lib/deck';

  export interface ControllerOptions {
    scrollZoom?:
      | boolean
      | {
          speed?: number;
          smooth?: boolean;
        };
    dragPan?: boolean;
    dragRotate?: boolean;
    doubleClickZoom?: boolean;
    touchZoom?: boolean;
    touchRotate?: boolean;
    keyboard?:
      | boolean
      | {
          zoomSpeed?: number;
          moveSpeed?: number;
          rotateSpeedX?: number;
          rotateSpeedY?: number;
        };
    dragMode?: 'pan' | 'rotate';
    inertia?: boolean | number;
  }
  export default class Controller {
    constructor(ControllerState: any, options?: ControllerOptions);
    set events(customEvents: any);
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
    updateViewport(newControllerState: any, extraProps?: {}, interactionState?: InteractionState): void;
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
    shortestPathFrom(viewState: any): any;
    _applyConstraints(props: any): any;
  }
}
declare module '@deck.gl/core/controllers/map-controller' {
  import Controller from '@deck.gl/core/controllers/controller';
  import ViewState from '@deck.gl/core/controllers/view-state';
  import LinearInterpolator from '@deck.gl/core/transitions/linear-interpolator';
  import { TRANSITION_EVENTS } from '@deck.gl/core/controllers/transition-manager';
  export const MAPBOX_LIMITS: {
    minZoom: number;
    maxZoom: number;
    minPitch: number;
    maxPitch: number;
  };
  class MapState extends ViewState {
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
      maxZoom,
      minZoom,
      maxPitch,
      minPitch,
      /** Interaction states, required to calculate change during transform */
      startPanLngLat,
      startZoomLngLat,
      /** Bearing when current perspective rotate operation started */
      startBearing,
      /** Pitch when current perspective rotate operation started */
      startPitch,
      /** Zoom when current zoom operation started */
      startZoom,
    }?: {
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
    panStart({ pos }: { pos: any }): MapState;
    /**
     * Pan
     * @param {[Number, Number]} pos - position on screen where the pointer is
     * @param {[Number, Number], optional} startPos - where the pointer grabbed at
     *   the start of the operation. Must be supplied of `panStart()` was not called
     */
    pan({ pos, startPos }: { pos: any; startPos: any }): MapState;
    /**
     * End panning
     * Must call if `panStart()` was called
     */
    panEnd(): MapState;
    /**
     * Start rotating
     * @param {[Number, Number]} pos - position on screen where the center is
     */
    rotateStart({ pos }: { pos: any }): MapState;
    /**
     * Rotate
     * @param {Number} deltaScaleX - a number between [-1, 1] specifying the
     *   change to bearing.
     * @param {Number} deltaScaleY - a number between [-1, 1] specifying the
     *   change to pitch. -1 sets to minPitch and 1 sets to maxPitch.
     */
    rotate({ deltaScaleX, deltaScaleY }: { deltaScaleX?: number; deltaScaleY?: number }): MapState;
    /**
     * End rotating
     * Must call if `rotateStart()` was called
     */
    rotateEnd(): MapState;
    /**
     * Start zooming
     * @param {[Number, Number]} pos - position on screen where the center is
     */
    zoomStart({ pos }: { pos: any }): MapState;
    /**
     * Zoom
     * @param {[Number, Number]} pos - position on screen where the current center is
     * @param {[Number, Number]} startPos - the center position at
     *   the start of the operation. Must be supplied of `zoomStart()` was not called
     * @param {Number} scale - a number between [0, 1] specifying the accumulated
     *   relative scale.
     */
    zoom({ pos, startPos, scale }: { pos: any; startPos: any; scale: any }): MapState;
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
    _calculateNewLngLat({ startPanLngLat, pos }: { startPanLngLat: any; pos: any }): any;
    _calculateNewZoom({ scale, startZoom }: { scale: any; startZoom: any }): any;
    _calculateNewPitchAndBearing({
      deltaScaleX,
      deltaScaleY,
      startBearing,
      startPitch,
    }: {
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
      transitionInterruption: TRANSITION_EVENTS;
    };
    _onPanRotate(event: any): false | void;
  }
  export const testExports: {
    MapState: typeof MapState;
  };
  export {};
}
declare module '@deck.gl/core/views/map-view' {
  import View from '@deck.gl/core/views/view';
  export default class MapView extends View {
    constructor(props: any);
    get controller(): any;
  }
}
declare module '@deck.gl/core/lib/effect-manager' {
  export default class EffectManager {
    constructor();
    setProps(props: any): void;
    needsRedraw(opts?: { clearRedrawFlags: boolean }): any;
    getEffects(): any;
    finalize(): void;
    setEffects(effects?: any[]): void;
    cleanup(): void;
    _createInternalEffects(): void;
  }
}
declare module '@deck.gl/core/passes/draw-layers-pass' {
  import LayersPass from '@deck.gl/core/passes/layers-pass';
  export default class DrawLayersPass extends LayersPass {}
}
declare module '@deck.gl/core/passes/pick-layers-pass' {
  import LayersPass from '@deck.gl/core/passes/layers-pass';
  export default class PickLayersPass extends LayersPass {
    render(props: any): void;
    _drawPickingBuffer({
      layers,
      layerFilter,
      viewports,
      onViewportActive,
      pickingFBO,
      deviceRect: { x, y, width, height },
      pass,
      redrawReason,
      pickZ,
    }: {
      layers: any;
      layerFilter: any;
      viewports: any;
      onViewportActive: any;
      pickingFBO: any;
      deviceRect: {
        x: any;
        y: any;
        width: any;
        height: any;
      };
      pass?: string;
      redrawReason: any;
      pickZ: any;
    }): any;
    shouldDrawLayer(layer: any): any;
    getModuleParameters(): {
      pickingActive: number;
      pickingAttribute: any;
      lightSources: {};
    };
    getLayerParameters(layer: any, layerIndex: any): any;
  }
}
declare module '@deck.gl/core/lib/deck-renderer' {
  export default class DeckRenderer {
    constructor(gl: any);
    setProps(props: any): void;
    renderLayers(opts: any): void;
    needsRedraw(opts?: { clearRedrawFlags: boolean }): any;
    finalize(): void;
    _preRender(effects: any, opts: any): void;
    _resizeRenderBuffers(): void;
    _postRender(effects: any, opts: any): void;
  }
}
declare module '@deck.gl/core/lib/picking/query-object' {
  /**
   * Pick at a specified pixel with a tolerance radius
   * Returns the closest object to the pixel in shape `{pickedColor, pickedLayer, pickedObjectIndex}`
   */
  export function getClosestObject({
    pickedColors,
    layers,
    deviceX,
    deviceY,
    deviceRadius,
    deviceRect,
  }: {
    pickedColors: any;
    layers: any;
    deviceX: any;
    deviceY: any;
    deviceRadius: any;
    deviceRect: any;
  }):
    | {
        pickedColor: any;
        pickedLayer: any;
        pickedObjectIndex: number;
      }
    | {
        pickedColor: any;
        pickedLayer: any;
        pickedObjectIndex: any;
        pickedX: any;
        pickedY: any;
      };
  /**
   * Examines a picking buffer for unique colors
   * Returns array of unique objects in shape `{x, y, pickedColor, pickedLayer, pickedObjectIndex}`
   */
  export function getUniqueObjects({ pickedColors, layers }: { pickedColors: any; layers: any }): any[];
}
declare module '@deck.gl/core/lib/picking/pick-info' {
  export function processPickInfo({
    pickInfo,
    lastPickedInfo,
    mode,
    layers,
    viewports,
    x,
    y,
    z,
    pixelRatio,
  }: {
    pickInfo: any;
    lastPickedInfo: any;
    mode: any;
    layers: any;
    viewports: any;
    x: any;
    y: any;
    z: any;
    pixelRatio: any;
  }): Map<any, any>;
  export function getLayerPickingInfo({ layer, info, mode }: { layer: any; info: any; mode: any }): any;
}
declare module '@deck.gl/core/lib/deck-picker' {
  export default class DeckPicker {
    constructor(gl: any);
    setProps(props: any): void;
    finalize(): void;
    pickObject(opts: any): {
      result: any[];
      emptyInfo: any;
    };
    pickObjects(opts: {
      x: any;
      y: any;
      width: any;
      height: any;
      layers: any;
      viewports: any;
      activateViewport: any;
    }): any[];
    getLastPickedObject(
      {
        x,
        y,
        layers,
        viewports,
      }: {
        x: any;
        y: any;
        layers: any;
        viewports: any;
      },
      lastPickedInfo?: any
    ): any;
    _resizeBuffer(): any;
    _pickClosestObject({
      layers,
      viewports,
      x,
      y,
      radius,
      depth,
      mode,
      unproject3D,
      onViewportActive,
    }: {
      layers: any;
      viewports: any;
      x: any;
      y: any;
      radius?: number;
      depth?: number;
      mode?: string;
      unproject3D: any;
      onViewportActive: any;
    }): {
      result: any[];
      emptyInfo: any;
    };
    _pickVisibleObjects({
      layers,
      viewports,
      x,
      y,
      width,
      height,
      mode,
      onViewportActive,
    }: {
      layers: any;
      viewports: any;
      x: any;
      y: any;
      width?: number;
      height?: number;
      mode?: string;
      onViewportActive: any;
    }): any[];
    _drawAndSample({
      layers,
      viewports,
      onViewportActive,
      deviceRect,
      pass,
      redrawReason,
      pickZ,
    }: {
      layers: any;
      viewports: any;
      onViewportActive: any;
      deviceRect: any;
      pass: any;
      redrawReason: any;
      pickZ: any;
    }): Float32Array | Uint8Array;
    _getPickingRect({
      deviceX,
      deviceY,
      deviceRadius,
      deviceWidth,
      deviceHeight,
    }: {
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
  }
}
declare module '@deck.gl/core/lib/tooltip' {
  export default class Tooltip {
    constructor(canvas: any);
    el: HTMLElement;
    setTooltip(displayInfo: any, x: any, y: any): void;
    remove(): void;
  }
}
declare module '@deck.gl/core/lib/deck' {
  import Controller, { ControllerOptions } from '@deck.gl/core/controllers/controller';
  import Effect from '@deck.gl/core/lib/effect';
  import Layer from '@deck.gl/core/lib/layer';
  import LayerManager from '@deck.gl/core/lib/layer-manager';
  import Tooltip from '@deck.gl/core/lib/tooltip';
  import View from '@deck.gl/core/views/view';
  import Viewport from '@deck.gl/core/viewports/viewport';
  import TransitionInterpolator from '@deck.gl/core/transitions/transition-interpolator';
  import { TRANSITION_EVENTS } from '@deck.gl/core/controllers/transition-manager';
  import { Position } from '@deck.gl/core/utils/positions';
  import { AnimationLoop } from '@luma.gl/core';

  export interface InteractiveState {
    isDragging: boolean;
    isHovering: boolean;
  }

  export interface PickInfo<D> {
    layer: Layer<D>;
    index: number;
    object: D;
    x: number;
    y: number;
    coordinate?: Position;
    picked?: boolean;
  }

  export type PickMode = 'hover' | 'click';

  // https://deck.gl/docs/api-reference/core/deck#viewstate
  export interface InitialViewStateProps {
    latitude?: number;
    longitude?: number;
    zoom?: number;
    bearing?: number;
    pitch?: number;
    altitude?: number;
    maxPitch?: number;
    maxZoom?: number;
    minPitch?: number;
    minZoom?: number;
  }

  // https://github.com/visgl/deck.gl/blob/master/docs/developer-guide/view-state-transitions.md
  export interface ViewStateProps extends InitialViewStateProps {
    transitionDuration?: number | string;
    transitionEasing?: (x: number) => number;
    transitionInterpolator?: TransitionInterpolator;
    transitionInterruption?: TRANSITION_EVENTS;
    onTransitionStart?: () => void;
    onTransitionInterrupt?: () => void;
    onTransitionEnd?: () => void;
  }

  export interface MetricsPayload {
    bufferMemory: number;
    cpuTime: number;
    cpuTimePerFrame: number;
    fps: number;
    framesRedrawn: number;
    gpuMemory: number;
    gpuTime: number;
    gpuTimePerFrame: number;
    pickCount: number;
    pickTime: number;
    renderbufferMemory: number;
    setPropsTime: number;
    textureMemory: number;
    updateAttributesTime: number;
  }

  export interface ContextProviderValue {
    viewport: Viewport;
    container: HTMLElement;
    // @TODO: mjolnir.js types
    eventManager: object;
  }

  export interface InteractionState {
    inTransition?: boolean;
    isDragging?: boolean;
    isPanning?: boolean;
    isRotating?: boolean;
    isZooming?: boolean;
  }

  export interface DeckProps<T = ContextProviderValue> {
    //https://deck.gl/#/documentation/deckgl-api-reference/deck?section=properties
    // https://github.com/visgl/deck.gl/blob/e948740f801cf91b541a9d7f3bba143ceac34ab2/modules/react/src/deckgl.js#L71-L72
    width: string | number;
    height: string | number;
    layers: Layer<any>[];
    layerFilter: (args: { layer: Layer<any>; viewport: Viewport; isPicking: boolean; renderPass: string }) => boolean;
    getCursor: (interactiveState: InteractiveState) => string;
    views: View[];
    viewState: ViewStateProps;
    initialViewState: InitialViewStateProps;
    controller: null | Controller | ControllerOptions | boolean;
    effects: Effect[];
    _typedArrayManagerProps: {
      overAlloc?: number;
      poolSize?: number;
    };

    //Configuration Properties
    id: string;
    style: {};
    parent: HTMLElement;
    canvas?: HTMLCanvasElement | string;
    touchAction: string;
    pickingRadius: number;
    getTooltip: <D>(info: PickInfo<D>) =>
      | null
      | string
      | {
          text?: string;
          html?: string;
          className?: string;
          style?: {};
        };
    useDevicePixels: boolean | number;
    gl: WebGLRenderingContext;
    glOptions: WebGLContextAttributes;
    _framebuffer: any;
    parameters: object;
    debug: boolean;
    _animate: boolean;
    _pickable: boolean;

    //Event Callbacks
    onWebGLInitialized: (gl: WebGLRenderingContext) => any;
    onViewStateChange: (args: { viewState: any; interactionState: InteractionState; oldViewState: any }) => any;
    onInteractionStateChange(interactionState: InteractionState): void;
    onHover: <D>(info: PickInfo<D>, e: MouseEvent) => any;
    onClick: <D>(info: PickInfo<D>, e: MouseEvent) => any;
    onDragStart: <D>(info: PickInfo<D>, e: MouseEvent) => any;
    onDrag: <D>(info: PickInfo<D>, e: MouseEvent) => any;
    onDragEnd: <D>(info: PickInfo<D>, e: MouseEvent) => any;
    onLoad: () => void;
    onResize: (size: { height: number; width: number }) => void;
    onBeforeRender: (args: { gl: WebGLRenderingContext }) => void;
    onAfterRender: (args: { gl: WebGLRenderingContext }) => void;
    onError: (error: Error, source: any) => void;
    _onMetrics: (metrics: MetricsPayload) => void;

    ContextProvider?: React.Provider<T>;

    userData: any;
  }

  export default class Deck<T = ContextProviderValue> {
    constructor(props: Partial<DeckProps<T>>);
    animationLoop: AnimationLoop;
    canvas: HTMLCanvasElement;
    eventManager: any;
    layerManager: LayerManager;
    tooltip: Tooltip;
    viewState: any;
    width: number;
    height: number;
    finalize(): void;
    props: DeckProps<T>;
    setProps(props: Partial<DeckProps<T>>): void;
    needsRedraw(opts?: { clearRedrawFlags: boolean }): any;
    redraw(force: any): void;
    getViews(): any;
    getViewports(rect: any): any;
    pickObject({ x, y, radius, layerIds }: { x: any; y: any; radius?: number; layerIds?: any }): any;
    pickMultipleObjects({
      x,
      y,
      radius,
      layerIds,
      depth,
    }: {
      x: any;
      y: any;
      radius?: number;
      layerIds?: any;
      depth?: number;
    }): any;
    pickObjects({
      x,
      y,
      width,
      height,
      layerIds,
    }: {
      x: any;
      y: any;
      width?: number;
      height?: number;
      layerIds?: any;
    }): any;
    _pick(method: any, statKey: any, opts: any): any;
    _createCanvas(props: any): any;
    _setCanvasSize(props: any): void;
    _updateCanvasSize(): void;
    _checkForCanvasSizeChange(): boolean;
    _createAnimationLoop(props: any): any;
    _getViewState(): any;
    _getViews(): any;
    _onPointerMove(event: any): void;
    _pickAndCallback(): void;
    _updateCursor(): void;
    _setGLContext(gl: any): void;
    _drawLayers(redrawReason: any, renderOptions: any): void;
    _onRendererInitialized({ gl }: { gl: any }): void;
    _onRenderFrame(animationProps: any): void;
    _onViewStateChange(params: any): void;
    _onInteractiveStateChange({ isDragging }: { isDragging?: boolean }): void;
    _onEvent(event: any): void;
    _onPointerDown(event: any): void;
    _getFrameStats(): void;
    _getMetrics(): void;
  }
}
declare module '@deck.gl/core/lib/layer-extension' {
  export default class LayerExtension {
    constructor(opts?: {});
    equals(extension: any): boolean;
    getShaders(extension: any): any;
    getSubLayerProps(extension: any): {
      updateTriggers: {};
    };
    initializeState(context: any, extension: any): void;
    updateState(params: any, extension: any): void;
    draw(params: any, extension: any): void;
    finalizeState(extension: any): void;
  }
}
declare module 'lib' {
  export { COORDINATE_SYSTEM } from '@deck.gl/core/lib/constants';
  export { default as Deck } from '@deck.gl/core/lib/deck';
  export { default as DeckRenderer } from '@deck.gl/core/lib/deck-renderer';
  export { default as Effect } from '@deck.gl/core/lib/effect';
  export { default as Layer } from '@deck.gl/core/lib/layer';
  export { default as CompositeLayer } from '@deck.gl/core/lib/composite-layer';
  export { default as LayerExtension } from '@deck.gl/core/lib/layer-extension';
  export { default as AttributeManager } from '@deck.gl/core/lib/attribute/attribute-manager';
  export { default as LayerManager } from '@deck.gl/core/lib/layer-manager';
}
declare module '@deck.gl/core/effects/lighting/point-light' {
  export class PointLight {
    constructor(props?: {});
    getProjectedLight({ layer }: { layer: any }): any;
  }
}
declare module '@deck.gl/core/effects/lighting/camera-light' {
  import { PointLight } from '@deck.gl/core/effects/lighting/point-light';
  export default class CameraLight extends PointLight {
    getProjectedLight({ layer }: { layer: any }): any;
  }
}
declare module '@deck.gl/core/effects/lighting/suncalc' {
  export function getSolarPosition(
    timestamp: any,
    latitude: any,
    longitude: any
  ): {
    azimuth: number;
    altitude: number;
  };
  export function getSunlightDirection(timestamp: any, latitude: any, longitude: any): number[];
}
declare module '@deck.gl/core/effects/lighting/sun-light' {
  import { DirectionalLight } from '@deck.gl/core/effects/lighting/directional-light';
  export default class SunLight extends DirectionalLight {
    constructor({ timestamp, ...others }: { [x: string]: any; timestamp: any });
    getProjectedLight({ layer }: { layer: any }): this;
  }
}
declare module '@deck.gl/core/passes/screen-pass' {
  import Pass from '@deck.gl/core/passes/pass';
  export default class ScreenPass extends Pass {
    constructor(gl: any, props?: {});
    render(params: any): void;
    delete(): void;
    /**
     * Renders the pass.
     * This is an abstract method that should be overridden.
     * @param {Framebuffer} inputBuffer - Frame buffer that contains the result of the previous pass
     * @param {Framebuffer} outputBuffer - Frame buffer that serves as the output render target
     */
    _renderPass(
      gl: any,
      {
        inputBuffer,
        outputBuffer,
      }: {
        inputBuffer: any;
        outputBuffer: any;
      }
    ): void;
  }
}
declare module '@deck.gl/core/effects/post-process-effect' {
  import Effect from '@deck.gl/core/lib/effect';
  export default class PostProcessEffect extends Effect {
    constructor(module: any, props?: {});
    postRender(gl: any, params: any): any;
    cleanup(): void;
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
    get controller(): any;
    _getViewport(props: any): Viewport;
  }
}
declare module '@deck.gl/core/controllers/orbit-controller' {
  import Controller from '@deck.gl/core/controllers/controller';
  import ViewState from '@deck.gl/core/controllers/view-state';
  import LinearInterpolator from '@deck.gl/core/transitions/linear-interpolator';
  import { TRANSITION_EVENTS } from '@deck.gl/core/controllers/transition-manager';
  export class OrbitState extends ViewState {
    constructor({
      ViewportType,
      width, // Width of viewport
      height, // Height of viewport
      orbitAxis,
      rotationX, // Rotation around x axis
      rotationOrbit, // Rotation around orbit axis
      target,
      zoom,
      minRotationX,
      maxRotationX,
      minZoom,
      maxZoom,
      /** Interaction states, required to calculate change during transform */
      startPanPosition,
      startTarget,
      startRotationX,
      startRotationOrbit,
      startZoomPosition,
      startZoom,
    }: {
      ViewportType: any;
      width: any;
      height: any;
      orbitAxis?: string;
      rotationX?: number;
      rotationOrbit?: number;
      target?: number[];
      zoom?: number;
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
    getInteractiveState(): any;
    /**
     * Start panning
     * @param {[Number, Number]} pos - position on screen where the pointer grabs
     */
    panStart({ pos }: { pos: any }): OrbitState;
    /**
     * Pan
     * @param {[Number, Number]} pos - position on screen where the pointer is
     */
    pan({ pos, startPos }: { pos: any; startPos: any }): OrbitState;
    /**
     * End panning
     * Must call if `panStart()` was called
     */
    panEnd(): OrbitState;
    /**
     * Start rotating
     * @param {[Number, Number]} pos - position on screen where the pointer grabs
     */
    rotateStart({ pos }: { pos: any }): OrbitState;
    /**
     * Rotate
     * @param {[Number, Number]} pos - position on screen where the pointer is
     */
    rotate({ deltaScaleX, deltaScaleY }: { deltaScaleX: any; deltaScaleY: any }): OrbitState;
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
    zoomStart({ pos }: { pos: any }): OrbitState;
    /**
     * Zoom
     * @param {[Number, Number]} pos - position on screen where the current target is
     * @param {[Number, Number]} startPos - the target position at
     *   the start of the operation. Must be supplied of `zoomStart()` was not called
     * @param {Number} scale - a number between [0, 1] specifying the accumulated
     *   relative scale.
     */
    zoom({ pos, startPos, scale }: { pos: any; startPos: any; scale: any }): OrbitState;
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
    _calculateNewZoom({ scale, startZoom }: { scale: any; startZoom: any }): any;
    _calculateNewTarget({ startTarget, zoom, pixelOffset }: { startTarget: any; zoom: any; pixelOffset: any }): any;
    _getUpdatedState(newProps: any): OrbitState;
    _applyConstraints(props: any): any;
  }
  export default class OrbitController extends Controller {
    constructor(props: any);
    _getTransitionProps(): {
      transitionDuration: number;
      transitionEasing: (t: any) => any;
      transitionInterpolator: LinearInterpolator;
      transitionInterruption: TRANSITION_EVENTS;
    };
  }
}
declare module '@deck.gl/core/views/orbit-view' {
  import View, { ViewProps } from '@deck.gl/core/views/view';
  import { Position } from '@deck.gl/core/utils/positions';
  export interface OrbitViewProps extends ViewProps {
    orbitAxis?: 'Z' | 'Y'; // Axis with 360 degrees rotating freedom, either `'Y'` or `'Z'`, default to `'Z'`.
  }
  export interface OrbitViewState {
    target: Position;
    rotationOrbit?: number;
    rotationX?: number;
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    minRotationX?: number;
    maxRotationX?: number;
  }
  export default class OrbitView extends View {
    constructor(props: OrbitViewProps);
    get controller(): any;
  }
}
declare module '@deck.gl/core/controllers/orthographic-controller' {
  import Controller from '@deck.gl/core/controllers/controller';
  import LinearInterpolator from '@deck.gl/core/transitions/linear-interpolator';
  import { TRANSITION_EVENTS } from '@deck.gl/core/controllers/transition-manager';
  export default class OrthographicController extends Controller {
    constructor(props: any);
    _onPanRotate(event: any): boolean | void;
    _getTransitionProps(): {
      transitionDuration: number;
      transitionEasing: (t: any) => any;
      transitionInterpolator: LinearInterpolator;
      transitionInterruption: TRANSITION_EVENTS;
    };
  }
}
declare module '@deck.gl/core/views/orthographic-view' {
  import View from '@deck.gl/core/views/view';
  export default class OrthographicView extends View {
    constructor(props: any);
    get controller(): any;
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
    /**
			 * @param props {Object}
			  - `props.curve` (Number, optional, default: 1.414) - The zooming "curve" that will occur along the flight path.
			  - `props.speed` (Number, optional, default: 1.2) - The average speed of the animation defined in relation to `options.curve`, it linearly affects the duration, higher speed returns smaller durations and vice versa.
			  - `props.screenSpeed` (Number, optional) - The average speed of the animation measured in screenfuls per second. Similar to `opts.speed` it linearly affects the duration,  when specified `opts.speed` is ignored.
			  - `props.maxDuration` (Number, optional) - Maximum duration in milliseconds, if calculated duration exceeds this value, `0` is returned.
			 */
    constructor(props?: {});
    interpolateProps(startProps: any, endProps: any, t: any): any;
    getDuration(startProps: any, endProps: any): any;
  }
}
declare module '@deck.gl/core/utils/tesselator' {
  export default class Tesselator {
    constructor(opts?: {});
    updateGeometry(opts: any): void;
    updatePartialGeometry({ startRow, endRow }: { startRow: any; endRow: any }): void;
    updateGeometryAttributes(geometry: any, startIndex: any, size: any): void;
    getGeometrySize(geometry: any): void;
    getGeometryFromBuffer(geometryBuffer: any): any;
    _allocate(instanceCount: any, copy: any): void;
    /**
     * Visit all objects
     * `data` is expected to be an iterable consistent with the base Layer expectation
     */
    _forEachGeometry(visitor: any, startRow: any, endRow: any): void;
    _rebuildGeometry(dataRange: any): void;
  }
}
declare module '@deck.gl/core' {
  import '@deck.gl/core/lib/init';
  import '@deck.gl/core/shaderlib';
  export { COORDINATE_SYSTEM, UNIT } from '@deck.gl/core/lib/constants';
  export { default as LightingEffect } from '@deck.gl/core/effects/lighting/lighting-effect';
  export { AmbientLight } from '@deck.gl/core/effects/lighting/ambient-light';
  export { DirectionalLight } from '@deck.gl/core/effects/lighting/directional-light';
  export { PointLight } from '@deck.gl/core/effects/lighting/point-light';
  export { default as _CameraLight } from '@deck.gl/core/effects/lighting/camera-light';
  export { default as _SunLight } from '@deck.gl/core/effects/lighting/sun-light';
  export { default as PostProcessEffect } from '@deck.gl/core/effects/post-process-effect';
  export { default as _LayersPass } from '@deck.gl/core/passes/layers-pass';
  export { default as Deck } from '@deck.gl/core/lib/deck';
  export { default as LayerManager } from '@deck.gl/core/lib/layer-manager';
  export { default as AttributeManager } from '@deck.gl/core/lib/attribute/attribute-manager';
  export { default as Layer } from '@deck.gl/core/lib/layer';
  export { default as CompositeLayer } from '@deck.gl/core/lib/composite-layer';
  export { default as DeckRenderer } from '@deck.gl/core/lib/deck-renderer';
  export { default as Viewport } from '@deck.gl/core/viewports/viewport';
  export { default as WebMercatorViewport } from '@deck.gl/core/viewports/web-mercator-viewport';
  export { picking, project, project32, gouraudLighting, phongLighting, shadow } from '@deck.gl/core/shaderlib';
  export { default as View } from '@deck.gl/core/views/view';
  export { default as MapView } from '@deck.gl/core/views/map-view';
  export { default as FirstPersonView } from '@deck.gl/core/views/first-person-view';
  export { default as OrbitView, OrbitViewState } from '@deck.gl/core/views/orbit-view';
  export { default as OrthographicView } from '@deck.gl/core/views/orthographic-view';
  export { default as Controller } from '@deck.gl/core/controllers/controller';
  export { default as MapController } from '@deck.gl/core/controllers/map-controller';
  export { default as FirstPersonController } from '@deck.gl/core/controllers/first-person-controller';
  export { default as OrbitController } from '@deck.gl/core/controllers/orbit-controller';
  export { default as OrthographicController } from '@deck.gl/core/controllers/orthographic-controller';
  export { default as Effect } from '@deck.gl/core/lib/effect';
  export { default as LayerExtension } from '@deck.gl/core/lib/layer-extension';
  export { TRANSITION_EVENTS } from '@deck.gl/core/controllers/transition-manager';
  export { default as LinearInterpolator } from '@deck.gl/core/transitions/linear-interpolator';
  export { default as FlyToInterpolator } from '@deck.gl/core/transitions/viewport-fly-to-interpolator';
  export { default as log } from '@deck.gl/core/utils/log';
  export { createIterable } from '@deck.gl/core/utils/iterable-utils';
  export { fp64LowPart } from '@deck.gl/core/utils/math-utils';
  export { default as Tesselator } from '@deck.gl/core/utils/tesselator';
  export { fillArray as _fillArray, flatten as _flatten } from '@deck.gl/core/utils/flatten';
  export { count as _count } from '@deck.gl/core/utils/count';
  export { default as _memoize } from '@deck.gl/core/utils/memoize';
  export { mergeShaders as _mergeShaders } from '@deck.gl/core/utils/shader';
  export { compareProps as _compareProps } from '@deck.gl/core/lifecycle/props';
  export { RGBAColor } from '@deck.gl/core/utils/color';
  export { Position, Position2D, Position3D } from '@deck.gl/core/utils/positions';
}
declare module '@deck.gl/core/utils/color' {
  export type RGBColor = [number, number, number];
  export type RGBAColor = [number, number, number, number?];
  export type ColorDomain = [number, number];
  export type ColorRange = RGBAColor[];
  function parseColor(color: any, target: any, index?: number): any;
  function applyOpacity(color: any, opacity?: number): any[];
  const _default: {
    parseColor: typeof parseColor;
    applyOpacity: typeof applyOpacity;
  };
  export default _default;
}
