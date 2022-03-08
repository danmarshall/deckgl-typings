//typings for @deck.gl/react v8.1.3
declare module '@deck.gl/react/utils/inherits-from' {
  export function inheritsFrom(Type: any, ParentType: any): boolean;
}
declare module '@deck.gl/react/utils/extract-jsx-layers' {
  export default function extractJSXLayers({ children, layers, views }: { children: any; layers: any; views: any }): {
    layers: any;
    children: any[];
    views: any;
  };
}
declare module '@deck.gl/react/utils/evaluate-children' {
  export default function evaluateChildren(children: any, childProps: any): any;
}
declare module '@deck.gl/react/utils/position-children-under-views' {
  import { ReactElement } from 'react';
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
  }): ReactElement[];
}
declare module '@deck.gl/react/utils/extract-styles' {
  export default function extractStyles({ width, height, style }: { width: any; height: any; style: any }): {
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
declare module '@deck.gl/react/deckgl' {
  import Deck, { ContextProviderValue, DeckProps } from '@deck.gl/core/lib/deck';
  export type DeckGLProps<T = ContextProviderValue> = Partial<DeckProps<T>>;
  import { ReactElement, RefObject } from 'react';
  export default class DeckGL<T = ContextProviderValue> extends React.Component<DeckGLProps<T>> {
    constructor(props: DeckGLProps<T>);
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
    render(): ReactElement;
    _containerRef: RefObject<HTMLElement>;
    deck: Deck;
  }
}
declare module '@deck.gl/react' {
  export { default as DeckGL } from '@deck.gl/react/deckgl';
  export { default } from '@deck.gl/react/deckgl';
}
