# ModifyDepotFilePushRuleDenyPrivilegeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotPath** | **string** | 仓库路径 | [default to undefined]
**FilePushRuleId** | **number** | 文件推送规则 ID | [default to undefined]
**IsDeny** | **boolean** | 拒绝推送 | [default to undefined]
**IsRole** | **boolean** | 特权者是角色（IsUser和IsRole有且只能有一个为true） | [default to undefined]
**IsUser** | **boolean** | 特权者是用户（IsUser和IsRole有且只能有一个为true） | [default to undefined]
**RoleId** | **number** | 角色 ID | [optional] [default to undefined]
**UserGlobalKey** | **string** | 用户全局 key | [default to undefined]

## Example

```typescript
import { ModifyDepotFilePushRuleDenyPrivilegeRequest } from './api';

const instance: ModifyDepotFilePushRuleDenyPrivilegeRequest = {
    DepotPath,
    FilePushRuleId,
    IsDeny,
    IsRole,
    IsUser,
    RoleId,
    UserGlobalKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
