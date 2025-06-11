# DescribePoliciesOnResourceTypeResponsePageData

获取指定资源类型对应的权限组列表的数据

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageNumber** | **number** | 页码 | [optional] [default to undefined]
**PageSize** | **number** | 每页条数 | [optional] [default to undefined]
**PolicyList** | [**Array&lt;PolicyInfo&gt;**](PolicyInfo.md) | 权限组列表 | [optional] [default to undefined]
**TotalCount** | **number** | 总条数 | [optional] [default to undefined]

## Example

```typescript
import { DescribePoliciesOnResourceTypeResponsePageData } from './api';

const instance: DescribePoliciesOnResourceTypeResponsePageData = {
    PageNumber,
    PageSize,
    PolicyList,
    TotalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
