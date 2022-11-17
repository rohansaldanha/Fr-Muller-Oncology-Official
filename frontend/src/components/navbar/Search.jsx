import { Navbar, Text, Input } from "@nextui-org/react";
import { FrLogo } from "./Fr-logo";
import { SearchIcon } from "./SearchIcon";
import { Button } from "@nextui-org/react";

export default function App() {
  return (
    <Navbar isBordered variant="sticky" css={{ backgroundColor: "black" }}>
      <Navbar.Brand css={{ mr: "$4" }}>
        <Navbar.Content hideIn="xs" variant="highlight">
          <Button color="primary" auto ghost>
            Update
          </Button>
          <Button color="error" auto ghost>
            Delete
          </Button>
        </Navbar.Content>
      </Navbar.Brand>
      <FrLogo />
      <Text b color="inherit" css={{ mr: "$11" }} hideIn="xs">
        FATHER MULLER MEDICAL COLLEGE HOSPITAL
        <br />
        DEPARTMENT OF ONCOLOGY
      </Text>
      <Navbar.Content
        css={{
          "@xsMax": {
            w: "100%",
            jc: "space-between"
          }
        }}
      >
        <Navbar.Item
          css={{
            "@xsMax": {
              w: "100%",
              jc: "center"
            }
          }}
        >
          <Input
            clearable
            contentLeft={
              <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
            }
            contentLeftStyling={false}
            css={{
              w: "100%",
              "@xsMax": {
                mw: "300px"
              },
              "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                dflex: "center"
              }
            }}
            placeholder="Search..."
          />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
