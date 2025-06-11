# DescribeUsersOnResourceAndGrantObjectGrantInfo

资源下的授权对象中的用户信息请求参数

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GrantObjectId** | **string** | 授权对象 ID | [default to '']
**GrantScope** | **string** | 授权对象类型：USER,USER_GROUP,DEPARTMENT | [default to '']

## Example

```typescript
import { DescribeUsersOnResourceAndGrantObjectGrantInfo } from './api';

const instance: DescribeUsersOnResourceAndGrantObjectGrantInfo = {
    GrantObjectId,
    GrantScope,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
