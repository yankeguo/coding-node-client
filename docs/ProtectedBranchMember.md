# ProtectedBranchMember

保护分支用户信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GlobalKey** | **string** | 成员global_key | [optional] [default to '']
**HasPushAccess** | **boolean** | 是否允许强制推送 | [optional] [default to false]
**HasUpdateAccess** | **boolean** | 是否允许合并修改分支 | [optional] [default to false]
**Name** | **string** | 成员姓名 | [optional] [default to '']

## Example

```typescript
import { ProtectedBranchMember } from './api';

const instance: ProtectedBranchMember = {
    GlobalKey,
    HasPushAccess,
    HasUpdateAccess,
    Name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
