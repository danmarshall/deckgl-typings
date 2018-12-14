declare module '@deck.gl/react/utils/inherits-from' {
	export function inheritsFrom(Type: any, ParentType: any): boolean;

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
declare module '@deck.gl/react/utils/autobind' {
	/**
	 * Binds the "this" argument of all functions on a class instance to the instance
	 * @param {Object} obj - class instance (typically a react component)
	 */
	export default function autobind(obj: any): void;

}
