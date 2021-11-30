//typings for @deck.gl/json v8.1.3
declare module '@deck.gl/json/utils/assert' {
  export default function assert(condition: any, message?: string): void;
}
declare module '@deck.gl/json/utils/get' {
  /**
   * Access properties of nested containers using dot-path notation
   * Returns `undefined` if any container is not valid, instead of throwing
   * @param {Object} container - container that supports get
   * @param {String|*} compositeKey - key to access, can be '.'-separated string
   * @return {*} - value in the final key of the nested container, or `undefined`
   */
  export function get(container: any, compositeKey: any): any;
}
declare module '@deck.gl/json/helpers/parse-expression-string' {
  export default function parseExpressionString(propValue: any, configuration: any): any;
}
declare module '@deck.gl/json/syntactic-sugar' {
  const FUNCTION_IDENTIFIER = '@@=';
  const CONSTANT_IDENTIFIER = '@@#';
  const TYPE_KEY = '@@type';
  export { FUNCTION_IDENTIFIER, CONSTANT_IDENTIFIER, TYPE_KEY };
}
declare module '@deck.gl/json/json-configuration' {
  export default class JSONConfiguration {
    constructor(...configurations: any[]);
    merge(configuration: any): void;
    validate(configuration: any): boolean;
  }
}
declare module '@deck.gl/json/helpers/convert-functions' {
  export default function convertFunctions(props: any, configuration: any): {};
}
declare module '@deck.gl/json/helpers/instantiate-class' {
  export function instantiateClass(type: any, props: any, configuration: any): any;
}
declare module '@deck.gl/json/helpers/parse-json' {
  export default function parseJSON(json: any): any;
}
declare module '@deck.gl/json/json-converter' {
  export default class JSONConverter {
    constructor(props: any);
    finalize(): void;
    setProps(props: any): void;
    mergeConfiguration(config: any): void;
    convert(json: any): any;
    convertJson(json: any): any;
  }
}
declare module '@deck.gl/json/utils/shallow-equal-objects' {
  export function shallowEqualObjects(a: any, b: any): boolean;
}
declare module '@deck.gl/json' {
  export { default as JSONConverter } from '@deck.gl/json/json-converter';
  export { default as JSONConfiguration } from '@deck.gl/json/json-configuration';
  export { default as _convertFunctions } from '@deck.gl/json/helpers/convert-functions';
  export { default as _parseExpressionString } from '@deck.gl/json/helpers/parse-expression-string';
  export { shallowEqualObjects as _shallowEqualObjects } from '@deck.gl/json/utils/shallow-equal-objects';
}
