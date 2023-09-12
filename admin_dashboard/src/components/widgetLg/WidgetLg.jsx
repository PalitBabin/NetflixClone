import "./widgetLg.css";
import PropTypes from "prop-types";

const WidgetLg = () => {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
      return (
        <div className="widgetLg">
          <h3 className="widgetLgTitle">Latest transactions</h3>
          <table className="widgetLgTable">
            <tbody>
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="https://cdn.pixabay.com/photo/2017/05/10/04/40/beautiful-2299857_640.jpg"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Maitreye Sharma</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$122.00</td>
              <td className="widgetLgStatus">
                <Button type="Approved" />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="https://cdn.pixabay.com/photo/2022/07/21/12/37/fashion-7336161_640.jpg"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Ahana Basu</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$122.00</td>
              <td className="widgetLgStatus">
                <Button type="Declined" />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="https://cdn.pixabay.com/photo/2023/08/22/14/51/south-indian-woman-8206562_640.png"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Ayana Mukherjee</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$122.00</td>
              <td className="widgetLgStatus">
                <Button type="Pending" />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$122.00</td>
              <td className="widgetLgStatus">
                <Button type="Approved" />
              </td>
            </tr>
            </tbody>
          </table>
        </div>
  )
}

WidgetLg.propTypes = {
    type:PropTypes.func
}
export default WidgetLg;