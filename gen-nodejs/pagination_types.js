//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
if (typeof nexx === 'undefined') {
  nexx = {};
}
if (typeof nexx.shared === 'undefined') {
  nexx.shared = {};
}
nexx.shared.Pagination = module.exports.Pagination = function(args) {
  this.pageSize = null;
  this.pageNumber = null;
  this.count = null;
  this.totalPages = null;
  this.total = null;
  if (args) {
    if (args.pageSize !== undefined && args.pageSize !== null) {
      this.pageSize = args.pageSize;
    }
    if (args.pageNumber !== undefined && args.pageNumber !== null) {
      this.pageNumber = args.pageNumber;
    }
    if (args.count !== undefined && args.count !== null) {
      this.count = args.count;
    }
    if (args.totalPages !== undefined && args.totalPages !== null) {
      this.totalPages = args.totalPages;
    }
    if (args.total !== undefined && args.total !== null) {
      this.total = args.total;
    }
  }
};
nexx.shared.Pagination.prototype = {};
nexx.shared.Pagination.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.pageSize = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.pageNumber = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.count = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.totalPages = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.total = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

nexx.shared.Pagination.prototype.write = function(output) {
  output.writeStructBegin('Pagination');
  if (this.pageSize !== null && this.pageSize !== undefined) {
    output.writeFieldBegin('pageSize', Thrift.Type.I32, 1);
    output.writeI32(this.pageSize);
    output.writeFieldEnd();
  }
  if (this.pageNumber !== null && this.pageNumber !== undefined) {
    output.writeFieldBegin('pageNumber', Thrift.Type.I32, 2);
    output.writeI32(this.pageNumber);
    output.writeFieldEnd();
  }
  if (this.count !== null && this.count !== undefined) {
    output.writeFieldBegin('count', Thrift.Type.I32, 3);
    output.writeI32(this.count);
    output.writeFieldEnd();
  }
  if (this.totalPages !== null && this.totalPages !== undefined) {
    output.writeFieldBegin('totalPages', Thrift.Type.I32, 4);
    output.writeI32(this.totalPages);
    output.writeFieldEnd();
  }
  if (this.total !== null && this.total !== undefined) {
    output.writeFieldBegin('total', Thrift.Type.I32, 5);
    output.writeI32(this.total);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

nexx.shared.PagingQuery = module.exports.PagingQuery = function(args) {
  this.order = null;
  this.pageSize = null;
  this.pageNumber = null;
  this.includes = null;
  if (args) {
    if (args.order !== undefined && args.order !== null) {
      this.order = args.order;
    }
    if (args.pageSize !== undefined && args.pageSize !== null) {
      this.pageSize = args.pageSize;
    }
    if (args.pageNumber !== undefined && args.pageNumber !== null) {
      this.pageNumber = args.pageNumber;
    }
    if (args.includes !== undefined && args.includes !== null) {
      this.includes = Thrift.copyList(args.includes, [null]);
    }
  }
};
nexx.shared.PagingQuery.prototype = {};
nexx.shared.PagingQuery.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.order = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.pageSize = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.pageNumber = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.includes = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString();
          this.includes.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

nexx.shared.PagingQuery.prototype.write = function(output) {
  output.writeStructBegin('PagingQuery');
  if (this.order !== null && this.order !== undefined) {
    output.writeFieldBegin('order', Thrift.Type.STRING, 1);
    output.writeString(this.order);
    output.writeFieldEnd();
  }
  if (this.pageSize !== null && this.pageSize !== undefined) {
    output.writeFieldBegin('pageSize', Thrift.Type.I32, 2);
    output.writeI32(this.pageSize);
    output.writeFieldEnd();
  }
  if (this.pageNumber !== null && this.pageNumber !== undefined) {
    output.writeFieldBegin('pageNumber', Thrift.Type.I32, 3);
    output.writeI32(this.pageNumber);
    output.writeFieldEnd();
  }
  if (this.includes !== null && this.includes !== undefined) {
    output.writeFieldBegin('includes', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRING, this.includes.length);
    for (var iter7 in this.includes)
    {
      if (this.includes.hasOwnProperty(iter7))
      {
        iter7 = this.includes[iter7];
        output.writeString(iter7);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

