//typings for @deck.gl/layers v8.1.3
declare module '@deck.gl/layers/arc-layer/arc-layer-vertex.glsl' {
  const _default: string;
  export default _default;
}
declare module '@deck.gl/layers/arc-layer/arc-layer-fragment.glsl' {
  const _default: string;
  export default _default;
}
declare module '@deck.gl/layers/arc-layer/arc-layer' {
  import { LayerData, LayerDataAccessor, LayerProps, ObjectInfo } from '@deck.gl/core/lib/layer';
  import { RGBAColor } from '@deck.gl/core/utils/color';
  import { Position } from '@deck.gl/core/utils/positions';

  export type ArcLayerProps<D extends LayerData, E extends Array<any> = Array<any>> = LayerProps<D, E> & {
    widthUnits?: string;
    widthScale?: number;
    widthMinPixels?: number;
    widthMaxPixels?: number;
    // Data Accessors
    getSourcePosition?: (d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => Position;
    getTargetPosition?: (d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => Position;
    getSourceColor?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getTargetColor?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getWidth?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
    getHeight?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
    getTilt?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
  };
  import { Layer } from '@deck.gl/core';
  export default class ArcLayer<
    D extends LayerData<ArcLayerProps<any, E>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends Layer<D, ArcLayerProps<D, E> & P, S, E> {
    getShaders(): any;
    initializeState(params: any): void;
    draw({ uniforms }: { uniforms: any }): void;
    _getModel(gl: any): any;
  }
}
declare module '@deck.gl/layers/bitmap-layer/bitmap-layer-vertex' {
  const _default: string;
  export default _default;
}
declare module '@deck.gl/layers/bitmap-layer/bitmap-layer-fragment' {
  const _default: string;
  export default _default;
}
declare module '@deck.gl/layers/bitmap-layer/bitmap-layer' {
  import { Layer } from '@deck.gl/core';
  import { LayerProps } from '@deck.gl/core/lib/layer';
  import { RGBAColor, RGBColor } from '@deck.gl/core/utils/color';
  import { Position, ExtentsLeftBottomRightTop } from '@deck.gl/core/utils/positions';
  import { Texture2D, Texture2DProps } from '@luma.gl/webgl';

  type Image = string | Texture2D | ImageBitmap | ImageData | HTMLCanvasElement | HTMLVideoElement | Texture2DProps;

  export type BitmapLayerProps<I extends Image, E extends Array<any> = Array<any>> = Omit<
    LayerProps<any, E>,
    'data'
  > & {
    //Data
    image: I;
    bounds: ExtentsLeftBottomRightTop | [Position, Position, Position, Position];

    loadOptions?: any;
    textureParameters?: any;
    _imageCoordinateSystem?: number;

    //Render Options
    desaturate?: number;
    transparentColor?: RGBAColor;
    tintColor?: RGBColor;
  };
  export default class BitmapLayer<
    I extends Image,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends Layer<any, BitmapLayerProps<I, E> & P, S, E> {
    constructor(props: BitmapLayerProps<I, E> & P);
    getShaders(): any;
    initializeState(params: any): void;
    finalizeState(): void;
    calculatePositions(attributes: any): void;
    _getModel(gl: any): any;
    draw(opts: any): void;
    loadTexture(image: any): void;
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
declare module '@deck.gl/layers/icon-layer/icon-manager' {
  /**
   * Generate coordinate mapping to retrieve icon left-top position from an icon atlas
   * @param icons {Array<Object>} list of icons, each icon requires url, width, height
   * @param buffer {Number} add buffer to the right and bottom side of the image
   * @param xOffset {Number} right position of last icon in old mapping
   * @param yOffset {Number} top position in last icon in old mapping
   * @param rowHeight {Number} rowHeight of the last icon's row
   * @param canvasWidth {Number} max width of canvas
   * @param mapping {object} old mapping
   * @returns {{mapping: {'/icon/1': {url, width, height, ...}},, canvasHeight: {Number}}}
   */
  export function buildMapping({
    icons,
    buffer,
    mapping,
    xOffset,
    yOffset,
    rowHeight,
    canvasWidth,
  }: {
    icons: any;
    buffer: any;
    mapping?: {};
    xOffset?: number;
    yOffset?: number;
    rowHeight?: number;
    canvasWidth: any;
  }): {
    mapping: {};
    rowHeight: number;
    xOffset: number;
    yOffset: number;
    canvasWidth: any;
    canvasHeight: number;
  };
  export function getDiffIcons(data: any, getIcon: any, cachedIcons: any): {};
  export default class IconManager {
    constructor(
      gl: any,
      {
        onUpdate,
      }: {
        onUpdate?: () => void;
      }
    );
    finalize(): void;
    getTexture(): any;
    getIconMapping(icon: any): any;
    setProps({
      loadOptions,
      autoPacking,
      iconAtlas,
      iconMapping,
      data,
      getIcon,
    }: {
      loadOptions: any;
      autoPacking: any;
      iconAtlas: any;
      iconMapping: any;
      data: any;
      getIcon: any;
    }): void;
    get isLoaded(): boolean;
    _updateIconAtlas(iconAtlas: any): void;
    _updateAutoPacking(data: any): void;
    _loadIcons(icons: any): void;
  }
}
declare module '@deck.gl/layers/icon-layer/icon-layer' {
  import { Layer } from '@deck.gl/core';
  import { LayerData, LayerDataAccessor, LayerProps, ObjectInfo, WidthUnits } from '@deck.gl/core/lib/layer';
  import { Position, Position2D } from '@deck.gl/core/utils/positions';
  import { Texture2D } from '@luma.gl/webgl';
  import { RGBAColor } from '@deck.gl/core/utils/color';

  export interface IconDefinitionBase {
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
  export interface IconDefinition extends IconDefinitionBase {
    x: number;
    y: number;
  }

  /*
   * icon names mapped to icon definitions
   */
  export interface IconMapping {
    [key: string]: IconDefinition;
  }

  export type IconLayerProps<D extends LayerData, E extends Array<any> = Array<any>> = LayerProps<D, E> & {
    iconAtlas?: Texture2D | string;
    iconMapping?: IconMapping;
    sizeScale?: number;
    sizeUnits?: WidthUnits;
    sizeMinPixels?: number;
    sizeMaxPixels?: number;
    billboard?: boolean;
    alphaCutoff?: number;
    // Data Accessors
    getIcon?: (
      x: LayerDataAccessor<D>,
      objectInfo: ObjectInfo<D, any>
    ) => string | ({ url: string; id?: string } & IconDefinitionBase);
    getPosition?: ((x: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => Position) | Position;
    getSize?: ((x: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
    getColor?: ((x: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getAngle?: ((x: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
    getPixelOffset?: ((x: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => Position2D) | Position2D;
  };

  export default class IconLayer<
    D extends LayerData<IconLayerProps<any, E>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends Layer<D, IconLayerProps<D, E> & P, S, E> {
    getShaders(): any;
    initializeState(params: any): void;
    get isLoaded(): any;
    finalizeState(): void;
    draw({ uniforms }: { uniforms: any }): void;
    _getModel(gl: any): any;
    _onUpdate(): void;
    getInstanceOffset(icon: any): number[];
    getInstanceColorMode(icon: any): number;
    getInstanceIconFrame(icon: any): any[];
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
  import { LayerData, LayerDataAccessor, LayerProps, ObjectInfo, WidthUnits } from '@deck.gl/core/lib/layer';
  import { RGBAColor } from '@deck.gl/core/utils/color';
  import { Position } from '@deck.gl/core/utils/positions';

  export type LineLayerProps<D extends LayerData, E extends Array<any> = Array<any>> = LayerProps<D, E> & {
    widthUnits?: WidthUnits;
    widthScale?: number;
    widthMinPixels?: number;
    widthMaxPixels?: number;
    // Data Accessors
    getSourcePosition?: (d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => Position;
    getTargetPosition?: (d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => Position;
    getColor?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getWidth?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
  };
  export default class LineLayer<
    D extends LayerData<LineLayerProps<any, E>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends Layer<D, LineLayerProps<D, E> & P, S, E> {
    getShaders(): any;
    initializeState(params: any): void;
    draw({ uniforms }: { uniforms: any }): void;
    _getModel(gl: any): any;
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
  import { LayerData, LayerDataAccessor, LayerProps, ObjectInfo } from '@deck.gl/core/lib/layer';
  import { RGBAColor } from '@deck.gl/core/utils/color';
  import { Position } from '@deck.gl/core/utils/positions';

  export type PointCloudLayerProps<D extends LayerData, E extends Array<any> = Array<any>> = LayerProps<D, E> & {
    sizeUnits?: string;
    pointSize?: number;
    material?: any;
    // Data Accessors
    getPosition?: (d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => Position;
    getNormal?:
      | ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => [number, number, number])
      | [number, number, number];
    getColor?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
  };
  export default class PointCloudLayer<
    D extends LayerData<PointCloudLayerProps<any, E>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends Layer<D, PointCloudLayerProps<D, E> & P, S, E> {
    getShaders(id: any): any;
    initializeState(params: any): void;
    draw({ uniforms }: { uniforms: any }): void;
    _getModel(gl: any): any;
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
  import { LayerData, LayerDataAccessor, LayerProps, ObjectInfo, WidthUnits } from '@deck.gl/core/lib/layer';
  import { Position } from '@deck.gl/core/utils/positions';
  import { RGBAColor } from '@deck.gl/core/utils/color';
  import { UNIT } from '@deck.gl/core/lib/constants';
  import { ExtensionProps, FillStyleExtension, FillStyleExtensionProps } from '@deck.gl/extensions';

  export type ScatterplotLayerProps<D extends LayerData, E extends Array<any> = Array<any>> = LayerProps<D, E> & {
    radiusScale?: number;
    lineWidthUnits?: WidthUnits;
    lineWidthScale?: number;
    stroked?: boolean;
    filled?: boolean;
    radiusMinPixels?: number;
    radiusMaxPixels?: number;
    lineWidthMinPixels?: number;
    lineWidthMaxPixels?: number;
    radiusUnits?: keyof typeof UNIT;
    // Data Accessors
    getPosition?: (d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => Position;
    getRadius?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
    getColor?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getFillColor?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getLineColor?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getLineWidth?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
  } & ExtensionProps<E, FillStyleExtension, FillStyleExtensionProps<D>>;
  export default class ScatterplotLayer<
    D extends LayerData<ScatterplotLayerProps<any, E>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends Layer<D, ScatterplotLayerProps<D, E> & P, S, E> {
    getShaders(id: any): any;
    initializeState(params: any): void;
    draw({ uniforms }: { uniforms: any }): void;
    _getModel(gl: any): any;
  }
}
declare module '@deck.gl/layers/column-layer/column-geometry' {
  import { Geometry } from '@luma.gl/core';
  export default class ColumnGeometry extends Geometry {
    constructor(props?: {});
  }
}
declare module '@deck.gl/layers/column-layer/column-layer-vertex.glsl' {
  const _default: string;
  export default _default;
}
declare module '@deck.gl/layers/column-layer/column-layer-fragment.glsl' {
  const _default: string;
  export default _default;
}
declare module '@deck.gl/layers/column-layer/column-layer' {
  import { Layer } from '@deck.gl/core';
  import ColumnGeometry from '@deck.gl/layers/column-layer/column-geometry';
  import { LayerData, LayerDataAccessor, LayerProps, ObjectInfo, WidthUnits } from '@deck.gl/core/lib/layer';
  import { Position, Position2D } from '@deck.gl/core/utils/positions';
  import { RGBAColor } from '@deck.gl/core/utils/color';
  import { ExtensionProps, FillStyleExtension, FillStyleExtensionProps } from '@deck.gl/extensions';

  export type ColumnLayerProps<D extends LayerData, E extends Array<any> = Array<any>> = LayerProps<D, E> & {
    diskResolution?: number;
    radius?: number;
    angle?: number;
    vertices?: Position2D[];
    offset?: number;
    coverage?: number;
    elevationScale?: number;
    filled?: boolean;
    stroked?: boolean;
    extruded?: boolean;
    wireframe?: boolean;
    lineWidthUnits?: WidthUnits;
    lineWidthScale?: boolean;
    lineWidthMinPixels?: number;
    lineWidthMaxPixels?: number;
    material?: any;
    // Data Accessors
    getPosition?: (d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => Position;
    getFillColor?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getLineColor?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getElevation?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
    getLineWidth?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
  } & ExtensionProps<E, FillStyleExtension, FillStyleExtensionProps<D>>;
  export default class ColumnLayer<
    D extends LayerData<ColumnLayerProps<any, E>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends Layer<D, ColumnLayerProps<D, E> & P, S, E> {
    getShaders(): any;
    /**
     * DeckGL calls initializeState when GL context is available
     * Essentially a deferred constructor
     */
    initializeState(params: any): void;
    getGeometry(diskResolution: any, vertices: any): ColumnGeometry;
    _getModel(gl: any): any;
    _updateGeometry({ diskResolution, vertices }: { diskResolution: any; vertices: any }): void;
    draw({ uniforms }: { uniforms: any }): void;
  }
}
declare module '@deck.gl/layers/column-layer/grid-cell-layer' {
  import ColumnLayer from '@deck.gl/layers/column-layer/column-layer';
  import { LayerData, LayerDataAccessor, LayerProps, ObjectInfo } from '@deck.gl/core/lib/layer';
  import { Position2D } from '@deck.gl/core/utils/positions';
  import { RGBAColor } from '@deck.gl/core/utils/color';

  export type GridCellLayerProps<D extends LayerData, E extends Array<any> = Array<any>> = LayerProps<D, E> & {
    cellSize?: number;
    coverage?: number;
    elevationScale?: number;
    extruded?: boolean;
    material?: any;
    // Data Accessors
    getPosition?: (d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => Position2D;
    getColor?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getElevation?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
  };
  export default class GridCellLayer<
    D extends LayerData<GridCellLayerProps<any, E>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends ColumnLayer<D, GridCellLayerProps<D, E> & P, S, E> {
    getGeometry(diskResolution: any): any;
    draw({ uniforms }: { uniforms: any }): void;
  }
}
declare module '@deck.gl/layers/path-layer/path-tesselator' {
  import { Tesselator } from '@deck.gl/core';
  export default class PathTesselator extends Tesselator {
    constructor(opts: any);
    getGeometryFromBuffer(buffer: any): any;
    get(attributeName: any): any;
    getGeometrySize(path: any): any;
    updateGeometryAttributes(path: any, context: any): void;
    _updateSegmentTypes(path: any, context: any): void;
    _updatePositions(path: any, context: any): void;
    getPathLength(path: any): any;
    getPointOnPath(path: any, index: any): any;
    isClosed(path: any): any;
  }
}
declare module '@deck.gl/layers/path-layer/path-layer-vertex.glsl' {
  const _default: string;
  export default _default;
}
declare module '@deck.gl/layers/path-layer/path-layer-fragment.glsl' {
  const _default: string;
  export default _default;
}
declare module '@deck.gl/layers/path-layer/path-layer' {
  import { Layer, TypedArray } from '@deck.gl/core';
  import { LayerData, LayerDataAccessor, LayerProps, ObjectInfo } from '@deck.gl/core/lib/layer';
  import { Position } from '@deck.gl/core/utils/positions';
  import { RGBAColor } from '@deck.gl/core/utils/color';
  import { ExtensionProps, PathStyleExtension } from '@deck.gl/extensions';

  export type PathLayerProps<D extends LayerData, E extends Array<any> = Array<any>> = LayerProps<D, E> & {
    extensions?: E;
    widthUnits?: string;
    widthScale?: number;
    widthMinPixels?: number;
    widthMaxPixels?: number;
    capRounded?: boolean;
    jointRounded?: boolean;
    billboard?: boolean;
    miterLimit?: number;
    _pathType?: 'loop' | 'open';
    // Data Accessors
    getPath?: (d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => Position[] | TypedArray;
    getColor?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getWidth?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
  } & ExtensionProps<
      E,
      PathStyleExtension,
      {
        dashGapPickable?: boolean;
        dashJustified?: boolean;
        getDashArray?:
          | [number, number]
          | ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => [number, number]);
        getOffset?: number | ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number);
      }
    >;
  export default class PathLayer<
    D extends LayerData<PathLayerProps<any, E>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends Layer<D, PathLayerProps<D, E> & P, S, E> {
    getShaders(): any;
    initializeState(params: any): void;
    draw({ uniforms }: { uniforms: any }): void;
    _getModel(gl: any): any;
    calculatePositions(attribute: any): void;
    calculateSegmentTypes(attribute: any): void;
  }
}
declare module '@deck.gl/layers/solid-polygon-layer/polygon' {
  /**
   * Counts the number of vertices in any polygon representation.
   * @param {Array|Object} polygon
   * @param {Number} positionSize - size of a position, 2 (xy) or 3 (xyz)
   * @returns {Number} vertex count
   */
  export function getVertexCount(polygon: any, positionSize: any, normalization?: boolean): any;
  /**
   * Normalize any polygon representation into the "complex flat" format
   * @param {Array|Object} polygon
   * @param {Number} positionSize - size of a position, 2 (xy) or 3 (xyz)
   * @param {Number} [vertexCount] - pre-computed vertex count in the polygon.
   *   If provided, will skip counting.
   * @return {Object} - {positions: <Float64Array>, holeIndices: <Array|null>}
   */
  export function normalize(
    polygon: any,
    positionSize: any,
    vertexCount: any
  ):
    | Float64Array
    | {
        positions: Float64Array;
        holeIndices: any[];
      };
  export function getSurfaceIndices(normalizedPolygon: any, positionSize: any, preproject: any): any;
}
declare module '@deck.gl/layers/solid-polygon-layer/polygon-tesselator' {
  import { Tesselator } from '@deck.gl/core';
  export default class PolygonTesselator extends Tesselator {
    constructor(opts: any);
    get(attributeName: any): any;
    updateGeometry(opts: any): void;
    getGeometrySize(polygon: any): any;
    getGeometryFromBuffer(buffer: any): any;
    updateGeometryAttributes(polygon: any, context: any): void;
    _updateIndices(
      polygon: any,
      {
        geometryIndex,
        vertexStart: offset,
        indexStart,
      }: {
        geometryIndex: any;
        vertexStart: any;
        indexStart: any;
      }
    ): void;
    _updatePositions(
      polygon: any,
      {
        vertexStart,
        geometrySize,
      }: {
        vertexStart: any;
        geometrySize: any;
      }
    ): void;
    _updateVertexValid(
      polygon: any,
      {
        vertexStart,
        geometrySize,
      }: {
        vertexStart: any;
        geometrySize: any;
      }
    ): void;
  }
}
declare module '@deck.gl/layers/solid-polygon-layer/solid-polygon-layer-vertex-main.glsl' {
  const _default: string;
  export default _default;
}
declare module '@deck.gl/layers/solid-polygon-layer/solid-polygon-layer-vertex-top.glsl' {
  const _default: string;
  export default _default;
}
declare module '@deck.gl/layers/solid-polygon-layer/solid-polygon-layer-vertex-side.glsl' {
  const _default: string;
  export default _default;
}
declare module '@deck.gl/layers/solid-polygon-layer/solid-polygon-layer-fragment.glsl' {
  const _default: string;
  export default _default;
}
declare module '@deck.gl/layers/solid-polygon-layer/solid-polygon-layer' {
  import { Layer } from '@deck.gl/core';
  import { LayerData, LayerDataAccessor, LayerProps, ObjectInfo } from '@deck.gl/core/lib/layer';
  import { Position } from '@deck.gl/core/utils/positions';
  import { RGBAColor } from '@deck.gl/core/utils/color';
  import { ExtensionProps, FillStyleExtension, FillStyleExtensionProps } from '@deck.gl/extensions';

  export type SolidPolygonLayerProps<D extends LayerData, E extends Array<any> = Array<any>> = LayerProps<D, E> & {
    filled?: boolean;
    extruded?: boolean;
    wireframe?: boolean;
    elevationScale?: number;
    material?: any;
    _normalize?: boolean;
    // Data Accessors
    getPolygon?: (x: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => Position[] | Position[][];
    getFillColor?: ((x: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getLineColor?: ((x: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getElevation?: ((x: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
  } & ExtensionProps<E, FillStyleExtension, FillStyleExtensionProps<D>>;
  export default class SolidPolygonLayer<
    D extends LayerData<SolidPolygonLayerProps<any, E>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends Layer<D, SolidPolygonLayerProps<D, E> & P, S, E> {
    getShaders(vs: any): any;
    initializeState(params: any): void;
    draw({ uniforms }: { uniforms: any }): void;
    updateGeometry({ props, oldProps, changeFlags }: { props: P; oldProps: P; changeFlags: any }): void;
    _getModels(gl: any): {
      models: any[];
      topModel: any;
      sideModel: any;
    };
    calculateIndices(attribute: any): void;
    calculatePositions(attribute: any): void;
    calculateVertexValid(attribute: any): void;
  }
}
declare module '@deck.gl/layers/utils' {
  export function replaceInRange({
    data,
    getIndex,
    dataRange,
    replace,
  }: {
    data: any;
    getIndex: any;
    dataRange: any;
    replace: any;
  }): {
    startRow: any;
    endRow: any;
  };
}
declare module '@deck.gl/layers/polygon-layer/polygon-layer' {
  import { CompositeLayer } from '@deck.gl/core';
  import { CompositeLayerProps } from '@deck.gl/core/lib/composite-layer';
  import { LayerData, LayerDataAccessor, ObjectInfo, WidthUnits } from '@deck.gl/core/lib/layer';
  import { Position } from '@deck.gl/core/utils/positions';
  import { RGBAColor } from '@deck.gl/core/utils/color';
  import { ExtensionProps, FillStyleExtension, FillStyleExtensionProps } from '@deck.gl/extensions';

  export type PolygonLayerProps<D extends LayerData, E extends Array<any> = Array<any>> = CompositeLayerProps<D, E> & {
    filled?: boolean;
    stroked?: boolean;
    extruded?: boolean;
    wireframe?: boolean;
    elevationScale?: number;
    lineWidthUnits?: WidthUnits;
    lineWidthScale?: number;
    lineWidthMinPixels?: number;
    lineWidthMaxPixels?: number;
    lineJointRounded?: boolean;
    lineMiterLimit?: number;
    material?: any;
    _normalize?: boolean;
    // Data Accessors
    getPolygon?: (x: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => Position[] | Position[][];
    getFillColor?: ((x: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getLineColor?: ((x: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getLineWidth?: ((x: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
    getElevation?: ((x: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
  } & ExtensionProps<E, FillStyleExtension, FillStyleExtensionProps<D>>;
  export default class PolygonLayer<
    D extends LayerData<PolygonLayerProps<any, E>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends CompositeLayer<D, PolygonLayerProps<D, E> & P, S, E> {
    initializeState(params: any): void;
    _getPaths(dataRange?: {}): any[];
    renderLayers(): any[];
  }
}
declare module '@deck.gl/layers/geojson-layer/geojson' {
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
  export function separateGeojsonFeatures(
    features: any,
    wrapFeature: any,
    dataRange?: {}
  ): {
    pointFeatures: any[];
    lineFeatures: any[];
    polygonFeatures: any[];
    polygonOutlineFeatures: any[];
  };
  export function validateGeometry(type: any, coordinates: any): boolean;
}
declare module '@deck.gl/layers/geojson-layer/geojson-layer' {
  import { CompositeLayer } from '@deck.gl/core';
  import { CompositeLayerProps } from '@deck.gl/core/lib/composite-layer';
  import { LayerData, LayerDataAccessor } from '@deck.gl/core/lib/layer';
  import { RGBAColor } from '@deck.gl/core/utils/color';
  import { ObjectInfo, WidthUnits } from '@deck.gl/core/lib/layer';
  import { ExtensionProps, FillStyleExtension, FillStyleExtensionProps } from '@deck.gl/extensions';

  export type GeoJsonLayerProps<D extends LayerData, E extends Array<any> = Array<any>> = CompositeLayerProps<D, E> & {
    //Render Options
    filled?: boolean;
    stroked?: boolean;
    extruded?: boolean;
    wireframe?: boolean;
    lineWidthUnits?: WidthUnits;
    lineWidthScale?: number;
    lineWidthMinPixels?: number;
    lineWidthMaxPixels?: number;
    lineJointRounded?: boolean;
    lineMiterLimit?: number;
    elevationScale?: number;
    pointRadiusScale?: number;
    pointRadiusUnits?: string;
    pointRadiusMinPixels?: number;
    pointRadiusMaxPixels?: number;
    material?: any;
    // Data Accessors
    getLineColor?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getFillColor?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getPointRadius?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
    getLineWidth?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
    getElevation?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
    /** @deprecated since deck.gl v8.5, use getPointRadius instead */
    getRadius?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
  } & ExtensionProps<E, FillStyleExtension, FillStyleExtensionProps<D>>;
  export default class GeoJsonLayer<
    D extends LayerData<GeoJsonLayerProps<any>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends CompositeLayer<D, GeoJsonLayerProps<D, E> & P, S, E> {
    initializeState(params: any): void;
    renderLayers(): any[];
    _getHighlightedIndex(data: any): any;
  }
}
declare module '@deck.gl/layers/text-layer/multi-icon-layer/multi-icon-layer-fragment.glsl' {
  const _default: string;
  export default _default;
}
declare module '@deck.gl/layers/text-layer/multi-icon-layer/multi-icon-layer' {
  import { LayerData } from '@deck.gl/core/lib/layer';
  import IconLayer, { IconLayerProps } from '@deck.gl/layers/icon-layer/icon-layer';
  export default class MultiIconLayer<
    D extends LayerData<IconLayerProps<any, E>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends IconLayer<D, IconLayerProps<D, E> & P, S, E> {
    getShaders(): any;
    initializeState(params: any): void;
    draw({ uniforms }: { uniforms: any }): void;
    getInstanceOffset(icons: any): any[];
    getInstanceColorMode(icons: any): number;
    getInstanceIconFrame(icons: any): any[];
  }
}
declare module '@deck.gl/layers/text-layer/utils' {
  export function nextPowOfTwo(number: any): number;
  /**
   * Generate character mapping table or update from an existing mapping table
   * @param characterSet {Array|Set} new characters
   * @param getFontWidth {Function} function to get width of each character
   * @param fontHeight {Number} height of font
   * @param buffer {Number} buffer surround each character
   * @param maxCanvasWidth {Number} max width of font atlas
   * @param mapping {Object} old mapping table
   * @param xOffset {Number} x position of last character in old mapping table
   * @param yOffset {Number} y position of last character in old mapping table
   * @returns {{
   *   mapping: Object,
   *   xOffset: Number, x position of last character
   *   yOffset: Number, y position of last character in old mapping table
   *   canvasHeight: Number, height of the font atlas canvas, power of 2
   *  }}
   */
  export function buildMapping({
    characterSet,
    getFontWidth,
    fontHeight,
    buffer,
    maxCanvasWidth,
    mapping,
    xOffset,
    yOffset,
  }: {
    characterSet: any;
    getFontWidth: any;
    fontHeight: any;
    buffer: any;
    maxCanvasWidth: any;
    mapping?: {};
    xOffset?: number;
    yOffset?: number;
  }): {
    mapping: {};
    xOffset: number;
    yOffset: number;
    canvasHeight: number;
  };
  export function autoWrapping(
    text: any,
    wordBreak: any,
    maxWidth: any,
    iconMapping: any
  ): {
    rows: any[];
    lastRowStartCharIndex: number;
    lastRowOffsetLeft: number;
  };
  /**
   * Transform a text paragraph to an array of characters, each character contains
   * @param paragraph: {String}
   * @param iconMapping {Object} character mapping table for retrieving a character from font atlas
   * @param lineHeight {Number} css line-height
   * @param wordBreak {String} css word-break option
   * @param maxWidth {number} css max-width
   * @param transformedData {Array} output transformed data array, each datum contains
   *   - text: character
   *   - index: character index in the paragraph
   *   - x: x offset in the row,
   *   - y: y offset in the paragraph
   *   - size: [width, height] size of the paragraph
   *   - rowSize: [rowWidth, rowHeight] size of the row
   *   - len: length of the paragraph
   */
  export function transformParagraph(
    paragraph: any,
    lineHeight: any,
    wordBreak: any,
    maxWidth: any,
    iconMapping: any
  ): {
    characters: any[];
    size: number[];
  };
  export function getTextFromBuffer({
    value,
    length,
    stride,
    offset,
    startIndices,
  }: {
    value: any;
    length: any;
    stride: any;
    offset: any;
    startIndices: any;
  }): {
    texts: any[];
    characterCount: any;
  };
}
declare module '@deck.gl/layers/text-layer/lru-cache' {
  /**
   * LRU Cache class with limit
   *
   * Update order for each get/set operation
   * Delete oldest when reach given limit
   */
  export default class LRUCache {
    constructor(limit?: number);
    clear(): void;
    get(key: any): any;
    set(key: any, value: any): void;
    delete(key: any): void;
    _deleteCache(key: any): void;
    _deleteOrder(key: any): void;
    _appendOrder(key: any): void;
  }
}
declare module '@deck.gl/layers/text-layer/font-atlas-manager' {
  export const DEFAULT_CHAR_SET: any[];
  export const DEFAULT_FONT_FAMILY = 'Monaco, monospace';
  export const DEFAULT_FONT_WEIGHT = 'normal';
  export const DEFAULT_FONT_SIZE = 64;
  export const DEFAULT_BUFFER = 2;
  export const DEFAULT_CUTOFF = 0.25;
  export const DEFAULT_RADIUS = 3;
  export default class FontAtlasManager {
    constructor(gl: any);
    finalize(): void;
    get texture(): any;
    get mapping(): any;
    get scale(): number;
    setProps(props?: {}): void;
    _updateTexture({ data: canvas, width, height }: { data: any; width: any; height: any }): void;
    _generateFontAtlas(
      key: any,
      characterSet: any,
      cachedFontAtlas: any
    ): {
      xOffset: number;
      yOffset: number;
      mapping: {};
      data: any;
      width: any;
      height: any;
    };
    _getKey(): string;
  }
  export interface FontSettings {
    fontSize?: number;
    buffer?: number;
    sdf?: boolean;
    cutoff?: number;
    radius?: number;
  }
}
declare module '@deck.gl/layers/text-layer/text-layer' {
  import { CompositeLayer } from '@deck.gl/core';
  import { FontSettings } from '@deck.gl/layers/text-layer/font-atlas-manager';
  import { RGBAColor } from '@deck.gl/core/utils/color';
  import { CompositeLayerProps } from '@deck.gl/core/lib/composite-layer';
  import { LayerData, LayerDataAccessor, WidthUnits } from '@deck.gl/core/lib/layer';
  import { Position } from '@deck.gl/core/utils/positions';
  export type TextAnchor = 'start' | 'middle' | 'end';
  export type AlignmentBaseline = 'top' | 'center' | 'bottom';
  import { ObjectInfo } from '@deck.gl/core/lib/layer';

  export type TextLayerProps<D extends LayerData, E extends Array<any> = Array<any>> = CompositeLayerProps<D, E> & {
    sizeScale?: number;
    sizeUnits?: WidthUnits;
    sizeMinPixels?: number;
    sizeMaxPixels?: number;
    background?: boolean;
    billboard?: boolean;
    backgroundColor?: RGBAColor;
    backgroundPadding?: [number, number] | [number, number, number, number];
    fontFamily?: string;
    characterSet?: string | string[];
    fontWeight?: number | string;
    lineHeight?: number;
    fontSettings?: FontSettings;
    wordBreak?: 'break-all' | 'break-word';
    maxWidth?: number;
    outlineColor?: RGBAColor;
    outlineWidth?: number;
    // Data Accessors
    getText?: (d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, string>) => string;
    getPosition?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => Position) | Position;
    getSize?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;
    getColor?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getAngle?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number) | number;

    //Text Alignment Options
    getTextAnchor?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, TextAnchor>) => TextAnchor) | TextAnchor;
    getAlignmentBaseline?:
      | ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, AlignmentBaseline>) => AlignmentBaseline)
      | AlignmentBaseline;
    getPixelOffset?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number[]) | number[];
  };

  export default class TextLayer<
    D extends LayerData<TextLayerProps<any, E>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends CompositeLayer<D, TextLayerProps<D, E> & P, S, E> {
    initializeState(params: any): void;
    finalizeState(): void;
    _updateFontAtlas(oldProps: any, props: any): void;
    _fontChanged(oldProps: any, props: any): boolean;
    _updateText(): void;
    getIconOffsets(object: any, objectInfo: any): any[];
    renderLayers(): any;
  }
}
declare module '@deck.gl/layers' {
  export { default as ArcLayer, ArcLayerProps } from '@deck.gl/layers/arc-layer/arc-layer';
  export { default as BitmapLayer, BitmapLayerProps } from '@deck.gl/layers/bitmap-layer/bitmap-layer';
  export { default as IconLayer, IconLayerProps } from '@deck.gl/layers/icon-layer/icon-layer';
  export { default as LineLayer, LineLayerProps } from '@deck.gl/layers/line-layer/line-layer';
  export {
    default as PointCloudLayer,
    PointCloudLayerProps,
  } from '@deck.gl/layers/point-cloud-layer/point-cloud-layer';
  export {
    default as ScatterplotLayer,
    ScatterplotLayerProps,
  } from '@deck.gl/layers/scatterplot-layer/scatterplot-layer';
  export { default as ColumnLayer, ColumnLayerProps } from '@deck.gl/layers/column-layer/column-layer';
  export { default as GridCellLayer, GridCellLayerProps } from '@deck.gl/layers/column-layer/grid-cell-layer';
  export { default as PathLayer, PathLayerProps } from '@deck.gl/layers/path-layer/path-layer';
  export { default as PolygonLayer, PolygonLayerProps } from '@deck.gl/layers/polygon-layer/polygon-layer';
  export { default as GeoJsonLayer, GeoJsonLayerProps } from '@deck.gl/layers/geojson-layer/geojson-layer';
  export { default as TextLayer, TextLayerProps } from '@deck.gl/layers/text-layer/text-layer';
  export {
    default as SolidPolygonLayer,
    SolidPolygonLayerProps,
  } from '@deck.gl/layers/solid-polygon-layer/solid-polygon-layer';
  export { default as _MultiIconLayer } from '@deck.gl/layers/text-layer/multi-icon-layer/multi-icon-layer';
}
