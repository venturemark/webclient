import * as update from "module/api/update";
import * as timeline from "module/api//timeline";
import * as texUpd from "module/api/texupd";
import * as message from "module/api/message";
import * as venture from "module/api/venture";
import * as user from "module/api/user";
import * as role from "module/api/role";

export const API = {
  User: user.User,
  Venture: venture.Venture,
  Update: update.Update,
  Timeline: timeline.Timeline,
  TexUpd: texUpd.TexUpd,
  Message: message.Message,
  Role: role.Role,
};
