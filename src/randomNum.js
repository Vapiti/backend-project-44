const getRandomNum = (min = 0, max = 100) => Math.round(Math.random() * (max - min) + min);

export default getRandomNum;

// любой максимум выпадает благодаря Math.round(), вот тут можно посмотреть тест https://jsfiddle.net/dfyrahmt/ 
