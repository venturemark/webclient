import * as jspb from "google-protobuf";

export class SearchI extends jspb.Message {
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
  export type AsObject = {};
}

export class SearchO extends jspb.Message {
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
  export type AsObject = {};
}
