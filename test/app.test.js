import assert from 'assert'
import 'whatwg-fetch'
import jsdom  from 'mocha-jsdom'
import Main from '../src/app/Main'
import ListUsers from '../src/app/ListUsers'
import ListRoles from '../src/app/ListRoles'
import LeftBar from '../src/app/LeftBar'
import RoleWidget from '../src/app/RoleWidget'
import { fakeComponent } from './tests'


describe('App', function(){

  before(function (){
    global.h = window.h
    global.fetch = window.fetch
  })

	jsdom()

	describe('Main', function(){

		const instance = fakeComponent(new Main())

		it('Initializes', function(){
			assert.deepEqual(instance.state, {
				users: [],
				roles: [],
				activeSection: 'users'
			})
		})


		it('Changes selected section', function(){
			const section = document.createElement('input')
			section.setAttribute('data-section-id', 'test')

			instance.handleChangeLeftBar({target: section})

			assert.equal(instance.state.activeSection, 'test')
		})

	})


	describe('ListUsers', function(){

		const instance = fakeComponent(new ListUsers())

		it('Initializes', function(){
			assert.deepEqual(instance.state, {
				modalIsOpen: false,
				modalIsVisible: false,
				searchString: '',
				userSelected: {},
				newUser: {
					username: '',
					rolesId: []
				}
			})
		})
	})


	describe('RoleWidget', function(){

		const instance = fakeComponent(new RoleWidget({_user: 'test'}))

		it('Initializes', function(){
			assert.deepEqual(instance.state, {
				modalIsOpen: false,
				modalIsVisible: false,
				user: 'test',
				emphasis: 0
			})
		})
	})

})