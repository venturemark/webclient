import { useQuery, useMutation } from 'react-query';
import { INewAudience } from 'module/interface/audience';
import * as api from 'module/api';
// Mutations
// const audienceMutation = useMutation<any, any, any>((name) => {
//   return api.API.Audience.Create(
//     name,
//     userId,
//     organizationId,
//   );
// },{
//   onSuccess: () => {
//     // Invalidate and refetch
//     queryClient.invalidateQueries('audience')
//   },
// })
