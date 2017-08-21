import './vdom/h'
import 'whatwg-fetch'
import 'url-search-params-polyfill'
import mount from './vdom/mounting'
import Main  from './app/Main'
import './reset.css'
import './main.scss'

mount(
	<Main />,
	document.getElementById('root')
)