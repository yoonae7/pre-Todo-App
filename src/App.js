import "./App.css";
import styled from "styled-components";
import bach from "../src/images/Bach.png";
import schumann from "../src/images/Schumann.png";
// import { Link } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export const Bookshelf = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-top: 50px;
  height: 90%;
  width: 100%;
`;

export const EachSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 20px 20px 20px 20px;
`;

export const Score_image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 5px 5px 5px rgb(112, 112, 112);
  border-radius: 10%;
`;

function App() {
  return (
    <Bookshelf>
      <EachSection>
        {/* <Link to="/book"> */}
        <Score_image className="image" src={bach} alt="bach" />
        {/* </Link> */}
        <div>예제</div>
      </EachSection>

      <EachSection>
        {/* <Link to="/repertoire"> */}
        <Score_image className="image" src={schumann} alt="shumann" />
        {/* </Link> */}
        <div>레퍼토리</div>
      </EachSection>
    </Bookshelf>
  );
}

export default App;
