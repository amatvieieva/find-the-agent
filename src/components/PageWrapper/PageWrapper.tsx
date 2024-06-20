import { ReactNode } from "react";
import './PageWrapper.scss';
interface PageWrapperProps {
    children: ReactNode;
  }

export default function PageWrapper ({children}:PageWrapperProps) {

    return(
        <div className="pageWrapper">{children}</div>
    )
}