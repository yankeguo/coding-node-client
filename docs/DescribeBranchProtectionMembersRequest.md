# DescribeBranchProtectionMembersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BranchProtectionId** | **number** | 保护分支规则id | [default to undefined]
**DepotId** | **number** | 仓库id | [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepptPath二选一即可 | [optional] [default to undefined]

## Example

```typescript
import { DescribeBranchProtectionMembersRequest } from './api';

const instance: DescribeBranchProtectionMembersRequest = {
    BranchProtectionId,
    DepotId,
    DepotPath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
