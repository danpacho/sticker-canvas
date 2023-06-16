const MOTION_VALUE_PREFIX = '--motion' as const

export const MOTION_VALUE_ID = {
    translateX: `${MOTION_VALUE_PREFIX}-x`,
    translateY: `${MOTION_VALUE_PREFIX}-y`,
    rotate: `${MOTION_VALUE_PREFIX}-rotate`,
    scaleX: `${MOTION_VALUE_PREFIX}-scale-x`,
    scaleY: `${MOTION_VALUE_PREFIX}-scale-y`,
} as const
