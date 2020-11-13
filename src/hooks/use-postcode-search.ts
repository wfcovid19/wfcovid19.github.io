import React from "react";
import axios from "axios";

export const usePostcodeSearch = () => {
  const [result, setResult] = React.useState<{ ward: string } | null>();
  const [error, setError] = React.useState(false);

  const perform = async (postcode: string) => {
    try {
      const response = await axios.get(
        `https://api.postcodes.io/postcodes/${postcode}`
      );
      setResult({ ward: response.data.result.admin_ward });
    } catch (ex) {
      setResult(null);
      setError(true);
    }
  };

  const clear = () => {
    setResult(null);
    setError(false);
  };

  return { perform, result, clear, error };
};
