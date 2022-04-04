//typings for deck.gl v8.1.3
/// <reference path="../deck.gl__core/index.d.ts" />
/// <reference path="../deck.gl__layers/index.d.ts" />
/// <reference path="../deck.gl__aggregation-layers/index.d.ts" />
/// <reference path="../deck.gl__geo-layers/index.d.ts" />
/// <reference path="../deck.gl__mesh-layers/index.d.ts" />
/// <reference path="../deck.gl__react/index.d.ts" />
/// <reference path="../deck.gl__extensions/index.d.ts" />

declare module 'deck.gl' {
  export {
    _CameraLight,
    COORDINATE_SYSTEM,
    Deck,
    Layer,
    CompositeLayer,
    View,
    MapView,
    FirstPersonView,
    OrbitView,
    OrbitViewState,
    OrthographicView,
    Viewport,
    WebMercatorViewport,
    Controller,
    MapController,
    OrbitController,
    FirstPersonController,
    OrthographicController,
    AttributeManager,
    picking,
    project,
    project32,
    gouraudLighting,
    phongLighting,
    shadow,
    LayerManager,
    DeckRenderer,
    log,
    TRANSITION_EVENTS,
    LinearInterpolator,
    FlyToInterpolator,
    Effect,
    LightingEffect,
    PostProcessEffect,
    AmbientLight,
    PointLight,
    DirectionalLight,
    LayerExtension,
    Tesselator,
    fp64LowPart,
    createIterable,
    RGBAColor,
    Position,
    Position2D,
    Position3D,
    UNIT
  } from '@deck.gl/core';
  export {
    ArcLayer,
    BitmapLayer,
    IconLayer,
    LineLayer,
    PointCloudLayer,
    ScatterplotLayer,
    GridCellLayer,
    ColumnLayer,
    PathLayer,
    PolygonLayer,
    SolidPolygonLayer,
    GeoJsonLayer,
    TextLayer,
  } from '@deck.gl/layers';
  export {
    ScreenGridLayer,
    CPUGridLayer,
    HexagonLayer,
    ContourLayer,
    GridLayer,
    GPUGridLayer,
    AGGREGATION_OPERATION,
    HeatmapLayer,
  } from '@deck.gl/aggregation-layers';
  export {
    GreatCircleLayer,
    S2Layer,
    H3ClusterLayer,
    H3HexagonLayer,
    TileLayer,
    TripsLayer,
    Tile3DLayer,
    TerrainLayer,
    MVTLayer,
  } from '@deck.gl/geo-layers';
  export { SimpleMeshLayer, ScenegraphLayer } from '@deck.gl/mesh-layers';
  export { default, DeckGL } from '@deck.gl/react';
  export { DeckProps, PickInfo } from '@deck.gl/core/lib/deck';
  export { LayerInputHandler } from '@deck.gl/core/lib/layer';
}
