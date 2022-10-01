import PropTypes from 'prop-types';
import { FilterStyled } from "components/Filter/Filter.styled";

export const Filter = ({ onFilterChange, filter }) => {

    const handleChange = e => {
        const { value } = e.target;
        console.log(value);
        onFilterChange(value);
    };

    return (
            <FilterStyled>
                <p>Find contacts by name</p>
                <input
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"              
                />
            </FilterStyled>
        );
}

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
}