import styled from "styled-components";

export const Headerbody = styled.header`
  height: 10%;
  width: 100%;
  background-color: rgb(75, 75, 158);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const Headernav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 50%;
`;

export const Navicon = styled.i`
  color: white;
  font-size: 25px;
  &:hover {
    color: rgb(255, 187, 0);
  }

  &.active {
    color: rgb(255, 187, 0);
  }
`;

function Header() {
  return (
    <Headerbody>
      <Headernav>
        <Navicon
          className={`fa-solid fa-sailboat ${
            param === "/" || active1 ? "active" : null
          }`}
          onClick={buttonActive}
        ></Navicon>
        <Navicon
          className={`fa-solid fa-book ${
            active2 || imageOnBook ? "active" : null
          }`}
          onClick={buttonActive2}
        ></Navicon>
        <Navicon
          className={`fa-solid fa-star ${
            active3 || imageOnRep ? "active" : null
          }`}
          onClick={buttonActive3}
        ></Navicon>
      </Headernav>
    </Headerbody>
  );
}

export default Header;
