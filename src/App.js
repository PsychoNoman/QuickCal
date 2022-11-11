import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import Cal1 from "./component1/Cal1";
import Cal2 from "./components2/Cal2";
import Cal3 from "./component3/Cal3";
function App() {
  const resetStorage = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div
      className="App"
      style={{
        minHeight: "440px",
        minWidth: "290px",
        backgroundColor: "grey",
      }}
    >
      <Tabs position="fixed">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Cal2 />
          </TabPanel>
          <TabPanel>
            <Cal1 />
          </TabPanel>
          <TabPanel>
            <Cal3 />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Button
        position={"absolute"}
        width={"75px"}
        height={"30"}
        fontSize={"15px"}
        bottom={"2px"}
        left={"5.8rem"}
        margin={"5px"}
        onClick={resetStorage}
      >
        Refresh
      </Button>
      {/* <Calculator /> */}
    </div>
  );
}

export default App;
