//typings for @luma.gl/core v8.1.2
declare module '@luma.gl/core' {
  export {
    createGLContext,
    instrumentGLContext,
    isWebGL,
    isWebGL2,
    getParameters,
    setParameters,
    withParameters,
    resetParameters,
    cssToDeviceRatio,
    cssToDevicePixels,
  } from '@luma.gl/gltools';
  export {
    lumaStats,
    FEATURES,
    hasFeature,
    hasFeatures,
    Buffer,
    Program,
    Framebuffer,
    Renderbuffer,
    Texture2D,
    TextureCube,
    clear,
    readPixelsToArray,
    readPixelsToBuffer,
    cloneTextureFrom,
    copyToTexture,
    Texture3D,
    TransformFeedback,
  } from '@luma.gl/webgl';
  export {
    AnimationLoop,
    Model,
    Transform,
    ProgramManager,
    Timeline,
    Geometry,
    ClipSpace,
    ConeGeometry,
    CubeGeometry,
    CylinderGeometry,
    IcoSphereGeometry,
    PlaneGeometry,
    SphereGeometry,
    TruncatedConeGeometry,
  } from '@luma.gl/engine';
  export {
    normalizeShaderModule,
    fp32,
    fp64,
    project,
    dirlight,
    picking,
    gouraudLighting,
    phongLighting,
    pbr,
  } from '@luma.gl/shadertools';
  export { log, assert, uid } from '@luma.gl/webgl';
}
