//typings for @deck.gl/mesh-layers v7.3.3
declare module '@deck.gl/mesh-layers/utils/matrix' {
	export const MATRIX_ATTRIBUTES: {
		size: number;
		accessor: string[];
		shaderAttributes: {
			instanceModelMatrix__LOCATION_0: {
				size: number;
				stride: number;
				offset: number;
			};
			instanceModelMatrix__LOCATION_1: {
				size: number;
				stride: number;
				offset: number;
			};
			instanceModelMatrix__LOCATION_2: {
				size: number;
				stride: number;
				offset: number;
			};
			instanceTranslation: {
				size: number;
				stride: number;
				offset: number;
			};
		};
		update(attribute: any, { startRow, endRow }: {
			startRow: any;
			endRow: any;
		}): void;
	};

}
declare module '@deck.gl/mesh-layers/simple-mesh-layer/simple-mesh-layer-vertex.glsl1' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/mesh-layers/simple-mesh-layer/simple-mesh-layer-fragment.glsl1' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/mesh-layers/simple-mesh-layer/simple-mesh-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/mesh-layers/simple-mesh-layer/simple-mesh-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/mesh-layers/simple-mesh-layer/simple-mesh-layer' {
	import { Layer } from '@deck.gl/core';
    import { LayerProps } from "@deck.gl/core/lib/layer";
    import Texture2D from "@luma.gl/webgl/classes/texture-2d";
    import PhongMaterial from "@luma.gl/core/materials/phong-material";
    import { RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";
    export interface SimpleMesh {
        positions: Float32Array;
        normals: Float32Array;
        texCoords: Float32Array;
	}
	type Coordinates = [number, number, number]
    export interface SimpleMeshLayerProps<D> extends LayerProps<D> {
        mesh: SimpleMesh;
        texture?: Texture2D | HTMLImageElement | string;
        sizeScale?: number;
        wireframe?: boolean;
        material?: PhongMaterial;
        getPosition?: (d: D) => [number, number];
        getColor?: ((d: D) => RGBAColor) | RGBAColor;
        getOrientation?: ((d: D) => Coordinates) | Coordinates;
        getScale?: ((d: D) => Coordinates) | Coordinates;
        getTranslation?: ((d: D) => Coordinates) | Coordinates;
        getTransformMatrix?: ((d: D) => number[][]) | number[][];
    }
	export default class SimpleMeshLayer<D> extends Layer<D> {
    	constructor(props: SimpleMeshLayerProps<D>);
		getShaders(): any;
		initializeState(): void;
		updateState({ props, oldProps, changeFlags }: {
			props: any;
			oldProps: any;
			changeFlags: any;
		}): void;
		finalizeState(): void;
		draw({ uniforms }: {
			uniforms: any;
		}): void;
		getModel(mesh: any): any;
		setTexture(image: any): void;
	}

}
declare module '@deck.gl/mesh-layers/scenegraph-layer/gltf-utils' {
	export function waitForGLTFAssets(gltfObjects: any): Promise<void>;

}
declare module '@deck.gl/mesh-layers/scenegraph-layer/scenegraph-layer-vertex.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/mesh-layers/scenegraph-layer/scenegraph-layer-fragment.glsl' {
	const _default: string;
	export default _default;

}
declare module '@deck.gl/mesh-layers/scenegraph-layer/scenegraph-layer' {
	import { Layer } from '@deck.gl/core';
    import { LayerProps } from "@deck.gl/core/lib/layer";
    import ScenegraphNode from "@luma.gl/core/scenegraph/nodes/scenegraph-node";
    import { RGBAColor } from "@deck.gl/aggregation-layers/utils/color-utils";
    type Coordinates = [number, number, number]
    export interface ScenegraphLayerProps<D> extends LayerProps<D> {
        scenegraph: URL | ScenegraphNode | Promise<ScenegraphNode>;
        sizeScale?: number;
        _animations?: Object;
        getScene?: Function;
        getAnimator?: Function;
        _lighting?: string;
        _imageBasedLightingEnvironment?: any
        getPosition?: Function;
        getColor?: ((d: D) => RGBAColor) | RGBAColor;
        getOrientation?: ((d: D) => Coordinates) | Coordinates;
        getScale?: ((d: D) => Coordinates) | Coordinates;
        getTranslation?: ((d: D) => Coordinates) | Coordinates;
        getTransformMatrix?: ((d: D) => number[][]) | number[][];
    }
	export default class ScenegraphLayer<D> extends Layer<D> {
    	constructor(props: ScenegraphLayerProps<D>);
		initializeState(): void;
		updateState(params: any): void;
		finalizeState(): void;
		_updateScenegraph(props: any): void;
		_applyAllAttributes(scenegraph: any): void;
		_applyAnimationsProp(scenegraph: any, animator: any, animationsProp: any): void;
		_deleteScenegraph(): void;
		addVersionToShader(source: any): any;
		getLoadOptions(): {
			gl: any;
			waitForFullLoad: boolean;
			imageBasedLightingEnvironment: any;
			modelOptions: {
				vs: any;
				fs: any;
				modules: string[];
				isInstanced: boolean;
			};
			useTangents: boolean;
		};
		updateAttributes(changedAttributes: any): void;
		draw({ moduleParameters, parameters, context }: {
			moduleParameters?: any;
			parameters?: {};
			context: any;
		}): void;
	}

}
declare module '@deck.gl/mesh-layers' {
	export { default as SimpleMeshLayer } from '@deck.gl/mesh-layers/simple-mesh-layer/simple-mesh-layer';
	export { default as ScenegraphLayer } from '@deck.gl/mesh-layers/scenegraph-layer/scenegraph-layer';

}
