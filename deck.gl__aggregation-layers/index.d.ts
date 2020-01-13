//typings for @deck.gl/aggregation-layers v7.3.3
declare module '@deck.gl/aggregation-layers/utils/color-utils' {
	export const defaultColorRange: number[][];
	export function colorRangeToFlatArray(colorRange: any, normalize?: boolean, ArrayType?: Float32ArrayConstructor): any;
    export type RGBAColor = [number, number, number, number?];
    export type ColorDomain = [number, number];
    export type ColorRange = [RGBAColor, RGBAColor, RGBAColor, RGBAColor, RGBAColor, RGBAColor]
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
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/aggregate-to-grid-vs-64.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/aggregate-to-grid-fs.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/aggregate-all-vs-64.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/aggregate-all-fs.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/utils/gpu-grid-aggregation/transform-mean-vs.glsl' {
	const _default: string;
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
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/screen-grid-layer/screen-grid-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/screen-grid-layer/screen-grid-layer' {
	import { Layer } from '@deck.gl/core';
    import { LayerProps } from "@deck.gl/core/lib/layer";
    import { ColorDomain, ColorRange, RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";
    export interface ScreenGridLayerProps<D> extends LayerProps<D> {
        cellSizePixels?: number;
        cellMarginPixels?: number;
        minColor?: RGBAColor;
        maxColor?: RGBAColor;
        colorDomain?: ColorDomain;
        colorRange?: ColorRange;
        gpuAggregation?: boolean;
        aggregation?: string;
        getPosition?: (d: D) => [number, number];
        getWeight?: (d: D) => number;
    }
	export default class ScreenGridLayer<D> extends Layer<D> {
        constructor(props: ScreenGridLayerProps<D>);
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
    import { CompositeLayerProps } from "@deck.gl/core/lib/composite-layer";
    import { ColorDomain, ColorRange } from "@deck.gl/aggregation-layers/utils/color-utils";
    import { ElevationDomain, ElevationRange } from "@deck.gl/layers/elevation";
    export interface CPUGridLayerProps<D> extends CompositeLayerProps<D> {
        cellSize?: number;
        colorDomain?: ColorDomain;
        colorRange?: ColorRange;
        coverage?: number;
        elevationDomain?: ElevationDomain;
        elevationRange?: ElevationRange;
        elevationScale?: number;
        extruded?: boolean;
        upperPercentile?: number;
        lowerPercentile?: number;
        elevationUpperPercentile?: number;
        elevationLowerPercentile?: number;
        colorScaleType?: string;
        material?: Object;
        getPosition?: (d: D) => [number, number];
        getColorValue?: (d: D[]) => number;
        getColorWeight?: (d: D) => number;
        colorAggregation?: string;
        getElevationValue?: (points: D[]) => number;
        getElevationWeight?: (d: D) => number;
        elevationAggregation?: string;
        onSetColorDomain?: () => void;
        onSetElevationDomain?: () => void;
    }
	export default class CPUGridLayer<D> extends CompositeLayer<D> {
    	constructor(props: CPUGridLayerProps<D>);
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
    import { CompositeLayerProps } from "@deck.gl/core/lib/composite-layer";
    export interface HexagonLayerProps<D> extends CompositeLayerProps<D> {
        radius?: number;
        hexagonAggregator?: Function;
        colorDomain?: Array<any>;
        colorRange?: Array<any>;
        coverage?: number;
        elevationDomain?: Array<any>;
        elevationRange?: Array<any>;
        elevationScale?: number;
        extruded?: boolean;
        upperPercentile?: number;
        lowerPercentile?: number;
        elevationUpperPercentile?: number;
        elevationLowerPercentile?: number;
        material?: Object;
        getPosition?: (d: D) => [number, number];
        getColorValue?: (d: D[]) => any;
        getColorWeight?: (d: D) => any;
        colorAggregation?: string;
        getElevationValue?: (d: D) => any;
        getElevationWeight?: (d: D) => any;
        elevationAggregation?: string;
        onSetColorDomain?: Function;
        onSetElevationDomain?: Function;
    }
	export default class HexagonLayer<D> extends CompositeLayer<D> {
		constructor(props: HexagonLayerProps<D>);
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
    import { LayerProps } from "@deck.gl/core/lib/layer";
    export interface ContourLayerProps<D> extends LayerProps<D> {
        cellSize?: number;
        gpuAggregation?: boolean;
        contours?: Array<any>;
        zOffset?: number;
        fp64?: boolean;
        getPosition?: (d: D) => [number, number];
        getWeight?: (d: D) => number;
    }
	export default class ContourLayer<D> extends CompositeLayer<D> {
    	constructor(props: ContourLayerProps<D>);
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
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/gpu-grid-layer/gpu-grid-cell-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/gpu-grid-layer/gpu-grid-cell-layer' {
	import { Layer } from '@deck.gl/core';
    import { CompositeLayerProps } from "@deck.gl/core/lib/composite-layer";
    import { ColorRange } from "@deck.gl/aggregation-layers/utils/color-utils";
    import { ElevationDomain, ElevationRange } from "@deck.gl/layers/elevation";
    import PhongMaterial from "@luma.gl/core/materials/phong-material";
    export interface GPUGridLayerProps<D> extends CompositeLayerProps<D> {
        cellSize?: number;
        colorRange?: ColorRange;
        coverage?: number;
        elevationDomain?: ElevationDomain;
        elevationRange?: ElevationRange;
        elevationScale?: number;
        extruded?: boolean;
        fp64?: boolean;
        gpuAggregation?: boolean;
        material?: PhongMaterial;
        getPosition?: (d: D) => [number, number];
        getColorWeight?: (d: D) => number;
        colorAggregation?: string;
        getElevationWeight?: (d: D) => number;
        elevationAggregation?: string;
    }
    export default class GPUGridCellLayer<D> extends Layer<D> {
    	constructor(props: GPUGridLayerProps<D>);
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
    import { GPUGridLayerProps } from "@deck.gl/aggregation-layers/gpu-grid-layer/gpu-grid-cell-layer";
	export default class GPUGridLayer<D> extends CompositeLayer<D> {
		constructor(props: GPUGridLayerProps<D>)
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
    import { CompositeLayerProps } from "@deck.gl/core/lib/composite-layer";
    import { ColorDomain, ColorRange } from "@deck.gl/aggregation-layers/utils/color-utils";
    import { ElevationDomain, ElevationRange } from "@deck.gl/layers/elevation";
    import PhongMaterial from "@luma.gl/core/materials/phong-material";
    export interface GridLayerProps<D> extends CompositeLayerProps<D> {
        cellSize?: number;
        colorDomain?: ColorDomain;
        colorRange?: ColorRange;
        coverage?: number;
        elevationDomain?: ElevationDomain;
        elevationRange?: ElevationRange;
        elevationScale?: number;
        extruded?: boolean;
        upperPercentile?: number;
        lowerPercentile?: number;
        elevationUpperPercentile?: number;
        elevationLowerPercentile?: number;
        colorScaleType?: string;
        fp64?: boolean;
        gpuAggregation?: boolean;
        material?: PhongMaterial;
        getPosition?: (d: D) => [number, number];
        getColorValue?: (points: D[]) => number;
        getColorWeight?: (d: D) => number;
        colorAggregation?: string;
        getElevationValue?: (points: D[]) => number;
        getElevationWeight?: (d: D) => number;
        elevationAggregation?: string;
        onSetColorDomain?: () => void;
        onSetElevationDomain?: () => void;
    }
	export default class GridLayer<D> extends CompositeLayer<D> {
    	constructor(props: GridLayerProps<D>);
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
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/triangle-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/aggregation-layers/heatmap-layer/triangle-layer' {
	import { Layer } from '@deck.gl/core';
    import { LayerProps } from "@deck.gl/core/lib/layer";
	export default class TriangleLayer<D> extends Layer<D> {
		constructor(props: LayerProps<D>)
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
    import { CompositeLayerProps } from "@deck.gl/core/lib/composite-layer";
    export interface HeatmapLayerProps<D> extends CompositeLayerProps<D> {
        radiusPixels?: number;
        colorRange?: ColorRange;
        intensity?: number;
        threshold?: number;
        colorDomain?: ColorDomain;
        getPosition?: (d: D) => [number, number];
        getWeight?: (d: D) => number;
    }
	import { CompositeLayer } from '@deck.gl/core';
    import { ColorDomain, ColorRange } from "@deck.gl/aggregation-layers/utils/color-utils";
	export default class HeatmapLayer<D> extends CompositeLayer<D> {
		constructor(props: HeatmapLayerProps<D>);
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
	export { RGBAColor, ColorDomain, ColorRange } from '@deck.gl/aggregation-layers/utils/color-utils';
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
