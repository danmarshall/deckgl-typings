//typings for @deck.gl/aggregation-layers v7.3.3
declare module '@deck.gl/aggregation-layers/utils/color-utils' {
	export const defaultColorRange: number[][];
	export function colorRangeToFlatArray(colorRange: any, normalize?: boolean, ArrayType?: Float32ArrayConstructor): any;

}
declare module '@deck.gl/aggregation-layers/utils/aggregation-operation-utils' {
	export const AGGREGATION_OPERATION: {
	    SUM: number;
	    MEAN: number;
	    MIN: number;
	    MAX: number;
	};
	export function getMean(pts: any, accessor: any): number;
	export function getSum(pts: any, accessor: any): any;
	export function getMax(pts: any, accessor: any): any;
	export function getMin(pts: any, accessor: any): any;
	export function getValueFunc(aggregation: any, accessor: any): (pts: any) => any;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/gpu-grid-aggregator-constants' {
	export const DEFAULT_CHANGE_FLAGS: {
	    dataChanged: boolean;
	    viewportChanged: boolean;
	    cellSizeChanged: boolean;
	};
	export const DEFAULT_RUN_PARAMS: {
	    changeFlags: {
	        dataChanged: boolean;
	        viewportChanged: boolean;
	        cellSizeChanged: boolean;
	    };
	    projectPoints: boolean;
	    useGPU: boolean;
	    fp64: boolean;
	    viewport: any;
	    gridTransformMatrix: any;
	    createBufferObjects: boolean;
	};
	export const MAX_32_BIT_FLOAT = 3.402823466e+38;
	export const MIN_BLEND_EQUATION: any[];
	export const MAX_BLEND_EQUATION: any[];
	export const MAX_MIN_BLEND_EQUATION: any[];
	export const EQUATION_MAP: {
	    [x: number]: any;
	};
	export const ELEMENTCOUNT = 4;
	export const DEFAULT_WEIGHT_PARAMS: {
	    size: number;
	    operation: number;
	    needMin: boolean;
	    needMax: boolean;
	    combineMaxMin: boolean;
	};
	export const IDENTITY_MATRIX: number[];
	export const PIXEL_SIZE = 4;
	export const WEIGHT_SIZE = 3;
	export const MAX_MIN_TEXTURE_OPTS: {
	    format: any;
	    type: any;
	    border: number;
	    mipmaps: boolean;
	    parameters: {
	        [x: number]: any;
	    };
	    dataFormat: any;
	    width: number;
	    height: number;
	};

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/aggregate-to-grid-vs.glsl' {
	 const _default: "#define SHADER_NAME gpu-aggregation-to-grid-vs\n\nattribute vec2 positions;\nattribute vec3 weights;\nuniform vec2 windowSize;\nuniform vec2 cellSize;\nuniform vec2 gridSize;\nuniform mat4 uProjectionMatrix;\nuniform bool projectPoints;\n\nvarying vec3 vWeights;\n\nvec2 project_to_pixel(vec4 pos) {\n  vec4 result =  uProjectionMatrix * pos;\n  return result.xy/result.w;\n}\n\nvoid main(void) {\n\n  vWeights = weights;\n\n  vec4 windowPos = vec4(positions, 0, 1.);\n  if (projectPoints) {\n    windowPos = project_position_to_clipspace(vec3(positions, 0), vec2(0, 0), vec3(0, 0, 0));\n  }\n\n  vec2 pos = project_to_pixel(windowPos);\n\n  // Transform (0,0):windowSize -> (0, 0): gridSize\n  pos = floor(pos / cellSize);\n\n  // Transform (0,0):gridSize -> (-1, -1):(1,1)\n  pos = (pos * (2., 2.) / (gridSize)) - (1., 1.);\n\n  // Move to pixel center, pixel-size in screen sapce (2/gridSize) * 0.5 => 1/gridSize\n  vec2 offset = 1.0 / gridSize;\n  pos = pos + offset;\n\n  gl_Position = vec4(pos, 0.0, 1.0);\n}\n";
	export default _default;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/aggregate-to-grid-vs-64.glsl' {
	 const _default: "#define SHADER_NAME gpu-aggregation-to-grid-vs-64\n\nattribute vec2 positions;\nattribute vec2 positions64xyLow;\nattribute vec3 weights;\nuniform vec2 windowSize;\nuniform vec2 cellSize;\nuniform vec2 gridSize;\nuniform vec2 uProjectionMatrixFP64[16];\nuniform bool projectPoints;\n\nvarying vec3 vWeights;\n\nvoid project_to_pixel(vec2 pos, vec2 pos64xyLow, out vec2 pixelXY64[2]) {\n\n  vec2 result64[4];\n  vec2 position64[4];\n  position64[0] = vec2(pos.x, pos64xyLow.x);\n  position64[1] = vec2(pos.y, pos64xyLow.y);\n  position64[2] = vec2(0., 0.);\n  position64[3] = vec2(1., 0.);\n  mat4_vec4_mul_fp64(uProjectionMatrixFP64, position64,\n  result64);\n\n  pixelXY64[0] = div_fp64(result64[0], result64[3]);\n  pixelXY64[1] = div_fp64(result64[1], result64[3]);\n}\n\nvoid main(void) {\n\n  vWeights = weights;\n\n  vec2 windowPos = positions;\n  vec2 windowPos64xyLow = positions64xyLow;\n  if (projectPoints) {\n    vec2 projectedXY[2];\n    project_position_fp64(windowPos, windowPos64xyLow, projectedXY);\n    windowPos.x = projectedXY[0].x;\n    windowPos.y = projectedXY[1].x;\n    windowPos64xyLow.x = projectedXY[0].y;\n    windowPos64xyLow.y = projectedXY[1].y;\n  }\n\n  vec2 pixelXY64[2];\n  project_to_pixel(windowPos, windowPos64xyLow, pixelXY64);\n\n  // Transform (0,0):windowSize -> (0, 0): gridSize\n  vec2 gridXY64[2];\n  gridXY64[0] = div_fp64(pixelXY64[0], vec2(cellSize.x, 0));\n  gridXY64[1] = div_fp64(pixelXY64[1], vec2(cellSize.y, 0));\n  float x = floor(gridXY64[0].x);\n  float y = floor(gridXY64[1].x);\n  vec2 pos = vec2(x, y);\n\n  // Transform (0,0):gridSize -> (-1, -1):(1,1)\n  pos = (pos * (2., 2.) / (gridSize)) - (1., 1.);\n\n  // Move to pixel center, pixel-size in screen sapce (2/gridSize) * 0.5 => 1/gridSize\n  vec2 offset = 1.0 / gridSize;\n  pos = pos + offset;\n\n  gl_Position = vec4(pos, 0.0, 1.0);\n}\n";
	export default _default;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/aggregate-to-grid-fs.glsl' {
	 const _default: "#define SHADER_NAME gpu-aggregation-to-grid-fs\n\nprecision highp float;\n\nvarying vec3 vWeights;\n\nvoid main(void) {\n  gl_FragColor = vec4(vWeights, 1.0);\n}\n";
	export default _default;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/aggregate-all-vs-64.glsl' {
	 const _default: "#version 300 es\n#define SHADER_NAME gpu-aggregation-all-vs-64\n\nin vec2 position;\nuniform ivec2 gridSize;\nout vec2 vTextureCoord;\n\nvoid main(void) {\n  // Map each position to single pixel\n  vec2 pos = vec2(-1.0, -1.0);\n\n  // Move to pixel center, pixel-size in screen sapce (2/gridSize) * 0.5 => 1/gridSize\n  vec2 offset = 1.0 / vec2(gridSize);\n  pos = pos + offset;\n\n  gl_Position = vec4(pos, 0.0, 1.0);\n\n  int yIndex = gl_InstanceID / gridSize[0];\n  int xIndex = gl_InstanceID - (yIndex * gridSize[0]);\n\n  vec2 yIndexFP64 = vec2(float(yIndex), 0.);\n  vec2 xIndexFP64 = vec2(float(xIndex), 0.);\n  vec2 gridSizeYFP64 = vec2(gridSize[1], 0.);\n  vec2 gridSizeXFP64 = vec2(gridSize[0], 0.);\n\n  vec2 texCoordXFP64 = div_fp64(yIndexFP64, gridSizeYFP64);\n  vec2 texCoordYFP64 = div_fp64(xIndexFP64, gridSizeXFP64);\n\n  vTextureCoord = vec2(texCoordYFP64.x, texCoordXFP64.x);\n  // Enforce default value for ANGLE issue (https://bugs.chromium.org/p/angleproject/issues/detail?id=3941)\n  gl_PointSize = 1.0;\n}\n";
	export default _default;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/aggregate-all-fs.glsl' {
	 const _default: "#version 300 es\n#define SHADER_NAME gpu-aggregation-all-fs\n\nprecision highp float;\n\nin vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform bool combineMaxMin;\nout vec4 fragColor;\nvoid main(void) {\n  vec4 textureColor = texture(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n  if (textureColor.a == 0.) {\n    discard;\n  }\n  fragColor.rgb = textureColor.rgb;\n  // if combineMinMax is true, use Alpha channel for first weights min value.\n  fragColor.a = combineMaxMin ? textureColor.r : textureColor.a;\n}\n";
	export default _default;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/transform-mean-vs.glsl' {
	 const _default: "#define SHADER_NAME gpu-aggregation-transform-mean-vs\nattribute vec4 aggregationValues;\nvarying vec4 meanValues;\n\nvoid main()\n{\n  // TODO: Use 64-bit division ?? not needed given this is aggregation ??\n  bool isCellValid = bool(aggregationValues.w > 0.);\n  // aggregationValues:  XYZ contain aggregated values, W contains count\n  meanValues.xyz = isCellValid ? aggregationValues.xyz/aggregationValues.w : vec3(0, 0, 0);\n  meanValues.w = aggregationValues.w;\n}\n";
	export default _default;

}
declare module '@deck.gl/aggregation-layers/utils/resource-utils' {
	export function getFloatTexture(gl: any, opts?: {}): any;
	export function getFramebuffer(gl: any, opts: any): any;
	export function getFloatArray(array: any, size: any, fillValue?: number): any;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/gpu-grid-aggregator' {
	export default class GPUGridAggregator {
	    static getAggregationData({ aggregationData, maxData, minData, maxMinData, pixelIndex }: {
	        aggregationData: any;
	        maxData: any;
	        minData: any;
	        maxMinData: any;
	        pixelIndex: any;
	    }): {};
	    static getCellData({ countsData, size }: {
	        countsData: any;
	        size?: number;
	    }): {
	        cellCounts: Uint32Array;
	        cellWeights: Float32Array;
	    };
	    static isSupported(gl: any): any;
	    constructor(gl: any, opts?: {});
	    delete(): void;
	    run(opts?: {}): {};
	    getData(weightId: any): {};
	    deleteResources(resources: any): void;
	    getAggregationParams(opts: any): any;
	    normalizeWeightParams(weights: any): {};
	    setState(updateObject: any): void;
	    shouldTransformToGrid(opts: any): boolean;
	    updateGridSize(opts: any): void;
	    validateProps(aggregationParams: any, opts: any): void;
	    calculateAggregationData(opts: any): void;
	    calculateMeanMaxMinData(opts: any): void;
	    initCPUResults(opts: any): {};
	    runAggregationOnCPU(opts: any): {};
	    _uploadResultsToGPU({ gl, bufferName, textureName, id, data, result }: {
	        gl: any;
	        bufferName: any;
	        textureName: any;
	        id: any;
	        data: any;
	        result: any;
	    }): void;
	    updateAggregationBuffers(opts: any, results: any): void;
	    getAggregateData(opts: any): {};
	    getAggregationModel(fp64?: boolean): any;
	    getAllAggregationModel(): any;
	    getMeanTransform(opts: any): any;
	    renderAggregateData(opts: any): void;
	    renderToMaxMinTexture(opts: any): void;
	    renderToWeightsTexture(opts: any): void;
	    runAggregationOnGPU(opts: any): {};
	    setupFramebuffers(opts: any): void;
	    _getMinMaxTexture(name: any): any;
	    setupModels(fp64?: boolean): void;
	    setupWeightAttributes(opts: any): void;
	    trackGPUResultBuffers(results: any, weights: any): void;
	    updateModels(opts: any): void;
	}

}
declare module '@deck.gl/aggregation-layers/screen-grid-layer/screen-grid-layer-vertex.glsl' {
	 const _default: "#define SHADER_NAME screen-grid-layer-vertex-shader\n#define RANGE_COUNT 6\n\nattribute vec3 positions;\nattribute vec3 instancePositions;\nattribute vec4 instanceCounts;\nattribute vec3 instancePickingColors;\n\nuniform float opacity;\nuniform vec3 cellScale;\nuniform vec4 minColor;\nuniform vec4 maxColor;\nuniform vec4 colorRange[RANGE_COUNT];\nuniform vec2 colorDomain;\nuniform bool shouldUseMinMax;\nuniform sampler2D maxTexture;\n\nvarying vec4 vColor;\nvarying float vSampleCount;\n\nvec4 quantizeScale(vec2 domain, vec4 range[RANGE_COUNT], float value) {\n  vec4 outColor = vec4(0., 0., 0., 0.);\n  if (value >= domain.x && value <= domain.y) {\n    float domainRange = domain.y - domain.x;\n    if (domainRange <= 0.) {\n      outColor = colorRange[0];\n    } else {\n      float rangeCount = float(RANGE_COUNT);\n      float rangeStep = domainRange / rangeCount;\n      float idx = floor((value - domain.x) / rangeStep);\n      idx = clamp(idx, 0., rangeCount - 1.);\n      int intIdx = int(idx);\n      outColor = colorRange[intIdx];\n    }\n  }\n  outColor = outColor / 255.;\n  return outColor;\n}\n\nvoid main(void) {\n  vSampleCount = instanceCounts.a;\n\n  float weight = instanceCounts.r;\n  float maxWeight = texture2D(maxTexture, vec2(0.5)).r;\n\n  float step = weight / maxWeight;\n  vec4 minMaxColor = mix(minColor, maxColor, step) / 255.;\n\n  vec2 domain = colorDomain;\n  float domainMaxValid = float(colorDomain.y != 0.);\n  domain.y = mix(maxWeight, colorDomain.y, domainMaxValid);\n  vec4 rangeColor = quantizeScale(domain, colorRange, weight);\n\n  float rangeMinMax = float(shouldUseMinMax);\n  vec4 color = mix(rangeColor, minMaxColor, rangeMinMax);\n  vColor = vec4(color.rgb, color.a * opacity);\n\n  // Set color to be rendered to picking fbo (also used to check for selection highlight).\n  picking_setPickingColor(instancePickingColors);\n\n  gl_Position = vec4(instancePositions + positions * cellScale, 1.);\n}\n";
	export default _default;

}
declare module '@deck.gl/aggregation-layers/screen-grid-layer/screen-grid-layer-fragment.glsl' {
	 const _default: "#define SHADER_NAME screen-grid-layer-fragment-shader\n\nprecision highp float;\n\nvarying vec4 vColor;\nvarying float vSampleCount;\n\nvoid main(void) {\n  if (vSampleCount <= 0.0) {\n    discard;\n  }\n  gl_FragColor = vColor;\n\n  DECKGL_FILTER_COLOR(gl_FragColor, geometry);\n}\n";
	export default _default;

}
declare module '@deck.gl/aggregation-layers/screen-grid-layer/screen-grid-layer' {
	import { Layer } from '@deck.gl/core';
	export default class ScreenGridLayer extends Layer {
	    getShaders(): any;
	    initializeState(): void;
	    shouldUpdateState({ changeFlags }: {
	        changeFlags: any;
	    }): any;
	    updateState(opts: any): void;
	    finalizeState(): void;
	    draw({ uniforms }: {
	        uniforms: any;
	    }): void;
	    calculateInstancePositions(attribute: any, { numInstances }: {
	        numInstances: any;
	    }): void;
	    calculateInstanceCounts(attribute: any, { numInstances }: {
	        numInstances: any;
	    }): void;
	    getPickingInfo({ info, mode }: {
	        info: any;
	        mode: any;
	    }): any;
	    _getAggregationChangeFlags({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): {
	        cellSizeChanged: boolean;
	        dataChanged: any;
	        viewportChanged: any;
	    };
	    _getModel(gl: any): any;
	    _processData(): void;
	    _shouldUseMinMax(): boolean;
	    _updateAggregation(changeFlags: any): void;
	    _updateUniforms({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): void;
	    _updateGridParams(): void;
	}

}
declare module '@deck.gl/aggregation-layers/cpu-grid-layer/grid-aggregator' {
	/**
	 * Calculate density grid from an array of points
	 * @param {Iterable} data
	 * @param {number} cellSize - cell size in meters
	 * @param {function} getPosition - position accessor
	 * @returns {object} - grid data, cell dimension
	 */
	export function pointToDensityGridDataCPU({ data, cellSize, getPosition }: {
	    data: any;
	    cellSize: any;
	    getPosition: any;
	}): {
	    gridHash: {};
	    gridOffset: {
	        yOffset: number;
	        xOffset: number;
	    };
	    data: any[];
	};

}
declare module '@deck.gl/aggregation-layers/utils/bin-sorter' {
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
declare module '@deck.gl/aggregation-layers/utils/scale-utils' {
	export function linearScale(domain: any, range: any, value: any): any;
	export function quantizeScale(domain: any, range: any, value: any): any;
	export function getScale(domain: any, range: any, scaleFunction: any): {
	    (value: any): any;
	    domain(): any;
	    range(): any;
	};
	export function getQuantizeScale(domain: any, range: any): {
	    (value: any): any;
	    domain(): any;
	    range(): any;
	};
	export function getLinearScale(domain: any, range: any): {
	    (value: any): any;
	    domain(): any;
	    range(): any;
	};
	export function getQuantileScale(domain: any, range: any): (value: any) => any;
	export function getOrdinalScale(domain: any, range: any): (value: any) => any;

}
declare module '@deck.gl/aggregation-layers/utils/cpu-aggregator' {
	import { getQuantileScale } from '@deck.gl/aggregation-layers/utils/scale-utils';
	export default class CPUAggregator {
	    constructor(opts: any);
	    static defaultDimensions(): ({
	        key: string;
	        accessor: string;
	        pickingInfo: string;
	        getBins: {
	            triggers: {
	                value: {
	                    prop: string;
	                    updateTrigger: string;
	                };
	                weight: {
	                    prop: string;
	                    updateTrigger: string;
	                };
	                aggregation: {
	                    prop: string;
	                };
	            };
	        };
	        getDomain: {
	            triggers: {
	                lowerPercentile: {
	                    prop: string;
	                };
	                upperPercentile: {
	                    prop: string;
	                };
	            };
	            onSet: {
	                props: string;
	            };
	        };
	        getScaleFunc: {
	            triggers: {
	                domain: {
	                    prop: string;
	                };
	                range: {
	                    prop: string;
	                };
	                scaleType: {
	                    prop: string;
	                };
	            };
	        };
	        nullValue: number[];
	    } | {
	        key: string;
	        accessor: string;
	        pickingInfo: string;
	        getBins: {
	            triggers: {
	                value: {
	                    prop: string;
	                    updateTrigger: string;
	                };
	                weight: {
	                    prop: string;
	                    updateTrigger: string;
	                };
	                aggregation: {
	                    prop: string;
	                };
	            };
	        };
	        getDomain: {
	            triggers: {
	                lowerPercentile: {
	                    prop: string;
	                };
	                upperPercentile: {
	                    prop: string;
	                };
	            };
	            onSet: {
	                props: string;
	            };
	        };
	        getScaleFunc: {
	            triggers: {
	                domain: {
	                    prop: string;
	                };
	                range: {
	                    prop: string;
	                };
	                scaleType: {
	                    prop: string;
	                };
	            };
	        };
	        nullValue: number;
	    })[];
	    updateState({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }, viewport: any): any;
	    setState(updateObject: any): void;
	    setDimensionState(key: any, updateObject: any): void;
	    normalizeResult(result?: {}): {};
	    getAggregatedData(props: any, viewport: any): void;
	    updateGetValueFuncs(oldProps: any, props: any, changeFlags: any): void;
	    needsReProjectPoints(oldProps: any, props: any, changeFlags: any): any;
	    addDimension(dimensions: any): void;
	    _addDimension(dimensions?: any[]): void;
	    getDimensionUpdaters({ key, accessor, pickingInfo, getBins, getDomain, getScaleFunc, nullValue }: {
	        key: any;
	        accessor: any;
	        pickingInfo: any;
	        getBins: any;
	        getDomain: any;
	        getScaleFunc: any;
	        nullValue: any;
	    }): {
	        key: any;
	        accessor: any;
	        pickingInfo: any;
	        getBins: any;
	        getDomain: any;
	        getScaleFunc: any;
	        attributeAccessor: (cell: any) => any;
	    };
	    needUpdateDimensionStep(dimensionStep: any, oldProps: any, props: any, changeFlags: any): boolean;
	    getDimensionChanges(oldProps: any, props: any, changeFlags: any): any[];
	    getUpdateTriggers(props: any): {};
	    getScaleFunctionByScaleType(scaleType: any): typeof getQuantileScale;
	    getSortedBins(props: any): void;
	    getDimensionSortedBins(props: any, dimensionUpdater: any): void;
	    getDimensionValueDomain(props: any, dimensionUpdater: any): void;
	    getDimensionScale(props: any, dimensionUpdater: any): void;
	    getSubLayerDimensionAttribute(key: any, nullValue: any): (cell: any) => any;
	    getSubLayerAccessors(props: any): {};
	    getPickingInfo({ info }: {
	        info: any;
	    }): any;
	    getAccessor(dimensionKey: any): any;
	}

}
declare module '@deck.gl/aggregation-layers/cpu-grid-layer/cpu-grid-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	export default class CPUGridLayer extends CompositeLayer {
	    initializeState(): void;
	    updateState({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): void;
	    getPickingInfo({ info }: {
	        info: any;
	    }): any;
	    _onGetSublayerColor(cell: any): any;
	    _onGetSublayerElevation(cell: any): any;
	    _getSublayerUpdateTriggers(): any;
	    renderLayers(): any;
	}

}
declare module '@deck.gl/aggregation-layers/hexagon-layer/hexagon-aggregator' {
	/**
	 * Use d3-hexbin to performs hexagonal binning from geo points to hexagons
	 * @param {Iterable} data - array of points
	 * @param {Number} radius - hexagon radius in meter
	 * @param {function} getPosition - get points lon lat
	 * @param {Object} viewport - current viewport object

	 * @return {Object} - hexagons and countRange
	 */
	export function pointToHexbin({ data, radius, getPosition }: {
	    data: any;
	    radius: any;
	    getPosition: any;
	}, viewport: any): {
	    hexagons: any;
	};
	/**
	 * Get radius in mercator world space coordinates from meter
	 * @param {Number} radius - in meter
	 * @param {Object} viewport - current viewport object

	 * @return {Number} radius in mercator world spcae coordinates
	 */
	export function getRadiusInPixel(radius: any, viewport: any): number;

}
declare module '@deck.gl/aggregation-layers/hexagon-layer/hexagon-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	export default class HexagonLayer extends CompositeLayer {
	    initializeState(): void;
	    updateState({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): void;
	    updateRadiusAngle(vertices: any): void;
	    getPickingInfo({ info }: {
	        info: any;
	    }): any;
	    _onGetSublayerColor(cell: any): any;
	    _onGetSublayerElevation(cell: any): any;
	    _getSublayerUpdateTriggers(): any;
	    renderLayers(): any;
	}

}
declare module '@deck.gl/aggregation-layers/contour-layer/marching-squares-codes' {
	export const ISOLINES_CODE_OFFSET_MAP: {
	    0: any[];
	    1: number[][][];
	    2: number[][][];
	    3: number[][][];
	    4: number[][][];
	    5: {
	        0: number[][][];
	        1: number[][][];
	    };
	    6: number[][][];
	    7: number[][][];
	    8: number[][][];
	    9: number[][][];
	    10: {
	        0: number[][][];
	        1: number[][][];
	    };
	    11: number[][][];
	    12: number[][][];
	    13: number[][][];
	    14: number[][][];
	    15: any[];
	};
	export const ISOBANDS_CODE_OFFSET_MAP: {
	    [x: number]: number[][][] | {
	        0: number[][][];
	        1: number[][][];
	        2: number[][][];
	    };
	};

}
declare module '@deck.gl/aggregation-layers/contour-layer/marching-squares' {
	export const CONTOUR_TYPE: {
	    ISO_LINES: number;
	    ISO_BANDS: number;
	};
	export function getCode(opts: any): {
	    code: number;
	    meanCode: number;
	};
	export function getVertices(opts: any): any[];

}
declare module '@deck.gl/aggregation-layers/contour-layer/contour-utils' {
	export function generateContours({ thresholdData, colors, cellWeights, gridSize, gridOrigin, cellSize }: {
	    thresholdData: any;
	    colors: any;
	    cellWeights: any;
	    gridSize: any;
	    gridOrigin: any;
	    cellSize: any;
	}): {
	    contourSegments: any[];
	    contourPolygons: any[];
	};

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/grid-aggregation-utils' {
	export function pointToDensityGridData({ data, getPosition, cellSizeMeters, gpuGridAggregator, gpuAggregation, aggregationFlags, weightParams, fp64, coordinateSystem, viewport, boundingBox }: {
	    data: any;
	    getPosition: any;
	    cellSizeMeters: any;
	    gpuGridAggregator: any;
	    gpuAggregation: any;
	    aggregationFlags: any;
	    weightParams: any;
	    fp64?: boolean;
	    coordinateSystem?: any;
	    viewport?: any;
	    boundingBox?: any;
	}): {
	    weights: any;
	    gridSize: number[];
	    gridOrigin: any[];
	    cellSize: any[];
	    boundingBox: any;
	};
	export function alignToCell(inValue: any, cellSize: any): number;

}
declare module '@deck.gl/aggregation-layers/contour-layer/contour-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	export default class ContourLayer extends CompositeLayer {
	    initializeState(): void;
	    updateState({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): void;
	    finalizeState(): void;
	    renderLayers(): any[];
	    _aggregateData(aggregationFlags: any): void;
	    _generateContours(): void;
	    _getAggregationFlags({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): any;
	    _getLineLayerProps(): any;
	    _getSolidPolygonLayerProps(): any;
	    _onGetSublayerColor(element: any): number[];
	    _onGetSublayerStrokeWidth(segment: any): number;
	    _shouldRebuildContours({ oldProps, props }: {
	        oldProps: any;
	        props: any;
	    }): any;
	    _updateSubLayerTriggers(oldProps: any, props: any): void;
	    _updateThresholdData(props: any): void;
	}

}
declare module '@deck.gl/aggregation-layers/gpu-grid-layer/gpu-grid-cell-layer-vertex.glsl' {
	 const _default: "#version 300 es\n#define SHADER_NAME gpu-grid-cell-layer-vertex-shader\n#define RANGE_COUNT 6\n\nin vec3 positions;\nin vec3 normals;\n\nin vec4 colors;\nin vec4 elevations;\nin vec3 instancePickingColors;\n\n// Custom uniforms\nuniform vec2 offset;\nuniform bool extruded;\nuniform float cellSize;\nuniform float coverage;\nuniform float opacity;\nuniform float elevationScale;\n\nuniform ivec2 gridSize;\nuniform vec2 gridOrigin;\nuniform vec2 gridOriginLow;\nuniform vec2 gridOffset;\nuniform vec2 gridOffsetLow;\nuniform vec4 colorRange[RANGE_COUNT];\nuniform vec2 elevationRange;\n\n// Domain uniforms\nuniform vec2 colorDomain;\nuniform bool colorDomainValid;\nuniform vec2 elevationDomain;\nuniform bool elevationDomainValid;\n\nlayout(std140) uniform;\nuniform ColorData\n{\n  vec4 maxMinCount;\n} colorData;\nuniform ElevationData\n{\n  vec4 maxMinCount;\n} elevationData;\n\n#define EPSILON 0.00001\n\n// Result\nout vec4 vColor;\n\nvec4 quantizeScale(vec2 domain, vec4 range[RANGE_COUNT], float value) {\n  vec4 outColor = vec4(0., 0., 0., 0.);\n  if (value >= (domain.x - EPSILON) && value <= (domain.y + EPSILON)) {\n    float domainRange = domain.y - domain.x;\n    if (domainRange <= 0.) {\n      outColor = colorRange[0];\n    } else {\n      float rangeCount = float(RANGE_COUNT);\n      float rangeStep = domainRange / rangeCount;\n      float idx = floor((value - domain.x) / rangeStep);\n      idx = clamp(idx, 0., rangeCount - 1.);\n      int intIdx = int(idx);\n      outColor = colorRange[intIdx];\n    }\n  }\n  return outColor;\n}\n\nfloat linearScale(vec2 domain, vec2 range, float value) {\n  if (value >= (domain.x - EPSILON) && value <= (domain.y + EPSILON)) {\n    return ((value - domain.x) / (domain.y - domain.x)) * (range.y - range.x) + range.x;\n  }\n  return -1.;\n}\n\nvoid main(void) {\n\n  vec2 clrDomain = colorDomainValid ? colorDomain : vec2(colorData.maxMinCount.a, colorData.maxMinCount.r);\n  vec4 color = quantizeScale(clrDomain, colorRange, colors.r);\n\n  float elevation = 0.0;\n\n  if (extruded) {\n    vec2 elvDomain = elevationDomainValid ? elevationDomain : vec2(elevationData.maxMinCount.a, elevationData.maxMinCount.r);\n    elevation = linearScale(elvDomain, elevationRange, elevations.r);\n    elevation = elevation  * (positions.z + 1.0) / 2.0 * elevationScale;\n  }\n\n  // if aggregated color or elevation is 0 do not render\n  float shouldRender = float(color.r > 0.0 && elevations.r >= 0.0);\n  float dotRadius = cellSize / 2. * coverage * shouldRender;\n\n  int yIndex = (gl_InstanceID / gridSize[0]);\n  int xIndex = gl_InstanceID - (yIndex * gridSize[0]);\n\n  vec2 instancePositionXFP64 = mul_fp64(vec2(gridOffset[0], gridOffsetLow[0]), vec2(float(xIndex), 0.));\n  instancePositionXFP64 = sum_fp64(instancePositionXFP64, vec2(gridOrigin[0], gridOriginLow[0]));\n  vec2 instancePositionYFP64 = mul_fp64(vec2(gridOffset[1], gridOffsetLow[1]), vec2(float(yIndex), 0.));\n  instancePositionYFP64 = sum_fp64(instancePositionYFP64, vec2(gridOrigin[1], gridOriginLow[1]));\n\n  vec3 centroidPosition = vec3(instancePositionXFP64[0], instancePositionYFP64[0], elevation);\n  vec2 centroidPosition64xyLow = vec2(instancePositionXFP64[1], instancePositionYFP64[1]);\n  vec3 pos = vec3(project_size(positions.xy + offset) * dotRadius, 0.);\n\n  // Set color to be rendered to picking fbo (also used to check for selection highlight).\n  picking_setPickingColor(instancePickingColors);\n\n  vec4 position_commonspace;\n  gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64xyLow, pos, position_commonspace);\n\n  // Light calculations\n  // Worldspace is the linear space after Mercator projection\n\n  vec3 normals_commonspace = project_normal(normals);\n\n   if (extruded) {\n    vec3 lightColor = lighting_getLightColor(color.rgb, project_uCameraPosition, position_commonspace.xyz, normals_commonspace);\n    vColor = vec4(lightColor, color.a * opacity) / 255.;\n  } else {\n    vColor = vec4(color.rgb, color.a * opacity) / 255.;\n  }\n}\n";
	export default _default;

}
declare module '@deck.gl/aggregation-layers/gpu-grid-layer/gpu-grid-cell-layer-fragment.glsl' {
	 const _default: "#version 300 es\n#define SHADER_NAME gpu-grid-cell-layer-fragment-shader\n\nprecision highp float;\n\nin vec4 vColor;\n\nout vec4 fragColor;\n\nvoid main(void) {\n  fragColor = vColor;\n  fragColor = picking_filterColor(fragColor);\n}\n";
	export default _default;

}
declare module '@deck.gl/aggregation-layers/gpu-grid-layer/gpu-grid-cell-layer' {
	import { Layer } from '@deck.gl/core';
	export default class GPUGridCellLayer extends Layer {
	    getShaders(): any;
	    initializeState(): void;
	    _getModel(gl: any): any;
	    draw({ uniforms }: {
	        uniforms: any;
	    }): void;
	    bindUniformBuffers({ colorMaxMinBuffer, elevationMaxMinBuffer }: {
	        colorMaxMinBuffer: any;
	        elevationMaxMinBuffer: any;
	    }): void;
	    unbindUniformBuffers({ colorMaxMinBuffer, elevationMaxMinBuffer }: {
	        colorMaxMinBuffer: any;
	        elevationMaxMinBuffer: any;
	    }): void;
	    calculateColors(attribute: any): void;
	    calculateElevations(attribute: any): void;
	    getDomainUniforms(): {};
	    _setupUniformBuffer(model: any): void;
	}

}
declare module '@deck.gl/aggregation-layers/gpu-grid-layer/gpu-grid-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	export default class GPUGridLayer extends CompositeLayer {
	    initializeState(): void;
	    updateState(opts: any): void;
	    finalizeState(): void;
	    getAggregationFlags({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): any;
	    isDataChanged({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): boolean;
	    getHashKeyForIndex(index: any): string;
	    getPositionForIndex(index: any): any[];
	    getPickingInfo({ info, mode }: {
	        info: any;
	        mode: any;
	    }): any;
	    getLayerData(aggregationFlags: any): void;
	    renderLayers(): any;
	}

}
declare module '@deck.gl/aggregation-layers/grid-layer/grid-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	export default class GridLayer extends CompositeLayer {
	    initializeState(): void;
	    updateState({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): void;
	    renderLayers(): any;
	    canUseGPUAggregation(props: any): boolean;
	}

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/heatmap-layer-utils' {
	export function getBounds(points: any): any[];
	export function boundsContain(currentBounds: any, targetBounds: any): boolean;
	export function packVertices(points: any, dimensions?: number): Float32Array;
	export function scaleToAspectRatio(boundingBox: any, width: any, height: any): number[];
	export function getTextureCoordinates(point: any, bounds: any): number[];
	export function getTextureParams({ gl, floatTargetSupport }: {
	    gl: any;
	    floatTargetSupport: any;
	}): {
	    format: any;
	    type: any;
	};

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/triangle-layer-vertex.glsl' {
	 const _default: "#define SHADER_NAME heatp-map-layer-vertex-shader\n\nuniform sampler2D maxTexture;\nuniform float intensity;\nuniform vec2 colorDomain;\nuniform float threshold;\n\nattribute vec3 positions;\nattribute vec2 texCoords;\n\nvarying vec2 vTexCoords;\nvarying float vIntensityMin;\nvarying float vIntensityMax;\n\nvoid main(void) {\n  gl_Position = project_position_to_clipspace(positions, vec2(0.0), vec3(0.0));\n  vTexCoords = texCoords;\n  float maxValue = texture2D(maxTexture, vec2(0.5)).r;\n  float minValue = maxValue * threshold;\n  if (colorDomain[1] > 0.) {\n    // if user specified custom domain use it.\n    maxValue = colorDomain[1];\n    minValue = colorDomain[0];\n  }\n  vIntensityMax = intensity / maxValue;\n  vIntensityMin = intensity / minValue;\n}\n";
	export default _default;

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/triangle-layer-fragment.glsl' {
	 const _default: "#define SHADER_NAME triangle-layer-fragment-shader\n\nprecision highp float;\n\nuniform float opacity;\nuniform sampler2D texture;\nvarying vec2 vTexCoords;\nuniform sampler2D colorTexture;\n\nvarying float vIntensityMin;\nvarying float vIntensityMax;\n\nvec4 getLinearColor(float value) {\n  float factor = clamp(value * vIntensityMax, 0., 1.);\n  vec4 color = texture2D(colorTexture, vec2(factor, 0.5));\n  color.a *= min(value * vIntensityMin, 1.0);\n  return color;\n}\n\nvoid main(void) {\n  float weight = texture2D(texture, vTexCoords).r;\n  // discard pixels with 0 weight.\n  if (weight <= 0.) {\n     discard;\n  }\n\n  vec4 linearColor = getLinearColor(weight);\n  linearColor.a *= opacity;\n  gl_FragColor =linearColor;\n}\n";
	export default _default;

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/triangle-layer' {
	import { Layer } from '@deck.gl/core';
	export default class TriangleLayer extends Layer {
	    getShaders(): {
	        vs: string;
	        fs: string;
	        modules: string[];
	    };
	    initializeState(): void;
	    _getModel(gl: any): any;
	    draw({ uniforms }: {
	        uniforms: any;
	    }): void;
	}

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/weights-vs.glsl' {
	 const _default: "attribute vec3 positions;\nattribute float weights;\nvarying vec4 weightsTexture;\nuniform float radiusPixels;\nuniform float textureWidth;\nuniform vec4 commonBounds;\nuniform float weightsScale;\nvoid main()\n{\n  weightsTexture = vec4(weights * weightsScale, 0., 0., 1.);\n\n  float radiusTexels  = radiusPixels * textureWidth / (commonBounds.z - commonBounds.x);\n  gl_PointSize = radiusTexels * 2.;\n\n  vec3 commonPosition = project_position(positions, vec2(0));\n\n  // map xy from commonBounds to [-1, 1]\n  gl_Position.xy = (commonPosition.xy - commonBounds.xy) / (commonBounds.zw - commonBounds.xy) ;\n  gl_Position.xy = (gl_Position.xy * 2.) - (1.);\n}\n";
	export default _default;

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/weights-fs.glsl' {
	 const _default: "varying vec4 weightsTexture;\n// Epanechnikov function, keeping for reference\n// float epanechnikovKDE(float u) {\n//   return 0.75 * (1.0 - u * u);\n// }\nfloat gaussianKDE(float u){\n  return pow(2.71828, -u*u/0.05555)/(1.77245385*0.166666);\n}\nvoid main()\n{\n  float dist = length(gl_PointCoord - vec2(0.5, 0.5));\n  if (dist > 0.5) {\n    discard;\n  }\n  gl_FragColor.rgb = weightsTexture.rgb * gaussianKDE(2. * dist);\n  gl_FragColor.a = 1.0;\n}\n";
	export default _default;

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/max-vs.glsl' {
	 const _default: "attribute vec4 inTexture;\nvarying vec4 outTexture;\n\nvoid main()\n{\noutTexture = inTexture;\ngl_Position = vec4(0, 0, 0, 1.);\n// Enforce default value for ANGLE issue (https://bugs.chromium.org/p/angleproject/issues/detail?id=3941)\ngl_PointSize = 1.0;\n}\n";
	export default _default;

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/heatmap-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	export default class HeatmapLayer extends CompositeLayer {
	    initializeState(): void;
	    shouldUpdateState({ changeFlags }: {
	        changeFlags: any;
	    }): any;
	    updateState(opts: any): void;
	    renderLayers(): any;
	    finalizeState(): void;
	    _getAttributeManager(): any;
	    _getChangeFlags(opts: any): {};
	    _getTextures(): {
	        weightsTexture: any;
	        maxWeightsTexture: any;
	    };
	    _isDataChanged({ changeFlags }: {
	        changeFlags: any;
	    }): boolean;
	    _setupAttributes(): void;
	    _setupTextureParams(): void;
	    _setupResources(): void;
	    _updateMaxWeightValue(): void;
	    _updateBounds(forceUpdate?: boolean): boolean;
	    _updateTextureRenderingBounds(): void;
	    _updateColorTexture(opts: any): void;
	    _updateWeightmap(): void;
	    _debouncedUpdateWeightmap(fromTimer?: boolean): void;
	    _worldToCommonBounds(worldBounds: any, opts?: {}): any;
	    _commonToWorldBounds(commonBounds: any): any;
	}

}
declare module '@deck.gl/aggregation-layers' {
	export { default as ScreenGridLayer } from '@deck.gl/aggregation-layers/screen-grid-layer/screen-grid-layer';
	export { default as CPUGridLayer } from '@deck.gl/aggregation-layers/cpu-grid-layer/cpu-grid-layer';
	export { default as HexagonLayer } from '@deck.gl/aggregation-layers/hexagon-layer/hexagon-layer';
	export { default as ContourLayer } from '@deck.gl/aggregation-layers/contour-layer/contour-layer';
	export { default as GridLayer } from '@deck.gl/aggregation-layers/grid-layer/grid-layer';
	export { default as GPUGridLayer } from '@deck.gl/aggregation-layers/gpu-grid-layer/gpu-grid-layer';
	export { AGGREGATION_OPERATION } from '@deck.gl/aggregation-layers/utils/aggregation-operation-utils';
	export { default as HeatmapLayer } from '@deck.gl/aggregation-layers/heatmap-layer/heatmap-layer';
	export { default as _GPUGridAggregator } from '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/gpu-grid-aggregator';
	import { default as BinSorter } from '@deck.gl/aggregation-layers/utils/bin-sorter';
	import { linearScale, getLinearScale, quantizeScale, getQuantizeScale, getQuantileScale, getOrdinalScale } from '@deck.gl/aggregation-layers/utils/scale-utils';
	export const experimental: {
	    BinSorter: typeof BinSorter;
	    linearScale: typeof linearScale;
	    getLinearScale: typeof getLinearScale;
	    quantizeScale: typeof quantizeScale;
	    getQuantizeScale: typeof getQuantizeScale;
	    getQuantileScale: typeof getQuantileScale;
	    getOrdinalScale: typeof getOrdinalScale;
	    defaultColorRange: number[][];
	};

}
