import React, { Component } from "react";
import _ from "lodash";
import authService from "../../services/authService";

class TableBody extends Component {
  renderCell = (item, column) => {
    console.log(column.content);

    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  generateKey = (item, column) => {
    return item.id + (column.path || column.key);
  };

  render() {
    const { data, columns, name, dimension } = this.props;
    const user = authService();
    return (
      <tbody>
        {data &&
          data.map((item) =>
            dimension === "weight" ? (
              item[dimension].slice(0, -2) <= parseInt(user[name]) ? (
                <tr key={this.generateKey(item, columns)}>
                  {columns.map((column) => (
                    <td className="text-success" key={item.id}>
                      {this.renderCell(item, column)}
                    </td>
                  ))}
                </tr>
              ) : (
                <tr key={item.id}>
                  {columns.map((column) => (
                    <td className="text-danger" key={item.id}>
                      {this.renderCell(item, column)}
                    </td>
                  ))}
                </tr>
              )
            ) : dimension === "mealCalories" ? (
              item[dimension] <= parseInt(user[name]) ? (
                <tr key={this.generateKey(item, columns)}>
                  {columns.map((column) => (
                    <td className="text-success" key={item.id}>
                      {this.renderCell(item, column)}
                    </td>
                  ))}
                </tr>
              ) : (
                <tr key={item.id}>
                  {columns.map((column) => (
                    <td className="text-danger" key={item.id}>
                      {this.renderCell(item, column)}
                    </td>
                  ))}
                </tr>
              )
            ) : item["activityCalories"] >= parseInt(user[name]) ? (
              <tr key={this.generateKey(item, columns)}>
                {columns.map((column) => (
                  <td className="text-success" key={item.id}>
                    {this.renderCell(item, column)}
                  </td>
                ))}
              </tr>
            ) : (
              <tr key={item.id}>
                {columns.map((column) => (
                  <td className="text-danger" key={item.id}>
                    {this.renderCell(item, column)}
                  </td>
                ))}
              </tr>
            )
          )}
      </tbody>
    );
  }
}

export default TableBody;
