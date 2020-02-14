/**
 *  Дефолтная стратегия для сборки
 * @param {array} fields поля для сборки
 * @param {array} args  аргументы пробрасываемы из метода Array.map
 * @returns {function(*)} - функция сборки
 */
const defaultStrategy = fields => {
  return (...args) => {
    const item = args[0];
    const constructedObject = {};
    fields.forEach(field => {
      constructedObject[field] = item[field];
    });
    return constructedObject;
  };
}


/*Экспорт стратегий*/
export const STRATEGIES_TYPES = {
  default: defaultStrategy
}
