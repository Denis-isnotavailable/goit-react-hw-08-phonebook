import PropTypes from 'prop-types';
import GridLoader from "react-spinners/GridLoader";
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { AiFillPhone, AiFillDelete, AiFillSetting } from "react-icons/ai";
import { BsFillPersonBadgeFill, BsFillPhoneFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectOperation } from 'redux/contacts/selectors';
import { ContactItemStyled, PhoneButton, SettingsButton, DeleteButton } from "components/ContactItem/ContactItem.styled";
import { handleMouseDown, handleMouseUp } from "../../utils/HandleMouse";


export const ContactItem = ({ id, name, number, openModal }) => {
    const dispatch = useDispatch();
    const operation = useSelector(selectOperation);

    function onDeleteContact(id) {        
        dispatch(deleteContact(id));       
    };

    return (
        <ContactItemStyled >
            <PhoneButton
                type='button'
                onClick={() => Confirm.show(
                    'Outcoming call',
                    `call to: ${name.toUpperCase()} on: ${number} ??`,
                    'Okay',
                    'No',
                    () => { },
                    () => { },
                )} >
                <AiFillPhone size={40} color="#70eb4a" /></PhoneButton>
            
            <div>
                <p><BsFillPersonBadgeFill /> {name}</p>
                <p><BsFillPhoneFill /> {number}</p>
            </div>

            <SettingsButton
                type='button'
                onClick={() => openModal({ id: id, data: { name: name, number: number } })} >
                <AiFillSetting size={40} color="#2e312d" />
            </SettingsButton>

            <DeleteButton type='button'
                onClick={() => onDeleteContact(id)}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp} >
                    {operation === id ? <GridLoader size={8.9} color='#3d0404' /> : <AiFillDelete size={40} color="#3d0404" />}
            </DeleteButton>            
        </ContactItemStyled>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
}