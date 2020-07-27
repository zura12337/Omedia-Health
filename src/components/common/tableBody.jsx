import React, { Component } from "react";
import _ from "lodash";
import Service from "../../services/service";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  generateKey = (item, column) => {
    return item.id + (column.path || column.key);
  };

  render() {
    const { data, columns, name, dimension } = this.props;
    const user = Service("user");
    return (
      <tbody>
        {data &&
          data.map((item) =>
            dimension === "weight" ? (
              item[dimension].slice(0, -2) <= parseInt(user[name]) ? (
                <tr key={item.id}>
                  {columns.map((column) => (
                    <td
                      className="text-success"
                      key={this.generateKey(item, column)}
                    >
                      {this.renderCell(item, column)}
                    </td>
                  ))}
                </tr>
              ) : (
                <tr key={item.id}>
                  {columns.map((column) => (
                    <td
                      className="text-danger"
                      key={this.generateKey(item, column)}
                    >
                      {this.renderCell(item, column)}
                    </td>
                  ))}
                </tr>
              )
            ) : dimension === "allMealCalories" ||
              dimension === "mealCalories" ? (
              item[dimension] <= parseInt(user[name]) ? (
                <tr key={item.id}>
                  {columns.map((column) => (
                    <td
                      className="text-success"
                      key={this.generateKey(item, column)}
                    >
                      {this.renderCell(item, column)}
                    </td>
                  ))}
                </tr>
              ) : (
                <tr key={item.id}>
                  {columns.map((column) => (
                    <td
                      className="text-danger"
                      key={this.generateKey(item, column)}
                    >
                      {this.renderCell(item, column)}
                    </td>
                  ))}
                </tr>
              )
            ) : item[dimension] >= parseInt(user[name]) ? (
              <tr key={item.date}>
                {columns.map((column) => (
                  <td
                    className="text-success"
                    key={this.generateKey(item, column)}
                  >
                    {this.renderCell(item, column)}
                  </td>
                ))}
              </tr>
            ) : (
              <tr key={item.id}>
                {columns.map((column) => (
                  <td
                    className="text-danger"
                    key={this.generateKey(item, column)}
                  >
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
