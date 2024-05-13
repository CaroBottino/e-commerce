import { Badge, BadgeProps, styled } from "@mui/material";

export type ProfileBadgeProps = {
  badgeType?: string;
} & BadgeProps;

export const ProfileBadge = styled(Badge, {
  shouldForwardProp: (prop) => prop !== "badgeType",
})<ProfileBadgeProps>(({ badgeType }) => ({
  padding: 2,
  margin: 0.5,
  minWidth: "20px",

  ".MuiBadge-badge": {
    backgroundColor: badgeType === "category" ? "#EB638B" : "#FFD9DA",
    color: badgeType === "category" ? "white" : "#EB638B",
  },
}));
