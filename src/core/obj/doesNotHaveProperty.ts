import { compl, compl3 } from "../fp";

import hasProperty from "./hasProperty";

function doesNotHaveProperty<T>(key: string) {
    return compl3<string, T>(hasProperty)(key);
}
export default doesNotHaveProperty;