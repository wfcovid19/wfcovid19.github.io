import React from "react";

export const usePageTitle = (title: string) => {
  React.useEffect(() => {
    document.title = `Waltham Forest Mutual Aid - ${title}`;
  }, [title]);
};
