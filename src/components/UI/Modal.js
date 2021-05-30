import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Modal.module.css";



const Modal = (props) => {
console.log(props);

  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <div>

            <table className="table table-striped" style={{ width: "100%" }}>
            <thead className="thead-dark">
              <tr>
                {props.data.headers.map((head, i) => (
                  <th>{head}</th>
                ))}
              </tr>
              </thead>
              <tbody>
              {props.data.rows.map((row, j) => (
                <tr>
                  {row.map((val) => (
                    <td>{val}</td>
                  ))}
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
