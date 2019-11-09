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
    export interface SimpleMeshLayerProps extends LayerProps {
        mesh: any;
        texture?: any;
        sizeScale?: number;
        wireframe?: boolean;
        material?: Object;
        getPosition?: Function;
        getColor?: Function | Array<any>;
        getOrientation?: Function | Array<any>;
        getScale?: Function | Array<any>;
        getTranslation?: Function | Array<any>;
        getTransformMatrix?: Function | Array<any>;
    }
	export default class SimpleMeshLayer extends Layer {
    	constructor(props: SimpleMeshLayerProps);
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
    export interface ScenegraphLayerProps extends LayerProps {
        scenegraph: URL | Object | Promise<any>;
        sizeScale?: number;
        _animations?: Object;
        getScene?: Function;
        getAnimator?: Function;
        _lighting?: string;
        _imageBasedLightingEnvironment?: any
        getPosition?: Function;
        getColor?: Function | Array<any>;
        getOrientation?: Function | Array<any>;
        getScale?: Function | Array<any>;
        getTranslation?: Function | Array<any>;
        getTransformMatrix?: Function | Array<any>;
    }
	export default class ScenegraphLayer extends Layer {
    	constructor(props: ScenegraphLayerProps);
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
