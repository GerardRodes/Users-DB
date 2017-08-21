import assert from 'assert'
import jsdom  from 'mocha-jsdom'
import mount from '../src/vdom/mounting'
import Component from '../src/vdom/Component'
import utils from '../src/vdom/utils'

describe('vDOM', function(){

	before(function(){
		global.h = window.h
		global.fetch = window.fetch
	})

	jsdom()


	describe('utils', function(){

		describe('Array.flatten', function(){
			it('flattens an array', function(){
				assert.deepEqual(
					[1, 2, 3, 4, 5],
					[1, [2, [3, [4, [5]]]]].flatten()
				)
			})
		})

		describe('Element.insertAtIndex', function(){
			it('inserts at defined index', function(){
				const div = document.createElement('div'),
							child = document.createElement('div')

				child.appendChild(
					document.createTextNode('child')
				)

				for(let n = 0; n <= 10; n++){
					const loopChild = document.createElement('div')
					loopChild.appendChild(
						document.createTextNode(n)
					)
					div.appendChild(loopChild)
				}

				div.insertAtIndex(child, 5)

				assert.deepEqual(div.children[5], child)
			})
		})

	})


	describe('JSX', function(){
		it('Parses correctly a div', function(){
			assert.deepEqual(
				<div></div>,
				h('div', null)
			)
		})

		it('Parses correctly a list with text nodes', function(){
			assert.deepEqual(
				<ul>
					<li>Child 1</li>
					<li>Child 2</li>
				</ul>,
				h('ul', null,
					h('li', null, 'Child 1'),
					h('li', null, 'Child 2')
				)
			)
		})

		it('Parses correctly attributes', function(){
			const element = (
				<div id="custom-id"
					class="custom-class"
					data-value="custom-data-value"
				 />
			)
			assert.equal(element.props.id, 'custom-id')
			assert.equal(element.props.class, 'custom-class')
			assert.equal(element.props['data-value'], 'custom-data-value')
		})
	})



	describe('mount', function(){

		it('Parses correctly vText', function() {
			const vText = mount('test', document.body)

			assert.deepEqual(
				vText,
				document.createTextNode('test').textContent
			)
		})

		it('Parses correctly vElement with a nested vText', function() {
			const vElement = mount(<div>Test</div>, document.body),
						$element = document.createElement('div')

			$element.appendChild(
				document.createTextNode('test')
			)

			assert.deepEqual(vElement, $element)
		})

		it('Parses correctly vComponent with nested vElement and vTexts', function() {
			class TestComponent extends Component {
				render() {
					return (
						<ul>
							<li>Child 1</li>
							<li>Child 2</li>
						</ul>
					)
				}
			}

			const $component = mount(<TestComponent />, document.body),
						$element  = document.createElement('ul'),
						childs = ['Child 1', 'Child 2']

			childs.forEach(child => {
				const $child = document.createElement('li')

				$child.appendChild(
					document.createTextNode(child)
				)

				$element.appendChild($child)
			})

			//To avoid deepEqual false negative
			delete $component._instance

			assert.deepEqual($component, $element)

		})

	})

})