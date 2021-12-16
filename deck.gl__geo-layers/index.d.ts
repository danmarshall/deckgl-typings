//typings for @deck.gl/geo-layers v8.1.3
declare module '@deck.gl/geo-layers/great-circle-layer/great-circle-vertex.glsl' {
  const _default: string;
  export default _default;
}
declare module '@deck.gl/geo-layers/great-circle-layer/great-circle-layer' {
  import { ArcLayerProps } from '@deck.gl/layers/arc-layer/arc-layer';
  export interface GreatCircleLayerProps<D> extends ArcLayerProps<D> {}
  import { ArcLayer } from '@deck.gl/layers';
  export default class GreatCircleLayer<
    D,
    P extends GreatCircleLayerProps<D> = GreatCircleLayerProps<D>
  > extends ArcLayer<D, P> {
    getShaders(): any;
  }
}
declare module '@deck.gl/geo-layers/s2-layer/s2-geometry' {
  export function IJToST(ij: any, order: any, offsets: any): number[];
  export function STToUV(st: any): number[];
  export function FaceUVToXYZ(face: any, [u, v]: [any, any]): any[];
  export function XYZToLngLat([x, y, z]: [any, any, any]): number[];
  export function toHilbertQuadkey(idS: any): string;
  export function FromHilbertQuadKey(hilbertQuadkey: any): {
    face: number;
    ij: number[];
    level: any;
  };
}
declare module '@deck.gl/geo-layers/s2-layer/s2-utils' {
  export function getS2QuadKey(token: any): string;
  /**
   * Get a polygon with corner coordinates for an s2 cell
   * @param {*} cell - This can be an S2 key or token
   * @return {Array} - a simple polygon in array format: [[lng, lat], ...]
   *   - each coordinate is an array [lng, lat]
   *   - the polygon is closed, i.e. last coordinate is a copy of the first coordinate
   */
  export function getS2Polygon(token: any): Float64Array;
}
declare module '@deck.gl/geo-layers/s2-layer/s2-layer' {
  import { CompositeLayer } from '@deck.gl/core';
  import { CompositeLayerProps } from '@deck.gl/core/lib/composite-layer';
  export interface S2LayerProps<D> extends CompositeLayerProps<D> {
    getS2Token: (d: D) => any;
  }
  export default class S2Layer<D, P extends S2LayerProps<D> = S2LayerProps<D>> extends CompositeLayer<D, P> {
    constructor(...props: S2LayerProps<D>[]);
    renderLayers(): any;
  }
}
declare module '@deck.gl/geo-layers/tile-layer/tile-2d-header' {
  export default class Tile2DHeader {
    constructor({ x, y, z, onTileLoad, onTileError }: { x: any; y: any; z: any; onTileLoad: any; onTileError: any });
    get data(): any;
    get isLoaded(): any;
    get byteLength(): any;
    loadData(getTileData: any): void;
  }
}
declare module '@deck.gl/geo-layers/tile-layer/utils' {
  export const urlType: {
    type: string;
    value: string;
    validate: (value: any) => boolean;
    equals: (value1: any, value2: any) => boolean;
  };
  export function getURLFromTemplate(template: any, properties: any): any;
  export function tileToBoundingBox(
    viewport: any,
    x: any,
    y: any,
    z: any,
    tileSize?: number
  ):
    | {
        west: number;
        north: number;
        east: number;
        south: number;
        left?: undefined;
        top?: undefined;
        right?: undefined;
        bottom?: undefined;
      }
    | {
        left: number;
        top: number;
        right: number;
        bottom: number;
        west?: undefined;
        north?: undefined;
        east?: undefined;
        south?: undefined;
      };
  /**
   * Returns all tile indices in the current viewport. If the current zoom level is smaller
   * than minZoom, return an empty array. If the current zoom level is greater than maxZoom,
   * return tiles that are on maxZoom.
   */
  export function getTileIndices(viewport: any, maxZoom: any, minZoom: any, zRange: any, tileSize?: number): any[];
}
declare module '@deck.gl/geo-layers/tile-layer/tileset-2d' {
  export const STRATEGY_NEVER = 'never';
  export const STRATEGY_REPLACE = 'no-overlap';
  export const STRATEGY_DEFAULT = 'best-available';
  /**
   * Manages loading and purging of tiles data. This class caches recently visited tiles
   * and only create new tiles if they are present.
   */
  export default class Tileset2D {
    /**
     * Takes in a function that returns tile data, a cache size, and a max and a min zoom level.
     * Cache size defaults to 5 * number of tiles in the current viewport
     */
    constructor(opts: any);
    get tiles(): any;
    get selectedTiles(): any;
    get isLoaded(): any;
    setOptions(opts: any): void;
    /**
     * Update the cache with the given viewport and triggers callback onUpdate.
     * @param {*} viewport
     * @param {*} onUpdate
     */
    update(
      viewport: any,
      {
        zRange,
      }?: {
        zRange: any;
      }
    ): any;
    getTileIndices({
      viewport,
      maxZoom,
      minZoom,
      zRange,
    }: {
      viewport: any;
      maxZoom: any;
      minZoom: any;
      zRange: any;
    }): any[];
    getTileMetadata({ x, y, z }: { x: any; y: any; z: any }): {
      bbox:
        | {
            west: number;
            north: number;
            east: number;
            south: number;
            left?: undefined;
            top?: undefined;
            right?: undefined;
            bottom?: undefined;
          }
        | {
            left: number;
            top: number;
            right: number;
            bottom: number;
            west?: undefined;
            north?: undefined;
            east?: undefined;
            south?: undefined;
          };
    };
    getParentIndex(tileIndex: any): any;
    updateTileStates(): boolean;
    _rebuildTree(): void;
    _updateTileStates(selectedTiles: any): void;
    /**
     * Clear tiles that are not visible when the cache is full
     */
    _resizeCache(): void;
    _getTile(
      {
        x,
        y,
        z,
      }: {
        x: any;
        y: any;
        z: any;
      },
      create: any
    ): any;
    _getNearestAncestor(x: any, y: any, z: any): any;
  }
}
declare module '@deck.gl/geo-layers/tile-layer/tile-layer' {
  import { CompositeLayer, Layer } from '@deck.gl/core';
  import { LayerProps } from '@deck.gl/core/lib/layer';
  import { ExtentsLeftBottomRightTop } from '@deck.gl/core/utils/positions';
  export interface TileLayerProps<D> extends LayerProps<D> {
    //Data Options
    getTileData?: (tile: {
      x: number;
      y: number;
      z: number;
      url: string;
      bbox: any;
      signal: AbortSignal;
    }) => D[] | Promise<D[]> | null;
    tileSize?: number;
    maxZoom?: number | null;
    minZoom?: number;
    zoomOffset?: number;
    maxCacheSize?: number;
    maxCacheByteSize?: number;
    refinementStrategy?: 'best-available' | 'no-overlap' | 'never';
    maxRequests?: number;
    extent?: ExtentsLeftBottomRightTop;

    //Render Options
    renderSubLayers?: (props: any) => Layer<any> | Layer<any>[];
    zRange?: [number, number];

    //Callbacks
    onViewportLoad?: (data: D[]) => void;
    onTileLoad?: (tile: D) => void;
    onTileError?: (error: Error) => void;
  }
  export default class TileLayer<D, P extends TileLayerProps<D> = TileLayerProps<D>> extends CompositeLayer<D, P> {
    constructor(...props: TileLayerProps<D>[]);
    initializeState(params: any): void;
    get isLoaded(): any;
    _updateTileset(): void;
    _onTileLoad(tile: any): void;
    _onTileError(error: any): void;
    getTileData(tile: any): any;
    renderSubLayers(props: any): any;
    renderLayers(): any;
  }
}
declare module '@deck.gl/geo-layers/trips-layer/trips-layer' {
  import { PathLayer } from '@deck.gl/layers';
  import { Position } from '@deck.gl/core/utils/positions';
  import LayerPath, { PathLayerProps, TypedArray } from '@deck.gl/layers/path-layer/path-layer';
  export interface TripsLayerProps<D> extends PathLayerProps<D> {
    //Render Options
    currentTime?: number;
    trailLength?: number;

    //Data Accessors
    getPath?: (d: D) => Position[] | TypedArray;
    getTimestamps?: (
      d: D,
      info?: {
        data: D[];
        index: number;
        target: number[];
      }
    ) => number[];
  }
  export default class TripsLayer<D, P extends TripsLayerProps<D> = TripsLayerProps<D>> extends PathLayer<D, P> {
    constructor(...props: TripsLayerProps<D>[]);
    getShaders(): any;
    initializeState(params?: any): void;
    draw(params: any): void;
  }
}
declare module '@deck.gl/geo-layers/h3-layers/h3-cluster-layer' {
  import { CompositeLayer } from '@deck.gl/core';
  import { PolygonLayerProps } from '@deck.gl/layers/polygon-layer/polygon-layer';
  export interface H3ClusterLayerProps<D> extends PolygonLayerProps<D> {
    getHexagons?: (d: D) => string[];
  }
  export default class H3ClusterLayer<
    D,
    P extends H3ClusterLayerProps<D> = H3ClusterLayerProps<D>
  > extends CompositeLayer<D, P> {
    constructor(...props: H3ClusterLayerProps<D>[]);
    renderLayers(): any;
  }
}
declare module '@deck.gl/geo-layers/h3-layers/h3-hexagon-layer' {
  import { CompositeLayer } from '@deck.gl/core';
  import { PolygonLayerProps } from '@deck.gl/layers/polygon-layer/polygon-layer';
  export function normalizeLongitudes(vertices: any, refLng: any): void;
  export function scalePolygon(hexId: any, vertices: any, factor: any): void;
  export interface H3HexagonLayerProps<D> extends PolygonLayerProps<D> {
    highPrecision?: boolean;
    coverage?: number;
    getHexagon?: (d: D) => string;
  }

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
  export default class H3HexagonLayer<
    D,
    P extends H3HexagonLayerProps<D> = H3HexagonLayerProps<D>
  > extends CompositeLayer<D, P> {
    constructor(...props: H3HexagonLayerProps<D>[]);
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
declare module '@deck.gl/geo-layers/tile-3d-layer/tile-3d-layer' {
  import { CompositeLayer } from '@deck.gl/core';
  import { CompositeLayerProps } from '@deck.gl/core/lib/composite-layer';
  import { RGBAColor } from '@deck.gl/core/utils/color';
  export interface Tile3DLayerProps<D> extends CompositeLayerProps<D> {
    //Render Options
    opacity?: number;
    pointSize?: number;

    //Data Properties
    data?: string;
    loader?: any;
    pickable?: boolean;

    //Data Accessors
    getPointColor?: ((tileData: Object) => RGBAColor) | RGBAColor;

    //Callbacks
    onTilesetLoad?: (tileData: Object) => void;
    onTileLoad?: (tileHeader: Object) => void;
    onTileUnload?: (tileHeader: Object) => void;
    onTileError?: (tileHeader: Object, url: string, message: string) => void;
  }
  export default class Tile3DLayer<D, P extends Tile3DLayerProps<D> = Tile3DLayerProps<D>> extends CompositeLayer<
    D,
    P
  > {
    constructor(...props: Tile3DLayerProps<D>[]);
    initializeState(params: any): void;
    _loadTileset(tilesetUrl: any): Promise<void>;
    _onTileLoad(tileHeader: any): void;
    _onTileUnload(tileHeader: any): void;
    _updateTileset(tileset3d: any): void;
    _create3DTileLayer(tileHeader: any): any;
    _createPointCloudTileLayer(tileHeader: any): any;
    _create3DModelTileLayer(tileHeader: any): any;
    _createSimpleMeshLayer(tileHeader: any): any;
    renderLayers(): any;
  }
}
declare module '@deck.gl/geo-layers/terrain-layer/terrain-layer' {
  import { CompositeLayer } from '@deck.gl/core';
  import { CompositeLayerProps } from '@deck.gl/core/lib/composite-layer';
  import { RGBAColor } from '@deck.gl/core/utils/color';
  import { ExtentsLeftBottomRightTop } from '@deck.gl/core/utils/positions';
  /**
   * state: {
   *   isTiled: True renders TileLayer of many SimpleMeshLayers, false renders one SimpleMeshLayer
   *   terrain: Mesh object. Only  defined when isTiled is false.
   * }
   */

  export interface TerrainLayerProps<D> extends CompositeLayerProps<D> {
    //Data Options
    elevationData: string | string[];
    texture?: string | null;
    meshMaxError?: number;
    elevationDecoder?: {
      rScaler: number;
      gScaler: number;
      bScaler: number;
      offset: number;
    };
    bounds?: ExtentsLeftBottomRightTop;
    workerUrl?: string;

    //Render Options
    color?: RGBAColor;
    wireframe?: boolean;
    material?: any;

    //Tile options
    maxRequests?: number;
    refinementStrategy?: 'best-available' | 'no-overlap' | 'never';
    minZoom?: number;
    maxZoom?: number | null;
    tileSize?: number;
    extent?: ExtentsLeftBottomRightTop;
  }
  export default class TerrainLayer<D, P extends TerrainLayerProps<D> = TerrainLayerProps<D>> extends CompositeLayer<
    D,
    P
  > {
    constructor(...props: TerrainLayerProps<D>[]);
    loadTerrain({
      elevationData,
      bounds,
      elevationDecoder,
      meshMaxError,
      workerUrl,
    }: {
      elevationData: any;
      bounds: any;
      elevationDecoder: any;
      meshMaxError: any;
      workerUrl: any;
    }): any;
    getTiledTerrainData(tile: any): Promise<[any, any]>;
    renderSubLayers(props: any): any;
    onViewportLoad(data: any): void;
    renderLayers(): any;
  }
}
declare module '@deck.gl/geo-layers/mvt-layer/clip-extension' {
  import { LayerExtension } from '@deck.gl/core';
  export default class ClipExtension extends LayerExtension {
    getShaders(opts: any):
      | {
          modules: {
            name: string;
            vs: string;
          }[];
          inject: {
            'vs:#decl': string;
            'vs:DECKGL_FILTER_GL_POSITION': string;
            'fs:#decl': string;
            'fs:DECKGL_FILTER_COLOR': string;
          };
        }
      | {
          modules: {
            name: string;
            fs: string;
          }[];
          inject: {
            'vs:#decl': string;
            'vs:DECKGL_FILTER_GL_POSITION': string;
            'fs:#decl': string;
            'fs:DECKGL_FILTER_COLOR': string;
          };
        };
    draw({ uniforms }: { uniforms: any }): void;
  }
}
declare module '@deck.gl/geo-layers/mvt-layer/mvt-layer' {
  import TileLayer, { TileLayerProps } from '@deck.gl/geo-layers/tile-layer/tile-layer';
  export interface MVTLayerProps<D> extends TileLayerProps<D> {
    uniqueIdProperty?: string;
    binary?: boolean;
  }
  export default class MVTLayer<D, P extends MVTLayerProps<D> = MVTLayerProps<D>> extends TileLayer<D, P> {
    constructor(...props: MVTLayerProps<D>[]);
    getTileData(tile: any): any;
    renderSubLayers(props: any): any;
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
  export { default as TerrainLayer } from '@deck.gl/geo-layers/terrain-layer/terrain-layer';
  export { default as MVTLayer } from '@deck.gl/geo-layers/mvt-layer/mvt-layer';
}
