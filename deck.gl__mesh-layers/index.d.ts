//typings for @deck.gl/mesh-layers v8.1.3
declare module '@deck.gl/mesh-layers/utils/matrix' {
  export const MATRIX_ATTRIBUTES: {
    size: number;
    accessor: string[];
    shaderAttributes: {
      instanceModelMatrix__LOCATION_0: {
        size: number;
        elementOffset: number;
      };
      instanceModelMatrix__LOCATION_1: {
        size: number;
        elementOffset: number;
      };
      instanceModelMatrix__LOCATION_2: {
        size: number;
        elementOffset: number;
      };
      instanceTranslation: {
        size: number;
        elementOffset: number;
      };
    };
    update(
      attribute: any,
      {
        startRow,
        endRow,
      }: {
        startRow: any;
        endRow: any;
      }
    ): void;
  };
  export function shouldComposeModelMatrix(viewport: any, coordinateSystem: any): boolean;
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
  import { LayerData, LayerDataAccessor, LayerProps, ObjectInfo} from '@deck.gl/core/lib/layer';
  import Texture2D from '@luma.gl/webgl/classes/texture-2d';
  import { RGBAColor } from '@deck.gl/core/utils/color';
  import { Position3D, PitchYawRoll, ScaleXYZ, TranslationXYZ } from '@deck.gl/core/utils/positions';
  export interface SimpleMesh {
    positions: Float32Array;
    normals: Float32Array;
    texCoords: Float32Array;
  }
  export interface Material {
    ambient?: number;
    diffuse?: number;
    shininess?: number;
    specularColor?: [number, number, number];
  }
  export type SimpleMeshLayerProps<D extends LayerData, E extends Array<any> = Array<any>> = LayerProps<D, E> & {
    mesh: SimpleMesh | null;
    _instanced?: boolean; // _instanced is a hack to use world position instead of meter offsets in mesh
    texture?: Texture2D | HTMLImageElement | string | null;
    sizeScale?: number;
    wireframe?: boolean;
    material?: Material;
    // Data Accessors
    getPosition?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => Position3D) | Position3D;
    getColor?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getOrientation?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => PitchYawRoll) | PitchYawRoll;
    getScale?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => ScaleXYZ) | ScaleXYZ; // Scaling factor on the mesh along each axis.
    getTranslation?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => TranslationXYZ) | TranslationXYZ; // Translation of the mesh along each axis. Offset from the center position given by getPosition. [x, y, z] in meters.
    getTransformMatrix?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number[] | null) | number[] | null; // 4x4 column-major model matrix
  };
  export default class SimpleMeshLayer<
    D extends LayerData<SimpleMeshLayerProps<any, E>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends Layer<D, SimpleMeshLayerProps<D, E> & P, S, E> {
    getShaders(): any;
    initializeState(params: any): void;
    finalizeState(): void;
    draw({ uniforms }: { uniforms: any }): void;
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
  import { LayerData, LayerDataAccessor, LayerProps, ObjectInfo } from '@deck.gl/core/lib/layer';
  import { ScenegraphNode } from '@luma.gl/experimental';
  import { RGBAColor } from '@deck.gl/core/utils/color';
  import { Position3D, PitchYawRoll, ScaleXYZ, TranslationXYZ } from '@deck.gl/core/utils/positions';

  export type ScenegraphLayerProps<D extends LayerData, E extends Array<any> = Array<any>> = LayerProps<D, E> & {
    //Mesh
    scenegraph: URL | ScenegraphNode | Promise<ScenegraphNode>;

    //Render Options
    sizeScale?: number;
    _animations?: Object;
    getScene?: (scenegraph: ScenegraphNode) => ScenegraphNode;
    getAnimator?: (scenegraph: ScenegraphNode) => any;
    _lighting?: string;

    //Data Accessors
    sizeMinPixels?: number;
    sizeMaxPixels?: number;
    getPosition?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => Position3D) | Position3D;
    getColor?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => RGBAColor) | RGBAColor;
    getOrientation?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => PitchYawRoll) | PitchYawRoll;
    getScale?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => ScaleXYZ) | ScaleXYZ; // Scaling factor on the mesh along each axis.
    getTranslation?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => TranslationXYZ) | TranslationXYZ; // Translation of the mesh along each axis. Offset from the center position given by getPosition. [x, y, z] in meters.
    getTransformMatrix?: ((d: LayerDataAccessor<D>, objectInfo: ObjectInfo<D, number>) => number[][]) | number[][]; // 4x4 column-major model matrix

    //Experimental
    _imageBasedLightingEnvironment?: any;
  };
  export default class ScenegraphLayer<
    D extends LayerData<ScenegraphLayerProps<any, E>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends Layer<D, ScenegraphLayerProps<D, E> & P, S, E> {
    initializeState(params: any): void;
    finalizeState(): void;
    _updateScenegraph(props: any): void;
    _applyAllAttributes(scenegraph: any): void;
    _applyAnimationsProp(scenegraph: any, animator: any, animationsProp: any): void;
    _deleteScenegraph(): void;
    getLoadOptions(): {
      gl: any;
      waitForFullLoad: boolean;
      imageBasedLightingEnvironment: any;
      modelOptions: {
        vs: string;
        fs: string;
        modules: any[];
        isInstanced: boolean;
        transpileToGLSL100: boolean;
      };
      useTangents: boolean;
    };
    updateAttributes(changedAttributes: any): void;
    draw({ moduleParameters, parameters, context }: { moduleParameters?: any; parameters?: {}; context: any }): void;
  }
}
declare module '@deck.gl/mesh-layers' {
  export { default as SimpleMeshLayer } from '@deck.gl/mesh-layers/simple-mesh-layer/simple-mesh-layer';
  export { default as ScenegraphLayer } from '@deck.gl/mesh-layers/scenegraph-layer/scenegraph-layer';
}
