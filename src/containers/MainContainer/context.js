import React from "react";
import { withContext } from "with-context";

const MainContainerContext = React.createContext({});

export const MainContainerProvider = MainContainerContext.Provider;
export const WithMainContainerContext = withContext(MainContainerContext);
