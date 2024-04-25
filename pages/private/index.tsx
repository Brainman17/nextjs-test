import {getBaseLayout} from "../../components/Layout/BaseLayout/BaseLayout";
import {LoginNavigate} from "../../hoc/LoginNavigate";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";

const Private = () => {
return (
    <LoginNavigate><PageWrapper>Private Page!!!</PageWrapper></LoginNavigate>
)
}

Private.getLayout = getBaseLayout
export default Private