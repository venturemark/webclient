import * as create from "./create";
import * as search from "./search";
import * as update from "./update";
import * as _delete from "./delete";

export const Invite = {
  Search: search.Search,
  Create: create.Create,
  Update: update.Update,
  Delete: _delete.Delete,
};
