interface Vector2D {
    x: number
    y: number
}

class Vector implements Vector2D {
    public x: number
    public y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    static RAD_TO_DEG = 360 / (Math.PI * 2)
    static radToDeg = (rad: number) => rad * Vector.RAD_TO_DEG
    static degToRad = (deg: number) => deg / Vector.RAD_TO_DEG

    public get length(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
    public get lengthX(): number {
        return Math.abs(this.x)
    }
    public get lengthY(): number {
        return Math.abs(this.y)
    }
    public get vecX(): Vector {
        return new Vector(this.x, 0)
    }
    public get vecY(): Vector {
        return new Vector(0, this.y)
    }

    private createVector(x: number, y: number): Vector {
        return new Vector(x, y)
    }

    public add(vec: Vector2D) {
        this.x += vec.x
        this.y += vec.y
    }
    public add$(vec: Vector2D) {
        return this.createVector(this.x + vec.x, this.y + vec.y)
    }

    public subtract(vec: Vector2D) {
        this.x -= vec.x
        this.y -= vec.y
    }
    public subtract$(vec: Vector2D) {
        return this.createVector(this.x - vec.x, this.y - vec.y)
    }

    public scale(scaler: number) {
        this.x *= scaler
        this.y *= scaler
    }
    public scale$(scaler: number) {
        return this.createVector(this.x * scaler, this.y * scaler)
    }

    public divide(scaler: number) {
        this.scale(1 / scaler)
    }
    public divide$(scaler: number) {
        return this.scale$(1 / scaler)
    }

    /**
     * @param vec dot product target `vector`
     * @returns dot product `scalar` result
     */
    public dot(vec: Vector2D): number {
        return this.x * vec.x + this.y * vec.y
    }
    /**
     * @description Get two `vector`'s between `radian`
     * @description `0deg ~ 180deg`
     */
    public radBetween(vec: Vector): number {
        return Math.acos(this.dot(vec) / (vec.length * this.length))
    }
    /**
     * @description Get two `vector`'s between `radian`
     * @description `0deg ~ 360deg`
     */
    public radBetweenFullRange(vec: Vector): number {
        const radBetween = this.radBetween(vec)
        const cross = this.cross2D(vec)
        return cross >= 0 ? radBetween : Math.PI * 2 - radBetween
    }

    /**
     * @returns Get determinant `scalar` with target `vector`
     */
    public determinant(vec: Vector2D): number {
        return this.x * vec.y - vec.x * this.y
    }
    /**
     * @description Result is `z-direction - (0,0,1)` `vector`
     * @param vec cross product target `vector`
     * @returns `z` vector length, `+` / `-`
     */
    public cross2D(vec: Vector2D): number {
        if (this.determinant(vec) === 0) {
            // eslint-disable-next-line no-console
            console.log("target vector's cross vector is not exists.")
            return 0
        }
        return this.x * vec.y - vec.x * this.y
    }

    /**
     * @description Rotate vector via rotation-matrix
     * @param rad rotation radian
     */
    public rotate(rad: number) {
        this.x = this.x * Math.cos(rad) - this.y * Math.sin(rad)
        this.y = this.x * Math.sin(rad) + this.y * Math.cos(rad)
    }
    /**
     * @description Rotate vector via rotation-matrix
     * @param rad rotation radian
     */
    public rotate$(rad: number) {
        return this.createVector(
            this.x * Math.cos(rad) - this.y * Math.sin(rad),
            this.x * Math.sin(rad) + this.y * Math.cos(rad)
        )
    }
}

export { Vector, type Vector2D }
