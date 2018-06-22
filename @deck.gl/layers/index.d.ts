declare module '@deck.gl/layers/arc-layer/arc-layer-vertex.glsl' {
	 const _default: "#define SHADER_NAME arc-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec4 instanceSourceColors;\nattribute vec4 instanceTargetColors;\nattribute vec4 instancePositions;\nattribute vec3 instancePickingColors;\nattribute float instanceWidths;\n\nuniform float numSegments;\nuniform float opacity;\n\nvarying vec4 vColor;\n\nfloat paraboloid(vec2 source, vec2 target, float ratio) {\n\n  vec2 x = mix(source, target, ratio);\n  vec2 center = mix(source, target, 0.5);\n\n  float dSourceCenter = distance(source, center);\n  float dXCenter = distance(x, center);\n  return (dSourceCenter + dXCenter) * (dSourceCenter - dXCenter);\n}\n\n// offset vector by strokeWidth pixels\n// offset_direction is -1 (left) or 1 (right)\nvec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction) {\n  // normalized direction of the line\n  vec2 dir_screenspace = normalize(line_clipspace * project_uViewportSize);\n  // rotate by 90 degrees\n  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);\n\n  vec2 offset_screenspace = dir_screenspace * offset_direction * instanceWidths / 2.0;\n  vec2 offset_clipspace = project_pixel_to_clipspace(offset_screenspace).xy;\n\n  return offset_clipspace;\n}\n\nfloat getSegmentRatio(float index) {\n  return smoothstep(0.0, 1.0, index / (numSegments - 1.0));\n}\n\nvec3 getPos(vec2 source, vec2 target, float segmentRatio) {\n  float vertex_height = paraboloid(source, target, segmentRatio);\n\n  return vec3(\n    mix(source, target, segmentRatio),\n    sqrt(max(0.0, vertex_height))\n  );\n}\n\nvoid main(void) {\n  vec2 source = project_position(instancePositions.xy);\n  vec2 target = project_position(instancePositions.zw);\n\n  float segmentIndex = positions.x;\n  float segmentRatio = getSegmentRatio(segmentIndex);\n  // if it's the first point, use next - current as direction\n  // otherwise use current - prev\n  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));\n  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);\n\n  vec3 currPos = getPos(source, target, segmentRatio);\n  vec3 nextPos = getPos(source, target, nextSegmentRatio);\n  vec4 curr = project_to_clipspace(vec4(currPos, 1.0));\n  vec4 next = project_to_clipspace(vec4(nextPos, 1.0));\n\n  // extrude\n  vec2 offset = getExtrusionOffset((next.xy - curr.xy) * indexDir, positions.y);\n  gl_Position = curr + vec4(offset, 0.0, 0.0);\n\n  vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio) / 255.;\n  vColor = vec4(color.rgb, color.a * opacity);\n\n  // Set color to be rendered to picking fbo (also used to check for selection highlight).\n  picking_setPickingColor(instancePickingColors);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/arc-layer/arc-layer-vertex-64.glsl' {
	 const _default: "#define SHADER_NAME arc-layer-vertex-shader-64\n\nattribute vec3 positions;\nattribute vec4 instanceSourceColors;\nattribute vec4 instanceTargetColors;\n\nattribute vec4 instancePositions;\nattribute vec4 instancePositions64Low;\n\nattribute vec3 instancePickingColors;\nattribute float instanceWidths;\n\nuniform float numSegments;\nuniform float opacity;\n\nvarying vec4 vColor;\n\nvec2 paraboloid_fp64(vec2 source[2], vec2 target[2], float ratio) {\n\n  vec2 x[2];\n  vec2_mix_fp64(source, target, ratio, x);\n  vec2 center[2];\n  vec2_mix_fp64(source, target, 0.5, center);\n\n  vec2 dSourceCenter = vec2_distance_fp64(source, center);\n  vec2 dXCenter = vec2_distance_fp64(x, center);\n  return mul_fp64(sum_fp64(dSourceCenter, dXCenter), sub_fp64(dSourceCenter, dXCenter));\n}\n\n// offset vector by strokeWidth pixels\n// offset_direction is -1 (left) or 1 (right)\nvec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction) {\n  // normalized direction of the line\n  vec2 dir_screenspace = normalize(line_clipspace * project_uViewportSize);\n  // rotate by 90 degrees\n  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);\n\n  vec2 offset_screenspace = dir_screenspace * offset_direction * instanceWidths / 2.0;\n  vec2 offset_clipspace = project_pixel_to_clipspace(offset_screenspace).xy;\n\n  return offset_clipspace;\n}\n\nfloat getSegmentRatio(float index) {\n  return smoothstep(0.0, 1.0, index / (numSegments - 1.0));\n}\n\nvoid get_pos_fp64(vec2 source[2], vec2 target[2], float segmentRatio, out vec2 position[4]) {\n\n  vec2 vertex_height = paraboloid_fp64(source, target, segmentRatio);\n\n  vec2 position_temp[2];\n\n  vec2_mix_fp64(source, target, segmentRatio, position_temp);\n\n  position[0] = position_temp[0];\n  position[1] = position_temp[1];\n\n  if (vertex_height.x < 0.0 || (vertex_height.x == 0.0 && vertex_height.y <= 0.0)) {\n    vertex_height = vec2(0.0, 0.0);\n  }\n\n  position[2] = sqrt_fp64(vertex_height);\n  position[3] = vec2(1.0, 0.0);\n}\n\nvoid main(void) {\n  vec2 projected_source_coord[2];\n  vec2 projected_target_coord[2];\n\n  project_position_fp64(instancePositions.xy, instancePositions64Low.xy, projected_source_coord);\n  project_position_fp64(instancePositions.zw, instancePositions64Low.zw, projected_target_coord);\n\n  float segmentIndex = positions.x;\n  float segmentRatio = getSegmentRatio(segmentIndex);\n\n  // if it's the first point, use next - current as direction\n  // otherwise use current - prev\n  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));\n  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);\n\n  vec2 curr_pos_modelspace[4];\n\n  get_pos_fp64(projected_source_coord, projected_target_coord, segmentRatio,\n    curr_pos_modelspace);\n\n  vec2 next_pos_modelspace[4];\n\n  get_pos_fp64(projected_source_coord, projected_target_coord, nextSegmentRatio,\n    next_pos_modelspace);\n\n  vec4 curr_pos_clipspace = project_to_clipspace_fp64(curr_pos_modelspace);\n  vec4 next_pos_clipspace = project_to_clipspace_fp64(next_pos_modelspace);\n\n  vec2 offset = getExtrusionOffset(next_pos_clipspace.xy - curr_pos_clipspace.xy, positions.y);\n\n  gl_Position = curr_pos_clipspace + vec4(offset, 0.0, 0.0);\n\n  vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio) / 255.;\n  vColor = vec4(color.rgb, color.a * opacity);\n\n  // Set color to be rendered to picking fbo (also used to check for selection highlight).\n  picking_setPickingColor(instancePickingColors);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/arc-layer/arc-layer-fragment.glsl' {
	 const _default: "#define SHADER_NAME arc-layer-fragment-shader\n\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  gl_FragColor = vColor;\n\n  // use highlight color if this fragment belongs to the selected object.\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n\n  // use picking color if rendering to picking FBO.\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/arc-layer/arc-layer' {
	import { Layer } from '@deck.gl/core';
	export default class ArcLayer extends Layer {
	    constructor(props: any);
	    getShaders(): {
	        vs: string;
	        fs: string;
	        modules: string[];
	    };
	    initializeState(): void;
	    updateAttribute({ props, oldProps, changeFlags }: {
	        props: any;
	        oldProps: any;
	        changeFlags: any;
	    }): void;
	    updateState({ props, oldProps, changeFlags }: {
	        props: any;
	        oldProps: any;
	        changeFlags: any;
	    }): void;
	    _getModel(gl: any): any;
	    calculateInstancePositions(attribute: any): void;
	    calculateInstancePositions64Low(attribute: any): void;
	}

}
declare module '@deck.gl/layers/icon-layer/icon-layer-vertex.glsl' {
	 const _default: "#define SHADER_NAME icon-layer-vertex-shader\n\nattribute vec2 positions;\n\nattribute vec3 instancePositions;\nattribute vec2 instancePositions64xyLow;\nattribute float instanceSizes;\nattribute float instanceAngles;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\nattribute vec4 instanceIconFrames;\nattribute float instanceColorModes;\nattribute vec2 instanceOffsets;\n\nuniform float sizeScale;\nuniform vec2 iconsTextureDim;\n\nvarying float vColorMode;\nvarying vec4 vColor;\nvarying vec2 vTextureCoords;\n\nvec2 rotate_by_angle(vec2 vertex, float angle) {\n  float angle_radian = angle * PI / 180.0;\n  float cos_angle = cos(angle_radian);\n  float sin_angle = sin(angle_radian);\n  mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);\n  return rotationMatrix * vertex;\n}\n\nvoid main(void) {\n  vec2 iconSize = instanceIconFrames.zw;\n  // scale icon height to match instanceSize\n  float instanceScale = iconSize.y == 0.0 ? 0.0 : instanceSizes / iconSize.y;\n\n  // scale and rotate vertex in \"pixel\" value and convert back to fraction in clipspace\n  vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;\n  pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * sizeScale * instanceScale;\n  pixelOffset.y *= -1.0;\n\n  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, vec3(0.0));\n  gl_Position += project_pixel_to_clipspace(pixelOffset);\n\n  vTextureCoords = mix(\n    instanceIconFrames.xy,\n    instanceIconFrames.xy + iconSize,\n    (positions.xy + 1.0) / 2.0\n  ) / iconsTextureDim;\n\n  vTextureCoords.y = 1.0 - vTextureCoords.y;\n\n  vColor = instanceColors / 255.;\n\n  vColorMode = instanceColorModes;\n\n  // Set color to be rendered to picking fbo (also used to check for selection highlight).\n  picking_setPickingColor(instancePickingColors);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/icon-layer/icon-layer-fragment.glsl' {
	 const _default: "#define SHADER_NAME icon-layer-fragment-shader\n\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform float opacity;\nuniform sampler2D iconsTexture;\n\nvarying float vColorMode;\nvarying vec4 vColor;\nvarying vec2 vTextureCoords;\n\nconst float MIN_ALPHA = 0.05;\n\nvoid main(void) {\n  vec4 texColor = texture2D(iconsTexture, vTextureCoords);\n\n  // if colorMode == 0, use pixel color from the texture\n  // if colorMode == 1 or rendering picking buffer, use texture as transparency mask\n  vec3 color = mix(texColor.rgb, vColor.rgb, vColorMode);\n  float a = texColor.a * opacity * mix(1.0, vColor.a, vColorMode);\n\n  if (a < MIN_ALPHA) {\n    discard;\n  }\n\n  gl_FragColor = vec4(color, a);\n\n  // use highlight color if this fragment belongs to the selected object.\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n\n  // use picking color if rendering to picking FBO.\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/icon-layer/icon-layer' {
	import { Layer } from '@deck.gl/core';
	export default class IconLayer extends Layer {
	    getShaders(): {
	        vs: string;
	        fs: string;
	        modules: string[];
	    };
	    initializeState(): void;
	    updateState({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): void;
	    draw({ uniforms }: {
	        uniforms: any;
	    }): void;
	    _getModel(gl: any): any;
	    calculateInstancePositions64xyLow(attribute: any): void;
	    calculateInstanceOffsets(attribute: any): void;
	    calculateInstanceColorMode(attribute: any): void;
	    calculateInstanceIconFrames(attribute: any): void;
	}

}
declare module '@deck.gl/layers/line-layer/line-layer-vertex.glsl' {
	 const _default: "#define SHADER_NAME line-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec3 instanceSourcePositions;\nattribute vec3 instanceTargetPositions;\nattribute vec4 instanceSourceTargetPositions64xyLow;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\nattribute float instanceWidths;\n\nuniform float opacity;\n\nvarying vec4 vColor;\n\n// offset vector by strokeWidth pixels\n// offset_direction is -1 (left) or 1 (right)\nvec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction) {\n  // normalized direction of the line\n  vec2 dir_screenspace = normalize(line_clipspace * project_uViewportSize);\n  // rotate by 90 degrees\n  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);\n\n  vec2 offset_screenspace = dir_screenspace * offset_direction * instanceWidths / 2.0;\n  vec2 offset_clipspace = project_pixel_to_clipspace(offset_screenspace).xy;\n\n  return offset_clipspace;\n}\n\nvoid main(void) {\n  // Position\n  vec4 source = project_position_to_clipspace(instanceSourcePositions, instanceSourceTargetPositions64xyLow.xy, vec3(0.));\n  vec4 target = project_position_to_clipspace(instanceTargetPositions, instanceSourceTargetPositions64xyLow.zw, vec3(0.));\n\n  // linear interpolation of source & target to pick right coord\n  float segmentIndex = positions.x;\n  vec4 p = mix(source, target, segmentIndex);\n\n  // extrude\n  vec2 offset = getExtrusionOffset(target.xy - source.xy, positions.y);\n  gl_Position = p + vec4(offset, 0.0, 0.0);\n\n  // Color\n  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity) / 255.;\n\n  // Set color to be rendered to picking fbo (also used to check for selection highlight).\n  picking_setPickingColor(instancePickingColors);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/line-layer/line-layer-fragment.glsl' {
	 const _default: "#define SHADER_NAME line-layer-fragment-shader\n\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  gl_FragColor = vColor;\n\n  // use highlight color if this fragment belongs to the selected object.\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n\n  // use picking color if rendering to picking FBO.\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/line-layer/line-layer' {
	import { Layer } from '@deck.gl/core';
	export default class LineLayer extends Layer {
	    constructor(props: any);
	    getShaders(): {
	        vs: string;
	        fs: string;
	        modules: string[];
	    };
	    initializeState(): void;
	    updateState({ props, oldProps, changeFlags }: {
	        props: any;
	        oldProps: any;
	        changeFlags: any;
	    }): void;
	    _getModel(gl: any): any;
	    calculateInstanceSourceTargetPositions64xyLow(attribute: any): void;
	}

}
declare module '@deck.gl/layers/point-cloud-layer/point-cloud-layer-vertex.glsl' {
	 const _default: "#define SHADER_NAME point-cloud-layer-vertex-shader\n\nattribute vec3 positions;\n\nattribute vec3 instancePositions;\nattribute vec2 instancePositions64xyLow;\nattribute vec3 instanceNormals;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\n\nuniform float opacity;\nuniform float radiusPixels;\n\nvarying vec4 vColor;\nvarying vec2 unitPosition;\n\nvoid main(void) {\n  // position on the containing square in [-1, 1] space\n  unitPosition = positions.xy;\n\n  // Find the center of the point and add the current vertex\n  vec4 position_worldspace;\n  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, vec3(0.), position_worldspace);\n  gl_Position += project_pixel_to_clipspace(positions.xy * radiusPixels);\n\n  // Apply lighting\n  float lightWeight = lighting_getLightWeight(position_worldspace.xyz, // the w component is always 1.0\n    project_normal(instanceNormals));\n\n  // Apply opacity to instance color, or return instance picking color\n  vColor = vec4(lightWeight * instanceColors.rgb, instanceColors.a * opacity) / 255.;\n\n  // Set color to be rendered to picking fbo (also used to check for selection highlight).\n  picking_setPickingColor(instancePickingColors);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/point-cloud-layer/point-cloud-layer-fragment.glsl' {
	 const _default: "#define SHADER_NAME point-cloud-layer-fragment-shader\n\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec4 vColor;\nvarying vec2 unitPosition;\n\nvoid main(void) {\n\n  float distToCenter = length(unitPosition);\n\n  if (distToCenter > 1.0) {\n    discard;\n  }\n\n  gl_FragColor = vColor;\n\n  // use highlight color if this fragment belongs to the selected object.\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n\n  // use picking color if rendering to picking FBO.\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/point-cloud-layer/point-cloud-layer' {
	import { Layer } from '@deck.gl/core';
	export default class PointCloudLayer extends Layer {
	    getShaders(id: any): {
	        vs: string;
	        fs: string;
	        modules: string[];
	    };
	    initializeState(): void;
	    updateState({ props, oldProps, changeFlags }: {
	        props: any;
	        oldProps: any;
	        changeFlags: any;
	    }): void;
	    draw({ uniforms }: {
	        uniforms: any;
	    }): void;
	    _getModel(gl: any): any;
	    calculateInstancePositions64xyLow(attribute: any): void;
	}

}
declare module '@deck.gl/layers/scatterplot-layer/scatterplot-layer-vertex.glsl' {
	 const _default: "#define SHADER_NAME scatterplot-layer-vertex-shader\n\nattribute vec3 positions;\n\nattribute vec3 instancePositions;\nattribute vec2 instancePositions64xyLow;\nattribute float instanceRadius;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\n\nuniform float opacity;\nuniform float radiusScale;\nuniform float radiusMinPixels;\nuniform float radiusMaxPixels;\nuniform float outline;\nuniform float strokeWidth;\n\nvarying vec4 vColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\n\nvoid main(void) {\n  // Multiply out radius and clamp to limits\n  float outerRadiusPixels = clamp(\n    project_scale(radiusScale * instanceRadius),\n    radiusMinPixels, radiusMaxPixels\n  );\n\n  // outline is centered at the radius\n  // outer radius needs to offset by half stroke width\n  outerRadiusPixels += outline * strokeWidth / 2.0;\n\n  // position on the containing square in [-1, 1] space\n  unitPosition = positions.xy;\n  // 0 - solid circle, 1 - stroke with lineWidth=0\n  innerUnitRadius = outline * (1.0 - strokeWidth / outerRadiusPixels);\n\n  vec3 offset = positions * outerRadiusPixels;\n  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, offset);\n\n  // Apply opacity to instance color, or return instance picking color\n  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity) / 255.;\n\n  // Set color to be rendered to picking fbo (also used to check for selection highlight).\n  picking_setPickingColor(instancePickingColors);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/scatterplot-layer/scatterplot-layer-fragment.glsl' {
	 const _default: "#define SHADER_NAME scatterplot-layer-fragment-shader\n\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec4 vColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\n\nvoid main(void) {\n\n  float distToCenter = length(unitPosition);\n\n  if (distToCenter > 1.0 || distToCenter < innerUnitRadius) {\n    discard;\n  }\n  gl_FragColor = vColor;\n\n  // use highlight color if this fragment belongs to the selected object.\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n\n  // use picking color if rendering to picking FBO.\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/scatterplot-layer/scatterplot-layer' {
	import { Layer } from '@deck.gl/core';
	export default class ScatterplotLayer extends Layer {
	    getShaders(id: any): {
	        vs: string;
	        fs: string;
	        modules: string[];
	    };
	    initializeState(): void;
	    updateState({ props, oldProps, changeFlags }: {
	        props: any;
	        oldProps: any;
	        changeFlags: any;
	    }): void;
	    draw({ uniforms }: {
	        uniforms: any;
	    }): void;
	    _getModel(gl: any): any;
	    calculateInstancePositions64xyLow(attribute: any): void;
	}

}
declare module '@deck.gl/layers/screen-grid-layer/screen-grid-layer-vertex.glsl' {
	 const _default: "#define SHADER_NAME screen-grid-layer-vertex-shader\n\nattribute vec3 vertices;\nattribute vec3 instancePositions;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\n\nuniform float opacity;\nuniform vec3 cellScale;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  vec4 color = instanceColors / 255.;\n\n  vColor = vec4(color.rgb, color.a * opacity);\n\n  // Set color to be rendered to picking fbo (also used to check for selection highlight).\n  picking_setPickingColor(instancePickingColors);\n\n  gl_Position = vec4(instancePositions + vertices * cellScale, 1.);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/screen-grid-layer/screen-grid-layer-fragment.glsl' {
	 const _default: "#define SHADER_NAME screen-grid-layer-fragment-shader\n\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  gl_FragColor = vColor;\n\n  // use highlight color if this fragment belongs to the selected object.\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n\n  // use picking color if rendering to picking FBO.\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/screen-grid-layer/screen-grid-layer' {
	import { Layer } from '@deck.gl/core';
	export default class ScreenGridLayer extends Layer {
	    getShaders(): {
	        vs: string;
	        fs: string;
	        modules: string[];
	    };
	    initializeState(): void;
	    shouldUpdateState({ changeFlags }: {
	        changeFlags: any;
	    }): any;
	    updateState({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): void;
	    draw({ uniforms }: {
	        uniforms: any;
	    }): void;
	    _getModel(gl: any): any;
	    updateCell(): void;
	    calculateInstancePositions(attribute: any, { numInstances }: {
	        numInstances: any;
	    }): void;
	    calculateInstanceColors(attribute: any): void;
	    _getColor(weight: any, maxCount: any): any;
	    _shouldUseMinMax(): boolean;
	}

}
declare module '@deck.gl/layers/grid-cell-layer/grid-cell-layer-vertex.glsl' {
	 const _default: "#define SHADER_NAME grid-cell-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec3 normals;\n\nattribute vec3 instancePositions;\nattribute vec2 instancePositions64xyLow;\nattribute float instanceElevations;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\n\n// Custom uniforms\nuniform float extruded;\nuniform float cellSize;\nuniform float coverage;\nuniform float opacity;\nuniform float elevationScale;\n\n// A magic number to scale elevation so that 1 unit approximate to 1 meter\n#define ELEVATION_SCALE 0.8\n\n// Result\nvarying vec4 vColor;\n\nvoid main(void) {\n\n  // if ahpha == 0.0 or z < 0.0, do not render element\n  float noRender = float(instanceColors.a == 0.0 || instanceElevations < 0.0);\n  float finalCellSize = project_scale(cellSize) * mix(1.0, 0.0, noRender);\n\n  float elevation = 0.0;\n\n  if (extruded > 0.5) {\n    elevation = instanceElevations  * (positions.z + 1.0) *\n      ELEVATION_SCALE * elevationScale;\n  }\n\n  // cube geometry vertics are between -1 to 1, scale and transform it to between 0, 1\n  vec3 extrudedPosition = vec3(instancePositions.xy, elevation);\n  vec2 extrudedPosition64xyLow = instancePositions64xyLow;\n  vec3 offset = vec3(\n    (positions.x * coverage + 1.0) / 2.0 * finalCellSize,\n    (positions.y * coverage - 1.0) / 2.0 * finalCellSize,\n    1.0);\n\n  // extrude positions\n  vec4 position_worldspace;\n  gl_Position = project_position_to_clipspace(extrudedPosition, extrudedPosition64xyLow, offset, position_worldspace);\n\n  float lightWeight = 1.0;\n\n  if (extruded > 0.5) {\n    lightWeight = lighting_getLightWeight(\n      position_worldspace.xyz, // the w component is always 1.0\n      normals\n    );\n  }\n\n  vec3 lightWeightedColor = lightWeight * instanceColors.rgb;\n  vec4 color = vec4(lightWeightedColor, instanceColors.a * opacity) / 255.0;\n  vColor = color;\n\n  // Set color to be rendered to picking fbo (also used to check for selection highlight).\n  picking_setPickingColor(instancePickingColors);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/grid-cell-layer/grid-cell-layer-fragment.glsl' {
	 const _default: "#define SHADER_NAME grid-cell-layer-fragment-shader\n\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  gl_FragColor = vColor;\n\n  // use highlight color if this fragment belongs to the selected object.\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n\n  // use picking color if rendering to picking FBO.\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/grid-cell-layer/grid-cell-layer' {
	import { Layer } from '@deck.gl/core';
	export default class GridCellLayer extends Layer {
	    /**
	     * A generic GridLayer that takes latitude longitude delta of cells as a uniform
	     * and the min lat lng of cells. grid can be 3d when pass in a height
	     * and set enable3d to true
	     *
	     * @param {array} props.data -
	     * @param {boolean} props.extruded - enable grid elevation
	     * @param {number} props.cellSize - grid cell size in meters
	     * @param {function} props.getPosition - position accessor, returned as [minLng, minLat]
	     * @param {function} props.getElevation - elevation accessor
	     * @param {function} props.getColor - color accessor, returned as [r, g, b, a]
	     */
	    getShaders(): {
	        vs: string;
	        fs: string;
	        modules: string[];
	    };
	    initializeState(): void;
	    updateState({ props, oldProps, changeFlags }: {
	        props: any;
	        oldProps: any;
	        changeFlags: any;
	    }): void;
	    _getModel(gl: any): any;
	    draw({ uniforms }: {
	        uniforms: any;
	    }): void;
	    calculateInstancePositions64xyLow(attribute: any): void;
	}

}
declare module '@deck.gl/layers/grid-layer/grid-aggregator' {
	/**
	 * Calculate density grid from an array of points
	 * @param {array} points
	 * @param {number} cellSize - cell size in meters
	 * @param {function} getPosition - position accessor
	 * @returns {object} - grid data, cell dimension
	 */
	export function pointToDensityGridData(points: any, cellSize: any, getPosition: any): {
	    gridOffset: {
	        yOffset: number;
	        xOffset: number;
	    };
	    layerData: any[];
	};

}
declare module '@deck.gl/layers/grid-layer/grid-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	import GridCellLayer from '@deck.gl/layers/grid-cell-layer/grid-cell-layer';
	export default class GridLayer extends CompositeLayer {
	    initializeState(): void;
	    updateState({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): void;
	    needsReProjectPoints(oldProps: any, props: any): boolean;
	    getDimensionUpdaters(): {
	        getColor: {
	            id: string;
	            triggers: string[];
	            updater: () => void;
	        }[];
	        getElevation: {
	            id: string;
	            triggers: string[];
	            updater: () => void;
	        }[];
	    };
	    getDimensionChanges(oldProps: any, props: any): any[];
	    getPickingInfo({ info }: {
	        info: any;
	    }): any;
	    getUpdateTriggers(): {};
	    getLayerData(): void;
	    getValueDomain(): void;
	    getSortedBins(): void;
	    getSortedColorBins(): void;
	    getSortedElevationBins(): void;
	    getColorValueDomain(): void;
	    getElevationValueDomain(): void;
	    getColorScale(): void;
	    getElevationScale(): void;
	    _onGetSublayerColor(cell: any): any;
	    _onGetSublayerElevation(cell: any): any;
	    getSubLayerProps(): any;
	    getSubLayerClass(): typeof GridCellLayer;
	    renderLayers(): any;
	}

}
declare module '@deck.gl/layers/hexagon-cell-layer/hexagon-cell-layer-vertex.glsl' {
	 const _default: "\n#define SHADER_NAME hexagon-cell-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec3 normals;\n\nattribute vec2 instancePositions;\nattribute float instanceElevations;\nattribute vec2 instancePositions64xyLow;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\n\n// Custom uniforms\nuniform float opacity;\nuniform float radius;\nuniform float angle;\nuniform float extruded;\nuniform float coverage;\nuniform float elevationScale;\n\n// Result\nvarying vec4 vColor;\n\n// A magic number to scale elevation so that 1 unit approximate to 1 meter.\n#define ELEVATION_SCALE 0.8\n\nvoid main(void) {\n\n  // rotate primitive position and normal\n  mat2 rotationMatrix = mat2(cos(angle), sin(angle), -sin(angle), cos(angle));\n\n  // calculate elevation, if 3d not enabled set to 0\n  // cylindar gemoetry height are between -0.5 to 0.5, transform it to between 0, 1\n  float elevation = 0.0;\n\n  if (extruded > 0.5) {\n    elevation = instanceElevations * (positions.z + 0.5) *\n      ELEVATION_SCALE * elevationScale;\n  }\n\n  // if ahpha == 0.0 or z < 0.0, do not render element\n  float noRender = float(instanceColors.a == 0.0 || instanceElevations < 0.0);\n  float dotRadius = project_scale(radius) * mix(coverage, 0.0, noRender);\n\n  // project center of hexagon\n  vec3 centroidPosition = vec3(instancePositions, elevation);\n  vec2 centroidPosition64xyLow = instancePositions64xyLow;\n  vec3 offset = vec3(rotationMatrix * positions.xy * dotRadius, 0.);\n\n  vec4 position_worldspace;\n  gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64xyLow, offset, position_worldspace);\n\n  // Light calculations\n  // Worldspace is the linear space after Mercator projection\n\n  vec3 normals_worldspace = vec3(rotationMatrix * normals.xy, normals.z);\n\n  float lightWeight = 1.0;\n\n  if (extruded > 0.5) {\n    lightWeight = lighting_getLightWeight(\n      position_worldspace.xyz, // the w component is always 1.0\n      normals_worldspace\n    );\n  }\n\n  vec3 lightWeightedColor = lightWeight * instanceColors.rgb;\n\n  // opacity-multiplied instance color\n  vColor = vec4(lightWeightedColor, opacity * instanceColors.a) / 255.0;\n\n  // Set color to be rendered to picking fbo (also used to check for selection highlight).\n  picking_setPickingColor(instancePickingColors);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/hexagon-cell-layer/hexagon-cell-layer-fragment.glsl' {
	 const _default: "#define SHADER_NAME hexagon-cell-layer-fragment-shader\n\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  gl_FragColor = vColor;\n\n  // use highlight color if this fragment belongs to the selected object.\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n\n  // use picking color if rendering to picking FBO.\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/hexagon-cell-layer/hexagon-cell-layer' {
	import { Layer } from '@deck.gl/core';
	export default class HexagonCellLayer extends Layer {
	    constructor(props: any);
	    getShaders(): {
	        vs: string;
	        fs: string;
	        modules: string[];
	    };
	    /**
	     * DeckGL calls initializeState when GL context is available
	     * Essentially a deferred constructor
	     */
	    initializeState(): void;
	    updateState({ props, oldProps, changeFlags }: {
	        props: any;
	        oldProps: any;
	        changeFlags: any;
	    }): void;
	    updateRadiusAngle(): void;
	    getCylinderGeometry(radius: any): any;
	    _getModel(gl: any): any;
	    draw({ uniforms }: {
	        uniforms: any;
	    }): void;
	    calculateInstancePositions64xyLow(attribute: any): void;
	}

}
declare module '@deck.gl/layers/hexagon-layer/hexagon-aggregator' {
	/**
	 * Use d3-hexbin to performs hexagonal binning from geo points to hexagons
	 * @param {Array} data - array of points
	 * @param {Number} radius - hexagon radius in meter
	 * @param {function} getPosition - get points lon lat
	 * @param {Object} viewport - current viewport object

	 * @return {Object} - hexagons and countRange
	 */
	export function pointToHexbin({ data, radius, getPosition }: {
	    data: any;
	    radius: any;
	    getPosition: any;
	}, viewport: any): {
	    hexagons: any;
	};
	/**
	 * Get radius in mercator world space coordinates from meter
	 * @param {Number} radius - in meter
	 * @param {Object} viewport - current viewport object

	 * @return {Number} radius in mercator world spcae coordinates
	 */
	export function getRadiusInPixel(radius: any, viewport: any): number;

}
declare module '@deck.gl/layers/hexagon-layer/hexagon-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	import HexagonCellLayer from '@deck.gl/layers/hexagon-cell-layer/hexagon-cell-layer';
	export default class HexagonLayer extends CompositeLayer {
	    constructor(props: any);
	    initializeState(): void;
	    updateState({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): void;
	    needsReProjectPoints(oldProps: any, props: any): boolean;
	    getDimensionUpdaters(): {
	        getColor: {
	            id: string;
	            triggers: string[];
	            updater: () => void;
	        }[];
	        getElevation: {
	            id: string;
	            triggers: string[];
	            updater: () => void;
	        }[];
	    };
	    getDimensionChanges(oldProps: any, props: any): any[];
	    getHexagons(): void;
	    getPickingInfo({ info }: {
	        info: any;
	    }): any;
	    getUpdateTriggers(): {};
	    getValueDomain(): void;
	    getSortedBins(): void;
	    getSortedColorBins(): void;
	    getSortedElevationBins(): void;
	    getColorValueDomain(): void;
	    getElevationValueDomain(): void;
	    getColorScale(): void;
	    getElevationScale(): void;
	    _onGetSublayerColor(cell: any): any;
	    _onGetSublayerElevation(cell: any): any;
	    getSubLayerProps(): any;
	    getSubLayerClass(): typeof HexagonCellLayer;
	    renderLayers(): HexagonCellLayer;
	}

}
declare module '@deck.gl/layers/path-layer/path-layer-vertex.glsl' {
	 const _default: "#define SHADER_NAME path-layer-vertex-shader-64\n\nattribute vec3 positions;\n\nattribute vec3 instanceStartPositions;\nattribute vec3 instanceEndPositions;\nattribute vec3 instanceLeftDeltas;\nattribute vec3 instanceRightDeltas;\nattribute float instanceStrokeWidths;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\nattribute vec2 instanceDashArrays;\n\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\nuniform float jointType;\nuniform float miterLimit;\n\nuniform float opacity;\n\nvarying vec4 vColor;\nvarying vec2 vCornerOffset;\nvarying float vMiterLength;\nvarying vec2 vDashArray;\nvarying float vPathPosition;\nvarying float vPathLength;\n\nconst float EPSILON = 0.001;\nconst float PIXEL_EPSILON = 0.1;\n\nfloat flipIfTrue(bool flag) {\n  return -(float(flag) * 2. - 1.);\n}\n\n// calculate line join positions\nvec3 lineJoin(\n  vec3 prevPoint, vec3 currPoint, vec3 nextPoint,\n  float relativePosition, bool isEnd, bool isJoint,\n  float width\n) {\n  vec2 deltaA = currPoint.xy - prevPoint.xy;\n  vec2 deltaB = nextPoint.xy - currPoint.xy;\n\n  float lenA = length(deltaA);\n  float lenB = length(deltaB);\n\n  // when two points are closer than PIXEL_EPSILON in pixels,\n  // assume they are the same point to avoid precision issue\n  lenA = lenA > PIXEL_EPSILON ? lenA : 0.0;\n  lenB = lenB > PIXEL_EPSILON ? lenB : 0.0;\n\n  vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);\n  vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);\n\n  vec2 perpA = vec2(-dirA.y, dirA.x);\n  vec2 perpB = vec2(-dirB.y, dirB.x);\n\n  // tangent of the corner\n  vec2 tangent = vec2(dirA + dirB);\n  tangent = length(tangent) > 0. ? normalize(tangent) : perpA;\n  // direction of the corner\n  vec2 miterVec = vec2(-tangent.y, tangent.x);\n  // width offset from current position\n  vec2 perp = isEnd ? perpA : perpB;\n  float L = isEnd ? lenA : lenB;\n\n  // cap super sharp angles\n  float sinHalfA = abs(dot(miterVec, perp));\n  float cosHalfA = abs(dot(dirA, miterVec));\n\n  bool turnsRight = dirA.x * dirB.y > dirA.y * dirB.x;\n\n  float offsetScale = 1.0 / max(sinHalfA, EPSILON);\n\n  float cornerPosition = isJoint ?\n    0.0 :\n    flipIfTrue(turnsRight == (relativePosition > 0.0));\n\n  // do not bevel if line segment is too short\n  cornerPosition *=\n    float(cornerPosition <= 0.0 || sinHalfA < min(lenA, lenB) / width * cosHalfA);\n\n  // trim if inside corner extends further than the line segment\n  if (cornerPosition < 0.0) {\n    offsetScale = min(offsetScale, L / width / max(cosHalfA, EPSILON));\n  }\n\n  vMiterLength = cornerPosition >= 0.0 ?\n    mix(offsetScale, 0.0, cornerPosition) :\n    offsetScale * cornerPosition;\n  vMiterLength -= sinHalfA * jointType;\n\n  float offsetDirection = mix(\n    positions.y,\n    mix(\n      flipIfTrue(turnsRight),\n      positions.y * flipIfTrue(turnsRight == (positions.x == 1.)),\n      cornerPosition\n    ),\n    step(0.0, cornerPosition)\n  );\n\n  vec2 offsetVec = mix(miterVec, -tangent, step(0.5, cornerPosition));\n  offsetScale = mix(offsetScale, 1.0 / max(cosHalfA, 0.001), step(0.5, cornerPosition));\n\n  // special treatment for start cap and end cap\n  // TODO - This has an issue. len is always positive because it is length.\n  // Step returns zero if -lenA<0, so practically this is a comparison of\n  // lenA with zero, with lots of problems because of the -lenA. Can we use EPSILON?\n  bool isStartCap = step(0.0, -lenA) > 0.5;\n  bool isEndCap = step(0.0, -lenB) > 0.5;\n  bool isCap = isStartCap || isEndCap;\n\n  // 0: center, 1: side\n  cornerPosition = isCap ? (1.0 - positions.z) : 0.;\n\n  // start of path: use next - curr\n  if (isStartCap) {\n    offsetVec = mix(dirB, perpB, cornerPosition);\n  }\n\n  // end of path: use curr - prev\n  if (isEndCap) {\n    offsetVec = mix(dirA, perpA, cornerPosition);\n  }\n\n  // extend out a triangle to envelope the round cap\n  if (isCap) {\n    offsetScale = mix(4.0 * jointType, 1.0, cornerPosition);\n    vMiterLength = 1.0 - cornerPosition;\n    offsetDirection = mix(flipIfTrue(isStartCap), positions.y, cornerPosition);\n  }\n\n  vCornerOffset = offsetVec * offsetDirection * offsetScale;\n\n  // Generate variables for dash calculation\n  vDashArray = instanceDashArrays;\n  vPathLength = L / width;\n  // vec2 offsetFromStartOfPath = isEnd ? vCornerOffset + deltaA / width : vCornerOffset;\n  vec2 offsetFromStartOfPath = vCornerOffset;\n  if (isEnd) {\n    offsetFromStartOfPath += deltaA / width;\n  }\n  vec2 dir = isEnd ? dirA : dirB;\n  vPathPosition = dot(offsetFromStartOfPath, dir);\n\n  return currPoint + vec3(vCornerOffset * width, 0.0);\n}\n\n// calculate line join positions\n// extract params from attributes and uniforms\nvec3 lineJoin(vec3 prevPoint, vec3 currPoint, vec3 nextPoint) {\n\n  // relative position to the corner:\n  // -1: inside (smaller side of the angle)\n  // 0: center\n  // 1: outside (bigger side of the angle)\n\n  float relativePosition = positions.y;\n  bool isEnd = positions.x > EPSILON;\n  bool isJoint = positions.z > EPSILON;\n\n  float width = clamp(project_scale(instanceStrokeWidths * widthScale),\n    widthMinPixels, widthMaxPixels) / 2.0;\n\n  return lineJoin(\n    prevPoint, currPoint, nextPoint,\n    relativePosition, isEnd, isJoint,\n    width\n  );\n}\n\nvoid main() {\n  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity) / 255.;\n\n  // Set color to be rendered to picking fbo (also used to check for selection highlight).\n  picking_setPickingColor(instancePickingColors);\n\n  float isEnd = positions.x;\n\n  vec3 prevPosition = mix(-instanceLeftDeltas, vec3(0.0), isEnd) + instanceStartPositions;\n  prevPosition = project_position(prevPosition);\n\n  vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);\n  currPosition = project_position(currPosition);\n\n  vec3 nextPosition = mix(vec3(0.0), instanceRightDeltas, isEnd) + instanceEndPositions;\n  nextPosition = project_position(nextPosition);\n\n  vec3 pos = lineJoin(prevPosition, currPosition, nextPosition);\n\n  gl_Position = project_to_clipspace(vec4(pos, 1.0));\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/path-layer/path-layer-vertex-64.glsl' {
	 const _default: "\n#define SHADER_NAME path-layer-vertex-shader\n\nattribute vec3 positions;\n\nattribute vec3 instanceStartPositions;\nattribute vec3 instanceEndPositions;\nattribute vec4 instanceStartEndPositions64xyLow;\nattribute vec3 instanceLeftDeltas;\nattribute vec3 instanceRightDeltas;\nattribute float instanceStrokeWidths;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\nattribute vec2 instanceDashArrays;\n\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\nuniform float jointType;\nuniform float miterLimit;\n\nuniform float opacity;\n\nvarying vec4 vColor;\nvarying vec2 vCornerOffset;\nvarying float vMiterLength;\nvarying vec2 vDashArray;\nvarying float vPathPosition;\nvarying float vPathLength;\n\nconst float EPSILON = 0.001;\nconst float PIXEL_EPSILON = 0.1;\n\nfloat flipIfTrue(bool flag) {\n  return -(float(flag) * 2. - 1.);\n}\n\nvec3 lineJoin(vec2 prevPoint64[2], vec2 currPoint64[2], vec2 nextPoint64[2]) {\n\n  float width = clamp(project_scale(instanceStrokeWidths * widthScale),\n    widthMinPixels, widthMaxPixels) / 2.0;\n\n  vec2 deltaA64[2];\n  vec2 deltaB64[2];\n\n  vec2_sub_fp64(currPoint64, prevPoint64, deltaA64);\n  vec2_sub_fp64(nextPoint64, currPoint64, deltaB64);\n\n  vec2 lengthA64 = vec2_length_fp64(deltaA64);\n  vec2 lengthB64 = vec2_length_fp64(deltaB64);\n\n  vec2 deltaA = vec2(deltaA64[0].x, deltaA64[1].x);\n  vec2 deltaB = vec2(deltaB64[0].x, deltaB64[1].x);\n\n  float lenA = lengthA64.x;\n  float lenB = lengthB64.x;\n\n  vec2 offsetVec;\n  float offsetScale;\n  float offsetDirection;\n\n  // when two points are closer than PIXEL_EPSILON in pixels,\n  // assume they are the same point to avoid precision issue\n  lenA = lenA > PIXEL_EPSILON ? lenA : 0.0;\n  lenB = lenB > PIXEL_EPSILON ? lenB : 0.0;\n  vec2 dirA = lenA > 0. ? deltaA / lenA : vec2(0.0, 0.0);\n  vec2 dirB = lenB > 0. ? deltaB / lenB : vec2(0.0, 0.0);\n\n  vec2 perpA = vec2(-dirA.y, dirA.x);\n  vec2 perpB = vec2(-dirB.y, dirB.x);\n\n  // tangent of the corner\n  vec2 tangent = vec2(dirA + dirB);\n  tangent = length(tangent) > 0. ? normalize(tangent) : perpA;\n  // direction of the corner\n  vec2 miterVec = vec2(-tangent.y, tangent.x);\n  // width offset from current position\n  vec2 perp = mix(perpB, perpA, positions.x);\n  float L = mix(lenB, lenA, positions.x);\n\n  // cap super sharp angles\n  float sinHalfA = abs(dot(miterVec, perp));\n  float cosHalfA = abs(dot(dirA, miterVec));\n  bool turnsRight = dirA.x * dirB.y > dirA.y * dirB.x;\n\n  // relative position to the corner:\n  // -1: inside (smaller side of the angle)\n  // 0: center\n  // 1: outside (bigger side of the angle)\n  float cornerPosition = mix(\n    flipIfTrue(turnsRight == (positions.y > 0.0)),\n    0.0,\n    positions.z\n  );\n\n  offsetScale = 1.0 / max(sinHalfA, EPSILON);\n\n  // do not bevel if line segment is too short\n  cornerPosition *= float(cornerPosition <= 0.0 || sinHalfA < min(lenA, lenB) / width * cosHalfA);\n  // trim if inside corner extends further than the line segment\n  offsetScale = mix(\n    offsetScale,\n    min(offsetScale, L / width / max(cosHalfA, EPSILON)),\n    float(cornerPosition < 0.0)\n  );\n\n  vMiterLength = mix(\n    offsetScale * cornerPosition,\n    mix(offsetScale, 0.0, cornerPosition),\n    step(0.0, cornerPosition)\n  ) - sinHalfA * jointType;\n  offsetDirection = mix(\n    positions.y,\n    mix(\n      flipIfTrue(turnsRight),\n      positions.y * flipIfTrue(turnsRight == (positions.x == 1.)),\n      cornerPosition\n    ),\n    step(0.0, cornerPosition)\n  );\n  offsetVec = mix(miterVec, -tangent, step(0.5, cornerPosition));\n  offsetScale = mix(offsetScale, 1.0 / max(cosHalfA, 0.001), step(0.5, cornerPosition));\n\n  // special treatment for start cap and end cap\n  // using a small number as the limit for determining if the lenA or lenB is 0\n  float isStartCap = step(lenA, 1.0e-5);\n  float isEndCap = step(lenB, 1.0e-5);\n  float isCap = max(isStartCap, isEndCap);\n\n  // 0: center, 1: side\n  cornerPosition = isCap * (1.0 - positions.z);\n\n  // start of path: use next - curr\n  offsetVec = mix(offsetVec, mix(dirB, perpB, cornerPosition), isStartCap);\n  // end of path: use curr - prev\n  offsetVec = mix(offsetVec, mix(dirA, perpA, cornerPosition), isEndCap);\n\n  // extend out a triangle to envelope the round cap\n  offsetScale = mix(\n    offsetScale,\n    mix(4.0 * jointType, 1.0, cornerPosition),\n    isCap\n  );\n  vMiterLength = mix(vMiterLength, 1.0 - cornerPosition, isCap);\n\n  offsetDirection = mix(\n    offsetDirection,\n    mix(flipIfTrue(isStartCap > 0.), positions.y, cornerPosition),\n    isCap\n  );\n\n  vCornerOffset = offsetVec * offsetDirection * offsetScale;\n\n  // Generate variables for dash calculation\n  vDashArray = instanceDashArrays;\n  vPathLength = L / width;\n  float isEnd = positions.x;\n  vec2 offsetFromStartOfPath = mix(vCornerOffset, vCornerOffset + deltaA / width, isEnd);\n  vec2 dir = mix(dirB, dirA, isEnd);\n  vPathPosition = dot(offsetFromStartOfPath, dir);\n\n  return vec3(vCornerOffset * width, 0.0);\n}\n\nvoid main() {\n  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity) / 255.;\n\n  // Set color to be rendered to picking fbo (also used to check for selection highlight).\n  picking_setPickingColor(instancePickingColors);\n\n  float isEnd = positions.x;\n\n  // Calculate current position 64bit\n\n  vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);\n  vec2 currPosition64xyLow = mix(instanceStartEndPositions64xyLow.xy, instanceStartEndPositions64xyLow.zw, isEnd);\n  vec2 projected_curr_position[2];\n  project_position_fp64(currPosition.xy, currPosition64xyLow, projected_curr_position);\n  float projected_curr_position_z = project_scale(currPosition.z);\n\n  // Calculate previous position\n\n  vec3 prevPosition = mix(-instanceLeftDeltas, vec3(0.0), isEnd) + instanceStartPositions;\n\n  // Calculate prev position 64bit\n\n  vec2 projected_prev_position[2];\n  project_position_fp64(prevPosition.xy, instanceStartEndPositions64xyLow.xy, projected_prev_position);\n\n  // Calculate next positions\n  vec3 nextPosition = mix(vec3(0.0), instanceRightDeltas, isEnd) + instanceEndPositions;\n\n  // Calculate next position 64bit\n\n  vec2 projected_next_position[2];\n  project_position_fp64(nextPosition.xy, instanceStartEndPositions64xyLow.zw, projected_next_position);\n\n  vec3 pos = lineJoin(projected_prev_position, projected_curr_position, projected_next_position);\n  vec2 vertex_pos_modelspace[4];\n\n  vertex_pos_modelspace[0] = sum_fp64(vec2(pos.x, 0.0), projected_curr_position[0]);\n  vertex_pos_modelspace[1] = sum_fp64(vec2(pos.y, 0.0), projected_curr_position[1]);\n  vertex_pos_modelspace[2] = vec2(pos.z + projected_curr_position_z, 0.0);\n  vertex_pos_modelspace[3] = vec2(1.0, 0.0);\n\n  gl_Position = project_to_clipspace_fp64(vertex_pos_modelspace);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/path-layer/path-layer-fragment.glsl' {
	 const _default: "#define SHADER_NAME path-layer-fragment-shader\n\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nuniform float jointType;\nuniform float miterLimit;\nuniform float alignMode;\n\nvarying vec4 vColor;\nvarying vec2 vCornerOffset;\nvarying float vMiterLength;\nvarying vec2 vDashArray;\nvarying float vPathPosition;\nvarying float vPathLength;\n\n// mod doesn't work correctly for negative numbers\nfloat mod2(float a, float b) {\n  return a - floor(a / b) * b;\n}\n\nfloat round(float x) {\n  return floor(x + 0.5);\n}\n\n// if given position is in the gap part of the dashed line\n// dashArray.x: solid stroke length, relative to width\n// dashArray.y: gap length, relative to width\n// alignMode:\n// 0 - no adjustment\n// o----     ----     ----     ---- o----     -o----     ----     o\n// 1 - stretch to fit, draw half dash at each end for nicer joints\n// o--    ----    ----    ----    --o--      --o--     ----     --o\nbool dash_isFragInGap() {\n  float solidLength = vDashArray.x;\n  float gapLength = vDashArray.y;\n\n  float unitLength = solidLength + gapLength;\n\n  if (unitLength == 0.0) {\n    return false;\n  }\n\n  unitLength = mix(\n    unitLength,\n    vPathLength / round(vPathLength / unitLength),\n    alignMode\n  );\n\n  float offset = alignMode * solidLength / 2.0;\n\n  return gapLength > 0.0 &&\n    vPathPosition >= 0.0 &&\n    vPathPosition <= vPathLength &&\n    mod2(vPathPosition + offset, unitLength) > solidLength;\n}\n\nvoid main(void) {\n  // if joint is rounded, test distance from the corner\n  if (jointType > 0.0 && vMiterLength > 0.0 && length(vCornerOffset) > 1.0) {\n    // Enable to debug joints\n    // gl_FragColor = vec4(0., 1., 0., 1.);\n    // return;\n    discard;\n  }\n  if (jointType == 0.0 && vMiterLength > miterLimit) {\n    // Enable to debug joints\n    // gl_FragColor = vec4(0., 0., 1., 1.);\n    // return;\n    discard;\n  }\n  if (vColor.a == 0.0 || dash_isFragInGap()) {\n    // Enable to debug joints\n    // gl_FragColor = vec4(0., 1., 1., 1.);\n    // return;\n    discard;\n  }\n  gl_FragColor = vColor;\n\n  // use highlight color if this fragment belongs to the selected object.\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n\n  // use picking color if rendering to picking FBO.\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/path-layer/path-layer' {
	import { Layer } from '@deck.gl/core';
	export default class PathLayer extends Layer {
	    getShaders(): {
	        vs: string;
	        fs: string;
	        modules: string[];
	    };
	    initializeState(): void;
	    updateAttribute({ props, oldProps, changeFlags }: {
	        props: any;
	        oldProps: any;
	        changeFlags: any;
	    }): void;
	    updateState({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): void;
	    draw({ uniforms }: {
	        uniforms: any;
	    }): void;
	    _getModel(gl: any): any;
	    calculateStartPositions(attribute: any): void;
	    calculateEndPositions(attribute: any): void;
	    calculateInstanceStartEndPositions64xyLow(attribute: any): void;
	    calculateLeftDeltas(attribute: any): void;
	    calculateRightDeltas(attribute: any): void;
	    calculateStrokeWidths(attribute: any): void;
	    calculateDashArrays(attribute: any): void;
	    calculateColors(attribute: any): void;
	    calculatePickingColors(attribute: any): void;
	}

}
declare module '@deck.gl/layers/solid-polygon-layer/polygon' {
	/**
	 * Check if this is a non-nested polygon (i.e. the first element of the first element is a number)
	 * @param {Array} polygon - either a complex or simple polygon
	 * @return {Boolean} - true if the polygon is a simple polygon (i.e. not an array of polygons)
	 */
	export function isSimple(polygon: any): boolean;
	/**
	 * Normalize to ensure that all polygons in a list are complex - simplifies processing
	 * @param {Array} polygon - either a complex or a simple polygon
	 * @param {Object} opts
	 * @param {Object} opts.dimensions - if 3, the coords will be padded with 0's if needed
	 * @return {Array} - returns a complex polygons
	 */
	export function normalize(polygon: any, { dimensions }?: {
	    dimensions?: number;
	}): any;
	/**
	 * Check if this is a non-nested polygon (i.e. the first element of the first element is a number)
	 * @param {Array} polygon - either a complex or simple polygon
	 * @return {Boolean} - true if the polygon is a simple polygon (i.e. not an array of polygons)
	 */
	export function getVertexCount(polygon: any): any;
	export function getTriangleCount(polygon: any): number;
	export function forEachVertex(polygon: any, visitor: any): void;
	export function getSurfaceIndices(complexPolygon: any): any;

}
declare module '@deck.gl/layers/solid-polygon-layer/polygon-tesselator' {
	export class PolygonTesselator {
	    constructor({ polygons, IndexType }: {
	        polygons: any;
	        IndexType: any;
	    });
	    updatePositions({ fp64, extruded }: {
	        fp64: any;
	        extruded: any;
	    }): void;
	    indices(): Uint32Array;
	    positions(): any;
	    positions64xyLow(): any;
	    nextPositions(): any;
	    nextPositions64xyLow(): any;
	    elevations({ key, getElevation }?: {
	        key?: string;
	        getElevation?: (x: any) => number;
	    }): any;
	    colors({ key, getColor }?: {
	        key?: string;
	        getColor?: (x: any) => number[];
	    }): any;
	    pickingColors(): any;
	}

}
declare module '@deck.gl/layers/solid-polygon-layer/solid-polygon-layer-vertex.glsl' {
	 const _default: "#define SHADER_NAME solid-polygon-layer-vertex-shader\n\nattribute vec2 vertexPositions;\nattribute vec3 positions;\nattribute vec2 positions64xyLow;\nattribute vec3 nextPositions;\nattribute vec2 nextPositions64xyLow;\nattribute float elevations;\nattribute vec4 colors;\nattribute vec3 pickingColors;\n\nuniform float isSideVertex;\nuniform float extruded;\nuniform float elevationScale;\nuniform float opacity;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  vec3 pos;\n  vec2 pos64xyLow;\n  vec3 normal;\n\n  if (isSideVertex > 0.5) {\n    pos = mix(positions, nextPositions, vertexPositions.x);\n    pos64xyLow = mix(positions64xyLow, nextPositions64xyLow, vertexPositions.x);\n  } else {\n    pos = positions;\n    pos64xyLow = positions64xyLow;\n  }\n  if (extruded > 0.5) {\n    pos.z += elevations * vertexPositions.y;\n  }\n  pos.z *= elevationScale;\n\n  vec4 position_worldspace;\n  gl_Position = project_position_to_clipspace(pos, pos64xyLow, vec3(0.), position_worldspace);\n\n  float lightWeight = 1.0;\n  \n  if (extruded > 0.5) {\n    if (isSideVertex > 0.5) {\n      normal = vec3(positions.y - nextPositions.y, nextPositions.x - positions.x, 0.0);\n      normal = project_normal(normal);\n    } else {\n      normal = vec3(0.0, 0.0, 1.0);\n    }\n\n    lightWeight = lighting_getLightWeight(position_worldspace.xyz, normal);\n  }\n\n  vec3 lightWeightedColor = lightWeight * colors.rgb;\n  vColor = vec4(lightWeightedColor, colors.a * opacity) / 255.0;\n\n  // Set color to be rendered to picking fbo (also used to check for selection highlight).\n  picking_setPickingColor(pickingColors);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/solid-polygon-layer/solid-polygon-layer-fragment.glsl' {
	 const _default: "#define SHADER_NAME solid-polygon-layer-fragment-shader\n\n#ifdef GL_ES\nprecision highp float;\n#endif\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  gl_FragColor = vColor;\n\n  // use highlight color if this fragment belongs to the selected object.\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n\n  // use picking color if rendering to picking FBO.\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/solid-polygon-layer/solid-polygon-layer' {
	import { Layer } from '@deck.gl/core';
	export default class SolidPolygonLayer extends Layer {
	    getShaders(): {
	        vs: string;
	        fs: string;
	        modules: string[];
	    };
	    initializeState(): void;
	    draw({ uniforms }: {
	        uniforms: any;
	    }): void;
	    updateState(updateParams: any): void;
	    updateGeometry({ props, oldProps, changeFlags }: {
	        props: any;
	        oldProps: any;
	        changeFlags: any;
	    }): void;
	    updateAttributes(props: any): void;
	    _updateAttributes(attributes: any): void;
	    _getModels(gl: any): {
	        models: any[];
	        modelsByName: {};
	    };
	    calculateIndices(attribute: any): void;
	    calculatePositions(attribute: any): void;
	    calculatePositionsLow(attribute: any): void;
	    calculateNextPositions(attribute: any): void;
	    calculateNextPositionsLow(attribute: any): void;
	    calculateElevations(attribute: any): void;
	    calculateFillColors(attribute: any): void;
	    calculateLineColors(attribute: any): void;
	    calculatePickingColors(attribute: any): void;
	}

}
declare module '@deck.gl/layers/polygon-layer/polygon-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	export default class PolygonLayer extends CompositeLayer {
	    initializeState(): void;
	    updateState({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): void;
	    getPickingInfo({ info }: {
	        info: any;
	    }): any;
	    _getAccessor(accessor: any): any;
	    renderLayers(): any[];
	}

}
declare module '@deck.gl/layers/geojson-layer/geojson' {
	export default function assert(condition: any, message: any): void;
	/**
	 * "Normalizes" complete or partial GeoJSON data into iterable list of features
	 * Can accept GeoJSON geometry or "Feature", "FeatureCollection" in addition
	 * to plain arrays and iterables.
	 * Works by extracting the feature array or wrapping single objects in an array,
	 * so that subsequent code can simply iterate over features.
	 *
	 * @param {object} geojson - geojson data
	 * @param {Object|Array} data - geojson object (FeatureCollection, Feature or
	 *  Geometry) or array of features
	 * @return {Array|"iteratable"} - iterable list of features
	 */
	export function getGeojsonFeatures(geojson: any): any;
	export function separateGeojsonFeatures(features: any): {
	    pointFeatures: any[];
	    lineFeatures: any[];
	    polygonFeatures: any[];
	    polygonOutlineFeatures: any[];
	};

}
declare module '@deck.gl/layers/geojson-layer/geojson-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	export default class GeoJsonLayer extends CompositeLayer {
	    initializeState(): void;
	    updateState({ oldProps, props, changeFlags }: {
	        oldProps: any;
	        props: any;
	        changeFlags: any;
	    }): void;
	    getPickingInfo({ info }: {
	        info: any;
	    }): any;
	    renderLayers(): any[];
	}

}
declare module '@deck.gl/layers/text-layer/multi-icon-layer/multi-icon-layer-vertex.glsl' {
	 const _default: "#define SHADER_NAME multi-icon-layer-vertex-shader\n\nattribute vec2 positions;\n\nattribute vec3 instancePositions;\nattribute vec2 instancePositions64xyLow;\nattribute float instanceSizes;\nattribute float instanceAngles;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\nattribute vec4 instanceIconFrames;\nattribute float instanceColorModes;\nattribute vec2 instanceOffsets;\n\n// the following three attributes are for the multi-icon layer\nattribute vec2 instancePixelOffset;\n\nuniform float sizeScale;\nuniform vec2 iconsTextureDim;\n\nvarying float vColorMode;\nvarying vec4 vColor;\nvarying vec2 vTextureCoords;\n\nvec2 rotate_by_angle(vec2 vertex, float angle) {\n  float angle_radian = angle * PI / 180.0;\n  float cos_angle = cos(angle_radian);\n  float sin_angle = sin(angle_radian);\n  mat2 rotationMatrix = mat2(cos_angle, -sin_angle, sin_angle, cos_angle);\n  return rotationMatrix * vertex;\n}\n\nvoid main(void) {\n  vec2 iconSize = instanceIconFrames.zw;\n  // scale icon height to match instanceSize\n  float instanceScale = iconSize.y == 0.0 ? 0.0 : instanceSizes / iconSize.y;\n\n  // scale and rotate vertex in \"pixel\" value and convert back to fraction in clipspace\n  vec2 pixelOffset = positions / 2.0 * iconSize + instanceOffsets;\n\n  pixelOffset = rotate_by_angle(pixelOffset, instanceAngles) * sizeScale * instanceScale;\n  pixelOffset += instancePixelOffset;\n  pixelOffset.y *= -1.0;\n\n  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, vec3(0.0));\n  gl_Position += project_pixel_to_clipspace(pixelOffset);\n\n  vTextureCoords = mix(\n    instanceIconFrames.xy,\n    instanceIconFrames.xy + iconSize,\n    (positions.xy + 1.0) / 2.0\n  ) / iconsTextureDim;\n\n  vTextureCoords.y = 1.0 - vTextureCoords.y;\n\n  vColor = instanceColors / 255.;\n  picking_setPickingColor(instancePickingColors);\n\n  vColorMode = instanceColorModes;\n}\n";
	export default _default;

}
declare module '@deck.gl/layers/text-layer/multi-icon-layer/multi-icon-layer' {
	import IconLayer from '@deck.gl/layers/icon-layer/icon-layer';
	export default class MultiIconLayer extends IconLayer {
	    getShaders(): {
	        vs: string;
	        fs: string;
	        modules: string[];
	    } & {
	        vs: string;
	    };
	    initializeState(): void;
	    updateState(updateParams: any): void;
	    calculateInstanceOffsets(attribute: any): void;
	}

}
declare module '@deck.gl/layers/text-layer/font-atlas' {
	export const DEFAULT_CHAR_SET: any[];
	export function makeFontAtlas(gl: any, { fontFamily, characterSet, fontSize, padding }: {
	    fontFamily: any;
	    characterSet?: any[];
	    fontSize?: number;
	    padding?: number;
	}): {
	    scale: number;
	    mapping: {};
	    texture: any;
	};

}
declare module '@deck.gl/layers/text-layer/text-layer' {
	import { CompositeLayer } from '@deck.gl/core';
	export default class TextLayer extends CompositeLayer {
	    updateState({ props, oldProps, changeFlags }: {
	        props: any;
	        oldProps: any;
	        changeFlags: any;
	    }): void;
	    updateFontAtlas(fontFamily: any, characterSet: any): void;
	    getPickingInfo({ info }: {
	        info: any;
	    }): any;
	    transformStringToLetters(): void;
	    getLetterOffset(datum: any): any;
	    getTextLength(datum: any): any;
	    _getAccessor(accessor: any): any;
	    getAnchorXFromTextAnchor(getTextAnchor: any): (x: any) => any;
	    getAnchorYFromAlignmentBaseline(getAlignmentBaseline: any): (x: any) => any;
	    renderLayers(): any[];
	}

}
declare module '@deck.gl/layers/index' {
	export { default as ArcLayer } from '@deck.gl/layers/arc-layer/arc-layer';
	export { default as IconLayer } from '@deck.gl/layers/icon-layer/icon-layer';
	export { default as LineLayer } from '@deck.gl/layers/line-layer/line-layer';
	export { default as PointCloudLayer } from '@deck.gl/layers/point-cloud-layer/point-cloud-layer';
	export { default as ScatterplotLayer } from '@deck.gl/layers/scatterplot-layer/scatterplot-layer';
	export { default as ScreenGridLayer } from '@deck.gl/layers/screen-grid-layer/screen-grid-layer';
	export { default as GridLayer } from '@deck.gl/layers/grid-layer/grid-layer';
	export { default as GridCellLayer } from '@deck.gl/layers/grid-cell-layer/grid-cell-layer';
	export { default as HexagonLayer } from '@deck.gl/layers/hexagon-layer/hexagon-layer';
	export { default as HexagonCellLayer } from '@deck.gl/layers/hexagon-cell-layer/hexagon-cell-layer';
	export { default as PathLayer } from '@deck.gl/layers/path-layer/path-layer';
	export { default as PolygonLayer } from '@deck.gl/layers/polygon-layer/polygon-layer';
	export { default as GeoJsonLayer } from '@deck.gl/layers/geojson-layer/geojson-layer';
	export { default as TextLayer } from '@deck.gl/layers/text-layer/text-layer';

}
