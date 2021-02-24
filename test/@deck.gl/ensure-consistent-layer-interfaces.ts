import { Layer } from "deck.gl";
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
  } from "@deck.gl/layers";
  import {
    ScreenGridLayer,
    CPUGridLayer,
    HexagonLayer,
    ContourLayer,
    GridLayer,
    GPUGridLayer,
    HeatmapLayer,
  } from "@deck.gl/aggregation-layers";
  import {
    GreatCircleLayer,
    S2Layer,
    H3ClusterLayer,
    H3HexagonLayer,
    TripsLayer,
    Tile3DLayer,
    TerrainLayer,
    MVTLayer,
  } from "@deck.gl/geo-layers";
  import {
    SimpleMeshLayer,
    ScenegraphLayer,
  } from "@deck.gl/mesh-layers";


interface Datum { }

export const testLayersArray: Layer<Datum>[] = [
    new ArcLayer<Datum>({}),
    new BitmapLayer<Datum>({
        image: null,
        bounds: [0,0,0,0],
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
        getS2Token: () => {}
    }),
    new H3ClusterLayer<Datum>({}),
    new H3HexagonLayer<Datum>({}),
    new TripsLayer<Datum>({}),
    new Tile3DLayer<Datum>({}),
    new TerrainLayer<Datum>({
        elevationData: "",
    }),
    new MVTLayer<Datum>({}),
    new SimpleMeshLayer<Datum>({
        mesh: {
            positions: new Float32Array(),
            normals: new Float32Array(),
            texCoords: new Float32Array(),
        }
    }),
    new ScenegraphLayer<Datum>({
        scenegraph: new URL(""),
    }),
];
