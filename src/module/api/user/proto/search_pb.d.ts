import * as jspb from "google-protobuf";

export class SearchI extends jspb.Message {
  getApi(): SearchI_API | undefined;
  setApi(value?: SearchI_API): SearchI;
  hasApi(): boolean;
  clearApi(): SearchI;

  getObjList(): Array<SearchI_Obj>;
  setObjList(value: Array<SearchI_Obj>): SearchI;
  clearObjList(): SearchI;
  addObj(value?: SearchI_Obj, index?: number): SearchI_Obj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchI.AsObject;
  static toObject(includeInstance: boolean, msg: SearchI): SearchI.AsObject;
  static serializeBinaryToWriter(
    message: SearchI,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchI;
  static deserializeBinaryFromReader(
    message: SearchI,
    reader: jspb.BinaryReader
  ): SearchI;
}

export namespace SearchI {
  export type AsObject = {
    api?: SearchI_API.AsObject;
    objList: Array<SearchI_Obj.AsObject>;
  };
}

export class SearchI_API extends jspb.Message {
  getChunking(): SearchI_API_Chunking | undefined;
  setChunking(value?: SearchI_API_Chunking): SearchI_API;
  hasChunking(): boolean;
  clearChunking(): SearchI_API;

  getOperatorList(): Array<string>;
  setOperatorList(value: Array<string>): SearchI_API;
  clearOperatorList(): SearchI_API;
  addOperator(value: string, index?: number): SearchI_API;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchI_API.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchI_API
  ): SearchI_API.AsObject;
  static serializeBinaryToWriter(
    message: SearchI_API,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchI_API;
  static deserializeBinaryFromReader(
    message: SearchI_API,
    reader: jspb.BinaryReader
  ): SearchI_API;
}

export namespace SearchI_API {
  export type AsObject = {
    chunking?: SearchI_API_Chunking.AsObject;
    operatorList: Array<string>;
  };
}

export class SearchI_API_Chunking extends jspb.Message {
  getPointer(): string;
  setPointer(value: string): SearchI_API_Chunking;

  getPerpage(): string;
  setPerpage(value: string): SearchI_API_Chunking;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchI_API_Chunking.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchI_API_Chunking
  ): SearchI_API_Chunking.AsObject;
  static serializeBinaryToWriter(
    message: SearchI_API_Chunking,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchI_API_Chunking;
  static deserializeBinaryFromReader(
    message: SearchI_API_Chunking,
    reader: jspb.BinaryReader
  ): SearchI_API_Chunking;
}

export namespace SearchI_API_Chunking {
  export type AsObject = {
    pointer: string;
    perpage: string;
  };
}

export class SearchI_Obj extends jspb.Message {
  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): SearchI_Obj;

  getProperty(): SearchI_Obj_Property | undefined;
  setProperty(value?: SearchI_Obj_Property): SearchI_Obj;
  hasProperty(): boolean;
  clearProperty(): SearchI_Obj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchI_Obj.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchI_Obj
  ): SearchI_Obj.AsObject;
  static serializeBinaryToWriter(
    message: SearchI_Obj,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchI_Obj;
  static deserializeBinaryFromReader(
    message: SearchI_Obj,
    reader: jspb.BinaryReader
  ): SearchI_Obj;
}

export namespace SearchI_Obj {
  export type AsObject = {
    metadataMap: Array<[string, string]>;
    property?: SearchI_Obj_Property.AsObject;
  };
}

export class SearchI_Obj_Property extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchI_Obj_Property.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchI_Obj_Property
  ): SearchI_Obj_Property.AsObject;
  static serializeBinaryToWriter(
    message: SearchI_Obj_Property,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchI_Obj_Property;
  static deserializeBinaryFromReader(
    message: SearchI_Obj_Property,
    reader: jspb.BinaryReader
  ): SearchI_Obj_Property;
}

export namespace SearchI_Obj_Property {
  export type AsObject = {};
}

export class SearchO extends jspb.Message {
  getApi(): SearchO_API | undefined;
  setApi(value?: SearchO_API): SearchO;
  hasApi(): boolean;
  clearApi(): SearchO;

  getObjList(): Array<SearchO_Obj>;
  setObjList(value: Array<SearchO_Obj>): SearchO;
  clearObjList(): SearchO;
  addObj(value?: SearchO_Obj, index?: number): SearchO_Obj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchO.AsObject;
  static toObject(includeInstance: boolean, msg: SearchO): SearchO.AsObject;
  static serializeBinaryToWriter(
    message: SearchO,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchO;
  static deserializeBinaryFromReader(
    message: SearchO,
    reader: jspb.BinaryReader
  ): SearchO;
}

export namespace SearchO {
  export type AsObject = {
    api?: SearchO_API.AsObject;
    objList: Array<SearchO_Obj.AsObject>;
  };
}

export class SearchO_API extends jspb.Message {
  getChunking(): SearchO_API_Chunking | undefined;
  setChunking(value?: SearchO_API_Chunking): SearchO_API;
  hasChunking(): boolean;
  clearChunking(): SearchO_API;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchO_API.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchO_API
  ): SearchO_API.AsObject;
  static serializeBinaryToWriter(
    message: SearchO_API,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchO_API;
  static deserializeBinaryFromReader(
    message: SearchO_API,
    reader: jspb.BinaryReader
  ): SearchO_API;
}

export namespace SearchO_API {
  export type AsObject = {
    chunking?: SearchO_API_Chunking.AsObject;
  };
}

export class SearchO_API_Chunking extends jspb.Message {
  getPointer(): string;
  setPointer(value: string): SearchO_API_Chunking;

  getPerpage(): string;
  setPerpage(value: string): SearchO_API_Chunking;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchO_API_Chunking.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchO_API_Chunking
  ): SearchO_API_Chunking.AsObject;
  static serializeBinaryToWriter(
    message: SearchO_API_Chunking,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchO_API_Chunking;
  static deserializeBinaryFromReader(
    message: SearchO_API_Chunking,
    reader: jspb.BinaryReader
  ): SearchO_API_Chunking;
}

export namespace SearchO_API_Chunking {
  export type AsObject = {
    pointer: string;
    perpage: string;
  };
}

export class SearchO_Obj extends jspb.Message {
  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): SearchO_Obj;

  getProperty(): SearchO_Obj_Property | undefined;
  setProperty(value?: SearchO_Obj_Property): SearchO_Obj;
  hasProperty(): boolean;
  clearProperty(): SearchO_Obj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchO_Obj.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchO_Obj
  ): SearchO_Obj.AsObject;
  static serializeBinaryToWriter(
    message: SearchO_Obj,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchO_Obj;
  static deserializeBinaryFromReader(
    message: SearchO_Obj,
    reader: jspb.BinaryReader
  ): SearchO_Obj;
}

export namespace SearchO_Obj {
  export type AsObject = {
    metadataMap: Array<[string, string]>;
    property?: SearchO_Obj_Property.AsObject;
  };
}

export class SearchO_Obj_Property extends jspb.Message {
  getDesc(): string;
  setDesc(value: string): SearchO_Obj_Property;

  getMail(): string;
  setMail(value: string): SearchO_Obj_Property;

  getName(): string;
  setName(value: string): SearchO_Obj_Property;

  getProfList(): Array<SearchO_Obj_Property_Prof>;
  setProfList(value: Array<SearchO_Obj_Property_Prof>): SearchO_Obj_Property;
  clearProfList(): SearchO_Obj_Property;
  addProf(
    value?: SearchO_Obj_Property_Prof,
    index?: number
  ): SearchO_Obj_Property_Prof;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchO_Obj_Property.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchO_Obj_Property
  ): SearchO_Obj_Property.AsObject;
  static serializeBinaryToWriter(
    message: SearchO_Obj_Property,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchO_Obj_Property;
  static deserializeBinaryFromReader(
    message: SearchO_Obj_Property,
    reader: jspb.BinaryReader
  ): SearchO_Obj_Property;
}

export namespace SearchO_Obj_Property {
  export type AsObject = {
    desc: string;
    mail: string;
    name: string;
    profList: Array<SearchO_Obj_Property_Prof.AsObject>;
  };
}

export class SearchO_Obj_Property_Prof extends jspb.Message {
  getDesc(): string;
  setDesc(value: string): SearchO_Obj_Property_Prof;

  getVent(): string;
  setVent(value: string): SearchO_Obj_Property_Prof;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchO_Obj_Property_Prof.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SearchO_Obj_Property_Prof
  ): SearchO_Obj_Property_Prof.AsObject;
  static serializeBinaryToWriter(
    message: SearchO_Obj_Property_Prof,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SearchO_Obj_Property_Prof;
  static deserializeBinaryFromReader(
    message: SearchO_Obj_Property_Prof,
    reader: jspb.BinaryReader
  ): SearchO_Obj_Property_Prof;
}

export namespace SearchO_Obj_Property_Prof {
  export type AsObject = {
    desc: string;
    vent: string;
  };
}
