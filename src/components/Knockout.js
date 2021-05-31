import classes from "./knockout.module.css";

const Knockout = (props) => {
  return (
    <div className={classes.content}>
      <div>
        <h3 className={classes.roundName}>{props.roundName}</h3>
        <table className="table table-striped" style={{ width: "100%" }}>
          <thead className={classes.theadDark}>
            <tr>
              {props.knockoutsData.headers.map((head, i) => (
                <th className={classes.tableHeaderData}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.knockoutsData.rows.map((row, j) => (
              <tr>
                {row.map((val) => (
                  <td className={classes.tableData}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Knockout;
