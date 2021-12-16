/// <reference path="../deck.gl/index.d.ts" />

import {
  AGGREGATION_OPERATION,
  AmbientLight,
  COORDINATE_SYSTEM,
  Deck,
  Layer,
  LineLayer,
  OrbitView,
  PolygonLayer,
  TextLayer,
} from 'deck.gl';

interface P {
  foo: string;
}

var layer1: Layer<P>;

var x = layer1.props.data as P[];
x[0].foo;
