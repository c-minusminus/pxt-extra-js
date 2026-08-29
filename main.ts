/**
 * Game transitions and dialog
 **/
namespace jsBlocks {
    /**
     * Render the images of sprites
     * @param body code to execute
     */
    //% help=game/paint weight=10 afterOnStart=true
    //% blockId=gamepaint block="on game paint"
    //% blockNamespace="game" group="Gameplay"
    //% blockAllowMultiple=1
    export function game_onPaint(a: () => void) { game.onPaint(a) }
}