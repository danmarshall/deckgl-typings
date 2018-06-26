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
	    updateAttribute({ props, oldProps, changeFlags }: {
	        props: any;
	        oldProps: any;
	        changeFlags: any;
	    }): void;
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
	export default class IconLayer extends Layer {
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
	export default class LineLayer extends Layer {
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
declare module '@deck.gl/layers/screen-grid-layer/screen-grid-layer-fragment.glsl' {
	 const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/screen-grid-layer/screen-grid-layer' {
	import { Layer } from '@deck.gl/core';
	export default class ScreenGridLayer extends Layer {
	    getShaders(): {
	        vs: string;
	        fs: string;
	        modules: string[];
	    };
	    initializeState(): void;
	    shouldUpdateState({ changeFlags }: {
	        changeFlags: any;
	    }): any;
	    updateState({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): void;
	    draw({ uniforms }: {
	        uniforms: any;
	    }): void;
	    _getModel(gl: any): any;
	    updateCell(): void;
	    calculateInstancePositions(attribute: any, { numInstances }: {
	        numInstances: any;
	    }): void;
	    calculateInstanceColors(attribute: any): void;
	    _getColor(weight: any, maxCount: any): any;
	    _shouldUseMinMax(): boolean;
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
	 * @param {array} points
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
	 * @param {Array} data - array of points
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
	    updateAttribute({ props, oldProps, changeFlags }: {
	        props: any;
	        oldProps: any;
	        changeFlags: any;
	    }): void;
	    updateState({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): void;
	    draw({ uniforms }: {
	        uniforms: any;
	    }): void;
	    _getModel(gl: any): any;
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
	export function forEachVertex(polygon: any, visitor: any): void;
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
	    nextPositions(): any;
	    nextPositions64xyLow(): any;
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
	    updateAttributes(props: any): void;
	    _updateAttributes(attributes: any): void;
	    _getModels(gl: any): {
	        models: any[];
	        modelsByName: {};
	    };
	    calculateIndices(attribute: any): void;
	    calculatePositions(attribute: any): void;
	    calculatePositionsLow(attribute: any): void;
	    calculateNextPositions(attribute: any): void;
	    calculateNextPositionsLow(attribute: any): void;
	    calculateElevations(attribute: any): void;
	    calculateFillColors(attribute: any): void;
	    calculateLineColors(attribute: any): void;
	    calculatePickingColors(attribute: any): void;
	}

}
declare module '@deck.gl/layers/polygon-layer/polygon-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	export default class PolygonLayer extends CompositeLayer {
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
	    getPickingInfo({ info }: {
	        info: any;
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
	export default class TextLayer extends CompositeLayer {
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

}
