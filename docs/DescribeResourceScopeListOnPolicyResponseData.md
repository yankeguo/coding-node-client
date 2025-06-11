# DescribeResourceScopeListOnPolicyResponseData

查询指定权限组的可用资源范围（分页）的列表数据

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageNumber** | **number** | 页码 | [optional] [default to undefined]
**PageSize** | **number** | 每页条数 | [optional] [default to undefined]
**PolicyResourceScopeList** | [**Array&lt;PolicyResourceScopeInfo&gt;**](PolicyResourceScopeInfo.md) | 权限组可用资源范围列表 | [optional] [default to undefined]
**TotalCount** | **number** | 总条数 | [optional] [default to undefined]

## Example

```typescript
import { DescribeResourceScopeListOnPolicyResponseData } from './api';

const instance: DescribeResourceScopeListOnPolicyResponseData = {
    PageNumber,
    PageSize,
    PolicyResourceScopeList,
    TotalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
