import { GPUGridLayer, Layer, PathLayer, ScatterplotLayer } from 'deck.gl';
import { BrushingExtension, DataFilterExtension, FillStyleExtension, PathStyleExtension } from '@deck.gl/extensions';

var withBrushingExtension: Layer<any, unknown, any, [BrushingExtension]>;
withBrushingExtension.props.brushingRadius;
// @ts-expect-error
withBrushingExtension.props.filterRange;
// @ts-expect-error
withBrushingExtension.props.fillPatternEnabled;
// @ts-expect-error
withBrushingExtension.props.getDashArray;

var withoutBrushingExtension: Layer<any>;
// @ts-expect-error
withoutBrushingExtension.props.brushingRadius;

var withDataFilterExtension: GPUGridLayer<any, unknown, any, [DataFilterExtension]>;
withDataFilterExtension.props.filterRange;
// @ts-expect-error
withDataFilterExtension.props.brushingRadius;
// @ts-expect-error
withDataFilterExtension.props.fillPatternEnabled;
// @ts-expect-error
withDataFilterExtension.props.getDashArray;

var withoutDataFilterExtension: GPUGridLayer<any>;
// @ts-expect-error
withoutDataFilterExtension.props.filterRange;

var withFillStyleExtension: ScatterplotLayer<any, unknown, any, [FillStyleExtension]>;
withFillStyleExtension.props.fillPatternEnabled;
// @ts-expect-error
withFillStyleExtension.props.brushingRadius;
// @ts-expect-error
withFillStyleExtension.props.filterRange;
// @ts-expect-error
withFillStyleExtension.props.getDashArray;

var withoutFillStyleExtension: ScatterplotLayer<any>;
// @ts-expect-error
withoutFillStyleExtension.props.fillPatternEnabled;

var withPathStyleExtension: PathLayer<any, unknown, any, [PathStyleExtension]>;
withPathStyleExtension.props.getDashArray;
// @ts-expect-error
withPathStyleExtension.props.brushingRadius;
// @ts-expect-error
withPathStyleExtension.props.filterRange;
// @ts-expect-error
withPathStyleExtension.props.fillPatternEnabled;

var withoutPathStyleExtension: PathLayer<any>;
// @ts-expect-error
withoutPathStyleExtension.props.getDashArray;
