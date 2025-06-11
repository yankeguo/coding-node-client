# DescribeGitBranchesByShaRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**Sha** | **string** | sha值 | [default to undefined]

## Example

```typescript
import { DescribeGitBranchesByShaRequest } from './api';

const instance: DescribeGitBranchesByShaRequest = {
    DepotId,
    DepotPath,
    Sha,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
