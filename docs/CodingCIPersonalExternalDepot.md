# CodingCIPersonalExternalDepot

个人外部仓库返回结构

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
**OpenModule** | **string** | 请使用 Authorized 代替判断仓库是否关联，该仓库是否 CI 可用，如果可用返回值为 continue_integration，如果仓库类型是 CODING 那么这个值永远是continue_integration | [optional] [default to '']
**OwnerName** | **string** | 所有者用户名 | [optional] [default to '']
**SourceDepotId** | **number** | 源代码仓库 id （如果是 coding 跨项目代码仓库，此字段记录代码仓库的实际 id ） | [optional] [default to undefined]

## Example

```typescript
import { CodingCIPersonalExternalDepot } from './api';

const instance: CodingCIPersonalExternalDepot = {
    Authorized,
    DepotHttpsUrl,
    DepotSshUrl,
    DepotType,
    Id,
    IsDefault,
    Name,
    OpenModule,
    OwnerName,
    SourceDepotId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
