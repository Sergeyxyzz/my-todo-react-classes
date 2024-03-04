import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

export default class App extends React.Component {
	state = {
		items: [],
		id: uuidv4(),
		item: '',
		editItem: false,
	}

	// пишем туду в инпут
	handleChange = (e) => {
		this.setState({
			item: e.target.value,
		})
	}
	// создаем туду
	handleSubmit = (e) => {
		e.preventDefault()
		const newItem = {
			id: this.state.id,
			title: this.state.item,
		}

		const updatedItems = [...this.state.items, newItem]

		this.setState({
			items: updatedItems,
			item: '',
			id: uuidv4(),
			editItem: false,
		})
	}
	// очищаем список
	clearList = (e) => {
		this.setState({
			items: [],
		})
	}
	// удаляем тудушку
	handleDelete = (id) => {
		const filteredItems = this.state.items.filter((item) => item.id !== id)
		this.setState({
			items: filteredItems,
		})
	}
	// редактируем тудушку
	handleEdit = (id) => {
		const filteredItems = this.state.items.filter((item) => item.id !== id)
		const selectedItem = this.state.items.find((item) => item.id === id)
		this.setState({
			items: filteredItems,
			item: selectedItem.title,
			id: id,
			editItem: true,
		})
	}

	render() {
		return (
			<div>
				<div className='container'>
					<div className='row'>
						<div className='col-10 mx-auto col-md-8 mt-5'>
							<h3 className='text-capitalize text-center'>
								todo input
							</h3>
						</div>
						<TodoInput
							item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							editItem={this.state.editItem}
						/>
						<TodoList
							items={this.state.items}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
						/>
					</div>
				</div>
			</div>
		)
	}
}
