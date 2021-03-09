import * as jspb from "google-protobuf";

export class CreateI extends jspb.Message {
  getApi(): CreateI_API | undefined;
  setApi(value?: CreateI_API): CreateI;
  hasApi(): boolean;
  clearApi(): CreateI;

  getObjList(): Array<CreateI_Obj>;
  setObjList(value: Array<CreateI_Obj>): CreateI;
  clearObjList(): CreateI;
  addObj(value?: CreateI_Obj, index?: number): CreateI_Obj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateI.AsObject;
  static toObject(includeInstance: boolean, msg: CreateI): CreateI.AsObject;
  static serializeBinaryToWriter(
    message: CreateI,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateI;
  static deserializeBinaryFromReader(
    message: CreateI,
    reader: jspb.BinaryReader
  ): CreateI;
}

export namespace CreateI {
  export type AsObject = {
    api?: CreateI_API.AsObject;
    objList: Array<CreateI_Obj.AsObject>;
  };
}

export class CreateI_API extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateI_API.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateI_API
  ): CreateI_API.AsObject;
  static serializeBinaryToWriter(
    message: CreateI_API,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateI_API;
  static deserializeBinaryFromReader(
    message: CreateI_API,
    reader: jspb.BinaryReader
  ): CreateI_API;
}

export namespace CreateI_API {
  export type AsObject = {};
}

export class CreateI_Obj extends jspb.Message {
  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): CreateI_Obj;

  getProperty(): CreateI_Obj_Property | undefined;
  setProperty(value?: CreateI_Obj_Property): CreateI_Obj;
  hasProperty(): boolean;
  clearProperty(): CreateI_Obj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateI_Obj.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateI_Obj
  ): CreateI_Obj.AsObject;
  static serializeBinaryToWriter(
    message: CreateI_Obj,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateI_Obj;
  static deserializeBinaryFromReader(
    message: CreateI_Obj,
    reader: jspb.BinaryReader
  ): CreateI_Obj;
}

export namespace CreateI_Obj {
  export type AsObject = {
    metadataMap: Array<[string, string]>;
    property?: CreateI_Obj_Property.AsObject;
  };
}

export class CreateI_Obj_Property extends jspb.Message {
  getName(): string;
  setName(value: string): CreateI_Obj_Property;

  getTmlnList(): Array<string>;
  setTmlnList(value: Array<string>): CreateI_Obj_Property;
  clearTmlnList(): CreateI_Obj_Property;
  addTmln(value: string, index?: number): CreateI_Obj_Property;

  getUserList(): Array<string>;
  setUserList(value: Array<string>): CreateI_Obj_Property;
  clearUserList(): CreateI_Obj_Property;
  addUser(value: string, index?: number): CreateI_Obj_Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateI_Obj_Property.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateI_Obj_Property
  ): CreateI_Obj_Property.AsObject;
  static serializeBinaryToWriter(
    message: CreateI_Obj_Property,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateI_Obj_Property;
  static deserializeBinaryFromReader(
    message: CreateI_Obj_Property,
    reader: jspb.BinaryReader
  ): CreateI_Obj_Property;
}

export namespace CreateI_Obj_Property {
  export type AsObject = {
    name: string;
    tmlnList: Array<string>;
    userList: Array<string>;
  };
}

export class CreateO extends jspb.Message {
  getApi(): CreateO_API | undefined;
  setApi(value?: CreateO_API): CreateO;
  hasApi(): boolean;
  clearApi(): CreateO;

  getObjList(): Array<CreateO_Obj>;
  setObjList(value: Array<CreateO_Obj>): CreateO;
  clearObjList(): CreateO;
  addObj(value?: CreateO_Obj, index?: number): CreateO_Obj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateO.AsObject;
  static toObject(includeInstance: boolean, msg: CreateO): CreateO.AsObject;
  static serializeBinaryToWriter(
    message: CreateO,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateO;
  static deserializeBinaryFromReader(
    message: CreateO,
    reader: jspb.BinaryReader
  ): CreateO;
}

export namespace CreateO {
  export type AsObject = {
    api?: CreateO_API.AsObject;
    objList: Array<CreateO_Obj.AsObject>;
  };
}

export class CreateO_API extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateO_API.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateO_API
  ): CreateO_API.AsObject;
  static serializeBinaryToWriter(
    message: CreateO_API,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateO_API;
  static deserializeBinaryFromReader(
    message: CreateO_API,
    reader: jspb.BinaryReader
  ): CreateO_API;
}

export namespace CreateO_API {
  export type AsObject = {};
}

export class CreateO_Obj extends jspb.Message {
  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): CreateO_Obj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateO_Obj.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateO_Obj
  ): CreateO_Obj.AsObject;
  static serializeBinaryToWriter(
    message: CreateO_Obj,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateO_Obj;
  static deserializeBinaryFromReader(
    message: CreateO_Obj,
    reader: jspb.BinaryReader
  ): CreateO_Obj;
}

export namespace CreateO_Obj {
  export type AsObject = {
    metadataMap: Array<[string, string]>;
  };
}
