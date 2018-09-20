/// <reference path="../deck.gl__core/index.d.ts" />
/// <reference path="../deck.gl__layers/index.d.ts" />
/// <reference path="../deck.gl__react/index.d.ts" />

declare module 'deck.gl' {
	import OrbitController from '@deck.gl/core/controllers/orbit-controller';
	const experimental: { OrbitController };
	export { COORDINATE_SYSTEM, Deck, Layer, CompositeLayer, View, MapView, FirstPersonView, ThirdPersonView, OrbitView, OrbitViewState, PerspectiveView, OrthographicView, Viewport, WebMercatorViewport, PerspectiveViewport, OrthographicViewport, Controller, MapController, AttributeManager, project, project64, lighting, LayerManager, log } from '@deck.gl/core';
	export { ArcLayer, IconLayer, LineLayer, PointCloudLayer, ScatterplotLayer, ScreenGridLayer, GridLayer, GridCellLayer, HexagonLayer, HexagonCellLayer, PathLayer, PolygonLayer, GeoJsonLayer, TextLayer } from '@deck.gl/layers';
	export { default, DeckGL } from '@deck.gl/react';
	export { experimental };
}
