// TODO delete
// import { MaterialColor } from '../bs/props/__index';
// import React from 'react';

// export type Children = React.ReactElement | React.ReactElement[];

// export interface IElementProps {
//     name?: string;
//     id?: string;
//     className?: string;
//     children?: Children;
// }
// export type ButtonType = 'button' | 'submit' | 'reset';

// export type OnClickHandler = (e: React.MouseEvent) => void;

// export type IconFamily = 'solid' | 'regular' | 'duo' | 'light';
// export type IconName = string;
// export type RelativePlacement = 'before' | 'after' | 'under' | 'top';

// export type DataToggle = 'collapse' | 'dropdown';
// export type DataTarget = [DataToggle, string];
// export type ButtonAction =
//     | OnClickHandler
//     | DataTarget
//     | 'link'
//     | 'submit'
//     | 'reset';
// export type TextAlignmentDir = 'center' | 'left' | 'right' | undefined;
// export type FontWeight = 'bold' | 'light' | 'bolder' | 'lighter';

// export interface IHTMLButtonProps extends IElementProps {
//     label?: string;
//     buttonAction: ButtonAction;
//     bgColor?: MaterialColor;
//     textColor?: MaterialColor;
//     textAlignment?: TextAlignmentDir;
//     isOutline: boolean;
//     iconFamily?: IconFamily;
//     iconName?: IconName;
//     iconPlacement?: RelativePlacement;
//     fontWeight?: FontWeight;
// }

// const isFunction = (x?: any): x is Function => typeof x === 'function';
// const isString = (x?: any): x is string => typeof x === 'string';
// const isArray = (x?: any): x is Array<any> => Array.isArray(x);

// export function addToClassName(newClassName: string) {
//     return function (ele: React.ReactElement<any>) {
//         ele.props['className'] = [ele.props['className'], newClassName]
//             .join(' ')
//             .trim();
//         return ele;
//     };
// }
// const isNil = (x?: any): x is null | undefined => x == null;

// const handleProp = function <TProps>(
//     func: (v: TProps[keyof TProps]) => string,
//     propName: keyof TProps
// ) {
//     return (ele: React.ReactElement<TProps>) => {
//         const value = ele.props[propName];
//         return isNil(value) ? ele : addToClassName(func(value))(ele);
//     };
// };
// export const appendText = (right: string) => (left: string) => [left, right].join('');
// export const prependText = (left: string) => (right: string) =>
//     appendText(right)(left);

// export function procButtonAction(ba: ButtonAction) {
//     if (isArray(ba)) {
//         const [one, two] = ba;
//         return { tag: 'button', dataToggle: one, dataTarget: two }
//     } else if (isFunction(ba)) {
//         return { tag: 'button', type: 'button', onClick: ba };
//     } else if (isString(ba)) {
//         if (ba === 'link') { return { tag: 'a', type: 'button', href: '/' }} 
//         return { tag: 'button', type: ba };
//     }
// }
// export function HTMLButtonEle(props: IHTMLButtonProps) {
//     const {
//         label,
//         buttonAction,
//         iconFamily,
//         iconName,
//         iconPlacement,
//         bgColor,
//         textColor,
//         isOutline,
//         textAlignment,
//         fontWeight,
//         ...remaining
//     } = props;
//     handleProp(prependText('bg-'), 'bgColor');
//     handleProp(prependText('text-'), 'textColor');
//     handleProp(prependText('text-'), 'textAlignment');
    
//     const { tag, href, type, ...action } = procButtonAction(buttonAction)!;
//     if (tag === 'button') {
//         return <button type={type! as any} {...action}>{label}</button>
//     }
//     return <a {...action}>{label}</a>
// }

// class BackgroundColor<V, TProps extends { [k: string]: V }> {
//     private p: string = 'bgColor';
//     public props: TProps;
//     public handle: (ele: React.ReactElement) => React.ReactElement;
//     constructor(v: V) {
//         this.props = { [this.p]: v } as TProps;
//         this.handle = handleProp(prependText('bg-'), this.p);
//     }
// }


// const bg = new BackgroundColor('red');
// const text = new BackgroundColor('white');

// function dothis(y: any) {
//     const result = text.handle(bg.handle(y));
//     console.log(result);
// }
// dothis(<button>Button</button>)