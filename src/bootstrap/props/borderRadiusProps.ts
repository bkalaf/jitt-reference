import { $, always, eqTo, identity, ite } from "../../core/fp";
import { contains, join, splitAt, trim } from "../../core/text";

import { $$borderColor } from "./borderColorProps";
import { MappedType } from "../../types";
import { PropsInfo } from "../types";
import fmap from "../../core/collections/fmap";
import foldl from "../../core/collections/foldl";
import { isArray } from "../../core/typeof";

const $$borderRadius = 'borderRadius';
type $$borderRadius = typeof $$borderRadius;

type SpecialBorderRadius = 'circle' | 'pill';
type Sides = 'top' | 'bottom' | 'left' | 'right';
type AllSides = 'all'

type IndividualOrAllSides = Sides | AllSides;
type BorderRadiusType = SpecialBorderRadius | IndividualOrAllSides;

type BorderRadiusProps = MappedType<$$borderRadius, string>;

const lookup = ite($(trim, eqTo('all')), always(''), $(trim, identity));

const mapString = $(splitAt(' '), fmap($(lookup, trim)));
const mapString2 = $(mapString, foldl(join(' '))(''));

const ifArray = ite(contains(' '), mapString2, lookup);

const $BorderRadiusInfo: PropsInfo<$$borderRadius, BorderRadiusProps> = {
    key: $$borderRadius,
    toProps: (radius: BorderRadiusType[]) => ({ [$$borderRadius]: radius.join(' ') }),

}

export {
    BorderRadiusType
}