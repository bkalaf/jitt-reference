import Enums from "../enums";
import { MappedType } from "../../types";

const colorToContextMap: MappedType<typeof Enums.Colors, typeof Enums.Contexts> = {
    amber: 'caution',
    blue: 'primary',
    brown: 'muted',
    black: 'dark',
    'blue-gray': 'elegant',
    cyan: 'glowing',
    green: 'success',
    indigo: 'tertiary',
    'light-green': 'emphasis',
    'light-blue': 'accent',
    lime: 'neon',
    orange: 'attention',
    pink: 'highlight',
    purple: 'secondary',
    red: 'danger',
    teal: 'callout',
    white: 'light',
    yellow: 'warning',
    "deep-orange": "deepbright",
    "deep-purple": "deepdark",
    "gray": 'faded'
}
export default colorToContextMap;