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
nexx.shared.Country = module.exports.Country = function(args) {
  this.countryCode = null;
  this.iso3 = null;
  this.iso_num = null;
  this.fips = null;
  this.name = null;
  this.capital = null;
  this.areaKm2 = null;
  this.population = null;
  this.continent = null;
  this.tld = null;
  this.currencyCode = null;
  this.currencyName = null;
  this.phoneCode = null;
  this.postalCodeFormat = null;
  this.postalCodeRegex = null;
  this.neighbours = null;
  this.equivalenFipsCode = null;
  this.gisId = null;
  this.metadata = null;
  if (args) {
    if (args.countryCode !== undefined && args.countryCode !== null) {
      this.countryCode = args.countryCode;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field countryCode is unset!');
    }
    if (args.iso3 !== undefined && args.iso3 !== null) {
      this.iso3 = args.iso3;
    }
    if (args.iso_num !== undefined && args.iso_num !== null) {
      this.iso_num = args.iso_num;
    }
    if (args.fips !== undefined && args.fips !== null) {
      this.fips = args.fips;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.capital !== undefined && args.capital !== null) {
      this.capital = args.capital;
    }
    if (args.areaKm2 !== undefined && args.areaKm2 !== null) {
      this.areaKm2 = args.areaKm2;
    }
    if (args.population !== undefined && args.population !== null) {
      this.population = args.population;
    }
    if (args.continent !== undefined && args.continent !== null) {
      this.continent = args.continent;
    }
    if (args.tld !== undefined && args.tld !== null) {
      this.tld = args.tld;
    }
    if (args.currencyCode !== undefined && args.currencyCode !== null) {
      this.currencyCode = args.currencyCode;
    }
    if (args.currencyName !== undefined && args.currencyName !== null) {
      this.currencyName = args.currencyName;
    }
    if (args.phoneCode !== undefined && args.phoneCode !== null) {
      this.phoneCode = args.phoneCode;
    }
    if (args.postalCodeFormat !== undefined && args.postalCodeFormat !== null) {
      this.postalCodeFormat = args.postalCodeFormat;
    }
    if (args.postalCodeRegex !== undefined && args.postalCodeRegex !== null) {
      this.postalCodeRegex = args.postalCodeRegex;
    }
    if (args.neighbours !== undefined && args.neighbours !== null) {
      this.neighbours = args.neighbours;
    }
    if (args.equivalenFipsCode !== undefined && args.equivalenFipsCode !== null) {
      this.equivalenFipsCode = args.equivalenFipsCode;
    }
    if (args.gisId !== undefined && args.gisId !== null) {
      this.gisId = args.gisId;
    }
    if (args.metadata !== undefined && args.metadata !== null) {
      this.metadata = args.metadata;
    }
  }
};
nexx.shared.Country.prototype = {};
nexx.shared.Country.prototype.read = function(input) {
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
        this.countryCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.iso3 = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.iso_num = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.fips = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.capital = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.DOUBLE) {
        this.areaKm2 = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I32) {
        this.population = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this.continent = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.tld = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.currencyCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.currencyName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.STRING) {
        this.phoneCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.STRING) {
        this.postalCodeFormat = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.STRING) {
        this.postalCodeRegex = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 16:
      if (ftype == Thrift.Type.STRING) {
        this.neighbours = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 17:
      if (ftype == Thrift.Type.STRING) {
        this.equivalenFipsCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 18:
      if (ftype == Thrift.Type.STRING) {
        this.gisId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 19:
      if (ftype == Thrift.Type.STRING) {
        this.metadata = input.readString();
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

nexx.shared.Country.prototype.write = function(output) {
  output.writeStructBegin('Country');
  if (this.countryCode !== null && this.countryCode !== undefined) {
    output.writeFieldBegin('countryCode', Thrift.Type.STRING, 1);
    output.writeString(this.countryCode);
    output.writeFieldEnd();
  }
  if (this.iso3 !== null && this.iso3 !== undefined) {
    output.writeFieldBegin('iso3', Thrift.Type.STRING, 2);
    output.writeString(this.iso3);
    output.writeFieldEnd();
  }
  if (this.iso_num !== null && this.iso_num !== undefined) {
    output.writeFieldBegin('iso_num', Thrift.Type.I32, 3);
    output.writeI32(this.iso_num);
    output.writeFieldEnd();
  }
  if (this.fips !== null && this.fips !== undefined) {
    output.writeFieldBegin('fips', Thrift.Type.STRING, 4);
    output.writeString(this.fips);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 5);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.capital !== null && this.capital !== undefined) {
    output.writeFieldBegin('capital', Thrift.Type.STRING, 6);
    output.writeString(this.capital);
    output.writeFieldEnd();
  }
  if (this.areaKm2 !== null && this.areaKm2 !== undefined) {
    output.writeFieldBegin('areaKm2', Thrift.Type.DOUBLE, 7);
    output.writeDouble(this.areaKm2);
    output.writeFieldEnd();
  }
  if (this.population !== null && this.population !== undefined) {
    output.writeFieldBegin('population', Thrift.Type.I32, 8);
    output.writeI32(this.population);
    output.writeFieldEnd();
  }
  if (this.continent !== null && this.continent !== undefined) {
    output.writeFieldBegin('continent', Thrift.Type.STRING, 9);
    output.writeString(this.continent);
    output.writeFieldEnd();
  }
  if (this.tld !== null && this.tld !== undefined) {
    output.writeFieldBegin('tld', Thrift.Type.STRING, 10);
    output.writeString(this.tld);
    output.writeFieldEnd();
  }
  if (this.currencyCode !== null && this.currencyCode !== undefined) {
    output.writeFieldBegin('currencyCode', Thrift.Type.STRING, 11);
    output.writeString(this.currencyCode);
    output.writeFieldEnd();
  }
  if (this.currencyName !== null && this.currencyName !== undefined) {
    output.writeFieldBegin('currencyName', Thrift.Type.STRING, 12);
    output.writeString(this.currencyName);
    output.writeFieldEnd();
  }
  if (this.phoneCode !== null && this.phoneCode !== undefined) {
    output.writeFieldBegin('phoneCode', Thrift.Type.STRING, 13);
    output.writeString(this.phoneCode);
    output.writeFieldEnd();
  }
  if (this.postalCodeFormat !== null && this.postalCodeFormat !== undefined) {
    output.writeFieldBegin('postalCodeFormat', Thrift.Type.STRING, 14);
    output.writeString(this.postalCodeFormat);
    output.writeFieldEnd();
  }
  if (this.postalCodeRegex !== null && this.postalCodeRegex !== undefined) {
    output.writeFieldBegin('postalCodeRegex', Thrift.Type.STRING, 15);
    output.writeString(this.postalCodeRegex);
    output.writeFieldEnd();
  }
  if (this.neighbours !== null && this.neighbours !== undefined) {
    output.writeFieldBegin('neighbours', Thrift.Type.STRING, 16);
    output.writeString(this.neighbours);
    output.writeFieldEnd();
  }
  if (this.equivalenFipsCode !== null && this.equivalenFipsCode !== undefined) {
    output.writeFieldBegin('equivalenFipsCode', Thrift.Type.STRING, 17);
    output.writeString(this.equivalenFipsCode);
    output.writeFieldEnd();
  }
  if (this.gisId !== null && this.gisId !== undefined) {
    output.writeFieldBegin('gisId', Thrift.Type.STRING, 18);
    output.writeString(this.gisId);
    output.writeFieldEnd();
  }
  if (this.metadata !== null && this.metadata !== undefined) {
    output.writeFieldBegin('metadata', Thrift.Type.STRING, 19);
    output.writeString(this.metadata);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

nexx.shared.CountryOption = module.exports.CountryOption = function(args) {
  this.countryCode = null;
  this.name = null;
  if (args) {
    if (args.countryCode !== undefined && args.countryCode !== null) {
      this.countryCode = args.countryCode;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field countryCode is unset!');
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field name is unset!');
    }
  }
};
nexx.shared.CountryOption.prototype = {};
nexx.shared.CountryOption.prototype.read = function(input) {
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
        this.countryCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
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

nexx.shared.CountryOption.prototype.write = function(output) {
  output.writeStructBegin('CountryOption');
  if (this.countryCode !== null && this.countryCode !== undefined) {
    output.writeFieldBegin('countryCode', Thrift.Type.STRING, 1);
    output.writeString(this.countryCode);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

