import React from "react";

function Menu() {
  return (
    <div className="mb-35">
      <img
        src="/src/assets/images/tacos_close_up_1000x649.png"
        alt=""
        className="w-full"
      />

      <div className="p-3 text-green-800 font-fugaz m-8 font-bold text-3xl">
        Our Menu
      </div>

      <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden my-8">
        <caption className="sr-only">Our Tacos</caption>
        <thead>
          <tr>
            <th className="bg-green-700 text-white px-4 py-2 text-left">
              Tacos
            </th>
            <th className="bg-green-700 text-white px-4 py-2 text-left">
              Quantity
            </th>
            <th className="bg-green-700 text-white px-4 py-2 text-left">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              className="bg-green-100 px-4 py-2 font-semibold"
              scope="row"
              rowSpan="3"
            >
              Crunchy
            </th>
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">$1.50</td>
          </tr>
          <tr>
            <td className="px-4 py-2">2</td>
            <td className="px-4 py-2">$2.50</td>
          </tr>
          <tr>
            <td className="px-4 py-2">3</td>
            <td className="px-4 py-2">$3.25</td>
          </tr>
          <tr>
            <th
              className="bg-green-50 px-4 py-2 font-semibold"
              scope="row"
              rowSpan="3"
            >
              Soft
            </th>
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">$2.00</td>
          </tr>
          <tr>
            <td className="px-4 py-2">2</td>
            <td className="px-4 py-2">$3.50</td>
          </tr>
          <tr>
            <td className="px-4 py-2">3</td>
            <td className="px-4 py-2">$4.50</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td
              className="bg-yellow-100 text-center font-semibold px-4 py-2"
              colSpan="3"
            >
              Chips &amp; Salsa $2
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Menu;
