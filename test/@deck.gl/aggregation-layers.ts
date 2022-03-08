import { GPUGridLayer } from 'deck.gl';

import { DataFilterExtension } from '@deck.gl/extensions';

new GPUGridLayer({
  data: {
    attributes: { getColorWeight: new Int8Array(), getFilterValue: new Int8Array() },
    length: 4,
  },
  extensions: [new DataFilterExtension()],
  filterRange: [2, 2],
  getFilterValue: () => {
    return [1, 1];
  },
});

new GPUGridLayer({
  data: {
    attributes: {
      getColorWeight: new Int8Array(),
      // @ts-expect-error -- DataFilterExtension not installed
      getFilterValue: new Int8Array(),
    },
    length: 4,
  },
});

new GPUGridLayer({
  extensions: [new DataFilterExtension()],
  filterRange: [2, 2],
  getFilterValue() {
    return [2];
  },
});
// @ts-expect-error -- expecting filterRange and getFilterValue
new GPUGridLayer({ extensions: [new DataFilterExtension()] });
new GPUGridLayer({
  extensions: [],
  // @ts-expect-error -- DataFilterExtension not installed
  filterRange: [2, 2],
  getFilterValue() {
    return [2];
  },
});
new GPUGridLayer<any, { filterRange: any; getFilterValue: any }>({
  extensions: [],
  filterRange: [2, 2],
  getFilterValue() {
    return [2];
  },
});
new GPUGridLayer({});
