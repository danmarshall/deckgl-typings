/// <reference path="../@deck.gl/core/index.d.ts" />
/// <reference path="../@deck.gl/layers/index.d.ts" />
/// <reference path="../@deck.gl/react/index.d.ts" />

declare module 'deck.gl' {
	 const experimental: {};
	export { COORDINATE_SYSTEM, Deck, Layer, CompositeLayer, View, MapView, FirstPersonView, ThirdPersonView, OrbitView, PerspectiveView, OrthographicView, Viewport, WebMercatorViewport, PerspectiveViewport, OrthographicViewport, Controller, MapController, AttributeManager, project, project64, lighting, LayerManager, log } from '@deck.gl/core';
	export { ArcLayer, IconLayer, LineLayer, PointCloudLayer, ScatterplotLayer, ScreenGridLayer, GridLayer, GridCellLayer, HexagonLayer, HexagonCellLayer, PathLayer, PolygonLayer, GeoJsonLayer, TextLayer } from '@deck.gl/layers';
	export { default, DeckGL } from '@deck.gl/react';
	export { experimental };

}
