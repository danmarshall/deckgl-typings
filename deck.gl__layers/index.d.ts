//typings for @deck.gl/layers v7.3.3
declare module '@deck.gl/layers/arc-layer/arc-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/arc-layer/arc-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/arc-layer/arc-layer' {
    import { LayerProps } from "@deck.gl/core/lib/layer";
    import { RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";
    export interface ArcLayerProps<D> extends LayerProps<D> {
        widthUnits?: string;
        widthScale?: number;
        widthMinPixels?: number;
        widthMaxPixels?: number;
        getSourcePosition?: (d: D) => [number, number];
        getTargetPosition?: (d: D) => [number, number];
        getSourceColor?: ((d: D) => RGBAColor) | RGBAColor;
        getTargetColor?: ((d: D) => RGBAColor) | RGBAColor;
        getWidth?: ((d: D) => number) | number;
        getHeight?: ((d: D) => number) | number;
        getTilt?: ((d: D) => number) | number;
    }
	import { Layer } from '@deck.gl/core';
	export default class ArcLayer<D> extends Layer<D> {
		constructor(props: ArcLayerProps<D>)
		getShaders(): any;
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
		calculateInstancePositions(attribute: any, { startRow, endRow }: {
			startRow: any;
			endRow: any;
		}): void;
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
    export interface BitmapLayerProps<D> extends LayerProps<D> {
        bitmap: any;
        bounds: [number, number, number, number]
			| [[number, number], [number, number], [number, number], [number, number]];
        desaturate: number;
        transparentColor: RGBAColor;
        tintColor: [number, number, number];
    }
    import { LayerProps } from "@deck.gl/core/lib/layer";
    import { RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";
	export default class BitmapLayer<D> extends Layer<D> {
		constructor(props: BitmapLayerProps<D>)
		getShaders(): any;
		initializeState(): void;
		updateState({ props, oldProps, changeFlags }: {
			props: any;
			oldProps: any;
			changeFlags: any;
		}): void;
		finalizeState(): void;
		calculatePositions(attributes: any): void;
		_getModel(gl: any): any;
		draw(opts: any): void;
		loadTexture(image: any): void;
	}

}
declare module '@deck.gl/layers/elevation' {
    export type ElevationRange = [number, number];
    export type ElevationDomain = [number, number];

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
	 * @param canvasWidth {Number} max width of canvas
	 * @param mapping {object} old mapping
	 * @returns {{mapping: {'/icon/1': {url, width, height, ...}},, canvasHeight: {Number}}}
	 */
	export function buildMapping({ icons, buffer, mapping, xOffset, yOffset, canvasWidth }: {
		icons: any;
		buffer: any;
		mapping?: {};
		xOffset?: number;
		yOffset?: number;
		canvasWidth: any;
	}): {
		mapping: {};
		xOffset: number;
		yOffset: number;
		canvasWidth: any;
		canvasHeight: number;
	};
	export function getDiffIcons(data: any, getIcon: any, cachedIcons: any): {};
	export default class IconManager {
		constructor(gl: any, { onUpdate }: {
			onUpdate?: () => void;
		});
		finalize(): void;
		getTexture(): any;
		getIconMapping(icon: any): any;
		setProps({ autoPacking, iconAtlas, iconMapping, data, getIcon }: {
			autoPacking: any;
			iconAtlas: any;
			iconMapping: any;
			data: any;
			getIcon: any;
		}): void;
		_updateIconAtlas(iconAtlas: any): void;
		_updateAutoPacking(data: any): void;
		_loadIcons(icons: any): void;
	}

}
declare module '@deck.gl/layers/icon-layer/icon-layer' {
	import { Layer } from '@deck.gl/core';
	import { LayerProps } from '@deck.gl/core/lib/layer';
	import { Position } from '@deck.gl/core/utils/positions';
	import Texture2D from '@luma.gl/webgl/classes/texture-2d';
    import { RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";

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

	export interface IconLayerProps<D> extends LayerProps<D> {
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
		getPosition?: ((x: D) => Position),

		/*
		*  returns icon name as a string
		*/
		getIcon?: ((x: D) => string) | string,

		/*
		*  returns color of the icon in [r, g, b, a].
		*  Only works on icons with mask: true.
		*/
		getColor?: ((x: D) => RGBAColor) | RGBAColor,

		/*
		*  returns icon size multiplier as a number
		*/
		getSize?: ((x: D) => number) | number,

		/*
		*  returns rotating angle (in degree) of the icon.
		*/
		getAngle?: ((x: D) => number) | number,
	}

	export default class IconLayer<D> extends Layer<D> {
		constructor(props: IconLayerProps<D>);
		getShaders(): any;
		initializeState(): void;
		updateState({ oldProps, props, changeFlags }: {
			oldProps: any;
			props: any;
			changeFlags: any;
		}): void;
		finalizeState(): void;
		draw({ uniforms }: {
			uniforms: any;
		}): void;
		_getModel(gl: any): any;
		_onUpdate(): void;
		getInstanceOffset(icon: any): number[];
		getInstanceColorMode(icon: any): 0 | 1;
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
	import { LayerProps } from '@deck.gl/core/lib/layer';
    import { RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";
	export interface LineLayerProps<D> extends LayerProps<D> {
		getColor?: ((d: D) => RGBAColor) | RGBAColor;
		getSourcePosition?: (d: D) => [number, number];
		getTargetPosition?: (d: D) => [number, number];
		getWidth?: ((d: D) => number) | number;
		widthMaxPixels?: number;
		widthMinPixels?: number;
		widthScale?: number;
		widthUnits?: 'meters' | 'pixels';
	}
	export default class LineLayer<D> extends Layer<D> {
		constructor(props: LineLayerProps<D>);
		getShaders(): any;
		initializeState(): void;
		updateState({ props, oldProps, changeFlags }: {
			props: LineLayerProps<D>;
			oldProps: LineLayerProps<D>;
			changeFlags: any;
		}): void;
		draw({ uniforms }: {
			uniforms: any;
		}): void;
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
    import { LayerProps } from "@deck.gl/core/lib/layer";
    import { RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";
    import PhongMaterial from "@luma.gl/core/materials/phong-material";
    export interface PointCloudLayerProps<D> extends LayerProps<D> {
        sizeUnits?: string;
        pointSize?: number;
        material?: PhongMaterial;
        getPosition?: (d: D) => [number, number];
        getNormal?: ((d: D) => [number, number, number]) | [number, number, number];
        getColor?: ((d: D) => RGBAColor) | RGBAColor;
    }
	export default class PointCloudLayer<D> extends Layer<D> {
    	constructor(props: PointCloudLayerProps<D>);
		getShaders(id: any): any;
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
    import { LayerProps } from "@deck.gl/core/lib/layer";
    import { RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";
    export interface ScatterplotLayerProps<D> extends LayerProps<D> {
        radiusScale?: number;
        lineWidthUnits?: string;
        lineWidthScale?: number;
        stroked?: boolean;
        filled?: boolean;
        radiusMinPixels?: number;
        radiusMaxPixels?: number;
        lineWidthMinPixels?: number;
        lineWidthMaxPixels?: number;
        getPosition?: (d: D) => [number, number];
        getRadius?: ((d: D) => number) | number;
        getColor?: ((d: D) => RGBAColor) | RGBAColor;
        getFillColor?: ((d: D) => RGBAColor) | RGBAColor;
        getLineColor?: ((d: D) => RGBAColor) | RGBAColor;
        getLineWidth?: ((d: D) => number) | number;
    }
	export default class ScatterplotLayer<D> extends Layer<D> {
    	constructor(props: ScatterplotLayerProps<D>);
		getShaders(id: any): any;
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
    import { LayerProps } from "@deck.gl/core/lib/layer";
    import PhongMaterial from "@luma.gl/core/materials/phong-material";
    import { RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";
	export interface ColumnLayerProps<D> extends LayerProps<D> {
        diskResolution?: number;
        radius?: number;
        angle?: number;
        vertices?: [number, number][];
        offset?: number;
        coverage?: number;
        elevationScale?: number;
        filled?: boolean;
        stroked?: boolean;
        extruded?: boolean;
        wireframe?: boolean;
        lineWidthUnits?: string;
        lineWidthScale?: boolean;
        lineWidthMinPixels?: number;
        lineWidthMaxPixels?: number;
        material?: PhongMaterial;
        getPosition?: (d: D) => [number, number];
        getFillColor?: ((d: D) => RGBAColor) | RGBAColor;
        getLineColor?: ((d: D) => RGBAColor) | RGBAColor;
        getElevation?: ((d: D) => number) | number;
        getLineWidth?: ((d: D) => number) | number;
    }
	export default class ColumnLayer<D> extends Layer<D> {
		constructor(props: ColumnLayerProps<D>);
		getShaders(): any;
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
		getGeometry(diskResolution: any, vertices: any): ColumnGeometry;
		_getModel(gl: any): any;
		_updateGeometry({ diskResolution, vertices }: {
			diskResolution: any;
			vertices: any;
		}): void;
		draw({ uniforms }: {
			uniforms: any;
		}): void;
	}

}
declare module '@deck.gl/layers/column-layer/grid-cell-layer' {
	import ColumnLayer from '@deck.gl/layers/column-layer/column-layer';
    import { LayerProps } from "@deck.gl/core/lib/layer";
    import PhongMaterial from "@luma.gl/core/materials/phong-material";
    import { RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";
    export interface GridCellLayerProps<D> extends LayerProps<D> {
        cellSize?: number;
        coverage?: number;
        elevationScale?: number;
        extruded?: boolean;
        material?: PhongMaterial;
        getPosition?: (d: D) => [number, number];
        getColor?: ((d: D) => RGBAColor) | RGBAColor;
        getElevation?: ((d: D) => number) | number;
    }
	export default class GridCellLayer<D> extends ColumnLayer<D> {
    	constructor(props: GridCellLayerProps<D>);
		getGeometry(diskResolution: any): any;
		draw({ uniforms }: {
			uniforms: any;
		}): void;
	}

}
declare module '@deck.gl/layers/path-layer/path-tesselator' {
	export const Tesselator: any;
	export default class PathTesselator extends Tesselator {
		constructor({ data, getGeometry, positionFormat, fp64 }: {
			data: any;
			getGeometry: any;
			positionFormat: any;
			fp64: any;
		});
		get(attributeName: any): any;
		getGeometrySize(path: any): any;
		updateGeometryAttributes(path: any, context: any): void;
		getPathLength(path: any): any;
		getPointOnPath(path: any, index: any): any;
		isClosed(path: any): boolean;
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
	import { Layer } from '@deck.gl/core';
    import { LayerProps } from "@deck.gl/core/lib/layer";
    import { RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";
    type TypedArray = Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Uint8ClampedArray
		| Float32Array | Float64Array;
    type LayerPath = ([number, number])[] |([number, number, number])[] | TypedArray
    export interface PathLayerProps<D> extends LayerProps<D> {
        widthUnits?: string;
        widthScale?: number;
        widthMinPixels?: number;
        widthMaxPixels?: number;
        rounded?: boolean;
        positionFormat?: "XYZ" | "XY";
        billboard?: boolean;
        miterLimit?: number;
        dashJustified?: boolean;
        getPath?: (d: D) => LayerPath;
        getColor?: (d: D) => RGBAColor | RGBAColor;
        getWidth?: (path: LayerPath) => number | number;
        getDashArray?: (path: LayerPath) => [number, number] | [number, number];
    }
	export default class PathLayer<D> extends Layer<D> {
    	constructor(props: PathLayerProps<D>);
		getShaders(): any;
		initializeState(params?: any): void;
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
	export function getVertexCount(polygon: any, positionSize: any): any;
	/**
	 * Normalize any polygon representation into the "complex flat" format
	 * @param {Array|Object} polygon
	 * @param {Number} positionSize - size of a position, 2 (xy) or 3 (xyz)
	 * @param {Number} [vertexCount] - pre-computed vertex count in the polygon.
	 *   If provided, will skip counting.
	 * @return {Object} - {positions: <Float64Array>, holeIndices: <Array|null>}
	 */
	export function normalize(polygon: any, positionSize: any, vertexCount: any): {
		positions: Float64Array;
		holeIndices: any[];
	};
	export function getSurfaceIndices(normalizedPolygon: any, positionSize: any): any;

}
declare module '@deck.gl/layers/solid-polygon-layer/polygon-tesselator' {
	export const Tesselator: any;
	export default class PolygonTesselator extends Tesselator {
		constructor({ data, getGeometry, fp64, positionFormat, IndexType }: {
			data: any;
			getGeometry: any;
			fp64: any;
			positionFormat: any;
			IndexType?: Uint32ArrayConstructor;
		});
		get(attributeName: any): any;
		getGeometrySize(polygon: any): any;
		updateGeometryAttributes(polygon: any, context: any): void;
		_updateIndices(polygon: any, { geometryIndex, vertexStart: offset, indexStart }: {
			geometryIndex: any;
			vertexStart: any;
			indexStart: any;
		}): void;
		_updatePositions(polygon: any, { vertexStart, geometrySize }: {
			vertexStart: any;
			geometrySize: any;
		}): void;
	}

}
declare module '@deck.gl/layers/solid-polygon-layer/solid-polygon-layer-vertex-main.glsl' {
	const _default: "\nattribute vec2 vertexPositions;\nattribute float vertexValid;\n\nuniform bool extruded;\nuniform bool isWireframe;\nuniform float elevationScale;\nuniform float opacity;\n\nvarying vec4 vColor;\nvarying float isValid;\n\nstruct PolygonProps {\n  vec4 fillColors;\n  vec4 lineColors;\n  vec3 positions;\n  vec3 nextPositions;\n  vec3 pickingColors;\n  vec2 positions64xyLow;\n  vec2 nextPositions64xyLow;\n  float elevations;\n};\n\nvec3 project_offset_normal(vec3 vector) {\n  if (project_uCoordinateSystem == COORDINATE_SYSTEM_LNG_LAT ||\n    project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS ||\n    project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT_AUTO_OFFSET) {\n    // normals generated by the polygon tesselator are in lnglat offsets instead of meters\n    return normalize(vector * project_uCommonUnitsPerWorldUnit);\n  }\n  return project_normal(vector);\n}\n\nvoid calculatePosition(PolygonProps props) {\n  vec3 pos;\n  vec2 pos64xyLow;\n  vec3 normal;\n  vec4 colors = isWireframe ? props.lineColors : props.fillColors;\n\n  geometry.worldPosition = props.positions;\n  geometry.worldPositionAlt = props.nextPositions;\n\n#ifdef IS_SIDE_VERTEX\n  pos = mix(props.positions, props.nextPositions, vertexPositions.x);\n  pos64xyLow = mix(props.positions64xyLow, props.nextPositions64xyLow, vertexPositions.x);\n  isValid = vertexValid;\n#else\n  pos = props.positions;\n  pos64xyLow = props.positions64xyLow;\n  isValid = 1.0;\n#endif\n\n  if (extruded) {\n    pos.z += props.elevations * vertexPositions.y * elevationScale;\n    \n#ifdef IS_SIDE_VERTEX\n    normal = vec3(props.positions.y - props.nextPositions.y, props.nextPositions.x - props.positions.x, 0.0);\n    normal = project_offset_normal(normal);\n#else\n    normal = vec3(0.0, 0.0, 1.0);\n#endif\n    geometry.normal = normal;\n  }\n\n  gl_Position = project_position_to_clipspace(pos, pos64xyLow, vec3(0.), geometry.position);\n  DECKGL_FILTER_GL_POSITION(gl_Position, geometry);\n\n  if (extruded) {\n    vec3 lightColor = lighting_getLightColor(colors.rgb, project_uCameraPosition, geometry.position.xyz, normal);\n    vColor = vec4(lightColor, colors.a * opacity);\n  } else {\n    vColor = vec4(colors.rgb, colors.a * opacity);\n  }\n  DECKGL_FILTER_COLOR(vColor, geometry);\n\n  // Set color to be rendered to picking fbo (also used to check for selection highlight).\n  picking_setPickingColor(props.pickingColors);\n}\n";
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
	import { Material } from '@luma.gl/core';
	import { Layer } from '@deck.gl/core';
    import { LayerProps } from '@deck.gl/core/lib/layer';
    import { RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";
	export type Polygon = number[][] | number[][][];
	export interface SolidPolygonLayerProps<D> extends LayerProps<D> {
		filled?: boolean;
		extruded?: boolean;
		material?: Material;
		positionFormat?: "XYZ" | "XY";
		wireframe?: boolean;
		elevationScale?: number;
		getElevation?: ((x: D) => number) | number;
		getFillColor?: ((x: D) => RGBAColor) | RGBAColor;
		getLineColor?: ((x: D) => RGBAColor) | RGBAColor;
		getPolygon?: (x: D) => Polygon;
	}
	export default class SolidPolygonLayer<D> extends Layer<D> {
		constructor(props: SolidPolygonLayerProps<D>);
		getShaders(vs: any): any;
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
	export function replaceInRange({ data, getIndex, dataRange, replace }: {
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
	import { Polygon } from '@deck.gl/layers/solid-polygon-layer/solid-polygon-layer';
	export { Polygon };
    import PhongMaterial from "@luma.gl/core/materials/phong-material";
    import { RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";
    import { CompositeLayerProps } from "@deck.gl/core/lib/composite-layer";
	export interface PolygonLayerProps<D> extends CompositeLayerProps<D> {
		data: D[];
		elevationScale?: number;
		extruded: boolean;
		filled?: boolean;
		lineDashJustified?: boolean;
		lineJointRounded?: boolean;
		lineMiterLimit?: number;
		lineWidthMaxPixels?: number;
		lineWidthMinPixels?: number;
		lineWidthScale?: boolean;
		lineWidthUnits?: string;
		material?: PhongMaterial;
		positionFormat?: "XYZ" | "XY";
		stroked: boolean;
		wireframe?: boolean;
		getElevation?: ((x: D) => number) | number;
		getFillColor?: ((x: D) => RGBAColor) | RGBAColor;
		getLineColor?: ((x: D) => RGBAColor) | RGBAColor;
		getLineWidth?: ((x: D) => number) | number;
		getPolygon?: (x: D) => Polygon;
	}
	export default class PolygonLayer<D> extends CompositeLayer<D> {
		constructor(props: PolygonLayerProps<D>);
		initializeState(): void;
		updateState({ oldProps, props, changeFlags }: {
			oldProps: any;
			props: any;
			changeFlags: any;
		}): void;
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
	export function separateGeojsonFeatures(features: any, wrapFeature: any, dataRange?: {}): {
		pointFeatures: any[];
		lineFeatures: any[];
		polygonFeatures: any[];
		polygonOutlineFeatures: any[];
	};
	export function validateGeometry(type: any, coordinates: any): boolean;

}
declare module '@deck.gl/layers/geojson-layer/geojson-layer' {
	import { CompositeLayer } from '@deck.gl/core';
    import { CompositeLayerProps } from "@deck.gl/core/lib/composite-layer";
    import PhongMaterial from "@luma.gl/core/materials/phong-material";
    import { RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";
    export interface GeoJsonLayerProps<D> extends CompositeLayerProps<D> {
        filled?: boolean;
        stroked?: boolean;
        extruded?: boolean;
        wireframe?: boolean;
        lineWidthUnits?: string;
        lineWidthScale?: number;
        lineWidthMinPixels?: number;
        lineWidthMaxPixels?: number;
        lineJointRounded?: boolean;
        lineMiterLimit?: number;
        elevationScale?: number;
        pointRadiusScale?: number;
        pointRadiusMinPixels?: number;
        pointRadiusMaxPixels?: number;
        lineDashJustified?: boolean;
        material?: PhongMaterial;
        getLineColor?:  ((d: D) => RGBAColor) | RGBAColor;
        getFillColor?: ((d: D) => RGBAColor) | RGBAColor;
        getRadius?: ((d: D) => number) | number;
        getLineWidth?: ((d: D) => number) | number;
        getElevation?: ((d: D) => number) | number;
        getLineDashArray?: ((d: D) => [number, number]) | [number, number];
    }
	export default class GeoJsonLayer<D> extends CompositeLayer<D> {
    	constructor(props: GeoJsonLayerProps<D>);
		initializeState(): void;
		updateState({ props, changeFlags }: {
			props: any;
			changeFlags: any;
		}): void;
		renderLayers(): any[];
	}

}
declare module '@deck.gl/layers/text-layer/multi-icon-layer/multi-icon-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/text-layer/multi-icon-layer/multi-icon-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/layers/text-layer/multi-icon-layer/multi-icon-layer' {
	import IconLayer from '@deck.gl/layers/icon-layer/icon-layer';
	export default class MultiIconLayer<D> extends IconLayer<D> {
		getShaders(): any;
		initializeState(): void;
		updateState(updateParams: any): void;
		draw({ uniforms }: {
			uniforms: any;
		}): void;
		calculateInstanceOffsets(attribute: any, { startRow, endRow }: {
			startRow: any;
			endRow: any;
		}): void;
		calculateInstancePickingColors(attribute: any, { startRow, endRow }: {
			startRow: any;
			endRow: any;
		}): void;
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
	export function buildMapping({ characterSet, getFontWidth, fontHeight, buffer, maxCanvasWidth, mapping, xOffset, yOffset }: {
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
	export function transformRow(row: any, iconMapping: any, lineHeight: any): {
		characters: unknown[];
		rowWidth: number;
		rowHeight: number;
	};
	/**
	 * Transform a text paragraph to an array of characters, each character contains
	 * @param paragraph {String}
	 * @param lineHeight {Number} css line-height
	 * @param iconMapping {Object} character mapping table for retrieving a character from font atlas
	 * @param transformCharacter {Function} callback to transform a single character
	 * @param transformedData {Array} output transformed data array, each datum contains
	 *   - text: character
	 *   - index: character index in the paragraph
	 *   - offsetLeft: x offset in the row,
	 *   - offsetTop: y offset in the paragraph
	 *   - size: [width, height] size of the paragraph
	 *   - rowSize: [rowWidth, rowHeight] size of the row
	 *   - len: length of the paragraph
	 */
	export function transformParagraph(paragraph: any, lineHeight: any, iconMapping: any, transformCharacter: any, transformedData: any): void;

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
	export const DEFAULT_FONT_FAMILY = "Monaco, monospace";
	export const DEFAULT_FONT_WEIGHT = "normal";
	export const DEFAULT_FONT_SIZE = 64;
	export const DEFAULT_BUFFER = 2;
	export const DEFAULT_CUTOFF = 0.25;
	export const DEFAULT_RADIUS = 3;
	export default class FontAtlasManager {
		constructor(gl: any);
		finalize(): void;
		readonly texture: any;
		readonly mapping: any;
		readonly scale: number;
		setProps(props?: {}): void;
		_updateTexture({ data: canvas, width, height }: {
			data: any;
			width: any;
			height: any;
		}): void;
		_generateFontAtlas(key: any, characterSet: any, cachedFontAtlas: any): {
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
    import { RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";
    import { CompositeLayerProps } from "@deck.gl/core/lib/composite-layer";
	export type TextAnchor = 'start' | 'middle' | 'end';
	export type AlignmentBaseline = 'top' | 'center' | 'bottom';
	export interface TextLayerProps<D>  extends CompositeLayerProps<D> {
		characterSet?: string | string[];
		fontFamily?: string;
		fontSettings?: FontSettings;
		fontWeight?: number | string;
		fp64?: boolean;
		getColor?: ((x: D) => RGBAColor) | RGBAColor;
		getText?: (x: D) => string;
		getPosition?: (x: D) => [number, number];
		getSize?: ((x: D) => number) | number;
		getAngle?: ((x: D) => number) | number;
		getTextAnchor?: (x: D) => TextAnchor;
		getAlignmentBaseline?: (x: D) => AlignmentBaseline;
		getPixelOffset?: (x: D) => number[];
		sizeScale?: number;
	}
	export default class TextLayer<D> extends CompositeLayer<D> {
		constructor(props: TextLayerProps<D>);
		initializeState(): void;
		updateState({ props, oldProps, changeFlags }: {
			props: any;
			oldProps: any;
			changeFlags: any;
		}): void;
		finalizeState(): void;
		updateFontAtlas({ oldProps, props }: {
			oldProps: any;
			props: any;
		}): void;
		fontChanged(oldProps: any, props: any): boolean;
		getPickingInfo({ info }: {
			info: any;
		}): any;
		transformStringToLetters(dataRange?: {}): any[];
		getAnchorXFromTextAnchor(getTextAnchor: any): (x: any) => any;
		getAnchorYFromAlignmentBaseline(getAlignmentBaseline: any): (x: any) => any;
		renderLayers(): any;
	}

}
declare module '@deck.gl/layers' {
	export { default as ArcLayer } from '@deck.gl/layers/arc-layer/arc-layer';
	export { default as BitmapLayer } from '@deck.gl/layers/bitmap-layer/bitmap-layer';
	export { default as IconLayer } from '@deck.gl/layers/icon-layer/icon-layer';
	export { default as LineLayer } from '@deck.gl/layers/line-layer/line-layer';
	export { default as PointCloudLayer } from '@deck.gl/layers/point-cloud-layer/point-cloud-layer';
	export { default as ScatterplotLayer } from '@deck.gl/layers/scatterplot-layer/scatterplot-layer';
	export { default as ColumnLayer } from '@deck.gl/layers/column-layer/column-layer';
	export { default as GridCellLayer } from '@deck.gl/layers/column-layer/grid-cell-layer';
	export { default as PathLayer } from '@deck.gl/layers/path-layer/path-layer';
	export { default as PolygonLayer } from '@deck.gl/layers/polygon-layer/polygon-layer';
	export { default as GeoJsonLayer } from '@deck.gl/layers/geojson-layer/geojson-layer';
	export { default as TextLayer } from '@deck.gl/layers/text-layer/text-layer';
	export { default as SolidPolygonLayer } from '@deck.gl/layers/solid-polygon-layer/solid-polygon-layer';
	export { default as _MultiIconLayer } from '@deck.gl/layers/text-layer/multi-icon-layer/multi-icon-layer';

}
