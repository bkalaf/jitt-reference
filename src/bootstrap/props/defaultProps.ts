import IBootstrapBaseProps from '../types/IBootstrapBaseProps';
import { isNull } from '../../core/typeof';
import randomStringGenerator from "../../core/text/randomStringGenerator";

function defaultProps(key?: string): IBootstrapBaseProps {
    return ({
        classList: [],
        className: '',
        children: [],
        key: isNull(key) ? randomStringGenerator(16) : key!
    });
}
export default defaultProps;
