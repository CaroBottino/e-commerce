import { Box, Skeleton, Stack } from "@mui/material";

const CWItemsListSkeleton = () => {
  return (
    <Stack
      spacing={4}
      direction="row"
      useFlexGap
      flexWrap="wrap"
      justifyContent={"center"}
      marginTop={10}
    >
      {[...Array(6)].map((_, i) => (
        <Box key={`sk-item-${i}`} sx={{ width: 310, marginRight: 1, marginBottom: 5 }}>
          <Skeleton variant="rectangular" width={310} height={218} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default CWItemsListSkeleton;
