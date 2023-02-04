import Modal from 'react-modal';
import { useForm } from "react-hook-form";

import {
  ModalDelete,
  ModalCancel,
  ModalSubmit,
  ModalFooter,
  InputField,
  InputSpan,
  InputContainer,
  ModalBody,
  ModalHeader,
  customStyles
} from '../styledComponent/index';
import { useEffect } from 'react';

function FormModal(props) {

  const { register, handleSubmit,setValue  } = useForm();
  
  useEffect(() => {
    if (props.editData.data) {
      console.log(props.editData.id);
      setValue("Name",props.editData.data.Name)
      setValue("Description",props.editData.data.Description)
      setValue("Time",props.editData.data.Time)
      setValue("Date",props.editData.data.Date)
      return
    }
    else {
      setValue("Name","")
      setValue("Description","")
      setValue("Time","")
      setValue("Date","")
    }
  }, [props.editData])
  

  const onSubmit = data => {
    if (data.Name && data.Date && data.Time) {
      props.onModalSubmit( data )
      props.openModal()
    }
  }

    return (
        <Modal
          isOpen={ props.modalState }
          ariaHideApp={false}
          onRequestClose={props.openModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <ModalHeader>{props.editData.data?"Edit Appointment":"Create Appointment"}</ModalHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            
            <InputContainer>
              <InputSpan>Name:</InputSpan>
              <InputField {...register("Name")}></InputField>
            </InputContainer>
            <InputContainer>
              <InputSpan>Description:</InputSpan>
              <InputField {...register("Description")}></InputField>
            </InputContainer>
            <InputContainer>
              <InputSpan>Date:</InputSpan>
              <InputField {...register("Date")} type="number" min="1" max="31" placeholder="Type a number 1 - 31"></InputField>
            </InputContainer>
            <InputContainer>
              <InputSpan>Time:</InputSpan>
              <InputField {...register("Time")} type="number" min="0" max="24" placeholder="Type a number 0 - 24"></InputField>
            </InputContainer>
          </ModalBody>
          <ModalFooter>
              <ModalSubmit>Submit</ModalSubmit>
              <ModalCancel onClick={props.openModal}>Cancel</ModalCancel>
              {props.editData.data?<ModalDelete onClick={()=>props.onDeleteClick(props.editData.id)}>Delete</ModalDelete>:''}
          </ModalFooter>
          </form>
        </Modal>
    );
  }
  
  export default FormModal;