import Enums from "../enums";
import { MappedType } from "../../types";
import colorToContextMap from "../maps/colorToContext";
import { toInfo } from "./toInfo";

const $$btnColor = 'btnColor';
type $$btnColor = typeof $$btnColor;

type BtnColorProps = MappedType<$$btnColor, typeof Enums.Colors>

const $BtnColorInfo = toInfo($$btnColor, colorToContextMap, 'btn-');

export {
    $$btnColor
}
export default $BtnColorInfo;