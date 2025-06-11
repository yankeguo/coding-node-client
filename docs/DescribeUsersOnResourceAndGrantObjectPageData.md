# DescribeUsersOnResourceAndGrantObjectPageData

指定资源下某个授权体中用户列表分页数据

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageNumber** | **number** | 请求页数 | [default to undefined]
**PageSize** | **number** | 请求条数 | [default to undefined]
**TotalCount** | **number** | 总条数 | [default to undefined]
**UserDataList** | [**Array&lt;UserData&gt;**](UserData.md) | 用户信息列表 | [optional] [default to undefined]

## Example

```typescript
import { DescribeUsersOnResourceAndGrantObjectPageData } from './api';

const instance: DescribeUsersOnResourceAndGrantObjectPageData = {
    PageNumber,
    PageSize,
    TotalCount,
    UserDataList,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
