import React from "react";
import Table from "react-bootstrap/Table";

const MoreInformation = () => {
  return (
    <Table bordered>
      <tbody>
        <tr>
          <td>Email</td>
          <td>gellert.eke@outlook.com</td>
        </tr>
        <tr>
          <td>Github</td>
          <td>
            <a href="https://github.com/ShootLessDie">
              https://github.com/ShootLessDie
            </a>
          </td>
        </tr>
        <tr>
          <td>LinkedIn</td>
          <td>
            <a href="https://www.linkedin.com/in/gellert-eke">
              https://www.linkedin.com/in/gellert-eke
            </a>
          </td>
        </tr>
        <tr>
          <td>CV</td>
          <td>
            <a href="robots.txt">CV</a>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default MoreInformation;
