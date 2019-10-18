import React from "react";
import logo from "../../images/logo.png";

export default function SidebarComponent({ handle_sidebarQuery }) {
  return (
    <div className='sidebar-container'>
      <div id='infrrd-item'>
        <a href='/'>
          <img src={logo} alt='Infrrd' />
        </a>
      </div>

      <div id='table-item'>
        <table id='header-item'>
          <tbody>
            <tr>
              <th
                data-listpicked='men'
                onClick={event => {
                  handle_sidebarQuery(event);
                }}
              >
                MEN
              </th>
            </tr>
            <tr>
              <th
                data-listpicked='women'
                onClick={event => {
                  handle_sidebarQuery(event);
                }}
              >
                WOMEN
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
