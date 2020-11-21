import { $ } from './';
import { AnyFunc } from '../../types';

function pipe<F extends AnyFunc, G extends AnyFunc>
    (...funcs: AnyFunc[]): (...init: Parameters<F>) => ReturnType<G> {
    return (...init: Parameters<F>) => 
        funcs.reduce((pv, cv) => $(pv, cv))(init);
}
export default pipe;