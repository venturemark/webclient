import { useEffect } from "react";

export default function useScript(url: string) {
  useEffect(() => {
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
}
