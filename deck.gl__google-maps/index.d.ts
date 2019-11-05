//typings for @deck.gl/google-maps v7.3.3
declare module '@deck.gl/google-maps/utils' {
	/**
	 * Get a new deck instance
	 * @param map (google.maps.Map) - The parent Map instance
	 * @param overlay (google.maps.OverlayView) - A maps Overlay instance
	 * @param [deck] (Deck) - a previously created instances
	 */
	export function createDeckInstance(map: any, overlay: any, deck: any): any;
	/**
	 * Safely remove a deck instance
	 * @param deck (Deck) - a previously created instances
	 */
	export function destroyDeckInstance(deck: any): void;
	/**
	 * Get the current view state
	 * @param map (google.maps.Map) - The parent Map instance
	 * @param overlay (google.maps.OverlayView) - A maps Overlay instance
	 */
	export function getViewState(map: any, overlay: any): {
		width: any;
		height: any;
		left: any;
		top: any;
		zoom: number;
		pitch: any;
		latitude: any;
		longitude: any;
	};

}
declare module '@deck.gl/google-maps/google-maps-overlay' {
	export default class GoogleMapsOverlay {
		constructor(props: any);
		setMap(map: any): void;
		setProps(props: any): void;
		pickObject(params: any): any;
		pickMultipleObjects(params: any): any;
		pickObjects(params: any): any;
		finalize(): void;
		_onAdd(): void;
		_onRemove(): void;
		_draw(): void;
	}

}
declare module '@deck.gl/google-maps' {
	export { default as GoogleMapsOverlay } from '@deck.gl/google-maps/google-maps-overlay';

}
