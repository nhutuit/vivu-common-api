/**
 * @Author: Tran Van Nhut <nhutdev>
 * @Date:   2017-02-23T15:21:54+07:00
 * @Email:  tranvannhut4495@gmail.com
* @Last modified by:   nhutdev
* @Last modified time: 2017-03-13T12:04:13+07:00
 */


'use strict';

const Joi = require('joi');
const districtSchema = require('./district');


let responseMany = Joi.object({
    provinceCode: Joi.string(),
    countryCode: Joi.string(),
    displayName: Joi.string(),
    districts: Joi.array().items(districtSchema.responseMany),
  }),
  response = Joi.object({
    provinceCode: Joi.string(),
    countryCode: Joi.string(),
    displayName: Joi.string()
  });

module.exports = {
  response: response,
  responseMany: responseMany
}
