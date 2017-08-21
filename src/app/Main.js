import Component from '../vdom/Component'
import LeftBar from './LeftBar'
import ListUsers from './ListUsers'
import ListRoles from './ListRoles'
import config from '../../config.json'

const baseUrl = config.baseUrl
const fetch = window.fetch || global.fetch || fetch


export default class Main extends Component {

	constructor(props, children) {
		super(props, children)

		this.state = {
			users: [],
			roles: [],
			activeSection: 'users'
		}


		fetch(baseUrl + 'users')
			.then(response => {
				if (response.ok) {
					return response.json()
				}
			})
			.then(users => {
				this.setState({users: users})
			})
			.catch(error => console.error(error))


		fetch(baseUrl + 'roles')
			.then(response => {
				if (response.ok) {
					return response.json()
				}
			})
			.then(roles => {
				this.setState({roles: roles})
			})
			.catch(error => console.error(error))
	}


	handleChangeLeftBar(e) {
		this.setState({
			activeSection: e.target.getAttribute('data-section-id')
		})
	}


	handleUpdateUsers(newUser) {
		fetch(baseUrl + 'users')
			.then(response => {
				if (response.ok) {
					return response.json()
				}
			})
			.then(users => {
				this.setState({users: users})
			})
	}


	render() {
		return(
			<div class="container" >
				<nav class="left-bar" >
					<LeftBar
						_sections={ ['users', 'roles'] }
						_active={this.state.activeSection}
						onChange={(e) => this.handleChangeLeftBar(e)}
						/>
				</nav>
				<main class="sections" >
					<ListUsers
						class={'section ' + (this.state.activeSection === 'users' ? 'active' : '')}
						onUpdateUsers={(newUser) => this.handleUpdateUsers(newUser)}
						_users={this.state.users}
						_roles={this.state.roles}
						/>
					<ListRoles
						class={'section ' + (this.state.activeSection === 'roles' ? 'active' : '')}
						_roles={this.state.roles}
						/>
				</main>
			</div>
		)
	}

}