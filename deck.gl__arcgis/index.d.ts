//typings for @deck.gl/arcgis v8.4.9
declare module '@deck.gl/arcgis/commons' {
  export function initializeResources(gl: any): void;
  export function render({ gl, width, height, viewState }: { gl: any; width: any; height: any; viewState: any }): void;
  export function finalizeResources(): void;
}
declare module '@deck.gl/arcgis/deck-layer-view-2d' {
  export default function createDeckLayerView2D(BaseLayerViewGL2D: any): any;
}
declare module '@deck.gl/arcgis/deck-layer' {
  export default function createDeckLayer(DeckProps: any, Layer: any, DeckLayerView2D: any): any;
}
declare module '@deck.gl/arcgis/deck-props' {
  export default function loadDeckProps(Accessor: any): any;
}
declare module '@deck.gl/arcgis/deck-renderer' {
  export interface IDeckRenderer {
    view: any;
    deck: any;
    setup(context: any): any;
    dispose(): any;
    redraw(): any;
    render(context: any): any;
  }
  export default function createDeckRenderer(DeckProps: any, externalRenderers: any): IDeckRenderer;
}
declare module '@deck.gl/arcgis' {
    export function loadArcGISModules(modules: any, loadScriptOptions: any): Promise<any>;
    export class DeckLayer {
      constructor(gl: any);
      setProps(props: any): void;
      renderLayers(opts: any): void;
      needsRedraw(opts?: { clearRedrawFlags: boolean }): any;
      finalize(): void;
      _preRender(effects: any, opts: any): void;
      _resizeRenderBuffers(): void;
      _postRender(effects: any, opts: any): void;
    }
    export class DeckRenderer {
      constructor(gl: any);
      setProps(props: any): void;
      renderLayers(opts: any): void;
      needsRedraw(opts?: { clearRedrawFlags: boolean }): any;
      finalize(): void;
      _preRender(effects: any, opts: any): void;
      _resizeRenderBuffers(): void;
      _postRender(effects: any, opts: any): void;
    }
  }
