import { useEffect } from "react";

export default function RedirectCodeursEnSeine({ path }) {
  useEffect(() => {
    if (process.env.GATSBY_ARCHIVE) {
      window.location.href = `https://www.codeursenseine.com${path}`;
    }
  }, [path]);

  return null;
}
