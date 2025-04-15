import { ReactElement, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { StyledTab, TabsLabelBox, TabsMainBox } from "./CWTabs.styled";

export interface CWTabsContent {
  label: string;
  content: string | ReactElement;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`cw-tabpanel-${index}`}
      aria-labelledby={`cw-tab-${index}`}
      style={{ width: "90vw" }}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

type CWTabsProps = {
  tabs: CWTabsContent[];
};

const CWTabs = ({ tabs }: CWTabsProps) => {
  const [visibleTab, setVisibleTab] = useState(0);

  const handleChange = (_: unknown, newValue: number) => {
    setVisibleTab(newValue);
  };

  return (
    <TabsMainBox>
      <TabsLabelBox>
        <Tabs value={visibleTab} onChange={handleChange} variant="scrollable" scrollButtons="auto">
          {tabs.map((tab, index) => (
            <StyledTab
              label={tab.label}
              id={`cw-tab-${index}`}
              aria-controls={`cw-tabpanel-${index}`}
            />
          ))}
        </Tabs>
      </TabsLabelBox>

      {tabs.map((tab, index) => (
        <CustomTabPanel value={visibleTab} index={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </TabsMainBox>
  );
};

export default CWTabs;
