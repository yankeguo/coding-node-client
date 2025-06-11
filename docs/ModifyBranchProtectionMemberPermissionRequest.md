# ModifyBranchProtectionMemberPermissionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowPush** | **boolean** | 是否直接推送 | [optional] [default to undefined]
**BranchRuleName** | **string** | 分支规则名称 | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径 | [optional] [default to undefined]
**UserGlobalKey** | **string** | 用户GlobalKey | [optional] [default to undefined]

## Example

```typescript
import { ModifyBranchProtectionMemberPermissionRequest } from './api';

const instance: ModifyBranchProtectionMemberPermissionRequest = {
    AllowPush,
    BranchRuleName,
    DepotPath,
    UserGlobalKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
