import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Box,
  Tooltip,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useUserContext } from "../../providers/User.provider";
import { UserType } from "../../enums/user.enum";
import ReportsTable from "../ReportsTable";
import usersService from "../../services/users.service";
import { IUser } from "../../interfaces/IUser";
import { IReportsTableColumn } from "../ReportsTable/ReportsTable.interfaces";
import { IItem } from "../../interfaces/IItem";
import itemsService from "../../services/items.service";

const ProfileMenu = () => {
  const { user } = useUserContext();
  const [users, setUsers] = useState<IUser[]>([]);
  const [items, setItems] = useState<IItem[]>([]);

  const hasSellingPermissions = () => {
    return user.type === UserType.SELLER || user.type === UserType.ADMIN;
  };

  const userColumns: IReportsTableColumn<IUser>[] = [
    { key: "id", title: "ID" },
    { key: "name", title: "Name" },
    { key: "surname", title: "Surname" },
    { key: "email", title: "Email" },
  ];

  const itemColumns: IReportsTableColumn<IItem>[] = [
    { key: "id", title: "ID" },
    { key: "name", title: "Name" },
    { key: "seller_id", title: "Seller ID" },
    {
      key: "desc",
      title: "Description",
      render: (_, { desc }) => (
        <Tooltip title={desc} followCursor>
          <Typography>{desc.substring(0, 50)}</Typography>
        </Tooltip>
      ),
    },
    { key: "price", title: "Price" },
    { key: "stock", title: "Stock" },
    {
      key: "tags",
      title: "Tags",
      render: (_, { tags }) => (
        <Box sx={{ width: "auto", p: 2 }}>
          {tags.map((tag) => (
            <Badge badgeContent={tag} color="info" sx={{ p: 2 }} />
          ))}
        </Box>
      ),
    },
    {
      key: "categories",
      title: "Categories",
      render: (_, { categories }) => (
        <Box sx={{ width: "auto", p: 2 }}>
          {categories.map((category) => (
            <Badge badgeContent={category} color="warning" sx={{ p: 2 }} />
          ))}
        </Box>
      ),
    },
  ];

  useEffect(() => {
    usersService.getUsers().then((users) => users && setUsers(users));
    itemsService.getItems().then((items) => items && setItems(items));
  }, []);

  return (
    <>
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
              <ReportsTable data={users} columns={userColumns} />
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
              <ReportsTable data={items} columns={itemColumns} />
            </AccordionDetails>
          </Accordion>
        </>
      )}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget.
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
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
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
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ProfileMenu;
