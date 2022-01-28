import {
  DefaultAddEditMembersProps,
  PlasmicAddEditMembers,
} from "component/plasmic/shared/PlasmicAddEditMembers";

interface AddEditMembersProps extends DefaultAddEditMembersProps {}

function AddEditMembers(props: AddEditMembersProps) {
  return <PlasmicAddEditMembers {...props} />;
}

export default AddEditMembers;
