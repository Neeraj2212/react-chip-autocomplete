import "./App.css";
import ChipAutocomplete from "./components/ChipAutocomplete";
import { User } from "./types";

const users: User[] = [
  {
    image: "https://i.pravatar.cc/200?u=1",
    name: "Katie Adams",
    email: "katieadams@email.com",
  },
  {
    image: "https://i.pravatar.cc/200?u=2",
    name: "Ken Adams",
    email: "kenadams@email.com",
  },
  {
    image: "https://i.pravatar.cc/200?u=3",
    name: "Betty Williams",
    email: "bettywilliams@email.com",
  },
  {
    image: "https://i.pravatar.cc/200?u=4",
    name: "Rebecca Thomas",
    email: "rebeccathomas@email.com",
  },
  {
    image: "https://i.pravatar.cc/200?u=5",
    name: "John Doe",
    email: "johndoe@email.com",
  },
  {
    image: "https://i.pravatar.cc/200?u=6",
    name: "Jane Doe",
    email: "janedoe@email.com",
  },
  {
    image: "https://i.pravatar.cc/200?u=7",
    name: "John Smith",
    email: "johnsmith@email.com",
  },
  {
    image: "https://i.pravatar.cc/200?u=8",
    name: "Jane Smith",
    email: "janesmith@email.com",
  },
  {
    image: "https://i.pravatar.cc/200?u=9",
    name: "John Williams",
    email: "johnwilliams@email.com",
  },
  {
    image: "https://i.pravatar.cc/200?u=10",
    name: "Jane Williams",
    email: "janewilliams@email.com",
  },
];

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div
          className="container flex flex-col items-center gap-10
         mt-10"
        >
          <h1 className="text-3xl">Pick Users</h1>
          <ChipAutocomplete users={users} />
        </div>
      </div>
    </>
  );
}

export default App;
