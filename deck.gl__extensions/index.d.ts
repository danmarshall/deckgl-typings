//typings for @deck.gl/extensions v8.1.3
declare module '@deck.gl/extensions/brushing/shader-module' {
  const _default: {
    name: string;
    dependencies: any[];
    vs: string;
    fs: string;
    inject: {
      'vs:DECKGL_FILTER_GL_POSITION': string;
      'fs:DECKGL_FILTER_COLOR': string;
    };
    getUniforms: (opts: any) =>
      | {
          brushing_enabled?: undefined;
          brushing_radius?: undefined;
          brushing_target?: undefined;
          brushing_mousePos?: undefined;
        }
      | {
          brushing_enabled: boolean;
          brushing_radius: any;
          brushing_target: any;
          brushing_mousePos: any;
        };
  };
  export default _default;
}
declare module '@deck.gl/extensions/brushing/brushing' {
  import { LayerExtension } from '@deck.gl/core';
  export default class BrushingExtension extends LayerExtension {
    getShaders(extension: any): {
      modules: {
        name: string;
        dependencies: any[];
        vs: string;
        fs: string;
        inject: {
          'vs:DECKGL_FILTER_GL_POSITION': string;
          'fs:DECKGL_FILTER_COLOR': string;
        };
        getUniforms: (opts: any) =>
          | {
              brushing_enabled?: undefined;
              brushing_radius?: undefined;
              brushing_target?: undefined;
              brushing_mousePos?: undefined;
            }
          | {
              brushing_enabled: boolean;
              brushing_radius: any;
              brushing_target: any;
              brushing_mousePos: any;
            };
      }[];
    };
    initializeState(context: any, extension: any): void;
    finalizeState(extension: any): void;
    useConstantTargetPositions(attribute: any): void;
  }
}
declare module '@deck.gl/extensions/data-filter/shader-module' {
  export const shaderModule: {
    name: string;
    vs: string;
    fs: string;
    inject: {
      'vs:#main-start': string;
      'vs:DECKGL_FILTER_SIZE': string;
      'fs:DECKGL_FILTER_COLOR': string;
    };
    getUniforms: (opts: any) => {};
  };
  export const shaderModule64: {
    name: string;
    vs: string;
    fs: string;
    inject: {
      'vs:#main-start': string;
      'vs:DECKGL_FILTER_SIZE': string;
      'fs:DECKGL_FILTER_COLOR': string;
    };
    getUniforms: (opts: any) => {};
  };
}
declare module '@deck.gl/extensions/data-filter/data-filter' {
  import { LayerExtension } from '@deck.gl/core';
  export default class DataFilterExtension extends LayerExtension {
    constructor({ filterSize, fp64 }?: { filterSize?: number; fp64?: boolean });
    getShaders(extension: any): {
      modules: {
        name: string;
        vs: string;
        fs: string;
        inject: {
          'vs:#main-start': string;
          'vs:DECKGL_FILTER_SIZE': string;
          'fs:DECKGL_FILTER_COLOR': string;
        };
        getUniforms: (opts: any) => {};
      }[];
      defines: {
        DATAFILTER_TYPE: any;
        DATAFILTER_DOUBLE: boolean;
      };
    };
    initializeState(context: any, extension: any): void;
  }
}
declare module '@deck.gl/extensions/fp64/project64.glsl' {
  const _default: string;
  export default _default;
}
declare module '@deck.gl/extensions/fp64/project64' {
  const _default: {
    name: string;
    dependencies: any[];
    vs: string;
    getUniforms: typeof getUniforms;
  };
  export default _default;
  function getUniforms(opts?: {}): any;
}
declare module '@deck.gl/extensions/fp64/fp64' {
  import { LayerExtension } from '@deck.gl/core';
  export default class Fp64Extension extends LayerExtension {
    getShaders(opts: any): {
      modules: {
        name: string;
        dependencies: any[];
        vs: string;
        getUniforms: (opts?: {}) => any;
      }[];
    };
  }
}
declare module '@deck.gl/extensions/path-style/shaders.glsl' {
  export const dashShaders: {
    inject: {
      'vs:#decl': string;
      'vs:#main-end': string;
      'fs:#decl': string;
      'fs:#main-start': string;
    };
  };
  export const offsetShaders: {
    inject: {
      'vs:#decl': string;
      'vs:DECKGL_FILTER_SIZE': string;
      'vCornerOffset = offsetVec;': string;
      'fs:#main-start': string;
    };
  };
}
declare module '@deck.gl/extensions/path-style/path-style' {
  import { LayerExtension } from '@deck.gl/core';
  export default class PathStyleExtension extends LayerExtension {
    constructor({
      dash,
      highPrecisionDash,
      offset,
    }?: {
      dash?: boolean;
      highPrecisionDash?: boolean;
      offset?: boolean;
    });
    isEnabled(layer: any): any;
    getShaders(extension: any): {};
    initializeState(context: any, extension: any): void;
    updateState(params: any, extension: any): void;
  }
}
declare module '@deck.gl/extensions/fill-style/fill-style' {
  import { LayerExtension } from '@deck.gl/core';
  export default class FillStyleExtension extends LayerExtension {
    constructor({ pattern }?: { pattern?: boolean });
    isEnabled(layer: any): any;
    getShaders(extension: any): {};
    initializeState(context: any, extension: any): void;
    updateState(params: any, extension: any): void;
    draw(params: any, extension: any): void;
    finalizeState(): void;
  }
}
declare module '@deck.gl/extensions' {
  export { default as BrushingExtension } from '@deck.gl/extensions/brushing/brushing';
  export { default as DataFilterExtension } from '@deck.gl/extensions/data-filter/data-filter';
  export { default as Fp64Extension } from '@deck.gl/extensions/fp64/fp64';
  export { default as PathStyleExtension } from '@deck.gl/extensions/path-style/path-style';
  export { default as project64 } from '@deck.gl/extensions/fp64/project64';
  export { default as FillStyleExtension } from '@deck.gl/extensions/fill-style/fill-style';
}
