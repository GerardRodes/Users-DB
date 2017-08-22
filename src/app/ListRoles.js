import Component from '../vdom/Component'



export default class ListRoles extends Component {

	renderRoles() {
		return this.props._roles.map(role =>
			<li class="list-item"
				role-id={role.id} >
				<strong class="name" >{role.name}</strong>
				<div class="labels">
					<ul class="permissions label-box" >
						{
							role.permissions
								.map(permission =>
									<li class="label" >{permission}</li>
								)
						}
					</ul>
				</div>
			</li>
		)
	}


	render() {
		return (
			<section data-section-id="roles" >
				<div class="content">
				  <h2 class="title" >ROLES</h2>
					<ul class="list" >
						{this.renderRoles()}
					</ul>
				</div>
			</section>
		)
	}

}