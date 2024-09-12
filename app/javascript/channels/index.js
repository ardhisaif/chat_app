import { createConsumer } from "@rails/actioncable"

const App = {};
App.cable = createConsumer();
export default App;
