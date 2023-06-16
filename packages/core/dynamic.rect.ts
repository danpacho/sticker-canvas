import { Vector, type Vector2D } from './vector'

type ResizeConstraint = 'tl' | 'tr' | 'br' | 'bl' | 'l' | 'r' | 't' | 'b'

interface RectOption {
    width: number
    height: number
    initialTopLeftCoord: Vector2D
}
class DynamicRect {
    public width: number
    public height: number

    public tl: Vector = new Vector(0, 0)
    public tr: Vector = new Vector(0, 0)
    public br: Vector = new Vector(0, 0)
    public bl: Vector = new Vector(0, 0)

    public get center(): Vector {
        return new Vector(
            (this.tl.x + this.br.x) / 2,
            (this.tr.y + this.bl.y) / 2
        )
    }

    /**
     * @description clockwise direction rotated radian
     */
    public theta = 0

    constructor({ width, height, initialTopLeftCoord: tl }: RectOption) {
        this.width = width
        this.height = height

        this.tl = new Vector(tl.x, tl.y)
        this.tr = this.tl.add$(new Vector(width, 0))
        this.br = this.tl.add$(new Vector(width, height))
        this.bl = this.tl.add$(new Vector(0, height))
    }

    public update({ width, height, initialTopLeftCoord: tl }: RectOption) {
        this.width = width
        this.height = height

        this.tl = new Vector(tl.x, tl.y)
        this.tr = this.tl.add$(new Vector(width, 0))
        this.br = this.tl.add$(new Vector(width, height))
        this.bl = this.tl.add$(new Vector(0, height))
    }

    public rotate(theta: number): void {
        const prevTheta = this.theta
        const deltaTheta = theta - prevTheta
        const rotationOrigin = this.center

        this.theta = theta

        this.tl = this.tl
            .subtract$(rotationOrigin)
            .rotate$(deltaTheta)
            .add$(rotationOrigin)
        this.tr = this.tr
            .subtract$(rotationOrigin)
            .rotate$(deltaTheta)
            .add$(rotationOrigin)
        this.br = this.br
            .subtract$(rotationOrigin)
            .rotate$(deltaTheta)
            .add$(rotationOrigin)
        this.bl = this.bl
            .subtract$(rotationOrigin)
            .rotate$(deltaTheta)
            .add$(rotationOrigin)
    }

    public rotateByStep(theta: number): void {
        // rotate by some steps 15 | 30 | 45 | ...
    }

    public translate(deltaVec: Vector): void {
        this.tl.add(deltaVec)
        this.tr.add(deltaVec)
        this.bl.add(deltaVec)
        this.br.add(deltaVec)
    }

    public resize(deltaVec: Vector, constraint: ResizeConstraint): void {
        switch (constraint) {
            case 'tl': {
                this.tl.add(deltaVec)
                this.bl.add(deltaVec.vecX)
                this.tr.add(deltaVec.vecY)
                return
            }
            case 'tr': {
                this.tr.add(deltaVec)
                this.br.add(deltaVec.vecX)
                this.tl.add(deltaVec.vecY)
                return
            }
            case 'br': {
                this.br.add(deltaVec)
                this.tr.add(deltaVec.vecX)
                this.bl.add(deltaVec.vecY)
                return
            }
            case 'bl': {
                this.bl.add(deltaVec)
                this.tl.add(deltaVec.vecX)
                this.br.add(deltaVec.vecY)
                return
            }

            case 'l': {
                this.tl.add(deltaVec.vecX)
                this.bl.add(deltaVec.vecX)
                return
            }
            case 'r': {
                this.tr.add(deltaVec.vecX)
                this.br.add(deltaVec.vecX)
                return
            }
            case 't': {
                this.tl.add(deltaVec.vecY)
                this.tr.add(deltaVec.vecY)
                return
            }
            case 'b': {
                this.bl.add(deltaVec.vecY)
                this.br.add(deltaVec.vecY)
                return
            }
            default: {
                throw Error(`Unsupported constraint, ${constraint}`)
            }
        }
    }
}
export { DynamicRect, type ResizeConstraint }
