import { STRATEGIES_TYPES } from "./strategies";
/**
 *  Сборщик данных
 * @param {array<Object>} data массив данных
 * @param {array} fields поля которые нужно собрать
 * @param {function} strategyType стратегия по которой осуществляется сборка объектов
 * @returns {array<Object>}  сконструированный массив
 */
const dataConstructor = (data, fields, strategyType = "default") => {
  const strategy =
    STRATEGIES_TYPES?.[strategyType](fields) ||
    STRATEGIES_TYPES["default"](fields); // каринг стратегии
  return data.map(strategy);
};

export default dataConstructor;
