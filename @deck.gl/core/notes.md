## Error: deckgl-typings/node_modules/@deck.gl/core/src/lib/attribute.ts(13,45): error TS4020: 'extends' clause of exported class 'LayerAttribute' has or is using private name 'Attribute'.

add to deckgl-typings\node_modules\@deck.gl\core\src\lib\attribute.ts
```
export { Attribute }
```

## need to manually edit some module names which arent prefixed correctly
