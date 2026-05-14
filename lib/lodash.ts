import defaults from "lodash/defaults";
import each from "lodash/each";
import has from "lodash/has";
import isFunction from "lodash/isFunction";
import isPlainObject from "lodash/isPlainObject";
import pick from "lodash/pick";
import range from "lodash/range";
import uniqueId from "lodash/uniqueId";

interface LodashSubset {
  defaults: typeof defaults;
  each: typeof each;
  has: typeof has;
  isFunction: typeof isFunction;
  isPlainObject: typeof isPlainObject;
  pick: <T extends object, K extends keyof T>(object: T, ...paths: K[]) => Pick<T, K>;
  range: typeof range;
  uniqueId: typeof uniqueId;
}

const lodash: LodashSubset = {
  defaults,
  each,
  has,
  isFunction,
  isPlainObject,
  pick: pick as LodashSubset["pick"],
  range,
  uniqueId
};

export default lodash;
