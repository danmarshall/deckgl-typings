declare module '@deck.gl/layers/arc-layer/arc-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/arc-layer/arc-layer-vertex-64.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/arc-layer/arc-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/arc-layer/arc-layer' {
	import { Layer } from '@deck.gl/core';
	export default class ArcLayer extends Layer {
		constructor(props: any);
		getShaders(): {
			vs: string;
			fs: string;
			modules: string[];
		};
		initializeState(): void;
		updateState({ props, oldProps, changeFlags }: {
			props: any;
			oldProps: any;
			changeFlags: any;
		}): void;
		_getModel(gl: any): any;
		calculateInstancePositions(attribute: any): void;
		calculateInstancePositions64Low(attribute: any): void;
	}

}
declare module '@deck.gl/layers/icon-layer/icon-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/icon-layer/icon-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/icon-layer/icon-layer' {
	import { Layer } from '@deck.gl/core';
	import { LayerProps } from '@deck.gl/core/lib/layer';
	import { Color } from '@deck.gl/core/utils/color';
	import { Position } from '@deck.gl/core/utils/positions';
	import Texture2D from 'luma.gl/webgl/texture-2d';

	export interface IconDefinition {
		x: number;
		y: number;
		width: number;
		height: number;
		/*
		* x anchor of icon on the atlas image,
		* default to width / 2
		*/
		anchorX?: number;
		/*
		* y anchor of icon on the atlas image,
		* default to height / 2
		*/
		anchorY?: number;
		/*
		* whether icon is treated as a transparency
		* mask. If true, user defined color is applied. If false, original color from the image is
		* applied. Default to false.
		*/
		mask?: boolean;
	}

	/*
	 * icon names mapped to icon definitions
	*/
	export interface IconMapping {
		[key: string]: IconDefinition;
	}

	export interface IconLayerDatum {
		/*
		*  icon name
		*/
		icon?: string;
		/*
		*  color of the icon in [r, g, b, a].
		*/
		color?: Color;
		/*
		*  anchor position of the icon, in [lng, lat, z]
		*/
		position?: Position;
	}

	export interface IconLayerProps {
		data: IconLayerDatum[];
		/*
		*  atlas image url or texture
		*/
		iconAtlas?: Texture2D | string,
		iconMapping?: IconMapping,
		sizeScale?: number,
		fp64?: number,

		/*
		*  returns anchor position of the icon, in [lng, lat, z]
		*/
		getPosition?: ((x: IconLayerDatum) => Position),

		/*
		*  returns icon name as a string
		*/
		getIcon?: ((x: IconLayerDatum) => string) | string,

		/*
		*  returns color of the icon in [r, g, b, a].
		*  Only works on icons with mask: true.
		*/
		getColor?: ((x: IconLayerDatum) => Color) | Color,

		/*
		*  returns icon size multiplier as a number
		*/
		getSize?: ((x: IconLayerDatum) => number) | number,

		/*
		*  returns rotating angle (in degree) of the icon.
		*/
		getAngle?: ((x: IconLayerDatum) => number) | number,
	}

	export default class IconLayer extends Layer {
		constructor(props: LayerProps & IconLayerProps);

		getShaders(): {
			vs: string;
			fs: string;
			modules: string[];
		};
		initializeState(): void;
		updateState({ oldProps, props, changeFlags }: {
			oldProps: any;
			props: any;
			changeFlags: any;
		}): void;
		draw({ uniforms }: {
			uniforms: any;
		}): void;
		_getModel(gl: any): any;
		calculateInstancePositions64xyLow(attribute: any): void;
		calculateInstanceOffsets(attribute: any): void;
		calculateInstanceColorMode(attribute: any): void;
		calculateInstanceIconFrames(attribute: any): void;
	}

}
declare module '@deck.gl/layers/line-layer/line-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/line-layer/line-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/line-layer/line-layer' {
	import { Layer } from '@deck.gl/core';
	import { LayerProps } from '@deck.gl/core/lib/layer';
	import { Color } from '@deck.gl/core/utils/color';
	export interface LineLayerDatum {
		color?: Color
		sourcePosition: number[];
		targetPosition: number[];
	}
	export interface LineLayerProps {
		data: LineLayerDatum[];
		strokeWidth?: number;
		getColor?: ((x: LineLayerDatum) => Color) | Color;
		getStrokeWidth?: ((x: LineLayerDatum) => number) | number;
	}
	export default class LineLayer extends Layer {
		constructor(props: LayerProps & LineLayerProps);
		getShaders(): {
			vs: string;
			fs: string;
			modules: string[];
		};
		initializeState(): void;
		updateState({ props, oldProps, changeFlags }: {
			props: any;
			oldProps: any;
			changeFlags: any;
		}): void;
		_getModel(gl: any): any;
		calculateInstanceSourceTargetPositions64xyLow(attribute: any): void;
	}

}
declare module '@deck.gl/layers/point-cloud-layer/point-cloud-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/point-cloud-layer/point-cloud-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/point-cloud-layer/point-cloud-layer' {
	import { Layer } from '@deck.gl/core';
	export default class PointCloudLayer extends Layer {
		getShaders(id: any): {
			vs: string;
			fs: string;
			modules: string[];
		};
		initializeState(): void;
		updateState({ props, oldProps, changeFlags }: {
			props: any;
			oldProps: any;
			changeFlags: any;
		}): void;
		draw({ uniforms }: {
			uniforms: any;
		}): void;
		_getModel(gl: any): any;
		calculateInstancePositions64xyLow(attribute: any): void;
	}

}
declare module '@deck.gl/layers/scatterplot-layer/scatterplot-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/scatterplot-layer/scatterplot-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/scatterplot-layer/scatterplot-layer' {
	import { Layer } from '@deck.gl/core';
	export default class ScatterplotLayer extends Layer {
		getShaders(id: any): {
			vs: string;
			fs: string;
			modules: string[];
		};
		initializeState(): void;
		updateState({ props, oldProps, changeFlags }: {
			props: any;
			oldProps: any;
			changeFlags: any;
		}): void;
		draw({ uniforms }: {
			uniforms: any;
		}): void;
		_getModel(gl: any): any;
		calculateInstancePositions64xyLow(attribute: any): void;
	}

}
declare module '@deck.gl/layers/screen-grid-layer/screen-grid-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/screen-grid-layer/screen-grid-layer-vertex-webgl1.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/screen-grid-layer/screen-grid-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/screen-grid-layer/screen-grid-layer-fragment-webgl1.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/screen-grid-layer/screen-grid-layer' {
	import { Layer } from '@deck.gl/core';
	export default class ScreenGridLayer extends Layer {
		getShaders(): {
			vs: string;
			fs: string;
		};
		initializeState(): void;
		shouldUpdateState({ changeFlags }: {
			changeFlags: any;
		}): any;
		updateState(opts: any): void;
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
		_getMaxCountBuffer(gl: any): any;
		_getWeight(point: any): any[];
		_processData(): void;
		_setupUniformBuffer(): void;
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
declare module '@deck.gl/layers/grid-cell-layer/grid-cell-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/grid-cell-layer/grid-cell-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/grid-cell-layer/grid-cell-layer' {
	import { Layer } from '@deck.gl/core';
	export default class GridCellLayer extends Layer {
	    /**
	     * A generic GridLayer that takes latitude longitude delta of cells as a uniform
	     * and the min lat lng of cells. grid can be 3d when pass in a height
	     * and set enable3d to true
	     *
	     * @param {array} props.data -
	     * @param {boolean} props.extruded - enable grid elevation
	     * @param {number} props.cellSize - grid cell size in meters
	     * @param {function} props.getPosition - position accessor, returned as [minLng, minLat]
	     * @param {function} props.getElevation - elevation accessor
	     * @param {function} props.getColor - color accessor, returned as [r, g, b, a]
	     */
		getShaders(): {
			vs: string;
			fs: string;
			modules: string[];
		};
		initializeState(): void;
		updateState({ props, oldProps, changeFlags }: {
			props: any;
			oldProps: any;
			changeFlags: any;
		}): void;
		_getModel(gl: any): any;
		draw({ uniforms }: {
			uniforms: any;
		}): void;
		calculateInstancePositions64xyLow(attribute: any): void;
	}

}
declare module '@deck.gl/layers/grid-layer/grid-aggregator' {
	/**
	 * Calculate density grid from an array of points
	 * @param {Iterable} points
	 * @param {number} cellSize - cell size in meters
	 * @param {function} getPosition - position accessor
	 * @returns {object} - grid data, cell dimension
	 */
	export function pointToDensityGridData(points: any, cellSize: any, getPosition: any): {
		gridOffset: {
			yOffset: number;
			xOffset: number;
		};
		layerData: any[];
	};

}
declare module '@deck.gl/layers/grid-layer/grid-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	import GridCellLayer from '@deck.gl/layers/grid-cell-layer/grid-cell-layer';
	export default class GridLayer extends CompositeLayer {
		initializeState(): void;
		updateState({ oldProps, props, changeFlags }: {
			oldProps: any;
			props: any;
			changeFlags: any;
		}): void;
		needsReProjectPoints(oldProps: any, props: any, changeFlags: any): any;
		getDimensionUpdaters(): {
			getColor: {
				id: string;
				triggers: string[];
				updater: () => void;
			}[];
			getElevation: {
				id: string;
				triggers: string[];
				updater: () => void;
			}[];
		};
		getDimensionChanges(oldProps: any, props: any): any[];
		getPickingInfo({ info }: {
			info: any;
		}): any;
		getUpdateTriggers(): {};
		getLayerData(): void;
		getValueDomain(): void;
		getSortedBins(): void;
		getSortedColorBins(): void;
		getSortedElevationBins(): void;
		getColorValueDomain(): void;
		getElevationValueDomain(): void;
		getColorScale(): void;
		getElevationScale(): void;
		_onGetSublayerColor(cell: any): any;
		_onGetSublayerElevation(cell: any): any;
		getSubLayerProps(): any;
		getSubLayerClass(): typeof GridCellLayer;
		renderLayers(): any;
	}

}
declare module '@deck.gl/layers/hexagon-cell-layer/hexagon-cell-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/hexagon-cell-layer/hexagon-cell-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/hexagon-cell-layer/hexagon-cell-layer' {
	import { Layer } from '@deck.gl/core';
	export default class HexagonCellLayer extends Layer {
		constructor(props: any);
		getShaders(): {
			vs: string;
			fs: string;
			modules: string[];
		};
	    /**
	     * DeckGL calls initializeState when GL context is available
	     * Essentially a deferred constructor
	     */
		initializeState(): void;
		updateState({ props, oldProps, changeFlags }: {
			props: any;
			oldProps: any;
			changeFlags: any;
		}): void;
		updateRadiusAngle(): void;
		getCylinderGeometry(radius: any): any;
		_getModel(gl: any): any;
		draw({ uniforms }: {
			uniforms: any;
		}): void;
		calculateInstancePositions64xyLow(attribute: any): void;
	}

}
declare module '@deck.gl/layers/hexagon-layer/hexagon-aggregator' {
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
declare module '@deck.gl/layers/hexagon-layer/hexagon-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	import HexagonCellLayer from '@deck.gl/layers/hexagon-cell-layer/hexagon-cell-layer';
	export default class HexagonLayer extends CompositeLayer {
		constructor(props: any);
		initializeState(): void;
		updateState({ oldProps, props, changeFlags }: {
			oldProps: any;
			props: any;
			changeFlags: any;
		}): void;
		needsReProjectPoints(oldProps: any, props: any): boolean;
		getDimensionUpdaters(): {
			getColor: {
				id: string;
				triggers: string[];
				updater: () => void;
			}[];
			getElevation: {
				id: string;
				triggers: string[];
				updater: () => void;
			}[];
		};
		getDimensionChanges(oldProps: any, props: any): any[];
		getHexagons(): void;
		getPickingInfo({ info }: {
			info: any;
		}): any;
		getUpdateTriggers(): {};
		getValueDomain(): void;
		getSortedBins(): void;
		getSortedColorBins(): void;
		getSortedElevationBins(): void;
		getColorValueDomain(): void;
		getElevationValueDomain(): void;
		getColorScale(): void;
		getElevationScale(): void;
		_onGetSublayerColor(cell: any): any;
		_onGetSublayerElevation(cell: any): any;
		getSubLayerProps(): any;
		getSubLayerClass(): typeof HexagonCellLayer;
		renderLayers(): HexagonCellLayer;
	}

}
declare module '@deck.gl/layers/path-layer/path-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/path-layer/path-layer-vertex-64.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/path-layer/path-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/path-layer/path-layer' {
	import { Layer } from '@deck.gl/core';
	export default class PathLayer extends Layer {
		getShaders(): {
			vs: string;
			fs: string;
			modules: string[];
		};
		initializeState(): void;
		updateState({ oldProps, props, changeFlags }: {
			oldProps: any;
			props: any;
			changeFlags: any;
		}): void;
		draw({ uniforms }: {
			uniforms: any;
		}): void;
		_getModel(gl: any): any;
		_getPathLength(path: any): any;
		calculateStartPositions(attribute: any): void;
		calculateEndPositions(attribute: any): void;
		calculateInstanceStartEndPositions64xyLow(attribute: any): void;
		calculateLeftDeltas(attribute: any): void;
		calculateRightDeltas(attribute: any): void;
		calculateStrokeWidths(attribute: any): void;
		calculateDashArrays(attribute: any): void;
		calculateColors(attribute: any): void;
		calculatePickingColors(attribute: any): void;
	}

}
declare module '@deck.gl/layers/solid-polygon-layer/polygon' {
	/**
	 * Check if this is a non-nested polygon (i.e. the first element of the first element is a number)
	 * @param {Array} polygon - either a complex or simple polygon
	 * @return {Boolean} - true if the polygon is a simple polygon (i.e. not an array of polygons)
	 */
	export function isSimple(polygon: any): boolean;
	/**
	 * Normalize to ensure that all polygons in a list are complex - simplifies processing
	 * @param {Array} polygon - either a complex or a simple polygon
	 * @param {Object} opts
	 * @param {Object} opts.dimensions - if 3, the coords will be padded with 0's if needed
	 * @return {Array} - returns a complex polygons
	 */
	export function normalize(polygon: any, { dimensions }?: {
		dimensions?: number;
	}): any;
	/**
	 * Check if this is a non-nested polygon (i.e. the first element of the first element is a number)
	 * @param {Array} polygon - either a complex or simple polygon
	 * @return {Boolean} - true if the polygon is a simple polygon (i.e. not an array of polygons)
	 */
	export function getVertexCount(polygon: any): any;
	export function getTriangleCount(polygon: any): number;
	export function getSurfaceIndices(complexPolygon: any): any;

}
declare module '@deck.gl/layers/solid-polygon-layer/polygon-tesselator' {
	export class PolygonTesselator {
		constructor({ polygons, IndexType }: {
			polygons: any;
			IndexType: any;
		});
		updatePositions({ fp64, extruded }: {
			fp64: any;
			extruded: any;
		}): void;
		indices(): Uint32Array;
		positions(): any;
		positions64xyLow(): any;
		vertexValid(): any;
		elevations({ key, getElevation }?: {
			key?: string;
			getElevation?: (x: any) => number;
		}): any;
		colors({ key, getColor }?: {
			key?: string;
			getColor?: (x: any) => number[];
		}): any;
		pickingColors(): any;
	}

}
declare module '@deck.gl/layers/solid-polygon-layer/solid-polygon-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/solid-polygon-layer/solid-polygon-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/solid-polygon-layer/solid-polygon-layer' {
	import { Layer } from '@deck.gl/core';
	import { PolygonTesselator } from '@deck.gl/layers/solid-polygon-layer/polygon-tesselator';
	export default class SolidPolygonLayer extends Layer {
		getShaders(): {
			vs: string;
			fs: string;
			modules: string[];
		};
		initializeState(): void;
		draw({ uniforms }: {
			uniforms: any;
		}): void;
		updateState(updateParams: any): void;
		updateGeometry({ props, oldProps, changeFlags }: {
			props: any;
			oldProps: any;
			changeFlags: any;
		}): void;
		_getPolygonTesselator(polygons: any, IndexType: any): PolygonTesselator;
		updateAttributes(props: any): void;
		_getModels(gl: any): {
			models: any[];
			topModel: any;
			sideModel: any;
		};
		calculateIndices(attribute: any): void;
		calculatePositions(attribute: any): void;
		calculatePositionsLow(attribute: any): void;
		calculateVertexValid(attribute: any): void;
		calculateElevations(attribute: any): void;
		calculateFillColors(attribute: any): void;
		calculateLineColors(attribute: any): void;
		calculatePickingColors(attribute: any): void;
	}

}
declare module '@deck.gl/layers/polygon-layer/polygon-layer' {
	import { Color } from '@deck.gl/core/utils/color';
	export type Polygon = number[][] | number[][][];
	export interface PolygonLayerDatum {
		polygon?: Polygon;
		elevation?: number;
		fillColor?: number[];
		lineColor?: number[];
		lineWidth?: number;
	}
	export interface PolygonLayerProps {
		data: PolygonLayerDatum[];
		extruded: boolean;
		stroked: boolean;
		getElevation?: ((x: PolygonLayerDatum) => number) | number;
		getFillColor?: ((x: PolygonLayerDatum) => Color) | Color;
		getLineColor?: ((x: PolygonLayerDatum) => Color) | Color;
		getLineWidth?: ((x: PolygonLayerDatum) => number) | number;
		getPolygon?: (x: PolygonLayerDatum) => Polygon;
	}
	import { CompositeLayer } from '@deck.gl/core';
	import { LayerProps } from '@deck.gl/core/lib/layer';
	export default class PolygonLayer extends CompositeLayer {
		constructor(props: LayerProps & PolygonLayerProps);
		initializeState(): void;
		updateState({ oldProps, props, changeFlags }: {
			oldProps: any;
			props: any;
			changeFlags: any;
		}): void;
		getPickingInfo({ info }: {
			info: any;
		}): any;
		_getAccessor(accessor: any): any;
		renderLayers(): any[];
	}

}
declare module '@deck.gl/layers/geojson-layer/geojson' {
	export default function assert(condition: any, message: any): void;
	/**
	 * "Normalizes" complete or partial GeoJSON data into iterable list of features
	 * Can accept GeoJSON geometry or "Feature", "FeatureCollection" in addition
	 * to plain arrays and iterables.
	 * Works by extracting the feature array or wrapping single objects in an array,
	 * so that subsequent code can simply iterate over features.
	 *
	 * @param {object} geojson - geojson data
	 * @param {Object|Array} data - geojson object (FeatureCollection, Feature or
	 *  Geometry) or array of features
	 * @return {Array|"iteratable"} - iterable list of features
	 */
	export function getGeojsonFeatures(geojson: any): any;
	export function separateGeojsonFeatures(features: any): {
		pointFeatures: any[];
		lineFeatures: any[];
		polygonFeatures: any[];
		polygonOutlineFeatures: any[];
	};
	/**
	 * Returns the source feature that was passed to `separateGeojsonFeatures`
	 */
	export function unwrapSourceFeature(wrappedFeature: any): any;
	/**
	 * Returns the index of the source feature that was passed to `separateGeojsonFeatures`
	 */
	export function unwrapSourceFeatureIndex(wrappedFeature: any): any;

}
declare module '@deck.gl/layers/geojson-layer/geojson-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	export default class GeoJsonLayer extends CompositeLayer {
		initializeState(): void;
		updateState({ oldProps, props, changeFlags }: {
			oldProps: any;
			props: any;
			changeFlags: any;
		}): void;
		getPickingInfo({ info, sourceLayer }: {
			info: any;
			sourceLayer: any;
		}): any;
		renderLayers(): any[];
	}

}
declare module '@deck.gl/layers/text-layer/multi-icon-layer/multi-icon-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/text-layer/multi-icon-layer/multi-icon-layer' {
	import IconLayer from '@deck.gl/layers/icon-layer/icon-layer';
	export default class MultiIconLayer extends IconLayer {
		getShaders(): {
			vs: string;
			fs: string;
			modules: string[];
		} & {
			vs: string;
		};
		initializeState(): void;
		updateState(updateParams: any): void;
		calculateInstanceOffsets(attribute: any): void;
	}

}
declare module '@deck.gl/layers/text-layer/font-atlas' {
	export const DEFAULT_CHAR_SET: any[];
	export function makeFontAtlas(gl: any, { fontFamily, characterSet, fontSize, padding }: {
		fontFamily: any;
		characterSet?: any[];
		fontSize?: number;
		padding?: number;
	}): {
		scale: number;
		mapping: {};
		texture: any;
	};

}
declare module '@deck.gl/layers/text-layer/text-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	import { LayerProps } from '@deck.gl/core/lib/layer';
	import { Color } from '@deck.gl/core/utils/color';
	export type TextAnchor = 'start' | 'middle' | 'end';
	export type AlignmentBaseline = 'top' | 'center' | 'bottom';
	export interface TextLayerDatum {
		text: string;
		position: number[];
		color?: Color;
		size?: number;
		angle?: number;
		textAnchor?: TextAnchor;
		alignmentBaseline?: AlignmentBaseline;
		offset?: number[];
		pixelOffset?: number[];
	}
	export interface TextLayerProps {
		data: TextLayerDatum[];
		getColor?: ((x: TextLayerDatum) => Color) | Color;
		getText?: (x: TextLayerDatum) => string;
		getPosition?: (x: TextLayerDatum) => number[];
		getSize?: ((x: TextLayerDatum) => number) | number;
		getAngle?: ((x: TextLayerDatum) => number) | number;
		getTextAnchor?: (x: TextLayerDatum) => TextAnchor;
		getAlignmentBaseline?: (x: TextLayerDatum) => AlignmentBaseline;
		getPixelOffset?: (x: TextLayerDatum) => number[];
	}
	export default class TextLayer extends CompositeLayer {
		constructor(props: LayerProps & TextLayerProps);
		updateState({ props, oldProps, changeFlags }: {
			props: any;
			oldProps: any;
			changeFlags: any;
		}): void;
		updateFontAtlas(fontFamily: any, characterSet: any): void;
		getPickingInfo({ info }: {
			info: any;
		}): any;
		transformStringToLetters(): void;
		getLetterOffset(datum: any): any;
		getTextLength(datum: any): any;
		_getAccessor(accessor: any): any;
		getAnchorXFromTextAnchor(getTextAnchor: any): (x: any) => any;
		getAnchorYFromAlignmentBaseline(getAlignmentBaseline: any): (x: any) => any;
		renderLayers(): any[];
	}

}
declare module '@deck.gl/layers/contour-layer/marching-squares' {
	export function getCode({ cellWeights, thresholdValue, x, y, width, height }: {
		cellWeights: any;
		thresholdValue: any;
		x: any;
		y: any;
		width: any;
		height: any;
	}): number;
	export function getVertices({ gridOrigin, cellSize, x, y, code }: {
		gridOrigin: any;
		cellSize: any;
		x: any;
		y: any;
		code: any;
	}): any[];

}
declare module '@deck.gl/layers/contour-layer/contour-utils' {
	export function generateContours({ thresholds, colors, cellWeights, gridSize, gridOrigin, cellSize }: {
		thresholds: any;
		colors: any;
		cellWeights: any;
		gridSize: any;
		gridOrigin: any;
		cellSize: any;
	}): any[];

}
declare module '@deck.gl/layers/contour-layer/contour-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	export default class ContourLayer extends CompositeLayer {
		initializeState(): void;
		updateState({ oldProps, props, changeFlags }: {
			oldProps: any;
			props: any;
			changeFlags: any;
		}): void;
		getSubLayerClass(): any;
		getSubLayerProps(): any;
		renderLayers(): any;
		aggregateData(aggregationFlags: any): void;
		generateContours(): void;
		getAggregationFlags({ oldProps, props, changeFlags }: {
			oldProps: any;
			props: any;
			changeFlags: any;
		}): any;
		onGetSublayerColor(segment: any): number[];
		onGetSublayerStrokeWidth(segment: any): number;
		rebuildContours({ oldProps, props }: {
			oldProps: any;
			props: any;
		}): any;
	}

}
declare module '@deck.gl/layers' {
	export { default as ArcLayer } from '@deck.gl/layers/arc-layer/arc-layer';
	export { default as IconLayer } from '@deck.gl/layers/icon-layer/icon-layer';
	export { default as LineLayer } from '@deck.gl/layers/line-layer/line-layer';
	export { default as PointCloudLayer } from '@deck.gl/layers/point-cloud-layer/point-cloud-layer';
	export { default as ScatterplotLayer } from '@deck.gl/layers/scatterplot-layer/scatterplot-layer';
	export { default as ScreenGridLayer } from '@deck.gl/layers/screen-grid-layer/screen-grid-layer';
	export { default as GridLayer } from '@deck.gl/layers/grid-layer/grid-layer';
	export { default as GridCellLayer } from '@deck.gl/layers/grid-cell-layer/grid-cell-layer';
	export { default as HexagonLayer } from '@deck.gl/layers/hexagon-layer/hexagon-layer';
	export { default as HexagonCellLayer } from '@deck.gl/layers/hexagon-cell-layer/hexagon-cell-layer';
	export { default as PathLayer } from '@deck.gl/layers/path-layer/path-layer';
	export { default as PolygonLayer } from '@deck.gl/layers/polygon-layer/polygon-layer';
	export { default as GeoJsonLayer } from '@deck.gl/layers/geojson-layer/geojson-layer';
	export { default as TextLayer } from '@deck.gl/layers/text-layer/text-layer';
	export { default as ContourLayer } from '@deck.gl/layers/contour-layer/contour-layer';
	export { default as _SolidPolygonLayer } from '@deck.gl/layers/solid-polygon-layer/solid-polygon-layer';
	export { default as _MultiIconLayer } from '@deck.gl/layers/text-layer/multi-icon-layer/multi-icon-layer';

}
