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
  import { LayerProps } from '@deck.gl/core/lib/layer';
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
  export interface AccessorContext<D> {
    index: number;
    data: D;
    target: Array<number>;
  }
  export interface SimpleMeshLayerProps<D> extends LayerProps<D> {
    mesh: SimpleMesh | null;
    _instanced?: boolean; // _instanced is a hack to use world position instead of meter offsets in mesh
    texture?: Texture2D | HTMLImageElement | string | null;
    sizeScale?: number;
    wireframe?: boolean;
    material?: Material;
    getPosition?: ((d: D, context: AccessorContext<D>) => Position3D) | Position3D;
    getColor?: ((d: D, context: AccessorContext<D>) => RGBAColor) | RGBAColor;
    getOrientation?: ((d: D, context: AccessorContext<D>) => PitchYawRoll) | PitchYawRoll;
    getScale?: ((d: D, context: AccessorContext<D>) => ScaleXYZ) | ScaleXYZ; // Scaling factor on the mesh along each axis.
    getTranslation?: ((d: D, context: AccessorContext<D>) => TranslationXYZ) | TranslationXYZ; // Translation of the mesh along each axis. Offset from the center position given by getPosition. [x, y, z] in meters.
    getTransformMatrix?: ((d: D, context: AccessorContext<D>) => number[] | null) | number[] | null; // 4x4 column-major model matrix
  }
  export default class SimpleMeshLayer<D, P extends SimpleMeshLayerProps<D> = SimpleMeshLayerProps<D>> extends Layer<
    D,
    P
  > {
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
  import { LayerProps } from '@deck.gl/core/lib/layer';
  import { ScenegraphNode } from '@luma.gl/experimental';
  import { RGBAColor } from '@deck.gl/core/utils/color';
  import { Position3D, PitchYawRoll, ScaleXYZ, TranslationXYZ } from '@deck.gl/core/utils/positions';
  export interface ScenegraphLayerProps<D> extends LayerProps<D> {
    //Mesh
    scenegraph: URL | ScenegraphNode | Promise<ScenegraphNode>;

    //Render Options
    sizeScale?: number;
    _animations?: Object;
    getScene?: (scenegraph: ScenegraphNode) => ScenegraphNode;
    getAnimator?: (scenegraph: ScenegraphNode) => any;
    _lighting?: string;

    //Data Accessors
    getPosition?: ((d: D) => Position3D) | Position3D;
    getColor?: ((d: D) => RGBAColor) | RGBAColor;
    getOrientation?: ((d: D) => PitchYawRoll) | PitchYawRoll;
    getScale?: ((d: D) => ScaleXYZ) | ScaleXYZ; // Scaling factor on the mesh along each axis.
    getTranslation?: ((d: D) => TranslationXYZ) | TranslationXYZ; // Translation of the mesh along each axis. Offset from the center position given by getPosition. [x, y, z] in meters.
    getTransformMatrix?: ((d: D) => number[][]) | number[][]; // 4x4 column-major model matrix
    sizeMinPixels?: number;
    sizeMaxPixels?: number;

    //Experimental
    _imageBasedLightingEnvironment?: any;
  }
  export default class ScenegraphLayer<D, P extends ScenegraphLayerProps<D> = ScenegraphLayerProps<D>> extends Layer<
    D,
    P
  > {
    constructor(props: ScenegraphLayerProps<D>);
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
