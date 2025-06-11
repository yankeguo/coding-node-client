# DescribeUserGroupsResponsePageData

用户组列表的分页数据

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageNumber** | **number** | 页码 | [optional] [default to undefined]
**PageSize** | **number** | 每页条数 | [optional] [default to undefined]
**TotalCount** | **number** | 总条数 | [optional] [default to undefined]
**UserGroupList** | [**Array&lt;UserGroup&gt;**](UserGroup.md) | 用户组列表 | [optional] [default to undefined]

## Example

```typescript
import { DescribeUserGroupsResponsePageData } from './api';

const instance: DescribeUserGroupsResponsePageData = {
    PageNumber,
    PageSize,
    TotalCount,
    UserGroupList,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
