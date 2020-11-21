import { isNil } from "../core";
import React from 'react';



type ButtonArias = 'pressed' | 'expanded' | 'label' | 'labelledby';
type ButtonAriaPropNames = `aria-${ButtonArias}`;

type $aria$pressed = 'aria-pressed';
const $aria$pressed: $aria$pressed = 'aria-pressed';
const $aria$expanded = 'aria-expanded';
const $aria$label = 'aria-label';
const $aria$labelledby = 'aria-labelledby'

const $$aria: Record<ButtonArias, ButtonAriaPropNames> = {
    pressed: $aria$pressed,
    expanded: 'aria-expanded', 
    label: 'aria-label',
    labelledby: 'aria-labelledby'
}

const ariaStates = {
    [$$aria.pressed]: 'undefined',
    [$$aria.expanded]: 'undefined',
    [$$aria.label]: undefined,
    [$$aria.labelledby]: undefined
} as const;

function ifNil<T extends (typeof $$aria)[TKey], TKey extends keyof typeof $$aria>(key: TKey) {
    return function(currentValue?: T) {
        if (isNil(currentValue)) {
            return ariaStates[key];
        }
        return currentValue;
    }
}

interface ButtonElementProps {
    [$aria$pressed]?: boolean | string;
    [$aria$expanded]?: boolean | string;
    [$aria$label]?: string;
    [$aria$labelledby]?: string;
    buttonType: ButtonType;
} 

function pluck<T, TKey extends keyof T>(obj: T) {
    return function (key: TKey): Pick<T, typeof key> {
        return { [key]: obj[key] } as Pick<T, typeof key>
    }
}

const defaultProps = {
    [$aria$pressed]: 'undefined',
    [$aria$expanded]: 'undefined',
    [$aria$label]: '',
    [$aria$labelledby]: ''
}

function makePlucker(props: ButtonElementProps) {
    return <TKey extends keyof ButtonElementProps>(k: TKey) => pluck<ButtonElementProps, TKey>(props)(k);
}
function buttonElement(props: ButtonElementProps) {    
    const plucked1 = makePlucker(props)($aria$pressed);
    const plucked2 = makePlucker(props)($aria$expanded);
    const plucked3 = makePlucker(props)($aria$label);
    const plucked4 = makePlucker(props)($aria$labelledby);
    console.log(plucked1);
    console.log(plucked2);
    console.log(plucked3);
    console.log(plucked4);

    return (
        <div></div>
    )
}

buttonElement(defaultProps);