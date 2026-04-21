import autoprefixer from 'autoprefixer';
import pxtorem from 'postcss-pxtorem';

const isProduction = process.env.NODE_ENV === 'production';

const pxtoremConfig = {
  rootValue: 16, // Используем pxtorem как функцию с конфигурацией
  propList: ['*'], // Преобразовывать все свойства
  // Исключаем системные классы PrimeVue, чтобы не нарушать их логику масштабирования
  selectorBlackList: [/^.p-/],
  replace: true, // Заменять px на rem
  mediaQuery: true, // Преобразовывать px внутри media queries
  minPixelValue: 2, // Минимальное значение px для преобразования. Сохраняем четкость линий в 1px
};

export default {
  plugins: [
    autoprefixer(),
    isProduction && pxtorem(pxtoremConfig), //работают только при билде
  ].filter(Boolean), // удаляем `false`
};
