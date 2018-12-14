/// <reference path="../deck.gl__core/index.d.ts" />
/// <reference path="../deck.gl__layers/index.d.ts" />
/// <reference path="../deck.gl__react/index.d.ts" />

declare module 'deck.gl' {
	export { COORDINATE_SYSTEM, Deck, Layer, CompositeLayer, View, MapView, FirstPersonView, ThirdPersonView, OrbitView, PerspectiveView, OrthographicView, Viewport, WebMercatorViewport, Controller, MapController, AttributeManager, project, project64, lighting, LayerManager, log, _OrbitController, _FirstPersonController, TRANSITION_EVENTS, LinearInterpolator, FlyToInterpolator, _EffectManager, _Effect, _ReflectionEffect } from '@deck.gl/core';
	export { ArcLayer, IconLayer, LineLayer, PointCloudLayer, ScatterplotLayer, ScreenGridLayer, GridLayer, GridCellLayer, HexagonLayer, HexagonCellLayer, PathLayer, PolygonLayer, GeoJsonLayer, TextLayer } from '@deck.gl/layers';
	export { default, DeckGL } from '@deck.gl/react';
}
