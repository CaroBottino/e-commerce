import { Input, Link, Typography, styled } from "@mui/material";

export const FormLabel = styled(Typography)({
  textAlign: "start",
});

export const FormInput = styled(Input)({
  minWidth: "30vw",
  maxWidth: "80vw",
});

export const FormHelper = styled(Typography)({
  color: "crimson",
});

export const FormTitle = styled(Typography)({
  fontFamily: "Proxima Nova",
  color: "#F400A1",
  fontSize: 32,
  fontWidth: 600,
});

export const FormLink = styled(Link)({
  color: "#AC274F",
});

export const FormItemImg = ({ src }: { src: string }) => (
  <img
    src={
      !src || src === ""
        ? "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-4_large.png?v=1530129177"
        : src
    }
    style={{ maxHeight: "40vw", maxWidth: "40vw" }}
  />
);

export const FormAvatarImg = ({ src }: { src: string }) => (
  <img
    src={
      !src || src === ""
        ? "https://www.shareicon.net/data/512x512/2016/08/05/807310_gaming_512x512.png"
        : src
    }
    style={{ maxHeight: "200px", maxWidth: "200px", borderRadius: "50%", marginTop: "16px" }}
  />
);
