//typings for @deck.gl/carto v8.3.14
declare module '@deck.gl/carto/auth' {
  export function setDefaultCredentials(opts: any): void;
  export function getDefaultCredentials(): {
    username: string;
    apiKey: string;
    serverUrlTemplate: string;
  };
}
declare module '@deck.gl/carto/basemap' {
  const _default: {
    VOYAGER: string;
    POSITRON: string;
    DARK_MATTER: string;
  };
  export default _default;
}
declare module '@deck.gl/carto/layers/carto-layer' {
  import { CompositeLayer } from '@deck.gl/core';
  import { CompositeLayerProps } from '@deck.gl/core/lib/composite-layer';
  import { LayerData } from '@deck.gl/core/lib/layer';
  export default class CartoLayer<
    D extends LayerData<CompositeLayerProps<any, E>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends CompositeLayer<D, CompositeLayerProps<D, E> & P, S, E> {
    initializeState(): void;
    updateState({ changeFlags }: { changeFlags: any }): void;
    _updateTileJSON(): Promise<void>;
    onHover(info: any, pickingEvent: any): any;
    renderLayers(): any;
  }
}
declare module '@deck.gl/carto/api/maps-api-client' {
  /**
   * Obtain a TileJson from Maps API v1
   */
  export function getMapTileJSON(props: any): Promise<any>;
}
declare module '@deck.gl/carto/layers/carto-sql-layer' {
  import CartoLayer from '@deck.gl/carto/layers/carto-layer';
  import { CompositeLayerProps } from '@deck.gl/core/lib/composite-layer';
  import { LayerData } from '@deck.gl/core/lib/layer';
  export default class CartoSQLLayer<
    D extends LayerData<CompositeLayerProps<any, E>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends CartoLayer<D, CompositeLayerProps<D, E> & P, S, E> {
    _updateTileJSON(): Promise<void>;
  }
}
declare module '@deck.gl/carto/layers/carto-bqtiler-layer' {
  import CartoLayer from '@deck.gl/carto/layers/carto-layer';
  import { CompositeLayerProps } from '@deck.gl/core/lib/composite-layer';
  import { LayerData } from '@deck.gl/core/lib/layer';
  export default class CartoBQTilerLayer<
    D extends LayerData<CompositeLayerProps<any, E>>,
    P = unknown,
    S = any,
    E extends Array<any> = Array<any>
  > extends CartoLayer<D, CompositeLayerProps<D, E> & P, S, E> {
    _updateTileJSON(): Promise<void>;
  }
}
declare module '@deck.gl/carto' {
  export { getDefaultCredentials, setDefaultCredentials } from '@deck.gl/carto/auth';
  export { default as CartoSQLLayer } from '@deck.gl/carto/layers/carto-sql-layer';
  export { default as CartoBQTilerLayer } from '@deck.gl/carto/layers/carto-bqtiler-layer';
  export { default as BASEMAP } from '@deck.gl/carto/basemap';
}
