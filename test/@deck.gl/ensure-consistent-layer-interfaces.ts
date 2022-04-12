import { Layer } from 'deck.gl';
import { LayerData } from '@deck.gl/core/lib/layer';
import {
  ArcLayer,
  BitmapLayer,
  IconLayer,
  LineLayer,
  PointCloudLayer,
  ScatterplotLayer,
  GridCellLayer,
  ColumnLayer,
  PathLayer,
  PolygonLayer,
  SolidPolygonLayer,
  GeoJsonLayer,
  TextLayer,
} from '@deck.gl/layers';
import {
  ScreenGridLayer,
  CPUGridLayer,
  HexagonLayer,
  ContourLayer,
  GridLayer,
  GPUGridLayer,
  HeatmapLayer,
} from '@deck.gl/aggregation-layers';
import {
  GreatCircleLayer,
  S2Layer,
  H3ClusterLayer,
  H3HexagonLayer,
  TripsLayer,
  Tile3DLayer,
  TerrainLayer,
  MVTLayer,
} from '@deck.gl/geo-layers';
import { SimpleMeshLayer, ScenegraphLayer } from '@deck.gl/mesh-layers';

type Datum = LayerData;

export const testLayersArray: Layer<Datum>[] = [
  // @ts-expect-error - Should have at least one prop object to constructor
  new Layer<Datum>(),
  // Single prop object to constructor
  new Layer<Datum>({}),
  // Multiple prop objects to constructor
  new Layer<Datum>({}, {}, {}, {}, {}),
  new ArcLayer<Datum>({}),
  new BitmapLayer({
    image: null,
    bounds: [0, 0, 0, 0],
  }),
  new IconLayer<Datum>({}),
  new LineLayer<Datum>({}),
  new PointCloudLayer<Datum>({}),
  new ScatterplotLayer<Datum>({}),
  new GridCellLayer<Datum>({}),
  new ColumnLayer<Datum>({}),
  new PathLayer<Datum>({}),
  new PolygonLayer<Datum>({}),
  new SolidPolygonLayer<Datum>({}),
  new GeoJsonLayer<Datum>({}),
  new TextLayer<Datum>({}),
  new ScreenGridLayer<Datum>({}),
  new CPUGridLayer<Datum>({}),
  new HexagonLayer<Datum>({}),
  new ContourLayer<Datum>({}),
  new GridLayer<Datum>({}),
  new GPUGridLayer<Datum>({}),
  new HeatmapLayer<Datum>({}),
  new GreatCircleLayer<Datum>({}),
  new S2Layer<Datum>({
    getS2Token: () => {},
  }),
  new H3ClusterLayer<Datum>({}),
  new H3HexagonLayer<Datum>({}),
  new TripsLayer<Datum>({}),
  new Tile3DLayer<string>({}),
  new TerrainLayer<Datum>({
    elevationData: '',
  }),
  new MVTLayer({}),
  new SimpleMeshLayer<Datum>({
    mesh: {
      positions: new Float32Array(),
      normals: new Float32Array(),
      texCoords: new Float32Array(),
    },
  }),
  new ScenegraphLayer<Datum>({
    scenegraph: new URL(''),
  }),
];
