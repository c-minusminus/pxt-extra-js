/**
 * Game transitions and dialog
 **/
namespace jsBlocks {
    /**
     * Render the images of sprites
     * @param body code to execute
     */
    //% help=game/paint weight=98 afterOnStart=true
    //% blockId=gamepaintBlock block="on game paint"
    //% blockNamespace="game" group="Gameplay"
    //% blockAllowMultiple=1
    export function game_onPaint(a: () => void) { game.onPaint(a) }
}

namespace Math {
    /**
     * Returns the sign of a number.
     * @param x A numeric expression.
     */
    //% weight=50
    //% blockId=mathsignBlock block="sign %x"
    export function signBlock(x: number) {
        return Math.sign(x)
    }
}