// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, {useState} from 'react';
import {
  PlasmicModal,
  DefaultModalProps,
} from './plasmic/shared/PlasmicModal';
import { useForm } from 'react-hook-form';

const options = [
  { value: 'Marcus Ellison' },
  { value: 'Tim Schindler' },
  { value: 'Victor Tang' },
];

interface ModalProps extends DefaultModalProps {
  organizationName: string;
  users: string[];
  organizationDescription: string;

}

function Modal(props: ModalProps) {
  const {organizationName, organizationDescription} = props
  const { handleSubmit } = useForm<any>();
  const [user, setUser] = useState('')

  const handleLogin = () => {

    console.log(user)
  }

  return (
    <PlasmicModal
      organizationName={organizationName}
      organizationDescription={organizationDescription}
      welcomeForm={{
        onSubmit: handleSubmit(handleLogin),
      }}
      selectUserButton={{
        type: 'submit'
      }}
      selectUserInput={{
        options: options,
        onChange: (user:string) => {
          setUser(user)
        }
      }}
    />
  ) 
}

export default Modal;
