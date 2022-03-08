# deckgl-typings

TypeScript declaration files for [deck.gl](https://deck.gl/#/documentation/)

This is a work in progress - see the [issues list](https://github.com/danmarshall/deckgl-typings/issues)

```bash
npm install @danmarshall/deckgl-typings
```

These will automatically appear in your projects `node_modules/@types` folder, thanks to [indefinitely-typed](https://github.com/danmarshall/indefinitely-typed#readme).

Then it is possible to link the mappings in your project so typescript can find them (since the project is not in @types yet).

Create a new file like `deckgl.d.ts` (although it could be named anything ending in `.d.ts`) in your `src/` directory with the following code:

```typescript
import * as DeckTypings from '@danmarshall/deckgl-typings';
declare module 'deck.gl' {
  export namespace DeckTypings {}
}
```

## Version mapping

| deck.gl version | deckgl-typings version | type inference |
| --------------- | ---------------------- | -------------- |
| 5.x.x           | 1.x.x                  | N              |
| 6.x.x           | 2.x.x                  | N              |
| 7.x.x           | 3.x.x                  | N              |
| 8.x.x           | 4.x.x                  | N              |
| 8.x.x           | 5.x.x                  | Y              |

## Upgrading to v5

### Automatic typing on data accessors

For data types `Array`, `Iterable`, `AsyncIterable`, and `Promise<Array | Iterable | AsyncIterable>`, accessors can now infer the type of the datum they operate on:

```typescript
new TextLayer({
  data: [1],
  getPosition(x) {
    // <-- x is of type number because data is type number[]
    return [x, 0];
  },
});
```

For most use cases, simply removing the explicit types from the Layer constructors will allow type inference to determine the correct type of data and of data accessors.

### Non-iterable data

Typing now supports using data buffers directly:

```typescript
new TextLayer({
  data: {
    attributes: { getPosition: new Int8Array([1, 2, 3, 4]) },
    length: 4,
  },
});
```

## Known issues

These typings are now v5 which targets deck.gl v8. The following issues are changes to v8 from deck.gl v7 which have not been added to these typings:

- [ ] [Optional specifying the \_framebuffer prop of Deck.](https://github.com/uber/deck.gl/blob/master/docs/whats-new.md#other-new-features-and-improvements)
- [ ] [Pick a 3d surface point in the scene](https://github.com/uber/deck.gl/blob/master/docs/whats-new.md#other-new-features-and-improvements) by passing unproject3D: true to deck.pickObject or deck.pickMultipleObjects.
- [ ] ArcLayer supports drawing arcs between two 3D positions
- [ ] 64-bit positions are now 3D instead of 2D
- [ ] FirstPersonView now supports pitch
- [ ] FlyToInterpolator now supports duration: 'auto'.

## 🙏

Thanks to the community of contributors for adding many typings over the last few months. Please feel free to continue fixes for the above or any other issues. 🥂
