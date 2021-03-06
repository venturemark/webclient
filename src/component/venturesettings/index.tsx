import {
  DefaultVentureSettingsProps,
  PlasmicVentureSettings,
} from "component/plasmic/shared/PlasmicVentureSettings";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface VentureSettingsProps extends Omit<DefaultVentureSettingsProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultVentureSettingsProps altogether and have
// total control over the props for your component.
interface VentureSettingsProps extends DefaultVentureSettingsProps {}

function VentureSettings(props: VentureSettingsProps) {
  // Use PlasmicVentureSettings to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicVentureSettings are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all VentureSettingsProps here, but feel free
  // to do whatever works for you.
  return <PlasmicVentureSettings {...props} />;
}

export default VentureSettings;
