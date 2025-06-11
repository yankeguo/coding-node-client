# DescribeGitBranchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BranchName** | **string** | 分支名称 | [optional] [default to undefined]
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，与DepotId选其一就可以 | [optional] [default to undefined]

## Example

```typescript
import { DescribeGitBranchRequest } from './api';

const instance: DescribeGitBranchRequest = {
    BranchName,
    DepotId,
    DepotPath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
