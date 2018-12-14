declare module '@deck.gl/react/utils/inherits-from' {
	export function inheritsFrom(Type: any, ParentType: any): boolean;

}
declare module '@deck.gl/react/deckgl' {
	import { DeckProps } from '@deck.gl/core/lib/deck';
	import * as React from 'react';
	export default class DeckGL extends React.Component<DeckProps, {}> {
		constructor(props: DeckProps);
		viewState: any;
		setProps(props: DeckProps): void;
		componentDidMount(): void;
		componentWillReceiveProps(nextProps: any): void;
		componentWillUnmount(): void;
		pickObject({ x, y, radius, layerIds }: {
			x: any;
			y: any;
			radius?: number;
			layerIds?: any;
		}): any;
		pickMultipleObjects({ x, y, radius, layerIds, depth }: {
			x: any;
			y: any;
			radius?: number;
			layerIds?: any;
			depth?: number;
		}): any;
		pickObjects({ x, y, width, height, layerIds }: {
			x: any;
			y: any;
			width?: number;
			height?: number;
			layerIds?: any;
		}): any;
		queryObject(opts: any): any;
		queryVisibleObjects(opts: any): any;
		_onResize(...args: any[]): void;
		_onViewStateChange(...args: any[]): void;
		_updateFromProps(nextProps: any): void;
		_getViews(props: any): any;
		_getViewState(props: any): any;
		_extractJSXLayers(children: any): {
			layers: any;
			children: any[];
		};
		_renderChildrenUnderViews(children: any): any;
		_positionChild({ child, viewMap, i }: {
			child: any;
			viewMap: any;
			i: any;
		}): any;
		render(): any;
	}

}
declare module '@deck.gl/react/utils/cursors' {
	const _default: {
		GRABBING: string;
		GRAB: string;
		POINTER: string;
	};
	export default _default;

}
declare module '@deck.gl/react/viewport-controller' {
	import { Component } from 'react';
	export default class ViewportController extends Component {
		constructor(props: any);
		componentDidMount(): void;
		componentWillUpdate(nextProps: any): void;
		componentWillUnmount(): void;
		_onInteractiveStateChange({ isDragging }: {
			isDragging?: boolean;
		}): void;
		render(): any;
	}

}
declare module '@deck.gl/react' {
	export { default as DeckGL } from '@deck.gl/react/deckgl';
	export { default } from '@deck.gl/react/deckgl';
	export { default as ViewportController } from '@deck.gl/react/viewport-controller';
	export { default as autobind } from '@deck.gl/react/utils/autobind';

}

declare module '@deck.gl/react/utils/extract-jsx-layers' {
	export default function extractJSXLayers({ children, layers, views }: {
		children: any;
		layers: any;
		views: any;
	}): {
		layers: any;
		children: any[];
		views: any;
	};

}
declare module '@deck.gl/react/utils/shallow-equal' {
	export function shallowEqual(a: any, b: any, { ignore }?: {
		ignore?: {};
	}): boolean;

}

declare module '@deck.gl/react/utils/autobind' {
	/**
	 * Binds the "this" argument of all functions on a class instance to the instance
	 * @param {Object} obj - class instance (typically a react component)
	 */
	export default function autobind(obj: any): void;

}

declare module '@deck.gl/react/utils/shallow-compare' {
	/**
	 * Does a shallow comparison for React props and state.
	 */
	export default function shallowCompare(instance: any, nextProps: any, nextState: any): boolean;

}
