'use strict'
const {log, requestFactory} = require('cozy-konnector-libs')
const moment = require('moment-timezone')
moment.locale('fr')
moment.tz.setDefault('Europe/Paris')

// TODO Change this url
const baseUrl = `https://espace-client.lanef.com/templates/logon/`

const rq = requestFactory({
  jar: true,
  json: false,
  cheerio: true
})

module.exports.login = (fields) => {
  log('info', 'Logging in')

  log('warn', 'login not implemented')

  // TODO
  // You can use github@carrieje/cozy-konnector-connection

  return Promise.resolve(null)
}

module.exports.parseAccounts = ($) => {
  log('info', 'Gettings accounts')

  log('warn', 'parseAccounts not implemented')
  const accounts = []

  // TODO
  // Fill accounts with as much accounts objects as needed
  // github@cozy/cozy-doctypes:/docs/io.cozy.bank.md#iocozybankaccounts

  return Promise.resolve(accounts)
}

module.exports.fetchIBANs = (accounts) => {
  log('info', 'Fetching IBANs')

  log('warn', 'fetchIBANs not implemented')

  return Promise.resolve(accounts)
}

module.exports.fetchOperations = (account) => {
  log('info', `Gettings operations for ${account.label} over the last 10 years`)

  log('warn', 'fetchOperations not implemented')
  const operations = []

  // TODO
  // Fill operations with as much operation objects as needed
  // github@cozy/cozy-doctypes:/docs/io.cozy.bank.md#iocozybankoperations

  return Promise.resolve(operations)
}

function parseAmount (amount) {
  return parseFloat(amount.trim().replace(/[^0-9,+-]/g, '').replace(',', '.'))
}

function parseDate (date) {
  // TODO change format according to which is used on your website
  return moment.tz(date, 'D MMM YYYY', 'Europe/Paris').format()
}
