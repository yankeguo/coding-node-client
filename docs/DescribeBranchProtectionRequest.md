# DescribeBranchProtectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BranchProtectionId** | **number** | 保护分支规则id | [optional] [default to undefined]
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]

## Example

```typescript
import { DescribeBranchProtectionRequest } from './api';

const instance: DescribeBranchProtectionRequest = {
    BranchProtectionId,
    DepotId,
    DepotPath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
