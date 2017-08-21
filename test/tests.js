import assert from 'assert'
import 'url-search-params-polyfill'
import '../src/vdom/h'
import 'whatwg-fetch'
import vDOMTest from './vDOM'
import appTest  from './app'


/*
	Initializes a component for testing purposes
*/
export function fakeComponent(instance) {
	instance.$parent = {
		children: []
	}
	instance._vNode = {
		tag: 'div'
	}
	instance.$element = instance._vNode.$element = document.createElement('div')

	return instance
}