
import React, { FC, ReactNode } from "react";
import { Content } from "./style";

interface IFlexContainer {
    children: ReactNode;
    jc?: string;
    gap?: number;
    mt?: string;
    dr?: string;
    ai?: string;
}

const FlexContainer: FC<IFlexContainer> = ({ children, ai, jc, gap, mt, dr }) => {
    return (
        <Content ai={ai || "center"} jc={jc || "flex-start"} gap={gap || 0} mt={mt || "0"} dr={dr || "row"}>
            {children}
        </Content>
    );
}

export default FlexContainer;
