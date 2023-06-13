import "./App.css";
import DisplayPathname from "./component/DisplayPathname";
import CallHistory from "./component/call-history/CallHistory";
import Detail from "./component/details/Detail";

import { Container } from "@mui/material";

function App() {
  return (
    <div>
      <Container>
        <h1>مشتری</h1>
        <DisplayPathname />
        <Detail />
        <CallHistory />
      </Container>
    </div>
  );
}

export default App;
