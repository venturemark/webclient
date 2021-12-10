import { useRef, useEffect } from "react";
import ReactLoadingBar, { LoadingBarRef } from "react-top-loading-bar";

interface Props {
  loading?: boolean;
  refreshRate?: number;
  startingValue?: number;
}

function LoadingBar({
  loading = false,
  refreshRate = 10,
  startingValue = 30,
}: Props) {
  const loadingBarRef = useRef<LoadingBarRef>(null);

  useEffect(() => {
    if (loading) {
      loadingBarRef?.current?.continuousStart(startingValue, refreshRate);
    } else {
      loadingBarRef?.current?.complete();
    }
  }, [loading, startingValue, refreshRate]);

  return <ReactLoadingBar color="#2E8C8D" ref={loadingBarRef} />;
}

export default LoadingBar;
