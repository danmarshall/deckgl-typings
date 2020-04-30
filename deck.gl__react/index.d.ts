//typings for @deck.gl/react v8.1.3
declare module "@deck.gl/react/utils/inherits-from" {
	export function inheritsFrom(Type: any, ParentType: any): boolean;
}
declare module "@deck.gl/react/utils/extract-jsx-layers" {
	export default function extractJSXLayers({
		children,
		layers,
		views,
	}: {
		children: any;
		layers: any;
		views: any;
	}): {
		layers: any;
		children: any[];
		views: any;
	};
}
declare module "@deck.gl/react/utils/evaluate-children" {
	export default function evaluateChildren(children: any, childProps: any): any;
}
declare module "@deck.gl/react/utils/position-children-under-views" {
	export default function positionChildrenUnderViews({
		children,
		viewports,
		deck,
		ContextProvider,
	}: {
		children: any;
		viewports: any;
		deck: any;
		ContextProvider: any;
	}): (
		| import("react").ReactElement<
		{
			key: string;
			id: string;
			style: {
				position: string;
				left: any;
				top: any;
				width: any;
				height: any;
			};
		},
		| string
		| ((
			props: any
		) => import("react").ReactElement<
			any,
			| string
			| any
			| (new (props: any) => import("react").Component<any, any, any>)
			>)
		| (new (props: any) => import("react").Component<any, any, any>)
		>
		| import("react").CElement<
		{
			key: string;
			value: {
				viewport: any;
				container: any;
				eventManager: any;
				onViewStateChange: (params: any) => void;
			};
		},
		import("react").Component<
		{
			key: string;
			value: {
				viewport: any;
				container: any;
				eventManager: any;
				onViewStateChange: (params: any) => void;
			};
		},
		any,
		any
		>
		>
	)[];
}
declare module "@deck.gl/react/utils/extract-styles" {
	export default function extractStyles({
		width,
		height,
		style,
	}: {
		width: any;
		height: any;
		style: any;
	}): {
		containerStyle: {
			position: string;
			zIndex: number;
			left: number;
			top: number;
			width: any;
			height: any;
		};
		canvasStyle: {
			left: number;
			top: number;
		};
	};
}
declare module "@deck.gl/react/deckgl" {
	export default class DeckGL extends React.Component {
		constructor(props: any);
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
		render(): import("react").ReactElement<
			{
				id: string;
				ref: any;
				style: any;
			},
			| string
			| ((
				props: any
			) => import("react").ReactElement<
				any,
				| string
				| any
				| (new (props: any) => import("react").Component<any, any, any>)
				>)
			| (new (props: any) => import("react").Component<any, any, any>)
			>;
	}
}
declare module "@deck.gl/react" {
	export { default as DeckGL } from "@deck.gl/react/deckgl";
	export { default } from "@deck.gl/react/deckgl";
}
