import Component from '../vdom/Component'


export default class LeftBar extends Component {

	render() {
		return (
			<ul>
				{
					this.props._sections
						.map(section =>
							<li data-section-id={section}
									onClick={(e) => this.props.onChange(e)}
									class={section === this.props._active ? 'active' : null}
									role="button" >
								{ section.charAt(0).toUpperCase() + section.slice(1) }
							</li>
						)
				}
			</ul>
		)
	}

}