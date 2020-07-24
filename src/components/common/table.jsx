import React from "react";
import { NavLink } from "react-router-dom";
import TableBody from "./tableBody";

const Table = ({ columns, label, data, name, dimension }) => {
  return (
    <div className="mt-2">
      <table className="table mt-4">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.path || column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <TableBody
          columns={columns}
          data={data}
          name={name}
          dimension={dimension}
        />
      </table>
    </div>
  );
};

export default Table;
