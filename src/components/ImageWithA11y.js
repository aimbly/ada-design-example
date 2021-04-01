import { withAccessibilityErrors } from 'ada-design';

const RegularImage = ({ src, alt }) => {
  return (
    <>
      <img src={src} className="App-logo" alt={alt} />{' '}
    </>
  );
};

export default withAccessibilityErrors(RegularImage);
