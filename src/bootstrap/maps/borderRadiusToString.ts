import { append, prepend } from "../../core/text";

import { $$borderColor } from "../props/borderColorProps";
import { BorderRadiusType } from "../props/borderRadiusProps";
import { PropsInfo } from "../types";
import { always } from "../../core/fp";
import { retn } from "./retn";

function borderRadiusToString(radius?: BorderRadiusType) {
    function inner(value?: BorderRadiusType): (s: string) => string[] {
        switch (value) {
            case undefined:
            case null:
                return always([]);
            case 'all':
                return retn;
            case 'bottom':
            case 'top':
            case 'left': 
            case 'right':
            case 'circle':
            case 'pill': 
                return $(append(prepend('-')(value)), retn);
        }
    }
    return inner(radius)('border');
}

