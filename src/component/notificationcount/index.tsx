import {
  DefaultNotificationCountProps,
  PlasmicNotificationCount,
} from "component/plasmic/shared/PlasmicNotificationCount";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface NotificationCountProps extends Omit<DefaultNotificationCountProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultNotificationCountProps altogether and have
// total control over the props for your component.
interface NotificationCountProps extends DefaultNotificationCountProps {}

function NotificationCount(props: NotificationCountProps) {
  // Use PlasmicNotificationCount to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicNotificationCount are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all NotificationCountProps here, but feel free
  // to do whatever works for you.
  return <PlasmicNotificationCount {...props} />;
}

export default NotificationCount;
