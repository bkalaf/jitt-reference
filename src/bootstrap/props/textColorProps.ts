import Enums from "../enums";
import { MappedType } from "../../types";
import colorToContextMap from "../maps/colorToContext";
import { toInfo } from "./toInfo";

const $$textColor = 'textColor';
type $$textColor = typeof $$textColor;
type TextColorProps = MappedType<$$textColor, typeof Enums.Colors>;

const $TextColorInfo = toInfo($$textColor, colorToContextMap, 'text-', '');

export { 
    $$textColor
}
export default $TextColorInfo;