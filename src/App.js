import "./styles.css";
import react, { Component } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import ReactModal from "react-modal";
import { useState } from "react";
import SideBar from "./SideBar";
export default function App() {
  const [data, setdata] = useState([]);

  return (
    <div className="App">
      <header className="fsl">
        <p className="fff">Client App</p>
        <BiDotsVerticalRounded className="icon" />
      </header>

      <table>
        <tr>
          <th>Name</th>
        </tr>
        {data.map((val) => {
          return (
            <tr>
              <td>{val}</td>
            </tr>
          );
        })}
      </table>
      <SideBar data={data} setdata={setdata} />
    </div>
  );
}
