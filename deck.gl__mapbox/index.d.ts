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
	export default class MapboxLayer {
	    constructor(props: any);
	    onAdd(map: any, gl: any): void;
	    onRemove(): void;
	    setProps(props: any): void;
	    render(gl: any, matrix: any): void;
	}

}
declare module '@deck.gl/mapbox' {
	export { default as MapboxLayer } from '@deck.gl/mapbox/mapbox-layer';

}
