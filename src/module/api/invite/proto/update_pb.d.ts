import * as jspb from "google-protobuf";

export class UpdateI extends jspb.Message {
  getApi(): UpdateI_API | undefined;
  setApi(value?: UpdateI_API): UpdateI;
  hasApi(): boolean;
  clearApi(): UpdateI;

  getObjList(): Array<UpdateI_Obj>;
  setObjList(value: Array<UpdateI_Obj>): UpdateI;
  clearObjList(): UpdateI;
  addObj(value?: UpdateI_Obj, index?: number): UpdateI_Obj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateI.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateI): UpdateI.AsObject;
  static serializeBinaryToWriter(
    message: UpdateI,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateI;
  static deserializeBinaryFromReader(
    message: UpdateI,
    reader: jspb.BinaryReader
  ): UpdateI;
}

export namespace UpdateI {
  export type AsObject = {
    api?: UpdateI_API.AsObject;
    objList: Array<UpdateI_Obj.AsObject>;
  };
}

export class UpdateI_API extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateI_API.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateI_API
  ): UpdateI_API.AsObject;
  static serializeBinaryToWriter(
    message: UpdateI_API,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateI_API;
  static deserializeBinaryFromReader(
    message: UpdateI_API,
    reader: jspb.BinaryReader
  ): UpdateI_API;
}

export namespace UpdateI_API {
  export type AsObject = {};
}

export class UpdateI_Obj extends jspb.Message {
  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): UpdateI_Obj;

  getJsnpatchList(): Array<UpdateI_Obj_Jsnpatch>;
  setJsnpatchList(value: Array<UpdateI_Obj_Jsnpatch>): UpdateI_Obj;
  clearJsnpatchList(): UpdateI_Obj;
  addJsnpatch(
    value?: UpdateI_Obj_Jsnpatch,
    index?: number
  ): UpdateI_Obj_Jsnpatch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateI_Obj.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateI_Obj
  ): UpdateI_Obj.AsObject;
  static serializeBinaryToWriter(
    message: UpdateI_Obj,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateI_Obj;
  static deserializeBinaryFromReader(
    message: UpdateI_Obj,
    reader: jspb.BinaryReader
  ): UpdateI_Obj;
}

export namespace UpdateI_Obj {
  export type AsObject = {
    metadataMap: Array<[string, string]>;
    jsnpatchList: Array<UpdateI_Obj_Jsnpatch.AsObject>;
  };
}

export class UpdateI_Obj_Jsnpatch extends jspb.Message {
  getOpe(): string;
  setOpe(value: string): UpdateI_Obj_Jsnpatch;

  getPat(): string;
  setPat(value: string): UpdateI_Obj_Jsnpatch;

  getVal(): string;
  setVal(value: string): UpdateI_Obj_Jsnpatch;

  getValCase(): UpdateI_Obj_Jsnpatch.ValCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateI_Obj_Jsnpatch.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateI_Obj_Jsnpatch
  ): UpdateI_Obj_Jsnpatch.AsObject;
  static serializeBinaryToWriter(
    message: UpdateI_Obj_Jsnpatch,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateI_Obj_Jsnpatch;
  static deserializeBinaryFromReader(
    message: UpdateI_Obj_Jsnpatch,
    reader: jspb.BinaryReader
  ): UpdateI_Obj_Jsnpatch;
}

export namespace UpdateI_Obj_Jsnpatch {
  export type AsObject = {
    ope: string;
    pat: string;
    val: string;
  };

  export enum ValCase {
    _VAL_NOT_SET = 0,
    VAL = 3,
  }
}

export class UpdateO extends jspb.Message {
  getApi(): UpdateO_API | undefined;
  setApi(value?: UpdateO_API): UpdateO;
  hasApi(): boolean;
  clearApi(): UpdateO;

  getObjList(): Array<UpdateO_Obj>;
  setObjList(value: Array<UpdateO_Obj>): UpdateO;
  clearObjList(): UpdateO;
  addObj(value?: UpdateO_Obj, index?: number): UpdateO_Obj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateO.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateO): UpdateO.AsObject;
  static serializeBinaryToWriter(
    message: UpdateO,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateO;
  static deserializeBinaryFromReader(
    message: UpdateO,
    reader: jspb.BinaryReader
  ): UpdateO;
}

export namespace UpdateO {
  export type AsObject = {
    api?: UpdateO_API.AsObject;
    objList: Array<UpdateO_Obj.AsObject>;
  };
}

export class UpdateO_API extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateO_API.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateO_API
  ): UpdateO_API.AsObject;
  static serializeBinaryToWriter(
    message: UpdateO_API,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateO_API;
  static deserializeBinaryFromReader(
    message: UpdateO_API,
    reader: jspb.BinaryReader
  ): UpdateO_API;
}

export namespace UpdateO_API {
  export type AsObject = {};
}

export class UpdateO_Obj extends jspb.Message {
  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): UpdateO_Obj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateO_Obj.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateO_Obj
  ): UpdateO_Obj.AsObject;
  static serializeBinaryToWriter(
    message: UpdateO_Obj,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateO_Obj;
  static deserializeBinaryFromReader(
    message: UpdateO_Obj,
    reader: jspb.BinaryReader
  ): UpdateO_Obj;
}

export namespace UpdateO_Obj {
  export type AsObject = {
    metadataMap: Array<[string, string]>;
  };
}
