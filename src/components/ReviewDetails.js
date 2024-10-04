import { ProgressButton } from "./ProgressButton/ProgressButton";
import "./ReviewDetails.css";

export const ReviewDetails = ({ useStep, inputData }) => {
  return (
    <>
      <h2>Review Details</h2>
      <div className="form">
        <table>
          <caption>Personal Details: </caption>
          <tbody>
            <tr>
              <th scope="row">Firstname: </th>
              <td>{inputData.firstname}</td>
            </tr>
            <tr>
              <th scope="row">Lastname:</th>
              <td>{inputData.lastname}</td>
            </tr>
          </tbody>
        </table>

        <table>
          <caption>Contact Information: </caption>
          <tbody>
            <tr>
              <th scope="row">Email: </th>
              <td>{inputData.email}</td>
            </tr>
          </tbody>
        </table>

        <table>
          <caption>Login Details: </caption>
          <tbody>
            <tr>
              <th scope="row">Username: </th>
              <td>{inputData.username}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ProgressButton>Create Account</ProgressButton>
    </>
  );
};
