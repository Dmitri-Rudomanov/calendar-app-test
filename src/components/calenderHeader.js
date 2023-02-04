import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { 
    CalenderHeaderContainer,
    DropdownContainer,
    AppointmentButton,
    DropdownLabel,
} from '../styledComponent/index';

import { yearOptions, monthOptions } from '../constant/index';


function CalenderHeader( props ) {
    

    const onYearSelect = ( date ) => {
        props.onYearSelect( date )
    }

    const onMonthSelect = ( date ) => {
        props.onMonthSelect( date )
    }

    const openModal = () => {
        props.openModal()
    }

    return (
      <CalenderHeaderContainer>
            <DropdownContainer>
            <DropdownLabel>Year</DropdownLabel>
            <Dropdown 
                options={yearOptions} 
                onChange={onYearSelect} 
                value={props.defaultYear} 
                />
            <DropdownLabel>Month</DropdownLabel>
            <Dropdown 
                options={monthOptions} 
                onChange={onMonthSelect} 
                value={props.defaultMonth} 
            />
          </DropdownContainer>
          <AppointmentButton onClick={openModal}>Create Appointment</AppointmentButton>
      </CalenderHeaderContainer>
    );
  }
  
  export default CalenderHeader;
  