//typings for @deck.gl/mapbox v7.3.3
declare module '@deck.gl/mapbox/deck-utils' {
	export function getDeckInstance({ map, gl, deck }: {
		map: any;
		gl: any;
		deck: any;
	}): any;
	export function addLayer(deck: any, layer: any): void;
	export function removeLayer(deck: any, layer: any): void;
	export function updateLayer(deck: any, layer: any): void;
	export function drawLayer(deck: any, map: any, layer: any): void;

}
declare module '@deck.gl/mapbox/mapbox-layer' {
	import { Deck, Layer } from 'deck.gl';
	import { LayerProps } from '@deck.gl/core/lib/layer';

	export type RenderingMode = '2d' | '3d';

	export interface MapboxLayerProps<D> extends LayerProps<D> {
		id: string;
		deck?: Deck;
		renderingMode?: RenderingMode;
		type?: typeof Layer;
	}

	export default class MapboxLayer<D> {
		constructor(props: MapboxLayerProps<D>);
		id: string;

		/* The layer's type. Must be "custom". See https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface */
		type: 'custom'

		renderingMode: RenderingMode;
		map: any;
		deck: Deck;
		props: MapboxLayerProps<D>;

		onAdd(map: any, gl: any): void;
		onRemove(): void;
		setProps(props: any): void;
		render(gl: any, matrix: any): void;
	}

}
declare module '@deck.gl/mapbox' {
	export { default as MapboxLayer } from '@deck.gl/mapbox/mapbox-layer';

}
