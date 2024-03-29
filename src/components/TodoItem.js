import React from 'react'

export default class TodoItem extends React.Component {
	render() {
		const { title, handleDelete, handleEdit } = this.props
		return (
			<li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
				<h6>{title}</h6>
				<div className='todo-icon'>
					<span className='mx-2 text-success' onClick={handleDelete}>
						<i className='fas fa-pen' />
						DELETE
					</span>
					<span className='mx-2 text-success' onClick={handleEdit}>
						<i className='fas fa-pen' />
						EDIT
					</span>
				</div>
			</li>
		)
	}
}
