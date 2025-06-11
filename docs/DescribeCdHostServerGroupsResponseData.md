# DescribeCdHostServerGroupsResponseData

DescribeCdHostServerGroupsResponseData 结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HostServerGroups** | [**Array&lt;HostServerGroup&gt;**](HostServerGroup.md) | 主机组列表 | [optional] [default to undefined]
**PageNumber** | **number** | 页码 | [optional] [default to undefined]
**PageSize** | **number** | 每页条数 | [optional] [default to undefined]
**TotalPage** | **number** | 总共页数 | [optional] [default to undefined]
**TotalRow** | **number** | 总共条数 | [optional] [default to undefined]

## Example

```typescript
import { DescribeCdHostServerGroupsResponseData } from './api';

const instance: DescribeCdHostServerGroupsResponseData = {
    HostServerGroups,
    PageNumber,
    PageSize,
    TotalPage,
    TotalRow,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
