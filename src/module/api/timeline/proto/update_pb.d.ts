import * as jspb from "google-protobuf";

export class UpdateI extends jspb.Message {
  getApi(): UpdateI_API | undefined;
  setApi(value?: UpdateI_API): UpdateI;
  hasApi(): boolean;
  clearApi(): UpdateI;

  getObj(): UpdateI_Obj | undefined;
  setObj(value?: UpdateI_Obj): UpdateI;
  hasObj(): boolean;
  clearObj(): UpdateI;

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
    obj?: UpdateI_Obj.AsObject;
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

  getProperty(): UpdateI_Obj_Property | undefined;
  setProperty(value?: UpdateI_Obj_Property): UpdateI_Obj;
  hasProperty(): boolean;
  clearProperty(): UpdateI_Obj;

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
    property?: UpdateI_Obj_Property.AsObject;
  };
}

export class UpdateI_Obj_Property extends jspb.Message {
  getDesc(): string;
  setDesc(value: string): UpdateI_Obj_Property;

  getName(): string;
  setName(value: string): UpdateI_Obj_Property;

  getStat(): string;
  setStat(value: string): UpdateI_Obj_Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateI_Obj_Property.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: UpdateI_Obj_Property
  ): UpdateI_Obj_Property.AsObject;
  static serializeBinaryToWriter(
    message: UpdateI_Obj_Property,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): UpdateI_Obj_Property;
  static deserializeBinaryFromReader(
    message: UpdateI_Obj_Property,
    reader: jspb.BinaryReader
  ): UpdateI_Obj_Property;
}

export namespace UpdateI_Obj_Property {
  export type AsObject = {
    desc: string;
    name: string;
    stat: string;
  };
}

export class UpdateO extends jspb.Message {
  getApi(): UpdateO_API | undefined;
  setApi(value?: UpdateO_API): UpdateO;
  hasApi(): boolean;
  clearApi(): UpdateO;

  getObj(): UpdateO_Obj | undefined;
  setObj(value?: UpdateO_Obj): UpdateO;
  hasObj(): boolean;
  clearObj(): UpdateO;

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
    obj?: UpdateO_Obj.AsObject;
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
