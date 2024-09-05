# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.9.1](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.9.0...v1.9.1) (2023-12-11)


### Bug Fixes

* remove - in date export format to allow spreadsheet automatic type identification ([ccee6c1](https://github.com/codeworks-projects/pipo-core-backend/commit/ccee6c156cb0f87f54df8fb9dc959f9fc066e652))

## [1.9.0](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.8.0...v1.9.0) (2023-12-11)


### Features

* change date export format ([a4442ea](https://github.com/codeworks-projects/pipo-core-backend/commit/a4442ea796429c0432d0fae7cdfb2f36d6dbdabe))

## [1.8.0](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.7.1...v1.8.0) (2023-11-21)


### Features

* **metric:** change interger metrics value to decimals ([fed6147](https://github.com/codeworks-projects/pipo-core-backend/commit/fed6147909cf44ae279ffe267dde7841e273391e))
* **metric:** change time input to numerical timestamp ([d9159bb](https://github.com/codeworks-projects/pipo-core-backend/commit/d9159bb1c18abacbe6d4dbf503c12262b2a3ca45))

### [1.7.1](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.7.0...v1.7.1) (2023-11-10)


### Bug Fixes

* change export return value from string to object ([c477deb](https://github.com/codeworks-projects/pipo-core-backend/commit/c477deb56c992b55e944ac5b4ad9c30cf2591e95))

## [1.7.0](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.6.2...v1.7.0) (2023-11-10)


### Features

* add csv S3 uploader ([452484a](https://github.com/codeworks-projects/pipo-core-backend/commit/452484adbf5068f4b6084a5ac83c6ff3ab7c6df3))
* add csv writer ([4add567](https://github.com/codeworks-projects/pipo-core-backend/commit/4add567e12029baed61f6ef4d6d1cdf952175b25))
* add export metric function ([271a084](https://github.com/codeworks-projects/pipo-core-backend/commit/271a084bb362142d9a365bd469ef126fc1781cd7))
* change time export format ([38151ca](https://github.com/codeworks-projects/pipo-core-backend/commit/38151ca115baf3f9591f3c30fb0ef0d1d1595b13))
* csv writer util ([05e9f95](https://github.com/codeworks-projects/pipo-core-backend/commit/05e9f95e2a31e260b789e63b890d134b5f2897f4))


### Bug Fixes

* missing check on socket io for undefined sockets when pushing new metrics ([933f419](https://github.com/codeworks-projects/pipo-core-backend/commit/933f4197aea542c90ef384e519bb79c785894b14))

### [1.6.2](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.6.1...v1.6.2) (2023-11-03)


### Bug Fixes

* correct socket handling after user filter introduction ([1126808](https://github.com/codeworks-projects/pipo-core-backend/commit/11268083fb1eae9bdb0049ff3c7cf79c42bb38d0))

### [1.6.1](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.6.0...v1.6.1) (2023-11-03)

## [1.6.0](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.5.0...v1.6.0) (2023-11-03)


### Features

* **metric:** add user to socket ([69039fb](https://github.com/codeworks-projects/pipo-core-backend/commit/69039fbb2c33ed507e6c20f214e1eb565732a2b9))

## [1.5.0](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.4.2...v1.5.0) (2023-11-03)


### Features

* **metric:** add user retrieve for metrics ([1a8eac3](https://github.com/codeworks-projects/pipo-core-backend/commit/1a8eac3ca53fb494a23583ad0aff386f7f20249d))
* **metric:** add userid filter ([7213071](https://github.com/codeworks-projects/pipo-core-backend/commit/7213071f1d88d24ade8c4276526959445db146fc))

### [1.4.2](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.4.1...v1.4.2) (2023-10-31)


### Bug Fixes

* **metrics:** return metric ordered by time ([1f24aba](https://github.com/codeworks-projects/pipo-core-backend/commit/1f24aba584311a67ee3fefaf314b545f00d1ade7))

### [1.4.1](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.4.0...v1.4.1) (2023-10-20)

## [1.4.0](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.3.0...v1.4.0) (2023-10-09)


### Features

* add request body log ([21d4752](https://github.com/codeworks-projects/pipo-core-backend/commit/21d47521b17602353db9a7089eb51022a3eed51a))

## [1.3.0](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.2.1...v1.3.0) (2023-10-04)


### Features

* add variable to disable random data generation ([d80c869](https://github.com/codeworks-projects/pipo-core-backend/commit/d80c8696390e012420b4e8596908fccbe2fa8537))

### [1.2.1](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.2.0...v1.2.1) (2023-09-29)


### Bug Fixes

* **cron:** use integer in post call ([f010632](https://github.com/codeworks-projects/pipo-core-backend/commit/f010632e207f5bf9943fe6433995435716df7164))

## [1.2.0](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.1.5...v1.2.0) (2023-09-29)


### Features

* add cron to update metrics ([3245acd](https://github.com/codeworks-projects/pipo-core-backend/commit/3245acd4d28bdb855691e252d42813f0425a33c8))

### [1.1.5](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.1.4...v1.1.5) (2023-09-28)


### Bug Fixes

* typo in data-access index ([608d23d](https://github.com/codeworks-projects/pipo-core-backend/commit/608d23d69737ebdafda4e82abcbef643bff87559))

### [1.1.4](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.1.3...v1.1.4) (2023-09-28)

### [1.1.3](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.1.2...v1.1.3) (2023-09-28)

### [1.1.2](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.1.1...v1.1.2) (2023-09-28)

### [1.1.1](https://github.com/codeworks-projects/pipo-core-backend/compare/v1.1.0...v1.1.1) (2023-09-28)

## 1.1.0 (2023-09-28)


### Features

* add button and note in MetricGraphData and create time timestamp from HH:mm format ([ba2d835](https://github.com/codeworks-projects/pipo-core-backend/commit/ba2d8354727074484e10475720e82cb7af0cb1be))
* add metric servie ([0aa439e](https://github.com/codeworks-projects/pipo-core-backend/commit/0aa439ea258cd4d0a9864bc80d12eac4ac798942))
* add mock generator script ([462be06](https://github.com/codeworks-projects/pipo-core-backend/commit/462be06557c9994c72ec453bfbc21ac91d10c820))
* add seconds to created time timestamp ([d9bf9a3](https://github.com/codeworks-projects/pipo-core-backend/commit/d9bf9a31c4eeb43b82f333672b0578119d7d7398))
* basic socket.io implementation ([8773b6d](https://github.com/codeworks-projects/pipo-core-backend/commit/8773b6df378a95dd59a37de3baec8dda39a96fe5))
* **data-access:** metric repository ([07417cc](https://github.com/codeworks-projects/pipo-core-backend/commit/07417cc9d8f760a9e23b34c2cf25cb8a7c925b42))
* **metric:** add metric routes and controllers ([748aed2](https://github.com/codeworks-projects/pipo-core-backend/commit/748aed22922b4fdcb10668592245c3e76537985f))
* **metric:** sett typescript types ([28f71be](https://github.com/codeworks-projects/pipo-core-backend/commit/28f71be19ca7b63e435fe45acd22301a6dce944d))
* mock generator update column name and start time ([6fc7380](https://github.com/codeworks-projects/pipo-core-backend/commit/6fc7380ac36531d32deec83ca2a024fcfa484696))
* schema definition ([e603e9a](https://github.com/codeworks-projects/pipo-core-backend/commit/e603e9ac388f2ce9a645985db2782c6daa20ba71))


### Bug Fixes

* broken generate types script ([2771e33](https://github.com/codeworks-projects/pipo-core-backend/commit/2771e3367ebf93b6034c145d882002787d0719df))
* **data-access:** metric type broken ([ba5acac](https://github.com/codeworks-projects/pipo-core-backend/commit/ba5acac32fc3c6049b81b66f1767130d229199a9))
* **metric:** change metric repository return types ([b28bbe6](https://github.com/codeworks-projects/pipo-core-backend/commit/b28bbe60199ca6db5a7ccf41d3aeccd5e3c298f4))

## [2.0.0](https://github.com/codeworks-projects/template-nodejs-apollo/compare/v1.0.2...v2.0.0) (2022-12-10)


### Features

* activate mocks and improve other code parts ([98c39a0](https://github.com/codeworks-projects/template-nodejs-apollo/commit/98c39a08ad276dcd798d1941f00a3541d92d5b06))
* add DB_URL to .env.example ([42333b3](https://github.com/codeworks-projects/template-nodejs-apollo/commit/42333b3ceb1df7c5089de73f52c710bfe9d775bf))
* add logging + middleware ([c903f01](https://github.com/codeworks-projects/template-nodejs-apollo/commit/c903f01c395f0ffdec6c0d2fa8c6cece5545f993))
* add URL as GraphQL scalar type ([47f199c](https://github.com/codeworks-projects/template-nodejs-apollo/commit/47f199cee300e64e89432cfc5ac44c28410caef2))
* add users with auth middleware ([5e94d0b](https://github.com/codeworks-projects/template-nodejs-apollo/commit/5e94d0be78eae37f5d9dab21e4771bc0cb709f26))
* **api:** hello world example test ([d060966](https://github.com/codeworks-projects/template-nodejs-apollo/commit/d060966e1655835193994a841f2af50001f38351))
* clean example files ([cb6a556](https://github.com/codeworks-projects/template-nodejs-apollo/commit/cb6a5564e914546a4f62c613d2cb31cf577793ac))
* **db:** add virtual fields and other getters ([2f29ac1](https://github.com/codeworks-projects/template-nodejs-apollo/commit/2f29ac1d240f3fe5f4ae8430833b2cdb45ecfcf6))
* run example subscription ([a206f00](https://github.com/codeworks-projects/template-nodejs-apollo/commit/a206f00bdc9a9d496993f00c2c0cf0b59a6b7a61))
* upgrade ([1d8da72](https://github.com/codeworks-projects/template-nodejs-apollo/commit/1d8da72b7d822776e8c5174a4e28c50e6de737d1))
* upgrade to typescript ([9b7fdc0](https://github.com/codeworks-projects/template-nodejs-apollo/commit/9b7fdc017cdf4bf6c504f7d1dc5013f71b9836ce))
* **user:** setup tests ([671012c](https://github.com/codeworks-projects/template-nodejs-apollo/commit/671012c9a7ae5402101d325bb5e8c91993ac31cf))


### Bug Fixes

* **date:** serialization ([0647ca2](https://github.com/codeworks-projects/template-nodejs-apollo/commit/0647ca2d078dfcb106514e3e9a7a19846c627bd9))
* remove comment ([bafa8df](https://github.com/codeworks-projects/template-nodejs-apollo/commit/bafa8dfb744c561241f4b373cf9085a725a7e969))
* **sendgrid:** mock entirely on test mode ([01c3547](https://github.com/codeworks-projects/template-nodejs-apollo/commit/01c354793ad980c919892bd4642f90404c7aa6bf))

### [1.0.2](https://github.com/codeworks-projects/template-nodejs-apollo/compare/v1.0.1...v1.0.2) (2022-01-22)

### [1.0.1](https://github.com/codeworks-projects/template-nodejs-apollo/compare/v0.1.0...v1.0.1) (2022-01-18)

## [0.1.0](https://github.com/codeworks-projects/template-nodejs-apollo/compare/v0.0.2...v0.1.0) (2022-01-18)


### ⚠ BREAKING CHANGES

* Fully working template repo

### Features

* add commitizen ([aa87752](https://github.com/codeworks-projects/template-nodejs-apollo/commit/aa87752ad38568d69745aae667678c706f798c03))


* add link to development guide ([4721238](https://github.com/codeworks-projects/template-nodejs-apollo/commit/472123828052f5257e7476159b3ac0c89e0f4207))

### 0.0.2 (2022-01-17)


### Features

* add .env.example ([e8fa9ea](https://github.com/codeworks-projects/template-nodejs-apollo/commit/e8fa9eae1a79da13e8ec9d74a5a76fff52f8f4c3))
* add custom tools in shell.nix ([2f0750a](https://github.com/codeworks-projects/template-nodejs-apollo/commit/2f0750abfdec0f0486aaea02af043840f2246578))
* add dev dependencies ([9fc01d1](https://github.com/codeworks-projects/template-nodejs-apollo/commit/9fc01d1226d7da02fd297c1e3834da1afa62c434))
* add git pull as nix shell hook ([40b2c5f](https://github.com/codeworks-projects/template-nodejs-apollo/commit/40b2c5fdf49de9b0da8cd1170694cec8ca1c8756))
* basic working project ([b088354](https://github.com/codeworks-projects/template-nodejs-apollo/commit/b08835447481b187cc0421e895ccbce9bb9fff2b))
* make project run inside nix shell ([4bb6619](https://github.com/codeworks-projects/template-nodejs-apollo/commit/4bb6619b33b2c0967dc8d38897f478d31b0cf0bf))
* run yarn install as shell hook ([46b617a](https://github.com/codeworks-projects/template-nodejs-apollo/commit/46b617a31ed2e4150b4729aa6335a753706c40b6))
* separate graphql and rest api initialization ([980ee7e](https://github.com/codeworks-projects/template-nodejs-apollo/commit/980ee7e90b54b7156ab2995fcc9e8e525a80e101))
* update README ([0642efd](https://github.com/codeworks-projects/template-nodejs-apollo/commit/0642efd4af1d5e83d48047ec67df3b5842ada91b))


### Bug Fixes

* date graophql scalar resolver ([aeb69d8](https://github.com/codeworks-projects/template-nodejs-apollo/commit/aeb69d8684b186749d7142ee0043bf03b472b1b7))
