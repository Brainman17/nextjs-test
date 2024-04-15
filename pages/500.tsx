import { getBaseLayout } from "components/Layout/BaseLayout/BaseLayout";
import { PageWrapper } from "components/PageWrapper/PageWrapper";

const ErrorServer = () => {
  return <PageWrapper>500 Server Error</PageWrapper>;
};

ErrorServer.getLayout = getBaseLayout;
export default ErrorServer;
