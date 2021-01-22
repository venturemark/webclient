import * as jspb from 'google-protobuf';

export class CreateI extends jspb.Message {
  getApi(): CreateI_API | undefined;
  setApi(value?: CreateI_API): CreateI;
  hasApi(): boolean;
  clearApi(): CreateI;

  getObj(): CreateI_Obj | undefined;
  setObj(value?: CreateI_Obj): CreateI;
  hasObj(): boolean;
  clearObj(): CreateI;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateI.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateI,
  ): CreateI.AsObject;
  static serializeBinaryToWriter(
    message: CreateI,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateI;
  static deserializeBinaryFromReader(
    message: CreateI,
    reader: jspb.BinaryReader,
  ): CreateI;
}

export namespace CreateI {
  export type AsObject = {
    api?: CreateI_API.AsObject;
    obj?: CreateI_Obj.AsObject;
  };
}

export class CreateI_API extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateI_API.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateI_API,
  ): CreateI_API.AsObject;
  static serializeBinaryToWriter(
    message: CreateI_API,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateI_API;
  static deserializeBinaryFromReader(
    message: CreateI_API,
    reader: jspb.BinaryReader,
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
    msg: CreateI_Obj,
  ): CreateI_Obj.AsObject;
  static serializeBinaryToWriter(
    message: CreateI_Obj,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateI_Obj;
  static deserializeBinaryFromReader(
    message: CreateI_Obj,
    reader: jspb.BinaryReader,
  ): CreateI_Obj;
}

export namespace CreateI_Obj {
  export type AsObject = {
    metadataMap: Array<[string, string]>;
    property?: CreateI_Obj_Property.AsObject;
  };
}

export class CreateI_Obj_Property extends jspb.Message {
  getDataList(): Array<CreateI_Obj_Property_Data>;
  setDataList(
    value: Array<CreateI_Obj_Property_Data>,
  ): CreateI_Obj_Property;
  clearDataList(): CreateI_Obj_Property;
  addData(
    value?: CreateI_Obj_Property_Data,
    index?: number,
  ): CreateI_Obj_Property_Data;

  getText(): string;
  setText(value: string): CreateI_Obj_Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateI_Obj_Property.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateI_Obj_Property,
  ): CreateI_Obj_Property.AsObject;
  static serializeBinaryToWriter(
    message: CreateI_Obj_Property,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateI_Obj_Property;
  static deserializeBinaryFromReader(
    message: CreateI_Obj_Property,
    reader: jspb.BinaryReader,
  ): CreateI_Obj_Property;
}

export namespace CreateI_Obj_Property {
  export type AsObject = {
    dataList: Array<CreateI_Obj_Property_Data.AsObject>;
    text: string;
  };
}

export class CreateI_Obj_Property_Data extends jspb.Message {
  getSpace(): string;
  setSpace(value: string): CreateI_Obj_Property_Data;

  getValueList(): Array<number>;
  setValueList(value: Array<number>): CreateI_Obj_Property_Data;
  clearValueList(): CreateI_Obj_Property_Data;
  addValue(value: number, index?: number): CreateI_Obj_Property_Data;

  serializeBinary(): Uint8Array;
  toObject(
    includeInstance?: boolean,
  ): CreateI_Obj_Property_Data.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateI_Obj_Property_Data,
  ): CreateI_Obj_Property_Data.AsObject;
  static serializeBinaryToWriter(
    message: CreateI_Obj_Property_Data,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(
    bytes: Uint8Array,
  ): CreateI_Obj_Property_Data;
  static deserializeBinaryFromReader(
    message: CreateI_Obj_Property_Data,
    reader: jspb.BinaryReader,
  ): CreateI_Obj_Property_Data;
}

export namespace CreateI_Obj_Property_Data {
  export type AsObject = {
    space: string;
    valueList: Array<number>;
  };
}

export class CreateO extends jspb.Message {
  getApi(): CreateO_API | undefined;
  setApi(value?: CreateO_API): CreateO;
  hasApi(): boolean;
  clearApi(): CreateO;

  getObj(): CreateO_Obj | undefined;
  setObj(value?: CreateO_Obj): CreateO;
  hasObj(): boolean;
  clearObj(): CreateO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateO.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateO,
  ): CreateO.AsObject;
  static serializeBinaryToWriter(
    message: CreateO,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateO;
  static deserializeBinaryFromReader(
    message: CreateO,
    reader: jspb.BinaryReader,
  ): CreateO;
}

export namespace CreateO {
  export type AsObject = {
    api?: CreateO_API.AsObject;
    obj?: CreateO_Obj.AsObject;
  };
}

export class CreateO_API extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateO_API.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateO_API,
  ): CreateO_API.AsObject;
  static serializeBinaryToWriter(
    message: CreateO_API,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateO_API;
  static deserializeBinaryFromReader(
    message: CreateO_API,
    reader: jspb.BinaryReader,
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
    msg: CreateO_Obj,
  ): CreateO_Obj.AsObject;
  static serializeBinaryToWriter(
    message: CreateO_Obj,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateO_Obj;
  static deserializeBinaryFromReader(
    message: CreateO_Obj,
    reader: jspb.BinaryReader,
  ): CreateO_Obj;
}

export namespace CreateO_Obj {
  export type AsObject = {
    metadataMap: Array<[string, string]>;
  };
}
