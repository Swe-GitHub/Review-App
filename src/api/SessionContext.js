// :copyright: Copyright (c) 2019 ftrack
import { createContext, useContext } from "react";

const SessionContext = createContext(null);

/** ftrack API Session provider */
export const SessionProvider = SessionContext.Provider;

/** Use ftrack API Session hook */
export function useSession() {
  return useContext(SessionContext);
}
