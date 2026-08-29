/**
 * Game transitions and dialog
 **/
namespace jsBlocks {
    /**
     * Render the images of sprites
     * @param body code to execute
     */
    //% help=game/paint weight=98 afterOnStart=true
    //% blockId=gamepaint block="on game paint"
    //% blockNamespace="game" group="Gameplay"
    //% blockAllowMultiple=1
    export function game_onPaint(a: () => void) { game.onPaint(a) }
    
    /**
     * Returns the sign of a number.
     * @param x A numeric expression.
     */
    //% blockId=mathsign block="sign %x"
    //% x.shadow="math_number"
    //% blockNamespace="math"
    export function sign(x: number) {
        return Math.sign(x)
    }
}