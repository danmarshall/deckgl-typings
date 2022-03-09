import { BitmapLayer, ColumnLayer, GridCellLayer, ScatterplotLayer, TextLayer } from 'deck.gl';

import { BrushingExtension } from '@deck.gl/extensions';
import { LayerData } from '@deck.gl/core/lib/layer';
import { ScatterplotLayerProps } from '@deck.gl/layers';
import { Buffer as LumaBuffer } from '@luma.gl/webgl';

var unknownArg: unknown;

new TextLayer({}).props.getText(unknownArg, { index: 1, data: [1], target: ['d'] });

var numberArg: number;

new TextLayer({ data: [1] }).props.getText(numberArg, { index: 1, data: [1], target: ['d'] });

// @ts-expect-error -- datum is number
new TextLayer({ data: [1] }).props.getText(unknownArg, { index: 1, data: [1], target: ['d'] });

new TextLayer({
  brushingRadius: 4,
  data: { attributes: { getPosition: new Int8Array(), getSize: new Uint16Array() }, length: 4 },
  extensions: [new BrushingExtension()],
});

new TextLayer({
  data: { attributes: { getPosition: new Int8Array(), getSize: new Uint16Array() }, length: 4, zExtraAttribute: true },
  extensions: [],
});

new TextLayer({
  data: {
    attributes: { getPosition: { size: 2, stride: 1, value: new Int8Array() } },
    length: 4,
    zExtraAttribute: true,
  },
});

new TextLayer({
  data: {
    attributes: { getPosition: new LumaBuffer(new WebGLRenderingContext(), new Int8Array()) },
    length: 4,
    zExtraAttribute: true,
  },
});

// @ts-expect-error -- attributes contains unknown property
new TextLayer({ data: { attributes: { NotAnAttribute: new Int8Array() }, length: 4 } });

// @ts-expect-error -- attributes contains a non-accessor property
new TextLayer({ data: { attributes: { maxWidth: new Int8Array() }, length: 4 } });

new ColumnLayer({ data: { attributes: { getElevation: new Int8Array(), getLineWidth: new Int8Array() }, length: 2 } });
new GridCellLayer({
  // @ts-expect-error -- attributes contains a non-accessor property
  data: { attributes: { getElevation: new Int8Array(), getLineWidth: new Int8Array() }, length: 2 },
});
new GridCellLayer({
  data: {
    attributes: { getColor: new Int8Array(), getElevation: new Int8Array(), getPosition: new Int8Array() },
    length: 2,
  },
});

new BitmapLayer({ bounds: [2, 2, 2, 2], image: new HTMLCanvasElement() }).props.image.className;
// @ts-expect-error -- image is not HTMLElement
new BitmapLayer({ bounds: [2, 2, 2, 2], image: 'url' }).props.image.className;

new ScatterplotLayer({
  data: 'url',
  // @ts-expect-error -- x is unknown
  getPosition(x) {
    return [x, 0];
  },
});

new ScatterplotLayer({
  data: 'url',
  getPosition(x: number) {
    return [x, 0];
  },
});

new ScatterplotLayer({
  data: [1],
  getPosition(x) {
    return [x, 0];
  },
});

new ScatterplotLayer({
  data: [1],
  // @ts-expect-error -- x is number
  getPosition(x: unknown) {
    return [x, 0];
  },
});

new ScatterplotLayer({
  // @ts-expect-error -- Promise<number> is not LayerData
  data: Promise.resolve(1),
});

new ScatterplotLayer({
  data: Promise.resolve([1]),
  getPosition(x) {
    return [x, 0];
  },
});

function asyncData<T>(t: T) {
  return {
    async *[Symbol.asyncIterator]() {
      yield t;
    },
  };
}

const asyncNumber = asyncData(1);
const asyncString = asyncData('data');
new ScatterplotLayer({
  data: asyncNumber,
  getPosition(x) {
    return [x, 0];
  },
});

new ScatterplotLayer({
  data: asyncString,
  getPosition(x) {
    x + 'data';
    return [0, 0];
  },
});

new ScatterplotLayer({
  data: { attributes: {}, length: 1 },
  // @ts-expect-error -- x is unknown
  getPosition(x) {
    return [x, 0];
  },
});

new ScatterplotLayer({
  data: new Map<string, number>(),
  getPosition([, y]) {
    return [0, y];
  },
});

class ScatterLayer<D extends LayerData<ScatterplotLayerProps<any>>> extends ScatterplotLayer<
  D,
  ScatterplotLayerProps<D>
> {
  renderLayers() {
    const { data } = this.props;

    return [
      // when the data prop is externally constrained, you'll have to cast from `unknown`
      new ScatterplotLayer({
        data,
        // @ts-expect-error
        getPosition(x) {
          return [x, 0];
        },
      }),

      new ScatterplotLayer({
        data,
        getPosition(x: number) {
          return [x, 0];
        },
      }),

      new ScatterplotLayer({
        data: data as number[],
        getPosition(x) {
          return [x, 0];
        },
      }),
    ];
  }
}
