# DescribeProjectDepotsData

DescribeProjectDepots 返回数据结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotList** | [**Array&lt;CodingCIProjectDepot&gt;**](CodingCIProjectDepot.md) | 仓库信息列表 | [optional] [default to undefined]
**IsBound** | **boolean** | 仓库类型是否被授权，如 Github 是否被授权 | [optional] [default to false]

## Example

```typescript
import { DescribeProjectDepotsData } from './api';

const instance: DescribeProjectDepotsData = {
    DepotList,
    IsBound,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
