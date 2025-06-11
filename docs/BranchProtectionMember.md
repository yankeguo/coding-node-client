# BranchProtectionMember

保护分支规则管理员信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowPush** | **boolean** | 是否允许直接推送 | [optional] [default to false]
**GlobalKey** | **string** | 用户globalkey | [optional] [default to '']
**Name** | **string** | 名称 | [optional] [default to '']

## Example

```typescript
import { BranchProtectionMember } from './api';

const instance: BranchProtectionMember = {
    AllowPush,
    GlobalKey,
    Name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
