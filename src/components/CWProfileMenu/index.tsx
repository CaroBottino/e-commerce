import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UserType } from "../../enums/user.enum";
import CWReportsTable from "../CWReportsTable";
import CWDialog from "../CWDialog";
import { IUser } from "../../interfaces/IUser";
import { ICWReportsTableColumn } from "../CWReportsTable/CWReportsTable.interfaces";
import { IItem } from "../../interfaces/IItem";
import itemsService from "../../services/items.service";
import usersService from "../../services/users.service";
import { useUserContext } from "../../hooks/useUserContext";
import { ProfileBadge } from "./CWProfileMenu.styled";
import { priceAsCurrency } from "../../utils/itemHelper";

const CWProfileMenu = () => {
  const { user, hasSellingPermissions } = useUserContext();
  const [users, setUsers] = useState<IUser[]>([]);
  const [items, setItems] = useState<IItem[]>([]);
  const [userItems, setUserItems] = useState<IItem[]>([]);
  const [openConfDialog, setOpenConfDialog] = useState(false);
  const [newUserType, setNewUserType] = useState<number>();
  const [userToUpdate, setUserToUpdate] = useState<IUser>();

  const getUserTypeLabel = (type: UserType) => {
    switch (type) {
      case UserType.ADMIN:
        return "admin";
      case UserType.SELLER:
        return "seller";
      case UserType.BUYER:
        return "buyer";
    }
  };

  const getBackgroundColor = (type: UserType) => {
    switch (type) {
      case UserType.ADMIN:
        return "#AC274F";
      case UserType.SELLER:
        return "#EB638B";
      case UserType.BUYER:
        return "#FFD9DA";
    }
  };

  const userColumns: ICWReportsTableColumn<IUser>[] = [
    { key: "id", title: "ID" },
    { key: "name", title: "Name", sortable: true },
    { key: "surname", title: "Surname", sortable: true },
    { key: "email", title: "Email", sortable: true },
    {
      key: "type",
      title: "Type",
      sortable: true,
      render: (_, user) => (
        <Select
          value={user.type}
          onChange={(e) => onTypeChange(e.target.value, user)}
          size="small"
          sx={{ backgroundColor: getBackgroundColor(user.type) }}
        >
          <MenuItem value={UserType.ADMIN}>{getUserTypeLabel(UserType.ADMIN)}</MenuItem>
          <MenuItem value={UserType.SELLER}>{getUserTypeLabel(UserType.SELLER)}</MenuItem>
          <MenuItem value={UserType.BUYER}>{getUserTypeLabel(UserType.BUYER)}</MenuItem>
        </Select>
      ),
    },
  ];

  const itemColumns: ICWReportsTableColumn<IItem>[] = [
    { key: "id", title: "ID" },
    { key: "name", title: "Name", sortable: true },
    { key: "seller_id", title: "Seller ID", sortable: true },
    {
      key: "desc",
      title: "Description",
      render: (_, { desc }) => (
        <Tooltip title={desc} followCursor>
          <Typography>{desc.substring(0, 50)}</Typography>
        </Tooltip>
      ),
    },
    {
      key: "price",
      title: "Price",
      sortable: true,
      render: (_, { price }) => <Typography>{priceAsCurrency(price)}</Typography>,
    },
    { key: "stock", title: "Stock", sortable: true },
    {
      key: "tags",
      title: "Tags",
      render: (_, { tags }) => (
        <Box sx={{ width: "auto", p: 2, display: "flex", justifyContent: "space-between" }}>
          {tags.map((tag, index) => (
            <ProfileBadge key={`${tag}-${index}`} badgeContent={tag} />
          ))}
        </Box>
      ),
    },
    {
      key: "categories",
      title: "Categories",
      render: (_, { categories }) => (
        <Box sx={{ width: "auto", p: 2 }}>
          {categories.map((category, index) => (
            <ProfileBadge
              key={`${category}-${index}`}
              badgeContent={category}
              badgeType="category"
            />
          ))}
        </Box>
      ),
    },
  ];

  const onTypeChange = (newType: number | string | UserType, user: IUser) => {
    setNewUserType(Number(newType));
    setUserToUpdate(user);
    setOpenConfDialog(true);
  };

  const updateUserType = () => {
    if (newUserType && userToUpdate) {
      const payload = { ...userToUpdate, type: newUserType };
      usersService.updateUser(payload).then(() => {
        usersService.getUsers().then((users) => users && setUsers(users));
        setOpenConfDialog(false);
      });
    }
  };

  useEffect(() => {
    usersService.getUsers().then((users) => users && setUsers(users));
    itemsService.getItems().then((items) => items && setItems(items));
    if (user.id && hasSellingPermissions()) {
      itemsService.getItemsByUser(user.id).then((items) => items.length > 0 && setUserItems(items));
    }
  }, []);

  return (
    <Box maxWidth={"90vw"}>
      {hasSellingPermissions() && (
        <>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="items-content"
              id="items-header"
            >
              Your items on sale
            </AccordionSummary>
            <AccordionDetails>
              <CWReportsTable data={userItems} columns={itemColumns} />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="sales-content"
              id="sales-header"
            >
              Sales
            </AccordionSummary>
            <AccordionDetails>comming soon...</AccordionDetails>
          </Accordion>
        </>
      )}

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="purchases-content"
          id="purchases-header"
        >
          Purchases
        </AccordionSummary>
        <AccordionDetails>comming soon...</AccordionDetails>
      </Accordion>

      {user.type === UserType.ADMIN && (
        <>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="users-content"
              id="users-header"
            >
              Users registered
            </AccordionSummary>
            <AccordionDetails>
              <CWReportsTable data={users} columns={userColumns} />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="items-content"
              id="items-header"
            >
              All items on sale
            </AccordionSummary>
            <AccordionDetails>
              <CWReportsTable data={items} columns={itemColumns} />
            </AccordionDetails>
          </Accordion>
        </>
      )}

      {openConfDialog && userToUpdate && (
        <CWDialog
          open={openConfDialog}
          title={"Change user type"}
          content={`Changing user's type means changing user's permissions. Are you sure you want to continue?`}
          handleClose={() => setOpenConfDialog(false)}
          actions={
            <>
              <Button autoFocus onClick={() => setOpenConfDialog(false)}>
                Cancel
              </Button>
              <Button variant="contained" onClick={updateUserType}>
                Continue
              </Button>
            </>
          }
        />
      )}
    </Box>
  );
};

export default CWProfileMenu;
