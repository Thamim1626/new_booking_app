import styled from "styled-components";
export const Navbar = styled.div`
  height: 500px;
  //   background: linear-gradient(
  //     to top,
  //     #0e26ac 0%,
  //     #020861 50%,
  //     #0c0361 50%,
  //     #000120 100%
  //   );
  background-image: url("https://i.pinimg.com/originals/ae/a6/68/aea668a381c99256ff48cdd479791617.gif");
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  .laltain {
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .mmtlogo {
    position: absolute;
    left: 70px;
    top: 10px;
    width: 8%;
    width: 140px;
    border-radius: 12px;
    box-shadow: 2px 2px 4px grey;
    // background-color: rgba(128, 128, 128, 0.6);
  }
  .topdiv {
    padding-top: 20px;
    height: 70px;
    display: flex;
    gap: 10px;
    flex-direction: row-reverse;
  }
  .button {
    width: 200px;
    margin: auto;
    button {
      width: 200px;
      height: 50px;
      color: white;
      font-weight: 600;
      border: none;
      cursor: pointer;
      position: relative;
      top: -27px;
      font-size: 24px;
      border-radius: 25px;
      color: #3339e9 !important;
      //   background: linear-gradient(
      //     to right,
      //     #8fdcfa 0%,
      //     #619ff0 50%,
      //     #6c9feb 50%,
      //     #3339e9 100%
      //   );
      background: linear-gradient(
        to right,
        #ffffcc 0%,
        #ccffcc 50%,
        #ccffcc 50%,
        #ccffcc 50%
      );
    }
  }
  a {
    color: #3339e9 !important;
    text-decoration: none;
  }
`;
