import React from 'react';

export const useDropdown = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      const close = () => setOpen(false);
      window.addEventListener("click", close);
      return () => window.removeEventListener("click", close);
    }
  }, [open]);

  return {
    open, toggle: () => setOpen(open => !open)
  }
};
