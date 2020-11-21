import { $ } from './../../core/fp';
import { IBootstrapBaseProps } from '../../bootstrap/types';
import React from 'react';
import { defaultProps } from '../../bootstrap';
type ButtonRole =
    | 'checkbox'
    | 'link'
    | 'menuitem'
    | 'menuitemcheckbox'
    | 'menuitemradio'
    | 'option'
    | 'radio'
    | 'swtich'
    | 'tab';

type ElementRole = ButtonRole;

function addRole(role: ElementRole) {
    return function <Props>(Component: React.FunctionComponent<Props>) {
        return (props: Props) => <Component {...props} role={role} />;
    };
}

function htmlButtonElement<Props extends IBootstrapBaseProps>(props: Props) {
    const { children, ...remain } = props;
    return React.createElement('button', remain, children);
}

type InputEventPayload = React.BaseSyntheticEvent<Event, EventTarget & HTMLInputElement, HTMLInputElement>;
type InputEvent = (e: InputEventPayload) => void;

function usePreventDefault<TEventType extends InputEvent>(handler: TEventType) {
    return (e: InputEventPayload) => {
        e.preventDefault();
        return handler(e);
    }
}

const b = <input type="email" value=""></input>
const b2 = React.createElement('input');
const getValue = (e: InputEventPayload) => e.target.value;

function connectEventHandler(setState: React.Dispatch<React.SetStateAction<string>>) {
        return function<TEventType extends InputEvent>(handler: TEventType,
        preventDefault: boolean = false) {
            const newEvent = preventDefault ? usePreventDefault(handler) : handler;
            const finalEvent = (e: React.BaseSyntheticEvent<Event, EventTarget & HTMLInputElement, HTMLInputElement>) => {
                setState(getValue(e));
                newEvent(e);
            }
        }
    }
    
function addAriaPressed<Props extends IBootstrapBaseProps>(
    Component: React.FunctionComponent<Props>
) {
    return (props: Props & { onClick: (e: InputEventPayload) => void }) => {
        const { onClick, ...rest } = props;    
        const [isPressed, togglePressed] = React.useState(false.toString());
        const result = React.createElement("Component", {
            ...rest,
            onClick: connectEventHandler(togglePressed)(onClick, true),
            'aria-pressed': isPressed
        }, props.children);
        return result
    }
}
const asRadioButton = addRole('radio')(htmlButtonElement);
const asRadio2 = addAriaPressed(asRadioButton);

console.log(asRadio2({ ...defaultProps(), onClick: (e) => alert(e) }));