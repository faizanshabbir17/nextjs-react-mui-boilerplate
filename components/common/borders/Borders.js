import {
  TopLeftBorder,
  BottomLeftBorder,
  TopRightBorder,
  BottomRightBorder,
} from "../../../utils/BorderCorners";

const Borders = ({ component }) => {
  return (
    <>
      <TopLeftBorder component={component} />
      <BottomLeftBorder component={component} />
      <TopRightBorder component={component} />
      <BottomRightBorder component={component} />
    </>
  );
};
export default Borders;
