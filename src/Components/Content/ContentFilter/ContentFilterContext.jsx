import React, { createContext, useContext, useState } from "react";

const ContentFilterContext = createContext();

export function ContentFilterProvider({ children }) {
  const [filterContent, setFilterContent] = useState(null);

  return (
    <ContentFilterContext.Provider value={{ filterContent, setFilterContent }}>
      {children}
    </ContentFilterContext.Provider>
  );
}

export function useContentFilter() {
  return useContext(ContentFilterContext);
}
