import type { Meta, StoryObj } from "@storybook/react";
import CWSignUpForm from "../CWSignUpForm";
import { BrowserRouter } from "react-router-dom";
import { IUser } from "../../../interfaces/IUser";

const meta: Meta<typeof CWSignUpForm> = {
  title: "CafeWeb/Forms/SignUp",
  component: CWSignUpForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CWSignUpForm>;

export const LoginForm: Story = {
  render: () => (
    <BrowserRouter>
      <CWSignUpForm changeMode={() => {}} />
    </BrowserRouter>
  ),
};

const demoUser: IUser = {
  id: "1",
  name: "Jane",
  surname: "Doe",
  email: "jane.doe@mail.com",
  avatar:
    "https://static.vecteezy.com/system/resources/previews/002/002/257/original/beautiful-woman-avatar-character-icon-free-vector.jpg",
  password: "1234pass",
  type: 2,
  cart: [],
};

export const LoginFormEditMode: Story = {
  render: () => (
    <BrowserRouter>
      <CWSignUpForm editMode={true} user={demoUser} changeMode={() => {}} />
    </BrowserRouter>
  ),
};
