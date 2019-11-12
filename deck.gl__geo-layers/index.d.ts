//typings for @deck.gl/geo-layers v7.3.3
declare module '@deck.gl/geo-layers/great-circle-layer/great-circle-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/geo-layers/great-circle-layer/great-circle-layer' {
	import { ArcLayer } from '@deck.gl/layers';
	export default class GreatCircleLayer<D> extends ArcLayer<D> {
		getShaders(): any;
	}

}
declare module '@deck.gl/geo-layers/s2-layer/s2-utils' {
	export function getS2QuadKey(token: any): any;
	/**
	 * Get a polygon with corner coordinates for an s2 cell
	 * @param {*} cell - This can be an S2 key or token
	 * @return {Array} - a simple polygon in array format: [[lng, lat], ...]
	 *   - each coordinate is an array [lng, lat]
	 *   - the polygon is closed, i.e. last coordinate is a copy of the first coordinate
	 */
	export function getS2Polygon(token: any): any[];

}
declare module '@deck.gl/geo-layers/s2-layer/s2-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	export default class S2Layer<D> extends CompositeLayer<D> {
		renderLayers(): any;
	}

}
declare module '@deck.gl/geo-layers/tile-layer/utils/tile' {
	export function tile2latLng(x: any, y: any, z: any): number[];
	export function tile2boundingBox(x: any, y: any, z: any): {
		west: number;
		north: number;
		east: number;
		south: number;
	};
	export default class Tile {
		constructor({ getTileData, x, y, z, onTileLoad, onTileError }: {
			getTileData: any;
			x: any;
			y: any;
			z: any;
			onTileLoad: any;
			onTileError: any;
		});
		readonly data: any;
		readonly isLoaded: any;
		_loadData(): Promise<any>;
		isOverlapped(tile: any): boolean;
	}

}
declare module '@deck.gl/geo-layers/tile-layer/utils/viewport-util' {
	/**
	 * Returns all tile indices in the current viewport. If the current zoom level is smaller
	 * than minZoom, return an empty array. If the current zoom level is greater than maxZoom,
	 * return tiles that are on maxZoom.
	 */
	export function getTileIndices(viewport: any, maxZoom: any, minZoom: any): any[];

}
declare module '@deck.gl/geo-layers/tile-layer/utils/tile-cache' {
	/**
	 * Manages loading and purging of tiles data. This class caches recently visited tiles
	 * and only create new tiles if they are present.
	 */
	export default class TileCache {
	    /**
	     * Takes in a function that returns tile data, a cache size, and a max and a min zoom level.
	     * Cache size defaults to 5 * number of tiles in the current viewport
	     */
		constructor({ getTileData, maxSize, maxZoom, minZoom, onTileLoad, onTileError }: {
			getTileData: any;
			maxSize: any;
			maxZoom: any;
			minZoom: any;
			onTileLoad: any;
			onTileError: any;
		});
		readonly tiles: any;
	    /**
	     * Clear the current cache
	     */
		finalize(): void;
	    /**
	     * Update the cache with the given viewport and triggers callback onUpdate.
	     * @param {*} viewport
	     * @param {*} onUpdate
	     */
		update(viewport: any): void;
	    /**
	     * Clear tiles that are not visible when the cache is full
	     */
		_resizeCache(maxSize: any): void;
		_markOldTiles(): void;
		_getTile(x: any, y: any, z: any): any;
		_getTileId(x: any, y: any, z: any): string;
	}

}
declare module '@deck.gl/geo-layers/tile-layer/tile-layer' {
	import { CompositeLayer } from '@deck.gl/core';
    import { LayerProps } from "@deck.gl/core/lib/layer";
    export interface TileLayerProps<D> extends LayerProps<D> {
        maxZoom?: number | null;
        minZoom?: number;
        maxCacheSize?: number | null;
        onViewportLoaded?: (data: D[]) => void;
        getTileData?: Function;
        onTileError?: Function;
        renderSubLayers?: Function;
    }
	export default class TileLayer<D> extends CompositeLayer<D> {
    	constructor(props: TileLayerProps<D>);
		initializeState(): void;
		shouldUpdateState({ changeFlags }: {
			changeFlags: any;
		}): any;
		updateState({ props, oldProps, context, changeFlags }: {
			props: any;
			oldProps: any;
			context: any;
			changeFlags: any;
		}): void;
		_onTileLoad(): void;
		_onTileError(error: any): void;
		getPickingInfo({ info, sourceLayer }: {
			info: any;
			sourceLayer: any;
		}): any;
		getLayerZoomLevel(): number;
		renderLayers(): any;
	}

}
declare module '@deck.gl/geo-layers/trips-layer/trips-layer' {
	import { PathLayer } from '@deck.gl/layers';
    import { LayerPath, PathLayerProps } from "@deck.gl/layers/path-layer/path-layer";
    export interface TripsLayerProps<D> extends PathLayerProps<D> {
        currentTime?: number;
        trailLength?: number;
        getPath?: (d: D) => LayerPath;
        getTimestamps?: Function;
    }
	export default class TripsLayer<D> extends PathLayer<D> {
		constructor(props: TripsLayerProps<D>);
		getShaders(): any;
		initializeState(params: any): void;
		draw(params: any): void;
		calculateInstanceTimestamps(attribute: any, { startRow, endRow }: {
			startRow: any;
			endRow: any;
		}): void;
	}

}
declare module '@deck.gl/geo-layers/h3-layers/h3-cluster-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	export default class H3ClusterLayer<D> extends CompositeLayer<D> {
		updateState({ props, oldProps, changeFlags }: {
			props: any;
			oldProps: any;
			changeFlags: any;
		}): void;
		renderLayers(): any;
	}

}
declare module '@deck.gl/geo-layers/h3-layers/h3-hexagon-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	export function normalizeLongitudes(vertices: any, refLng: any): void;
	export function scalePolygon(hexId: any, vertices: any, factor: any): void;
	/**
	 * A subclass of HexagonLayer that uses H3 hexagonIds in data objects
	 * rather than centroid lat/longs. The shape of each hexagon is determined
	 * based on a single "center" hexagon, which can be selected by passing in
	 * a center lat/lon pair. If not provided, the map center will be used.
	 *
	 * Also sets the `hexagonId` field in the onHover/onClick callback's info
	 * objects. Since this is calculated using math, hexagonId will be present
	 * even when no corresponding hexagon is in the data set. You can check
	 * index !== -1 to see if picking matches an actual object.
	 */
	export default class H3HexagonLayer<D> extends CompositeLayer<D> {
		shouldUpdateState({ changeFlags }: {
			changeFlags: any;
		}): any;
		updateState({ props, oldProps, changeFlags }: {
			props: any;
			oldProps: any;
			changeFlags: any;
		}): void;
		_shouldUseHighPrecision(): any;
		_updateVertices(viewport: any): void;
		renderLayers(): any;
		_getForwardProps(): {
			elevationScale: any;
			extruded: any;
			coverage: any;
			wireframe: any;
			stroked: any;
			filled: any;
			lineWidthUnits: any;
			lineWidthScale: any;
			lineWidthMinPixels: any;
			lineWidthMaxPixels: any;
			material: any;
			getElevation: any;
			getFillColor: any;
			getLineColor: any;
			getLineWidth: any;
			updateTriggers: {
				getFillColor: any;
				getElevation: any;
				getLineColor: any;
				getLineWidth: any;
			};
		};
		_renderPolygonLayer(): any;
		_renderColumnLayer(): any;
	}

}
declare module '@deck.gl/geo-layers/tile-3d-layer/get-frame-state' {
	export function getFrameState(viewport: any, frameNumber: any): {
		camera: {
			position: any;
			direction: any;
			up: any;
		};
		height: any;
		cullingVolume: any;
		frameNumber: any;
		sseDenominator: number;
	};

}
declare module '@deck.gl/geo-layers/tile-3d-layer/tile-3d-layer' {
	import { CompositeLayer } from '@deck.gl/core';
    import { CompositeLayerProps } from "@deck.gl/core/lib/composite-layer";
    import { RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";
    export interface Tile3DLayerProps<D> extends CompositeLayerProps<D> {
        opacity?: number;
        pointSize?: number;
        data?: string;
        _ionAssetId?: number | string;
        _ionAccessToken?: string;
        loadOptions?: Object;
        getPointColor?: ((tileData: Object) => RGBAColor) | RGBAColor;
        onTilesetLoad?: (tileData: Object) => void;
        onTileLoad?: (tileHeader: Object) => void;
        onTileUnload?: (tileHeader: Object) => void;
        onTileLoadFail?: (tileHeader: Object, url: string, message: string) => void;
    }
	export default class Tile3DLayer<D> extends CompositeLayer<D> {
    	constructor(props: Tile3DLayerProps<D>);
		initializeState(): void;
		shouldUpdateState({ changeFlags }: {
			changeFlags: any;
		}): any;
		updateState({ props, oldProps }: {
			props: any;
			oldProps: any;
		}): Promise<void>;
		_loadTileset(tilesetUrl: any, fetchOptions: any, ionMetadata: any): Promise<void>;
		_loadTilesetFromIon(ionAccessToken: any, ionAssetId: any): Promise<void>;
		_updateTileset(tileset3d: any): void;
		_updateLayerMap(frameNumber: any): void;
		_selectLayers(frameNumber: any): void;
		_create3DTileLayer(tileHeader: any): any;
		_create3DModelTileLayer(tileHeader: any): any;
		_createPointCloudTileLayer(tileHeader: any): any;
		renderLayers(): any;
	}

}
declare module '@deck.gl/geo-layers' {
	export { default as GreatCircleLayer } from '@deck.gl/geo-layers/great-circle-layer/great-circle-layer';
	export { default as S2Layer } from '@deck.gl/geo-layers/s2-layer/s2-layer';
	export { default as TileLayer } from '@deck.gl/geo-layers/tile-layer/tile-layer';
	export { default as TripsLayer } from '@deck.gl/geo-layers/trips-layer/trips-layer';
	export { default as H3ClusterLayer } from '@deck.gl/geo-layers/h3-layers/h3-cluster-layer';
	export { default as H3HexagonLayer } from '@deck.gl/geo-layers/h3-layers/h3-hexagon-layer';
	export { default as Tile3DLayer } from '@deck.gl/geo-layers/tile-3d-layer/tile-3d-layer';

}
