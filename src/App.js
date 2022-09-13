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
        minWidth: "400px",
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
            <p style={{ fontWeight: "bold", marginLeft: "3.75rem" }}>
              Calculator One
            </p>
          </TabPanel>
          <TabPanel>
            <Cal1 />
            <p style={{ fontWeight: "bold", marginLeft: "3.75rem" }}>
              Calculator Two
            </p>
          </TabPanel>
          <TabPanel>
            <Cal3 />
            <p style={{ fontWeight: "bold", marginLeft: "3.5rem" }}>
              Calculator Three
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      {/* <Calculator /> */}
    </div>
  );
}

export default App;
