//typings for @deck.gl/react v7.3.3
declare module '@deck.gl/react/utils/inherits-from' {
	export function inheritsFrom(Type: any, ParentType: any): boolean;

}
declare module '@deck.gl/react/deckgl' {
	import { DeckProps } from '@deck.gl/core/lib/deck';
	import * as React from 'react';
	type ReactDeckProps = DeckProps & {
		ContextProvider?: React.Provider<any>;
	}
	export default class DeckGL extends React.Component<ReactDeckProps, {}> {
		constructor(props: ReactDeckProps);
		componentDidMount(): void;
		shouldComponentUpdate(nextProps: any): boolean;
		componentDidUpdate(): void;
		componentWillUnmount(): void;
		pickObject(opts: any): any;
		pickMultipleObjects(opts: any): any;
		pickObjects(opts: any): any;
		_redrawDeck(): void;
		_customRender(redrawReason: any): void;
		_parseJSX(props: any): any;
		_updateFromProps(props: any): void;
		render(): import("react").DetailedReactHTMLElement<{
			id: string;
		}, HTMLElement>;
	}

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
declare module '@deck.gl/react/utils/evaluate-children' {
	export default function evaluateChildren(children: any, childProps: any): any;

}
declare module '@deck.gl/react/utils/position-children-under-views' {
	export default function positionChildrenUnderViews({ children, viewports, deck, ContextProvider }: {
		children: any;
		viewports: any;
		deck: any;
		ContextProvider: any;
	}): any;

}
declare module '@deck.gl/react' {
	export { default as DeckGL } from '@deck.gl/react/deckgl';
	export { default } from '@deck.gl/react/deckgl';

}
