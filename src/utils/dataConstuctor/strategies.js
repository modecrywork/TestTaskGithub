import getRepoMarkdown from "../getRepoMarkdown";
/**
 *  Дефолтная стратегия для сборки
 * @param {array} fields поля для сборки
 * @param {array} args  аргументы пробрасываемы из метода Array.map
 * @returns {function(*)} - функция сборки
 */
const defaultStrategy = fields => {
  return (item) => {
    const constructedObject = {};
    fields.forEach(field => {
      constructedObject[field] = item[field];
    });
    return constructedObject;
  };
}

const getReadmeGithubStrategy =  () => {
  return item => {
    getRepoMarkdown(item.full_name).then(data=>{
      item.markdown = data;
    })
    return item;
  }
};

/*Экспорт стратегий*/
export const STRATEGIES_TYPES = {
  default: defaultStrategy,
  getReadme: getReadmeGithubStrategy
}
