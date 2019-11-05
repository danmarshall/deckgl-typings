//typings for math.gl v3.0.0
declare module 'math.gl/lib/assert' {
	export default function assert(condition: any, message: any): void;

}
declare module 'math.gl/lib/common' {
	const config: {};
	export { config };
	export function configure(options?: {}): {};
	export function formatValue(value: any, { precision }?: {
		precision?: any;
	}): string;
	export function isArray(value: any): boolean;
	export function clone(array: any): any;
	export function toRadians(degrees: any): any;
	export function toDegrees(radians: any): any;
	export function radians(degrees: any, result: any): any;
	export function degrees(radians: any, result: any): any;
	export function sin(radians: any): any;
	export function cos(radians: any): any;
	export function tan(radians: any): any;
	export function asin(radians: any): any;
	export function acos(radians: any): any;
	export function atan(radians: any): any;
	export function clamp(value: any, min: any, max: any): any;
	export function lerp(a: any, b: any, t: any): any;
	export function equals(a: any, b: any, epsilon: any): any;
	export function exactEquals(a: any, b: any): any;
	export function withEpsilon(EPSILON: any, func: any): any;

}
declare module 'math.gl/classes/base/math-array' {
	export default class MathArray extends Array {
		clone(): any;
		from(arrayOrObject: any): any;
		fromArray(array: any, offset?: number): this;
		to(arrayOrObject: any): any;
		toTarget(target: any): any;
		toArray(array?: any[], offset?: number): any[];
		toFloat32Array(): Float32Array;
		toString(): string;
		formatString(opts: any): string;
		equals(array: any): boolean;
		exactEquals(array: any): boolean;
		negate(): this;
		lerp(a: any, b: any, t: any): this;
		min(vector: any): this;
		max(vector: any): this;
		clamp(minVector: any, maxVector: any): this;
		add(...vectors: any[]): this;
		subtract(...vectors: any[]): this;
		scale(scale: any): any;
		sub(a: any): this;
		setScalar(a: any): this;
		addScalar(a: any): this;
		subScalar(a: any): this;
		multiplyScalar(scalar: any): this;
		divideScalar(a: any): any;
		clampScalar(min: any, max: any): this;
		multiplyByScalar(scalar: any): any;
		readonly elements: this;
		check(): this;
		validate(): boolean;
	}

}
declare module 'math.gl/lib/validators' {
	export function validateVector(v: any, length: any): boolean;
	export function checkNumber(value: any): any;
	export function checkVector(v: any, length: any, callerName: any): any;
	export function deprecated(method: any, version: any): void;

}
declare module 'math.gl/classes/base/vector' {
	import MathArray from 'math.gl/classes/base/math-array';
	export default class Vector extends MathArray {
		x: any;
		y: any;
		len(): number;
		magnitude(): number;
		lengthSquared(): number;
		magnitudeSquared(): number;
		distance(mathArray: any): number;
		distanceSquared(mathArray: any): any;
		dot(mathArray: any): any;
		normalize(): this;
		multiply(...vectors: any[]): this;
		divide(...vectors: any[]): this;
		lengthSq(): number;
		distanceTo(vector: any): number;
		distanceToSquared(vector: any): any;
		getComponent(i: any): any;
		setComponent(i: any, value: any): this;
		addVectors(a: any, b: any): any;
		subVectors(a: any, b: any): any;
		multiplyVectors(a: any, b: any): any;
		addScaledVector(a: any, b: any): this;
	}

}
declare module 'math.gl/lib/gl-matrix-extras' {
	export function vec2_transformMat4AsVector(out: any, a: any, m: any): any;
	export function vec3_transformMat4AsVector(out: any, a: any, m: any): any;
	export function vec3_transformMat2(out: any, a: any, m: any): any;
	export function vec4_transformMat2(out: any, a: any, m: any): any;
	export function vec4_transformMat3(out: any, a: any, m: any): any;

}
declare module 'math.gl/classes/vector2' {
	import Vector from 'math.gl/classes/base/vector';
	export default class Vector2 extends Vector {
		constructor(x?: number, y?: number);
		set(x: any, y: any, z: any): this;
		copy(array: any): this;
		fromObject(object: any): this;
		toObject(object: any): any;
		readonly ELEMENTS: number;
		horizontalAngle(): number;
		verticalAngle(): number;
		transform(matrix4: any): this;
		transformAsPoint(matrix4: any): this;
		transformAsVector(matrix4: any): this;
		transformByMatrix3(matrix3: any): this;
		transformByMatrix2x3(matrix2x3: any): this;
		transformByMatrix2(matrix2: any): this;
	}

}
declare module 'math.gl/classes/vector3' {
	import Vector from 'math.gl/classes/base/vector';
	export default class Vector3 extends Vector {
		constructor(x?: number, y?: number, z?: number);
		set(x: any, y: any, z: any): this;
		copy(array: any): this;
		fromObject(object: any): this;
		toObject(object: any): any;
		readonly ELEMENTS: number;
		z: any;
		angle(vector: any): any;
		cross(vector: any): this;
		rotateX({ radians, origin }: {
			radians: any;
			origin?: number[];
		}): this;
		rotateY({ radians, origin }: {
			radians: any;
			origin?: number[];
		}): this;
		rotateZ({ radians, origin }: {
			radians: any;
			origin?: number[];
		}): this;
		transform(matrix4: any): this;
		transformAsPoint(matrix4: any): this;
		transformAsVector(matrix4: any): this;
		transformByMatrix3(matrix3: any): this;
		transformByMatrix2(matrix2: any): this;
		transformByQuaternion(quaternion: any): this;
	}

}
declare module 'math.gl/classes/vector4' {
	import Vector from 'math.gl/classes/base/vector';
	export default class Vector4 extends Vector {
		constructor(x?: number, y?: number, z?: number, w?: number);
		set(x: any, y: any, z: any, w: any): this;
		copy(array: any): this;
		fromObject(object: any): this;
		toObject(object: any): any;
		readonly ELEMENTS: number;
		z: any;
		w: any;
		transform(matrix4: any): this;
		transformByMatrix3(matrix3: any): this;
		transformByMatrix2(matrix2: any): this;
		transformByQuaternion(quaternion: any): this;
		applyMatrix4(m: any): this;
	}

}
declare module 'math.gl/classes/base/matrix' {
	import MathArray from 'math.gl/classes/base/math-array';
	export default class Matrix extends MathArray {
		toString(): string;
		getElementIndex(row: any, col: any): any;
		getElement(row: any, col: any): any;
		setElement(row: any, col: any, value: any): this;
		getColumn(columnIndex: any, result?: any[]): any[];
		setColumn(columnIndex: any, columnVector: any): this;
	}

}
declare module 'math.gl/classes/matrix3' {
	import Matrix from 'math.gl/classes/base/matrix';
	export default class Matrix3 extends Matrix {
		static readonly IDENTITY: any;
		static readonly ZERO: any;
		readonly ELEMENTS: number;
		readonly RANK: number;
		readonly INDICES: Readonly<{
			COL0ROW0: number;
			COL0ROW1: number;
			COL0ROW2: number;
			COL1ROW0: number;
			COL1ROW1: number;
			COL1ROW2: number;
			COL2ROW0: number;
			COL2ROW1: number;
			COL2ROW2: number;
		}>;
		constructor(array: any);
		copy(array: any): this;
		set(m00: any, m10: any, m20: any, m01: any, m11: any, m21: any, m02: any, m12: any, m22: any): this;
		setRowMajor(m00: any, m01: any, m02: any, m10: any, m11: any, m12: any, m20: any, m21: any, m22: any): this;
		determinant(): any;
		identity(): this;
		fromQuaternion(q: any): this;
		transpose(): this;
		invert(): this;
		multiplyLeft(a: any): this;
		multiplyRight(a: any): this;
		rotate(radians: any): this;
		scale(factor: any): this;
		translate(vec: any): this;
		transform(vector: any, result: any): any;
		transformVector(vector: any, result: any): any;
		transformVector2(vector: any, result: any): any;
		transformVector3(vector: any, result: any): any;
	}

}
declare module 'math.gl/classes/matrix4' {
	import Matrix from 'math.gl/classes/base/matrix';
	export default class Matrix4 extends Matrix {
		static readonly IDENTITY: any;
		static readonly ZERO: any;
		readonly INDICES: Readonly<{
			COL0ROW0: number;
			COL0ROW1: number;
			COL0ROW2: number;
			COL0ROW3: number;
			COL1ROW0: number;
			COL1ROW1: number;
			COL1ROW2: number;
			COL1ROW3: number;
			COL2ROW0: number;
			COL2ROW1: number;
			COL2ROW2: number;
			COL2ROW3: number;
			COL3ROW0: number;
			COL3ROW1: number;
			COL3ROW2: number;
			COL3ROW3: number;
		}>;
		readonly ELEMENTS: number;
		readonly RANK: number;
		constructor(array: any);
		copy(array: any): this;
		set(m00: any, m10: any, m20: any, m30: any, m01: any, m11: any, m21: any, m31: any, m02: any, m12: any, m22: any, m32: any, m03: any, m13: any, m23: any, m33: any): this;
		setRowMajor(m00: any, m01: any, m02: any, m03: any, m10: any, m11: any, m12: any, m13: any, m20: any, m21: any, m22: any, m23: any, m30: any, m31: any, m32: any, m33: any): this;
		toRowMajor(result: any): any;
		identity(): this;
		fromQuaternion(q: any): this;
		frustum({ left, right, bottom, top, near, far }: {
			left: any;
			right: any;
			bottom: any;
			top: any;
			near: any;
			far: any;
		}): this;
		static _computeInfinitePerspectiveOffCenter(result: any, left: any, right: any, bottom: any, top: any, near: any): any;
		lookAt(eye: any, center: any, up: any): this;
		ortho({ left, right, bottom, top, near, far }: {
			left: any;
			right: any;
			bottom: any;
			top: any;
			near?: number;
			far?: number;
		}): this;
		orthographic({ fovy, aspect, focalDistance, near, far }: {
			fovy?: number;
			aspect?: number;
			focalDistance?: number;
			near?: number;
			far?: number;
		}): any;
		perspective({ fovy, fov, // DEPRECATED
			aspect, near, far }?: {
				fovy: any;
				fov?: number;
				aspect?: number;
				near?: number;
				far?: number;
			}): this;
		determinant(): any;
		getScale(result?: number[]): number[];
		getTranslation(result?: number[]): number[];
		getRotation(result?: number[], scaleResult?: any): number[];
		getRotationMatrix3(result?: number[], scaleResult?: any): number[];
		transpose(): this;
		invert(): this;
		multiplyLeft(a: any): this;
		multiplyRight(a: any): this;
		rotateX(radians: any): this;
		rotateY(radians: any): this;
		rotateZ(radians: any): this;
		rotateXYZ([rx, ry, rz]: [any, any, any]): this;
		rotateAxis(radians: any, axis: any): this;
		scale(factor: any): this;
		translate(vec: any): this;
		transform(vector: any, result: any): any;
		transformAsPoint(vector: any, result: any): any;
		transformAsVector(vector: any, result: any): any;
		makeRotationX(radians: any): this;
		makeTranslation(x: any, y: any, z: any): this;
		transformPoint(vector: any, result: any): any;
		transformVector(vector: any, result: any): any;
		transformDirection(vector: any, result: any): any;
	}

}
declare module 'math.gl/classes/quaternion' {
	import MathArray from 'math.gl/classes/base/math-array';
	export default class Quaternion extends MathArray {
		constructor(x?: number, y?: number, z?: number, w?: number);
		copy(array: any): this;
		set(x: any, y: any, z: any, w: any): this;
		fromMatrix3(m: any): this;
		identity(): this;
		fromAxisRotation(axis: any, rad: any): this;
		setAxisAngle(axis: any, rad: any): this;
		readonly ELEMENTS: number;
		x: any;
		y: any;
		z: any;
		w: any;
		len(): any;
		lengthSquared(a: any): any;
		dot(a: any, b: any): any;
		rotationTo(vectorA: any, vectorB: any): this;
		add(a: any, b: any): this;
		calculateW(): this;
		conjugate(): this;
		invert(): this;
		lerp(a: any, b: any, t: any): this;
		multiplyRight(a: any, b: any): this;
		multiplyLeft(a: any, b: any): this;
		normalize(): this;
		rotateX(rad: any): this;
		rotateY(rad: any): this;
		rotateZ(rad: any): this;
		scale(b: any): this;
		slerp(start: any, target: any, ratio: any): this;
		transformVector4(vector: any, result?: any): any;
		lengthSq(): any;
		setFromAxisAngle(axis: any, rad: any): this;
		premultiply(a: any, b: any): this;
		multiply(a: any, b: any): this;
	}

}
declare module 'math.gl/lib/math-utils' {
	const _default: {
		EPSILON1: number;
		EPSILON2: number;
		EPSILON3: number;
		EPSILON4: number;
		EPSILON5: number;
		EPSILON6: number;
		EPSILON7: number;
		EPSILON8: number;
		EPSILON9: number;
		EPSILON10: number;
		EPSILON11: number;
		EPSILON12: number;
		EPSILON13: number;
		EPSILON14: number;
		EPSILON15: number;
		EPSILON16: number;
		EPSILON17: number;
		EPSILON18: number;
		EPSILON19: number;
		EPSILON20: number;
		PI_OVER_TWO: number;
		PI_OVER_FOUR: number;
		PI_OVER_SIX: number;
		TWO_PI: number;
	};
	export default _default;

}
declare module 'math.gl/classes/spherical-coordinates' {
	import Vector3 from 'math.gl/classes/vector3';
	export default class SphericalCoordinates {
	    /**
	     * Ref: https://en.wikipedia.org/wiki/Spherical_coordinate_system
	     * The poles (phi) are at the positive and negative y axis.
	     * The equator starts at positive z.
	     * @class
	     * @param {Number} phi=0 - rotation around X (latitude)
	     * @param {Number} theta=0 - rotation around Y (longitude)
	     * @param {Number} radius=1 - Distance from center
	     */
		constructor({ phi, theta, radius, bearing, pitch, altitude, radiusScale }?: {
			phi: any;
			theta: any;
			radius: any;
			bearing: any;
			pitch: any;
			altitude: any;
			radiusScale?: number;
		});
		toString(): any;
		formatString({ printTypes, printDegrees }: {
			printTypes: any;
			printDegrees: any;
		}): string;
		equals(other: any): any;
		exactEquals(other: any): boolean;
		bearing: number;
		pitch: any;
		readonly longitude: any;
		readonly latitude: any;
		readonly lng: any;
		readonly lat: any;
		readonly z: number;
		set(radius: any, phi: any, theta: any): this;
		clone(): any;
		copy(other: any): this;
		fromLngLatZ([lng, lat, z]: [any, any, any]): void;
		fromVector3(v: any): this;
		toVector3(): Vector3;
		makeSafe(): void;
		check(): this;
	}

}
declare module 'math.gl/classes/euler' {
	import MathArray from 'math.gl/classes/base/math-array';
	import Quaternion from 'math.gl/classes/quaternion';
	export default class Euler extends MathArray {
		static readonly ZYX: number;
		static readonly YXZ: number;
		static readonly XZY: number;
		static readonly ZXY: number;
		static readonly YZX: number;
		static readonly XYZ: number;
		static readonly RollPitchYaw: number;
		static readonly DefaultOrder: number;
		static readonly RotationOrders: string[];
		static rotationOrder(order: any): string;
		readonly ELEMENTS: number;
		constructor(x?: number, y?: number, z?: number, order?: number);
		fromQuaternion(quaternion: any): Euler;
		copy(array: any): this;
		set(x: number, y: number, z: number, order: any): this;
		validate(): boolean;
		toArray(array?: any[], offset?: number): any[];
		toArray4(array?: any[], offset?: number): any[];
		toVector3(result?: number[]): number[];
		x: any;
		y: any;
		z: any;
		alpha: any;
		beta: any;
		gamma: any;
		phi: any;
		theta: any;
		psi: any;
		roll: any;
		pitch: any;
		yaw: any;
		order: any;
		fromVector3(v: any, order: any): this;
		fromArray(array: any, offset?: number): this;
		fromRollPitchYaw(roll: any, pitch: any, yaw: any): this;
		fromRotationMatrix(m: any, order?: number): this;
		getRotationMatrix(m: any): any;
		getQuaternion(): Quaternion;
		_fromRotationMatrix(m: any, order?: number): this;
		_getRotationMatrix(result: any): any;
		toQuaternion(): Quaternion;
	}

}
declare module 'math.gl/classes/pose' {
	export default class Pose {
	    /**
	     * A pose contains both rotation and rotations.
	     * Note that every single pose defines its own coordinate system
	     * (with the position of the pose in the origin, and zero rotations).
	     * These "pose relative" coordinate will be centered on the defining
	     * pose's position and with with the defining pose's orientation
	     * aligned with axis.
	     */
		constructor({ x, y, z, roll, pitch, yaw, position, orientation }?: {
			x?: number;
			y?: number;
			z?: number;
			roll?: number;
			pitch?: number;
			yaw?: number;
			position: any;
			orientation: any;
		});
		x: any;
		y: any;
		z: any;
		roll: any;
		pitch: any;
		yaw: any;
		getPosition(): any;
		getOrientation(): any;
		equals(pose: any): any;
		exactEquals(pose: any): any;
		getTransformationMatrix(): any;
		getTransformationMatrixFromPose(pose: any): any;
		getTransformationMatrixToPose(pose: any): any;
	}

}
declare module 'math.gl/addons/polygon' {
	export default class Polygon {
		constructor(points: any);
		getSignedArea(): number;
		getArea(): number;
		getWindingDirection(): number;
		forEachSegment(visitor: any): void;
	}

}
declare module 'math.gl' {
	export { default as Vector2 } from 'math.gl/classes/vector2';
	export { default as Vector3 } from 'math.gl/classes/vector3';
	export { default as Vector4 } from 'math.gl/classes/vector4';
	export { default as Matrix3 } from 'math.gl/classes/matrix3';
	export { default as Matrix4 } from 'math.gl/classes/matrix4';
	export { default as Quaternion } from 'math.gl/classes/quaternion';
	export { config, configure, formatValue, isArray, clone, equals, exactEquals, toRadians, toDegrees, radians, degrees, sin, cos, tan, asin, acos, atan, clamp, lerp, withEpsilon as _withEpsilon } from 'math.gl/lib/common';
	export { checkNumber } from 'math.gl/lib/validators';
	export { default as _MathUtils } from 'math.gl/lib/math-utils';
	export { default as _SphericalCoordinates } from 'math.gl/classes/spherical-coordinates';
	export { default as _Pose } from 'math.gl/classes/pose';
	export { default as _Euler } from 'math.gl/classes/euler';
	export { default as _Polygon } from 'math.gl/addons/polygon';
	export { default as assert } from 'math.gl/lib/assert';

}
