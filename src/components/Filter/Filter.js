import PropTypes from 'prop-types';
import { changeFilter } from '../../Redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  console.log(filter);
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
};
