# CodingCIProjectDepot

Depot 数据结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Authorized** | **boolean** | 外部仓库是否被关联 | [optional] [default to false]
**DepotHttpsUrl** | **string** | 仓库 Https 地址 | [optional] [default to '']
**DepotSshUrl** | **string** | 仓库 Ssh 地址 | [optional] [default to '']
**DepotType** | **string** | 仓库类型 | [optional] [default to '']
**Id** | **number** | 仓库 Id | [optional] [default to undefined]
**IsDefault** | **boolean** | 是否是默认显示第一位的仓库 | [optional] [default to false]
**Name** | **string** | 仓库名称 | [optional] [default to '']
**OpenModule** | **string** | 无用字段 | [optional] [default to '']

## Example

```typescript
import { CodingCIProjectDepot } from './api';

const instance: CodingCIProjectDepot = {
    Authorized,
    DepotHttpsUrl,
    DepotSshUrl,
    DepotType,
    Id,
    IsDefault,
    Name,
    OpenModule,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
