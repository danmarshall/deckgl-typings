declare module 'math.gl/lib/common' {
	 const config: {};
	export { config };
	export function configure(options: any): void;
	export function checkNumber(value: any): any;
	export function formatValue(value: any, { precision }?: {
	    precision?: any;
	}): number;
	export function formatAngle(value: any, { precision, printDegrees }?: {
	    precision?: any;
	    printDegrees?: any;
	}): string;
	export function isArray(value: any): boolean;
	export function clone(array: any): any;
	export function radians(degrees: any): any;
	export function degrees(radians: any): any;
	export function sin(radians: any): any;
	export function cos(radians: any): any;
	export function tan(radians: any): any;
	export function asin(radians: any): any;
	export function acos(radians: any): any;
	export function atan(radians: any): any;
	export function clamp(value: any, min: any, max: any): any;
	export function lerp(a: any, b: any, t: any): any;
	export function equals(a: any, b: any): boolean;

}
declare module 'math.gl/lib/math-array' {
	export default class MathArray extends Array {
	    clone(): any;
	    copy(array: any): this;
	    set(...args: any[]): this;
	    fromArray(array: any, offset?: number): this;
	    toString(): string;
	    formatString(opts: any): string;
	    toArray(array?: any[], offset?: number): any[];
	    toFloat32Array(): Float32Array;
	    equals(array: any): boolean;
	    exactEquals(array: any): boolean;
	    negate(): this;
	    inverse(): this;
	    lerp(a: any, b: any, t: any): this;
	    min(vector: any): this;
	    max(vector: any): this;
	    clamp(minVector: any, maxVector: any): this;
	    validate(array?: this): boolean;
	    check(array?: this): this;
	    sub(a: any): any;
	    setScalar(a: any): this;
	    addScalar(a: any): this;
	    subScalar(a: any): this;
	    multiplyScalar(a: any): any;
	    divideScalar(a: any): any;
	    clampScalar(min: any, max: any): this;
	}

}
declare module 'math.gl/lib/vector' {
	import MathArray from 'math.gl/lib/math-array';
	export default class Vector extends MathArray {
	    x: any;
	    y: any;
	    len(): number;
	    magnitude(): number;
	    lengthSquared(): number;
	    distance(mathArray: any): number;
	    distanceSquared(mathArray: any): any;
	    dot(mathArray: any): any;
	    normalize(): this;
	    add(...vectors: any[]): this;
	    subtract(...vectors: any[]): this;
	    multiply(...vectors: any[]): this;
	    divide(...vectors: any[]): this;
	    scale(scale: any): this;
	    scaleAndAdd(vector: any, scale: any): this;
	    lengthSq(): number;
	    distanceTo(vector: any): number;
	    distanceToSquared(vector: any): any;
	    getComponent(i: any): any;
	    setComponent(i: any, value: any): this;
	    addVectors(a: any, b: any): this;
	    subVectors(a: any, b: any): this;
	    multiplyVectors(a: any, b: any): this;
	    addScaledVector(a: any, b: any): this;
	}

}
declare module 'math.gl/vector2' {
	import Vector from 'math.gl/lib/vector';
	export default class Vector2 extends Vector {
	    constructor(x?: number, y?: number);
	    readonly ELEMENTS: number;
	    cross(vector: any): this;
	    horizontalAngle(): number;
	    verticalAngle(): number;
	    operation(operation: any, ...args: any[]): this;
	}

}
declare module 'math.gl/vector3' {
	import Vector from 'math.gl/lib/vector';
	export default class Vector3 extends Vector {
	    constructor(x?: number, y?: number, z?: number);
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
	    operation(operation: any, ...args: any[]): this;
	}

}
declare module 'math.gl/vector4' {
	import Vector from 'math.gl/lib/vector';
	export default class Vector4 extends Vector {
	    constructor(x?: number, y?: number, z?: number, w?: number);
	    readonly ELEMENTS: number;
	    z: any;
	    w: any;
	    applyMatrix4(m: any): this;
	}

}
declare module 'math.gl/matrix4' {
	import MathArray from 'math.gl/lib/math-array';
	export function validateMatrix4(m: any): boolean;
	export default class Matrix4 extends MathArray {
	    constructor(...args: any[]);
	    readonly ELEMENTS: number;
	    setRowMajor(m00?: number, m01?: number, m02?: number, m03?: number, m10?: number, m11?: number, m12?: number, m13?: number, m20?: number, m21?: number, m22?: number, m23?: number, m30?: number, m31?: number, m32?: number, m33?: number): this;
	    setColumnMajor(m00?: number, m10?: number, m20?: number, m30?: number, m01?: number, m11?: number, m21?: number, m31?: number, m02?: number, m12?: number, m22?: number, m32?: number, m03?: number, m13?: number, m23?: number, m33?: number): this;
	    copy(array: any): this;
	    set(...args: any[]): this;
	    getElement(i: any, j: any, columnMajor?: boolean): any;
	    setElement(i: any, j: any, value: any, columnMajor?: boolean): this;
	    determinant(): any;
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
	    lookAt({ eye, center, up }: {
	        eye: any;
	        center?: number[];
	        up?: number[];
	    }): this;
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
	    }): Matrix4;
	    perspective({ fovy, fov, // DEPRECATED
	    aspect, near, far }?: {
	        fovy: any;
	        fov?: number;
	        aspect?: number;
	        near?: number;
	        far?: number;
	    }): this;
	    transpose(): this;
	    invert(): this;
	    multiplyLeft(a: any): this;
	    multiplyRight(a: any): this;
	    rotateX(radians: any): this;
	    rotateY(radians: any): this;
	    rotateZ(radians: any): this;
	    rotateXYZ([rx, ry, rz]: [any, any, any]): this;
	    rotateAxis(radians: any, axis: any): this;
	    scale(vec: any): this;
	    translate(vec: any): this;
	    transformVector2(vector: any, out: any): any;
	    transformVector3(vector: any, out: any): any;
	    transformVector4(vector: any, out: any): any;
	    transformVector(vector: any, out: any): any;
	    transformDirection(vector: any, out: any): any;
	    transformPoint(vector: any, out: any): any;
	    _transformVector(vector: any, out: any, w: any): any;
	    makeRotationX(radians: any): this;
	    makeTranslation(x: any, y: any, z: any): this;
	}

}
declare module 'math.gl/quaternion' {
	import MathArray from 'math.gl/lib/math-array';
	export function validateQuaternion(q: any): boolean;
	export default class Quaternion extends MathArray {
	    constructor(x?: number, y?: number, z?: number, w?: number);
	    fromMatrix3(m: any): this;
	    fromValues(x: any, y: any, z: any, w: any): this;
	    identity(): this;
	    readonly ELEMENTS: number;
	    x: any;
	    y: any;
	    z: any;
	    w: any;
	    //length(): any;
	    squaredLength(a: any): any;
	    dot(a: any, b: any): any;
	    rotationTo(vectorA: any, vectorB: any): this;
	    add(a: any, b: any): this;
	    calculateW(): this;
	    conjugate(): this;
	    invert(): this;
	    lerp(a: any, b: any, t: any): this;
	    multiply(a: any, b: any): this;
	    normalize(): this;
	    rotateX(rad: any): this;
	    rotateY(rad: any): this;
	    rotateZ(rad: any): this;
	    scale(b: any): this;
	    set(i: any, j: any, k: any, l: any): this;
	    setAxisAngle(axis: any, rad: any): this;
	    slerp({ start, target, ratio }: {
	        start?: number[];
	        target: any;
	        ratio: any;
	    }): this;
	}

}
declare module 'math.gl/euler' {
	import MathArray from 'math.gl/lib/math-array';
	import Matrix4 from 'math.gl/matrix4';
	import Quaternion from 'math.gl/quaternion';
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
	    copy(array: any): this;
	    set(x: number, y: number, z: number, order: any): this;
	    validate(): boolean;
	    toArray(array?: any[], offset?: number): any[];
	    toArray4(array?: any[], offset?: number): any[];
	    toVector3(optionalResult: any): any;
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
	    fromQuaternion(q: any, order: any): this;
	    fromRotationMatrix(m: any, order?: number): this;
	    getRotationMatrix(m?: Matrix4): Matrix4;
	    getQuaternion(): Quaternion;
	    _fromRotationMatrix(m: any, order?: number): this;
	    _getRotationMatrix(): this;
	}

}
declare module 'math.gl/spherical-coordinates' {
	import Vector3 from 'math.gl/vector3';
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
	    equals(other: any): boolean;
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
declare module 'math.gl/pose' {
	import Matrix4 from 'math.gl/matrix4';
	export default class Pose {
	    /**
	     * A pose contains both rotation and rotations.
	     * Note that every single pose defines its own coordinate system
	     * (with the position of the pose in the origin, and zero rotations).
	     * These "pose relative" coordinate will be centered on the defining
	     * pose's position and with with the defining pose's orientation
	     * aligned with axis.
	     */
	    constructor({ x, y, z, roll, pitch, yaw, position, orientation }: {
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
	    getTransformationMatrix(): Matrix4;
	    getTransformationMatrixFromPose(pose: any): Matrix4;
	    getTransformationMatrixToPose(pose: any): Matrix4;
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
	export { default as Vector2 } from 'math.gl/vector2';
	export { default as Vector3 } from 'math.gl/vector3';
	export { default as Vector4 } from 'math.gl/vector4';
	export { default as Matrix4 } from 'math.gl/matrix4';
	export { default as Quaternion } from 'math.gl/quaternion';
	export { config, checkNumber, configure, formatValue, isArray, clone, radians, degrees, sin, cos, tan, asin, acos, atan, clamp, lerp, equals } from 'math.gl/lib/common';
	export { default as _SphericalCoordinates } from 'math.gl/spherical-coordinates';
	export { default as _Pose } from 'math.gl/pose';
	export { default as _Euler } from 'math.gl/euler';
	export { default as _Polygon } from 'math.gl/addons/polygon';

}
declare module 'math.gl/matrix3' {
	import MathArray from 'math.gl/lib/math-array';
	import Vector3 from 'math.gl/vector3';
	export function validateMatrix3(m: any): boolean;
	export default class Matrix3 extends MathArray {
	    constructor(...args: any[]);
	    readonly ELEMENTS: number;
	    setRowMajor(m00?: number, m10?: number, m20?: number, m01?: number, m11?: number, m21?: number, m02?: number, m12?: number, m22?: number): any;
	    setColumnMajor(m00?: number, m01?: number, m02?: number, m10?: number, m11?: number, m12?: number, m20?: number, m21?: number, m22?: number): any;
	    set(m00: any, m01: any, m02: any, m10: any, m11: any, m12: any, m20: any, m21: any, m22: any, m30: any, m31: any, m32: any): this;
	    determinant(): any;
	    identity(): this;
	    transpose(): this;
	    invert(): this;
	    multiplyLeft(a: any): this;
	    multiplyRight(a: any): this;
	    rotateAxis(radians: any, axis: any): this;
	    scale(vec: any): this;
	    translate(vec: any): this;
	    transformVector2(vector: any, out: any): any;
	    transformVector3(vector: any, out?: Vector3): Vector3;
	    transformVector(vector: any, out: any): any;
	    transformDirection(vector: any, out: any): any;
	}

}
declare module 'math.gl/extended/vector4-extended' {
	import Vector4 from 'math.gl/vector4';
	export default class Vector4Extended extends Vector4 {
	}

}
declare module 'math.gl/lib/geometry' {
	export default class Geometry extends Array {
	    clone(): any;
	    check(): this;
	}

}
