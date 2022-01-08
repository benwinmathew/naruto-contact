import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Naruto Uzumaki"
        img="https://i1.sndcdn.com/artworks-000785417908-brxcgg-t500x500.jpg"
        phone="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name="Itachi Uchiha"
        img="https://yt3.ggpht.com/ytc/AKedOLSFjzv7YNSUwLrWCqZQA9pfZV9SmUBu2Dbwu7BZPQ=s900-c-k-c0x00ffffff-no-rj"
        phone="+987 654 321"
        email="jack@nowhere.com"
      />
      <Card
        name="Kakashi Hatake"
        img="https://i1.sndcdn.com/avatars-M0M5a9vMQWE54I1J-dbPyvg-t500x500.jpg"
        phone="+918 372 574"
        email="gmail@chucknorris.com"
      />
    </div>
  );
}
export default App;
