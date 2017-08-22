import Component from '../vdom/Component'
import RoleWidget from './RoleWidget'
import config from '../../config.json'

const baseUrl = config.baseUrl



export default class ListUsers extends Component {

	constructor(props, children){
		super(props, children)

		this.state = {
			modalIsOpen: false,
			modalIsVisible: false,
			searchString: '',
			userSelected: {},
			newUser: {
				username: '',
				rolesId: []
			}
		}
	}

	renderUsers() {
		return this.props._users
			.filter(user => {
				if (!this.state.searchString) {
					return true
				} else {
					return user.username.indexOf(this.state.searchString) > -1
				}
			})
			.map(user =>
				<li class="list-item"
					user-id={user.id} >
					<strong class={"name " + (this.state.userSelected.id === user.id ? 'active' : '') }
						onClick={(e) => {
							this.setState({
								userSelected: (this.state.userSelected.id !== user.id ? user : {} )
							})
						}}
						>{user.username}</strong>
					<RoleWidget
						_user={user}
						_roles={this.props._roles}
					/>
				</li>
			)
	}


	handleInputUsername(e) {
		this.setState({
			newUser: {
				username: e.target.value,
				rolesId: this.state.newUser.rolesId
			}
		})
	}


	toggleRole(roleId) {
		const roleIndex = this.state.newUser.rolesId.indexOf(roleId)
		if (roleIndex === -1) {
			this.setState({
				newUser: {
					username: this.state.newUser.username,
					rolesId:  this.state.newUser.rolesId.concat([roleId])
				}
			})
		} else {
			let rolesIds = this.state.newUser.rolesId.slice()
			rolesIds.splice(roleIndex, 1)
			this.setState({
				newUser: {
					username: this.state.newUser.username,
					rolesId:  rolesIds
				}
			})
		}
	}


	createNewUser(e) {
		const newUser = this.state.newUser
		if (newUser.rolesId.length && newUser.username) {
			fetch(baseUrl + 'users', {
				method: 'post',
			  headers: {
			    'Content-Type': 'application/json'
			  },
			  body: JSON.stringify(newUser)
			})
			.then(response => response.json())
			.then(data => {
				if (this.props.onUpdateUsers) {
					this.props.onUpdateUsers(data)
				}
				this.closeModal()
			})
		}
	}


	deleteUser() {
		if (this.state.userSelected.id !== undefined) {
			fetch(baseUrl + 'users/' + this.state.userSelected.id, {
				method: 'delete',
			  headers: {
			    'Content-Type': 'application/json'
			  }
			})
			.then(response => {
				return response.json()
			})
			.then(data => {
				if (this.props.onUpdateUsers) {
					this.props.onUpdateUsers(data)
				}
			})
		}
	}


	closeModal() {
		this.setState({
			modalIsVisible: false,
			emphasis: 0,
			newUser: {
				username: '',
				rolesId: []
			}
		})
		setTimeout(() => this.setState({modalIsOpen: false}), 250)
	}


	renderModal() {
		if (this.state.modalIsOpen) {
			return (
				<div class={"modal manage-roles " + (this.state.modalIsVisible ? 'visible' : '')} >
					<span class="close"
						role="button"
						onClick={() => this.closeModal()} >
						✖
					</span>
					<div class="content" >
						<h2 class="title">Create new user</h2>
						<p class="desc">
							At least one role must be assigned
						</p>
						<input value={this.state.newUser.username}
							type="text"
							placeholder="username"
							onInput={(e) => this.handleInputUsername(e)} />
						<ul class="list" >
							{
								this.props._roles
									.map(role => {
										let isAssigned = this.state.newUser.rolesId.includes(role.id)
										return <li class={'list-item ' + (isAssigned ? 'active' : '')}
											role="button"
											onClick={() => this.toggleRole(role.id)} >
											<strong>{role.name}</strong>
										</li>	
									})
							}
						</ul>
						<button disabled={(this.state.newUser.rolesId.length && this.state.newUser.username ? null : 'disabled')}
							onClick={(e) => this.createNewUser()} >
							Create user
						</button>
					</div>
				</div>
			)
		}
	}


	handleInputUsernameSearch(e) {
		this.setState({
			searchString: e.target.value
		})
	}


	render() {
		return (
			<section data-section-id="users" >
				<div class="content">
				  <h2 class="title" >USERS</h2>
				  <input
				  	value={this.state.searchString}
				  	type="text"
				  	placeholder="Search by username"
				  	onInput={(e) => this.handleInputUsernameSearch(e)} />
					<ul class="list" >
						{this.renderUsers()}
					</ul>
					<div class="actions">
						<button onClick={() => {
								this.setState({modalIsOpen: true})
								setTimeout(() => this.setState({modalIsVisible: true}), 100)
							}}>
							Add a new user +
						</button>
						<button disabled={this.state.userSelected.id !== undefined ? null : 'disabled'}
							onClick={(e) => this.deleteUser()} >Delete user</button>
						{this.renderModal()}
					</div>
				</div>
			</section>
		)
	}

}