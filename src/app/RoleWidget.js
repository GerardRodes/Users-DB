import Component from '../vdom/Component'
import config from '../../config.json'

const baseUrl = config.baseUrl



export default class RoleWidget extends Component {

	constructor(props, children){
		super(props, children)

		this.state = {
			modalIsOpen: false,
			modalIsVisible: false,
			user: this.props._user,
			emphasis: 0
		}

		this.emphasisStates = ['low', 'medium', 'high', 'maximum', 'OMG']
	}


	getRoleNameById(roleId){
		let role = this.props._roles
			.filter(role => role && role.id === roleId)

		return role.length ? role[0].name : ''
	}


	toggleRole(roleId) {
		let userUrl = baseUrl + 'users/' + this.state.user.id,
				updatedUser = this.state.user,
				indexOfRole = this.state.user.rolesId.indexOf(roleId)

		if (indexOfRole > -1) {
			//unassign role
			if (this.state.user.rolesId.length <= 1) {
				this.setState({emphasis: this.state.emphasis + 1})
				return null
			}
			updatedUser.rolesId.splice(indexOfRole, 1)
		} else {
			//assign role
			updatedUser.rolesId.push(roleId)
		}

		this.setState({emphasis: 0})
		fetch(userUrl, {
		  method: 'put',
		  headers: {
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(updatedUser)
		})
		.then(response => response.json())
		.then(data => this.setState({
			user: data,
			assignedRoles: data.rolesId
		}))
	}


	renderModal() {
		if (this.state.modalIsOpen) {
			return (
				<div class={"modal manage-roles " + (this.state.modalIsVisible ? 'visible' : '')} >
					<span class="close"
						role="button"
						onClick={(e) => {
							this.setState({modalIsVisible: false, emphasis: 0})
							setTimeout(() => this.setState({modalIsOpen: false}), 250)
						}} >
						✖
					</span>
					<div class="content" >
						<h3 class="title" >Managing roles for user: {this.state.user.username}</h3>
						<p class="desc"
							 data-emphasis={(() => {
							 	if (!this.state.emphasis) {
							 		return null
							 	}
							 	let emphasisLevel = Math.floor(this.state.emphasis / 5)

							 	if (emphasisLevel > this.emphasisStates.length - 1) {
							 		emphasisLevel = this.emphasisStates.length - 1
							 	}

							 	return this.emphasisStates[emphasisLevel]
							 })()} >
							 At least one role must be assigned
						</p>
						<ul class="list" >
							{
								this.props._roles
									.map(role => {
										let isAssigned = this.state.user.rolesId.includes(role.id)
										return <li class={'list-item ' + (isAssigned ? 'active' : '')}
											role="button"
											onClick={() => this.toggleRole(role.id)} >
											<strong>{role.name}</strong>
										</li>	
									})
							}
						</ul>
					</div>
				</div>
			)
		}
	}


	render() {
		return (
			<div class="labels" >
				<ul class="label-box"
					onClick={() => {
						this.setState({modalIsOpen: true})
						setTimeout(() => this.setState({modalIsVisible: true}), 100)
					}}>
					{
						this.state.user.rolesId
							.map(assignedRole =>
								<li class="label"
									data-role-id={assignedRole}>
									{this.getRoleNameById(assignedRole)}
								</li>
							)
					}
				</ul>
				{this.renderModal()}
			</div>
		)
	}

}