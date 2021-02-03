// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from 'react';
import {
  PlasmicModalAlt,
  DefaultModalAltProps,
} from './plasmic/shared/PlasmicModalAlt';
import { useForm } from 'react-hook-form';
import { saveUser, ISaveUser } from 'module/store';
import { customers } from 'module/customerdata';

const organizationOptions = customers.map((customer) => {
  return { value: customer.name };
});

// const userOptions =

const options = [
  { value: 'Marcus Ellison' },
  { value: 'Tim Schindler' },
  { value: 'Victor Tan' },
];

interface ModalAltProps extends DefaultModalAltProps {
  users: string[];
  organizationDescription: string;
  setLogin: any;
}

function ModalAlt(props: ModalAltProps) {
  const { organizationDescription, setLogin } = props;

  const { handleSubmit } = useForm<any>();
  const [user, setUser] = useState('');
  const [organization, setOrganization] = useState('');
  const [orgSelected, setOrgSelected] = useState(false);

  const handleLogin = () => {
    if (!organization || !user) {
      return;
    }
    const userObj: ISaveUser = {
      userId: user,
      organizationId: organization,
    };
    saveUser(userObj);
    setLogin(userObj);
  };

  useEffect(() => {
    organization && setOrgSelected(true);
  }, [organization]);

  return (
    <PlasmicModalAlt
      orgSelected={orgSelected}
      organizationDescription={organizationDescription}
      welcomeForm={{
        onSubmit: handleSubmit(handleLogin),
      }}
      selectUserButton={{
        type: 'submit',
      }}
      selectOrganization={{
        options: organizationOptions,
        onChange: (organization: string) => {
          setOrganization(organization);
        },
        label: 'Select your organization',
      }}
      selectUser={{
        options: options,
        onChange: (user: string) => {
          setUser(user);
        },
        label: 'Select your name',
      }}
    />
  );
}

export default ModalAlt;
