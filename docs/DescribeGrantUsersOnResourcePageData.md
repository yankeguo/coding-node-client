# DescribeGrantUsersOnResourcePageData

指定资源下授权的用户列表分页数据

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalCount** | **number** | 总条数 | [default to 0]
**PageSize** | **number** | 请求条数 | [default to 0]
**PageNumber** | **number** | 请求页数 | [default to 0]
**UserDataList** | [**Array&lt;UserData&gt;**](UserData.md) |  | [default to undefined]

## Example

```typescript
import { DescribeGrantUsersOnResourcePageData } from './api';

const instance: DescribeGrantUsersOnResourcePageData = {
    TotalCount,
    PageSize,
    PageNumber,
    UserDataList,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
