/// <reference path="../deck.gl/index.d.ts" />

import { Layer } from 'deck.gl';

interface P {
  foo: string;
}

var layer1: Layer<P[]>;

var x = layer1.props.data;
x[0].foo;

new Layer<any, { ACustomPropStillWorks: boolean }>({ ACustomPropStillWorks: true });

var y: Layer<any, unknown, { innerState: boolean }>;
y.state.innerState;

// @ts-expect-error -- data is not P[]
new Layer<P[]>({ data: [2] });

new Layer({ data: [2] });

// @ts-expect-error -- missing attributes
new Layer({ data: { length: 4 } });

new Layer({ data: { attributes: {}, length: 4 } });

new Layer({ data: 'url' });
new Layer({ data: Promise.resolve([1]) }).props.data.then(d => {
  d[0] + 1;
});
new Layer({ data: new Map<string, number>().set('a', 1) }).props.data.get('a') + 1;
new Layer({
  data: {
    async *[Symbol.asyncIterator]() {
      yield 'data';
    },
  },
}).props.data[Symbol.asyncIterator];

// @ts-expect-error -- data is not LayerData
new Layer({ data: new Date() });

new Layer({ data: ['d'] }, { extensions: [] }).props.data[0] + 'd';

declare const unknownArg: unknown;
new Layer<number[]>({
  data: unknownArg as number[],
});
