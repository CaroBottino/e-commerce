import Avatar from "@mui/material/Avatar";
import { useUserContext } from "../../providers/User.provider";
import { deepPurple } from "@mui/material/colors";

const AvatarWidget = () => {
  const { user } = useUserContext();

  const stringAvatar = () => {
    return {
      sx: {
        bgcolor: deepPurple[500],
      },
      children: `${user.name?.charAt(0)}${user.surname?.charAt(0)}`,
    };
  };

  return <Avatar alt={user.name} src={user.avatar} {...stringAvatar()} />;
};

export default AvatarWidget;
