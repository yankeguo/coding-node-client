# CodingCIPersonalExternalDepotData

获取个人仓库返回结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotList** | [**Array&lt;CodingCIPersonalExternalDepot&gt;**](CodingCIPersonalExternalDepot.md) | 仓库列表 | [optional] [default to undefined]
**IsBound** | **boolean** | 仓库类型是否被授权，如 Github 是否被授权 | [optional] [default to false]
**OwnerName** | **string** | 所有者用户名 | [optional] [default to '']

## Example

```typescript
import { CodingCIPersonalExternalDepotData } from './api';

const instance: CodingCIPersonalExternalDepotData = {
    DepotList,
    IsBound,
    OwnerName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
