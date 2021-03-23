import { withAccessibilityErrors } from 'ada-design';

const RegularImage = ({ src }) => {
  return <img src={src} className="App-logo" alt="logo" />;
};

export default withAccessibilityErrors(RegularImage);
