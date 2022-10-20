import './Task.css';
import EditingTask from '../EditingTask';
import PropTypes from 'prop-types';

function Task(props) {
  const { label, onDeleted, onToggleDone, onToggleEditing, getTime, editing, onFormatLabel, done } = props;
  
  const task = (
    <div className="view">
      <input className="toggle" type="checkbox" checked={done} onChange={onToggleDone} />
      <label>
        <span className="description">{label}</span>
        <span className="created">{getTime}</span>
      </label>
      <button aria-label="edit" type="button" className="icon icon-edit" onClick={onToggleEditing} />
      <button aria-label="destroy" type="button" className="icon icon-destroy" onClick={onDeleted} />
    </div>
  );

  return editing ? <EditingTask onFormatLabel={onFormatLabel} label={label}  /> : task;
}


Task.defaultProps = {
  label: 'This will be string',
  getTime: 'created $ seconds ago',
};
Task.propTypes = {
  label: PropTypes.string,
  getTime: PropTypes.string,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleEditing: PropTypes.func.isRequired,
  onFormatLabel: PropTypes.func.isRequired,
};

export default Task;
