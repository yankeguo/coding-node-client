# DescribeGrantObjectsOnResourcePageData

资源下授权体列表分页数据

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GrantObjectList** | [**Array&lt;GrantObjectInfo&gt;**](GrantObjectInfo.md) | 授权资源列表 | [optional] [default to undefined]
**PageNumber** | **number** | 请求页数 | [default to undefined]
**PageSize** | **number** | 请求条数 | [default to undefined]
**TotalCount** | **number** | 总条数 | [default to undefined]

## Example

```typescript
import { DescribeGrantObjectsOnResourcePageData } from './api';

const instance: DescribeGrantObjectsOnResourcePageData = {
    GrantObjectList,
    PageNumber,
    PageSize,
    TotalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
