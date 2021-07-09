// multiple inheritance
let oviparMixins = Base => class Extends Base { };
let viviparMixins = Base => class extends Base { };
class Ovovipipar { }
class Snake extends oviparMixins(viviparMixins(Ovovipipar)) {

}