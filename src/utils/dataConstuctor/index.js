import { STRATEGIES_TYPES } from "./strategies";
/**
 *  Сборщик данных
 * @param {array<Object>} data массив данных
 * @param {array} fields поля которые нужно собрать
 * @param {array} strategyTypes стратегия по которой осуществляется сборка объектов
 * @returns {array<Object>}  сконструированный массив
 */
const dataConstructor = (data, fields, strategyTypes = ["default"]) => {
  let currentData = data;
  if (strategyTypes?.length) {
    strategyTypes.forEach(type => {
      const strategy = STRATEGIES_TYPES?.[type](fields);
      if (strategy) currentData = currentData.map(strategy);
      console.log(currentData);
    });
  }
  return currentData;
};

export default dataConstructor;
