import React, { useState, Component } from "react";
import Modal from "react-modal";

const SideBar = (props) => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const sidebarClass = sidebarOpen ? "sidebar open" : "sidebar";
  const [moda, setmodal] = useState(false);

  const [name, setname] = useState("");
  const [newname, setnewname] = useState("");
  const [edit, setedit] = useState(false);
  const [del, setdel] = useState(false);
  const handleShow = () => {
    setmodal(!moda);
  };
  const closeModal = () => {
    setmodal(!moda);
  };
  const toggleSidebar = () => {
    setSideBarOpen(!sidebarOpen);
    setedit(false);
    setdel(false);
    setmodal(false);
    setname("");
    setnewname("");
  };
  const closeedit = () => {
    setedit(false);
  };
  const submit = () => {
    setmodal(!moda);
    props.setdata([...props.data, name]);
    setname("");
    setSideBarOpen(false);
  };
  const handleedit = () => {
    setedit(!edit);
  };
  const submitedit = () => {
    const x = props.data;
    const y = x.filter((person) => person !== name);
    setedit(!edit);
    setname("");
    props.setdata([...y, newname]);
    setnewname("");
    setSideBarOpen(false);
  };
  const handledel = () => {
    setdel(!del);
  };
  const submitdel = () => {
    const x = props.data;
    const y = x.filter((person) => person !== name);
    setdel(!del);
    props.setdata(y);
    setname("");
    setSideBarOpen(false);
  };
  return (
    <>
      <div className={sidebarClass}>
        <button className="forbutton" onClick={handleShow}>
          Add Client
        </button>
        <button className="forbutton" onClick={handleedit}>
          Edit
        </button>
        <button className="forbutton" onClick={handledel}>
          Delete
        </button>
        <button onClick={toggleSidebar} className="sidebar-toggle">
          Toggle Sidebar
        </button>
      </div>
      <Modal
        isOpen={moda}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <form>
          <label>
            Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </label>
        </form>
        <button onClick={submit}>Add </button>
      </Modal>
      <Modal
        isOpen={edit}
        onRequestClose={closeedit}
        contentLabel="Example Modal"
      >
        <form>
          <label>
            Old name:
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </label>
          <label>
            New name:
            <input
              type="test"
              value={newname}
              onChange={(e) => setnewname(e.target.value)}
            />
          </label>
        </form>
        <button onClick={submitedit}>edit </button>
      </Modal>
      <Modal
        isOpen={del}
        onRequestClose={handledel}
        contentLabel="Example Modal"
      >
        <form>
          <label>
            Enter name:
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </label>
        </form>
        <button onClick={submitdel}>Delete</button>
      </Modal>
    </>
  );
};
export default SideBar;
