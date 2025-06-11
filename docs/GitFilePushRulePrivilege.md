# GitFilePushRulePrivilege

git 文件推送规则特权者

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsDeny** | **boolean** | 拒绝推送文件 | [optional] [default to false]
**IsRole** | **boolean** | 特权者是角色 | [optional] [default to false]
**IsUser** | **boolean** | 特权者是用户 | [optional] [default to false]
**Role** | [**GitFilePushRuleRole**](GitFilePushRuleRole.md) |  | [optional] [default to undefined]
**User** | [**GitFilePushRuleUser**](GitFilePushRuleUser.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GitFilePushRulePrivilege } from './api';

const instance: GitFilePushRulePrivilege = {
    IsDeny,
    IsRole,
    IsUser,
    Role,
    User,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
