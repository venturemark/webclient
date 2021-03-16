import * as jspb from "google-protobuf";

export class DeleteI extends jspb.Message {
  getApi(): DeleteI_API | undefined;
  setApi(value?: DeleteI_API): DeleteI;
  hasApi(): boolean;
  clearApi(): DeleteI;

  getObjList(): Array<DeleteI_Obj>;
  setObjList(value: Array<DeleteI_Obj>): DeleteI;
  clearObjList(): DeleteI;
  addObj(value?: DeleteI_Obj, index?: number): DeleteI_Obj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteI.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteI): DeleteI.AsObject;
  static serializeBinaryToWriter(
    message: DeleteI,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteI;
  static deserializeBinaryFromReader(
    message: DeleteI,
    reader: jspb.BinaryReader
  ): DeleteI;
}

export namespace DeleteI {
  export type AsObject = {
    api?: DeleteI_API.AsObject;
    objList: Array<DeleteI_Obj.AsObject>;
  };
}

export class DeleteI_API extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteI_API.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeleteI_API
  ): DeleteI_API.AsObject;
  static serializeBinaryToWriter(
    message: DeleteI_API,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteI_API;
  static deserializeBinaryFromReader(
    message: DeleteI_API,
    reader: jspb.BinaryReader
  ): DeleteI_API;
}

export namespace DeleteI_API {
  export type AsObject = {};
}

export class DeleteI_Obj extends jspb.Message {
  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): DeleteI_Obj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteI_Obj.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeleteI_Obj
  ): DeleteI_Obj.AsObject;
  static serializeBinaryToWriter(
    message: DeleteI_Obj,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteI_Obj;
  static deserializeBinaryFromReader(
    message: DeleteI_Obj,
    reader: jspb.BinaryReader
  ): DeleteI_Obj;
}

export namespace DeleteI_Obj {
  export type AsObject = {
    metadataMap: Array<[string, string]>;
  };
}

export class DeleteO extends jspb.Message {
  getApi(): DeleteO_API | undefined;
  setApi(value?: DeleteO_API): DeleteO;
  hasApi(): boolean;
  clearApi(): DeleteO;

  getObjList(): Array<DeleteO_Obj>;
  setObjList(value: Array<DeleteO_Obj>): DeleteO;
  clearObjList(): DeleteO;
  addObj(value?: DeleteO_Obj, index?: number): DeleteO_Obj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteO.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteO): DeleteO.AsObject;
  static serializeBinaryToWriter(
    message: DeleteO,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteO;
  static deserializeBinaryFromReader(
    message: DeleteO,
    reader: jspb.BinaryReader
  ): DeleteO;
}

export namespace DeleteO {
  export type AsObject = {
    api?: DeleteO_API.AsObject;
    objList: Array<DeleteO_Obj.AsObject>;
  };
}

export class DeleteO_API extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteO_API.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeleteO_API
  ): DeleteO_API.AsObject;
  static serializeBinaryToWriter(
    message: DeleteO_API,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteO_API;
  static deserializeBinaryFromReader(
    message: DeleteO_API,
    reader: jspb.BinaryReader
  ): DeleteO_API;
}

export namespace DeleteO_API {
  export type AsObject = {};
}

export class DeleteO_Obj extends jspb.Message {
  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): DeleteO_Obj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteO_Obj.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DeleteO_Obj
  ): DeleteO_Obj.AsObject;
  static serializeBinaryToWriter(
    message: DeleteO_Obj,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DeleteO_Obj;
  static deserializeBinaryFromReader(
    message: DeleteO_Obj,
    reader: jspb.BinaryReader
  ): DeleteO_Obj;
}

export namespace DeleteO_Obj {
  export type AsObject = {
    metadataMap: Array<[string, string]>;
  };
}
