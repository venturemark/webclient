// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useState, useEffect } from "react";
import {
PlasmicModalAlt,
DefaultModalAltProps } from
"component/plasmic/shared/PlasmicModalAlt";
import { useForm } from "react-hook-form";
import { saveUser, ISaveUser } from "module/store";
import { customers } from "module/customerdata";

const organizationOptions = customers.map(customer => {
  return { value: customer.name };
});

interface ModalAltProps extends DefaultModalAltProps {
  users: string[];
  organizationDescription: string;
  setLogin: any;}


function ModalAlt(props: ModalAltProps) {
  const { organizationDescription, setLogin } = props;

  const { handleSubmit } = useForm<any>();
  const [user, setUser] = useState("");
  const [organization, setOrganization] = useState("");
  const [orgSelected, setOrgSelected] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const currentCustomer = customers.filter(
  customer => customer.name === organization);

  let userOptions: any = [];

  if (currentCustomer && currentCustomer.length > 0) {
    userOptions = currentCustomer[0].users.map(user => {
      return { value: user.name };
    });
  }

  const handleLogin = () => {
    if (!organization || !user) {
      return;
    }
    const userObj: ISaveUser = {
      userId: user,
      organizationId: organization };

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
      onSubmit: handleSubmit(handleLogin) }}

    selectUserButton={{
      type: "submit" }}

    // selectOrganization={{
    //   options: organizationOptions,
    //   onChange: (organization: string) => {
    //     setOrganization(organization);
    //   },
    //   label: "Select your organization",
    //   setUserFocus: setUserFocus,
    // }}
    // selectUser={{
    //   options: userOptions,
    //   onChange: (user: string) => {
    //     setUser(user);
    //   },
    //   label: "Select your name",
    //   userFocus: userFocus,
    //   setUserFocus: setUserFocus,
    // }}
    />);

}

export default ModalAlt;