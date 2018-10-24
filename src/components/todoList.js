import React, { PureComponent } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types'


export default class TodoList extends PureComponent {

    listView() {
        let listView = this.props.todos.map(todo =>
            <Paper className="todoContainer" elevation={3} key={todo.id}>
                <Typography variant="h6" gutterBottom className="todoText" style={todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                    {todo.title}
                </Typography>
                <IconButton onClick={() => this.props.toggle(todo.id)} aria-label="Toggle">
                    {todo.completed ? <CheckCircleOutline fontSize="large" style={{ color: 'green' }} /> : <CheckCircleOutline fontSize="large" style={{ color: 'grey' }} />}
                </IconButton>
                <IconButton style={{ color: '#ef703d' }} aria-label="Delete" onClick={() => this.props.delete(todo.id)}>
                    {}<DeleteIcon fontSize="large" />
                </IconButton>
            </Paper>
        )
        return listView
    }

    render() {
        return (
            <div>
                {this.listView()}
            </div>
        )
    }
}

TodoList.propTypes = {
    delete: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.any.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        }))
};