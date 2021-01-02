import { useState, useEffect } from "react";
import * as api from "module/api";
import { ITimeline } from "module/interface/timeline/index";

export const useTimelines = (defaultTimelines: ITimeline[]) => {
  const [timelines, setTimelines] = useState<ITimeline[]>(defaultTimelines);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchTimelines = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        // const result = await axios(url);
        const result = await api.API.Timeline.Search(
          "user.venturemark.co/id",
          "usr-al9qy"
        );

        setTimelines(result as ITimeline[]);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchTimelines();
  });

  return [{ timelines, isLoading, isError }, setTimelines];
};
