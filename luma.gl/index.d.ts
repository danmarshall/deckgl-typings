declare module 'luma.gl/utils/is-electron' {
	const _default: boolean;
	export default _default;

}
declare module 'luma.gl/utils/is-browser' {
	const isBrowser: boolean;
	export const isBrowserMainThread: boolean;
	export default isBrowser;

}
declare module 'luma.gl/webgl-utils/webgl-types' {
	export let headlessTypes: any; const WebGLRenderingContext: any, WebGLProgram: any, WebGLShader: any, WebGLBuffer: any, WebGLFramebuffer: any, WebGLRenderbuffer: any, WebGLTexture: any, WebGLUniformLocation: any, WebGLActiveInfo: any, WebGLShaderPrecisionFormat: any;
	export const webGLTypesAvailable: boolean; const WebGL2RenderingContext: any; const Image: any;
	export { Image, WebGLRenderingContext, WebGLProgram, WebGLShader, WebGLBuffer, WebGLFramebuffer, WebGLRenderbuffer, WebGLTexture, WebGLUniformLocation, WebGLActiveInfo, WebGLShaderPrecisionFormat, WebGL2RenderingContext };

}
declare module 'luma.gl/webgl-utils/request-animation-frame' {
	export function requestAnimationFrame(callback: any): number;
	export function cancelAnimationFrame(timerId: any): void;

}
declare module 'luma.gl/webgl-utils/get-shader-name' {
	export default function getShaderName(shader: any): any;
	export function getShaderTypeName(type: any): "fragment" | "vertex" | "unknown type";

}
declare module 'luma.gl/webgl-utils/format-glsl-error' {
	/**
	 * Parse a GLSL compiler error log into a string showing the source code around each error.
	 * Based on https://github.com/wwwtyro/gl-format-compiler-error (public domain)
	 */
	export function parseGLSLCompilerError(errLog: any, src: any, shaderType: any): {
		shaderName: string;
		errors: string;
		warnings: string;
	};
	export default function formatGLSLCompilerError(errLog: any, src: any, shaderType: any): string;

}
declare module 'luma.gl/webgl-utils/typed-array-utils' {
	export function getGLTypeFromTypedArray(arrayOrType: any): 5120 | 5121 | 5122 | 5123 | 5124 | 5125 | 5126;
	export function getTypedArrayFromGLType(glType: any, { clamped }?: {
		clamped?: boolean;
	}): Float32ArrayConstructor | Uint16ArrayConstructor | Uint32ArrayConstructor | Uint8ArrayConstructor | Uint8ClampedArrayConstructor | Int8ArrayConstructor | Int16ArrayConstructor | Int32ArrayConstructor;
	export function flipRows({ data, width, height, bytesPerPixel, temp }: {
		data: any;
		width: any;
		height: any;
		bytesPerPixel?: number;
		temp: any;
	}): void;
	export function scalePixels({ data, width, height }: {
		data: any;
		width: any;
		height: any;
	}): {
			data: Uint8Array;
			width: number;
			height: number;
		};

}
declare module 'luma.gl/utils/assert' {
	export default function assert(condition: any, message: any): void;

}
declare module 'luma.gl/webgl-utils/constants-to-keys' {
	export function getKeyValue(gl: WebGLRenderingContext, name: any): any;
	export function getKey(gl: WebGLRenderingContext, value: any): string;
	export function getKeyType(gl: WebGLRenderingContext, value: any): string;

}
declare module 'luma.gl/constants' {
	const _default: {
		DEPTH_BUFFER_BIT: number;
		STENCIL_BUFFER_BIT: number;
		COLOR_BUFFER_BIT: number;
		POINTS: number;
		LINES: number;
		LINE_LOOP: number;
		LINE_STRIP: number;
		TRIANGLES: number;
		TRIANGLE_STRIP: number;
		TRIANGLE_FAN: number;
		ZERO: number;
		ONE: number;
		SRC_COLOR: number;
		ONE_MINUS_SRC_COLOR: number;
		SRC_ALPHA: number;
		ONE_MINUS_SRC_ALPHA: number;
		DST_ALPHA: number;
		ONE_MINUS_DST_ALPHA: number;
		DST_COLOR: number;
		ONE_MINUS_DST_COLOR: number;
		SRC_ALPHA_SATURATE: number;
		CONSTANT_COLOR: number;
		ONE_MINUS_CONSTANT_COLOR: number;
		CONSTANT_ALPHA: number;
		ONE_MINUS_CONSTANT_ALPHA: number;
		FUNC_ADD: number;
		FUNC_SUBTRACT: number;
		FUNC_REVERSE_SUBTRACT: number;
		BLEND_EQUATION: number;
		BLEND_EQUATION_RGB: number;
		BLEND_EQUATION_ALPHA: number;
		BLEND_DST_RGB: number;
		BLEND_SRC_RGB: number;
		BLEND_DST_ALPHA: number;
		BLEND_SRC_ALPHA: number;
		BLEND_COLOR: number;
		ARRAY_BUFFER_BINDING: number;
		ELEMENT_ARRAY_BUFFER_BINDING: number;
		LINE_WIDTH: number;
		ALIASED_POINT_SIZE_RANGE: number;
		ALIASED_LINE_WIDTH_RANGE: number;
		CULL_FACE_MODE: number;
		FRONT_FACE: number;
		DEPTH_RANGE: number;
		DEPTH_WRITEMASK: number;
		DEPTH_CLEAR_VALUE: number;
		DEPTH_FUNC: number;
		STENCIL_CLEAR_VALUE: number;
		STENCIL_FUNC: number;
		STENCIL_FAIL: number;
		STENCIL_PASS_DEPTH_FAIL: number;
		STENCIL_PASS_DEPTH_PASS: number;
		STENCIL_REF: number;
		STENCIL_VALUE_MASK: number;
		STENCIL_WRITEMASK: number;
		STENCIL_BACK_FUNC: number;
		STENCIL_BACK_FAIL: number;
		STENCIL_BACK_PASS_DEPTH_FAIL: number;
		STENCIL_BACK_PASS_DEPTH_PASS: number;
		STENCIL_BACK_REF: number;
		STENCIL_BACK_VALUE_MASK: number;
		STENCIL_BACK_WRITEMASK: number;
		VIEWPORT: number;
		SCISSOR_BOX: number;
		COLOR_CLEAR_VALUE: number;
		COLOR_WRITEMASK: number;
		UNPACK_ALIGNMENT: number;
		PACK_ALIGNMENT: number;
		MAX_TEXTURE_SIZE: number;
		MAX_VIEWPORT_DIMS: number;
		SUBPIXEL_BITS: number;
		RED_BITS: number;
		GREEN_BITS: number;
		BLUE_BITS: number;
		ALPHA_BITS: number;
		DEPTH_BITS: number;
		STENCIL_BITS: number;
		POLYGON_OFFSET_UNITS: number;
		POLYGON_OFFSET_FACTOR: number;
		TEXTURE_BINDING_2D: number;
		SAMPLE_BUFFERS: number;
		SAMPLES: number;
		SAMPLE_COVERAGE_VALUE: number;
		SAMPLE_COVERAGE_INVERT: number;
		COMPRESSED_TEXTURE_FORMATS: number;
		VENDOR: number;
		RENDERER: number;
		VERSION: number;
		IMPLEMENTATION_COLOR_READ_TYPE: number;
		IMPLEMENTATION_COLOR_READ_FORMAT: number;
		BROWSER_DEFAULT_WEBGL: number;
		STATIC_DRAW: number;
		STREAM_DRAW: number;
		DYNAMIC_DRAW: number;
		ARRAY_BUFFER: number;
		ELEMENT_ARRAY_BUFFER: number;
		BUFFER_SIZE: number;
		BUFFER_USAGE: number;
		CURRENT_VERTEX_ATTRIB: number;
		VERTEX_ATTRIB_ARRAY_ENABLED: number;
		VERTEX_ATTRIB_ARRAY_SIZE: number;
		VERTEX_ATTRIB_ARRAY_STRIDE: number;
		VERTEX_ATTRIB_ARRAY_TYPE: number;
		VERTEX_ATTRIB_ARRAY_NORMALIZED: number;
		VERTEX_ATTRIB_ARRAY_POINTER: number;
		VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;
		CULL_FACE: number;
		FRONT: number;
		BACK: number;
		FRONT_AND_BACK: number;
		BLEND: number;
		DEPTH_TEST: number;
		DITHER: number;
		POLYGON_OFFSET_FILL: number;
		SAMPLE_ALPHA_TO_COVERAGE: number;
		SAMPLE_COVERAGE: number;
		SCISSOR_TEST: number;
		STENCIL_TEST: number;
		NO_ERROR: number;
		INVALID_ENUM: number;
		INVALID_VALUE: number;
		INVALID_OPERATION: number;
		OUT_OF_MEMORY: number;
		CONTEXT_LOST_WEBGL: number;
		CW: number;
		CCW: number;
		DONT_CARE: number;
		FASTEST: number;
		NICEST: number;
		GENERATE_MIPMAP_HINT: number;
		BYTE: number;
		UNSIGNED_BYTE: number;
		SHORT: number;
		UNSIGNED_SHORT: number;
		INT: number;
		UNSIGNED_INT: number;
		FLOAT: number;
		DEPTH_COMPONENT: number;
		ALPHA: number;
		RGB: number;
		RGBA: number;
		LUMINANCE: number;
		LUMINANCE_ALPHA: number;
		UNSIGNED_SHORT_4_4_4_4: number;
		UNSIGNED_SHORT_5_5_5_1: number;
		UNSIGNED_SHORT_5_6_5: number;
		FRAGMENT_SHADER: number;
		VERTEX_SHADER: number;
		COMPILE_STATUS: number;
		DELETE_STATUS: number;
		LINK_STATUS: number;
		VALIDATE_STATUS: number;
		ATTACHED_SHADERS: number;
		ACTIVE_ATTRIBUTES: number;
		ACTIVE_UNIFORMS: number;
		MAX_VERTEX_ATTRIBS: number;
		MAX_VERTEX_UNIFORM_VECTORS: number;
		MAX_VARYING_VECTORS: number;
		MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;
		MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;
		MAX_TEXTURE_IMAGE_UNITS: number;
		MAX_FRAGMENT_UNIFORM_VECTORS: number;
		SHADER_TYPE: number;
		SHADING_LANGUAGE_VERSION: number;
		CURRENT_PROGRAM: number;
		NEVER: number;
		ALWAYS: number;
		LESS: number;
		EQUAL: number;
		LEQUAL: number;
		GREATER: number;
		GEQUAL: number;
		NOTEQUAL: number;
		KEEP: number;
		REPLACE: number;
		INCR: number;
		DECR: number;
		INVERT: number;
		INCR_WRAP: number;
		DECR_WRAP: number;
		NEAREST: number;
		LINEAR: number;
		NEAREST_MIPMAP_NEAREST: number;
		LINEAR_MIPMAP_NEAREST: number;
		NEAREST_MIPMAP_LINEAR: number;
		LINEAR_MIPMAP_LINEAR: number;
		TEXTURE_MAG_FILTER: number;
		TEXTURE_MIN_FILTER: number;
		TEXTURE_WRAP_S: number;
		TEXTURE_WRAP_T: number;
		TEXTURE_2D: number;
		TEXTURE: number;
		TEXTURE_CUBE_MAP: number;
		TEXTURE_BINDING_CUBE_MAP: number;
		TEXTURE_CUBE_MAP_POSITIVE_X: number;
		TEXTURE_CUBE_MAP_NEGATIVE_X: number;
		TEXTURE_CUBE_MAP_POSITIVE_Y: number;
		TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
		TEXTURE_CUBE_MAP_POSITIVE_Z: number;
		TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
		MAX_CUBE_MAP_TEXTURE_SIZE: number;
		TEXTURE0: number;
		ACTIVE_TEXTURE: number;
		REPEAT: number;
		CLAMP_TO_EDGE: number;
		MIRRORED_REPEAT: number;
		TEXTURE_WIDTH: number;
		TEXTURE_HEIGHT: number;
		FLOAT_VEC2: number;
		FLOAT_VEC3: number;
		FLOAT_VEC4: number;
		INT_VEC2: number;
		INT_VEC3: number;
		INT_VEC4: number;
		BOOL: number;
		BOOL_VEC2: number;
		BOOL_VEC3: number;
		BOOL_VEC4: number;
		FLOAT_MAT2: number;
		FLOAT_MAT3: number;
		FLOAT_MAT4: number;
		SAMPLER_2D: number;
		SAMPLER_CUBE: number;
		LOW_FLOAT: number;
		MEDIUM_FLOAT: number;
		HIGH_FLOAT: number;
		LOW_INT: number;
		MEDIUM_INT: number;
		HIGH_INT: number;
		FRAMEBUFFER: number;
		RENDERBUFFER: number;
		RGBA4: number;
		RGB5_A1: number;
		RGB565: number;
		DEPTH_COMPONENT16: number;
		STENCIL_INDEX: number;
		STENCIL_INDEX8: number;
		DEPTH_STENCIL: number;
		RENDERBUFFER_WIDTH: number;
		RENDERBUFFER_HEIGHT: number;
		RENDERBUFFER_INTERNAL_FORMAT: number;
		RENDERBUFFER_RED_SIZE: number;
		RENDERBUFFER_GREEN_SIZE: number;
		RENDERBUFFER_BLUE_SIZE: number;
		RENDERBUFFER_ALPHA_SIZE: number;
		RENDERBUFFER_DEPTH_SIZE: number;
		RENDERBUFFER_STENCIL_SIZE: number;
		FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;
		FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;
		FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;
		FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;
		COLOR_ATTACHMENT0: number;
		DEPTH_ATTACHMENT: number;
		STENCIL_ATTACHMENT: number;
		DEPTH_STENCIL_ATTACHMENT: number;
		NONE: number;
		FRAMEBUFFER_COMPLETE: number;
		FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
		FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
		FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;
		FRAMEBUFFER_UNSUPPORTED: number;
		FRAMEBUFFER_BINDING: number;
		RENDERBUFFER_BINDING: number;
		READ_FRAMEBUFFER: number;
		DRAW_FRAMEBUFFER: number;
		MAX_RENDERBUFFER_SIZE: number;
		INVALID_FRAMEBUFFER_OPERATION: number;
		UNPACK_FLIP_Y_WEBGL: number;
		UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;
		UNPACK_COLORSPACE_CONVERSION_WEBGL: number;
		READ_BUFFER: number;
		UNPACK_ROW_LENGTH: number;
		UNPACK_SKIP_ROWS: number;
		UNPACK_SKIP_PIXELS: number;
		PACK_ROW_LENGTH: number;
		PACK_SKIP_ROWS: number;
		PACK_SKIP_PIXELS: number;
		TEXTURE_BINDING_3D: number;
		UNPACK_SKIP_IMAGES: number;
		UNPACK_IMAGE_HEIGHT: number;
		MAX_3D_TEXTURE_SIZE: number;
		MAX_ELEMENTS_VERTICES: number;
		MAX_ELEMENTS_INDICES: number;
		MAX_TEXTURE_LOD_BIAS: number;
		MAX_FRAGMENT_UNIFORM_COMPONENTS: number;
		MAX_VERTEX_UNIFORM_COMPONENTS: number;
		MAX_ARRAY_TEXTURE_LAYERS: number;
		MIN_PROGRAM_TEXEL_OFFSET: number;
		MAX_PROGRAM_TEXEL_OFFSET: number;
		MAX_VARYING_COMPONENTS: number;
		FRAGMENT_SHADER_DERIVATIVE_HINT: number;
		RASTERIZER_DISCARD: number;
		VERTEX_ARRAY_BINDING: number;
		MAX_VERTEX_OUTPUT_COMPONENTS: number;
		MAX_FRAGMENT_INPUT_COMPONENTS: number;
		MAX_SERVER_WAIT_TIMEOUT: number;
		MAX_ELEMENT_INDEX: number;
		RED: number;
		RGB8: number;
		RGBA8: number;
		RGB10_A2: number;
		TEXTURE_3D: number;
		TEXTURE_WRAP_R: number;
		TEXTURE_MIN_LOD: number;
		TEXTURE_MAX_LOD: number;
		TEXTURE_BASE_LEVEL: number;
		TEXTURE_MAX_LEVEL: number;
		TEXTURE_COMPARE_MODE: number;
		TEXTURE_COMPARE_FUNC: number;
		SRGB: number;
		SRGB8: number;
		SRGB8_ALPHA8: number;
		COMPARE_REF_TO_TEXTURE: number;
		RGBA32F: number;
		RGB32F: number;
		RGBA16F: number;
		RGB16F: number;
		TEXTURE_2D_ARRAY: number;
		TEXTURE_BINDING_2D_ARRAY: number;
		R11F_G11F_B10F: number;
		RGB9_E5: number;
		RGBA32UI: number;
		RGB32UI: number;
		RGBA16UI: number;
		RGB16UI: number;
		RGBA8UI: number;
		RGB8UI: number;
		RGBA32I: number;
		RGB32I: number;
		RGBA16I: number;
		RGB16I: number;
		RGBA8I: number;
		RGB8I: number;
		RED_INTEGER: number;
		RGB_INTEGER: number;
		RGBA_INTEGER: number;
		R8: number;
		RG8: number;
		R16F: number;
		R32F: number;
		RG16F: number;
		RG32F: number;
		R8I: number;
		R8UI: number;
		R16I: number;
		R16UI: number;
		R32I: number;
		R32UI: number;
		RG8I: number;
		RG8UI: number;
		RG16I: number;
		RG16UI: number;
		RG32I: number;
		RG32UI: number;
		R8_SNORM: number;
		RG8_SNORM: number;
		RGB8_SNORM: number;
		RGBA8_SNORM: number;
		RGB10_A2UI: number;
		TEXTURE_IMMUTABLE_FORMAT: number;
		TEXTURE_IMMUTABLE_LEVELS: number;
		UNSIGNED_INT_2_10_10_10_REV: number;
		UNSIGNED_INT_10F_11F_11F_REV: number;
		UNSIGNED_INT_5_9_9_9_REV: number;
		FLOAT_32_UNSIGNED_INT_24_8_REV: number;
		UNSIGNED_INT_24_8: number;
		HALF_FLOAT: number;
		RG: number;
		RG_INTEGER: number;
		INT_2_10_10_10_REV: number;
		CURRENT_QUERY: number;
		QUERY_RESULT: number;
		QUERY_RESULT_AVAILABLE: number;
		ANY_SAMPLES_PASSED: number;
		ANY_SAMPLES_PASSED_CONSERVATIVE: number;
		MAX_DRAW_BUFFERS: number;
		DRAW_BUFFER0: number;
		DRAW_BUFFER1: number;
		DRAW_BUFFER2: number;
		DRAW_BUFFER3: number;
		DRAW_BUFFER4: number;
		DRAW_BUFFER5: number;
		DRAW_BUFFER6: number;
		DRAW_BUFFER7: number;
		DRAW_BUFFER8: number;
		DRAW_BUFFER9: number;
		DRAW_BUFFER10: number;
		DRAW_BUFFER11: number;
		DRAW_BUFFER12: number;
		DRAW_BUFFER13: number;
		DRAW_BUFFER14: number;
		DRAW_BUFFER15: number;
		MAX_COLOR_ATTACHMENTS: number;
		COLOR_ATTACHMENT1: number;
		COLOR_ATTACHMENT2: number;
		COLOR_ATTACHMENT3: number;
		COLOR_ATTACHMENT4: number;
		COLOR_ATTACHMENT5: number;
		COLOR_ATTACHMENT6: number;
		COLOR_ATTACHMENT7: number;
		COLOR_ATTACHMENT8: number;
		COLOR_ATTACHMENT9: number;
		COLOR_ATTACHMENT10: number;
		COLOR_ATTACHMENT11: number;
		COLOR_ATTACHMENT12: number;
		COLOR_ATTACHMENT13: number;
		COLOR_ATTACHMENT14: number;
		COLOR_ATTACHMENT15: number;
		SAMPLER_3D: number;
		SAMPLER_2D_SHADOW: number;
		SAMPLER_2D_ARRAY: number;
		SAMPLER_2D_ARRAY_SHADOW: number;
		SAMPLER_CUBE_SHADOW: number;
		INT_SAMPLER_2D: number;
		INT_SAMPLER_3D: number;
		INT_SAMPLER_CUBE: number;
		INT_SAMPLER_2D_ARRAY: number;
		UNSIGNED_INT_SAMPLER_2D: number;
		UNSIGNED_INT_SAMPLER_3D: number;
		UNSIGNED_INT_SAMPLER_CUBE: number;
		UNSIGNED_INT_SAMPLER_2D_ARRAY: number;
		MAX_SAMPLES: number;
		SAMPLER_BINDING: number;
		PIXEL_PACK_BUFFER: number;
		PIXEL_UNPACK_BUFFER: number;
		PIXEL_PACK_BUFFER_BINDING: number;
		PIXEL_UNPACK_BUFFER_BINDING: number;
		COPY_READ_BUFFER: number;
		COPY_WRITE_BUFFER: number;
		COPY_READ_BUFFER_BINDING: number;
		COPY_WRITE_BUFFER_BINDING: number;
		FLOAT_MAT2x3: number;
		FLOAT_MAT2x4: number;
		FLOAT_MAT3x2: number;
		FLOAT_MAT3x4: number;
		FLOAT_MAT4x2: number;
		FLOAT_MAT4x3: number;
		UNSIGNED_INT_VEC2: number;
		UNSIGNED_INT_VEC3: number;
		UNSIGNED_INT_VEC4: number;
		UNSIGNED_NORMALIZED: number;
		SIGNED_NORMALIZED: number;
		VERTEX_ATTRIB_ARRAY_INTEGER: number;
		VERTEX_ATTRIB_ARRAY_DIVISOR: number;
		TRANSFORM_FEEDBACK_BUFFER_MODE: number;
		MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: number;
		TRANSFORM_FEEDBACK_VARYINGS: number;
		TRANSFORM_FEEDBACK_BUFFER_START: number;
		TRANSFORM_FEEDBACK_BUFFER_SIZE: number;
		TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: number;
		MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: number;
		MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: number;
		INTERLEAVED_ATTRIBS: number;
		SEPARATE_ATTRIBS: number;
		TRANSFORM_FEEDBACK_BUFFER: number;
		TRANSFORM_FEEDBACK_BUFFER_BINDING: number;
		TRANSFORM_FEEDBACK: number;
		TRANSFORM_FEEDBACK_PAUSED: number;
		TRANSFORM_FEEDBACK_ACTIVE: number;
		TRANSFORM_FEEDBACK_BINDING: number;
		FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: number;
		FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: number;
		FRAMEBUFFER_ATTACHMENT_RED_SIZE: number;
		FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: number;
		FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: number;
		FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: number;
		FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: number;
		FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: number;
		FRAMEBUFFER_DEFAULT: number;
		DEPTH24_STENCIL8: number;
		DRAW_FRAMEBUFFER_BINDING: number;
		READ_FRAMEBUFFER_BINDING: number;
		RENDERBUFFER_SAMPLES: number;
		FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: number;
		FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: number;
		UNIFORM_BUFFER: number;
		UNIFORM_BUFFER_BINDING: number;
		UNIFORM_BUFFER_START: number;
		UNIFORM_BUFFER_SIZE: number;
		MAX_VERTEX_UNIFORM_BLOCKS: number;
		MAX_FRAGMENT_UNIFORM_BLOCKS: number;
		MAX_COMBINED_UNIFORM_BLOCKS: number;
		MAX_UNIFORM_BUFFER_BINDINGS: number;
		MAX_UNIFORM_BLOCK_SIZE: number;
		MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: number;
		MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: number;
		UNIFORM_BUFFER_OFFSET_ALIGNMENT: number;
		ACTIVE_UNIFORM_BLOCKS: number;
		UNIFORM_TYPE: number;
		UNIFORM_SIZE: number;
		UNIFORM_BLOCK_INDEX: number;
		UNIFORM_OFFSET: number;
		UNIFORM_ARRAY_STRIDE: number;
		UNIFORM_MATRIX_STRIDE: number;
		UNIFORM_IS_ROW_MAJOR: number;
		UNIFORM_BLOCK_BINDING: number;
		UNIFORM_BLOCK_DATA_SIZE: number;
		UNIFORM_BLOCK_ACTIVE_UNIFORMS: number;
		UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: number;
		UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: number;
		UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: number;
		OBJECT_TYPE: number;
		SYNC_CONDITION: number;
		SYNC_STATUS: number;
		SYNC_FLAGS: number;
		SYNC_FENCE: number;
		SYNC_GPU_COMMANDS_COMPLETE: number;
		UNSIGNALED: number;
		SIGNALED: number;
		ALREADY_SIGNALED: number;
		TIMEOUT_EXPIRED: number;
		CONDITION_SATISFIED: number;
		WAIT_FAILED: number;
		SYNC_FLUSH_COMMANDS_BIT: number;
		COLOR: number;
		DEPTH: number;
		STENCIL: number;
		MIN: number;
		MAX: number;
		DEPTH_COMPONENT24: number;
		STREAM_READ: number;
		STREAM_COPY: number;
		STATIC_READ: number;
		STATIC_COPY: number;
		DYNAMIC_READ: number;
		DYNAMIC_COPY: number;
		DEPTH_COMPONENT32F: number;
		DEPTH32F_STENCIL8: number;
		INVALID_INDEX: number;
		TIMEOUT_IGNORED: number;
		MAX_CLIENT_WAIT_TIMEOUT_WEBGL: number;
		VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: number;
		UNMASKED_VENDOR_WEBGL: number;
		UNMASKED_RENDERER_WEBGL: number;
		MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;
		TEXTURE_MAX_ANISOTROPY_EXT: number;
		COMPRESSED_RGB_S3TC_DXT1_EXT: number;
		COMPRESSED_RGBA_S3TC_DXT1_EXT: number;
		COMPRESSED_RGBA_S3TC_DXT3_EXT: number;
		COMPRESSED_RGBA_S3TC_DXT5_EXT: number;
		COMPRESSED_R11_EAC: number;
		COMPRESSED_SIGNED_R11_EAC: number;
		COMPRESSED_RG11_EAC: number;
		COMPRESSED_SIGNED_RG11_EAC: number;
		COMPRESSED_RGB8_ETC2: number;
		COMPRESSED_RGBA8_ETC2_EAC: number;
		COMPRESSED_SRGB8_ETC2: number;
		COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: number;
		COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;
		COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;
		COMPRESSED_RGB_PVRTC_4BPPV1_IMG: number;
		COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: number;
		COMPRESSED_RGB_PVRTC_2BPPV1_IMG: number;
		COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: number;
		COMPRESSED_RGB_ETC1_WEBGL: number;
		COMPRESSED_RGB_ATC_WEBGL: number;
		COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL: number;
		COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL: number;
		UNSIGNED_INT_24_8_WEBGL: number;
		HALF_FLOAT_OES: number;
		RGBA32F_EXT: number;
		RGB32F_EXT: number;
		FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: number;
		UNSIGNED_NORMALIZED_EXT: number;
		MIN_EXT: number;
		MAX_EXT: number;
		SRGB_EXT: number;
		SRGB_ALPHA_EXT: number;
		SRGB8_ALPHA8_EXT: number;
		FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: number;
		FRAGMENT_SHADER_DERIVATIVE_HINT_OES: number;
		COLOR_ATTACHMENT0_WEBGL: number;
		COLOR_ATTACHMENT1_WEBGL: number;
		COLOR_ATTACHMENT2_WEBGL: number;
		COLOR_ATTACHMENT3_WEBGL: number;
		COLOR_ATTACHMENT4_WEBGL: number;
		COLOR_ATTACHMENT5_WEBGL: number;
		COLOR_ATTACHMENT6_WEBGL: number;
		COLOR_ATTACHMENT7_WEBGL: number;
		COLOR_ATTACHMENT8_WEBGL: number;
		COLOR_ATTACHMENT9_WEBGL: number;
		COLOR_ATTACHMENT10_WEBGL: number;
		COLOR_ATTACHMENT11_WEBGL: number;
		COLOR_ATTACHMENT12_WEBGL: number;
		COLOR_ATTACHMENT13_WEBGL: number;
		COLOR_ATTACHMENT14_WEBGL: number;
		COLOR_ATTACHMENT15_WEBGL: number;
		DRAW_BUFFER0_WEBGL: number;
		DRAW_BUFFER1_WEBGL: number;
		DRAW_BUFFER2_WEBGL: number;
		DRAW_BUFFER3_WEBGL: number;
		DRAW_BUFFER4_WEBGL: number;
		DRAW_BUFFER5_WEBGL: number;
		DRAW_BUFFER6_WEBGL: number;
		DRAW_BUFFER7_WEBGL: number;
		DRAW_BUFFER8_WEBGL: number;
		DRAW_BUFFER9_WEBGL: number;
		DRAW_BUFFER10_WEBGL: number;
		DRAW_BUFFER11_WEBGL: number;
		DRAW_BUFFER12_WEBGL: number;
		DRAW_BUFFER13_WEBGL: number;
		DRAW_BUFFER14_WEBGL: number;
		DRAW_BUFFER15_WEBGL: number;
		MAX_COLOR_ATTACHMENTS_WEBGL: number;
		MAX_DRAW_BUFFERS_WEBGL: number;
		VERTEX_ARRAY_BINDING_OES: number;
		QUERY_COUNTER_BITS_EXT: number;
		CURRENT_QUERY_EXT: number;
		QUERY_RESULT_EXT: number;
		QUERY_RESULT_AVAILABLE_EXT: number;
		TIME_ELAPSED_EXT: number;
		TIMESTAMP_EXT: number;
		GPU_DISJOINT_EXT: number;
	};
	export default _default;

}
declare module 'luma.gl/webgl-utils' {
	export { Image, WebGLRenderingContext, WebGLProgram, WebGLShader, WebGLBuffer, WebGLFramebuffer, WebGLRenderbuffer, WebGLTexture, WebGLUniformLocation, WebGLActiveInfo, WebGLShaderPrecisionFormat, WebGL2RenderingContext, webGLTypesAvailable } from 'luma.gl/webgl-utils/webgl-types';
	export { isWebGL, isWebGL2, assertWebGLContext, assertWebGL2Context } from 'luma.gl/webgl-utils/webgl-checks';
	export { requestAnimationFrame, cancelAnimationFrame } from 'luma.gl/webgl-utils/request-animation-frame';
	export { default as formatGLSLCompilerError, parseGLSLCompilerError } from 'luma.gl/webgl-utils/format-glsl-error';
	export { default as getShaderName } from 'luma.gl/webgl-utils/get-shader-name';
	export { getGLTypeFromTypedArray, getTypedArrayFromGLType, flipRows, scalePixels } from 'luma.gl/webgl-utils/typed-array-utils';
	export { getKeyValue, getKey, getKeyType } from 'luma.gl/webgl-utils/constants-to-keys';
	export { default as GL } from 'luma.gl/constants';

}
declare module 'luma.gl/webgl-utils/webgl-checks' {
	export const ERR_CONTEXT = "Invalid WebGLRenderingContext";
	export const ERR_WEBGL = "Invalid WebGLRenderingContext";
	export const ERR_WEBGL2 = "Requires WebGL2";
	export function isWebGL(gl: WebGLRenderingContext): boolean;
	export function isWebGL2(gl: WebGLRenderingContext): boolean;
	export function assertWebGLContext(gl: WebGLRenderingContext): void;
	export function assertWebGL2Context(gl: WebGLRenderingContext): void;

}
declare module 'luma.gl/webgl-context/create-headless-context' {
	export let headlessGL: any;
	export const isWebglAvailable: any;
	export function createHeadlessContext({ width, height, opts, onError }: {
		width: any;
		height: any;
		opts: any;
		onError: any;
	}): any;

}
declare module 'luma.gl/utils/is-old-ie' {
	export default function isOldIE(opts?: {}): boolean;

}
declare module 'luma.gl/utils/promise-utils' {
	/**
	 * Converts a function that accepts a node style (err, result) callback
	 * as the last argument into a function that takes the same arguments
	 * and returns a promise that resolves or rejects with the values provided
	 * by the original callback
	 * @param {Function} func - function to wrap
	 * @return {Function} promisified function
	 */
	export function promisify(func: any): (...args: any[]) => Promise<{}>;

}
declare module 'luma.gl/utils/utils' {
	/**
	 * Returns a UID.
	 * @param {String} id= - Identifier base name
	 * @return {number} uid
	 **/
	export function uid(id?: string): string;
	/**
	 * Verifies if a given number is power of two or not.
	 * @param {object} n - The number to check.
	 * @return {Array} Returns true if the given number is power of 2, false otherwise.
	 **/
	export function isPowerOfTwo(n: any): boolean;
	export function isObjectEmpty(obj: any): boolean;

}
declare module 'luma.gl/utils/log' {
	const _default: any;
	export default _default;

}
declare module 'luma.gl/utils/format-value' {
	export function formatValue(v: any, opts?: {}): any;

}
declare module 'luma.gl/utils' {
	export { default as isBrowser } from 'luma.gl/utils/is-browser';
	export { default as isOldIE } from 'luma.gl/utils/is-old-ie';
	export { promisify } from 'luma.gl/utils/promise-utils';
	export { uid, isPowerOfTwo, isObjectEmpty } from 'luma.gl/utils/utils';
	export { default as log } from 'luma.gl/utils/log';
	export { formatValue } from 'luma.gl/utils/format-value';
	export { default as assert } from 'luma.gl/utils/assert';

}
declare module 'luma.gl/webgl-context/create-canvas' {
	export const pageLoadPromise: Promise<{}>;
	/**
	 * Returns a promise that resolves when the page is loaded
	 * at this point the DOM can be manipulated, and e.g. a new canvas can be inserted
	 * @return {Promise} - resolves when the page is loaded
	 */
	export function getPageLoadPromise(): Promise<{}>;
	/**
	 * Create a canvas
	 * @param {Number} width - set to 100%
	 * @param {Number} height - set to 100%
	 */
	export function createCanvas({ width, height, id, insert }: {
		width?: number;
		height?: number;
		id?: string;
		insert?: boolean;
	}): HTMLCanvasElement;
	export function getCanvas({ canvas, width, height, onError }: {
		canvas: any;
		width: any;
		height: any;
		onError?: () => void;
	}): any;

}
declare module 'luma.gl/webgl-context/create-browser-context' {
	/**
	 * Create a WebGL context for a canvas
	 * Note calling this multiple time on the same canvas does return the same context
	 */
	export function createBrowserContext({ canvas, opts, // WebGLRenderingContext options
		onError }: {
			canvas: any;
			opts?: {};
			onError?: (message: any) => any;
		}): any;
	/**
	 * Installs a spy on Canvas.getContext
	 * calls the provided callback with the {context}
	 */
	export function trackContextCreation({ onContextCreate, onContextCreated }: {
		onContextCreate?: () => any;
		onContextCreated?: () => void;
	}): void;

}
declare module 'luma.gl/webgl-context/set-parameters' {
	export const GL_PARAMETER_DEFAULTS: {
		[x: number]: number | boolean | Int32Array | Float32Array | boolean[];
	};
	export const GL_PARAMETER_SETTERS: {
		[x: number]: string | ((gl: WebGLRenderingContext, value: any, key: any) => any);
	};
	export const GL_PARAMETER_GETTERS: {
		[x: number]: (gl: WebGLRenderingContext, key: any) => any;
	};
	export function setParameter(gl: WebGLRenderingContext, key: any, value: any): any;
	export function setParameters(gl: WebGLRenderingContext, values: any): void;
	export function getParameter(gl: WebGLRenderingContext, key: any): any;
	export function getParameters(gl: WebGLRenderingContext, parameters: any): {};
	export function getDefaultParameters(gl: WebGLRenderingContext): {
		[x: number]: number | boolean | Int32Array | Float32Array | boolean[];
	};
	export function resetParameters(gl: WebGLRenderingContext): void;
	export function getModifiedParameters(gl: WebGLRenderingContext): {};

}
declare module 'luma.gl/webgl-context/polyfill-get-parameter' {
	export function getParameterPolyfill(gl: WebGLRenderingContext, originalGetParameter: any, pname: any): any;

}
declare module 'luma.gl/webgl-context/polyfill-context' {
	export default function polyfillContext(gl: WebGLRenderingContext): any;

}
declare module 'luma.gl/webgl-context/track-context-state' {
	export const clone: (x: any) => any;
	export const deepEqual: (x: any, y: any) => boolean;
	export const GL_STATE_SETTERS: {
		enable: (update: any, cap: any) => any;
		disable: (update: any, cap: any) => any;
		pixelStorei: (update: any, pname: any, param: any) => any;
		hint: (update: any, pname: any, hint: any) => any;
		bindFramebuffer: (update: any, target: any, fb: any) => any;
		blendColor: (update: any, r: any, g: any, b: any, a: any) => any;
		blendEquation: (update: any, mode: any) => any;
		blendEquationSeparate: (update: any, modeRGB: any, modeAlpha: any) => any;
		blendFunc: (update: any, src: any, dst: any) => any;
		blendFuncSeparate: (update: any, srcRGB: any, dstRGB: any, srcAlpha: any, dstAlpha: any) => any;
		clearColor: (update: any, r: any, g: any, b: any, a: any) => any;
		clearDepth: (update: any, depth: any) => any;
		clearStencil: (update: any, s: any) => any;
		colorMask: (update: any, r: any, g: any, b: any, a: any) => any;
		cullFace: (update: any, mode: any) => any;
		depthFunc: (update: any, func: any) => any;
		depthRange: (update: any, zNear: any, zFar: any) => any;
		depthMask: (update: any, mask: any) => any;
		frontFace: (update: any, face: any) => any;
		lineWidth: (update: any, width: any) => any;
		polygonOffset: (update: any, factor: any, units: any) => any;
		sampleCoverage: (update: any, value: any, invert: any) => any;
		scissor: (update: any, x: any, y: any, width: any, height: any) => any;
		stencilMask: (update: any, mask: any) => any;
		stencilMaskSeparate: (update: any, face: any, mask: any) => any;
		stencilFunc: (update: any, func: any, ref: any, mask: any) => any;
		stencilFuncSeparate: (update: any, face: any, func: any, ref: any, mask: any) => any;
		stencilOp: (update: any, fail: any, zfail: any, zpass: any) => any;
		stencilOpSeparate: (update: any, face: any, fail: any, zfail: any, zpass: any) => any;
		viewport: (update: any, x: any, y: any, width: any, height: any) => any;
	};
	/**
	 * Initialize WebGL state caching on a context
	 * can be called multiple times to enable/disable
	 * @param {WebGLRenderingContext} - context
	 */
	export default function trackContextState(gl: WebGLRenderingContext, { enable, copyState }?: {
		enable?: boolean;
		copyState: any;
	}): any;
	export function pushContextState(gl: WebGLRenderingContext): void;
	export function popContextState(gl: WebGLRenderingContext): void;

}
declare module 'luma.gl/webgl-context/debug-context' {
	export function enableDebug(debug: any): void;
	export function makeDebugContext(gl: WebGLRenderingContext, { debug }?: {
		debug?: boolean;
	}): any;
	export function getRealContext(gl: WebGLRenderingContext): any;
	export function getDebugContext(gl: WebGLRenderingContext): any;

}
declare module 'luma.gl/webgl-context/context-limits' {
	export function getContextLimits(gl: WebGLRenderingContext): any;
	export function getGLContextInfo(gl: WebGLRenderingContext): any;
	export function getGLContextInfo2(gl: WebGLRenderingContext): {
		vendor: any;
		renderer: any;
		vendorMasked: any;
		rendererMasked: any;
		version: any;
		shadingLanguageVersion: any;
	};
	export function getContextInfo(gl: WebGLRenderingContext): {
		vendor: any;
		renderer: any;
		version: any;
		shadingLanguageVersion: any;
		info: any;
		limits: any;
		webgl1MinLimits: any;
		webgl2MinLimits: any;
	};
	/**
	 * Provides strings identifying the GPU vendor and driver.
	 * https://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/
	 * @param {WebGLRenderingContext} gl - context
	 * @return {Object} - 'vendor' and 'renderer' string fields.
	 */
	export function glGetDebugInfo(gl: WebGLRenderingContext): {
		vendor: any;
		renderer: any;
		vendorMasked: any;
		rendererMasked: any;
		version: any;
		shadingLanguageVersion: any;
	};
	export const TEST_EXPORTS: {
		WEBGL_LIMITS: {
			[x: number]: {
				gl1: Float32Array;
				gl2?: undefined;
				negative?: undefined;
			} | {
				gl1: number;
				gl2: number;
				negative?: undefined;
			} | {
				gl1: number;
				gl2?: undefined;
				negative?: undefined;
			} | {
				gl1: Int32Array;
				gl2?: undefined;
				negative?: undefined;
			} | {
				gl1: number;
				gl2: number;
				negative: boolean;
			};
		};
	};

}
declare module 'luma.gl/webgl-utils/query-manager' {
	class QueryManager {
		constructor();
		poll(gl: WebGLRenderingContext): void;
		setInvalidator({ queryType, errorMessage, checkInvalid }: {
			queryType: any;
			errorMessage: any;
			checkInvalid: any;
		}): void;
		beginQuery(query: any, onComplete?: (x: any) => any, onError?: (x: any) => any): any;
		resolveQuery(query: any, result: any): void;
		rejectQuery(query: any, errorMessage: any): void;
		deleteQuery(query: any): void;
		cancelQuery(query: any): void;
		invalidateQuery(query: any): void;
		cancelInvalidQueries(gl: WebGLRenderingContext): void;
	} const _default: QueryManager;
	export default _default;

}
declare module 'luma.gl/webgl-context/context' {
	export const ERR_CONTEXT = "Invalid WebGLRenderingContext";
	export const ERR_WEBGL = "Invalid WebGLRenderingContext";
	export const ERR_WEBGL2 = "Requires WebGL2";
	export function isWebGL(gl: WebGLRenderingContext): boolean;
	export function isWebGL2(gl: WebGLRenderingContext): boolean;
	export function assertWebGLContext(gl: WebGLRenderingContext): void;
	export function assertWebGL2Context(gl: WebGLRenderingContext): void;
	export function setContextDefaults(opts?: {}): void;
	export function createGLContext(opts?: {}): any;
	export function destroyGLContext(gl: WebGLRenderingContext): void;
	/**
	 * Resize the canvas' drawing buffer.
	 *
	 * Can match the canvas CSS size, and optionally also consider devicePixelRatio
	 * Can be called every frame
	 *
	 * Regardless of size, the drawing buffer will always be scaled to the viewport, but
	 * for best visual results, usually set to either:
	 *  canvas CSS width x canvas CSS height
	 *  canvas CSS width * devicePixelRatio x canvas CSS height * devicePixelRatio
	 * See http://webgl2fundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html
	 *
	 * resizeGLContext(gl, {width, height, useDevicePixels})
	 */
	export function resizeGLContext(gl: WebGLRenderingContext, opts?: {}): void;
	export function pollGLContext(gl: WebGLRenderingContext): void;

}
declare module 'luma.gl/webgl-context/context-state' {
	import { getParameter, getParameters, setParameter, resetParameters, getModifiedParameters } from 'luma.gl/webgl-context/set-parameters';
	export const LUMA_SETTERS: {
		framebuffer: (gl: WebGLRenderingContext, framebuffer: any) => any;
		blend: (gl: WebGLRenderingContext, value: any) => any;
		blendColor: (gl: WebGLRenderingContext, value: any) => any;
		blendEquation: (gl: WebGLRenderingContext, args: any) => void;
		blendFunc: (gl: WebGLRenderingContext, args: any) => void;
		clearColor: (gl: WebGLRenderingContext, value: any) => any;
		clearDepth: (gl: WebGLRenderingContext, value: any) => any;
		clearStencil: (gl: WebGLRenderingContext, value: any) => any;
		colorMask: (gl: WebGLRenderingContext, value: any) => any;
		cull: (gl: WebGLRenderingContext, value: any) => any;
		cullFace: (gl: WebGLRenderingContext, value: any) => any;
		depthTest: (gl: WebGLRenderingContext, value: any) => any;
		depthFunc: (gl: WebGLRenderingContext, value: any) => any;
		depthMask: (gl: WebGLRenderingContext, value: any) => any;
		depthRange: (gl: WebGLRenderingContext, value: any) => any;
		dither: (gl: WebGLRenderingContext, value: any) => any;
		derivativeHint: (gl: WebGLRenderingContext, value: any) => void;
		frontFace: (gl: WebGLRenderingContext, value: any) => any;
		mipmapHint: (gl: WebGLRenderingContext, value: any) => any;
		lineWidth: (gl: WebGLRenderingContext, value: any) => any;
		polygonOffsetFill: (gl: WebGLRenderingContext, value: any) => any;
		polygonOffset: (gl: WebGLRenderingContext, value: any) => any;
		sampleCoverage: (gl: WebGLRenderingContext, value: any) => any;
		scissorTest: (gl: WebGLRenderingContext, value: any) => any;
		scissor: (gl: WebGLRenderingContext, value: any) => any;
		stencilTest: (gl: WebGLRenderingContext, value: any) => any;
		stencilMask: (gl: WebGLRenderingContext, value: any) => void;
		stencilFunc: (gl: WebGLRenderingContext, args: any) => void;
		stencilOp: (gl: WebGLRenderingContext, args: any) => void;
		viewport: (gl: WebGLRenderingContext, value: any) => any;
	};
	export { getParameter };
	export { getParameters };
	export { setParameter };
	export { resetParameters };
	export { getModifiedParameters };
	export function setParameters(gl: WebGLRenderingContext, parameters: any): void;
	export function withParameters(gl: WebGLRenderingContext, parameters: any, func: any): any;

}
declare module 'luma.gl/webgl-context' {
	export { createGLContext, destroyGLContext, resizeGLContext, pollGLContext } from 'luma.gl/webgl-context/context';
	export { withParameters, resetParameters } from 'luma.gl/webgl-context/context-state';
	export { getContextInfo } from 'luma.gl/webgl-context/context-limits';
	export { pageLoadPromise, getPageLoadPromise, createCanvas, getCanvas } from 'luma.gl/webgl-context/create-canvas';
	export { createHeadlessContext } from 'luma.gl/webgl-context/create-headless-context';
	export { trackContextCreation, createBrowserContext } from 'luma.gl/webgl-context/create-browser-context';
	export { default as polyfillContext } from 'luma.gl/webgl-context/polyfill-context';
	export { default as trackContextState } from 'luma.gl/webgl-context/track-context-state';

}
declare module 'luma.gl/webgl-context/context-features' {
	const FEATURES: {};
	export { FEATURES };
	export function canCompileGLGSExtension(gl: WebGLRenderingContext, cap: any, opts?: {}): any;
	export function hasFeature(gl: WebGLRenderingContext, feature: any): any;
	export function hasFeatures(gl: WebGLRenderingContext, features: any): any;
	export function getFeatures(gl: WebGLRenderingContext): any;
	export const TEST_EXPORTS: {
		WEBGL_FEATURES: {
			VERTEX_ARRAY_OBJECT: (string | boolean)[];
			TIMER_QUERY: string[];
			INSTANCED_RENDERING: (string | boolean)[];
			MULTIPLE_RENDER_TARGETS: (string | boolean)[];
			ELEMENT_INDEX_UINT32: (string | boolean)[];
			BLEND_EQUATION_MINMAX: (string | boolean)[];
			COLOR_ENCODING_SRGB: (string | boolean)[];
			TEXTURE_DEPTH: (string | boolean)[];
			TEXTURE_FLOAT: (string | boolean)[];
			TEXTURE_HALF_FLOAT: (string | boolean)[];
			TEXTURE_FILTER_LINEAR_FLOAT: string[];
			TEXTURE_FILTER_LINEAR_HALF_FLOAT: string[];
			TEXTURE_FILTER_ANISOTROPIC: string[];
			COLOR_ATTACHMENT_RGBA32F: string[];
			COLOR_ATTACHMENT_FLOAT: (string | boolean)[];
			COLOR_ATTACHMENT_HALF_FLOAT: (string | boolean)[];
			GLSL_FRAG_DATA: (string | boolean)[];
			GLSL_FRAG_DEPTH: (string | boolean)[];
			GLSL_DERIVATIVES: (string | boolean)[];
			GLSL_TEXTURE_LOD: (string | boolean)[];
		};
	};

}
declare module 'luma.gl/webgl/resource' {
	export default class Resource {
		constructor(gl: WebGLRenderingContext, opts?: {});
		toString(): string;
		readonly handle: any;
		delete({ deleteChildren }?: {
			deleteChildren?: boolean;
		}): this;
		unbind(): void;
	    /**
	     * Query a Resource parameter
	     *
	     * @param {GLenum} pname
	     * @return {GLint|GLfloat|GLenum} param
	     */
		getParameter(pname: any, opts?: {}): any;
		getParameters(opts?: {}): {};
	    /**
	     * Update a Resource setting
	     *
	     * @todo - cache parameter to avoid issuing WebGL calls?
	     *
	     * @param {GLenum} pname - parameter (GL constant, value or key)
	     * @param {GLint|GLfloat|GLenum} value
	     * @return {Resource} returns self to enable chaining
	     */
		setParameter(pname: any, value: any): this;
		setParameters(parameters: any): this;
		initialize(opts: any): void;
		_createHandle(): void;
		_deleteHandle(handle?: any): void;
		_getOptsFromHandle(): void;
		_getParameter(pname: any, opts: any): void;
	    /**
	     * @param {GLenum} pname
	     * @param {GLint|GLfloat|GLenum} param
	     * @return {Sampler} returns self to enable chaining
	     */
		_setParameter(pname: any, value: any): void;
		_context(): any;
		_addStats(): void;
		_removeStats(): void;
	}

}
declare module 'luma.gl/webgl/buffer' {
	import Resource from 'luma.gl/webgl/resource';
	export class BufferLayout {
	    /**
	     * @classdesc
	     * Store characteristics of a data layout
	     * This data can be used when updating vertex attributes with
	     * the associated buffer, freeing the application from keeping
	     * track of this metadata.
	     *
	     * @class
	     * @param {GLuint} size - number of values per element (1-4)
	     * @param {GLuint} type - type of values (e.g. gl.FLOAT)
	     * @param {GLbool} normalized=false - normalize integers to [-1,1] or [0,1]
	     * @param {GLuint} integer=false - WebGL2 only, int-to-float conversion
	     * @param {GLuint} stride=0 - supports strided arrays
	     * @param {GLuint} offset=0 - supports strided arrays
	     */
		constructor({ type, size, offset, stride, normalized, integer, instanced }?: {
			type: any;
			size?: number;
			offset?: number;
			stride?: number;
			normalized?: boolean;
			integer?: boolean;
			instanced?: number;
		});
	}
	export default class Buffer extends Resource {
		constructor(gl: WebGLRenderingContext, opts?: {});
		setDataLayout({ layout, type, size, offset, stride, normalized, integer, instanced }: {
			layout: any;
			type: any;
			size?: number;
			offset?: number;
			stride?: number;
			normalized?: boolean;
			integer?: boolean;
			instanced?: number;
		}): this;
		updateLayout(opts: any): void;
		initialize({ data, bytes, usage, layout, type, size, offset, stride, normalized, integer, instanced, index }?: {
			data: any;
			bytes: any;
			usage?: number;
			layout: any;
			type: any;
			size?: number;
			offset?: number;
			stride?: number;
			normalized?: boolean;
			integer?: boolean;
			instanced?: number;
			index?: any;
		}): this;
		setData(options: any): this;
		subData({ data, // Data (Typed Array or ArrayBuffer), length is inferred unless provided
			offset, // Offset into buffer
			srcOffset, // WebGL2 only: Offset into srcData
			length }?: {
				data: any;
				offset?: number;
				srcOffset?: number;
				length: any;
			}): this;
		copyData({ sourceBuffer, readOffset, writeOffset, size }: {
			sourceBuffer: any;
			readOffset?: number;
			writeOffset?: number;
			size: any;
		}): this;
		getData({ dstData, srcByteOffset, dstOffset, length }?: {
			dstData?: any;
			srcByteOffset?: number;
			dstOffset?: number;
			length?: number;
		}): any;
	    /**
	     * Binds a buffer to a given binding point (target).
	     *   GL_TRANSFORM_FEEDBACK_BUFFER and GL.UNIFORM_BUFFER take an index, and optionally a range.
	     *
	     * @param {Glenum} target - target for the bind operation.
	     *
	     * @param {GLuint} index= - the index of the target.
	     *   - GL_TRANSFORM_FEEDBACK_BUFFER and GL.UNIFORM_BUFFER need an index to affect state
	     * @param {GLuint} offset=0 - the index of the target.
	     *   - GL.UNIFORM_BUFFER: `offset` must be aligned to GL.UNIFORM_BUFFER_OFFSET_ALIGNMENT.
	     * @param {GLuint} size= - the index of the target.
	     *   - GL.UNIFORM_BUFFER: `size` must be a minimum of GL.UNIFORM_BLOCK_SIZE_DATA.
	     * @returns {Buffer} - Returns itself for chaining.
	     */
		bind({ target, index, offset, size }?: {
			target?: any;
			index?: any;
			offset?: number;
			size: any;
		}): this;
		unbind({ target, index }?: {
			target?: any;
			index?: any;
		}): this;
		getIndexedParameter(binding: any, index: any): any;
		_createHandle(): any;
		_deleteHandle(): void;
		_getParameter(pname: any): any;
		_getAvailableElementCount(srcByteOffset: any): number;
	}

}
declare module 'luma.gl/webgl/shader' {
	import Resource from 'luma.gl/webgl/resource';
	export class Shader extends Resource {
		static getTypeName(shaderType: any): "vertex-shader" | "fragment-shader" | "unknown";
		constructor(gl: WebGLRenderingContext, source: any, shaderType: any);
		initialize({ source }: {
			source: any;
		}): void;
		getParameter(pname: any): any;
		toString(): string;
		getName(): any;
		getSource(): any;
		getTranslatedSource(): any;
		_compile(): void;
		_deleteHandle(): void;
		_getOptsFromHandle(): {
			type: any;
			source: any;
		};
	}
	export class VertexShader extends Shader {
		constructor(gl: WebGLRenderingContext, source: any);
		_createHandle(): any;
	}
	export class FragmentShader extends Shader {
		constructor(gl: WebGLRenderingContext, source: any);
		_createHandle(): any;
	}

}
declare module 'luma.gl/webgl/vertex-array' {
	import Resource from 'luma.gl/webgl/resource';
	export default class VertexArray extends Resource {
		static isSupported(gl: WebGLRenderingContext): any;
		static getDefaultArray(gl: WebGLRenderingContext): any;
		static getMaxAttributes(gl: WebGLRenderingContext): any;
		readonly MAX_ATTRIBUTES: any;
		constructor(gl: WebGLRenderingContext, opts?: {});
		initialize({ buffers, elements, locations }?: {
			buffers?: {};
			elements?: any;
			locations?: {};
		}): void;
		readonly filledLocations: any;
		setBuffer({ location, buffer, target, layout }?: {
			location: any;
			buffer: any;
			target: any;
			layout: any;
		}): void;
		setBuffers(buffers: any, { clear }?: {
			clear?: boolean;
		}): void;
		setLocations(locations: any): void;
		setElements(elements: any): this;
		clearBindings({ disableZero }?: {
			disableZero?: boolean;
		}): void;
		enable(location: any): void;
		disable(location: any, disableZero?: boolean): void;
		setDivisor(location: any, divisor: any): void;
		setGeneric({ location, array }: {
			location: any;
			array: any;
		}): void;
		setGenericValues(location: any, v0: any, v1: any, v2: any, v3: any): void;
		bind(funcOrHandle?: any): any;
		_deduceDrawParameters(): {
			isInstanced: boolean;
			isIndexed: boolean;
			indexType: any;
		};
		_getLocations(buffers: any): {
			locations: {};
			elements: any;
		};
		_sortBuffersByLocation(buffers: any): {
			locations: any[];
			elements: any;
		};
		_getBufferAndLayout(bufferData: any): {
			buffer: any;
			layout: any;
		};
		_setGenericFloatArray(location: any, array: any): void;
		_setGenericIntArray(location: any, array: any): void;
		_setGenericUintArray(location: any, array: any): void;
		_createHandle(): any;
		_deleteHandle(handle: any): any[];
		_getParameter(pname: any, { location }: {
			location: any;
		}): any;
		_getData(): {}[];
		_bind(handle: any): void;
	}

}
declare module 'luma.gl/webgl/texture' {
	import Resource from 'luma.gl/webgl/resource';
	export const TEXTURE_FORMATS: {
		[x: number]: {
			dataFormat: number;
			types: number[];
		};
	};
	export default class Texture extends Resource {
		static isSupported(gl: WebGLRenderingContext, { format, linearFiltering }?: {
			format: any;
			linearFiltering: any;
		}): boolean;
		constructor(gl: WebGLRenderingContext, opts: any);
		toString(): string;
		initialize(opts?: {}): void;
		resize({ width, height }: {
			width: any;
			height: any;
		}): void | this;
		generateMipmap(params?: {}): this;
		setImageData({ target, pixels, data, width, height, level, format, type, dataFormat, offset, border, compressed, parameters }: {
			target?: any;
			pixels?: any;
			data?: any;
			width: any;
			height: any;
			level?: number;
			format?: number;
			type: any;
			dataFormat: any;
			offset?: number;
			border?: number;
			compressed?: boolean;
			parameters?: {};
		}): void;
	    /**
	     * Redefines an area of an existing texture
	     * Note: does not allocate storage
	     */
		setSubImageData({ target, pixels, data, x, y, width, height, level, format, type, dataFormat, compressed, offset, border, parameters }: {
			target?: any;
			pixels?: any;
			data?: any;
			x?: number;
			y?: number;
			width: any;
			height: any;
			level?: number;
			format?: number;
			type: any;
			dataFormat: any;
			compressed?: boolean;
			offset?: number;
			border?: number;
			parameters?: {};
		}): void;
	    /**
	     * Defines a two-dimensional texture image or cube-map texture image with
	     * pixels from the current framebuffer (rather than from client memory).
	     * (gl.copyTexImage2D wrapper)
	     *
	     * Note that binding a texture into a Framebuffer's color buffer and
	     * rendering can be faster.
	     */
		copyFramebuffer({ target, framebuffer, offset, x, y, width, height, level, internalFormat, border }: {
			target?: any;
			framebuffer: any;
			offset?: number;
			x?: number;
			y?: number;
			width: any;
			height: any;
			level?: number;
			internalFormat?: number;
			border?: number;
		}): void;
		getActiveUnit(): number;
		bind(textureUnit?: any): any;
		unbind(): any;
		_getDataType({ data, compressed }: {
			data: any;
			compressed?: boolean;
		}): {
				data: any;
				dataType: string;
			};
		setImage3D({ level, internalformat, width, height, depth, border, format, type, offset, pixels }: {
			level?: number;
			internalformat?: number;
			width: any;
			height: any;
			depth?: number;
			border?: number;
			format: any;
			type?: number;
			offset?: number;
			pixels: any;
		}): this;
		_deduceParameters(opts: any): {
			dataFormat: any;
			type: any;
			compressed: any;
			width: any;
			height: any;
			format: any;
			data: any;
		};
		_deduceImageSize({ data, width, height }: {
			data: any;
			width: any;
			height: any;
		}): any;
		_createHandle(): any;
		_deleteHandle(): void;
		_getParameter(pname: any): any;
		_setParameter(pname: any, param: any): this;
		_isNPOT(): boolean;
		_updateForNPOT(parameters: any): void;
		_getNPOTParam(pname: any, param: any): any;
	}

}
declare module 'luma.gl/webgl/texture-2d' {
	import Texture from 'luma.gl/webgl/texture';
	export default class Texture2D extends Texture {
		static isSupported(gl: WebGLRenderingContext, opts: any): boolean;
	    /**
	     * @classdesc
	     * 2D WebGL Texture
	     * Note: Constructor will initialize your texture.
	     *
	     * @class
	     * @param {WebGLRenderingContext} gl - gl context
	     * @param {Image|ArrayBuffer|null} opts= - named options
	     * @param {Image|ArrayBuffer|null} opts.data= - buffer
	     * @param {GLint} width - width of texture
	     * @param {GLint} height - height of texture
	     */
		constructor(gl: WebGLRenderingContext, opts?: {});
		bind(textureUnit?: any): any;
		unbind(): any;
		getActiveUnit(): number;
	}

}
declare module 'luma.gl/webgl/renderbuffer' {
	import Resource from 'luma.gl/webgl/resource';
	export const RENDERBUFFER_FORMATS: {
		[x: number]: {
			gl2?: undefined;
		} | {
			gl2: boolean;
		} | {
			gl2: string;
		};
	};
	export default class Renderbuffer extends Resource {
		static isSupported(gl: WebGLRenderingContext, { format }?: {
			format: any;
		}): any;
		static getSamplesForFormat(gl: WebGLRenderingContext, { format }: {
			format: any;
		}): any;
		constructor(gl: WebGLRenderingContext, opts?: {});
		initialize({ format, width, height, samples }: {
			format: any;
			width?: number;
			height?: number;
			samples?: number;
		}): this;
		resize({ width, height }: {
			width: any;
			height: any;
		}): this;
		_createHandle(): any;
		_deleteHandle(): void;
		_syncHandle(handle: any): void;
		_getParameter(pname: any): any;
	}

}
declare module 'luma.gl/webgl/clear' {
	export function clear(gl: WebGLRenderingContext, { framebuffer, color, depth, stencil }?: {
		framebuffer?: any;
		color?: any;
		depth?: any;
		stencil?: any;
	}): void;
	export function clearBuffer(gl: WebGLRenderingContext, { framebuffer, buffer, drawBuffer, value }?: {
		framebuffer?: any;
		buffer?: number;
		drawBuffer?: number;
		value?: number[];
	}): void;

}
declare module 'luma.gl/webgl-utils/format-utils' {
	export function glFormatToComponents(format: any): 0 | 1 | 3 | 4;
	export function glTypeToBytes(type: any): 0 | 1 | 2 | 4;

}
declare module 'luma.gl/webgl/framebuffer' {
	import Resource from 'luma.gl/webgl/resource';
	export default class Framebuffer extends Resource {
		static isSupported(gl: WebGLRenderingContext, { colorBufferFloat, // Whether floating point textures can be rendered and read
			colorBufferHalfFloat }?: {
				colorBufferFloat: any;
				colorBufferHalfFloat: any;
			}): boolean;
		static getDefaultFramebuffer(gl: WebGLRenderingContext): any;
		readonly MAX_COLOR_ATTACHMENTS: any;
		readonly MAX_DRAW_BUFFERS: any;
		constructor(gl: WebGLRenderingContext, opts?: {});
		readonly color: any;
		readonly texture: any;
		readonly depth: any;
		readonly stencil: any;
		initialize({ width, height, attachments, color, depth, stencil, check, readBuffer, drawBuffers }: {
			width?: number;
			height?: number;
			attachments?: any;
			color?: boolean;
			depth?: boolean;
			stencil?: boolean;
			check?: boolean;
			readBuffer: any;
			drawBuffers: any;
		}): void;
		update({ attachments, readBuffer, drawBuffers, clearAttachments }: {
			attachments?: {};
			readBuffer: any;
			drawBuffers: any;
			clearAttachments?: boolean;
		}): this;
		resize({ width, height }?: {
			width: any;
			height: any;
		}): this;
		attach(attachments: any, { clearAttachments }?: {
			clearAttachments?: boolean;
		}): void;
		checkStatus(): this;
		clear({ color, depth, stencil, drawBuffers }?: {
			color: any;
			depth: any;
			stencil: any;
			drawBuffers?: any[];
		}): this;
		readPixels({ x, y, width, height, format, type, // Auto deduced from pixelArray or gl.UNSIGNED_BYTE
			pixelArray, attachment }: {
				x?: number;
				y?: number;
				width?: any;
				height?: any;
				format?: number;
				type: any;
				pixelArray?: any;
				attachment?: number;
			}): any;
		readPixelsToBuffer({ x, y, width, height, format, type, // When not provided, auto deduced from buffer or GL.UNSIGNED_BYTE
			buffer, // A new Buffer object is created when not provided.
			byteOffset }: {
				x?: number;
				y?: number;
				width?: any;
				height?: any;
				format?: number;
				type: any;
				buffer?: any;
				byteOffset?: number;
			}): any;
		copyToDataUrl({ attachment, // TODO - support gl.readBuffer
			maxHeight }?: {
				attachment?: number;
				maxHeight?: number;
			}): string;
		copyToImage({ image, attachment, // TODO - support gl.readBuffer
			maxHeight }?: {
				image?: any;
				attachment?: number;
				maxHeight?: number;
			}): any;
		copyToTexture({ texture, target, // for cubemaps
			xoffset, yoffset, zoffset, mipmapLevel, attachment, // TODO - support gl.readBuffer
			x, y, width, // defaults to texture width
			height }: {
				texture: any;
				target: any;
				xoffset?: number;
				yoffset?: number;
				zoffset?: number;
				mipmapLevel?: number;
				attachment?: number;
				x?: number;
				y?: number;
				width: any;
				height: any;
			}): any;
		blit({ srcFramebuffer, attachment, srcX0, srcY0, srcX1, srcY1, dstX0, dstY0, dstX1, dstY1, color, depth, stencil, mask, filter }: {
			srcFramebuffer: any;
			attachment?: number;
			srcX0?: number;
			srcY0?: number;
			srcX1: any;
			srcY1: any;
			dstX0?: number;
			dstY0?: number;
			dstX1: any;
			dstY1: any;
			color?: boolean;
			depth?: boolean;
			stencil?: boolean;
			mask?: number;
			filter?: number;
		}): this;
		invalidate({ attachments, x, y, width, height }: {
			attachments?: any[];
			x?: number;
			y?: number;
			width: any;
			height: any;
		}): this;
		getAttachmentParameter({ attachment, pname }?: {
			attachment?: number;
			pname: any;
		}): number;
		getAttachmentParameters(attachment?: number, parameters?: any): this;
		show(): this;
		log({ priority, message }?: {
			priority?: number;
			message?: string;
		}): this;
		bind({ target }?: {
			target?: number;
		}): this;
		unbind({ target }?: {
			target?: number;
		}): this;
		_createDefaultAttachments({ color, depth, stencil, width, height }: {
			color: any;
			depth: any;
			stencil: any;
			width: any;
			height: any;
		}): any;
		_unattach({ attachment }: {
			attachment: any;
		}): void;
		_attachRenderbuffer({ attachment, renderbuffer }: {
			attachment?: number;
			renderbuffer: any;
		}): void;
		_attachTexture({ attachment, texture, layer, level }: {
			attachment?: number;
			texture: any;
			layer: any;
			level: any;
		}): void;
		_setReadBuffer(gl: WebGLRenderingContext, readBuffer: any): void;
		_setDrawBuffers(gl: WebGLRenderingContext, drawBuffers: any): void;
		_getAttachmentParameterFallback(pname: any): number;
		_createHandle(): any;
		_deleteHandle(): void;
	}

}
declare module 'luma.gl/webgl/sampler' {
	import Resource from 'luma.gl/webgl/resource';
	export default class Sampler extends Resource {
		static isSupported(gl: WebGLRenderingContext): boolean;
		static isHandle(handle: any): any;
		constructor(gl: WebGLRenderingContext, opts: any);
	    /**
	     * Bind to the same texture unit as a texture to control sampling for that texture
	     * @param {GLuint} unit - texture unit index
	     * @return {Sampler} - returns self to enable chaining
	     */
		bind(unit: any): this;
	    /**
	     * Bind to the same texture unit as a texture to control sampling for that texture
	     * @param {GLuint} unit - texture unit index
	     * @return {Sampler} - returns self to enable chaining
	     */
		unbind(unit?: any): this;
		_createHandle(): any;
		_deleteHandle(): void;
		_getParameter(pname: any): any;
		_setParameter(pname: any, param: any): this;
	}

}
declare module 'luma.gl/webgl/uniforms' {
	export function parseUniformName(name: any): {
		name: any;
		length: any;
		isArray: boolean;
	};
	export function getUniformSetter(gl: WebGLRenderingContext, location: any, info: any): any;
	export function checkUniformValues(uniforms: any, source: any): boolean;
	/**
	 * Given two values of a uniform, returns `true` if they are equal
	 */
	export function areUniformsEqual(uniform1: any, uniform2: any): boolean;
	export function getUniformsTable({ header, program, uniforms, undefinedOnly }?: {
		header?: string;
		program: any;
		uniforms: any;
		undefinedOnly?: boolean;
	}): {
			table: {};
			count: number;
			unusedTable: {};
			unusedCount: number;
		};

}
declare module 'luma.gl/webgl-utils/attribute-utils' {
	export function getPrimitiveDrawMode(drawMode: any): 0 | 1 | 4;
	export function getPrimitiveCount({ drawMode, vertexCount }: {
		drawMode: any;
		vertexCount: any;
	}): any;
	export function getVertexCount({ drawMode, vertexCount }: {
		drawMode: any;
		vertexCount: any;
	}): any;

}
declare module 'luma.gl/webgl/program' {
	import Resource from 'luma.gl/webgl/resource';
	export default class Program extends Resource {
		constructor(gl: WebGLRenderingContext, opts?: {});
		initialize({ vs, fs, defaultUniforms, varyings, bufferMode }?: {
			vs: any;
			fs: any;
			defaultUniforms: any;
			varyings: any;
			bufferMode?: number;
		}): this;
		checkAttributeBindings({ vertexArray }: {
			vertexArray: any;
		}): this;
		delete(opts?: {}): this;
		reset(): void;
		use(): this;
		draw({ drawMode, vertexCount, offset, start, end, isIndexed, indexType, isInstanced, instanceCount, vertexArray, transformFeedback, uniforms, samplers, parameters }: {
			drawMode?: number;
			vertexCount: any;
			offset?: number;
			start: any;
			end: any;
			isIndexed?: boolean;
			indexType?: number;
			isInstanced?: boolean;
			instanceCount?: number;
			vertexArray?: any;
			transformFeedback?: any;
			uniforms?: {};
			samplers?: {};
			parameters?: {};
		}): this;
	    /**
	     * Attach a map of Buffers values to a program
	     * Only attributes with names actually present in the linked program
	     * will be updated. Other supplied buffers will be ignored.
	     *
	     * @param {Object} attributes - An object map with attribute names being keys
	     *  and values are expected to be instances of Attribute.
	     * @returns {Program} Returns itself for chaining.
	     */
		setAttributes(attributes: any, { clear, drawParams }?: {
			clear?: boolean;
			drawParams?: {};
		}): this;
	    /**
	     * Attach a map of Buffers values to a program
	     * Only attributes with names actually present in the linked program
	     * will be updated. Other supplied buffers will be ignored.
	     *
	     * @param {Object} buffers - An object map with attribute names being keys
	     *  and values are expected to be instances of Buffer.
	     * @returns {Program} Returns itself for chaining.
	     */
		setBuffers(buffers: any, { clear, drawParams }?: {
			clear?: boolean;
			drawParams?: {};
		}): this;
		unsetBuffers(): this;
	    /**
	     * Apply a set of uniform values to a program
	     * Only uniforms with names actually present in the linked program
	     * will be updated.
	     * other uniforms will be ignored
	     *
	     * @param {Object} uniformMap - An object with names being keys
	     * @returns {Program} - returns itself for chaining.
	     */
		setUniforms(uniforms: any, samplers?: {}): this;
		uniformBlockBinding(blockIndex: any, blockBinding: any): void;
	    /**
	     * ATTRIBUTES API
	     * (Locations are numeric indices)
	     * @return {Number} count
	     */
		getAttributeCount(): any;
	    /**
	     * Returns location (index) of a name
	     * @param {String} attributeName - name of an attribute
	     *   (matches name in a linked shader)
	     * @returns {Number} - // array of actual attribute names from shader linking
	     */
		getAttributeLocation(attributeName: any): any;
	    /**
	     * Returns an object with info about attribute at index "location"/
	     * @param {int} location - index of an attribute
	     * @returns {WebGLActiveInfo} - info about an active attribute
	     *   fields: {name, size, type}
	     */
		getAttributeInfo(location: any): any;
	    /**
	     * UNIFORMS API
	     * (Locations are numeric indices)
	     * @return {Number} count
	     */
		getUniformCount(): any;
		getUniformInfo(index: any): any;
		getUniformLocation(name: any): any;
		getUniformValue(location: any): any;
		getActiveUniforms(uniformIndices: any, pname: any): any;
	    /**
	     * @param {GLuint} index
	     * @return {WebGLActiveInfo} - object with {name, size, type}
	     */
		getVarying(program: any, index: any): any;
		getFragDataLocation(varyingName: any): any;
		getAttachedShaders(): any;
		getUniformBlockIndex(blockName: any): any;
		getActiveUniformBlockParameter(blockIndex: any, pname: any): any;
		_setAttributeToGeneric({ location, array }: {
			location: any;
			array: any;
		}): void;
		_setAttributeToBuffer({ location, buffer, layout }: {
			location: any;
			buffer: any;
			layout: any;
		}): void;
		_compileAndLink(): void;
		_sortBuffersByLocation(buffers: any): {
			locations: any[];
			elements: any;
		};
		_areAllAttributesEnabled(): boolean;
		_print(bufferName: any): string;
		_createHandle(): any;
		_deleteHandle(): void;
		_getName(): any;
		_getOptionsFromHandle(handle: any): {};
		_getParameter(pname: any): any;
		_queryAttributeLocations(): void;
		_queryUniformLocations(): void;
		_setId(id: any): void;
	}
	export function getUniformDescriptors(gl: WebGLRenderingContext, program: any): {};
	export function getVaryingMap(varyings: any, bufferMode: any): {};

}
declare module 'luma.gl/webgl/texture-cube' {
	import Texture from 'luma.gl/webgl/texture';
	export default class TextureCube extends Texture {
		constructor(gl: WebGLRenderingContext, opts?: {});
		initialize(opts?: {}): void;
		subImage({ face, data, x, y, mipmapLevel }: {
			face: any;
			data: any;
			x?: number;
			y?: number;
			mipmapLevel?: number;
		}): any;
		setCubeMapImageData({ width, height, pixels, data, border, format, type, generateMipmap }: {
			width: any;
			height: any;
			pixels: any;
			data: any;
			border?: number;
			format?: number;
			type?: number;
			generateMipmap?: boolean;
		}): void;
		bind({ index }?: {
			index: any;
		}): any;
		unbind(): this;
	}

}
declare module 'luma.gl/webgl/draw' {
	export function draw(gl: WebGLRenderingContext, { drawMode, vertexCount, offset, isIndexed, indexType, isInstanced, instanceCount }: {
		drawMode?: number;
		vertexCount: any;
		offset?: number;
		isIndexed?: boolean;
		indexType?: number;
		isInstanced?: boolean;
		instanceCount?: number;
	}): void;

}
declare module 'luma.gl/webgl/functions' {
	/**
	 * Read pixels from a target
	 *
	 * Will read from the currently bound framebuffer, or the currently bound
	 *  drawing buffer - if context has been created with
	 *  preserveDrawingBuffers
	 *
	 * @param {WebGLRenderingContext} gl
	 * @param {Object} opts
	 * @param {Number} opts.x - leftmost coord to be read
	 * @param {Number} opts.y - bottommost (or topmost if sourceHeight supplied)
	 * @param {Number} opts.width=1 - width of area to be read
	 * @param {Number} opts.height=1 - height of area to be read
	 * @param {Number} opts.sourceHeight= - target height, implies top left coords
	 * @param {Number} opts.dataOffset=0 - WebGL2 only - offset into data array
	 * @param {Number} opts.format=GL.RBGA - Can be set to GL.RGB or GL.ALPHA
	 *
	 * @return {ArrayView} - types array, either passed in or autoallocated
	 */
	export function readPixels(gl: WebGLRenderingContext, { x, y, width, height, data, dataOffset, type, sourceHeight, format }: {
		x: any;
		y: any;
		width?: number;
		height?: number;
		data: any;
		dataOffset?: number;
		type?: number;
		sourceHeight: any;
		format?: number;
	}): any;
	/**
	 * Read pixels directly into webgl buffer
	 * NOTE: WebGL2 only
	 *
	 * @param {WebGLRenderingContext} gl
	 * @param {Object} options
	 * @return {WebGLBuffer} the passed in buffer
	 */
	export function readPixelsToBuffer(gl: WebGLRenderingContext, { x, y, width, height, buffer, dataOffset, type, sourceHeight, format }: {
		x: any;
		y: any;
		width?: number;
		height?: number;
		buffer: any;
		dataOffset?: number;
		type?: number;
		sourceHeight: any;
		format?: number;
	}): any;
	export function blitFramebuffer(gl: WebGLRenderingContext, { source: [sourceX, sourceY, sourceWidth, sourceHeight], dest: [destX, destY, destWidth, destHeight], mask, filter }: {
		source: [any, any, any, any];
		dest: [any, any, any, any];
		mask?: number;
		filter?: number;
	}): void;

}
declare module 'luma.gl/webgl' {
	export { Image, WebGLRenderingContext, WebGLProgram, WebGLShader, WebGLBuffer, WebGLFramebuffer, WebGLRenderbuffer, WebGLTexture, WebGLUniformLocation, WebGLActiveInfo, WebGLShaderPrecisionFormat, WebGL2RenderingContext, webGLTypesAvailable } from 'luma.gl/webgl-utils';
	export { isWebGL, isWebGL2, createGLContext, destroyGLContext } from 'luma.gl/webgl-context/context';
	export { withParameters, resetParameters } from 'luma.gl/webgl-context/context-state';
	export { getContextInfo } from 'luma.gl/webgl-context/context-limits';
	export { default as Attribute } from 'luma.gl/webgl/attribute';
	export { default as Buffer } from 'luma.gl/webgl/buffer';
	export { Shader, VertexShader, FragmentShader } from 'luma.gl/webgl/shader';
	export { default as Program } from 'luma.gl/webgl/program';
	export { default as Framebuffer } from 'luma.gl/webgl/framebuffer';
	export { default as Renderbuffer } from 'luma.gl/webgl/renderbuffer';
	export { default as Texture2D } from 'luma.gl/webgl/texture-2d';
	export { default as TextureCube } from 'luma.gl/webgl/texture-cube';
	export { draw } from 'luma.gl/webgl/draw';
	export { clear } from 'luma.gl/webgl/clear';
	export { readPixels } from 'luma.gl/webgl/functions';
	export { parseUniformName, getUniformSetter, checkUniformValues } from 'luma.gl/webgl/uniforms';
	export { default as VertexArray } from 'luma.gl/webgl/vertex-array';

}
declare module 'luma.gl/webgl/attribute' {
	export default class Attribute {
		constructor(gl: WebGLRenderingContext, opts?: {});
		delete(): void;
		update({ value, buffer, size, offset, stride, normalized, integer, instanced, isGeneric, isInstanced }: {
			value: any;
			buffer: any;
			size?: any;
			offset?: any;
			stride?: any;
			normalized?: any;
			integer?: any;
			instanced?: any;
			isGeneric?: any;
			isInstanced: any;
		}): void;
		getBuffer(): any;
		_validateAttributeDefinition(): void;
	}

}
declare module 'luma.gl/webgl/fence-sync' {
	import Resource from 'luma.gl/webgl/resource';
	export default class FenceSync extends Resource {
		constructor(gl: WebGLRenderingContext, opts: any);
	    /**
	     * The method is a no-op in the absence of the possibility of
	     * synchronizing between multiple GL contexts.
	     * Prevent commands from being added to GPU command queue.
	     * Note: commands can still be buffered in driver.
	     *
	     * @param {GLbitfield} flags
	     * @param {GLint64} timeout
	     * @return {Sync} status
	     */
		wait({ flags, timeout }?: {
			flags?: number;
			timeout?: number;
		}): this;
	    /**
	     * Block all CPU operations until fence is signalled
	     * @param {GLbitfield} flags
	     * @param {GLint64} timeout
	     * @return {GLenum} result
	     */
		clientWait({ flags, timeout }: {
			flags?: number;
			timeout: any;
		}): any;
		cancel(): void;
		isSignaled(): boolean;
		isResultAvailable(): boolean;
		getResult(): boolean;
		getParameter(pname: any): any;
		_createHandle(): any;
		_deleteHandle(): void;
	}

}
declare module 'luma.gl/webgl/query' {
	import Resource from 'luma.gl/webgl/resource';
	export default class Query extends Resource {
		static isSupported(gl: WebGLRenderingContext, { queries, timers, timestamps }?: {
			queries?: boolean;
			timers?: boolean;
			timestamps?: boolean;
		}): any;
		constructor(gl: WebGLRenderingContext, opts?: {});
		beginTimeElapsedQuery(): this;
		beginOcclusionQuery({ conservative }?: {
			conservative?: boolean;
		}): this;
		beginTransformFeedbackQuery(): this;
		getTimestamp(): this;
		begin(target: any): this;
		end(): this;
		cancel(): this;
		isResultAvailable(): any;
		getResult(): number;
		static poll(gl: WebGLRenderingContext): void;
		_createHandle(): any;
		_deleteHandle(): void;
	}

}
declare module 'luma.gl/webgl/texture-3d' {
	import Texture from 'luma.gl/webgl/texture';
	export default class Texture3D extends Texture {
		static isSupported(gl: WebGLRenderingContext): boolean;
	    /**
	     * @classdesc
	     * 3D WebGL Texture
	     * Note: Constructor will initialize your texture.
	     *
	     * @class
	     * @param {WebGLRenderingContext} gl - gl context
	     * @param {Image|ArrayBuffer|null} opts= - named options
	     * @param {Image|ArrayBuffer|null} opts.data= - buffer
	     * @param {GLint} width - width of texture
	     * @param {GLint} height - height of texture
	     */
		constructor(gl: WebGLRenderingContext, opts?: {});
		initialize(opts?: {}): void;
		setImage3D({ level, internalformat, width, height, depth, border, format, type, offset, pixels }: {
			level?: number;
			internalformat?: number;
			width: any;
			height: any;
			depth?: number;
			border?: number;
			format: any;
			type?: number;
			offset?: number;
			pixels: any;
		}): this;
	}

}
declare module 'luma.gl/webgl/texture-2d-array' {
	import Texture from 'luma.gl/webgl/texture';
	export default class Texture2DArray extends Texture {
		static isSupported(gl: WebGLRenderingContext): boolean;
		constructor(gl: WebGLRenderingContext, opts?: {});
	}

}
declare module 'luma.gl/webgl/transform-feedback' {
	import Resource from 'luma.gl/webgl/resource';
	export default class TranformFeedback extends Resource {
		static isSupported(gl: WebGLRenderingContext): boolean;
		static isHandle(handle: any): any;
	    /**
	     * @class
	     * @param {WebGL2RenderingContext} gl - context
	     * @param {Object} opts - options
	     */
		constructor(gl: WebGLRenderingContext, opts?: {});
		initialize({ buffers, varyingMap }: {
			buffers?: {};
			varyingMap?: {};
		}): void;
		bindBuffers(buffers?: {}, { clear, varyingMap }?: {
			clear?: boolean;
			varyingMap?: {};
		}): void;
		begin(primitiveMode: any): this;
		pause(): this;
		resume(): this;
		end(): this;
		bindBuffer({ index, buffer, offset, size }: {
			index: any;
			buffer: any;
			offset?: number;
			size: any;
		}): this;
		unbindBuffer({ index }: {
			index: any;
		}): this;
		_bindBuffers(): void;
		_unbindBuffers(): void;
		_createHandle(): any;
		_deleteHandle(): void;
	}

}
declare module 'luma.gl/webgl/uniform-buffer-layout' {
	export default class UniformBufferLayout {
		constructor(layout: any);
		getBytes(): number;
		getData(): any;
		getSubData(index: any): {
			data: any;
			offset: any;
		};
		setUniforms(values: any): this;
		_setValue(key: any, value: any): void;
		_addUniform(key: any, uniformType: any): void;
		_alignTo(size: any, count: any): any;
	}

}
declare module 'luma.gl/geometry/geometry' {
	export const DRAW_MODE: {
		POINTS: number;
		LINES: number;
		LINE_LOOP: number;
		LINE_STRIP: number;
		TRIANGLES: number;
		TRIANGLE_STRIP: number;
		TRIANGLE_FAN: number;
	};
	export function getDrawMode(drawMode: any): any;
	export default class Geometry {
		constructor(opts?: {});
		setNeedsRedraw(redraw?: boolean): this;
		getNeedsRedraw({ clearRedrawFlags }?: {
			clearRedrawFlags?: boolean;
		}): boolean;
		setVertexCount(vertexCount: any): void;
		getVertexCount(): any;
		hasAttribute(attributeName: any): boolean;
		getAttribute(attributeName: any): any;
		getArray(attributeName: any): any;
		getAttributes(): any;
		setAttributes(attributes: any): this;
		_autoDetectAttribute(attributeName: any, attribute: any): void;
		_print(attributeName: any): string;
	}

}
declare module 'luma.gl/core/object-3d' {
	export default class Object3D {
		constructor({ id, display }: {
			id: any;
			display?: boolean;
		});
		setPosition(position: any): this;
		setRotation(rotation: any): this;
		setScale(scale: any): this;
		setMatrixComponents({ position, rotation, scale, update }: {
			position: any;
			rotation: any;
			scale: any;
			update?: boolean;
		}): this;
		updateMatrix(): this;
		update({ position, rotation, scale }?: {
			position: any;
			rotation: any;
			scale: any;
		}): this;
		getCoordinateUniforms(viewMatrix: any, modelMatrix: any): {
			viewMatrix: any;
			modelMatrix: any;
			objectMatrix: any;
			worldMatrix: any;
			worldInverseMatrix: any;
			worldInverseTransposeMatrix: any;
		};
		transform(): this;
	}

}
declare module 'luma.gl/shadertools/shaders/modular-vertex.glsl' {
	const _default: "#define SHADER_NAME luma_modular_vertex\n\n// object attributes\nattribute vec3 positions;\nattribute vec3 normals;\nattribute vec4 colors;\nattribute vec2 texCoords;\nattribute vec3 pickingColors;\n\nvoid main(void) {\n\n  // Set up position\n#ifdef MODULE_GEOMETRY\n  geometry_setPosition(positions);\n  geometry_setNormal(normals);\n#endif\n\n#ifdef MODULE_PROJECT\n  project_setPositionAndNormal_Model(positions, normals);\n  gl_Position = project_model_to_clipspace(positions);\n#endif\n\n  // Set up depth\n#ifdef MODULE_LOGDEPTH\n  logdepth_adjustPosition(gl_Position);\n#endif\n\n#ifdef MODULE_DIFFUSE\n  diffuse_setTextureCoordinate(texCoords);\n#endif\n\n  // Set up color calculations\n#ifdef MODULE_MATERIAL\n  material_setDiffuseColor(colors);\n  material_setDiffuseTextureCoordinates(texCoords);\n#endif\n\n#ifdef MODULE_LIGHTING\n  lighting_setPositionAndNormal(positions, normals);\n  lighting_apply_light(positions);\n  lighting_apply_reflection(positions);\n#endif\n\n#ifdef MODULE_PICKING\n  picking_setPickingColor(pickingColors);\n#endif\n\n}\n";
	export default _default;

}
declare module 'luma.gl/shadertools/shaders/modular-fragment.glsl' {
	const _default: "#define SHADER_NAME luma-modular-fragment\n\n#ifdef GL_ES\nprecision highp float;\n#endif\n\n// varyings\nvarying vec4 vColor;\n\nvoid main(){\n  gl_FragColor = vec4(1., 0., 1., 1.);\n\n#ifdef MODULE_DIFFUSE\n  gl_FragColor = diffuse_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_MATERIAL\n  gl_FragColor = material_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_LIGHTING\n  gl_FragColor = lighting_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_FOG\n  gl_FragColor = fog_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_PICKING\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_LOGDEPTH\n  logdepth_setFragDepth(gl_Position);\n#endif\n}\n";
	export default _default;

}
declare module 'luma.gl/shadertools/shaders' {
	export const MODULAR_SHADERS: {
		vs: string;
		fs: string;
		defaultUniforms: {};
	};

}
declare module 'luma.gl/shadertools/lib/shader-modules' {
	/**
	 * Registers an array of shader modules
	 * @param {Object[]} shaderModuleList - Array of shader modules
	 */
	export function registerShaderModules(shaderModuleList: any, { ignoreMultipleRegistrations }?: {
		ignoreMultipleRegistrations?: boolean;
	}): void;
	/**
	 * Registers an array of default shader modules. These will be concatenated
	 * automatically at the end of any shader module list passed to
	 * `assembleShaders` (plus `resolveModules` and `getShaderDependencies`)
	 * @param {Object[]} modules - Array of shader modules
	 */
	export function setDefaultShaderModules(modules: any): void;
	export function getShaderModule(moduleOrName: any): any;
	export function resolveModules(modules: any): string[];
	/**
	 * Takes a list of shader module names and returns a new list of
	 * shader module names that includes all dependencies, sorted so
	 * that modules that are dependencies of other modules come first.
	 *
	 * If the shader glsl code from the returned modules is concatenated
	 * in the reverse order, it is guaranteed that all functions be resolved and
	 * that all function and variable definitions come before use.
	 *
	 * @param {String[]} modules - Array of modules (inline modules or module names)
	 * @return {String[]} - Array of modules
	 */
	export function getShaderDependencies(modules: any): string[];
	/**
	 * Recursively checks module dpendencies to calculate dependency
	 * level of each module.
	 *
	 * @param {String[]} modules - Array of modules
	 * @param {Number} level - Current level
	 * @return {result} - Map of module name to its level
	 */
	export function getDependencyGraph({ modules, level, result }: {
		modules: any;
		level: any;
		result: any;
	}): any;

}
declare module 'luma.gl/shadertools/lib/platform-defines' {
	export function checkRendererVendor(debugInfo: any, gpuVendor: any): any;
	export function getPlatformShaderDefines(gl: WebGLRenderingContext): string;
	export function getVersionDefines(gl: WebGLRenderingContext): string;

}
declare module 'luma.gl/shadertools/modules/module-injectors' {
	export const MODULE_INJECTORS_VS = "#ifdef MODULE_LOGDEPTH\n  logdepth_adjustPosition(gl_Position);\n#endif\n";
	export const MODULE_INJECTORS_FS = "#ifdef MODULE_MATERIAL\n  gl_FragColor = material_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_LIGHTING\n  gl_FragColor = lighting_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_FOG\n  gl_FragColor = fog_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_PICKING\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_LOGDEPTH\n  logdepth_setFragDepth();\n#endif\n";

}
declare module 'luma.gl/shadertools/lib/assemble-shaders' {
	/**
	 * Apply set of modules
	 */
	export function assembleShaders(gl: WebGLRenderingContext, opts?: {}): {
		gl: WebGLRenderingContext;
		vs: any;
		fs: any;
		getUniforms: (opts: any) => {};
		modules: {};
	};

}
declare module 'luma.gl/shadertools/lib/shader-cache' {
	import Program from 'luma.gl/webgl/program';
	export default class ShaderCache {
	    /**
	     * A cache of compiled shaders, keyed by shader source strings.
	     * Compilation of long shaders can be time consuming.
	     * By using this class, the application can ensure that each shader
	     * is only compiled once.
	     */
		constructor({ gl, _cachePrograms }?: {
			gl: WebGLRenderingContext;
			_cachePrograms?: boolean;
		});
	    /**
	     * Deletes shader references
	     * @return {ShaderCache} - returns this for chaining
	     */
		delete(): this;
	    /**
	     * Returns a compiled `VertexShader` object corresponding to the supplied
	     * GLSL source code string, if possible from cache.
	     *
	     * @param {WebGLRenderingContext} gl - gl context
	     * @param {String} source - Source code for shader
	     * @return {VertexShader} - a compiled vertex shader
	     */
		getVertexShader(gl: WebGLRenderingContext, source: any): any;
	    /**
	     * Returns a compiled `VertexShader` object corresponding to the supplied
	     * GLSL source code string, if possible from cache.
	     * @param {WebGLRenderingContext} gl - gl context
	     * @param {String} source - Source code for shader
	     * @return {FragmentShader} - a compiled fragment shader, possibly from chache
	     */
		getFragmentShader(gl: WebGLRenderingContext, source: any): any;
		getProgram(gl: WebGLRenderingContext, opts: any): any;
		_getProgramKey(opts: any): string;
		_checkProgramProp(program: any): boolean;
		_createNewProgram(gl: WebGLRenderingContext, opts: any): Program;
		_resetProgram(program: any, opts: any): void;
		_compareContexts(gl1: any, gl2: any): boolean;
	}

}
declare module 'luma.gl/shadertools' {
	export { registerShaderModules } from 'luma.gl/shadertools/lib/shader-modules';
	export { assembleShaders } from 'luma.gl/shadertools/lib/assemble-shaders';
	export { default as ShaderCache } from 'luma.gl/shadertools/lib/shader-cache';

}
declare module 'luma.gl/debug/seer-integration' {
	/**
	 * Add a model to our cache indexed by id
	 */
	export const addModel: (model: any) => void;
	/**
	 * Log a model uniforms and attributes.
	 */
	export const logModel: (model: any, uniforms: any) => void;
	/**
	 * Remove a previously set model from the cache
	 */
	export const removeModel: (id: any) => void;
	/**
	 * Create an override on the specify layer, indexed by a valuePath array.
	 * Do nothing in case Seer as not been initialized to prevent any preformance drawback.
	 */
	export const setOverride: (id: any, valuePath: any, value: any) => void;
	/**
	 * Apply overrides to a specific model's uniforms
	 */
	export const getOverrides: (id: any, uniforms: any) => void;

}
declare module 'luma.gl/core/model' {
	import Object3D from 'luma.gl/core/object-3d';
	import { default as ShaderCache } from 'luma.gl/shadertools/lib/shader-cache';
	export default class Model extends Object3D {
		constructor(gl: WebGLRenderingContext, opts?: {});
		init({ vs, fs, modules, defines, moduleSettings, defaultUniforms, program, shaderCache, isInstanced, // Enables instanced rendering
			instanced, // deprecated
			vertexCount, instanceCount, drawMode, uniforms, attributes, geometry, pickable, pick, render, onBeforeRender, onAfterRender, varyings, bufferMode, timerQueryEnabled }?: {
				vs?: any;
				fs?: any;
				modules?: any;
				defines?: {};
				moduleSettings?: {};
				defaultUniforms: any;
				program?: any;
				shaderCache?: ShaderCache;
				isInstanced?: boolean;
				instanced: any;
				vertexCount?: any;
				instanceCount?: number;
				drawMode: any;
				uniforms?: {};
				attributes?: {};
				geometry?: any;
				pickable?: boolean;
				pick?: any;
				render?: any;
				onBeforeRender?: () => void;
				onAfterRender?: () => void;
				varyings?: any;
				bufferMode?: number;
				timerQueryEnabled?: boolean;
			}): void;
		delete(): void;
		destroy(): void;
		setNeedsRedraw(redraw?: boolean): this;
		getNeedsRedraw({ clearRedrawFlags }?: {
			clearRedrawFlags?: boolean;
		}): boolean;
		setDrawMode(drawMode: any): this;
		getDrawMode(): any;
		setVertexCount(vertexCount: any): this;
		getVertexCount(): any;
		setInstanceCount(instanceCount: any): this;
		getInstanceCount(): any;
		getProgram(): any;
		readonly varyingMap: any;
		setGeometry(geometry: any): this;
		getAttributes(): any;
		setAttributes(attributes?: {}): this;
		getUniforms(): any;
		setUniforms(uniforms?: {}): this;
		updateModuleSettings(opts: any): this;
		draw({ moduleSettings, uniforms, attributes, samplers, parameters, settings, framebuffer, vertexArray, transformFeedback }?: {
			moduleSettings?: any;
			uniforms?: {};
			attributes?: {};
			samplers?: {};
			parameters?: {};
			settings: any;
			framebuffer?: any;
			vertexArray?: any;
			transformFeedback?: any;
		}): this;
		render(uniforms?: {}, attributes?: {}, samplers?: {}, transformFeedback?: any, parameters?: {}, vertexArray?: any): this;
		setProgramState({ vertexArray }?: {
			vertexArray?: any;
		}): this;
		unsetProgramState(): this;
		addViewUniforms(uniforms: any): any;
		_initializeProgram({ vs, fs, modules, defines, moduleSettings, defaultUniforms, program, shaderCache, varyings, bufferMode }: {
			vs: any;
			fs: any;
			modules: any;
			defines: any;
			moduleSettings: any;
			defaultUniforms: any;
			program: any;
			shaderCache: ShaderCache;
			varyings: any;
			bufferMode: any;
		}): void;
		_checkForDeprecatedUniforms(uniforms: any): void;
		_timerQueryStart(): void;
		_timerQueryEnd(): void;
		_createBuffersFromAttributeDescriptors(attributes: any): this;
		_logAttributesAndUniforms(priority: any, uniforms?: {}): void;
		_getAttributesTable({ attributes, header, instanced, program }?: {
			attributes: any;
			header?: string;
			instanced: any;
			program: any;
		}): {};
		_createAttributeEntry(attribute: any, location: any, header: any): {
			[x: number]: any;
			'Memory Size and Layout': string;
		};
		isPickable(): any;
		setPickable(pickable?: boolean): this;
		getGeometry(): any;
	}

}
declare module 'luma.gl/core/animation-loop' {
	export default class AnimationLoop {
		constructor(props?: {});
		setNeedsRedraw(reason: any): this;
		setProps(props: any): this;
		start(opts?: {}): this;
		stop(): this;
		setViewParameters({ autoResizeDrawingBuffer, autoResizeCanvas, autoResizeViewport, useDevicePixels, useDevicePixelRatio }: {
			autoResizeDrawingBuffer?: boolean;
			autoResizeCanvas?: boolean;
			autoResizeViewport?: boolean;
			useDevicePixels?: boolean;
			useDevicePixelRatio?: any;
		}): this;
		_setupFrame(): void;
	    /**
	     * @private
	     * Handles a render loop frame - updates context and calls the application
	     * callback
	     */
		_renderFrame(): void;
		_initializeCallbackData(): void;
		_updateCallbackData(): void;
		_finalizeCallbackData(): void;
		_addCallbackData(appContext: any): void;
		_createWebGLContext(opts: any): void;
		_resizeViewport(): void;
		_resizeCanvasDrawingBuffer(): void;
		_createFramebuffer(): void;
		_resizeFramebuffer(): void;
	}

}
declare module 'luma.gl/core/animation-loop-proxy' {
	export default class AnimationLoopProxy {
		static createWorker(opts: any): (self: any) => void;
		constructor({ worker, onInitialize, onFinalize, useDevicePixels, autoResizeDrawingBuffer }: {
			worker: any;
			onInitialize?: () => void;
			onFinalize?: () => void;
			useDevicePixels?: boolean;
			autoResizeDrawingBuffer?: boolean;
		});
		start(opts?: {}): this;
		stop(): this;
		_updateFrame(): void;
		_createAndTransferCanvas(opts: any): void;
		_resizeCanvasDrawingBuffer(): void;
	}

}
declare module 'luma.gl/core/group' {
	import Object3D from 'luma.gl/core/object-3d';
	export default class Group extends Object3D {
		constructor(opts?: {});
		add(...children: any[]): this;
		remove(child: any): this;
		removeAll(): this;
		traverse(visitor: any, { modelMatrix }?: {
			modelMatrix?: any;
		}): any;
		traverseReverse(visitor: any, { modelMatrix }?: {
			modelMatrix?: any;
		}): any;
	}

}
declare module 'luma.gl/core/pick-models' {
	export default function pickModels(gl: WebGLRenderingContext, { models, position, uniforms, // eslint-disable-line
		parameters, settings, useDevicePixelRatio, // deprecated
		useDevicePixels, framebuffer }: {
			models: any;
			position: any;
			uniforms?: {};
			parameters?: {};
			settings: any;
			useDevicePixelRatio?: any;
			useDevicePixels?: boolean;
			framebuffer: any;
		}): any;

}
declare module 'luma.gl/core/picking-colors' {
	export function encodePickingColor(i: any): number[];
	export function decodePickingColor(color: any): number;
	export function getNullPickingColor(): Uint8Array;

}
declare module 'luma.gl/packages/events/add-events' {
	export function get(e: any, win: any): any;
	export function getWheel(e: any): number;
	export function getKey(e: any): {
		code: any;
		key: string;
		shift: any;
		control: any;
		alt: any;
		meta: any;
	};
	export function isRightClick(e: any): boolean;
	export function getPos(e: any, win: any): any[];
	export function stop(e: any): void;
	export class EventsProxy {
		constructor(domElem: any, opt: any);
		attachEvents(): void;
		eventInfo(type: any, e: any, win: any): {};
		getSize(): any;
		mouseup(e: any): void;
		mouseout(e: any): void;
		mouseover(e: any): void;
		mousemove(e: any): void;
		mousewheel(e: any): void;
		mousedown(e: any): void;
		touchstart(e: any): void;
		touchmove(e: any): void;
		touchend(e: any): void;
		keydown(e: any): void;
		keyup(e: any): void;
	}
	export const Keys: {
		enter: number;
		up: number;
		down: number;
		left: number;
		right: number;
		esc: number;
		space: number;
		backspace: number;
		tab: number;
		delete: number;
	};
	export function addEvents(domElement: any, opt?: {}): EventsProxy;
	export function removeEvents(domElement: any, opt?: {}): EventsProxy;

}
declare module 'luma.gl/packages/events' {
	export { addEvents } from 'luma.gl/packages/events/add-events';

}
declare module 'luma.gl/geometry/truncated-cone-geometry' {
	import Geometry from 'luma.gl/geometry/geometry';
	export default class TruncatedConeGeometry extends Geometry {
		constructor(opts?: {});
	}

}
declare module 'luma.gl/geometry/cone-geometry' {
	import TruncatedConeGeometry from 'luma.gl/geometry/truncated-cone-geometry';
	export default class ConeGeometry extends TruncatedConeGeometry {
		constructor(opts?: {});
	}

}
declare module 'luma.gl/geometry/cube-geometry' {
	import Geometry from 'luma.gl/geometry/geometry';
	export default class CubeGeometry extends Geometry {
		constructor(opts?: {});
	}

}
declare module 'luma.gl/geometry/cylinder-geometry' {
	import TruncatedConeGeometry from 'luma.gl/geometry/truncated-cone-geometry';
	export default class CylinderGeometry extends TruncatedConeGeometry {
		constructor(opts?: {});
	}

}
declare module 'luma.gl/geometry/ico-sphere-geometry' {
	import Geometry from 'luma.gl/geometry/geometry';
	export default class IcoSphereGeometry extends Geometry {
		constructor(opts?: {});
	}

}
declare module 'luma.gl/geometry/plane-geometry' {
	import Geometry from 'luma.gl/geometry/geometry';
	export default class PlaneGeometry extends Geometry {
		constructor(opts?: {});
	}

}
declare module 'luma.gl/geometry/sphere-geometry' {
	import Geometry from 'luma.gl/geometry/geometry';
	export default class SphereGeometry extends Geometry {
		constructor(opts?: {});
	}

}
declare module 'luma.gl/geometry' {
	export { default as Geometry } from 'luma.gl/geometry/geometry';
	export { default as ConeGeometry } from 'luma.gl/geometry/cone-geometry';
	export { default as CubeGeometry } from 'luma.gl/geometry/cube-geometry';
	export { default as CylinderGeometry } from 'luma.gl/geometry/cylinder-geometry';
	export { default as IcoSphereGeometry } from 'luma.gl/geometry/ico-sphere-geometry';
	export { default as PlaneGeometry } from 'luma.gl/geometry/plane-geometry';
	export { default as SphereGeometry } from 'luma.gl/geometry/sphere-geometry';
	export { default as TruncatedConeGeometry } from 'luma.gl/geometry/truncated-cone-geometry';

}
declare module 'luma.gl/core' {
	export { default as AnimationLoop } from 'luma.gl/core/animation-loop';
	export { default as AnimationLoopProxy } from 'luma.gl/core/animation-loop-proxy';
	export { default as Model } from 'luma.gl/core/model';

}
declare module 'luma.gl/models/cone' {
	import { Model } from 'luma.gl/core';
	export default class Cone extends Model {
		constructor(gl: WebGLRenderingContext, opts?: {});
	}

}
declare module 'luma.gl/models/cube' {
	import { Model } from 'luma.gl/core';
	export default class Cube extends Model {
		constructor(gl: WebGLRenderingContext, opts?: {});
	}

}
declare module 'luma.gl/models/cylinder' {
	import Model from 'luma.gl/core/model';
	export default class Cylinder extends Model {
		constructor(gl: WebGLRenderingContext, opts?: {});
	}

}
declare module 'luma.gl/models/ico-sphere' {
	import { Model } from 'luma.gl/core';
	export default class IcoSphere extends Model {
		constructor(gl: WebGLRenderingContext, opts?: {});
	}

}
declare module 'luma.gl/models/plane' {
	import Model from 'luma.gl/core/model';
	export default class Plane extends Model {
		constructor(gl: WebGLRenderingContext, opts?: {});
	}

}
declare module 'luma.gl/models/sphere' {
	import { Model } from 'luma.gl/core';
	export default class Sphere extends Model {
		constructor(gl: WebGLRenderingContext, opts?: {});
	}

}
declare module 'luma.gl/models/truncated-cone' {
	import { Model } from 'luma.gl/core';
	export default class TruncatedCone extends Model {
		constructor(gl: WebGLRenderingContext, opts?: {});
	}

}
declare module 'luma.gl/models/clip-space-quad' {
	import { Model } from 'luma.gl/core';
	export default class ClipSpaceQuad extends Model {
		constructor(gl: WebGLRenderingContext, opts: any);
	}

}
declare module 'luma.gl/io/browser-request-file' {
	export function requestFile(opts: any): Promise<{}>;

}
declare module 'luma.gl/io/browser-load' {
	export function setPathPrefix(prefix: any): void;
	export function loadFile(url: any, opts: any): Promise<{}>;
	export function loadImage(url: any, opts: any): Promise<{}>;

}
declare module 'luma.gl/io/load-files' {
	import { Program, Texture2D } from 'luma.gl/webgl';
	import { Model } from 'luma.gl/core';
	export function loadTexture(gl: WebGLRenderingContext, url: any, opts?: {}): Promise<Texture2D[]>;
	export function loadFiles(opts?: {}): Promise<[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]>;
	export function loadImages(opts?: {}): Promise<[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]>;
	export function loadTextures(gl: WebGLRenderingContext, opts?: {}): Promise<Texture2D[]>;
	export function loadProgram(gl: WebGLRenderingContext, opts?: {}): Promise<Program>;
	export function loadModel(gl: WebGLRenderingContext, opts?: {}): Promise<Model>;
	export function parseModel(gl: WebGLRenderingContext, opts?: {}): Model;

}
declare module 'luma.gl/io' {
	export { setPathPrefix, loadFile, loadImage } from 'luma.gl/io/browser-load';
	export { loadFiles, loadImages, loadTextures } from 'luma.gl/io/load-files';
	export { loadProgram, loadModel, parseModel } from 'luma.gl/io/load-files';

}
declare module 'luma.gl/shadertools/modules/fp32/fp32' {
	const _default: {
		name: string;
		vs: string;
		fs: any;
	};
	export default _default;

}
declare module 'luma.gl/shadertools/modules/fp64/fp64-utils' {
	/**
	 * Calculate WebGL 64 bit float
	 * @param a {number} - the input float number
	 * @param out {array, optional} - the output array. If not supplied, a new array is created.
	 * @param startIndex {integer, optional} - the index in the output array to fill from. Default 0.
	 * @returns {array} - the fp64 representation of the input number
	 */
	export function fp64ify(a: any, out?: any[], startIndex?: number): any[];
	/**
	 * Calculate the low part of a WebGL 64 bit float
	 * @param a {number} - the input float number
	 * @returns {number} - the lower 32 bit of the number
	 */
	export function fp64LowPart(a: any): number;
	/**
	 * Calculate WebGL 64 bit matrix (transposed "Float64Array")
	 * @param matrix {Matrix4} - the input matrix
	 * @returns {array} - the fp64 representation of the input matrix
	 */
	export function fp64ifyMatrix4(matrix: any): Float32Array;

}
declare module 'luma.gl/shadertools/modules/fp64/fp64-arithmetic.glsl' {
	const _default: "uniform float ONE;\n\n/*\nAbout LUMA_FP64_CODE_ELIMINATION_WORKAROUND\n\nThe purpose of this workaround is to prevent shader compilers from\noptimizing away necessary arithmetic operations by swapping their sequences\nor transform the equation to some 'equivalent' from.\n\nThe method is to multiply an artifical variable, ONE, which will be known to\nthe compiler to be 1 only at runtime. The whole expression is then represented\nas a polynomial with respective to ONE. In the coefficients of all terms, only one a\nand one b should appear\n\nerr = (a + b) * ONE^6 - a * ONE^5 - (a + b) * ONE^4 + a * ONE^3 - b - (a + b) * ONE^2 + a * ONE\n*/\n\n// Divide float number to high and low floats to extend fraction bits\nvec2 split(float a) {\n  const float SPLIT = 4097.0;\n  float t = a * SPLIT;\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float a_hi = t * ONE - (t - a);\n  float a_lo = a * ONE - a_hi;\n#else\n  float a_hi = t - (t - a);\n  float a_lo = a - a_hi;\n#endif\n  return vec2(a_hi, a_lo);\n}\n\n// Divide float number again when high float uses too many fraction bits\nvec2 split2(vec2 a) {\n  vec2 b = split(a.x);\n  b.y += a.y;\n  return b;\n}\n\n// Special sum operation when a > b\nvec2 quickTwoSum(float a, float b) {\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float sum = (a + b) * ONE;\n  float err = b - (sum - a) * ONE;\n#else\n  float sum = a + b;\n  float err = b - (sum - a);\n#endif\n  return vec2(sum, err);\n}\n\n// General sum operation\nvec2 twoSum(float a, float b) {\n  float s = (a + b);\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float v = (s * ONE - a) * ONE;\n  float err = (a - (s - v) * ONE) * ONE * ONE * ONE + (b - v);\n#else\n  float v = s - a;\n  float err = (a - (s - v)) + (b - v);\n#endif\n  return vec2(s, err);\n}\n\nvec2 twoSub(float a, float b) {\n  float s = (a - b);\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float v = (s * ONE - a) * ONE;\n  float err = (a - (s - v) * ONE) * ONE * ONE * ONE - (b + v);\n#else\n  float v = s - a;\n  float err = (a - (s - v)) - (b + v);\n#endif\n  return vec2(s, err);\n}\n\nvec2 twoSqr(float a) {\n  float prod = a * a;\n  vec2 a_fp64 = split(a);\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  float err = ((a_fp64.x * a_fp64.x - prod) * ONE + 2.0 * a_fp64.x *\n    a_fp64.y * ONE * ONE) + a_fp64.y * a_fp64.y * ONE * ONE * ONE;\n#else\n  float err = ((a_fp64.x * a_fp64.x - prod) + 2.0 * a_fp64.x * a_fp64.y) + a_fp64.y * a_fp64.y;\n#endif\n  return vec2(prod, err);\n}\n\nvec2 twoProd(float a, float b) {\n  float prod = a * b;\n  vec2 a_fp64 = split(a);\n  vec2 b_fp64 = split(b);\n  float err = ((a_fp64.x * b_fp64.x - prod) + a_fp64.x * b_fp64.y +\n    a_fp64.y * b_fp64.x) + a_fp64.y * b_fp64.y;\n  return vec2(prod, err);\n}\n\nvec2 sum_fp64(vec2 a, vec2 b) {\n  vec2 s, t;\n  s = twoSum(a.x, b.x);\n  t = twoSum(a.y, b.y);\n  s.y += t.x;\n  s = quickTwoSum(s.x, s.y);\n  s.y += t.y;\n  s = quickTwoSum(s.x, s.y);\n  return s;\n}\n\nvec2 sub_fp64(vec2 a, vec2 b) {\n  vec2 s, t;\n  s = twoSub(a.x, b.x);\n  t = twoSub(a.y, b.y);\n  s.y += t.x;\n  s = quickTwoSum(s.x, s.y);\n  s.y += t.y;\n  s = quickTwoSum(s.x, s.y);\n  return s;\n}\n\nvec2 mul_fp64(vec2 a, vec2 b) {\n  vec2 prod = twoProd(a.x, b.x);\n  // y component is for the error\n  prod.y += a.x * b.y;\n#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)\n  prod = split2(prod);\n#endif\n  prod = quickTwoSum(prod.x, prod.y);\n  prod.y += a.y * b.x;\n#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)\n  prod = split2(prod);\n#endif\n  prod = quickTwoSum(prod.x, prod.y);\n  return prod;\n}\n\nvec2 div_fp64(vec2 a, vec2 b) {\n  float xn = 1.0 / b.x;\n#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)\n  vec2 yn = mul_fp64(a, vec2(xn, 0));\n#else\n  vec2 yn = a * xn;\n#endif\n  float diff = (sub_fp64(a, mul_fp64(b, yn))).x;\n  vec2 prod = twoProd(xn, diff);\n  return sum_fp64(yn, prod);\n}\n\nvec2 sqrt_fp64(vec2 a) {\n  if (a.x == 0.0 && a.y == 0.0) return vec2(0.0, 0.0);\n  if (a.x < 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);\n\n  float x = 1.0 / sqrt(a.x);\n  float yn = a.x * x;\n#if defined(LUMA_FP64_CODE_ELIMINATION_WORKAROUND)\n  vec2 yn_sqr = twoSqr(yn) * ONE;\n#else\n  vec2 yn_sqr = twoSqr(yn);\n#endif\n  float diff = sub_fp64(a, yn_sqr).x;\n  vec2 prod = twoProd(x * 0.5, diff);\n#if defined(LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND)\n  return sum_fp64(split(yn), prod);\n#else\n  return sum_fp64(vec2(yn, 0.0), prod);\n#endif\n}\n";
	export default _default;

}
declare module 'luma.gl/shadertools/modules/fp64/fp64-functions.glsl' {
	const _default: "const vec2 E_FP64 = vec2(2.7182817459106445e+00, 8.254840366817007e-08);\nconst vec2 LOG2_FP64 = vec2(0.6931471824645996e+00, -1.9046542121259336e-09);\nconst vec2 PI_FP64 = vec2(3.1415927410125732, -8.742278012618954e-8);\nconst vec2 TWO_PI_FP64 = vec2(6.2831854820251465, -1.7484556025237907e-7);\nconst vec2 PI_2_FP64 = vec2(1.5707963705062866, -4.371139006309477e-8);\nconst vec2 PI_4_FP64 = vec2(0.7853981852531433, -2.1855695031547384e-8);\nconst vec2 PI_16_FP64 = vec2(0.19634954631328583, -5.463923757886846e-9);\nconst vec2 PI_16_2_FP64 = vec2(0.39269909262657166, -1.0927847515773692e-8);\nconst vec2 PI_16_3_FP64 = vec2(0.5890486240386963, -1.4906100798128818e-9);\nconst vec2 PI_180_FP64 = vec2(0.01745329238474369, 1.3519960498364902e-10);\n\nconst vec2 SIN_TABLE_0_FP64 = vec2(0.19509032368659973, -1.6704714833615242e-9);\nconst vec2 SIN_TABLE_1_FP64 = vec2(0.3826834261417389, 6.22335089017767e-9);\nconst vec2 SIN_TABLE_2_FP64 = vec2(0.5555702447891235, -1.1769521357507529e-8);\nconst vec2 SIN_TABLE_3_FP64 = vec2(0.7071067690849304, 1.2101617041793133e-8);\n\nconst vec2 COS_TABLE_0_FP64 = vec2(0.9807852506637573, 2.9739473106360492e-8);\nconst vec2 COS_TABLE_1_FP64 = vec2(0.9238795042037964, 2.8307490351764386e-8);\nconst vec2 COS_TABLE_2_FP64 = vec2(0.8314695954322815, 1.6870263741530778e-8);\nconst vec2 COS_TABLE_3_FP64 = vec2(0.7071067690849304, 1.2101617152815436e-8);\n\nconst vec2 INVERSE_FACTORIAL_3_FP64 = vec2(1.666666716337204e-01, -4.967053879312289e-09); // 1/3!\nconst vec2 INVERSE_FACTORIAL_4_FP64 = vec2(4.16666679084301e-02, -1.2417634698280722e-09); // 1/4!\nconst vec2 INVERSE_FACTORIAL_5_FP64 = vec2(8.333333767950535e-03, -4.34617203337595e-10); // 1/5!\nconst vec2 INVERSE_FACTORIAL_6_FP64 = vec2(1.3888889225199819e-03, -3.3631094437103215e-11); // 1/6!\nconst vec2 INVERSE_FACTORIAL_7_FP64 = vec2(1.9841270113829523e-04,  -2.725596874933456e-12); // 1/7!\nconst vec2 INVERSE_FACTORIAL_8_FP64 = vec2(2.4801587642286904e-05, -3.406996025904184e-13); // 1/8!\nconst vec2 INVERSE_FACTORIAL_9_FP64 = vec2(2.75573188446287533e-06, 3.7935713937038186e-14); // 1/9!\nconst vec2 INVERSE_FACTORIAL_10_FP64 = vec2(2.755731998149713e-07, -7.575112367869873e-15); // 1/10!\n\nfloat nint(float d) {\n    if (d == floor(d)) return d;\n    return floor(d + 0.5);\n}\n\nvec2 nint_fp64(vec2 a) {\n    float hi = nint(a.x);\n    float lo;\n    vec2 tmp;\n    if (hi == a.x) {\n        lo = nint(a.y);\n        tmp = quickTwoSum(hi, lo);\n    } else {\n        lo = 0.0;\n        if (abs(hi - a.x) == 0.5 && a.y < 0.0) {\n            hi -= 1.0;\n        }\n        tmp = vec2(hi, lo);\n    }\n    return tmp;\n}\n\n/* k_power controls how much range reduction we would like to have\nRange reduction uses the following method:\nassume a = k_power * r + m * log(2), k and m being integers.\nSet k_power = 4 (we can choose other k to trade accuracy with performance.\nwe only need to calculate exp(r) and using exp(a) = 2^m * exp(r)^k_power;\n*/\n\nvec2 exp_fp64(vec2 a) {\n  // We need to make sure these two numbers match\n  // as bit-wise shift is not available in GLSL 1.0\n  const int k_power = 4;\n  const float k = 16.0;\n\n  const float inv_k = 1.0 / k;\n\n  if (a.x <= -88.0) return vec2(0.0, 0.0);\n  if (a.x >= 88.0) return vec2(1.0 / 0.0, 1.0 / 0.0);\n  if (a.x == 0.0 && a.y == 0.0) return vec2(1.0, 0.0);\n  if (a.x == 1.0 && a.y == 0.0) return E_FP64;\n\n  float m = floor(a.x / LOG2_FP64.x + 0.5);\n  vec2 r = sub_fp64(a, mul_fp64(LOG2_FP64, vec2(m, 0.0))) * inv_k;\n  vec2 s, t, p;\n\n  p = mul_fp64(r, r);\n  s = sum_fp64(r, p * 0.5);\n  p = mul_fp64(p, r);\n  t = mul_fp64(p, INVERSE_FACTORIAL_3_FP64);\n\n  s = sum_fp64(s, t);\n  p = mul_fp64(p, r);\n  t = mul_fp64(p, INVERSE_FACTORIAL_4_FP64);\n\n  s = sum_fp64(s, t);\n  p = mul_fp64(p, r);\n  t = mul_fp64(p, INVERSE_FACTORIAL_5_FP64);\n\n  // s = sum_fp64(s, t);\n  // p = mul_fp64(p, r);\n  // t = mul_fp64(p, INVERSE_FACTORIAL_6_FP64);\n\n  // s = sum_fp64(s, t);\n  // p = mul_fp64(p, r);\n  // t = mul_fp64(p, INVERSE_FACTORIAL_7_FP64);\n\n  s = sum_fp64(s, t);\n\n\n  // At this point, s = exp(r) - 1; but after following 4 recursions, we will get exp(r) ^ 512 - 1.\n  for (int i = 0; i < k_power; i++) {\n    s = sum_fp64(s * 2.0, mul_fp64(s, s));\n  }\n\n#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)\n  s = sum_fp64(s, vec2(ONE, 0.0));\n#else\n  s = sum_fp64(s, vec2(1.0, 0.0));\n#endif\n\n  return s * pow(2.0, m);\n//   return r;\n}\n\nvec2 log_fp64(vec2 a)\n{\n  if (a.x == 1.0 && a.y == 0.0) return vec2(0.0, 0.0);\n  if (a.x <= 0.0) return vec2(0.0 / 0.0, 0.0 / 0.0);\n  vec2 x = vec2(log(a.x), 0.0);\n  vec2 s;\n#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)\n  s = vec2(ONE, 0.0);\n#else\n  s = vec2(1.0, 0.0);\n#endif\n\n  x = sub_fp64(sum_fp64(x, mul_fp64(a, exp_fp64(-x))), s);\n  return x;\n}\n\nvec2 sin_taylor_fp64(vec2 a) {\n  vec2 r, s, t, x;\n\n  if (a.x == 0.0 && a.y == 0.0) {\n    return vec2(0.0, 0.0);\n  }\n\n  x = -mul_fp64(a, a);\n  s = a;\n  r = a;\n\n  r = mul_fp64(r, x);\n  t = mul_fp64(r, INVERSE_FACTORIAL_3_FP64);\n  s = sum_fp64(s, t);\n\n  r = mul_fp64(r, x);\n  t = mul_fp64(r, INVERSE_FACTORIAL_5_FP64);\n  s = sum_fp64(s, t);\n\n  /* keep the following commented code in case we need them\n  for extra accuracy from the Taylor expansion*/\n\n  // r = mul_fp64(r, x);\n  // t = mul_fp64(r, INVERSE_FACTORIAL_7_FP64);\n  // s = sum_fp64(s, t);\n\n  // r = mul_fp64(r, x);\n  // t = mul_fp64(r, INVERSE_FACTORIAL_9_FP64);\n  // s = sum_fp64(s, t);\n\n  return s;\n}\n\nvec2 cos_taylor_fp64(vec2 a) {\n  vec2 r, s, t, x;\n\n  if (a.x == 0.0 && a.y == 0.0) {\n    return vec2(1.0, 0.0);\n  }\n\n  x = -mul_fp64(a, a);\n  r = x;\n  s = sum_fp64(vec2(1.0, 0.0), r * 0.5);\n\n  r = mul_fp64(r, x);\n  t = mul_fp64(r, INVERSE_FACTORIAL_4_FP64);\n  s = sum_fp64(s, t);\n\n  r = mul_fp64(r, x);\n  t = mul_fp64(r, INVERSE_FACTORIAL_6_FP64);\n  s = sum_fp64(s, t);\n\n  /* keep the following commented code in case we need them\n  for extra accuracy from the Taylor expansion*/\n\n  // r = mul_fp64(r, x);\n  // t = mul_fp64(r, INVERSE_FACTORIAL_8_FP64);\n  // s = sum_fp64(s, t);\n\n  // r = mul_fp64(r, x);\n  // t = mul_fp64(r, INVERSE_FACTORIAL_10_FP64);\n  // s = sum_fp64(s, t);\n\n  return s;\n}\n\nvoid sincos_taylor_fp64(vec2 a, out vec2 sin_t, out vec2 cos_t) {\n  if (a.x == 0.0 && a.y == 0.0) {\n    sin_t = vec2(0.0, 0.0);\n    cos_t = vec2(1.0, 0.0);\n  }\n\n  sin_t = sin_taylor_fp64(a);\n  cos_t = sqrt_fp64(sub_fp64(vec2(1.0, 0.0), mul_fp64(sin_t, sin_t)));\n}\n\nvec2 sin_fp64(vec2 a) {\n    if (a.x == 0.0 && a.y == 0.0) {\n        return vec2(0.0, 0.0);\n    }\n\n    // 2pi range reduction\n    vec2 z = nint_fp64(div_fp64(a, TWO_PI_FP64));\n    vec2 r = sub_fp64(a, mul_fp64(TWO_PI_FP64, z));\n\n    vec2 t;\n    float q = floor(r.x / PI_2_FP64.x + 0.5);\n    int j = int(q);\n\n    if (j < -2 || j > 2) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    }\n\n    t = sub_fp64(r, mul_fp64(PI_2_FP64, vec2(q, 0.0)));\n\n    q = floor(t.x / PI_16_FP64.x + 0.5);\n    int k = int(q);\n\n    if (k == 0) {\n        if (j == 0) {\n            return sin_taylor_fp64(t);\n        } else if (j == 1) {\n            return cos_taylor_fp64(t);\n        } else if (j == -1) {\n            return -cos_taylor_fp64(t);\n        } else {\n            return -sin_taylor_fp64(t);\n        }\n    }\n\n    int abs_k = int(abs(float(k)));\n\n    if (abs_k > 4) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    } else {\n        t = sub_fp64(t, mul_fp64(PI_16_FP64, vec2(q, 0.0)));\n    }\n\n    vec2 u = vec2(0.0, 0.0);\n    vec2 v = vec2(0.0, 0.0);\n\n#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)\n    if (abs(float(abs_k) - 1.0) < 0.5) {\n        u = COS_TABLE_0_FP64;\n        v = SIN_TABLE_0_FP64;\n    } else if (abs(float(abs_k) - 2.0) < 0.5) {\n        u = COS_TABLE_1_FP64;\n        v = SIN_TABLE_1_FP64;\n    } else if (abs(float(abs_k) - 3.0) < 0.5) {\n        u = COS_TABLE_2_FP64;\n        v = SIN_TABLE_2_FP64;\n    } else if (abs(float(abs_k) - 4.0) < 0.5) {\n        u = COS_TABLE_3_FP64;\n        v = SIN_TABLE_3_FP64;\n    }\n#else\n    if (abs_k == 1) {\n        u = COS_TABLE_0_FP64;\n        v = SIN_TABLE_0_FP64;\n    } else if (abs_k == 2) {\n        u = COS_TABLE_1_FP64;\n        v = SIN_TABLE_1_FP64;\n    } else if (abs_k == 3) {\n        u = COS_TABLE_2_FP64;\n        v = SIN_TABLE_2_FP64;\n    } else if (abs_k == 4) {\n        u = COS_TABLE_3_FP64;\n        v = SIN_TABLE_3_FP64;\n    }\n#endif\n\n    vec2 sin_t, cos_t;\n    sincos_taylor_fp64(t, sin_t, cos_t);\n\n\n\n    vec2 result = vec2(0.0, 0.0);\n    if (j == 0) {\n        if (k > 0) {\n            result = sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        } else {\n            result = sub_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        }\n    } else if (j == 1) {\n        if (k > 0) {\n            result = sub_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        } else {\n            result = sum_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        }\n    } else if (j == -1) {\n        if (k > 0) {\n            result = sub_fp64(mul_fp64(v, sin_t), mul_fp64(u, cos_t));\n        } else {\n            result = -sum_fp64(mul_fp64(v, sin_t), mul_fp64(u, cos_t));\n        }\n    } else {\n        if (k > 0) {\n            result = -sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        } else {\n            result = sub_fp64(mul_fp64(v, cos_t), mul_fp64(u, sin_t));\n        }\n    }\n\n    return result;\n}\n\nvec2 cos_fp64(vec2 a) {\n    if (a.x == 0.0 && a.y == 0.0) {\n        return vec2(1.0, 0.0);\n    }\n\n    // 2pi range reduction\n    vec2 z = nint_fp64(div_fp64(a, TWO_PI_FP64));\n    vec2 r = sub_fp64(a, mul_fp64(TWO_PI_FP64, z));\n\n    vec2 t;\n    float q = floor(r.x / PI_2_FP64.x + 0.5);\n    int j = int(q);\n\n    if (j < -2 || j > 2) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    }\n\n    t = sub_fp64(r, mul_fp64(PI_2_FP64, vec2(q, 0.0)));\n\n    q = floor(t.x / PI_16_FP64.x + 0.5);\n    int k = int(q);\n\n    if (k == 0) {\n        if (j == 0) {\n            return cos_taylor_fp64(t);\n        } else if (j == 1) {\n            return -sin_taylor_fp64(t);\n        } else if (j == -1) {\n            return sin_taylor_fp64(t);\n        } else {\n            return -cos_taylor_fp64(t);\n        }\n    }\n\n    int abs_k = int(abs(float(k)));\n\n    if (abs_k > 4) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    } else {\n        t = sub_fp64(t, mul_fp64(PI_16_FP64, vec2(q, 0.0)));\n    }\n\n    vec2 u = vec2(0.0, 0.0);\n    vec2 v = vec2(0.0, 0.0);\n\n#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)\n    if (abs(float(abs_k) - 1.0) < 0.5) {\n        u = COS_TABLE_0_FP64;\n        v = SIN_TABLE_0_FP64;\n    } else if (abs(float(abs_k) - 2.0) < 0.5) {\n        u = COS_TABLE_1_FP64;\n        v = SIN_TABLE_1_FP64;\n    } else if (abs(float(abs_k) - 3.0) < 0.5) {\n        u = COS_TABLE_2_FP64;\n        v = SIN_TABLE_2_FP64;\n    } else if (abs(float(abs_k) - 4.0) < 0.5) {\n        u = COS_TABLE_3_FP64;\n        v = SIN_TABLE_3_FP64;\n    }\n#else\n    if (abs_k == 1) {\n        u = COS_TABLE_0_FP64;\n        v = SIN_TABLE_0_FP64;\n    } else if (abs_k == 2) {\n        u = COS_TABLE_1_FP64;\n        v = SIN_TABLE_1_FP64;\n    } else if (abs_k == 3) {\n        u = COS_TABLE_2_FP64;\n        v = SIN_TABLE_2_FP64;\n    } else if (abs_k == 4) {\n        u = COS_TABLE_3_FP64;\n        v = SIN_TABLE_3_FP64;\n    }\n#endif\n\n    vec2 sin_t, cos_t;\n    sincos_taylor_fp64(t, sin_t, cos_t);\n\n    vec2 result = vec2(0.0, 0.0);\n    if (j == 0) {\n        if (k > 0) {\n            result = sub_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        } else {\n            result = sum_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        }\n    } else if (j == 1) {\n        if (k > 0) {\n            result = -sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        } else {\n            result = sub_fp64(mul_fp64(v, cos_t), mul_fp64(u, sin_t));\n        }\n    } else if (j == -1) {\n        if (k > 0) {\n            result = sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        } else {\n            result = sub_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n        }\n    } else {\n        if (k > 0) {\n            result = sub_fp64(mul_fp64(v, sin_t), mul_fp64(u, cos_t));\n        } else {\n            result = -sum_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        }\n    }\n\n    return result;\n}\n\nvec2 tan_fp64(vec2 a) {\n    vec2 sin_a;\n    vec2 cos_a;\n\n    if (a.x == 0.0 && a.y == 0.0) {\n        return vec2(0.0, 0.0);\n    }\n\n    // 2pi range reduction\n    vec2 z = nint_fp64(div_fp64(a, TWO_PI_FP64));\n    vec2 r = sub_fp64(a, mul_fp64(TWO_PI_FP64, z));\n\n    vec2 t;\n    float q = floor(r.x / PI_2_FP64.x + 0.5);\n    int j = int(q);\n\n\n    if (j < -2 || j > 2) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    }\n\n    t = sub_fp64(r, mul_fp64(PI_2_FP64, vec2(q, 0.0)));\n\n    q = floor(t.x / PI_16_FP64.x + 0.5);\n    int k = int(q);\n    int abs_k = int(abs(float(k)));\n\n    // We just can't get PI/16 * 3.0 very accurately.\n    // so let's just store it\n    if (abs_k > 4) {\n        return vec2(0.0 / 0.0, 0.0 / 0.0);\n    } else {\n        t = sub_fp64(t, mul_fp64(PI_16_FP64, vec2(q, 0.0)));\n    }\n\n\n    vec2 u = vec2(0.0, 0.0);\n    vec2 v = vec2(0.0, 0.0);\n\n    vec2 sin_t, cos_t;\n    vec2 s, c;\n    sincos_taylor_fp64(t, sin_t, cos_t);\n\n    if (k == 0) {\n        s = sin_t;\n        c = cos_t;\n    } else {\n#if defined(NVIDIA_FP64_WORKAROUND) || defined(INTEL_FP64_WORKAROUND)\n        if (abs(float(abs_k) - 1.0) < 0.5) {\n            u = COS_TABLE_0_FP64;\n            v = SIN_TABLE_0_FP64;\n        } else if (abs(float(abs_k) - 2.0) < 0.5) {\n            u = COS_TABLE_1_FP64;\n            v = SIN_TABLE_1_FP64;\n        } else if (abs(float(abs_k) - 3.0) < 0.5) {\n            u = COS_TABLE_2_FP64;\n            v = SIN_TABLE_2_FP64;\n        } else if (abs(float(abs_k) - 4.0) < 0.5) {\n            u = COS_TABLE_3_FP64;\n            v = SIN_TABLE_3_FP64;\n        }\n#else\n        if (abs_k == 1) {\n            u = COS_TABLE_0_FP64;\n            v = SIN_TABLE_0_FP64;\n        } else if (abs_k == 2) {\n            u = COS_TABLE_1_FP64;\n            v = SIN_TABLE_1_FP64;\n        } else if (abs_k == 3) {\n            u = COS_TABLE_2_FP64;\n            v = SIN_TABLE_2_FP64;\n        } else if (abs_k == 4) {\n            u = COS_TABLE_3_FP64;\n            v = SIN_TABLE_3_FP64;\n        }\n#endif\n        if (k > 0) {\n            s = sum_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n            c = sub_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        } else {\n            s = sub_fp64(mul_fp64(u, sin_t), mul_fp64(v, cos_t));\n            c = sum_fp64(mul_fp64(u, cos_t), mul_fp64(v, sin_t));\n        }\n    }\n\n    if (j == 0) {\n        sin_a = s;\n        cos_a = c;\n    } else if (j == 1) {\n        sin_a = c;\n        cos_a = -s;\n    } else if (j == -1) {\n        sin_a = -c;\n        cos_a = s;\n    } else {\n        sin_a = -s;\n        cos_a = -c;\n    }\n    return div_fp64(sin_a, cos_a);\n}\n\nvec2 radians_fp64(vec2 degree) {\n  return mul_fp64(degree, PI_180_FP64);\n}\n\nvec2 mix_fp64(vec2 a, vec2 b, float x) {\n  vec2 range = sub_fp64(b, a);\n  return sum_fp64(a, mul_fp64(range, vec2(x, 0.0)));\n}\n\n// Vector functions\n// vec2 functions\nvoid vec2_sum_fp64(vec2 a[2], vec2 b[2], out vec2 out_val[2]) {\n    out_val[0] = sum_fp64(a[0], b[0]);\n    out_val[1] = sum_fp64(a[1], b[1]);\n}\n\nvoid vec2_sub_fp64(vec2 a[2], vec2 b[2], out vec2 out_val[2]) {\n    out_val[0] = sub_fp64(a[0], b[0]);\n    out_val[1] = sub_fp64(a[1], b[1]);\n}\n\nvoid vec2_mul_fp64(vec2 a[2], vec2 b[2], out vec2 out_val[2]) {\n    out_val[0] = mul_fp64(a[0], b[0]);\n    out_val[1] = mul_fp64(a[1], b[1]);\n}\n\nvoid vec2_div_fp64(vec2 a[2], vec2 b[2], out vec2 out_val[2]) {\n    out_val[0] = div_fp64(a[0], b[0]);\n    out_val[1] = div_fp64(a[1], b[1]);\n}\n\nvoid vec2_mix_fp64(vec2 x[2], vec2 y[2], float a, out vec2 out_val[2]) {\n  vec2 range[2];\n  vec2_sub_fp64(y, x, range);\n  vec2 portion[2];\n  portion[0] = range[0] * a;\n  portion[1] = range[1] * a;\n  vec2_sum_fp64(x, portion, out_val);\n}\n\nvec2 vec2_length_fp64(vec2 x[2]) {\n  return sqrt_fp64(sum_fp64(mul_fp64(x[0], x[0]), mul_fp64(x[1], x[1])));\n}\n\nvoid vec2_normalize_fp64(vec2 x[2], out vec2 out_val[2]) {\n  vec2 length = vec2_length_fp64(x);\n  vec2 length_vec2[2];\n  length_vec2[0] = length;\n  length_vec2[1] = length;\n\n  vec2_div_fp64(x, length_vec2, out_val);\n}\n\nvec2 vec2_distance_fp64(vec2 x[2], vec2 y[2]) {\n  vec2 diff[2];\n  vec2_sub_fp64(x, y, diff);\n  return vec2_length_fp64(diff);\n}\n\nvec2 vec2_dot_fp64(vec2 a[2], vec2 b[2]) {\n  vec2 v[2];\n\n  v[0] = mul_fp64(a[0], b[0]);\n  v[1] = mul_fp64(a[1], b[1]);\n\n  return sum_fp64(v[0], v[1]);\n}\n\n// vec3 functions\nvoid vec3_sub_fp64(vec2 a[3], vec2 b[3], out vec2 out_val[3]) {\n  for (int i = 0; i < 3; i++) {\n    out_val[i] = sum_fp64(a[i], b[i]);\n  }\n}\n\nvoid vec3_sum_fp64(vec2 a[3], vec2 b[3], out vec2 out_val[3]) {\n  for (int i = 0; i < 3; i++) {\n    out_val[i] = sum_fp64(a[i], b[i]);\n  }\n}\n\nvec2 vec3_length_fp64(vec2 x[3]) {\n  return sqrt_fp64(sum_fp64(sum_fp64(mul_fp64(x[0], x[0]), mul_fp64(x[1], x[1])),\n    mul_fp64(x[2], x[2])));\n}\n\nvec2 vec3_distance_fp64(vec2 x[3], vec2 y[3]) {\n  vec2 diff[3];\n  vec3_sub_fp64(x, y, diff);\n  return vec3_length_fp64(diff);\n}\n\n// vec4 functions\nvoid vec4_fp64(vec4 a, out vec2 out_val[4]) {\n  out_val[0].x = a[0];\n  out_val[0].y = 0.0;\n\n  out_val[1].x = a[1];\n  out_val[1].y = 0.0;\n\n  out_val[2].x = a[2];\n  out_val[2].y = 0.0;\n\n  out_val[3].x = a[3];\n  out_val[3].y = 0.0;\n}\n\nvoid vec4_scalar_mul_fp64(vec2 a[4], vec2 b, out vec2 out_val[4]) {\n  out_val[0] = mul_fp64(a[0], b);\n  out_val[1] = mul_fp64(a[1], b);\n  out_val[2] = mul_fp64(a[2], b);\n  out_val[3] = mul_fp64(a[3], b);\n}\n\nvoid vec4_sum_fp64(vec2 a[4], vec2 b[4], out vec2 out_val[4]) {\n  for (int i = 0; i < 4; i++) {\n    out_val[i] = sum_fp64(a[i], b[i]);\n  }\n}\n\nvoid vec4_dot_fp64(vec2 a[4], vec2 b[4], out vec2 out_val) {\n  vec2 v[4];\n\n  v[0] = mul_fp64(a[0], b[0]);\n  v[1] = mul_fp64(a[1], b[1]);\n  v[2] = mul_fp64(a[2], b[2]);\n  v[3] = mul_fp64(a[3], b[3]);\n\n  out_val = sum_fp64(sum_fp64(v[0], v[1]), sum_fp64(v[2], v[3]));\n}\n\nvoid mat4_vec4_mul_fp64(vec2 b[16], vec2 a[4], out vec2 out_val[4]) {\n  vec2 tmp[4];\n\n  for (int i = 0; i < 4; i++)\n  {\n    for (int j = 0; j < 4; j++)\n    {\n      tmp[j] = b[j + i * 4];\n    }\n    vec4_dot_fp64(a, tmp, out_val[i]);\n  }\n}\n";
	export default _default;

}
declare module 'luma.gl/shadertools/modules/fp64/fp64' {
	import { fp64ify, fp64LowPart, fp64ifyMatrix4 } from 'luma.gl/shadertools/modules/fp64/fp64-utils';
	export { fp64ify, fp64LowPart, fp64ifyMatrix4 }; const _default: {
		name: string;
		vs: string;
		fs: any;
		fp64ify: typeof fp64ify;
		fp64LowPart: typeof fp64LowPart;
		fp64ifyMatrix4: typeof fp64ifyMatrix4;
	};
	export default _default;
	export const fp64arithmetic: {
		name: string;
		vs: string;
		fs: any;
	};
	export const fp64fs: {
		name: string;
		vs: any;
		fs: string;
	};

}
declare module 'luma.gl/shadertools/modules/project/project' {
	function getUniforms(opts?: {
		modelMatrix: number[];
		viewMatrix: number[];
		projectionMatrix: number[];
		cameraPositionWorld: number[];
	}, prevUniforms?: {}): {}; const _default: {
		name: string;
		getUniforms: typeof getUniforms;
		vs: string;
		fs: string;
	};
	export default _default;

}
declare module 'luma.gl/shadertools/modules/lighting/lighting-common.glsl' {
	const _default: "  // empty\n";
	export default _default;

}
declare module 'luma.gl/shadertools/modules/lighting/lighting-vertex.glsl' {
	const _default: "#define LIGHT_MAX 4\n\n/*\n// lighting configuration\nuniform bool enableLights;\nuniform vec3 ambientColor;\nuniform vec3 directionalColor;\nuniform vec3 lightingDirection;\n\n// point lights configuration\nuniform vec3 pointLocation[LIGHT_MAX];\nuniform vec3 pointColor[LIGHT_MAX];\nuniform int numberPoints;\n\n// reflection / refraction configuration\nuniform bool useReflection;\n*/\n\nuniform bool lighting_uEnableLights;\nuniform vec3 lighting_uAmbientColor;\nuniform vec3 lighting_uDirection;\nuniform vec3 lighting_uDirectionalColor;\n\n// point lights configuration\nuniform int  lighting_uPointCount;\nuniform vec3 lighting_uPointLocation[LIGHT_MAX];\nuniform vec3 lighting_uPointColor[LIGHT_MAX];\n\n// reflection / refraction configuration\nuniform bool lighting_uEnableReflections;\n\n// varyings\nvarying vec4 lighting_vPosition;\nvarying vec4 lighting_vNormal;\nvarying vec3 lighting_vColor;\nvarying vec3 lighting_vLightWeighting;\nvarying vec3 lighting_vReflection;\n\nvoid lighting_setPositionAndNormal(vec3 position, vec3 normal) {\n  lighting_vPosition = worldMatrix * vec4(position, 1.);\n  lighting_vNormal = worldInverseTransposeMatrix * vec4(normal, 1.);;\n}\n\nvoid lighting__getLightWeigting() {\n  float directionalLightWeighting = max(dot(lighting_vNormal.xyz, lighting_uDirection), 0.);\n  vec3 pointWeight = vec3(0., 0., 0.);\n  for (int i = 0; i < LIGHT_MAX; i++) {\n    if (i < numberPoints) {\n      vec4 mvLightPosition = viewMatrix * vec4(lighting_uPointLocation[i], 1.);\n      vec3 pointLightDirection = normalize(mvLightPosition.xyz - lighting_vPosition.xyz);\n      pointWeight += max(dot(lighting_vNormal.xyz, pointLightDirection), 0.) * pointColor[i];\n     } else {\n       break;\n     }\n   }\n   return ambientColor + (directionalColor * directionalLightWeighting) + pointWeight;\n}\n\nvoid lighting_apply(vec3 position, vec3 normal) {\n  lighting_setPositionAndNormal(position, normal);\n\n  // lighting code\n  if(!lighting_uEnableLights) {\n    lighting_vLightWeighting = vec3(1., 1., 1.);\n  } else {\n    lighting_vLightWeighting = lighting__getLightWeighting();\n  }\n}\n\nvoid lighting_set_reflection(vec3 position) {\n    // refraction / reflection code\n  if (lighting_uEnableReflections) {\n    lighting_vReflection = (viewInverseMatrix[3] - (worldMatrix * vec4(position, 1.))).xyz;\n  } else {\n    lighting_vReflection = vec3(1., 1., 1.);\n  }\n}\n";
	export default _default;

}
declare module 'luma.gl/shadertools/modules/lighting/lighting-fragment.glsl' {
	const _default: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define LIGHT_MAX 4\n\nvarying vec3 lighting_vLightWeighting;\n\nvec4 lighting_apply(vec4 color) {\n  // set color from texture\n  return vec4(color.rgb * lighting_vLightWeighting, color.a);\n}\n\n// spec-map.fs\n\nuniform mat4 viewMatrix;\n\n\nvarying vec4 lighting_vColor;\nvarying vec4 lighting_vTransformedNormal;\nvarying vec4 lighting_vPosition;\n\nuniform float shininess;\nuniform bool enableSpecularMap;\nuniform bool enableLights;\n\nuniform vec3 ambientColor;\nuniform vec3 directionalColor;\nuniform vec3 lightingDirection;\n\nuniform vec3 lighting_uPointLocation[LIGHT_MAX];\nuniform vec3 lighting_uPointColor[LIGHT_MAX];\nuniform float lighting_uPointSpecularEnable[LIGHT_MAX];\nuniform vec3 lighting_uPointSpecularColor[LIGHT_MAX];\nuniform int numberPoints;\n\n\nvec3 lighting__calculate_light_weighting() {\n\treturn lighting__calculate_light_weighting(shininess);\n}\n\nvec3 lighting__calculate_light_weighting(shininess) {\n  vec3 normal = vTransformedNormal.xyz;\n  vec3 eyeDirection = normalize(-vPosition.xyz);\n\n  vec3 specularLight = vec3(0., 0., 0.);\n  vec3 diffuseLight = vec3(0., 0., 0.);\n\n  for (int i = 0; i < LIGHT_MAX; i++) {\n    if (i < numberPoints) {\n      vec3 transformedPointLocation = (viewMatrix * vec4(lighting_uPointLocation[i], 1.0)).xyz;\n      vec3 lightDirection = normalize(transformedPointLocation - vPosition.xyz);\n\n      if (lighting_uPointSpecularEnable > 0.) {\n        vec3 reflectionDirection = reflect(-lightDirection, normal);\n        float specularLightWeighting =\n          pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininessVal);\n        specularLight += specularLightWeighting * lighting_uPointSpecularColor[i];\n      }\n\n      float diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);\n      diffuseLight += diffuseLightWeighting * lighting_uPointColor[i];\n    } else {\n      break;\n    }\n  }\n\n  return ambientColor + diffuseLight + specularLight;\n}\n\nvoid lighting_filterColor(fragmentColor) {\n  if (!lighting_enable) {\n  \treturn fragmentColor;\n  } else {\n  \tvec3 lightWeighting = lighting__calculate_light_weighting();\n  \treturn vec4(fragmentColor.rgb * lightWeighting, fragmentColor.a);\n  }\n}\n\n// render-tex.fs\n\nuniform vec3 material_uAmbientColor;\nuniform vec3 material_uDiffuseColor;\nuniform vec3 material_uSpecularColor;\nuniform vec3 material_uEmissiveColor;\n\nuniform bool hasTexture1;\nuniform sampler2D sampler1;\n\nuniform mat4 viewMatrix;\n\nvoid apply_lighting(color) {\n  vec3 ambientLightWeighting = ambientColor;\n\n  vec3 normal = vTransformedNormal.xyz;\n  vec3 eyeDirection = normalize(-vPosition.xyz);\n\n  vec3 specularLight = vec3(0.0, 0.0, 0.0);\n  vec3 diffuseLight = vec3(0.0, 0.0, 0.0);\n\n  for (int i = 0; i < LIGHT_MAX; i++) {\n    if (i < numberPoints) {\n      vec3 transformedPointLocation = (viewMatrix * vec4(pointLocation[i], 1.0)).xyz;\n      vec3 lightDirection = normalize(transformedPointLocation - vPosition.xyz);\n\n      if (enableSpecularHighlights) {\n        vec3 reflectionDirection = reflect(-lightDirection, normal);\n        float specularLightWeighting =\n          pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n        specularLight += specularLightWeighting * pointSpecularColor[i];\n      }\n\n      float diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);\n      diffuseLight += diffuseLightWeighting * pointColor[i];\n    } else {\n        break;\n    }\n  }\n\n  vec3 matAmbientColor = material_uAmbientColor * color.rgb;\n  vec3 matDiffuseColor = material_uDiffuseColor * color.rgb;\n  vec3 matSpecularColor = material_uSpecularColor * color.rgb;\n  vec3 matEmissiveColor = material_uEmissiveColor * color.rgb;\n  gl_FragColor = vec4(\n    matAmbientColor * ambientLightWeighting\n    + matDiffuseColor * diffuseLightWeighting\n    + matSpecularColor * specularLightWeighting\n    + matEmissiveColor,\n    color.a\n  );\n}\n\n/// frag-lighting\n\n  vec3 lightWeighting;\n  if (!enableLights) {\n    lightWeighting = vec3(1.0, 1.0, 1.0);\n  } else {\n    vec3 lightDirection;\n    float specularLightWeighting = 0.0;\n    float diffuseLightWeighting = 0.0;\n    vec3  specularLight = vec3(0.0, 0.0, 0.0);\n    vec3  diffuseLight = vec3(0.0, 0.0, 0.0);\n\n    vec3 transformedPointLocation;\n    vec3 normal = vTransformedNormal.xyz;\n\n    vec3 eyeDirection = normalize(-vPosition.xyz);\n    vec3 reflectionDirection;\n\n    vec3 pointWeight = vec3(0.0, 0.0, 0.0);\n\n    for (int i = 0; i < LIGHT_MAX; i++) {\n      if (i < numberPoints) {\n        transformedPointLocation = (viewMatrix * vec4(pointLocation[i], 1.0)).xyz;\n        lightDirection = normalize(transformedPointLocation - vPosition.xyz);\n\n        if (enableSpecular[i] > 0.0) {\n          reflectionDirection = reflect(-lightDirection, normal);\n          specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n          specularLight += specularLightWeighting * pointSpecularColor[i];\n        }\n\n        diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);\n        diffuseLight += diffuseLightWeighting * pointColor[i];\n      } else {\n        break;\n      }\n    }\n\n    lightWeighting = ambientColor + diffuseLight + specularLight;\n  }\n\n// reflection / refraction configs\nuniform float reflection;\nuniform float refraction;\n\n///\n  // has cube texture then apply reflection\n  // if (hasTextureCube1) {\n  //   vec3 nReflection = normalize(vReflection);\n  //   vec3 reflectionValue;\n  //   if (refraction > 0.0) {\n  //    reflectionValue = refract(nReflection, vNormal.xyz, refraction);\n  //   } else {\n  //    reflectionValue = -reflect(nReflection, vNormal.xyz);\n  //   }\n\n  //   // TODO(nico): check whether this is right.\n  //   vec4 cubeColor = textureCube(samplerCube1,\n  //       vec3(-reflectionValue.x, -reflectionValue.y, reflectionValue.z));\n  //   gl_FragColor = vec4(mix(gl_FragColor.xyz, cubeColor.xyz, reflection), 1.0);\n  // }\n";
	export default _default;

}
declare module 'luma.gl/shadertools/modules/lighting/lighting' {
	export const vertexShader: string;
	export const fragmentShader: string;
	export const name = "lighting";
	export const config: {
		MAX_POINT_LIGHTS: number;
	};
	export function getUniforms({ lightingEnable, lightingAmbientColor, lightingDirection, lightingDirectionalColor, lightingPointLights }: {
		lightingEnable?: boolean;
		lightingAmbientColor?: number[];
		lightingDirection?: number[];
		lightingDirectionalColor?: number[];
		lightingPointLights?: any[];
	}): any; const _default: {
		name: string;
		vs: string;
		fs: string;
		getUniforms: typeof getUniforms;
	};
	export default _default;

}
declare module 'luma.gl/shadertools/modules/dirlight/dirlight' {
	function getUniforms(opts?: {
		lightDirection: Float32Array;
	}): {}; const _default: {
		name: string;
		vs: any;
		fs: string;
		getUniforms: typeof getUniforms;
		dependencies: {
			name: string;
			getUniforms: (opts?: {
				modelMatrix: number[];
				viewMatrix: number[];
				projectionMatrix: number[];
				cameraPositionWorld: number[];
			}, prevUniforms?: {}) => {};
			vs: string;
			fs: string;
		}[];
	};
	export default _default;

}
declare module 'luma.gl/shadertools/modules/picking/picking' {
	function getUniforms(opts?: {
		pickingSelectedColor: any;
		pickingHighlightColor: Uint8Array;
		pickingThreshold: number;
		pickingActive: boolean;
	}): {}; const _default: {
		name: string;
		vs: string;
		fs: string;
		getUniforms: typeof getUniforms;
	};
	export default _default;

}
declare module 'luma.gl/shadertools/modules/diffuse/diffuse' {
	function getUniforms(opts?: {
		diffuseTexture: any;
		diffuseColor: number[];
	}): {}; const _default: {
		name: string;
		getUniforms: typeof getUniforms;
		vs: string;
		fs: string;
	};
	export default _default;

}
declare module 'luma.gl/core/experimental/transform' {
	export default class Transform {
		static isSupported(gl: WebGLRenderingContext): boolean;
		constructor(gl: WebGLRenderingContext, opts?: {});
		delete(): void;
		readonly elementCount: any;
		initialize({ sourceBuffers, destinationBuffers, vs, sourceDestinationMap, varyings, drawMode, elementCount }: {
			sourceBuffers?: any;
			destinationBuffers?: any;
			vs?: any;
			sourceDestinationMap?: any;
			varyings?: any;
			drawMode?: number;
			elementCount?: any;
		}): void;
		update({ sourceBuffers, destinationBuffers, elementCount }: {
			sourceBuffers?: any;
			destinationBuffers?: any;
			elementCount?: any;
		}): this;
		run({ uniforms }?: {
			uniforms?: {};
		}): void;
		swapBuffers(): void;
		getBuffer(varyingName?: any): any;
		_bindBuffers({ sourceBuffers, destinationBuffers }: {
			sourceBuffers?: any;
			destinationBuffers?: any;
		}): void;
		_buildModel({ vs, drawMode, elementCount }: {
			vs: any;
			drawMode: any;
			elementCount: any;
		}): void;
	}

}
declare module 'luma.gl/deprecated/gl-constants' {
	import GL from 'luma.gl/constants';
	export { GL };
	export default GL;
	export function glGet(name: any): any;
	export function glKey(value: any): string;
	export function glKeyType(value: any): string;

}
declare module 'luma.gl' {
	export { isWebGL, isWebGL2 } from 'luma.gl/webgl-utils/webgl-checks';
	export { getKeyValue, getKey } from 'luma.gl/webgl-utils/constants-to-keys';
	export { createGLContext, destroyGLContext, resizeGLContext, pollGLContext, setContextDefaults } from 'luma.gl/webgl-context/context';
	export { trackContextCreation, trackContextState } from 'luma.gl/webgl-context';
	export { resetParameters, getParameter, getParameters, setParameter, setParameters, withParameters, getModifiedParameters } from 'luma.gl/webgl-context/context-state';
	export { getContextInfo, getGLContextInfo, getContextLimits, glGetDebugInfo } from 'luma.gl/webgl-context/context-limits';
	export { FEATURES, hasFeature, hasFeatures, getFeatures, canCompileGLGSExtension } from 'luma.gl/webgl-context/context-features';
	export { makeDebugContext } from 'luma.gl/webgl-context/debug-context';
	import Attribute from 'luma.gl/webgl/attribute';
	export { default as Buffer } from 'luma.gl/webgl/buffer';
	export { Shader, VertexShader, FragmentShader } from 'luma.gl/webgl/shader';
	export { default as Program } from 'luma.gl/webgl/program';
	export { default as Framebuffer } from 'luma.gl/webgl/framebuffer';
	export { default as Renderbuffer } from 'luma.gl/webgl/renderbuffer';
	export { default as Texture2D } from 'luma.gl/webgl/texture-2d';
	export { default as TextureCube } from 'luma.gl/webgl/texture-cube';
	export { draw } from 'luma.gl/webgl/draw';
	export { clear, clearBuffer } from 'luma.gl/webgl/clear';
	export { default as FenceSync } from 'luma.gl/webgl/fence-sync';
	export { default as Query } from 'luma.gl/webgl/query';
	export { default as Sampler } from 'luma.gl/webgl/sampler';
	export { default as Texture3D } from 'luma.gl/webgl/texture-3d';
	export { default as Texture2DArray } from 'luma.gl/webgl/texture-2d-array';
	export { default as TransformFeedback } from 'luma.gl/webgl/transform-feedback';
	export { default as VertexArray } from 'luma.gl/webgl/vertex-array';
	export { default as UniformBufferLayout } from 'luma.gl/webgl/uniform-buffer-layout';
	export { default as Model } from 'luma.gl/core/model';
	export { default as AnimationLoop } from 'luma.gl/core/animation-loop';
	export { default as AnimationLoopProxy } from 'luma.gl/core/animation-loop-proxy';
	export { default as pickModels } from 'luma.gl/core/pick-models';
	export { encodePickingColor, decodePickingColor, getNullPickingColor } from 'luma.gl/core/picking-colors';
	export { addEvents } from 'luma.gl/packages/events';
	export { default as Geometry } from 'luma.gl/geometry/geometry';
	export { default as ConeGeometry } from 'luma.gl/geometry/cone-geometry';
	export { default as CubeGeometry } from 'luma.gl/geometry/cube-geometry';
	export { default as CylinderGeometry } from 'luma.gl/geometry/cylinder-geometry';
	export { default as IcoSphereGeometry } from 'luma.gl/geometry/ico-sphere-geometry';
	export { default as PlaneGeometry } from 'luma.gl/geometry/plane-geometry';
	export { default as SphereGeometry } from 'luma.gl/geometry/sphere-geometry';
	export { default as TruncatedConeGeometry } from 'luma.gl/geometry/truncated-cone-geometry';
	export { default as Cone } from 'luma.gl/models/cone';
	export { default as Cube } from 'luma.gl/models/cube';
	export { default as Cylinder } from 'luma.gl/models/cylinder';
	export { default as IcoSphere } from 'luma.gl/models/ico-sphere';
	export { default as Plane } from 'luma.gl/models/plane';
	export { default as Sphere } from 'luma.gl/models/sphere';
	export { default as TruncatedCone } from 'luma.gl/models/truncated-cone';
	export { default as ClipSpaceQuad } from 'luma.gl/models/clip-space-quad';
	export { setPathPrefix, loadFile, loadImage, loadFiles, loadImages, loadTextures, loadProgram, loadModel, parseModel } from 'luma.gl/io';
	export { default as ShaderCache } from 'luma.gl/shadertools/lib/shader-cache';
	export { assembleShaders } from 'luma.gl/shadertools/lib/assemble-shaders';
	export { registerShaderModules, setDefaultShaderModules } from 'luma.gl/shadertools/lib/shader-modules';
	export { default as fp32 } from 'luma.gl/shadertools/modules/fp32/fp32';
	export { default as fp64 } from 'luma.gl/shadertools/modules/fp64/fp64';
	export { default as project } from 'luma.gl/shadertools/modules/project/project';
	export { default as lighting } from 'luma.gl/shadertools/modules/lighting/lighting';
	export { default as dirlight } from 'luma.gl/shadertools/modules/dirlight/dirlight';
	export { default as picking } from 'luma.gl/shadertools/modules/picking/picking';
	export { default as diffuse } from 'luma.gl/shadertools/modules/diffuse/diffuse';
	import { clearBuffer } from 'luma.gl/webgl/clear';
	import { default as Transform } from 'luma.gl/core/experimental/transform';
	export const experimental: {
		clearBuffer: typeof clearBuffer;
		Transform: typeof Transform;
		Attribute: typeof Attribute;
	};
	export { // Should be optional import for application
		default as GL
	} from 'luma.gl/constants';
	export { // Should be optional import for application
		glGet, glKey
	} from 'luma.gl/deprecated/gl-constants';
	export { destroyGLContext as deleteGLContext, pollGLContext as pollContext } from 'luma.gl/webgl-context/context';
	export { radians, degrees, Vector2, Vector3, Vector4, Matrix4, Quaternion } from 'math.gl';
	export { readPixels } from 'luma.gl/webgl/functions';
	export { default as FramebufferObject } from 'luma.gl/webgl/framebuffer';

}
declare module 'luma.gl/webgl-debug/debug-parameters' {
	export const GLenum = "GLenum";
	export const GLfloat = "GLfloat";
	export const GLint = "GLint";
	export const GLuint = "GLint";
	export const GLboolean = "GLboolean";
	export const BUFFER_PARAMETERS: {
		[x: number]: {
			webgl1: number;
		};
	};
	export const FENCE_SYNC_PARAMETERS: number[];
	export const FRAMEBUFFER_ATTACHMENT_PARAMETERS: number[];
	export const FRAMEBUFFER_STATUS: {
		[x: number]: string;
	};
	export const PROGRAM_PARAMETERS: {
		[x: number]: {
			webgl1: number;
			webgl2?: undefined;
		} | {
			webgl2: number;
			webgl1?: undefined;
		};
	};
	export const RENDERBUFFER_PARAMETERS: {
		[x: number]: {
			webgl1: number;
			type?: undefined;
			webgl2?: undefined;
		} | {
			type: string;
			webgl1: number;
			webgl2?: undefined;
		} | {
			webgl2: number;
			webgl1?: undefined;
			type?: undefined;
		};
	};
	export const SAMPLER_PARAMETERS: {
		[x: number]: {
			webgl2: boolean;
		};
	};
	export const TEXTURE_PARAMETERS: {
		[x: number]: {
			type: string;
			webgl1: number;
			webgl2?: undefined;
		} | {
			type: string;
			webgl2: number;
			webgl1?: undefined;
		} | {
			webgl2: number;
			type?: undefined;
			webgl1?: undefined;
		} | {
			webgl1: number;
			type?: undefined;
			webgl2?: undefined;
		};
	};
	export function installParameterDefinitions(): void;

}
declare module 'luma.gl/debug' {
	export { };

}
declare module 'luma.gl/deprecated/headless' {
	export { };

}
declare module 'luma.gl/deprecated/shaderlib/frag-lighting.fs.glsl' {
	const _default: "#define SHADER_NAME luma-frag-lighting-fs\n\n#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define LIGHT_MAX 4\n\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying vec2 vTexCoord3;\nvarying vec4 vColor;\nvarying vec4 vTransformedNormal;\nvarying vec4 vPosition;\n\nuniform float shininess;\nuniform bool enableSpecularHighlights;\nuniform bool enableLights;\n\nuniform vec3 ambientColor;\nuniform vec3 directionalColor;\nuniform vec3 lightingDirection;\n\nuniform vec3 pointLocation[LIGHT_MAX];\nuniform vec3 pointColor[LIGHT_MAX];\nuniform vec3 pointSpecularColor[LIGHT_MAX];\nuniform float enableSpecular[LIGHT_MAX];\nuniform int numberPoints;\n\nuniform bool hasTexture1;\nuniform sampler2D sampler1;\n\nuniform bool hasTexture2;\nuniform sampler2D sampler2;\n\nuniform bool hasTexture3;\nuniform sampler2D sampler3;\n\nuniform mat4 viewMatrix;\n\nvoid main(void) {\n  vec3 lightWeighting;\n  if (!enableLights) {\n    lightWeighting = vec3(1.0, 1.0, 1.0);\n  } else {\n    vec3 lightDirection;\n    float specularLightWeighting = 0.0;\n    float diffuseLightWeighting = 0.0;\n    vec3  specularLight = vec3(0.0, 0.0, 0.0);\n    vec3  diffuseLight = vec3(0.0, 0.0, 0.0);\n\n    vec3 transformedPointLocation;\n    vec3 normal = vTransformedNormal.xyz;\n\n    vec3 eyeDirection = normalize(-vPosition.xyz);\n    vec3 reflectionDirection;\n\n    vec3 pointWeight = vec3(0.0, 0.0, 0.0);\n\n    for (int i = 0; i < LIGHT_MAX; i++) {\n      if (i < numberPoints) {\n        transformedPointLocation = (viewMatrix * vec4(pointLocation[i], 1.0)).xyz;\n        lightDirection = normalize(transformedPointLocation - vPosition.xyz);\n\n        if (enableSpecular[i] > 0.0) {\n          reflectionDirection = reflect(-lightDirection, normal);\n          specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n          specularLight += specularLightWeighting * pointSpecularColor[i];\n        }\n\n        diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);\n        diffuseLight += diffuseLightWeighting * pointColor[i];\n      } else {\n        break;\n      }\n    }\n\n    lightWeighting = ambientColor + diffuseLight + specularLight;\n  }\n\n  vec4 fragmentColor = vec4(0.0, 0.0, 0.0, 0.0);\n  if (hasTexture1 || hasTexture2 || hasTexture3) {\n    if (hasTexture1) {\n      fragmentColor += texture2D(sampler1, vec2(vTexCoord1.s, vTexCoord1.t));\n    }\n    if (hasTexture2) {\n      fragmentColor += texture2D(sampler2, vec2(vTexCoord2.s, vTexCoord2.t));\n    }\n    if (hasTexture3) {\n      fragmentColor += texture2D(sampler3, vec2(vTexCoord3.s, vTexCoord3.t));\n    }\n  } else {\n    fragmentColor = vColor;\n  }\n  gl_FragColor = vec4(fragmentColor.rgb * lightWeighting, fragmentColor.a);\n}\n";
	export default _default;

}
declare module 'luma.gl/deprecated/shaderlib/frag-lighting.vs.glsl' {
	const _default: "#define SHADER_NAME luma-frag-lighting-fs\n\nattribute vec3 positions;\nattribute vec3 normals;\nattribute vec2 texCoord1;\nattribute vec2 texCoord2;\nattribute vec2 texCoord3;\nattribute vec4 color;\n\nuniform mat4 worldMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldInverseTransposeMatrix;\n\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying vec2 vTexCoord3;\nvarying vec4 vTransformedNormal;\nvarying vec4 vPosition;\nvarying vec4 vColor;\n\n\nvoid main(void) {\n  vPosition = worldMatrix * vec4(positions, 1.0);\n  vTransformedNormal = worldInverseTransposeMatrix * vec4(normals, 1.0);\n  vTexCoord1 = texCoord1;\n  vTexCoord2 = texCoord2;\n  vTexCoord3 = texCoord3;\n  vColor = color;\n  gl_Position = projectionMatrix * vPosition;\n}\n";
	export default _default;

}
declare module 'luma.gl/deprecated/shaderlib/render-tex.fs.glsl' {
	const _default: "#define SHADER_NAME luma-render-tex-fs\n\n#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define LIGHT_MAX 4\n\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying vec2 vTexCoord3;\nvarying vec4 vColor;\nvarying vec4 vTransformedNormal;\nvarying vec4 vPosition;\n\nuniform float shininess;\nuniform bool enableSpecularHighlights;\n\nuniform vec3 ambientColor;\nuniform vec3 directionalColor;\nuniform vec3 lightingDirection;\n\nuniform vec3 pointLocation[LIGHT_MAX];\nuniform vec3 pointColor[LIGHT_MAX];\nuniform vec3 pointSpecularColor[LIGHT_MAX];\nuniform int numberPoints;\n\nuniform vec3 materialAmbientColor;\nuniform vec3 materialDiffuseColor;\nuniform vec3 materialSpecularColor;\nuniform vec3 materialEmissiveColor;\n\nuniform bool hasTexture1;\nuniform sampler2D sampler1;\n\nuniform mat4 viewMatrix;\n\nvoid main(void) {\n  vec3 ambientLightWeighting = ambientColor;\n\n  vec3 lightDirection;\n  float specularLightWeighting = 0.0;\n  float diffuseLightWeighting = 0.0;\n  vec3  specularLight = vec3(0.0, 0.0, 0.0);\n  vec3  diffuseLight = vec3(0.0, 0.0, 0.0);\n\n  vec3 transformedPointLocation;\n  vec3 normal = vTransformedNormal.xyz;\n\n  vec3 eyeDirection = normalize(-vPosition.xyz);\n  vec3 reflectionDirection;\n\n  for (int i = 0; i < LIGHT_MAX; i++) {\n    if (i < numberPoints) {\n      transformedPointLocation = (viewMatrix * vec4(pointLocation[i], 1.0)).xyz;\n      lightDirection = normalize(transformedPointLocation - vPosition.xyz);\n\n      if (enableSpecularHighlights) {\n        reflectionDirection = reflect(-lightDirection, normal);\n        specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n        specularLight += specularLightWeighting * pointSpecularColor[i];\n      }\n\n      diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);\n      diffuseLight += diffuseLightWeighting * pointColor[i];\n    } else {\n        break;\n    }\n  }\n\n  vec3 matAmbientColor = materialAmbientColor;\n  vec3 matDiffuseColor = materialDiffuseColor;\n  vec3 matSpecularColor = materialSpecularColor;\n  vec3 matEmissiveColor = materialEmissiveColor;\n  float alpha = 1.0;\n  if (hasTexture1) {\n    vec4 textureColor = texture2D(sampler1, vec2(vTexCoord1.s, vTexCoord1.t));\n    matAmbientColor = matAmbientColor * textureColor.rgb;\n    matDiffuseColor = matDiffuseColor * textureColor.rgb;\n    matEmissiveColor = matEmissiveColor * textureColor.rgb;\n    alpha = textureColor.a;\n  }\n  gl_FragColor = vec4(\n    matAmbientColor * ambientLightWeighting\n    + matDiffuseColor * diffuseLightWeighting\n    + matSpecularColor * specularLightWeighting\n    + matEmissiveColor,\n    alpha\n  );\n}\n";
	export default _default;

}
declare module 'luma.gl/deprecated/shaderlib/render-tex.vs.glsl' {
	const _default: "#define SHADER_NAME luma-frag-lighting-vs\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 texCoord1;\nattribute vec2 texCoord2;\nattribute vec2 texCoord3;\nattribute vec4 color;\n\nuniform mat4 worldMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldInverseTransposeMatrix;\n\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying vec2 vTexCoord3;\nvarying vec4 vTransformedNormal;\nvarying vec4 vPosition;\nvarying vec4 vColor;\n\n\nvoid main(void) {\n  vPosition = worldMatrix * vec4(position, 1.0);\n  vTransformedNormal = worldInverseTransposeMatrix * vec4(normal, 1.0);\n  vTexCoord1 = texCoord1;\n  vTexCoord2 = texCoord2;\n  vTexCoord3 = texCoord3;\n  vColor = color;\n  gl_Position = projectionMatrix * vPosition;\n}\n";
	export default _default;

}
declare module 'luma.gl/deprecated/shaderlib/spec-map.fs.glsl' {
	const _default: "#define SHADER_NAME spec-map-fs\n\n#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define LIGHT_MAX 4\n\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying vec2 vTexCoord3;\nvarying vec4 vColor;\nvarying vec4 vTransformedNormal;\nvarying vec4 vPosition;\n\nuniform float shininess;\nuniform bool enableSpecularMap;\nuniform bool enableColorMap;\nuniform bool enableLights;\n\nuniform vec3 ambientColor;\nuniform vec3 directionalColor;\nuniform vec3 lightingDirection;\n\nuniform vec3 pointLocation[LIGHT_MAX];\nuniform vec3 pointColor[LIGHT_MAX];\nuniform vec3 pointSpecularColor[LIGHT_MAX];\nuniform float enableSpecular[LIGHT_MAX];\nuniform int numberPoints;\n\nuniform bool hasTexture1;\nuniform sampler2D sampler1;\n\nuniform bool hasTexture2;\nuniform sampler2D sampler2;\n\nuniform bool hasTexture3;\nuniform sampler2D sampler3;\n\nuniform mat4 viewMatrix;\n\nvoid main(void) {\n  vec3 lightWeighting;\n  if (!enableLights) {\n    lightWeighting = vec3(1.0, 1.0, 1.0);\n  } else {\n    vec3 lightDirection;\n    float specularLightWeighting = 0.0;\n    float diffuseLightWeighting = 0.0;\n    vec3  specularLight = vec3(0.0, 0.0, 0.0);\n    vec3  diffuseLight = vec3(0.0, 0.0, 0.0);\n\n    vec3 transformedPointLocation;\n    vec3 normal = vTransformedNormal.xyz;\n\n    vec3 eyeDirection = normalize(-vPosition.xyz);\n    vec3 reflectionDirection;\n\n    float shininessVal = shininess;\n    if (enableSpecularMap) {\n      shininessVal = texture2D(sampler2, vec2(vTexCoord1.s, vTexCoord1.t)).r * 255.0;\n    }\n\n    if (shininessVal > 255.0) {\n      shininessVal = shininess;\n    }\n\n    for (int i = 0; i < LIGHT_MAX; i++) {\n      if (i < numberPoints) {\n        transformedPointLocation = (viewMatrix * vec4(pointLocation[i], 1.0)).xyz;\n        lightDirection = normalize(transformedPointLocation - vPosition.xyz);\n\n        if (enableSpecular[i] > 0.0) {\n          reflectionDirection = reflect(-lightDirection, normal);\n          specularLightWeighting =\n            pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininessVal);\n          specularLight += specularLightWeighting * pointSpecularColor[i];\n        }\n\n        diffuseLightWeighting = max(dot(normal, lightDirection), 0.0);\n        diffuseLight += diffuseLightWeighting * pointColor[i];\n      } else {\n        break;\n      }\n    }\n\n    lightWeighting = ambientColor + diffuseLight + specularLight;\n  }\n\n  vec4 fragmentColor = vec4(0.0, 0.0, 0.0, 0.0);\n  if (enableColorMap) {\n    fragmentColor += texture2D(sampler1, vec2(vTexCoord1.s, vTexCoord1.t));\n  } else {\n    fragmentColor = vColor;\n  }\n  gl_FragColor = vec4(fragmentColor.rgb * lightWeighting, fragmentColor.a);\n}\n";
	export default _default;

}
declare module 'luma.gl/deprecated/shaderlib/spec-map.vs.glsl' {
	const _default: "#define SHADER_NAME spec-map-vs\n\nattribute vec3 positions;\nattribute vec3 normals;\nattribute vec2 texCoords;\nattribute vec2 texCoord2;\nattribute vec2 texCoord3;\nattribute vec4 colors;\n\nuniform mat4 worldMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldInverseTransposeMatrix;\n\nvarying vec2 vTexCoord1;\nvarying vec2 vTexCoord2;\nvarying vec2 vTexCoord3;\nvarying vec4 vTransformedNormal;\nvarying vec4 vPosition;\nvarying vec4 vColor;\n\nvoid main(void) {\n  vPosition = worldMatrix * vec4(positions, 1.0);\n  vTransformedNormal = worldInverseTransposeMatrix * vec4(normals, 1.0);\n  vTexCoord1 = texCoords;\n  vTexCoord2 = texCoord2;\n  vTexCoord3 = texCoord3;\n  vColor = colors;\n  gl_Position = projectionMatrix * vPosition;\n}\n";
	export default _default;

}
declare module 'luma.gl/io/node' {
	export function loadFile(opts: any): void;
	export function loadImage(url: any): void;

}
declare module 'luma.gl/models' {
	export { default as Cone } from 'luma.gl/models/cone';
	export { default as Cube } from 'luma.gl/models/cube';
	export { default as Cylinder } from 'luma.gl/models/cylinder';
	export { default as IcoSphere } from 'luma.gl/models/ico-sphere';
	export { default as Plane } from 'luma.gl/models/plane';
	export { default as Sphere } from 'luma.gl/models/sphere';
	export { default as TruncatedCone } from 'luma.gl/models/truncated-cone';
	export { default as ClipSpaceQuad } from 'luma.gl/models/clip-space-quad';

}
declare module 'luma.gl/shadertools/modules/fog' {
	export const name = "fog";
	export function getUniforms({ fogEnable, fogColor, fogNear, fogFar }?: {
		fogEnable?: boolean;
		fogColor?: number[];
		fogNear?: number;
		fogFar?: number;
	}): {
			fog_uEnable: boolean;
			fog_uColor: number[];
			fog_uNear: number;
			fog_uFar: number;
		};
	export const vs = "";
	export const fs = "// fog configuration\nuniform bool fog_uEnable;\nuniform vec3 fog_uColor;\nuniform float fog_uNear;\nuniform float fog_uFar;\n\n/*\n * Applies linear fog to a color\n * param - unfogged color\n * return - fogged color\n */\nvec4 fog_filterColor(vec4 color) {\n  if (fog_uEnable) {\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = smoothstep(fog_uNear, fog_uFar, depth);\n    return mix(color, vec4(fog_uColor, gl_FragColor.w), fogFactor);\n  } else {\n    return color;\n  }\n}\n\n// Other fog shaders, exponential etc, see\n// http://in2gpu.com/2014/07/22/create-fog-shader/\n";

}
declare module 'luma.gl/shadertools/test/gpu-test-utils' {
	export function initializeGL(canvas: any): any;
	export function initializeTexTarget(gl: WebGLRenderingContext): void;
	export function render(gl: WebGLRenderingContext): void;
	export function getGPUOutput(gl: WebGLRenderingContext): Float32Array;

}
declare module 'luma.gl/shadertools/modules/fp64/fp64-test-utils' {
	export function getRelativeError64(result: any, reference: any): number;
	export function getRelativeError(result: any, reference: any): number;
	export function testcase(gl: WebGLRenderingContext, { glslFunc, binary, op, limit, t }: {
		glslFunc: any;
		binary: any;
		op: any;
		limit?: number;
		t: any;
	}): void;
	export const gl: WebGLRenderingContext;

}
declare module 'luma.gl/shadertools/modules/fp64/fp64-arithmetic.spec' {
	export { };

}
declare module 'luma.gl/shadertools/modules/fp64/test-deprecated/fp64-shader.spec' {
	import 'luma.gl/babel-polyfill';

}
declare module 'luma.gl/shadertools/modules/geometry/geometry' {
	function getUniforms(opts?: {}): {}; const _default: {
		name: string;
		vs: string;
		fs: string;
		getUniforms: typeof getUniforms;
	};
	export default _default;

}
declare module 'luma.gl/shadertools/shaders/default-fragment.glsl' {
	const _default: "#ifdef GL_ES\nprecision highp float;\n#endif\n\n#define SHADER_NAME luma-default-fs\n\nvarying vec4 vColor;\nvarying vec2 vTexCoord;\nvarying vec3 lightWeighting;\n\nuniform bool hasTexture1;\nuniform sampler2D sampler1;\n\nuniform bool enablePicking;\nuniform vec3 pickColor;\n\nuniform bool hasFog;\nuniform vec3 fogColor;\n\nuniform float fogNear;\nuniform float fogFar;\n\nvoid main() {\n  if(!hasTexture1) {\n    gl_FragColor = vec4(vColor.rgb * lightWeighting, vColor.a);\n  } else {\n    gl_FragColor =\n      vec4(texture2D(sampler1, vec2(vTexCoord.s, vTexCoord.t)).rgb * lightWeighting, 1.0);\n  }\n\n  if (enablePicking) {\n    gl_FragColor = vec4(pickColor, 1.0);\n  }\n\n  /* handle fog */\n  if (hasFog) {\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = smoothstep(fogNear, fogFar, depth);\n    gl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w), fogFactor);\n  }\n}\n";
	export default _default;

}
declare module 'luma.gl/shadertools/shaders/default-vertex.glsl' {
	const _default: "#define SHADER_NAME luma-default-vs\n\n#define LIGHT_MAX 4\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\nattribute vec2 texCoord1;\n\nuniform mat4 worldMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 worldInverseTransposeMatrix;\n\nuniform bool enableLights;\nuniform vec3 ambientColor;\nuniform vec3 directionalColor;\nuniform vec3 lightingDirection;\n\nuniform vec3 pointLocation[LIGHT_MAX];\nuniform vec3 pointColor[LIGHT_MAX];\nuniform int numberPoints;\n\nvarying vec4 vColor;\nvarying vec2 vTexCoord;\nvarying vec3 lightWeighting;\n\nvoid main(void) {\n  vec4 mvPosition = worldMatrix * vec4(position, 1.0);\n\n  if(!enableLights) {\n    lightWeighting = vec3(1.0, 1.0, 1.0);\n  } else {\n    vec3 plightDirection;\n    vec3 pointWeight = vec3(0.0, 0.0, 0.0);\n    vec4 transformedNormal = worldInverseTransposeMatrix * vec4(normal, 1.0);\n    float directionalLightWeighting = max(dot(transformedNormal.xyz, lightingDirection), 0.0);\n    for (int i = 0; i < LIGHT_MAX; i++) {\n      if (i < numberPoints) {\n        plightDirection =\n          normalize((viewMatrix * vec4(pointLocation[i], 1.0)).xyz - mvPosition.xyz);\n        pointWeight += max(dot(transformedNormal.xyz, plightDirection), 0.0) * pointColor[i];\n      } else {\n        break;\n      }\n    }\n\n    lightWeighting = ambientColor + (directionalColor * directionalLightWeighting) + pointWeight;\n  }\n\n  vColor = color;\n  vTexCoord = texCoord1;\n  gl_Position = projectionMatrix * worldMatrix * vec4(position, 1.0);\n}\n";
	export default _default;

}
declare module 'luma.gl/shadertools/test' {
	import 'luma.gl/shadertools/modules/fp64/fp64-arithmetic.spec';

}
declare const resolve: any;
declare module 'luma.gl/webgl-context/get-parameter' {
	export function getContextLimits(gl: WebGLRenderingContext): any;
	export function getParameter(gl: WebGLRenderingContext, originalFunc: any, pname: any): any;

}
declare module 'luma.gl/webgl-utils/get-error' {
	export function glGetError(gl: WebGLRenderingContext): Error;
	export function glCheckError(gl: WebGLRenderingContext): void;

}
