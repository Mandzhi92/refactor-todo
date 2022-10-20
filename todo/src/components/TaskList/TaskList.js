import './TaskList.css';
import Task from '../Task';
import PropTypes from 'prop-types';

function TaskList({ todoData, onDeleted, onToggleDone, onToggleEditing, onFormatLabel }) {
  const listItems = todoData.map(({ id, done, editing, label, getTime }) => {
    let className = '';
    if (done) {
      className = 'completed';
    }
    if (editing) {
      className = 'editing';
    }
    return (
      <li key={id} className={className}>
        <Task
          done={done}
          label={label}
          getTime={getTime}
          editing={editing}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleEditing={() => onToggleEditing(id)}
          onFormatLabel={(label) => onFormatLabel(id, label)}
        />
      </li>
    );
  });

  return <ul className="todo-list">{listItems}</ul>;
}

TaskList.propTypes = {
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleEditing: PropTypes.func.isRequired,
  onFormatLabel: PropTypes.func.isRequired,

  todoData: PropTypes.arrayOf(
    PropTypes.shape({
      done: PropTypes.bool,
      editing: PropTypes.bool,
      id: PropTypes.number,
      label: PropTypes.string,
      getTime: PropTypes.string,
    })
  ).isRequired,
};

export default TaskList;
