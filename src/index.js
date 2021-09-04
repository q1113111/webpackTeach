// import "./index.css";
import './main.scss'
// core version + navigation, pagination modules:
//   // import Swiper bundle with all modules installed
//   import Swiper from 'swiper/bundle';

//   // import styles bundle
//   import 'swiper/css/bundle';

// // configure Swiper to use modules
// Swiper.use([Navigation, Pagination])

const btn = document.querySelector('.btn')
const box = document.querySelector('.box')

btn.addEventListener('click', () => {
  const a = parseInt(box.textContent, 10)
  box.textContent = a + 1
})

class Test {
  #a = 0
}
const newTest = new Test()
console.log('ssss', newTest.a)
