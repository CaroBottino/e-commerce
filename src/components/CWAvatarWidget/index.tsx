import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import { useUserContext } from "../../hooks/useUserContext";

const CWAvatarWidget = () => {
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

export default CWAvatarWidget;
