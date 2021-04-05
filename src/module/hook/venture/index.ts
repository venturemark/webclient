import { useQuery, useMutation, useQueryClient } from "react-query";
import { ISearchVenture } from "module/interface/venture";
import { useNavigate } from "react-router";
import * as api from "module/api";

type ErrorResponse = { code: number; message: string; metadata: any };

const getVenture = async (searchVenture: ISearchVenture) => {
  const data = await api.API.Venture.Search(searchVenture);
  return data;
};

const getVentureByTimeline = async (
  searchVentureByTimeline: ISearchVenture
) => {
  const { timelines: timelinesData, token } = searchVentureByTimeline;

  const timelines = timelinesData ?? [];

  const ventureIds = timelines.map((timeline) => timeline.ventureId);
  // console.log(ventureIds, "venture ids in get venture by timeline");

  let uniqueVentureIds = [...new Set(ventureIds)];

  const allVentures = await Promise.all(
    uniqueVentureIds.map(async (id: string) => {
      const search = {
        id,
        token,
      };

      const ventures = await api.API.Venture.Search(search);
      return ventures;
    })
  );
  const flattenedVentures: any = allVentures.flat();

  return flattenedVentures;
};

export function useVenture(searchVenture: ISearchVenture) {
  return useQuery<any, ErrorResponse>(
    ["venture", searchVenture.token, searchVenture.userId],
    () => getVenture(searchVenture),
    { enabled: !!searchVenture.token && !!searchVenture.userId }
  );
}

export function useVentureByTimeline(searchVentureByTimeline: ISearchVenture) {
  return useQuery<any, ErrorResponse>(
    [
      "venture",
      searchVentureByTimeline.token,
      searchVentureByTimeline.timelines,
    ],
    () => getVentureByTimeline(searchVentureByTimeline),
    {
      enabled:
        !!searchVentureByTimeline.token && !!searchVentureByTimeline.timelines,
    }
  );
}

export function useCreateVenture() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<any, any, any>(
    (newVenture) => {
      return api.API.Venture.Create(newVenture);
    },
    {
      onSuccess: (_, newVenture) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("venture");

        //redirect on success
        newVenture.successUrl && navigate(newVenture.successUrl);
      },
    }
  );
}

export function useUpdateVenture() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<any, any, any>(
    (ventureUpdate) => {
      return api.API.Venture.Update(ventureUpdate);
    },
    {
      onSuccess: (_, ventureUpdate) => {
        // Invalidate and refetch
        queryClient.invalidateQueries("venture");

        //redirect on success
        ventureUpdate.successUrl && navigate(ventureUpdate.successUrl);
      },
    }
  );
}
