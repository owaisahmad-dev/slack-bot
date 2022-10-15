import { Icon, IconProps } from "@chakra-ui/react";

const CameraIcon = (props: IconProps) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="3.2" fill="currentColor" />
      <path
        fill="currentColor"
        d="M9 2l-1.83 2h-3.17c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2h-3.17l-1.83-2h-6zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
      />
      <path d="M0 0h24v24h-24z" fill="none" />
    </Icon>
  );
};

export { CameraIcon };
