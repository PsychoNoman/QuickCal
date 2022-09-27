import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Cal1 from "./component1/Cal1";
import Cal2 from "./components2/Cal2";
import Cal3 from "./component3/Cal3";
function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: "450px",
        minWidth: "300px",
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
      {/* <Calculator /> */}
    </div>
  );
}

export default App;
