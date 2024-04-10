import { Box, Skeleton, Stack } from "@mui/material";

const CWItemDetailSkeleton = () => {
  return (
    <Stack
      spacing={4}
      direction="row"
      useFlexGap
      flexWrap="wrap"
      justifyContent={"center"}
      marginTop={10}
      width={"92vw"}
    >
      <Box sx={{ width: 410, marginRight: 1, marginBottom: 5 }}>
        <Skeleton variant="rectangular" width={410} height={310} />
      </Box>
      <Box sx={{ width: 410, marginRight: 1, marginBottom: 5 }}>
        <Box>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
        <Box sx={{ pt: 4 }}>
          <Skeleton width="30%" />
        </Box>
        <Box sx={{ pt: 4 }}>
          <Skeleton />
          <Skeleton width="60%" />
          <Skeleton />
          <Skeleton width="80%" />
          <Skeleton />
          <Skeleton width="30%" />
        </Box>
      </Box>
    </Stack>
  );
};

export default CWItemDetailSkeleton;
