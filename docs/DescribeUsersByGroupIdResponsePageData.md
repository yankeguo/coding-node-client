# DescribeUsersByGroupIdResponsePageData

用户列表分页数据

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageNumber** | **number** | 页码 | [default to undefined]
**PageSize** | **number** | 每页条数 | [default to undefined]
**TotalCount** | **number** | 总条数 | [default to undefined]
**UserDataList** | [**Array&lt;UserData&gt;**](UserData.md) | 用户组列表 | [optional] [default to undefined]

## Example

```typescript
import { DescribeUsersByGroupIdResponsePageData } from './api';

const instance: DescribeUsersByGroupIdResponsePageData = {
    PageNumber,
    PageSize,
    TotalCount,
    UserDataList,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
