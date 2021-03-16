import * as update from "module/api/update";
import * as timeline from "module/api//timeline";
import * as texUpd from "module/api/texupd";
import * as audience from "module/api/audience";
import * as message from "module/api/message";
import * as venture from "module/api/venture";
import * as user from "module/api/user";

export const API = {
  User: user.User,
  Venture: venture.Venture,
  Audience: audience.Audience,
  Update: update.Update,
  Timeline: timeline.Timeline,
  TexUpd: texUpd.TexUpd,
  Message: message.Message,
};
