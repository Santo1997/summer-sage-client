import { Helmet } from "react-helmet-async";

const Title = ({ title }) => {
  return (
    <Helmet>
      <title>Summer Sage | {title}</title>
    </Helmet>
  );
};

export default Title;
