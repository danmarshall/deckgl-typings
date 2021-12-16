//typings for @luma.gl/gltools v8.1.2
declare module '@luma.gl/gltools/polyfill/polyfill-vertex-array-object' {
  export function polyfillVertexArrayObject(gl: any): void;
}
declare module '@luma.gl/gltools/utils/utils' {
  export function assert(condition: any, message: any): void;
  export function isObjectEmpty(object: any): boolean;
  export function deepArrayEqual(x: any, y: any): boolean;
}
declare module '@luma.gl/gltools/utils/device-pixels' {
  export function cssToDeviceRatio(gl: any): number;
  export function cssToDevicePixels(
    gl: any,
    cssPixel: any,
    yInvert?: boolean
  ): {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  /**
   * Calulates device pixel ratio, used during context creation
   *
   * @param {boolean or Number} useDevicePixels - boolean or a Number
   * @return {Number} - device pixel ratio
   */
  export function getDevicePixelRatio(useDevicePixels: any): any;
}
declare module '@luma.gl/gltools/utils/webgl-checks' {
  export const ERR_CONTEXT = 'Invalid WebGLRenderingContext';
  export const ERR_WEBGL = 'Invalid WebGLRenderingContext';
  export const ERR_WEBGL2 = 'Requires WebGL2';
  export function isWebGL(gl: any): boolean;
  export function isWebGL2(gl: any): boolean;
  export function assertWebGLContext(gl: any): void;
  export function assertWebGL2Context(gl: any): void;
}
declare module '@luma.gl/gltools/utils' {
  export { assert, deepArrayEqual, isObjectEmpty } from '@luma.gl/gltools/utils/utils';
  export { cssToDevicePixels, cssToDeviceRatio, getDevicePixelRatio } from '@luma.gl/gltools/utils/device-pixels';
  export { isWebGL, isWebGL2 } from '@luma.gl/gltools/utils/webgl-checks';
  export const log: any;
}
declare module '@luma.gl/gltools/polyfill/get-parameter-polyfill' {
  export function getParameterPolyfill(gl: any, originalGetParameter: any, pname: any): any;
}
declare module '@luma.gl/gltools/polyfill/polyfill-table' {
  import { getParameterPolyfill } from '@luma.gl/gltools/polyfill/get-parameter-polyfill';
  export const WEBGL2_CONTEXT_POLYFILLS: {
    OES_vertex_array_object: {
      meta: {
        suffix: string;
      };
      createVertexArray: () => void;
      deleteVertexArray: () => void;
      bindVertexArray: () => void;
      isVertexArray: () => boolean;
    };
    ANGLE_instanced_arrays: {
      meta: {
        suffix: string;
      };
      vertexAttribDivisor(location: any, divisor: any): void;
      drawElementsInstanced: () => void;
      drawArraysInstanced: () => void;
    };
    WEBGL_draw_buffers: {
      meta: {
        suffix: string;
      };
      drawBuffers: () => void;
    };
    EXT_disjoint_timer_query: {
      meta: {
        suffix: string;
      };
      createQuery: () => void;
      deleteQuery: () => void;
      beginQuery: () => void;
      endQuery: () => void;
      getQuery(handle: any, pname: any): any;
      getQueryParameter(handle: any, pname: any): any;
      getQueryObject: () => void;
    };
  };
  export const WEBGL2_CONTEXT_OVERRIDES: {
    readBuffer: (gl: any, originalFunc: any, attachment: any) => void;
    getVertexAttrib: (gl: any, originalFunc: any, location: any, pname: any) => any;
    getProgramParameter: (gl: any, originalFunc: any, program: any, pname: any) => any;
    getInternalformatParameter: (gl: any, originalFunc: any, target: any, format: any, pname: any) => any;
    getTexParameter(gl: any, originalFunc: any, target: any, pname: any): any;
    getParameter: typeof getParameterPolyfill;
    hint(gl: any, originalFunc: any, pname: any, value: any): any;
  };
}
declare module '@luma.gl/gltools/polyfill/polyfill-context' {
  export default function polyfillContext(gl: any): any;
}
declare module '@luma.gl/gltools/state-tracker/webgl-parameter-tables' {
  export const GL_PARAMETER_DEFAULTS: {
    [x: number]: any;
  };
  export const GL_PARAMETER_SETTERS: {
    [x: number]: string | ((gl: any, value: any, key: any) => any) | ((gl: any, value: any) => any);
    framebuffer: (gl: any, framebuffer: any) => any;
    blend: (gl: any, value: any) => any;
    blendColor: (gl: any, value: any) => any;
    blendEquation: (gl: any, args: any) => void;
    blendFunc: (gl: any, args: any) => void;
    clearColor: (gl: any, value: any) => any;
    clearDepth: (gl: any, value: any) => any;
    clearStencil: (gl: any, value: any) => any;
    colorMask: (gl: any, value: any) => any;
    cull: (gl: any, value: any) => any;
    cullFace: (gl: any, value: any) => any;
    depthTest: (gl: any, value: any) => any;
    depthFunc: (gl: any, value: any) => any;
    depthMask: (gl: any, value: any) => any;
    depthRange: (gl: any, value: any) => any;
    dither: (gl: any, value: any) => any;
    derivativeHint: (gl: any, value: any) => void;
    frontFace: (gl: any, value: any) => any;
    mipmapHint: (gl: any, value: any) => any;
    lineWidth: (gl: any, value: any) => any;
    polygonOffsetFill: (gl: any, value: any) => any;
    polygonOffset: (gl: any, value: any) => any;
    sampleCoverage: (gl: any, value: any) => any;
    scissorTest: (gl: any, value: any) => any;
    scissor: (gl: any, value: any) => any;
    stencilTest: (gl: any, value: any) => any;
    stencilMask: (gl: any, value: any) => void;
    stencilFunc: (gl: any, args: any) => void;
    stencilOp: (gl: any, args: any) => void;
    viewport: (gl: any, value: any) => any;
  };
  export const GL_COMPOSITE_PARAMETER_SETTERS: {
    blendEquation: (gl: any, values: any, cache: any) => any;
    blendFunc: (gl: any, values: any, cache: any) => any;
    polygonOffset: (gl: any, values: any, cache: any) => any;
    sampleCoverage: (gl: any, values: any, cache: any) => any;
    stencilFuncFront: (gl: any, values: any, cache: any) => any;
    stencilFuncBack: (gl: any, values: any, cache: any) => any;
    stencilOpFront: (gl: any, values: any, cache: any) => any;
    stencilOpBack: (gl: any, values: any, cache: any) => any;
  };
  export const GL_HOOKED_SETTERS: {
    enable: (update: any, capability: any) => any;
    disable: (update: any, capability: any) => any;
    pixelStorei: (update: any, pname: any, value: any) => any;
    hint: (update: any, pname: any, hint: any) => any;
    bindFramebuffer: (update: any, target: any, framebuffer: any) => any;
    blendColor: (update: any, r: any, g: any, b: any, a: any) => any;
    blendEquation: (update: any, mode: any) => any;
    blendEquationSeparate: (update: any, modeRGB: any, modeAlpha: any) => any;
    blendFunc: (update: any, src: any, dst: any) => any;
    blendFuncSeparate: (update: any, srcRGB: any, dstRGB: any, srcAlpha: any, dstAlpha: any) => any;
    clearColor: (update: any, r: any, g: any, b: any, a: any) => any;
    clearDepth: (update: any, depth: any) => any;
    clearStencil: (update: any, s: any) => any;
    colorMask: (update: any, r: any, g: any, b: any, a: any) => any;
    cullFace: (update: any, mode: any) => any;
    depthFunc: (update: any, func: any) => any;
    depthRange: (update: any, zNear: any, zFar: any) => any;
    depthMask: (update: any, mask: any) => any;
    frontFace: (update: any, face: any) => any;
    lineWidth: (update: any, width: any) => any;
    polygonOffset: (update: any, factor: any, units: any) => any;
    sampleCoverage: (update: any, value: any, invert: any) => any;
    scissor: (update: any, x: any, y: any, width: any, height: any) => any;
    stencilMask: (update: any, mask: any) => any;
    stencilMaskSeparate: (update: any, face: any, mask: any) => any;
    stencilFunc: (update: any, func: any, ref: any, mask: any) => any;
    stencilFuncSeparate: (update: any, face: any, func: any, ref: any, mask: any) => any;
    stencilOp: (update: any, fail: any, zfail: any, zpass: any) => any;
    stencilOpSeparate: (update: any, face: any, fail: any, zfail: any, zpass: any) => any;
    viewport: (update: any, x: any, y: any, width: any, height: any) => any;
  };
  export const GL_PARAMETER_GETTERS: {
    [x: number]: (gl: any, key: any) => any;
  };
}
declare module '@luma.gl/gltools/state-tracker/track-context-state' {
  /**
   * Initialize WebGL state caching on a context
   * can be called multiple times to enable/disable
   * @param {WebGLRenderingContext} - context
   */
  export default function trackContextState(
    gl: any,
    {
      enable,
      copyState,
    }?: {
      enable?: boolean;
      copyState: any;
    }
  ): any;
  export function pushContextState(gl: any): void;
  export function popContextState(gl: any): void;
}
declare module '@luma.gl/gltools/state-tracker/unified-parameter-api' {
  export function setParameters(gl: any, values: any): void;
  export function getParameters(gl: any, parameters: any): any;
  export function resetParameters(gl: any): void;
  export function withParameters(gl: any, parameters: any, func: any): any;
}
declare module '@luma.gl/gltools/context/context' {
  export const ERR_CONTEXT = 'Invalid WebGLRenderingContext';
  export const ERR_WEBGL = 'Invalid WebGLRenderingContext';
  export const ERR_WEBGL2 = 'Requires WebGL2';
  export function createGLContext(options?: {}): any;
  export function instrumentGLContext(gl: any, options?: {}): any;
  /**
   * Provides strings identifying the GPU vendor and driver.
   * https://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/
   * @param {WebGLRenderingContext} gl - context
   * @return {Object} - 'vendor' and 'renderer' string fields.
   */
  export function getContextDebugInfo(gl: any): {
    vendor: any;
    renderer: any;
    vendorMasked: any;
    rendererMasked: any;
    version: any;
    shadingLanguageVersion: any;
  };
  /**
   * Resize the canvas' drawing buffer.
   *
   * Can match the canvas CSS size, and optionally also consider devicePixelRatio
   * Can be called every frame
   *
   * Regardless of size, the drawing buffer will always be scaled to the viewport, but
   * for best visual results, usually set to either:
   *  canvas CSS width x canvas CSS height
   *  canvas CSS width * devicePixelRatio x canvas CSS height * devicePixelRatio
   * See http://webgl2fundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html
   *
   * resizeGLContext(gl, {width, height, useDevicePixels})
   */
  export function resizeGLContext(gl: any, options?: {}): void;
}
declare module '@luma.gl/gltools' {
  export { default as polyfillContext } from '@luma.gl/gltools/polyfill/polyfill-context';
  export {
    getParameters,
    setParameters,
    resetParameters,
    withParameters,
  } from '@luma.gl/gltools/state-tracker/unified-parameter-api';
  export {
    default as trackContextState,
    pushContextState,
    popContextState,
  } from '@luma.gl/gltools/state-tracker/track-context-state';
  export {
    createGLContext,
    resizeGLContext,
    instrumentGLContext,
    getContextDebugInfo,
  } from '@luma.gl/gltools/context/context';
  export { log, cssToDeviceRatio, cssToDevicePixels, isWebGL, isWebGL2 } from '@luma.gl/gltools/utils';
}
