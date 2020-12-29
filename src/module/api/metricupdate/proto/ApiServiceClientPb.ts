/**
 * @fileoverview gRPC-Web generated client stub for metupd
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

import * as grpcWeb from "grpc-web";

import * as pbf_metupd_create_pb from "../../pbf/metupd/create_pb";
import * as pbf_metupd_delete_pb from "../../pbf/metupd/delete_pb";
import * as pbf_metupd_search_pb from "../../pbf/metupd/search_pb";
import * as pbf_metupd_update_pb from "../../pbf/metupd/update_pb";

export class APIClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string };
  options_: null | { [index: string]: any };

  constructor(
    hostname: string,
    credentials?: null | { [index: string]: string },
    options?: null | { [index: string]: any }
  ) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options["format"] = "text";

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    pbf_metupd_create_pb.CreateO,
    (request: pbf_metupd_create_pb.CreateI) => {
      return request.serializeBinary();
    },
    pbf_metupd_create_pb.CreateO.deserializeBinary
  );

  create(
    request: pbf_metupd_create_pb.CreateI,
    metadata: grpcWeb.Metadata | null
  ): Promise<pbf_metupd_create_pb.CreateO>;

  create(
    request: pbf_metupd_create_pb.CreateI,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.Error,
      response: pbf_metupd_create_pb.CreateO
    ) => void
  ): grpcWeb.ClientReadableStream<pbf_metupd_create_pb.CreateO>;

  create(
    request: pbf_metupd_create_pb.CreateI,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.Error,
      response: pbf_metupd_create_pb.CreateO
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/metupd.API/Create",
        request,
        metadata || {},
        this.methodInfoCreate,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/metupd.API/Create",
      request,
      metadata || {},
      this.methodInfoCreate
    );
  }

  methodInfoDelete = new grpcWeb.AbstractClientBase.MethodInfo(
    pbf_metupd_delete_pb.DeleteO,
    (request: pbf_metupd_delete_pb.DeleteI) => {
      return request.serializeBinary();
    },
    pbf_metupd_delete_pb.DeleteO.deserializeBinary
  );

  delete(
    request: pbf_metupd_delete_pb.DeleteI,
    metadata: grpcWeb.Metadata | null
  ): Promise<pbf_metupd_delete_pb.DeleteO>;

  delete(
    request: pbf_metupd_delete_pb.DeleteI,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.Error,
      response: pbf_metupd_delete_pb.DeleteO
    ) => void
  ): grpcWeb.ClientReadableStream<pbf_metupd_delete_pb.DeleteO>;

  delete(
    request: pbf_metupd_delete_pb.DeleteI,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.Error,
      response: pbf_metupd_delete_pb.DeleteO
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/metupd.API/Delete",
        request,
        metadata || {},
        this.methodInfoDelete,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/metupd.API/Delete",
      request,
      metadata || {},
      this.methodInfoDelete
    );
  }

  methodInfoSearch = new grpcWeb.AbstractClientBase.MethodInfo(
    pbf_metupd_search_pb.SearchO,
    (request: pbf_metupd_search_pb.SearchI) => {
      return request.serializeBinary();
    },
    pbf_metupd_search_pb.SearchO.deserializeBinary
  );

  search(
    request: pbf_metupd_search_pb.SearchI,
    metadata: grpcWeb.Metadata | null
  ): Promise<pbf_metupd_search_pb.SearchO>;

  search(
    request: pbf_metupd_search_pb.SearchI,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.Error,
      response: pbf_metupd_search_pb.SearchO
    ) => void
  ): grpcWeb.ClientReadableStream<pbf_metupd_search_pb.SearchO>;

  search(
    request: pbf_metupd_search_pb.SearchI,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.Error,
      response: pbf_metupd_search_pb.SearchO
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/metupd.API/Search",
        request,
        metadata || {},
        this.methodInfoSearch,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/metupd.API/Search",
      request,
      metadata || {},
      this.methodInfoSearch
    );
  }

  methodInfoUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    pbf_metupd_update_pb.UpdateO,
    (request: pbf_metupd_update_pb.UpdateI) => {
      return request.serializeBinary();
    },
    pbf_metupd_update_pb.UpdateO.deserializeBinary
  );

  update(
    request: pbf_metupd_update_pb.UpdateI,
    metadata: grpcWeb.Metadata | null
  ): Promise<pbf_metupd_update_pb.UpdateO>;

  update(
    request: pbf_metupd_update_pb.UpdateI,
    metadata: grpcWeb.Metadata | null,
    callback: (
      err: grpcWeb.Error,
      response: pbf_metupd_update_pb.UpdateO
    ) => void
  ): grpcWeb.ClientReadableStream<pbf_metupd_update_pb.UpdateO>;

  update(
    request: pbf_metupd_update_pb.UpdateI,
    metadata: grpcWeb.Metadata | null,
    callback?: (
      err: grpcWeb.Error,
      response: pbf_metupd_update_pb.UpdateO
    ) => void
  ) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ + "/metupd.API/Update",
        request,
        metadata || {},
        this.methodInfoUpdate,
        callback
      );
    }
    return this.client_.unaryCall(
      this.hostname_ + "/metupd.API/Update",
      request,
      metadata || {},
      this.methodInfoUpdate
    );
  }
}
