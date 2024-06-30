import {FC, PropsWithChildren} from "react";
import {useRouter} from "next/router";

export const LoginNavigate: FC<PropsWithChildren> = ({children}) => {
    const {push} = useRouter()
    const isAuth = true

    if(!isAuth) void push('/test')
    return <>{children}</>
}