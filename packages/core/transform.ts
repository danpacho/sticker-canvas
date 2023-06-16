type CSSUnit = 'px' | 'em' | 'rem' | 'vh' | 'vw' | '%' | 'deg' | 'rad' | 'turn'

interface Transform {
    translateX: (x: string) => string
    translateY: (y: string) => string
    translateZ: (z: string) => string
    translate: (x: string, y: string) => string
    translate3d: (x: string, y: string, z: string) => string
    scale: (factor: string) => string
    scaleX: (factor: string) => string
    scaleY: (factor: string) => string
    scaleZ: (factor: string) => string
    scale3d: (x: string, y: string, z: string) => string
    rotate: (angle: string) => string
    rotateX: (angle: string) => string
    rotateY: (angle: string) => string
    rotateZ: (angle: string) => string
    skewX: (angle: string) => string
    skewY: (angle: string) => string
    skew: (xAngle: string, yAngle: string) => string
    perspective: (depth: string) => string
    matrix: (...values: string[]) => string
    matrix3d: (...values: string[]) => string
}

const transform: Transform = {
    translateX: (x) => `translateX(${x})`,
    translateY: (y) => `translateY(${y})`,
    translateZ: (z) => `translateZ(${z})`,
    translate: (x, y) => `translate(${x}, ${y})`,
    translate3d: (x, y, z) => `translate3d(${x}, ${y}, ${z})`,
    scale: (factor) => `scale(${factor})`,
    scaleX: (factor) => `scaleX(${factor})`,
    scaleY: (factor) => `scaleY(${factor})`,
    scaleZ: (factor) => `scaleZ(${factor})`,
    scale3d: (x, y, z) => `scale3d(${x}, ${y}, ${z})`,
    rotate: (angle) => `rotate(${angle})`,
    rotateX: (angle) => `rotateX(${angle})`,
    rotateY: (angle) => `rotateY(${angle})`,
    rotateZ: (angle) => `rotateZ(${angle})`,
    skewX: (angle) => `skewX(${angle})`,
    skewY: (angle) => `skewY(${angle})`,
    skew: (xAngle, yAngle) => `skew(${xAngle}, ${yAngle})`,
    perspective: (depth) => `perspective(${depth})`,
    matrix: (...values) => `matrix(${values.join(', ')})`,
    matrix3d: (...values) => `matrix3d(${values.join(', ')})`,
} as const

export { type CSSUnit, transform }
