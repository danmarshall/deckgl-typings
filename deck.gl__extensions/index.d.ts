//typings for @deck.gl/extensions v7.3.3
declare module '@deck.gl/extensions/brushing/shader-module' {
	const _default: {
		name: string;
		dependencies: string[];
		vs: string;
		fs: string;
		getUniforms: (opts: any) => {
			brushing_enabled?: undefined;
			brushing_radius?: undefined;
			brushing_target?: undefined;
			brushing_mousePos?: undefined;
		} | {
			brushing_enabled: boolean;
			brushing_radius: any;
			brushing_target: any;
			brushing_mousePos: any;
		};
	};
	export default _default;

}
declare module '@deck.gl/extensions/brushing/brushing' {
	import { LayerExtension } from '@deck.gl/core';
	export default class BrushingExtension extends LayerExtension {
		getShaders(extension: any): {
			modules: {
				name: string;
				dependencies: string[];
				vs: string;
				fs: string;
				getUniforms: (opts: any) => {
					brushing_enabled?: undefined;
					brushing_radius?: undefined;
					brushing_target?: undefined;
					brushing_mousePos?: undefined;
				} | {
					brushing_enabled: boolean;
					brushing_radius: any;
					brushing_target: any;
					brushing_mousePos: any;
				};
			}[];
		};
		initializeState(context: any, extension: any): void;
		finalizeState(extension: any): void;
		useConstantTargetPositions(attribute: any): void;
	}

}
declare module '@deck.gl/extensions/data-filter/shader-module' {
	const _default: {
		name: string;
		vs: string;
		fs: string;
		getUniforms: (opts: any) => {};
	};
	export default _default;

}
declare module '@deck.gl/extensions/data-filter/data-filter' {
	import { LayerExtension } from '@deck.gl/core';
	export default class DataFilterExtension extends LayerExtension {
		constructor({ filterSize }?: {
			filterSize?: number;
		});
		getShaders(extension: any): {
			modules: {
				name: string;
				vs: string;
				fs: string;
				getUniforms: (opts: any) => {};
			}[];
			defines: {
				DATAFILTER_TYPE: any;
			};
		};
		initializeState(context: any, extension: any): void;
	}

}
declare module '@deck.gl/extensions/fp64/fp64' {
	import { LayerExtension } from '@deck.gl/core';
	export default class Fp64Extension extends LayerExtension {
		getShaders(opts: any): {
			modules: any[];
		};
	}

}
declare module '@deck.gl/extensions' {
	export { default as BrushingExtension } from '@deck.gl/extensions/brushing/brushing';
	export { default as DataFilterExtension } from '@deck.gl/extensions/data-filter/data-filter';
	export { default as Fp64Extension } from '@deck.gl/extensions/fp64/fp64';

}
