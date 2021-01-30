import { create } from 'domain';
import * as mCreate from './create';
import * as search from './search';

export const Message = {
  Search: search.Search,
  Create: mCreate.Create,
};
