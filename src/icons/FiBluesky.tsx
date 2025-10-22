import { IconBase, type IconBaseProps } from "react-icons";
import { siBluesky } from "simple-icons";
const FiBluesky = (props: IconBaseProps) => (
  <IconBase viewBox="-3 0 27 26" {...props}>
    <path
      d={siBluesky.path}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);

export default FiBluesky;
