// Реализация подключения файлов

// Подключение стилей.
// Можно подключать как css, так и sass/scss файлы,
// если в конфиге указаны соответствующие лоадеры
import './sass/main.scss';
import './css/style.css'

// Подключение изображений в качестве переменных
// для использования в html без явного указания
// в самом html.
import webpack_logo from './assets/webpack_logo.png'

// Объявление переменной для изображения
// для подстановки в атрибут src тега img.
const mainImage = document.getElementById('mainImage');
mainImage.src = webpack_logo

// Подключение модулей JS.
const hello = require('./js/hello')