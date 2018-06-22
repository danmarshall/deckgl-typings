## 'luma.gl/constants' does not appear in output

in node_modules\luma.gl\src\constants.ts, change

```
module.exports = {
```
to 
```
export default {
```

## Property '_deleteHandle' in type 'VertexArray' is not assignable to the same property in base type 'Resource'.

Change Resource to:
```
_deleteHandle(handle?: any): any[] | void {
```

## Property 'unbind' in type 'Sampler' is not assignable to the same property in base type 'Resource'.

In Resource change
```
unbind(unit?: any) {
```
