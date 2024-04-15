import { getBaseLayout } from "components/Layout/BaseLayout/BaseLayout";
import { PageWrapper } from "components/PageWrapper/PageWrapper";

const NotFound = () => {
  return <PageWrapper>404 Not Found</PageWrapper>;
};

NotFound.getLayout = getBaseLayout;
export default NotFound;
