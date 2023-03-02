import { Router } from "./router/Router";
import "./styles.css";

const user = {
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  name: "jun",
  email: "123@example.com",
  phone: "090-1111-2222",
  company: {
    name: "test株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return <Router />;
}
